import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import {styles} from "../../css/styles.js";
import PCard from "./PCard.jsx";
import { getLast6 } from '../../controllers/dbController.js';
import "../../css/Home.css";

function Projects(){
    const [projects, setPros] = useState([]);

    useEffect(() => {
        getLast6().then((res) => setPros(res));
        // insertProjects();
    }, [])
    
    return(
        <>
            <div class="container text-center">
                <h3 style={{...styles.Text, ...{fontSize:35}}}>Projects</h3>
                <a href="archive">See More</a>
                <div class="grid-container p-5 m-2">
                    {projects.map((todo) => (
                        <PCard data={todo} key={todo.id}/>
                    ))}
                </div>
            </div>
        {/* <div class="container d-flex justify-content-center row m-2">
            <div class="col"><PCard lang={["React", "SQLite", "Flutter"]} url="https://play.google.com/store/apps/details?id=com.ionxccd.PocketNotes&hl=en_US&gl=US"/></div>
            <div class="col"><PCard lang={["React", "SQLite"]}/></div>
            <div class="col"><PCard lang={["React", "SQLite"]}/></div>
        </div>
        <div class="container d-flex justify-content-center row m-2">
            <div class="col"><PCard lang={["React", "SQLite"]}/></div>
            <div class="col"><PCard lang={["React", "SQLite"]}/></div>
            <div class="col"><PCard lang={["React", "SQLite"]}/></div>
        </div> */}
        </>
    )
}

export default Projects;