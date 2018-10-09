import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {renderInput} from '../helpers';
import {connect} from 'react-redux';
import {signup} from '../actions';


class SignUp extends Component{
    userSignUp = (values) => {
        console.log('user sign up info', values);
        this.props.signup(values);

    };
    render(){
        const {handleSubmit} = this.props;

        return (
            <div>
                <h1 className="center">Sign Up!</h1>
                <form onSubmit={handleSubmit(this.userSignUp)}>
                    <Field name='email' label = 'Email' component={renderInput}/>
                    <Field name='password' label='Password' type='password' component={renderInput}/>
                    <Field name='confirmPassword' label='Confirm Password' type='password' component={renderInput}/>
                    <div className="row">
                        <div className="col s12 right-align">
                            <button className='btn blue lighten-3'>Sign Up</button>
                        </div>
                    </div>
                </form> 
            </div>
        )
    }
};

function validate(values){
    const {email, password, confirmPassword} = values;
    const error = {};

    if(!email){
        error.email = 'Please enter your email address.'
    }
    if(!password){
        error.password = 'Please enter a valid password'
    }
    if(confirmPassword !== password){
        error.confirmPassword = 'please make sure yopur passwords match'
    }

    return error;

};

SignUp =  reduxForm({
    form: 'sign-up',
    validate: validate
})(SignUp);

export default connect(null, {
    signup: signup
})(SignUp)
