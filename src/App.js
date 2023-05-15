import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Articles from "./Components/Articles";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <div className="mb-4">
        
      <Navbar />
      </div>
      <Header />
      <About/> 
      <Articles/>
      <Footer /> 

    </div>
  );
}

export default App;
