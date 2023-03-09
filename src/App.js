
import './App.css';
import Example from './components/navbar';
import translatorPic from "./assets/translatorPic.png";
import tictacPic from "./assets/tictacPic.png";
import treasurePic from "./assets/treasurePic.png"
import flavianPic from "./assets/FlavianPic.png"
import catPic from "./assets/catPic.png"

function App() {
  return (
    <>
    <Example />
    <div id="titleNav">
      <br/>
    </div>
    <div id="title" className="title">
      <h1>Blake Carta</h1>
      <h3>Full stack web developer</h3>
      <h6>"That which is not good for the bee-hive cannot be good for the bees" -Marcus Aurelius</h6>
    </div>

    <div id= "about" className="box-border grid grid-cols-1 gap-5 place-items-center mx-16 my-40 md:grid-cols-2">
      <div>
        <p className="text-center">Air force veteran, customer service extraordinaire, small team manager, and now developer/tech lover. With the guidance of LEARN academy's full stack bootcamp, I've gained skills in html, javascript, css, Ruby, and the REACT and ruby-on-rails frameworks; allowing me the joy of creating some beautiful and functional apps and projects. My passion lies in the data and functionality of the work. I'm also gaining skills as a geographic information systems technician to better collect and understand data from the real world around us. </p>
      </div>
      <div>
        <img className="mypic" src="https://ca.slack-edge.com/T04B40L2C-U03SZKKLDDZ-ee974990452a-512" alt="it's me!"/>
      </div>
    </div>

    <div id="projectnav">
      <br/>
    </div>
    <h3>Some of my work:</h3>
    <br></br>
    <br></br>
    <br></br>
    <div id="projects" className="grid grid-cols-1 gap-10 mx-16 my-6 items-baseline md:grid-cols-2 lg:grid-cols-3">
      <div className="project">
          <h3>Pig Latin Translator</h3>
          <a href="https://bcarta7.github.io/pig-latin-translator/" rel="noreferrer noopener" target="blank">
          <img className ="projectpic" src={translatorPic} alt="pig latin translator"/>
          </a>
          <br></br>
          <p>My first pair-programming project in react, practicing javascript logic to develop a pig latin translator app. I consider this project largely complete as a practice experience.</p>
          <a href="https://github.com/BCarta7/pig-latin-translator" rel="noreferrer noopener" target="blank">Github</a>
      </div>
      <div className="project">
          <h3>Tic Tac Toe</h3>
          <a href="https://bcarta7.github.io/tic-tac-toe/" rel="noreferrer noopener" target="blank">
          <img className ="projectpic" src={tictacPic} alt="tic tac toe" />
          </a>
          <br></br>
          <p>A timeless classic, programmed from the ground up as a pair programming exercise in react. Upcoming goals include upgrade gameplay to "ultimate" tic-tac-toe, and further enhancing styling.</p>
          <a href="https://github.com/BCarta7/tic-tac-toe" rel="noreferrer noopener" target="blank">Github</a>
      </div>
      <div className="project">
          <h3>Treasure Hunt</h3>
          <a href="https://bcarta7.github.io/treasure-hunt/" rel="noreferrer noopener" target="blank">
          <img className ="projectpic" src={treasurePic} alt="spooky treasure hunt" />
          </a>
          <br></br>
          <p>My first solo react project. A simple and playfully styled RNG based game, developed from the ground up. This project was massively educational in regards to react props and state, and I consider it a completed project as a learning experience.</p>
          <a href="https://github.com/BCarta7/treasure-hunt" rel="noreferrer noopener" target="blank">Github</a>
      </div>
      <div className="project">
          <h3>Cat Tinder</h3>
          <a href="https://www.youtube.com/watch?v=8LVSm0Ov_JM" rel="noreferrer noopener" target="blank">
          <img className ="projectpic" src={catPic} alt="cat tinder" />
          </a>
          <br></br>
          <p>A mock Tinder... for cats. My first decoupled project, pair programmed from the ground up in separate React and Ruby-on-Rails applications using a postgreSQL database. Future improvements to this project include aesthetic improvements, user login functionality, and a daily cap on allowed views.</p>
          <a href="https://github.com/BCarta7/cat-tinder-frontend" rel="noreferrer noopener" target="blank">Github frontend</a>
          <a href="https://github.com/BCarta7/cat-tinder-backend" rel="noreferrer noopener" target="blank">Github backend</a>
      </div>
      <div className="project">
          <h3>Flavian Fairway</h3>
          <a href="https://youtu.be/u3KApd814ZI" rel="noreferrer noopener" target="blank">
          <img className ="projectpic" src={flavianPic} alt="Flavian Fairway" />
          </a>
          <br></br>
          <p>Our capstone project during LEARN academy's coding bootcamp, and my first monolithic web application, built from the ground up in a team of four using React in RoR, with a posgreSQL database. Users can update personal best sports metrics and compare them to other users, with a functional leaderboard in place to track highest performers. Future goal is to include HTML Geolocation to automatically update user metrics, as opposed to manual entry.</p>
          <a href="https://github.com/BCarta7/flavian-fairway" rel="noreferrer noopener" target="blank">Github</a>
      </div>
    </div>
        
    <div id="contact" className="flex flex-col text-center my-40">
      <h3 className='text-green-400'>Want to build something together?</h3>
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
