import 'bootstrap/dist/css/bootstrap.min.css';
import {styles} from '../../css/styles.js';
import "@fontsource/montserrat";
import "@fontsource/lato";

function Intro(){
    return(
        <div class="p-5 mt-5">
            <h4 style={{...styles.Text, ...{fontFamily:"Montserrat"}}}>Hi my name is</h4>
            <h4 style={{...styles.Text, ...{fontSize:76, color:"#B4BFCD", fontFamily:"Lato"}}}>David Aasa</h4>
            <h4 style={{...styles.Text, ...{fontSize:24, color:"#445871", fontFamily:"Lato"}}}>I am a self-taught software engineer developer who specializes in mobile apps and APIs. 
            I am currently focusing on completing my degree and building my experience.</h4>
        </div>
    )
}

export default Intro;