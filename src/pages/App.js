import '../Styles/style.css';
import { FaBars, FaBackward } from 'react-icons/fa';
import { Modal } from 'react-modal';
import logo from '../Styles/LOGO-SENAI.png'

async function modalOpen() {
  
}

function App() {
  return (
    <div className="container">
      <nav className="navBar">
        <button className="iconButton">
          <FaBars
            size={25}
            color="#000"
          />
        </button>
        <a href="" className="textDecor">SAIR</a>
      </nav>
      <div className="bodyContainer">
        <button className="iconButtonBack">
          <FaBackward 
            size={10}
            color="#000"
          />
        </button>
        <div className="textContainer">
          <text className="text">Emprego - AUXILIAR DE MANUTENÇÃO manutenção predial / industrial</text>
          <div className="separation"/>
          <text className="textTittle">Local de trabalho</text>
          <text className="textInfo" href="">https://sesisenaisp.jobs.recrut.ai/job/Y5UR4G</text>
          <div className="separation"/>
          <text className="textTittle">Horário</text>
          <text className="textInfo">Segunda a domingo sendo 8h diárias, com 1h de intevalo e duas folgas semanais a escolher</text>
          <div className="separation"/>
          <text className="textTittle">Beneficios</text>
          <text className="textInfo">Não informado</text>
        </div>

        <div className="requisitesContainer">
          <text>pré requisitos</text>
          <button className="requisitesButton">Conhecimento básico na área de manutenção predial, podendo compreender as áreas de Alvenaria, Pintura, Instalações, Eletricas e instalações hidráulicas</button>
          <div className="separation"/>
          <button className="requisitesButton">https://sesisenaisp.jobs.recrut.ai/job/Y5UR4G</button>
          <div className="separation"/>
          <text>Salário</text>
          <p>R$ 1920,00</p>
          <div className="separation"/>
          <text>OBS:</text>
          <p>Inscreva-se nesse link: https://sesisenaisp.jobs.recrut.ai/job/Y5UR4G</p>
        </div>
      </div>
      <div className="candidatura">
        <button className="requisitesButton"> Acesse as candidaturas aqui </button>
      </div>
      <footer className="footer">
        <img src={logo} style={{ width: '200px', marginTop: '10px' }}/>
      </footer>
    </div>
  );
}

export default App;
