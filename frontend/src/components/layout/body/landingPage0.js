import React, { Fragment } from "react";
import GetStartedButton from "../header/headerUI/GetStartedButton";
import Landing_Image from '../../../../static/images/Background_Main.png';

import classes from './landingPage0.module.css';

const LandingPage0 = () => {

    return (
        <div className={classes.main} >
            <img src={Landing_Image} alt='subjects' /> 
            <div className={classes.caption} >
                <h1> LEARNING NEVER EXHAUSTS THE MIND</h1>
                <h3> TellusEd is adding a Montessori-flair to online-learning. Learn your way.</h3>
                <div className={classes.but}>
                    <GetStartedButton />
                </div>
            </div>
        </div>
    );
};

export default LandingPage0;