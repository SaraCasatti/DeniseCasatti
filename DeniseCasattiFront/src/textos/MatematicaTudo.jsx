import "./textos.css"
import matematicaTudoImg01 from "../assets/matematicaTudoImg01.jpg"

function MatematicaTudo(props) {
    
    return(
        <>
            <div className="box Bboxx" style={{color:"#3f4136ff"}}>
                <div className="centraliza">
                    <h1 className="title is-4" style={{color:"#3f4136ff"}}>Math is everywhere: start by looking at your coffee cup</h1>
                        
                    <h2 className="subtitle is-6" style={{color:"#3f4136ff"}}><em>
                        If we could see the world as mathematicians do, we would see that differential
                        equations are as present in our daily lives as the ticking of clocks
                    </em></h2>
                </div>
                <br />
                <div className="centraliza"><img src="/matematicaTudo.jpg" /></div>
                <br />
                <p>
                    The breakfasts of mathematicians can be much more complex than those of other
                    inhabitants of the planet. When mathematicians fill their coffee cups and add sugar,
                    they recognize the magic that happens as the spoon stirs to mix the substances. But
                    what hidden beauty do mathematicians see in the transformation of bitter liquid into
                    sweet?
                </p>
                <br />
                <p>
                    First, they know how important chaos is in this process, so they stir the spoon in a
                    disorderly manner. If they stirred it in a circular motion, with periodic movements, the
                    sugar would accumulate at the edges of the cup, where the liquid moves more
                    slowly. “Chaos is used in many practical applications to create homogeneous
                    mixtures,” says the retired professor Hildebrando Rodrigues, from the Institute of
                    Mathematical and Computer Sciences (ICMC) at USP, in São Carlos.
                </p>
                <br />
                <p>
                    He explains that by causing chaos with a spoon, we allow sugar particles to quickly
                    separate from one another and mix with the liquid. “This is a very important
                    characteristic of chaos: making what is close together quickly move apart,” reveals
                    the professor. To mathematically analyze this phenomenon, we need to transform
                    the coffee and sugar into coordinates: imagine that the coffee becomes an “x” and
                    the sugar a “y.” The understanding of this mixture of “x” and “y” only arises when we
                    take into account the movements they undergo over time, as the spoon causes
                    changes in these two coordinates.
                </p>
                <br />
                <p>
                    Welcome to the dynamic system of the coffee cup! Watch the sugar mix in. This is a
                    phenomenon in which there is variation, and you can already imagine that this
                    microsystem works similarly to many others. Now, look up at the sky and see the

                    celestial bodies describing their orbits: they also move over time. And everything that
                    varies can be translated mathematically by a differential equation.
                </p>
                <br />
                <p>
                    “In the embryo of the study of differential equations is Galileo Galilei's research into
                    the movement of the stars,” says Plácido Táboas, another retired professor from
                    ICMC. He points out that in Galileo's time, the terms “differential equations” and
                    “differential calculus” did not yet exist, but he makes a caveat: “You have to look at
                    the man's work in his time. And in his time, Galileo was a genius.”
                </p>
                <br />
                <p>
                    “In the embryo of the study of differential equations is Galileo Galilei's research into
                    the movement of the stars,” says Plácido Táboas, another retired professor from
                    ICMC. He points out that in Galileo's time, the terms “differential equations” and
                    “differential calculus” did not yet exist, but he makes a caveat: “You have to look at
                    the man's work in his time. And in his time, Galileo was a genius.”
                </p>
                <br />
                <p>
                    A pioneer in experimental and theoretical physics, Galileo took the first steps toward
                    understanding dynamic systems by researching the trajectories of planets. Since
                    then, much has changed. Nowadays, most mathematical models used in physics,
                    engineering, chemistry, biology, and financial markets involve differential equations.
                    They are the basis of Isaac Newton's dynamics and are present in Albert Einstein's
                    equations describing the force of gravity. They permeate our daily lives and are
                    applied to problems so diverse and fascinating that they go far beyond mixing coffee
                    and sugar. Differential equations have helped discover why some bridges collapse,
                    determine whether works of art are fake, diagnose diseases, track the evolution of a
                    cancerous tumor, and monitor population growth.
                </p>
                <br />
                <p>
                    By glimpsing at these different applications, you will see that you don't need to
                    calculate or solve equations to understand that mathematics is present in everything.
                    Of course, few of us can solve differential equations, but we can all recognize their
                    importance by understanding what they are used for. Just think about everything in
                    life that varies over time, and you will begin to see differential equations everywhere.
                </p>
                <br />
                <p>
                    <b>A bridge that falls –</b> The third-largest suspension bridge in the world was
                    inaugurated in 1940 on the Tacoma Narrows in Washington, United States. It soon
                    became an attraction: people came from hundreds of miles away in their cars to
                    enjoy the curious thrill of driving over a bridge that swayed and had earned the
                    nickname "Galloping Gertie." Few imagined that, four months later, the swaying
                    would become so uncontrollable that it would cause the Tacoma Narrows Bridge to
                    collapse.
                </p>
                <br />
                <p>
                    In the book "Differential Equations and Their Applications", the mathematician Martin
                    Braun recounts the details of the tragedy, reporting that the only life lost in the
                    catastrophe was that of a careless reporter's pet dog. He had to abandon his car in a
                    hurry before the bridge collapsed and left the animal behind. “Starting at
                    approximately 7 a.m. on November 7, 1940, the bridge began to sway persistently
                    for three hours,” Braun reports. The bridge only completely collapsed at 11:10 a.m.
                    that morning. But what does this collapse have to do with differential equations?
                </p>
                <br />
                <p>
                    “Imagine a child on a swing. Let's say she is heavy, and little by little, you push her
                    and make her move. If you push at the right time, she will swing. This is resonance:
                    the force you exert when pushing her is in tune with the existing oscillation, and then
                    she swings with an ever-increasing amplitude. You can do this with little effort,"
                    reveals Professor Plácido. It was this phenomenon of resonance that occurred on
                    the Takoma Bridge: the bridge's natural vibration frequency was amplified by the
                    wind at the site. "How dangerous this type of movement is depends on how close the
                    natural frequency of the structure (remember that bridges are made of steel, a highly
                    elastic material) is to the frequency of the pushing force. If the two frequencies are
                    the same, resonance occurs, and the oscillations will become destructive if the
                    system does not have sufficient damping," writes Braun. The following graph
                    illustrates the phenomenon of resonance, which can also be translated using a
                    differential equation.
                </p>
                <br />
                <div className="centraliza"><img src={matematicaTudoImg01} /></div>
                <p>
                    In his book, Braun reports that the same phenomenon was responsible for the
                    collapse of the Broughton suspension bridge near Manchester, England, in 1831.
                    However, the disaster was not caused by the wind; it was caused by soldiers. As
                    they marched in step across the bridge, they produced a periodic force of
                    considerable amplitude, just as the wind had done with the Takoma bridge. The
                    frequency of the soldiers' force was equal to the natural frequency of the bridge, and
                    the oscillations increased until the bridge collapsed: “This is why soldiers are ordered
                    to break stride when crossing a bridge.”
                </p>
                <br />
                <p>
                    <b>When the heart speaks –</b> The march of soldiers can be compared to the rhythm of
                    our heart. But if the cadence of this vital organ is broken, we will have a serious
                    problem: cardiac arrhythmias. In an article published by Professor Hildebrando in
                    partnership with Professor Isabel Laboriau, from the University of Porto, in Portugal,
                    they used differential equations to model electrical activity in biological systems. The
                    great contribution of mathematics to this area is to aid in the search for
                    synchronization of these systems when they enter chaos. Because if chaos is very
                    welcome in a cup of coffee, it is a disaster when it interferes with heartbeats, nerve
                    impulses, muscle fibers, and pancreatic cells.
                </p>
                <br />
                <p>
                    "Heart cells must beat in sync, just like power transmission lines. If a line fails due to
                    lightning, for example, the entire system can go down. And chaos can spread if that
                    faulty line is not disconnected,“ explains Hildebrando. ”In Brazil, we have more than
                    600 hydroelectric plants, and each one has its own mathematical model. They are
                    interconnected by transmission lines, and they all have to work in sync,” adds the
                    professor.
                </p>
                <br />
                <p>
                    Hildebrando also points out that, through collaborative work with researchers in
                    electrical engineering, the models used in Brazil have been improved. “I can affirm
                    that the most successful results for finding stability in these power systems come
                    from our research group and can be used in other areas of knowledge.” The
                    professor is one of the leading experts in differential equations in Brazil. He has
                    contributed to the development and consolidation of this field of research in the
                    country. In 2013, upon turning 70, he was honored during the Summer Meeting on
                    Differential Equations, one of the world's most important events in the field. Held
                    annually by ICMC since 1996, the event is promoted by ICMC's Nonlinear Dynamical
                    Systems group and is supported by the country's leading research funding agencies.
                </p>
                <br />
                <p>
                    “In many cases, we study differential equations as mathematical objects. The reason
                    is that we never know when we will need them. However, it is necessary to have this
                    toolbox, which is a complete understanding of the theory, precisely because we do
                    not know when we will need it in an application,” says Professor John Mallet-Paret of
                    Brown University in the United States. While having coffee during a breaks at the
                    latest edition of the Summer Meeting on Differential Equations, held February 6-8 at
                    ICMC, John gave numerous examples of the applications of differential equations: in
                    physics, they help us understand the behavior of fluids and enable us, for example,
                    to build more efficient airplanes or make weather forecasts; in biology, this tool is
                    used to understand how bacteria and viruses spread, as well as to verify whether
                    new therapies are, in fact, better than those previously used.
                </p>
                <br />
                <p>
                    For this reason, there are many challenges that intrigue researchers in this field.
                    "One of the areas of greatest interest is related to the interaction between
                    deterministic and random systems. Traditionally, in the field of differential equations,
                    we try to predict exactly what will happen in the future (deterministic systems). But in
                    the real world, things are not like that because there are always unpredictable
                    changes (in random systems). Understanding how these changes affect the results
                    of differential equations is a major challenge today," John points out.
                </p>
                <br />
                <p>
                    One of the transformations that has been affecting this area is technological
                    development. “Being able to accurately solve differential equations on a computer
                    was not possible 20 years ago,” says John. For him, the increase in computer
                    capacity opens a wide range of possibilities for developing new, highly relevant
                    applications using differential equations.
                </p>
                <br />
                <p>
                    For those who thought that everything in mathematics was already settled, it is worth
                    noting that, because it is present in everything, mathematics is as infinite as the
                    human capacity to create. As mathematician Edward Frenkel writes in his book Love
                    and Math: The Heart of Hidden Reality: “That’s how it is in mathematics: each new
                    result pushes back the veil covering the unknown, but what then becomes known
                    doesn’t simply encompass answers – it includes questions we didn’t know to ask,
                    directions we didn’t know we could explore. And so each discovery inspires us to
                    make new strides and never leaves us satisfied in our pursuit of knowledge."
                </p>
                <br />
                <div className="centraliza retangulo">
                    <b>This text was originally published in Portuguese on the “Jornal da USP” website as
                    part of the special report series “Mathematics is in Everything”: </b>
                    <br />
                    <a 
                        href="https://jornal.usp.br/universidade/universidade-03-08-a-matematica-esta-em-tudo-comece-olhando-para-sua-xicara-de-cafe/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                       https://jornal.usp.br/?p=104132
                    </a>
                </div>
            </div>
        </>
    )
}

export default MatematicaTudo