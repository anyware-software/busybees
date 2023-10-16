
import './App.css';
import logo from './logo.png'
function App() {
  return (
    <div className="home-container">
      <img alt="logo" src={logo} style={{width:"150px",height:"250px"}} />
    <h1>{'Busy Bees Preschool'}</h1>
    <div className="about">
      <h2>About Us</h2>
      <p>
        Busy Bees Preschool Sheikh Zayed: Where Milestones are celebrated every day. Founded in 2012.
      </p>
      <p>English and French Sections Contact us on: 0101 8944220/1</p>
    </div>
    <div className="how-to-help">
      <h2>How to help your child settle-in smoothly?</h2>
      <ul>
        <li>Speak nicely and positively about preschool at home</li>
        <li>Help your child's teacher know him/her best by communicating all Information that might help</li>
        <li>Make a quick, relaxed & comforting goodbye</li>
        <li>Encourage your child to communicate & engage with other children ex. Play dates.</li>
        <li>Expect changes {"("}varying petite, possible accidents if potty trained, change in nap time pattern..etc</li>
      </ul>
    </div>
    <div className="contact">
      <h2>Contact Us</h2>
      <p>
        Address: The Address compound inside the clubhouse, 900 m from AIS Sheikh Zayed, Entrance 2 / 6th of October City
      </p>
      <p>
        Facebook page: <a href="https://web.facebook.com/profile.php?id=100063858398292">Busy Bees Preschool Facebook</a>
      </p>
      <p>
        Instagram: <a href="https://www.instagram.com/busybees.preschool.sheikhzayed/?igshid=MzRlODBiNWFlZA%3D%3D">Busy Bees Preschool Instagram</a>
      </p>
    </div>
  </div>

  );
}

export default App;
