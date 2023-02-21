import {styles} from '../../css/styles.js';
// import styles from

function TimeCardwLink(prop){
    return (
            <li class="timeline-item mb-5">
            <span class="timeline-icon">
                {prop.children}
            </span>

            <h5 class="fw-bold" style={styles.tlTitle}>{prop.title}</h5>
            <p class="text-muted mb-2 fw-bold">{prop.date}</p>
            <p class="text-muted">
                {prop.content.text}
                <a href={prop.content.link} target="_blank">{prop.content.linkT}</a>.
            </p>
            </li>
    )
}

export default TimeCardwLink;