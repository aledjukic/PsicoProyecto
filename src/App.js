import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignInPage'
import SignUp from './pages/SignUpPage'

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/signin" element={<SignIn />} exact/>
        <Route path="/signup" element={<SignUp />} exact/>
      </Routes>
    </Router>
  );
}

export default App;
