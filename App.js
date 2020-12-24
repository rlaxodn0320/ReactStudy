import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
          </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
          <h2>HTML</h2>
          HTML is HyperText Markup Language
      </article>
    );
  }
}


// 컴포넌트를 만드는 코드
class App extends Component { 
  // App이라는 클래스 리액트의 Component라는 클래스를 상속
  render() { // render라는 메소드 클래스 안의 함수는 function을 생략
             // (최신버전 기준)
    return ( //index.js 에서 <App />대신 들어갈 내용
      <div className="App">
        <Subject title="WEB" sub="world wide web"></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}

export default App;
