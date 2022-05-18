import "./App.css";
import Footer from "./components/footer/Footer";
import ProjectsContainer from "./components/projectsContainer/ProjectsContainer";

function App() {
  return (
    <div className="App">
      <div className="upper">
        <ProjectsContainer />
      </div>
      <div className="down">
        <Footer />
      </div>
    </div>
  );
}

export default App;
