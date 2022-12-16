import "./App.css";
import {
  Contact,
  Footer,
  Home,
  Navbar,
  Projects,
  Left,
  Right,
} from "./components";
import About from "./components/About";
import "./components/style.css";

function App() {
  return (
    <div className="App">
      <Left />
      <Navbar />
      <Home />
      <Projects />
      <Contact />
      <About />
      <Footer />
      <Right />
    </div>
  );
}

export default App;
