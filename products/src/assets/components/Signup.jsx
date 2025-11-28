import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [message, setMessage] = useState('');

  const sendOtp = () => {
    if (!email) return setMessage("Please enter email first.");
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    setOtpSent(true);
    console.log("Simulated OTP:", otp); // Just for dev/testing
    setMessage("OTP sent! Check console.");
  };

  const handleSignup = () => {
    if (!email || !dob || !password || !enteredOtp) {
      return setMessage("Please fill all fields.");
    }
    if (enteredOtp !== generatedOtp) {
      return setMessage("Invalid OTP.");
    }
    // Simulate user saved (save to localStorage or memory)
    localStorage.setItem("voxora_user", JSON.stringify({ email, password }));
    setMessage("Signup successful!");
    navigate("/login");
  };

  return (
    
    <div className="signup-container">
      <div className='heading'>
          <img src="/images/logo.png" alt="Voxora Logo" height="70px" width="250px" />
      
    </div>
      <h2>Sign Up</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="date" placeholder="DOB" value={dob} onChange={e => setDob(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      {otpSent && (
        <input type="text" placeholder="Enter OTP" value={enteredOtp} onChange={e => setEnteredOtp(e.target.value)} />
      )}
      <div className="btn-group">
        <button onClick={sendOtp}>Send OTP</button>
        <button onClick={handleSignup}>Sign Up</button>
      </div>
      <p className={message.includes("success") ? "success" : "error"}>{message}</p>
      <p>Already have an account? <span className="link" onClick={() => navigate('/login')}>Login</span></p>
    </div>
  );
}

export default Signup;