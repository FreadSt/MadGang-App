import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./style.scss";

const Login: React.FC = () => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  
  const navigate = useNavigate();
  
  return (
    <div className="login">
      <div className="login-container">
        <input
          type="text"
          className="login-textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login-textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login-btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="login-btn login-google" 
                onClick={() => {signInWithGoogle(); 
                                navigate("/")
                              }
        }>
          Login with Google
        </button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Login
