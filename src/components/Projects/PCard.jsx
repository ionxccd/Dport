import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from "react-icons/gr";
import {MdOpenInNew} from "react-icons/md";
import {styles} from "../../css/styles.js";

function PCard(prop){
    return(
        <div class="card m-2" style={{width: "18rem", height:"20rem", backgroundColor:"#2D4665"}} key={prop.data.id}>
            <div class="card-body m-3 d-flex flex-column">
                <Icon.GrProjects size={30} class="mb-2" />
                <div class="d-flex" style={{gap:10}}>
                    <h5 class="card-title col-md-auto">{prop.data.title}</h5>
                    <a href={prop.data.url} class="col-sm-2 align-items-center" style={styles.pcardIcon}>
                    <MdOpenInNew size={18}/>
                    </a>
                </div>
                <h6 class="card-subtitle mb-2 text-start">{prop.data.desc}</h6>
            </div>
            <div class="mx-4 my-3">
                <div>
                <p class="p-1 bg-dark text-light rounded" style={{width:"fit-content"}}>{prop.data.type}</p>
                </div>
                <div class="d-flex justify-content-start align-items-end" style={{gap:10}}>
                    {prop.data.tags.map((x, i) =>
                            <p>{prop.data.tags[i]}</p>
                    )}
                </div>
                <p class="card-text text-muted text-start">{prop.data.date}</p>
            </div>
        </div>
    )
}

export default PCard;