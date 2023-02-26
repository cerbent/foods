import './App.css';
import "./styles/index.scss"
import Header from "./components/header/header";
import Hero from "./components/hero/Hero";
import Choose from "./components/choose/Choose";
import About from "./components/about/About";
import Fresh from "./components/fresh/Fresh";
import Cooked from "./components/cooked/Cooked";
import Special from "./components/special/Special";
import Happy from "./components/happy/Happy";
import Search from "./components/search/Search";
import Footer from "./components/footer/Footer";
import Footer2 from "./components/footer2/Footer2";

function App() {
  return (
    <div className="App">
     <Header/>
        <Hero/>
        <Choose/>
        <About/>
        <Fresh/>
        <Cooked/>
        <Special/>
        <Happy/>
        <Search/>
        <Footer/>
        <Footer2/>
    </div>
  );
}

export default App;
