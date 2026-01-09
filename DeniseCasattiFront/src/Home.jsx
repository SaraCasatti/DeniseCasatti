import Apresentacao from "./Apresentacao"
import Book from "./Book"
import Hero from "./Hero"


function Home(props) {

    return(<>
        <Hero />
        <Apresentacao />
        
    </>)
}

//<Book file="/ICMC.pdf" titulo="Prévia do E-book" previewPages={[1,2,3,4,5]} />

export default Home