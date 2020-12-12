import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Cach khoi tao component #1
function One(props){
  //chỉ có 1 thẻ div ngoài cùng, 2 thẻ sẽ báo lỗi
  //muốn viết nhiều dòng thì cho vào dấu ngoặc : return (dong 1.... dong 2.....);
  return(
    <div>
      <h3>Nỗ lực để {props.text}</h3>
      <h3>Nỗ lực để tốt hơn 1% mỗi ngày</h3>
    </div>
  );
}

//Cach khoi tao component #2
var Two = function(){
  return(
    <div>
      <h3>Không bao giờ bỏ cuộc</h3>
      <h3>Vượt qua nỗi sợ</h3>
    </div>
  );
}

//Cach khoi tao component #3
var Three = () => (
                    <div>
                      <h3>Cố lên</h3>
                      <h3>Linh Đan</h3>
                    </div>
                  );

//Cach khoi tao component #4
class Four extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.text} xinh</h3>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <One text="thành công"/>
        <One text="thất bại"/>
        <Two/>
        <Three/>
        <Four text="Linh Đan"/>
        <Four text="Nhím"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
