import React from "react";
import { Text, Platform } from "react-native";
import PropTypes from "prop-types";
import styles from './Styles/InputLabelStyles'

export default (InputLabel = ({ label, containerStyle }) => {
  return (
    <Text
      style={{
        ...containerStyle,
        ...styles.container 
      }}
    >
      {label}
    </Text>
  );
});

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  containerStyle: PropTypes.object
};