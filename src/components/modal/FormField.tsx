import { Form } from "react-bootstrap";
import { FormFieldProps } from "../../types/typeFormFieldProps";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
}) => (
  <>
    <Form.Group className="mb-3">
      <Form.Control
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
export default FormField;
