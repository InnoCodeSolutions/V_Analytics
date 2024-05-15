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
import html2pdf from 'html2pdf.js';

export default function Atibaia() {
    const [analistas, setAnalistas] = useState<Dados[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Dados[]>('http://localhost:3001/StatusAtibaia');
                setAnalistas(response.data);
            } catch (error) {
                console.error("Erro ao buscar dados dos analistas:", error);
            }
        };

        fetchData();
    }, [])

    if (!analistas.length) {
        return <div>Loading...</div>; // Exibir um indicador de carregamento enquanto os dados estão sendo buscados
    };

    const handlePrintContent = () => {
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        const divMeio = document.querySelector('.relatorio');
        if (divMeio) {
            const opt = {
                margin: 1,
                filename: 'relatorioAtibaia.pdf',
                image: { type: 'jpeg', quality: 100 },
                html2canvas: { scale: 4 }, // Ajuste a escala para 1
                jsPDF: { unit: 'px', format: [screenWidth, screenHeight], orientation: 'portrait' }
            };

            html2pdf().from(divMeio).set(opt).save();
        }
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
                    <Link to="/Dashboard"><div><img className="fav-botao" src={dashboard} alt="" /> <span>Dashboard</span></div></Link>
                    <Link to="/Equipe"><div><img className="fav-botao" src={equipe} alt="" /> <span>Equipe</span></div></Link>
                    <Link to="/Projetos"><div><img className="fav-botao" src={projeto} alt="" /> <span>Projeto</span></div></Link>
                </div>
            </div>
            <div className="meio">
                <div className="home">

                </div>
                <div className="relatorio"> Status Entregas: Atibaia

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
                            {/* Mapeamento dos dados dos analistas para gerar as linhas da tabela */}
                            {analistas.map((analista, index) => (
                                <tr key={index}>
                                    <td>{analista.atribuicao}</td>
                                    <td>{analista.finalizados}</td>
                                    <td>{analista.nao_finalizados}</td>
                                    <td>{analista.validados}</td>
                                    <td>{analista.nao_validados}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                <div className="end_button">
                    <Link to="/Acesso"><button>Voltar</button></Link>
                    {/* Botão para imprimir conteúdo */}
                    <button onClick={handlePrintContent}>Imprimir Conteúdo</button>
                    {/* Exibir conteúdo impresso */}
                    <Link to="/">
                        <button>Desconectar</button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
