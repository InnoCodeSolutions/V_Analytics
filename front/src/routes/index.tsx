import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../componets/Login";
import Cadastro from "../componets/Cadastro";
import Adm from "../componets/Adm";
import Taubate from "../componets/Entrega/Taubate";
import Cruzeiro from "../componets/Entrega/Cruzeiro";
import Atibaia from "../componets/Entrega/Atibaia";
import Dashboard from "../componets/Dashboard";
import Equipe from "../componets/Equipe";
import Projetos from "../componets/Projetos";

export default function AppRoutes(){
    return(
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/Cadastro" element={<Cadastro/>}></Route>
            <Route path="/Acesso" element={<Adm />}></Route>
            <Route path="/StatusTaubate" element={<Taubate />}></Route>
            <Route path="/StatusCruzeiro" element={<Cruzeiro />}></Route>
            <Route path="/StatusAtibaia" element={<Atibaia />}></Route>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/Equipe" element={<Equipe />}></Route>
            <Route path="/Projetos" element={<Projetos />}></Route>
        </Routes>
     </BrowserRouter>
    );
}