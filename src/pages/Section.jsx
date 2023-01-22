import React, { useState } from 'react';
import Bar from '../component/Bar';
import Methode from '../component/Methode';
import Skill from '../component/Skill';
import ai from '../img/ask.png';
import me from '../img/me.JPG';
import next from '../img/next.png';
import { default as picture0, default as picture2, default as picture3, default as picture5 } from '../img/picture.jpg';
import { default as picture1, default as picture4 } from '../img/picture2.jpg';
import preview from '../img/preview.png';
import '../js/main';
import Information from './Info';
const Section = ()=>{
    const [compteur , setcompteur] =useState(0)
    const [scroll , setscroll] = useState(1)
    const experiences=[{id:picture0 ,valeur:"Realisation de application en C#"},{id:picture1 ,valeur:"Realisation de application en C#"},{id:picture2 ,valeur:"Realisation de application en C#"},{id:picture3 ,valeur:"Realisation de application en C#"},{id:picture4 ,valeur:"Realisation de application en C#"},{id:picture5 ,valeur:"Realisation de application en C#"}]
    const element=3
    const start = compteur * element -element
    const experience = experiences.slice(compteur,element+compteur)
    const handleNext = ()=>{
        setcompteur(compteur+1)
       
    }
    const handlePreview  =(event)=>{
        setcompteur(compteur-1)
    }
    return <>
    <section>
        <Information/>
        <div className='picture'>
            <div className='center'>
                <img src={me} alt="" />
            </div>
            <div className='center'>
               <span className='name'>Judicaël RANDRIAMPANALINDAHY</span>
            </div>
            <div className=" status center">
             <h3>Web designer</h3>
             <h3>Administrateur de system</h3>
             <h3>Backend Developper</h3>
            </div>
           
        </div>
        <div className='perso'>
            <h1>Personnality</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae illo sint molestiae odio dolorum ea, 
            natus officia sed debitis<br /> deserunt labore. Fugit voluptates optio mollitia ea alias expedita beatae vero. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci corrupti dignissimos neque nisi ex dicta perspiciatis cum, consequatur nemo iure at a odio nulla dolores, facere similique laudantium dolore?</p>
                
        </div>
        <div className="exp">
            <h1 >Experience</h1>
        </div>
        
        <div className='experience center'>
            <img src={preview} alt="" onClick={handlePreview} className="control"/>
            
            {experience.map(exper=>
            <div className='part' key={exper.id}>
                <img src={exper.id} alt="" />
                {exper.valeur} <br />            
            </div>
                )}
            <img src={next} alt="" onClick={handleNext} className="control"/>
            
        </div>
        <div className='description'>
            <h1>Methode de Travail</h1>
            <div className='personality center'>
                <div >
                    <Methode image={picture1} title="Agile"/> <br />
                    <Methode image={picture2} title="Ambitieu"/><br />
                    <Methode image={picture1} title="Agile"/> <br />
                    <Methode image={picture2} title="Ambitieu"/> <br />
                </div>
                <div>
                    <Methode image={picture1} title="Agile"/> <br />
                    <Methode image={picture2} title="Ambitieu"/> <br />
                    <Methode image={picture1} title="Agile"/> <br />
                    <Methode image={picture2} title="Ambitieu"/> <br />

                </div>
                <div>
                    <Methode image={picture1} title="Agile"/> <br />
                    <Methode image={picture2} title="Ambitieu"/><br />
                    <Methode image={picture1} title="Agile"/> <br />
                    <Methode image={picture2} title="Ambitieu"/>  
                </div>

            </div>
        </div>
        <div className='know'>
            <h1>Connaissance</h1>
            <div className='language left'>
                <Bar value="HTML" taille="100%"/>
                <Bar value="PHP" taille="90%"/>
                <Bar value="PHP"/>
                <Bar value="PHP"/>

            </div>
            <div className='language right'>
                <Bar value="Java Script" taille="80%"/>
                <Bar value="Java Script" taille="90%"/>
                <Bar value="Java Script"/>
                <Bar value="Java Script"/>
            </div>
        </div>
        <h1 className='top'>Maitrise de Travaille</h1>
        <div className='knowledge center'>
            <div >Administration de Système<Skill value="90" description="% de maitrise de l'administration de sytème"/> </div>
            <div>Designer Web<Skill value="70" description="% de designé web" color="red"/></div>
            <div>Developper Backend<Skill value="80" description="% de maitrise de Backend" color="blue"
            
            
            
            
            /></div>
        </div>
        
        <div className='contact based'>
            <h1>Contact</h1> <br />
           <div className='center'>
           <div className="half ai">
                <img src={ai} alt="" />
           </div>
           <div className='half'>                   
                    <input type="text"  placeholder='Message'/> <br />                   
                    <input type="email" placeholder='Email' /> <br />
                    <button className='send'>Envoyer</button>
            
           </div>
           </div>
        </div>
       

    </section>
    </>
}
export default Section