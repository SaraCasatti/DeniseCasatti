import p3 from "./assets/p3.jpeg"
import "./apresentacao.css";
import LogoA from "./assets/LogoA.png"

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
                Denise Casatti é doutoranda do Programa de Pós-Graduação em Psicologia da Universidade Federal de São Carlos. É mestre em Ciências da Comunicação pela Universidade de São Paulo (2006) e formada em jornalismo pela mesma instituição (1997). Atualmente, desenvolve estudos no campo da psicologia cognitiva, com foco na relação entre metacognição, criatividade e divulgação científica. Desde junho de 2013, trabalha como analista de comunicação no Instituto de Ciências Matemáticas e de Computação (ICMC) da USP, em São Carlos. Suas reportagens na área de jornalismo científico têm sido publicadas no site do ICMC e do Jornal da USP, bem como replicadas em diversos veículos de comunicação do país. Foi a responsável por trazer o festival de divulgação científica Pint of Science ao Brasil, em 2015. Atuou como professora universitária na Universidade Paulista, de 2006 a 2012, ministrando aulas para alunos de graduação em disciplinas nas áreas de jornalismo e comunicação, tais como livro-reportagem, jornalismo literário, jornalismo especializado, interpretação e produção de textos. Também ministrou aulas para alunos de pós-graduação na Academia Brasileira de Jornalismo Literário (ABJL) entre 2006 e 2010. Profissionalmente, já trabalhou na Investe São Paulo, no Jornal Valor Econômico, na Editora Gente e em empresas de comunicação empresarial, atuando na produção de textos para livros, campanhas institucionais, jornais e revistas em diversas áreas (economia, comportamento, terceiro setor, educação).
            </div>
            <img src={LogoA} alt="Logo: assinatura" style={{ height: "3em" }} />
            </div>
        </div>
        </div>


    </>)
}

export default Apresentacao