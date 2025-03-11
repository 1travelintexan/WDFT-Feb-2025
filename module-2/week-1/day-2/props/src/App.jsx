import "./App.css";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { PetCard } from "./components/PetCard";
import ragnarsPicture from "./assets/ragnar.png";
import yukisSisterPicture from "./assets/yukisSister.avif";
function App() {
  const pets = [
    {
      name: "Feba",
      type: "Cat",
      owner: "Sosha",
      age: 9,
      picture:
        "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Yuki",
      type: "Small Dog",
      owner: "Rojda",
      age: "6m",
      picture: yukisSisterPicture,
    },
    {
      name: "Ragnar",
      type: "Dog",
      owner: "Joshua",
      age: 4,
      picture: ragnarsPicture,
    },
  ];
  return (
    <>
      {/* this is calling or 'using' the component  */}
      <Navbar />
      <main>
        <h1>Props Day</h1>
        <PetCard onePet={pets[1]} ironhacker={true} pizza={"pinnapple"} />
        <PetCard onePet={pets[2]} pizza={"Pepp"} />
        <PetCard onePet={pets[0]} pizza={"Mushroom"} />
      </main>
      <Footer />
    </>
  );
}

export default App;
