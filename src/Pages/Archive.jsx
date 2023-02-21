import 'bootstrap/dist/css/bootstrap.min.css';
import {styles} from '../css/styles.js';
import Sidebar from "../components/Sidebar.jsx";
import React, { useEffect, useState } from 'react';
import {MdOpenInNew} from "react-icons/md";
import { getProjects } from '../controllers/dbController.js';
import Tooltip from "react-simple-tooltip"

function Archive(){
    const [projects, setPros] = useState([]);

    useEffect(() => {
        getProjects().then((res) => setPros(res));
    }, [])

    return(
        <Sidebar>
            <div class="m-3">
                <p style={{...styles.Text, ...{fontSize:90}}}>Archive</p>
                {/* <hr class="mt-2 mb-3"/> */}
                <table class="table text-light">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((todo) => (
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                <div class="">
                                    <p class="fw-bold mb-1">{todo.title}</p>
                                </div>
                                </div>
                            </td>
                                <td>
                            <Tooltip content={todo.desc} background="#fff" color="#000">
                                    <p class="fw-normal mb-1 text-truncate" style={{maxWidth: "300px"}}>{todo.desc}</p>
                            </Tooltip>
                                </td>
                            <td>
                               {todo.type}
                            </td>
                            <td>{todo.date}</td>
                            <td><a href={todo.url}><MdOpenInNew size={18}/></a></td>
                            {/* <td class="d-flex justify-content-start align-items-end" style={{gap:10}}>
                                {todo.tags.map((x, i) =>
                                <p>{todo.tags[i]}</p>
                            )}</td> */}
                        </tr>
                        ))}
                    </tbody>
                </table>
                 {/* {projects.map((todo) => (
                        // <div class="border-bottom m-3">
                        //     <p style={styles.Text}>{todo.title}</p>
                        // </div>
                    ))} */}
            </div>
        </Sidebar>
    );
}

export default Archive;