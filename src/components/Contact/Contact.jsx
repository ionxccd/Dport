import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import * as Icon from "react-icons/im";
import * as Icon2 from "react-icons/md";
import {styles} from "../../css/styles.js";
import ContactCircle from "./ContactCircle.jsx";
import "../../css/Home.css";

function Contact(){
    return(
        <>
            <div class="text-center container my-5 p-5">
                <p style={{...styles.Text, ...{fontSize:50}}} class="my-5">Contact Me</p>
                <p>&nbsp;</p>
                <div class="row">
                    <ContactCircle url="mailto:aasadavid26@gmail.com" tooltip="Email">
                        <Icon2.MdEmail size={80} id="circle-icon"/>
                    </ContactCircle>
                    {/* <ContactCircle url="">
                        <Icon.ImLinkedin size={70} id="circle-icon"/>
                    </ContactCircle> */}
                </div>
            </div>
        </>
    )
}

export default Contact;