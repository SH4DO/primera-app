import { useEffect, useState } from "react";

function Episodios(){
    const [episode, setEpisode] = useState(null);
    const [validRefresh, setValidRefresh] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    var randomLoc = Math.floor(Math.random()*(20-1)+1);
    useEffect (function getEpisodes(){
        if(!validRefresh){
            return ;
        }
        setIsLoading(true);
        fetch('https://rickandmortyapi.com/api/episode/'+randomLoc)
        .then(response =>response.json())
        .then(data => {
            setValidRefresh(false);
            setEpisode(data)
            setIsLoading(false)
        });

    },[validRefresh]);
    function onRefresh(){
        setValidRefresh(true);
    }
    if(!episode){
        return null;
    }
    return(
    <div>
        <button onClick={onRefresh}>Refresh</button>
        <h1>Nombre del Episodio: {episode.name}</h1><br/>
        <p>
            Fecha de Emision: {episode.air_date}
        </p>
    </div>
    );
}
export default Episodios;