import { Link } from "react-router-dom";
import "./apresentacao.css";

function Work(props) {
    let obj = props.obj
    
    return(<>
        <div className="apresentacao-card">
        <div className="card-inner">
            <div className="card-image">
            <img src={obj.imagem} />
            </div>
            <div className="card-content">
            <div className="content" style={{color:"#3f4136ff"}}>
                <h1 className="title is-4" style={{color:"#3f4136ff"}}>{obj.titulo}</h1>
                <h2 className="subtitle is-6" style={{color:"#3f4136ff"}}><em>{obj.sub}</em></h2>
                <p>{obj.prev}</p>
            </div>
                <Link
                    to={`/MyWork/${obj.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button is-dark"
                >
                    Read more
                </Link>
            </div>
        </div>
        </div>
    
    
    </>)
} 

export default Work