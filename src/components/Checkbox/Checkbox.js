import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { CheckBox as CheckboxM } from 'react-native-elements';

function Checkbox(props) {
    const [checked, setChecked ] = useState(props.checked);

    React.useEffect(() => {
        setChecked(props.checked)
      }, [props.checked]);

    return (
        <CheckboxM title={props.title} checked={checked}{...props} />
    )
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    checkedColor: PropTypes.string,
    size: PropTypes.string,
    title: PropTypes.string,
}



export default Checkbox;