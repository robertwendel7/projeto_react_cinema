import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./paginas/Home";
import Detalhes from "./paginas/Detalhes";

export default function RouterApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Home />}/>
                <Route path= "/detalhes" element={<Detalhes />}/>
            </Routes>
        </BrowserRouter>
    );
}