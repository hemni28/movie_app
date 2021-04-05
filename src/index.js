import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// react는 component와 함께 동작! 모든 것은 component!
// component란? HTML을 반환하는 함수 like App.js - function App(){}
// javascript 와 HTML 사이의 조합을 JSX라고 함
// react application은 하나의 component(즉, App)만을 rendering 해야함 >> So, 모든 컴포넌트는 application 안에 들어가야
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// react > app.js component를 root 내부에 넣어줌 >> Virtual DOM
// application 이 처음 로딩될땐 빈 HTML 로드하고 그 후에 react가 HTML을 밀어넣음 => react가 빠르게 작동하는 이유!