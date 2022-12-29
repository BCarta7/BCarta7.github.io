
import './App.css';
import Example from './components/navbar';
import translatorPic from "./assets/translatorPic.png";
import tictacPic from "./assets/tictacPic.png";
import treasurePic from "./assets/treasurePic.png"

function App() {
  return (
    <>
    <Example />
    <div id="title" className="title">
      <h1>Blake Carta</h1>
      <h3>Full stack web developer</h3>
      <h6>"That which is not good for the bee-hive cannot be good for the bees" -Marcus Aurelius</h6>
    </div>

    <div id= "about" className="about">
      <div>
        <p>Air force veteran, customer service extraordinaire, small team manager, and now developer/tech lover. With the guidance of LEARN academy's full stack bootcamp, I've gained skills in html, javascript, css, Ruby, and the REACT and ruby-on-rails frameworks; allowing me the joy of creating some beautiful and functional apps and projects. My passion lies in the data and functionality of the work. I'm also gaining skills as a geographic information systems technician to better collect and understand data from the real world around us. </p>
      </div>
      <div>
        <img className="mypic" src="https://ca.slack-edge.com/T04B40L2C-U03SZKKLDDZ-ee974990452a-512" alt="it's me!"/>
      </div>
    </div>

    <h3 id="projectnav">Some of my work:</h3>
    <br></br>
    <br></br>
    <br></br>
    <div id="projects" className="projects">
      <div className="project">
          <h3>Pig Latin Translator</h3>
          <a href="https://bcarta7.github.io/pig-latin-translator/" rel="noreferrer noopener" target="blank">
          <img className ="projectpic" src={translatorPic} alt="image of project" />
          </a>
          <p>My first pair-programming project in react, practicing javascript logic to develop a pig latin translator app. I consider this project largely complete as a practice experience.</p>
          <a href="https://github.com/BCarta7/pig-latin-translator" rel="noreferrer noopener" target="blank">Github</a>
      </div>
      <div className="project">
          <h3>Tic Tac Toe</h3>
          <a href="https://bcarta7.github.io/tic-tac-toe/" rel="noreferrer noopener" target="blank">
          <img className ="projectpic" src={tictacPic} alt="image of project" />
          </a>
          <p>A timeless classic, programmed from the ground up as a pair programming exercise in react. Upcoming goals include upgrade gameplay to "ultimate" tic-tac-toe, and further enhancing styling.</p>
          <a href="https://github.com/BCarta7/tic-tac-toe" rel="noreferrer noopener" target="blank">Github</a>
      </div>
      <div className="project">
          <h3>Treasure Hunt</h3>
          <a href="https://bcarta7.github.io/treasure-hunt/" rel="noreferrer noopener" target="blank">
          <img className ="projectpic" src={treasurePic} alt="image of project" />
          </a>
          <p>My first solo react project. A simple and playfully styled RNG based game, developed from the ground up. This project was massively educational in regards to react props and state, and I consider it a completed project as a learning experience.</p>
          <a href="https://github.com/BCarta7/treasure-hunt" rel="noreferrer noopener" target="blank">Github</a>
      </div>
    </div>
        
    <div id="contact" className="contact">
      <h3 className='question'>Want to build something together?</h3>
      <h4>Links to my github and Linkedin!</h4>
      <div className="hotlinks">
        <a href="https://github.com/BCarta7" rel="noreferrer noopener" target="blank">
          <i className="fa-brands fa-square-github fa-2xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/blake-carta-36b407258/" rel="noreferrer noopener" target="blank">
          <i className="fa-brands fa-linkedin fa-2xl"></i>
        </a>
        </div>
        <h4>or contact me at cannolidude@msn.com, and I'll respond ASAP</h4>
    </div>

    </>
  );
}

export default App;
