import "./apresentacao.css";
import LogoA from "./assets/LogoA.png";
import p3 from "./assets/p3.jpeg";

function Apresentacao(props) {

    return(<>
       <div className="apresentacao-card">
        <div className="card-inner">
            <div className="card-image">
            <img src={p3} alt="Foto em preto e branco de Denise Casatti" />
            </div>
            <div className="card-content">
            {/*<p className="title">Card Title</p>
            <p className="subtitle">I am Denise Casatti</p>*/}
            <div className="content" style={{color:"#3f4136ff"}}>
                I’m a science journalist specializing in mathematical sciences, computer sciences, and related fields. Since 2013, I’ve been working as a communications analyst at the University of São Paulo Institute of Mathematics and Computer Science (ICMC). My reports have been published on university platforms and reprinted by various other media outlets in Brazil. I have also been involved in public science communication and engagement. In 2015, I was responsible for bringing the global science festival “Pint of Science” to Brazil.

I have a B.A in journalism and a M.A. in communications studies from the University of São Paulo. I also have a Ph.D. in Psychology from the Federal University of São Carlos. As a professor, I’ve taught creativity and metacognition classes to graduate students in the Applied Computing in Education Programme. I also taught students at the Brazilian Academy of Literary Journalism and Paulista University in subjects such as book reporting and narrative journalism.

I’m the author of the book “A Singular and Plural Institute: The Five Decades of the ICMC”, and received third place in the mathematics category of the IMPA-SBM Prize for Math and Science Journalism (2018) for the special report series “Mathematics is in Everything”.
            </div>
            <img src={LogoA} alt="Logo: assinatura" style={{ height: "3em" }} />
            </div>
        </div>
        </div>


    </>)
}

export default Apresentacao