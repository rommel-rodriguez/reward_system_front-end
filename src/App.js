import logo from './logo.svg';
import './App.css';
import Base from './components/common/Base/Base';
import Signup from './components/pages/Authentication/Signup';
import SignIn from './components/pages/Authentication/SignIn';
import { useState } from 'react';

function App() {
  // let content = <Signup/>;
  let content = <SignIn/>;

  return (
    <Base>
      {content}
    </Base>
  );
}

export default App;
