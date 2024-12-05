import { useEffect, useState } from "react";
import api from "../../servicos/api";
import { useParams } from "react-router-dom";
import estilo from "../Home/home.module.css";


export default function Detalhes(){

    const [filmes, setFilmes] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get(`movie/${id}`, {
                params : {
                    api_key: "e7032580143498b1c0f963dbddca55ad",
                    language: "pt-BR",
                    page : 1
                }
            })
            console.log(response.data.title);
            setFilmes(response.data);
        }
        loadFilmes();
    }, [])

    return (
        <div  className={estilo.aplicacao}>
            
                <div key={filmes.id}>
                    
                    <h1 className={estilo.titulo}>{filmes.title}</h1>
                    <img className={estilo.imagem} src= {`https://image.tmdb.org/t/p/w600_and_h900_bestv2${filmes.backdrop_path}`}></img>
                    <h1 className={estilo.sinopse}>{filmes.overview}</h1>
                    <h1 className={estilo.detalhes}>NOTA: {filmes.vote_average}, LANÇAMENTO: {filmes.release_date}</h1>
                    
                </div> 
            
            
        </div>
    );
}