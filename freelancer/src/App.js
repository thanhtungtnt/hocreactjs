import logo from './logo.svg';
import './App.css';
import TopMenu from './Components/topmenu/topmenu';
import Header from './Components/header/header';
import Portfolio from './Components/portfolio/portfolio';
import About from './Components/about/about';
import Contact from './Components/contact/contact';
import Footer from './Components/footer/footer';
import Copyright from './Components/copyright/copyright';
import Modal from './Components/portfolio_modals/modal';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <Header />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <Copyright />
      <Modal />
    </div>
  );
}

export default App;
