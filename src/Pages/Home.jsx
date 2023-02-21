import {styles} from '../css/styles.js';

import Sphere from '../components/Header/Sphere.jsx';
import Intro from '../components/Header/Intro.jsx';
import Sidebar from '../components/Sidebar.jsx';

import Timeline from '../components/Timeline/Timeline.jsx';
import Projects from '../components/Projects/Projects.jsx';

import Contact from '../components/Contact/Contact.jsx';

function Home() {
  return (
    <div style={styles.Background}>
      <Sidebar>
        <div style={{display:"flex", flexDirection:"row", marginTop:"30px", marginBottom:"100px"}} id="home">
          <Intro/>
          <Sphere/>
        </div>
        <div id="timeline">
          <Timeline/>
        </div>
        <div id="projects">
          <Projects/>
        </div>
        <div id="contact">
          <Contact/>
        </div>
      </Sidebar>
    </div>
  )
}

export default Home;
