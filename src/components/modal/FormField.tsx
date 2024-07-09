import React from "react";
import { Form } from "react-bootstrap";
import { FormFieldProps } from "../../types/typeFormFieldProps";

export function FormField({
  id,
  type,
  placeholder,
  name,
  register,
  error,
}: FormFieldProps) {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Control
          id={id}
          type={type}
          placeholder={placeholder}
          isInvalid={!!error}
          {...register(name)}
        />
        <Form.Control.Feedback type="invalid">
          Обязательное поле
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
}
