import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const TextInputGroup = ({
    label,
    name,
    placeholder,
    value,
    type,
    onChange,
    errors
}) => {
    return (
        <div className="form-group">
                    <label htmlFor={name}>{label} </label>
                    <input 
                    type={type} 
                    className={classnames("form-control form-control-lg", {'is-invalid': errors})} 
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    />
                    {errors && 
                        <div className="invalid-feedback">{errors}</div>
                    }
                  </div>
    );
}
TextInputGroup.propTypes = {
    name:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    label:PropTypes.string.isRequired,
    error:PropTypes.string
}

TextInputGroup.defaultProps = {
    type:'text'
}
export default TextInputGroup
