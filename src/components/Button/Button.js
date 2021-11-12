import React from "react";
import PropTypes from "prop-types";
import { Button as ButtonM } from 'react-native-elements';

function Button(props) {
  return (
    <ButtonM {...props} style={props.style}>{props.children}</ButtonM>
  );
}

Button.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
};

export { Button as default };
