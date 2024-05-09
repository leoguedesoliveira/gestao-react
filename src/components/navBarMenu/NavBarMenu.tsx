import "./NavBarMenu.css"

function NavBarMenu() {
    
    return(
        <nav>
            <div id="divLogo">
                <img id="imgLogo" src="src\components\navBarMenu\imgs\logo_header.png" alt="logo" />
            </div>
            <div className="opcoes">
                <div className="opcoesLinks">
                    <li><a draggable="false" className="opcoesMenu" href="#" id="opcaoDashboards">Dashboards</a></li>
                    <li><a draggable="false" className="opcoesMenu" href="#" id="opcaoProjetos">Projetos</a></li>
                    <li><a draggable="false" className="opcoesMenu" href="#" id="opcaoCadastros">Cadastros</a></li>
                    <li><a draggable="false" className="opcoesMenu" href="#" id="opcaoConfiguracoes">Configurações</a></li>
                    <li><a draggable="false" className="opcoesMenu" href="#" id="opcaoParametrizacoes">Parametrizações</a></li>
                    <li><a draggable="false" className="opcoesMenu" href="#" id="opcaoRelatorios">Relatórios</a></li>
                    <li><a draggable="false" className="opcoesMenu" href="#" id="opcaoGestaoNormas">Gestão de Normas</a></li>
                </div>
                <div className="opcoesAcessoRapido">
                    <a className="btnAcessoRapido"><span>O</span></a>
                    <a className="btnAcessoRapido"><span>O</span></a>
                    <a className="btnAcessoRapido"><span>O</span></a>
                    <a className="btnAcessoRapido"><span>O</span></a>
                </div>
            </div>
            
        </nav>
    )
}

export { NavBarMenu }