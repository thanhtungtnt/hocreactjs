import React, {Component} from 'react';
import './App.css';
import NoiDung from './NoiDung.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai: 0
    }
  }

static getDerivedStateFromProps(nextProps, prevState) {
  console.log('1. getDerivedStateFromProps run | nextProps = ' + nextProps.status + ' | prevState = ' + prevState.value);
  return 1;
}

  shouldComponentUpdate(nextProps, nextState) {
    console.log('1. shouldComponentUpdate run');
    return true;
  }

  getSnapshotBeforeUpdate(){
    console.log('2. getSnapshotBeforeUpdate run');
    return 0;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('3. componentDidUpdate run');
  }
  

  componentDidMount() {
    console.log('3. componentDidMount run');
  }
  
  capNhatState = () => {
    console.log('====== After click update ==== ');
    this.setState({
      trangthai: 1
    });
  }
  
  render() {
    console.log('2. render run');
    console.log('Trang thai: ' + this.state.trangthai);
    return (
      <div>
        <button onClick={()=>{this.capNhatState();}}>Update State</button>
        <NoiDung status={this.state.trangthai}></NoiDung>
      </div>
    );
  }
}

export default App;
