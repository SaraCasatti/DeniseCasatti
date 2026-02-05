import { useState } from "react"
import Work from "./Work"
import Cidinha from "./textos/Cidinha"
import Comunicacao from "./textos/Comunicacao"
import MatematicaTudo from "./textos/MatematicaTudo"
import { useParams, Link } from "react-router-dom"


function MyWork(props) {
    const { id } = useParams()

    const matematicaTudo = {
        id: 1,
        imagem: "/matematicaTudo.jpg",
        titulo: "Math is everywhere: start by looking at your coffee cup",
        sub: `If we could see the world as mathematicians do, we would see that differential equations are as present in our daily lives as the ticking of clocks`,
        prev: `The breakfasts of mathematicians can be much more complex than those of other
        inhabitants of the planet. When mathematicians fill their coffee cups and add sugar,
        they recognize the magic that happens as the spoon stirs to mix the substances. But
        what hidden beauty do mathematicians see in the transformation of bitter liquid into
        sweet?`
    }

    const cidinha = {
        id: 2,
        imagem: "/cidinha.jpg",
        titulo: "THE GEOMETRY OF CIDINHA",
        sub: ``,
        prev:`The colorful birds in Professor Maria Aparecida Soares Ruas’ blouse are in synergy
        with the entrance hall of her house, shaded by the trees around the house, and with
        many orchids in vases filling the shelves next to one of the walls. Here, it is easy to
        forget that we are still in São Carlos. It is almost like an oasis inside the city, hidden
        in the green around it.`
    }

    const comunicacao = {
        id: 3,
        imagem: "/comunicacao.jpg",
        titulo: "Why is the challenge of teaching and learning mathematics a communication problem?",
        sub: `Professor Yuriko Yamamoto Baldin explains the differences between mathematical
        language and everyday language in a relaxed chat in the third episode of the
        program “Mathematics on the Psychoanalysis Couch”`,
        prev: `She was born in Japan and, when she arrived in Brazil at the age of 7, she only
        knew how to say “thank you,” “good morning,” and count to 10 in Portuguese. “I had
        to dive into a world where I desperately needed to communicate,” recalls teacher
        Yuriko Yamamoto Baldin. So it was a relief when the girl discovered in a math class
        that two plus two equals four, just as she had learned in her first year of elementary
        school in Japan. She didn't need to know Portuguese to understand that set of
        symbols: 2 + 2 = 4.`
    }


    return(
        <>  
            {id?
                <div style={{margin: "4rem auto"}}>
                    {id === "1" && <MatematicaTudo />}
                    {id === "2" && <Cidinha />}
                    {id === "3" && <Comunicacao />}
                    <div style={{textAlign: "center", justifyContent: "center"}}>
                    <Link to="/MyWork" className="button is-light" style={{color:"#3f4136ff"}}>
                        ← Voltar
                    </Link>
                    </div>
                </div>
                :
                <div style={{margin: "4rem auto"}}>
                    <div ><Work obj={matematicaTudo} id={1} /></div>
                    <div><Work obj={comunicacao} id={3} /></div>
                    <div><Work obj={cidinha} id={2} /></div>
                </div>
            }
            
        </>
    )
}

export default MyWork