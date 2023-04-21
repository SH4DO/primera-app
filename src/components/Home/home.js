import Arrow from "../../assets/RickandMortyPoster.jpg";
import "./home.css";

function Home(){
    return(
        <>
        <h1>Rick and Morty</h1>
        <img className="poster" src={Arrow} alt="Arrow"></img>
        <h2>
        Rick y Morty (en inglés: Rick and Morty) es una serie de televisión americana de animación para adultos creada por Justin Roiland y 
        Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick 
        Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, 
        temporales e intergalácticos. Dan Harmon, el co-creador de la serie y Justin Roiland son los encargados de las voces principales de
         Morty y Rick, la serie también incluye las voces de Chris Parnell, Spencer Grammer y Sarah Chalke.
        </h2>
        <h3>
        Rick Sánchez es un ejemplo del típico "científico loco". Es un genio, pero es irresponsable, alcohólico, egoísta, un poco 
        depresivo y con poca cordura. Rick por diferentes razones termina mudándose a la casa de su hija Beth y en ese momento se 
        encuentra con su nieto Morty; un chico de 14 años de edad, tímido y no muy listo. Al juntarse con su nieto, Rick y Morty viven
         una variedad de aventuras a lo largo del cosmos y universos paralelos. Y es mediante tantas vivencias y reflexiones que Rick 
         busca que su nieto Morty no acabe como su padre, Jerry, un hombre muy poco exitoso que a pesar de tener buenas intenciones 
         resulta ser bastante inútil en muchas ocasiones y depende mucho de su esposa, Beth, hija de Rick.

        A pesar de estar muy apegados, Rick y su nieto experimentan momentos en los que Summer, hermana de Morty, se une en ocasiones 
        a las pintorescas aventuras provocadas por Rick.
        </h3>
        </>
    );
}
export default Home;