import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { ProfilePage } from "./pages/ProfilePage";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { NotFound } from "./pages/NotFound";
import { useState } from "react";
import { PetDetailPage } from "./pages/PetDetailPage";
import { v4 as uuidv4 } from "uuid";
import { CreatePetPage } from "./pages/CreatePetPage";
function App() {
  const pets = [
    {
      id: uuidv4(),
      name: "Feba",
      isGood: true,
      type: "Cat",
      owner: "Sosha",
      age: 9,
      picture:
        "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: uuidv4(),
      name: "Yuki",
      isGood: false,
      type: "Dog",
      owner: "Rojda",
      age: "6m",
      picture:
        "https://media.istockphoto.com/id/905010514/fr/photo/m%C3%A9lange-de-chihuahua-et-de-pom%C3%A9ranie.jpg?s=1024x1024&w=is&k=20&c=V8bajXUBjYCjKfWaijvODynvhH_a0-pFayls0F6dg9E=",
    },
    {
      id: uuidv4(),
      name: "Ragnar",
      type: "Dog",
      isGood: true,
      owner: "Joshua",
      age: 4,
      picture:
        "https://images.unsplash.com/photo-1475954704693-ac6850a71ee0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: uuidv4(),
      name: "Kiwi",
      type: "Bird",
      isGood: false,
      owner: "Joshua",
      age: 2,
      picture:
        "https://www.aejames.com/wp-content/uploads/2019/01/Parakeet-Care-1-900x600.jpg",
    },
  ];
  const [petsState, setPetsState] = useState(pets);
  function handleSortPets() {
    const petsCopy = JSON.parse(JSON.stringify(petsState));
    petsCopy.sort((a, b) => a.name.localeCompare(b.name));
    console.log("sorted: ", petsCopy);
    setPetsState(petsCopy);
  }
  return (
    <>
      <Navbar />
      <button onClick={handleSortPets}>Sort</button>
      <main>
        <h1>React Routes</h1>
        {/* Routes with an 'S' is not self closing but it 'wraps' all the Route  */}
        <Routes>
          {/* Route without an 'S' is self closing  */}
          <Route path="/" element={<HomePage petsState={petsState} />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/create-a-pet"
            element={
              <CreatePetPage
                setPetsState={setPetsState}
                petsState={petsState}
                handleSortPets={handleSortPets}
              />
            }
          />
          {/* this is a dynamic route example  */}
          <Route
            path="/details/:petId"
            element={<PetDetailPage petsState={petsState} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
