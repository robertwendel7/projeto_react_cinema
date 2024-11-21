import estilo from "./home.module.css";
import api from "../../servicos/api";
import { useState, useEffect } from "react";

export default function Home(){
    
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params : {
                    api_key: "e7032580143498b1c0f963dbddca55ad",
                    language: "pt-BR",
                    page : 1
                }
            })
            console.log(response.data.results);
            setFilmes(response.data.results);
        }
        loadFilmes();
    }, [])
    
    
    return (
        <div>
            {filmes.map((filme) => (
                <div key={filme.id}>
                    <h1>{filme.title}</h1>
                    <img src= {`https://image.tmdb.org/t/p/w600_and_h900_bestv2${filme.backdrop_path}`}></img>
                    <h1>{filme.overview}</h1>
                    <h1>{filme.vote_average}</h1>
                    <h1>{filme.release_date}</h1>
                    
                </div> 
            ))}
            <h1 className={estilo.titulo}>Estou na Home</h1>
        </div>
    );
}

