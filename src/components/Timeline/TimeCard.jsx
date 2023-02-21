import {styles} from '../../css/styles.js';
import "@fontsource/lato";
// import styles from

function TimeCard(prop){
    return (
        <li class="timeline-item mb-5">
            <span class="timeline-icon">
                {prop.children}
            </span>

            <h5 class="fw-bold" style={styles.tlTitle}>{prop.title}</h5>
            <p class="text-muted mb-2 fw-bold">{prop.date}</p>
            <p class="text-muted" style={{fontFamily:"Lato"}}>
                {prop.content}
            </p>
        </li>
    )
}

export default TimeCard;