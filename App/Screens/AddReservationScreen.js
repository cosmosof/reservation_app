import React from 'react';
import {Text, View, KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';
import moment from 'moment';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Mutation} from 'react-apollo';
import DatePicker from 'react-native-datepicker';
import {CREATE_RESERVATIONS} from '../API/Mutations';
import Label from '../Components/Common/Label';
import InputLabel from '../Components/AddReservationScreen/InputLabel';
import Input from '../Components/AddReservationScreen/Input';
import AlertMessage from '../Components/Common/AlertMessage';
import Button from '../Components/Common/Button';

import styles from './Styles/AddReservationStyles';

const minDate = moment().toISOString();

export default class AddReservationScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Label
      textStyle={styles.navbarHeader}
      title="Add New Reservations"
                 />,
  };

  state = {
    success: false,
    error: false,
  };

  handleNewRequest = (el) => {
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
  render() {
    const {
      border,
      container,
      KeyboardAvoidingViewContainer,
      buttonTitleStyle,
      inputRow,
      button,
      dateInput,
      disabled,
      placeholderText,
      dateText,
      errorText,
      inputStyle,
      inputColumn,
    } = styles;
    const {success, error} = this.state;

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
                onPress={() => this.handleNewRequest('error')}
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
                onPress={() => this.handleNewRequest('success')}
                textStyle={buttonTitleStyle}
                title="Add Another"
              />
            </View>
          ) : (
            <Mutation
              mutation={CREATE_RESERVATIONS}
              onCompleted={() =>
                this.setState(({success}) => ({
                  success: !success,
                }))
              }
              onError={() =>
                this.setState(({error}) => ({
                  error: !error,
                }))
              }
            >
              {(createReservation, {data, loading}) => {
                if (loading) return <AlertMessage title="Processing..." />;
                return (
                  <View>
                    <Formik
                      initialValues={{
                        name: '',
                        hotelName: '',
                        arrivalDate: '',
                        departureDate: '',
                      }}
                      onSubmit={(val) =>
                        createReservation({
                          variables: {
                            data: {
                              name: val.name,
                              hotelName: val.hotelName,
                              departureDate: val.arrivalDate,
                              arrivalDate: val.departureDate,
                            },
                          },
                        })
                      }
                      render={({
                        values,
                        handleSubmit,
                        setFieldValue,
                        errors,
                        touched,
                        setFieldTouched,
                        isValid,
                        isSubmitting,
                      }) => {
                        return (
                          <React.Fragment>
                            <View style={inputRow}>
                              <InputLabel
                                containerStyle={{marginLeft: 10}}
                                label="Name"
                              />
                              <Input
                                autoCapitalize="none"
                                error={touched.name && errors.name}
                                inputStyles={inputStyle}
                                label="enter a name"
                                name="name"
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                value={values.name}
                              />
                            </View>
                            <View style={inputRow}>
                              <InputLabel
                                containerStyle={{marginLeft: 10}}
                                label="Hotel Name"
                              />
                              <Input
                                autoCapitalize="none"
                                error={touched.hotelName && errors.hotelName}
                                inputStyles={inputStyle}
                                label="enter a hotel name"
                                name="hotelName"
                                onChange={setFieldValue}
                                onTouch={setFieldTouched}
                                value={values.hotelName}
                              />
                            </View>
                            <View style={inputRow}>
                              <InputLabel
                                containerStyle={{marginLeft: 10}}
                                label="Arrival Date"
                              />
                              <View style={inputColumn}>
                                <DatePicker
                                  cancelBtnText="Cancel"
                                  confirmBtnText="Confirm"
                                  customStyles={{
                                    dateInput: {...dateInput},
                                    placeholderText: {...placeholderText},
                                    dateText: {...dateText},
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
                             
                            </View>
                            <View style={inputRow}>
                                <InputLabel
                                  containerStyle={{marginLeft: 10}}
                                  label="Departure Date"
                                />
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
                            </View>
                            <Button
                              buttonStyle={button}
                              disabled={!isValid || isSubmitting}
                              onPress={handleSubmit}
                              textStyle={buttonTitleStyle}
                              title="Add"
                            />
                          </React.Fragment>
                        );
                      }}
                      validationSchema={Yup.object().shape({
                        name: Yup.string().required('Name is required'),
                        hotelName: Yup.string().required('Hotel name is required'),
                        arrivalDate: Yup.string().required('Arrival date is required'),
                        departureDate: Yup.string().required('Departure date is required'),
                      })}
                    />
                  </View>
                );
              }}
            </Mutation>
          )}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
