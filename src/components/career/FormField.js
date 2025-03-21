import React from 'react';
import { Form } from 'react-bootstrap';

const FormField = ({ id, type, label, value, onChange, required, as, style, ...props }) => {
    return (
        <Form.Group className="form-floating">
            <Form.Control
                id={id}
                type={type}
                as={as}
                className="form-control border-0"
                placeholder={label}
                value={value}
                onChange={onChange}
                required={required}
                style={style}
                {...props}
            />
            <Form.Label htmlFor={id}>{label}</Form.Label>
        </Form.Group>
    );
};

export default FormField;