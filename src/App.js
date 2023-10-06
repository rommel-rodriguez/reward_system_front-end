import logo from './logo.svg';
import './App.css';
import Base from './components/common/Base/Base';
import SignupPage from './components/pages/Authentication/SignupPage';
import SignInPage from './components/pages/Authentication/SignInPage';
import { useState } from 'react';
import authService from './services/authService';
import { useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      console.log("Testing user-logged state");

      const isValid = await authService.isTokenValid();
      if (isValid) {
        // Token is valid and server responded positively, do something
      } else {
        // Token is not valid or server responded negatively, do something else
      }
      setIsLoading(false);  // Set loading to false once validation is complete
    };

    validateToken();
  }, []);  // Empty array means this useEffect runs once, similar to componentDidMount

  if (isLoading) {
    return <div>Loading...</div>;  // Show a loading spinner or message while validating
  }
  // TODO: Must test whether the User is logged in here

  // let content = <SignInPage/>;
  let content = <SignupPage/>;
  // let content = <SignIn/>;

  return (
    // <Base>
    //   {content}
    // </Base>
    content
  );
}

export default App;
