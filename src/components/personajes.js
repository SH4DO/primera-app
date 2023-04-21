import { useEffect, useState } from "react";

function Personajes(){
    const [character, setCharacter] = useState(null);
    var randomLoc = Math.floor(Math.random()*(20-1)+1);
    useEffect (function getCharacters(){
        fetch('https://rickandmortyapi.com/api/character/'+randomLoc)
        .then(response =>response.json())
        .then(data => setCharacter(data));

    },[]);
    if(!character){
        return null;
    }
    return(
    <div>{character.name}<br/>
        <img  src={character.image} alt="Character"></img>
    </div>
    );
}
export default Personajes;