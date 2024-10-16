import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "./style/landingpage.css";
import Intro from "./components/Intro";
import Tranding from "./components/Tranding"
import SuperHero from "./components/SuperHero";
function App() {
  return (
    <div>
      {/* Intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* intro section */}

      {/* Tranding Section */}

      <div className="tranding">
        <Tranding />
      </div>

      {/* end of Tranding Section */}
      {/* Tranding Section */}

      <div className="superhero">
        <SuperHero />
      </div>

      {/* end of Tranding Section */}
    </div>
  );
}

export default App;
