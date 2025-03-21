import React from 'react';
import { Form } from 'react-bootstrap';

const SelectField = ({ id, label, value, onChange, options, placeholder, required }) => {
    return (
        <Form.Group className="form-floating">
            <Form.Select
                id={id}
                className="form-select border-0"
                value={value}
                onChange={onChange}
                required={required}
            >
                <option value="" disabled>{placeholder}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value || option}>
                        {option.label || option}
                    </option>
                ))}
            </Form.Select>
            <Form.Label htmlFor={id}>{label}</Form.Label>
        </Form.Group>
    );
};

export default SelectField;