import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import * as Icon from "react-icons/im";
import {styles} from "../../css/styles.js";
import Tooltip from "react-simple-tooltip";
import "../../css/Home.css";

function ContactCircle(prop){
    return(
        <>
            <div class="col-sm rounded-circle d-flex justify-content-center">
                <a href={prop.url} style={{color:"#2D4665"}}>
                <Tooltip content={prop.tooltip} background="#2D4665" color="#fff">
                    <div class="exp" style={{height:140,width:140}}>
                        {prop.children}
                    </div>
                </Tooltip>
                </a>
            </div>
        </>
    )
}

export default ContactCircle;