import { Link } from "react-router-dom";
import "./index.css";
import axios from 'axios';
import logo from "../../../assets/logo.jpg";
import home from "../../../assets/botao_home.jpg";
import dashboard from "../../../assets/botao_dashboard.jpg";
import equipe from "../../../assets/botao_equipe.jpg";
import projeto from "../../../assets/botao_projeto.jpg";
import { useEffect, useState } from "react";
import { Dados } from "../../../types";


export default function Atibaia() {
    const [analistas, setAnalistas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:3001/StatusAtibaia');
                setAnalistas(response.data);
            } catch (error) {
                console.error("Erro ao buscar dados dos analistas:", error);
            }
        };

        fetchData();
    }, [])
    if (analistas === null) {
        return <div>Loading...</div>; // Exibir um indicador de carregamento enquanto os dados estão sendo buscados
    };
    return (
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
                    <Link to="/"><div><img className="fav-botao" src={dashboard} alt="" /> <span>Dashboard</span></div></Link>
                    <Link to="/"><div><img className="fav-botao" src={equipe} alt="" /> <span>Equipe</span></div></Link>
                    <Link to="/"><div><img className="fav-botao" src={projeto} alt="" /> <span>Projeto</span></div></Link>
                </div>
            </div>
            <div className="meio">
                <div className="home"></div>
                <div className="relatorio"> Status Entregas: Atibaia
                    <div>
                        <h2>Relatório</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Analista</th>
                                    <th>Finalizado</th>
                                    <th>Não Finalizado</th>
                                    <th>Validado</th>
                                    <th>Não Validado</th>

                                </tr>
                            </thead>
                            <tbody>
                                {/* Aqui você pode mapear os dados e gerar as linhas da tabela dinamicamente */}
                                {/* Exemplo de linha estática */}
                                {analistas.map((analista:Dados,index) => (
                                    <tr key={index}>
                                        <td>{analista.atribuicao}</td>
                                        <td>{analista.finalizados}</td>
                                        <td>{analista.nao_finalizados}</td>
                                        <td>{analista.validados}</td>
                                        <td>{analista.nao_validados}</td>
                                        
                                    </tr>
                                ))}
                                {/* Adicione mais linhas conforme necessário */}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>

        </div>
    );
}