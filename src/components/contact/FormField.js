import React from 'react';
import { Form } from 'react-bootstrap';

const FormField = ({ 
    id, 
    type = 'text', 
    label, 
    value, 
    onChange, 
    required = false, 
    as, 
    placeholder, 
    options,
    style
}) => {
    if (type === 'select') {
        return (
            <Form.Group className="form-floating">
                <Form.Select
                    className="form-control border-0"
                    id={id}
                    value={value}
                    onChange={onChange}
                    required={required}
                >
                    <option value="" disabled>{placeholder || `Select ${label}`}</option>
                    {options && options.map(option => (
                        <option key={option}>{option}</option>
                    ))}
                </Form.Select>
                <Form.Label htmlFor={id}>{label}</Form.Label>
            </Form.Group>
        );
    }

    return (
        <Form.Group className="form-floating">
            <Form.Control
                type={type}
                as={as}
                className="form-control border-0"
                id={id}
                placeholder={placeholder || label}
                value={value}
                onChange={onChange}
                required={required}
                style={style}
            />
            <Form.Label htmlFor={id}>{label}</Form.Label>
        </Form.Group>
    );
};

export default FormField;