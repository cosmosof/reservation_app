import React from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView, Text, View} from 'react-native';
import moment from 'moment';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Mutation} from 'react-apollo';
import DatePicker from 'react-native-datepicker';
import AlertMessage from '../Components/Common/AlertMessage';
import Button from '../Components/Common/Button';
import InputLabel from '../Components/AddReservationScreen/InputLabel';
import Input from '../Components/AddReservationScreen/Input';
import Label from '../Components/Common/Label';
import Row from '../Components/Common/Row';
import {CREATE_RESERVATIONS} from '../Api/Mutations';

import styles from './Styles/AddReservationStyles';

export default class AddReservationScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Label
      textStyle={styles.navbarHeader}
      title="Add New Reservations"
                 />,
  };

  state = {
    error: false,
    success: false,
    minDate: moment().toISOString(),
  };

  handleButtonAction = (el) => {
    switch (true) {
    case el === 'success':
      this.setState(({success}) => ({
        success: !success,
      }));
      break;
    case el === 'error':
      this.setState(({error}) => ({
        error: !error,
      }));
      break;
    default:
      break;
    }
  };
  handleOnCompleted = () => {
    this.setState(({success}) => ({success: !success}));
  };
  handleOnError = () => {
    this.setState(({error}) => ({error: !error}));
  };
  render() {
    const {
      border,
      buttonTitleStyle,
      button,
      container,
      dateInput,
      disabled,
      dateText,
      errorText,
      inputStyle,
      inputColumn,
      KeyboardAvoidingViewContainer,
      placeholderText,
      row,
    } = styles;
    const {error, minDate, success} = this.state;

    return (
      <SafeAreaView style={container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' && 'padding'}
          enabled
          style={KeyboardAvoidingViewContainer}
        >
          {error && (
            <View>
              <AlertMessage title="An error cocured, please try again..." />
              <Button
                buttonStyle={button}
                onPress={() => this.handleButtonAction('error')}
                textStyle={buttonTitleStyle}
                title="Try Again"
              />
            </View>
          )}
          {success ? (
            <View>
              <AlertMessage title="Reservation succesfully added..." />
              <Button
                buttonStyle={button}
                onPress={() => this.handleButtonAction('success')}
                textStyle={buttonTitleStyle}
                title="Add Another"
              />
            </View>
          ) : (
            <Mutation
              mutation={CREATE_RESERVATIONS}
              onCompleted={this.handleOnCompleted}
              onError={this.handleOnError}
            >
              {(createReservation, {data, loading}) => {
                if (loading) return <AlertMessage title="Processing..." />;
                return (
                  <Formik
                    initialValues={{
                      name: '',
                      arrivalDate: '',
                      departureDate: '',
                      hotelName: '',
                    }}
                    onSubmit={({name, arrivalDate, departureDate, hotelName}) =>
                      createReservation({
                        variables: {
                          data: {
                            name: name,
                            arrivalDate: departureDate,
                            departureDate: arrivalDate,
                            hotelName: hotelName,
                          },
                        },
                      })
                    }
                    render={({
                      errors,
                      isValid,
                      isSubmitting,
                      handleSubmit,
                      setFieldValue,
                      setFieldTouched,
                      touched,
                      values,
                    }) => {
                      return (
                        <React.Fragment>
                          <Row style={row}>
                            <InputLabel label="Name" />
                            <Input
                              error={touched.name && errors.name}
                              inputStyles={inputStyle}
                              label="enter a name"
                              name="name"
                              onChange={setFieldValue}
                              onTouch={setFieldTouched}
                              value={values.name}
                            />
                          </Row>
                          <Row style={row}>
                            <InputLabel label="Hotel Name" />
                            <Input
                              error={touched.hotelName && errors.hotelName}
                              inputStyles={inputStyle}
                              label="enter a hotel name"
                              name="hotelName"
                              onChange={setFieldValue}
                              onTouch={setFieldTouched}
                              value={values.hotelName}
                            />
                          </Row>
                          <Row style={row}>
                            <InputLabel label="Arrival Date" />
                            <View style={inputColumn}>
                              <DatePicker
                                cancelBtnText="Cancel"
                                confirmBtnText="Confirm"
                                customStyles={{
                                  dateInput: {...dateInput},
                                  dateText: {...dateText},
                                  placeholderText: {...placeholderText},
                                }}
                                date={values.arrivalDate}
                                minDate={minDate}
                                mode="date"
                                onDateChange={(date) => setFieldValue('arrivalDate', date)}
                                onOpenModal={() => setFieldTouched('arrivalDate', true)}
                                placeholder="select a arrival date"
                                showIcon={false}
                                style={[inputStyle, border]}
                              />
                              {touched.arrivalDate && errors.arrivalDate && (
                                <Text style={errorText}>Arrival date is required</Text>
                              )}
                            </View>
                          </Row>
                          <Row style={row}>
                            <InputLabel label="Departure Date" />
                            <View style={inputColumn}>
                              <DatePicker
                                cancelBtnText="Cancel"
                                confirmBtnText="Confirm"
                                customStyles={{
                                  dateInput: {...dateInput},
                                  disabled: {...disabled},
                                  placeholderText: {...placeholderText},
                                  dateText: {...dateText},
                                }}
                                date={values.departureDate}
                                disabled={!values.arrivalDate}
                                minDate={moment(values.arrivalDate)
                                  .add(1, 'd')
                                  .toISOString()}
                                mode="date"
                                onDateChange={(date) => setFieldValue('departureDate', date)}
                                onOpenModal={() => setFieldTouched('departureDate', true)}
                                placeholder="select a departure date"
                                showIcon={false}
                                style={[inputStyle, border]}
                              />
                              {touched.departureDate && errors.departureDate && (
                                <Text style={errorText}>Departure date is required</Text>
                              )}
                            </View>
                          </Row>
                          <Row style={row}>
                            <Button
                              buttonStyle={button}
                              disabled={!isValid || isSubmitting}
                              onPress={handleSubmit}
                              textStyle={buttonTitleStyle}
                              title="Add"
                            />
                          </Row>
                        </React.Fragment>
                      );
                    }}
                    validationSchema={Yup.object().shape({
                      name: Yup.string().required('Name is required'),
                      arrivalDate: Yup.string().required('Arrival date is required'),
                      departureDate: Yup.string().required('Departure date is required'),
                      hotelName: Yup.string().required('Hotel name is required'),
                    })}
                  />
                );
              }}
            </Mutation>
          )}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
