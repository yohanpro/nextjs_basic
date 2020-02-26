// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label, Input, FormText } from 'reactstrap';
import PortInput from '../form/PortInput';


const validateInputs = values => {
    const errors = {};

    Object.entries(values).forEach(([key, value]) => {
        if (!value[key]) {
            errors[key] = `Field ${key} is required`;
        }
    });
    return errors;
};

const INITIAL_VALUES = {
    title: '',
    company: '',
    description: '',
    location: '',
    position: '',
    startDate: '',
    endDate: ''
};
const PortfolioCreateForm = () => (
    <div>
        <Formik
            initialValues={INITIAL_VALUES}
            validate={validateInputs}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>

                    <Field
                        type="text"
                        name="title"
                        label="Title"
                        component={PortInput} />
                    <Field
                        type="text"
                        name="company"
                        label="Company"
                        component={PortInput} />
                    <Field
                        type="text"
                        name="location"
                        label="Location"
                        component={PortInput} />
                    <Field
                        type="textarea"
                        name="description"
                        label="Description"
                        component={PortInput} />
                    <Field
                        type="text"
                        name="position"
                        label="Position"
                        component={PortInput} />
                    <FormGroup>
                        <Label>Start Date</Label>
                        <Field className="form-control" type="text" name="startDate" />
                        <ErrorMessage name="startDate" component="div" />
                    </FormGroup>
                    <FormGroup>
                        <Label>End Date</Label>
                        <Field className="form-control" type="text" name="endDate" />
                        <ErrorMessage name="endDate" component="div" />
                    </FormGroup>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);

export default PortfolioCreateForm;