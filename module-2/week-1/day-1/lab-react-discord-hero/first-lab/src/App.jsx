// src/App.jsx
import "./App.css";
import logo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";
import backgroundImage from "./assets/discord-background.png";
function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={logo} alt="Discord logo" className="logo" />
        <img src={menuIcon} alt="menu icon" />
      </nav>
      <section className="text-container">
        <h1>IMAGINE A PLACE ...</h1>
        <p>
          ... where you can belong to a school club, a gaming group, or a
          worldwide art community. Where justyou and a handful of friends place
          that makes it easy to <br></br>talk every day and hang out more often.
        </p>
      </section>
      <section className="btn-container">
        <button className="download-btn">Download for Mac</button>
        <button className="open-btn">Open Discord in your browser</button>
      </section>
      <div className="background-image-container">
        <img src={backgroundImage} alt="background image" />
      </div>
    </div>
  );
}

export default App;
