import { useEffect, useState } from "react";

function Citas(){
    const [location, setLocation] = useState(null);
    //la variable randomLoc es para generar un valor aleatorio de location del API entre el 1 y 20 que son el total de location en el API
    var randomLoc = Math.floor(Math.random()*(20-1)+1);
    useEffect (function getLocations(){
        fetch('https://rickandmortyapi.com/api/location/'+randomLoc)
        .then(response =>response.json())
      //  .then(data =>console.log(data))
        .then(data => setLocation(data));

    },[]);
    return(
    <div>{location?.name}</div>
    );
}
export default Citas;