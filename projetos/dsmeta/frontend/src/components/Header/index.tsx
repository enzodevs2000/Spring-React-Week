import logo from '../../assets/img/logo.svg';

import './style.css';

function Header() {
  return (
    <>
      <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="Logo da DSMeta" />
                <h1>DSMeta</h1>
                <h5>Desenvolvido por Enzo Nunes</h5>
            </div>
            
        </header>
    </>
  )
}

export default Header
