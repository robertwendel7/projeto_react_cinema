import estilo from "./home.module.css";
import api from "../../servicos/api";
import { useState, useEffect } from "react";

export default function Home() {

    const [filmes, setFilmes] = useState([]);
    const [pesquisa, setPesquisa] = useState();



    async function loadFilmes() {
        const response = await api.get("movie/now_playing", {
            params: {
                api_key: "e7032580143498b1c0f963dbddca55ad",
                language: "pt-BR",
                page: 1
            }
        })
        console.log(response.data.results);
        setFilmes(response.data.results);
    }
    function handleInputChange(e) {
        e.preventDefault();
        setPesquisa(e.target[0].value);
    }

    async function Pesquisar(e) {
        const response = await api.get(`search/movie?query=${pesquisa}`, {
            params: {
                api_key: "e7032580143498b1c0f963dbddca55ad",
                language: "pt-BR",
                page: 1
            }
        })
        console.log(response.data.results);
        setFilmes(response.data.results);
    }


useEffect(() => {
    if (pesquisa) {
        Pesquisar();
    } else {
        loadFilmes();
    }

}, [pesquisa])


return (
    <div className={estilo.aplicacao}>
        <div className={estilo.inputPesquisa}>
            <h2>Pesquisar:</h2>

            <form onSubmit={(e) => handleInputChange(e)} className="search">
                <input type="text" placeholder="Pesquisar" id="search" />
                <input type="submit" />
            </form>

            <br></br>
            
        </div>
        {filmes.map((filme) => (


            <div key={filme.id}>
                <a href={`/detalhes/${filme.id}`}>
                    <h1 className={estilo.titulo}>{filme.title}</h1>
                    <img className={estilo.imagem} src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${filme.backdrop_path}`}></img>
                </a>

                <h1 className={estilo.detalhes}>NOTA: {filme.vote_average}, LANÇAMENTO: {filme.release_date}</h1>

                <div className={estilo.divSinopse}>
                    <h1 className={estilo.sinopse}> SINOPSE:
                        {filme.overview}
                    </h1>


                </div>

                <hr></hr>

            </div>
        ))}
        <h1 className={estilo.titulo}>Estou na Home</h1>
    </div>
);
}


