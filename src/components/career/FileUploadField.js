import React from 'react';
import { Form } from 'react-bootstrap';

const FileUploadField = ({ id, label, accept, onChange, required }) => {
    return (
        <Form.Group>
            <Form.Label htmlFor={id}>{label}</Form.Label>
            <Form.Control
                type="file"
                className="form-control border-0"
                id={id}
                accept={accept}
                onChange={onChange}
                required={required}
            />
        </Form.Group>
    );
};

export default FileUploadField;