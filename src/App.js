import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignInPage'
import SignUp from './pages/SignUpPage'
import SignUpPsico from './pages/SignUpPsicologos'


function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/signin" element={<SignIn />} exact/>
        <Route path="/signup" element={<SignUp />} exact/>
        <Route path="/signup-psico" element={<SignUpPsico />} exact/>
      </Routes>
    </Router>
  );
}

export default App;
