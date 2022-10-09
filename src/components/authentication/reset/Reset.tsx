import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase";
import "./style.scss";

export const Reset: React.FC = () => {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  
  const navigate = useNavigate();
  
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  const handleBack = () => {
    navigate('/login', {replace:true})
  }
  
  return (
    <div className="reset">
      <div className="reset-container">
        <input
          type="text"
          className="reset-textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className="reset-btn"
          onClick={() => sendPasswordReset(email)}
        >
          Send password reset email
        </button>

        <button
            className="reset-btn"
            onClick={handleBack}
        >
            Back
        </button>

        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}