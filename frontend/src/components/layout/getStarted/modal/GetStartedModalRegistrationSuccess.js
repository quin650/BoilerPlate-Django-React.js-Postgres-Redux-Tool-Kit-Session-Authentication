import React, { useState } from "react";
import { login } from "../../../../actions/auth";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../reducers/auth";
import classes from './GetStartedModal.module.css';
const GetStartedModalRegistrationSuccess = (props) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({email: '', password: '',});
    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const exitAction = () => {
        dispatch(userActions.getStartedModalClose());
        dispatch(userActions.getStartedModalCreateAccount());
    };
    const onSubmit = e => {
        e.preventDefault();
        dispatch(login(email, password));
        dispatch(userActions.getStartedModalClose());
        dispatch(userActions.navBarMenuClose());
    }

    return (
        <div className={classes.blurredBackgroundContainer}>
            <div className={classes.modalContainer}>
                <div onClick={exitAction} className={classes.exitButtonContainer}>
                    <div className={classes.exitButton}>
                        <svg className={classes.exitSvg} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 5.293l4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path></svg>
                    </div>
                </div>
                <div className={classes.modalContentContainer}>
                    <p> Account Created Successfully</p>
                    <p className={classes.option_1}>Click here to continue? <a className={classes.link} onClick={props.LogIn}> Log In</a></p>
                </div>
            </div>
        </div>
    )
}

export default GetStartedModalRegistrationSuccess;