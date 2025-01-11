import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Fondo from "./assets/fondo.jpg";

function App() {

  const bgImagen = {
    backgroundImage: `url( ${Fondo})`,
    bacgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize:"cover",
    position: "relative"
  }

  return (
    <div /*style={bgImagen}*/ className="overflow-hidden min-h-screen">
        <NavBar/>
        <Hero/>

    </div>
  )
}

export default App
