import React from 'react';
import {Text, View, KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';
import moment from 'moment';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Mutation} from 'react-apollo';
import {Button} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import {CREATE_RESERVATIONS} from '../Api/Mutations';
import Label from '../Components/Common/Label';
import InputLabel from '../Components/AddReservationScreen/InputLabel';
import InputSection from '../Components/AddReservationScreen/InputSection';
import AlertMessage from '../Components/Common/AlertMessage';

import styles from './Styles/AddReservationStyles';

const minDate = moment().toISOString();

export default class AddReservationScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Label title="Add New Reservations" textStyle={styles.navbarHeader} />,
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
      buttonbackgroundColor,
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
                backgroundColor={buttonbackgroundColor}
                buttonStyle={button}
                onPress={() => this.handleNewRequest('error')}
                title="Try Again"
                titleStyle={buttonTitleStyle}
              />
            </View>
          )}
          {success ? (
            <View>
              <AlertMessage title="Reservation succesfully added..." />
              <Button
                backgroundColor={buttonbackgroundColor}
                buttonStyle={button}
                onPress={() => this.handleNewRequest('success')}
                title="Add Another"
                titleStyle={buttonTitleStyle}
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
                              <InputSection
                                autoCapitalize="none"
                                containerStyle={{width: 220}}
                                error={touched.name && errors.name}
                                inputContainerStyle={{height: 40}}
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
                              <InputSection
                                autoCapitalize="none"
                                containerStyle={{width: 220}}
                                error={touched.hotelName && errors.hotelName}
                                inputContainerStyle={{height: 40}}
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
                                style={{width: 220}}
                              />
                            </View>
                            {touched.arrivalDate && errors.arrivalDate && (
                              <Text style={errorText}>Arrival date is required</Text>
                            )}
                            <View style={inputRow}>
                              <InputLabel
                                containerStyle={{marginLeft: 10}}
                                label="Departure Date"
                              />
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
                                style={{width: 220, height: 36}}
                              />
                            </View>
                            {touched.departureDate && errors.departureDate && (
                              <Text style={errorText}>Departure date is required</Text>
                            )}
                            <Button
                              backgroundColor={buttonbackgroundColor}
                              buttonStyle={button}
                              disabled={!isValid || isSubmitting}
                              loading={isSubmitting}
                              onPress={handleSubmit}
                              title="Add"
                              titleStyle={buttonTitleStyle}
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
