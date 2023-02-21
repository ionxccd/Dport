import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from "react-icons/bs";
import {styles} from "../css/styles.js";
import '../css/Home.css'

let fontSize=20

function Sidebar(props) {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={styles.Background}>
            <a class="navbar-brand" href="/" style={styles.Icon}><img width={35} src='logo.png'/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse mr-auto">
                <ul class="navbar-nav ms-auto mx-3">
                    <li class="nav-item">
                        <a style={styles.Text} class="nav-link" href="/#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a style={styles.Text} class="nav-link" href="/#timeline">Timeline</a>
                    </li>
                   <li class="nav-item">
                        <a style={styles.Text} class="nav-link" href="/#projects">Projects</a>
                    </li>
                   <li class="nav-item">
                        <a style={styles.Text} class="nav-link" href="#contact">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container-fluid" style={styles.Background}>
            <div class="row">
                <div class="col-sm-auto">
                    <div class="d-flex flex-sm-column flex-row flex-nowrap align-items-center sticky-top">
                        <ul class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                            <li class="nav-item">
                                <a href="https://github.com/ionxccd" class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                                    <Icon.BsGithub size={fontSize}/>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="https://github.com/ionxccd" class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                                    <Icon.BsGithub size={fontSize}/>
                                </a>
                            </li>
                            {/* <li class="nav-item">
                                <a href="#" class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                    <Icon.BsLinkedin size={fontSize}/>
                                </a>
                            </li> */}
                            <li class="nav-item">
                                <a href="mailto:aasadavid26@gmail.com" class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                    <Icon.BsEnvelopeOpenFill size={fontSize}/>
                                </a>
                            </li>
                            <li class="nav-item">
                                <div class="vr" style={{height:"600px", color:"white"}}></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm p-3 min-vh-100">
                    <div class="container">
                        {props.children}
                    </div>
                </div>
        </div>
    </div>
</>


  )
}

export default Sidebar
