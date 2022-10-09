import './App.scss';
import Login from './components/authentication/Login';
import { MainPage } from './pages/mainpage/MainPage';
import { SecondPage } from './pages/secondpage/SecondPage';
import { ThirdPage } from "./pages/thirdpage/ThirdPage";
import { Dashboard } from './components/authentication/dashboard/Dashboard';
import { Reset } from './components/authentication/reset/Reset';
import { Register } from './components/authentication/register/Register';
import { BrowserRouter as Router, Route, Routes
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/"  element={<MainPage/>} />
            <Route path ="/secondpage" element={<SecondPage/>} />
            <Route path ="/secondpage/:id" element={<ThirdPage/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/reset" element={<Reset/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
      </div>
    </Router>
  )
}

export default App;
