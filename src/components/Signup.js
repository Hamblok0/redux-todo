import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {Formik} from 'formik';
import {signUp} from '../actions';

class Signup extends React.Component {
    render() {
        
        return (
            <div className="LoginBody">
                <h3>Signup</h3>
                <Formik 
                    initialValues={{
                        email: '',
                        password: ''
                    }}

                    onSubmit={(values) => {
                        this.props.signUp(values)
                    }}

                    render={({values, handleSubmit, handleChange}) => (
                        <form className="LoginForm" onSubmit={handleSubmit}>
                            <ul>
                                <li>
                                    <input name="email" type="email" value={values.email} onChange={handleChange} placeholder="Email..."/>
                                </li>
                                <li>
                                    <input name="password" type="password" value={values.password} onChange={handleChange}  placeholder="Password..."/>
                                </li>
                                <li>
                                    <button type="submit">Submit</button>
                                </li>
                                <li>
                                    <Link to="/" className="SignupLink">Already have an account?</Link>
                                </li>
                            </ul>
                        </form>
                    )}
                />  
            </div>
        )
    }
}


export default connect((state) => ({authenticated: state.authenticated}, {signUp}))(Signup)