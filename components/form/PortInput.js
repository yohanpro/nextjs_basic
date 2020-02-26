
import { Button, FormGroup, Label, Input } from 'reactstrap';


const PortInput = ({
    label,
    type,
    field,
    form: { touched, errors },
    ...props
}) => (
        <FormGroup>
            <Label>{label}</Label>
            <Input className="form-control" type={type} {...field} {...props} />
            {touched[field.name] &&
                errors[field.name] && <div className="error">{errors[field.name]}</div>
            }
        </FormGroup>
    );

export default PortInput;