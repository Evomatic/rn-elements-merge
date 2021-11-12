import PropTypes from 'prop-types';
import React from 'react';
import { Input as InputM } from 'react-native-elements';

function Input(props) {
    return (
        <InputM {...props} />
    )
}

Input.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
}

export default Input;