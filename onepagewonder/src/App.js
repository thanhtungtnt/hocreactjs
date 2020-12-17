// import logo from './logo.svg';
import './App.css';
import TopMenu from "./Component/TopMenu/TopMenu.js";
import Header from "./Component/Header/Header.js";
import Content from "./Component/Content/Content.js";
import Footer from "./Component/Footer/Footer.js";
function App() {
  return (
    <div className="App">
      <TopMenu />
      <Header />
      <Content title="Toi la Tung Pham" desc="Dang hoc lap trinh ReactJS" />
      <Footer />
    </div>
  );
}

export default App;
