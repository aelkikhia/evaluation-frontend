import React, {Component} from 'react';
import { Field, reduxForm } from "redux-form";


class ArrayDiffForm extends Component {

    renderInput = ( {input, label, meta}) => {
        const className=`field ${meta.error && meta.touched? 'error': ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {renderError(meta)}
            </div>

        );
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}
                  className="ui form error">
                <Field name="current"
                       component={this.renderInput}
                       label="Enter current list" />
                <Field name="target"
                       component={this.renderInput}
                       label="Enter Target list"/>
                <button className="ui button primary">Calculate</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    const example = 'array requires comma separated numbers e.g. 1, 2, 3, 4';

    if (!formValues.current || isListOfNumbers(formValues.current)) {
        errors.current = `Current ${example}`;
    }
    if (!formValues.target || isListOfNumbers(formValues.target)) {
        errors.target = `Target ${example}`;
    }

    return errors;
};

const isListOfNumbers = (value) => {
    const list = value.split(',').map(Number);
    return list.includes(NaN)
};

const renderError = ({ error, touched }) => {
    if (touched && error){
        return (
            <div className="ui error message">
                <div className="header">{error}</div>
            </div>
        );
    }
};



export default reduxForm({
    form: 'arrayDiffForm',
    validate
})(ArrayDiffForm);