import "./App.css";
import {
    Contact,
    Footer,
    Home,
    Navbar,
    Projects,
    Left,
    Right,
    ProjectCard,
} from "./components";
import About from "./components/About";
import "./components/style.css";

function App() {
    return (
        <div className="App">
            <Left />
            <Navbar />
            <Home />
            <About />
            <Projects project={ProjectCard} />
            <Contact />
            <Footer />
            <Right />
        </div>
    );
}

export default App;
