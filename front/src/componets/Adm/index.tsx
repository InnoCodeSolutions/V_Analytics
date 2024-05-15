import { Link } from "react-router-dom"
import "./index.css"
import logo from "../../assets/logo.jpg";
import home from "../../assets/botao_home.jpg";
import dashboard from "../../assets/botao_dashboard.jpg";
import equipe from "../../assets/botao_equipe.jpg";
import projeto from "../../assets/botao_projeto.jpg";
export default function Adm(){
    return(
    <div className="menu">
    <div className="navbar">
        <div className="logo-div">
             <img className="logo" src={logo} alt="" />
        </div>     
        <div className="border-bottom"></div>
                {/* Quadrado ao lado direito com cargo e status */}
                <div className="cargo-status">
                    <div><img className="logo1" src={logo} alt="" /></div>
                    <div className="status_">
                        <div className="cargo">Gestor</div>
                        <div className="status">Status: Disponível</div> 
                    </div>
                </div>       
                <div className="border-bottom"></div>
                <div className="navegar">
                    <Link to="/Acesso"><div><img className="fav-botao" src={home} alt="" /> <span>Home</span></div></Link>
                    <Link to="/Dashboard"><div><img className="fav-botao" src={dashboard} alt="" /> <span>Dashboard</span></div></Link>
                    <Link to="/Equipe"><div><img className="fav-botao" src={equipe} alt="" /> <span>Equipe</span></div></Link>
                    <Link to="/Projetos"><div><img className="fav-botao" src={projeto} alt="" /> <span>Projeto</span></div></Link>
                </div>
    </div>            
    <div className="meio">
        <div className="home"></div>
        <Link  className="opcao" to="/Cadastro"><button className="corpo"> CADASTRO DE FUNCIONÁRIO</button></Link>
        <div className="corpo1">
            <Link to="/StatusTaubate"><button className="botao"> STATUS DE ENTREGAS TAUBATÉ</button></Link>
            <Link to="/StatusCruzeiro"><button className="botao"> STATUS DE ENTREGAS CRUZEIRO</button></Link>
            <Link to="/StatusAtibaia"><button className="botao"> STATUS DE ENTREGAS ATIBAIA</button></Link>
            {/* <button className="botao"></button>
            <button className="botao"></button>
            <button className="botao"></button> */}
        </div>
        {/* <div className="corpo1">
            <button className="botao"></button>
            <button className="botao"></button>
            <button className="botao"></button>
            <button className="botao"></button>
        </div>
        <div className="corpo1">
            <button className="botao"></button>
            <button className="botao"></button>
            <button className="botao"></button>
            <button className="botao"></button>
        </div> */}
    </div>
    </div>
)
}