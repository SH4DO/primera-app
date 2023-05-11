import { useEffect, useState } from "react";
import"./personajes.css";

function Personajes(){
    const [character, setCharacter] = useState(null);
    var randomLoc = Math.floor(Math.random()*(20-1)+1);
    var status = "statusUnknown";
    useEffect (function getCharacters(){
        fetch('https://rickandmortyapi.com/api/character/'+randomLoc)
        .then(response =>response.json())
        .then(data => setCharacter(data));

    },[]);
    
    if(character){
    switch(character.status){
        case "Alive": status="statusAlive"; break;
        case "Dead": status="statusDead"; break;
        case "Unknown": status="statusUnknown"; break;       
    }}

    if(!character){
        return null;
    }
    return(
    <div className="div-main">  
        <div className="div-basic">
            <img  className="img-character" src={character.image} alt="Character"></img>
        </div>   
        <div className="div-secondary">       
            <h1>{character.name}</h1>
            <hr></hr>
            <h3 className="datos">
                Status: <br/>
                <div className={status}></div>               
                {character.status} <br/><br/>
                Specie: <br/>{character.species} <br/><br/>
                Gender: <br/>{character.gender} <br/><br/>
            </h3>
        </div>   
    </div>
    );
}
export default Personajes;