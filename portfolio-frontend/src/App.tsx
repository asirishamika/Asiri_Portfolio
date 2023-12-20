import { Header, Footer, About, Skills, Testamonials, Work } from "./Container";
import { Navbar } from "./Components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testamonials />
      <Footer />
    </div>
  );
};

export default App;
