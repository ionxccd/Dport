// import { TL, TimelineItem }  from 'vertical-timeline-component-for-react';
// import { TL, Events, Event } from 'vertical-timeline-component-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TimeCard from "./TimeCard.jsx";
import TimeCardwLink from './TimeCardwLink.jsx';

import * as Icon from "react-icons/si";
import {styles} from '../../css/styles.js';
import '../../css/Home.css';

let fontSize=25;
let pyText = `My first langauge ever was Python. 
    I started learning in the summer of 2019, and since then, I've been hooked 
    learning as much as I could. I built my first Web Applications 
    in TKinter and my first website in Flask.`;

let javaText = `After I felt comfortable in Python, I jumped ship to learning Java. 
    It was a bit of a struggle, understanding many of the concepts like OOP and datatypes. 
    But in 6 months time, I had finished building my first application in Java Swing.`;

let androidText = `Armed with new knowledge in Java, I finally felt confident
    enough to tackle app development. I won't lie, many of my first apps were buggy,
    unfinished messes that were a pain to use. Trying to convert my skill in Java to Android Studio
    was also a bit complicated. But the knowledge I gained from this endeavor was invaluable.`;

let jsText = {text:`At this point, I started, listening to the advice of other programmers,
    and one language I kept hearing over and over again was Javascript. Because my growth in Java,
    learning Javascript was a much easier endeavor, due to many similar concepts between the two langauges.
    Later, I tried converting my JS skill into my first offical app. I began to gain an understanding of 
    React Native and after a full year, I published my first `,
    link:"https://play.google.com/store/apps/details?id=com.ionxccd.finalFinincal&hl=en_US&gl=US",
    linkT:"app"};

let flutterText = `After a while, I was becoming Frustrated react native.
    Although I liked many of the features included in the language. It 
    was also a bit limiting and slow with its development. So I decided to 
    take a look at Flutter, although I had been wary of flutter in the past, I decided to give 
    it a shot. And in only 2 months, I had a very nice understanding of flutter.`;

let exText = `At this point 5 years later, I wanted to see if it was possible to monetize 
    a bit of my work. I then stumble upon APIS and profit potential, so I learned a bit of 
    expressJS and in a week, published my first API on Rapid API. It was nothing too complex 
    but in about a month, it had gained around 60 users and I had my first paying customer.`;

function Timeline(){
    return(
      <div class="container my-5">
        <div class="row">
            <div class="col-md-6 offset-md-3">
            <h4 style={styles.Text}>My Programming Journey</h4>
            <section class="py-5">
            <ul class="timeline-with-icons">
                <TimeCard title="Starting with Python" date="2019" content={pyText}>
                    <Icon.SiPython size={fontSize}/>
                </TimeCard>
                <TimeCard title="Moving onto Java" date="2020" content={javaText}>
                    <Icon.SiJava size={fontSize}/>
                </TimeCard>
                <TimeCard title="Pivoting to App Development" date="2020" content={androidText}>
                    <Icon.SiAndroidstudio size={fontSize-2}/>
                </TimeCard>
                <TimeCardwLink title="Finally Started Learning Javascript and React Native" date="2021" content={jsText}>
                    <Icon.SiJavascript size={fontSize-15 }/>
                    <div style={{width:'2px'}}></div>
                    <Icon.SiReact size={fontSize-15 }/>
                </TimeCardwLink>
                <TimeCard title="Flutter: React Native But Better" date="2022" content={flutterText}>
                    <Icon.SiFlutter size={fontSize-4}/>
                </TimeCard>
                <TimeCard title="Jumping into APIs with ExpressJS" date="2022" content={exText}>
                    <Icon.SiExpress size={fontSize-2}/>
                </TimeCard>
            </ul>
            </section>
            </div>
        </div>
    </div>
    )
}

export default Timeline;