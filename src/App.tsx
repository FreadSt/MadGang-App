import './App.scss';
import { MainPage } from './pages/mainpage/MainPage';
import { SecondPage } from './pages/secondpage/SecondPage';
import {ThirdPage} from "./pages/thirdpage/ThirdPage"
import { BrowserRouter as Router, Route, Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/"  element={<MainPage/>} />
            <Route path ="/secondpage" element={<SecondPage/>} />
            <Route path ="/secondpage/:id" element={<ThirdPage/>} />
          </Routes>
      </div>
    </Router>
  )
}

export default App;
