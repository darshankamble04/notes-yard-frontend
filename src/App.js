import './App.css';
import '../src/css/utils.css';
import Home from './components/screens/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MyNotebooks from './components/screens/myNotebooks/MyNotebooks';
import Notes from './components/screens/notes/Notes';
import Register from './components/screens/auth/Register';
import Login from './components/screens/auth/Login';
import ResetPass from './components/screens/auth/ResetPass';
import ForgotPass from './components/screens/auth/ForgotPass';
import AllBookmarkNB from './components/screens/myNotebooks/AllBookmarkNB';
import AllNotes from './components/screens/notes/AllNotes';

function App() {
  return (
    <>
        
          <Router>
            <Routes>

              <Route Exact path="/" element={<Home />}></Route>
              <Route Exact path="/mynotebooks" element={<MyNotebooks />}></Route>
              <Route Exact path="/mynotebooks/:id/:name" element={<Notes />}></Route>
              <Route Exact path="/allnotes" element={<AllNotes />}></Route>
              <Route Exact path="/register" element={<Register />}></Route>
              <Route Exact path="/login" element={<Login />}></Route>
              <Route Exact path="/resetpassword" element={<ResetPass />}></Route>
              <Route Exact path="/forgotpassword" element={<ForgotPass />}></Route>
              <Route Exact path="/allbookmarkednotebooks" element={<AllBookmarkNB />}></Route>

            </Routes>
          </Router>

    </>
  );
}

export default App;
