import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'
function Login() {
  const [user, setUser] = useState({ email: '', password: '' });
 
  const handleChange = (e) => {
     const { name, value } = e.target;
     setUser((prevState) => ({ ...prevState, [name]: value }));
  };
 
  const handleSubmit = (e) => {
     e.preventDefault();
     alert('Successfully logged in');
     setUser({ email: '', password: '' });
  };
 
  return (
    
     <div className='box'>
       <h2>Login</h2>
       <form onSubmit={handleSubmit}>
        <h3>Username:</h3>
         <input type="email" className="Resize" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
         <br></br>
         <h3>Password:</h3>
         <input type="password" className="Resize" name="password" placeholder="Password" value={user.password} onChange={handleChange} required minLength="8" maxLength="8" />
         <br></br>
         <br></br>
         <button type="submit" className='But'><b>Submit</b></button>
       </form>
       <p>
         <b>Don't have an account? </b><Link to="/signup"><b>Sign up</b></Link>
       </p>
     </div>
     
  );
 }
 
 function Signup() {
  const [user, setUser] = useState({ email: '', password: '', gender: '', dateOfBirth: '' });
 
  const handleChange = (e) => {
     const { name, value } = e.target;
     setUser((prevState) => ({ ...prevState, [name]: value }));
  };
 const validateDate = (userInput) => {
  const currentDate = new Date();
  const selectedDate = new Date(userInput);
 
  if (selectedDate > currentDate) {
     alert('You cannot select a future date of birth.');
     return false;
  }
  return true;
 };
  const handleSubmit = (e) => {
     e.preventDefault();
     alert('Successfully signed up');
     setUser({ email: '', password: '', gender: '', dateOfBirth: '' });
  };

 
  return (
    
     <div className='box'>
       <h2>Sign up</h2>
       <form onSubmit={handleSubmit}>
        <h3>Username:</h3>
         <input type="email" className="Resize" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
         <br></br>
         <h3>Password:</h3>
         <input type="password" className="Resize" name="password" placeholder="Password" value={user.password} onChange={handleChange} required minLength="8" maxLength="8" />
         <br></br>
         <div>
          <h3>Choose Your Gender</h3>
           <input type="radio" name="gender" value="male" onChange={handleChange} required /> Male
           <input type="radio" name="gender" value="female" onChange={handleChange} required /> Female
         </div>
         <h3>Select your Date Of Birth</h3>
         <input type="date" className="Resize" name="dateOfBirth" value={user.dateOfBirth} onChange={handleChange} required />
         <br></br> 
         <br></br>
     <div class="inputfield">
     <label>Phone Number:   </label>
     <textarea class="text" required></textarea>
  </div> 
  <br></br>
 <div class="inputfield">
     <label>Address:   </label>
     <textarea class="textarea" required></textarea>
  </div> 
  <br></br>
 <div class="inputfield">
     <label>Postal Code:   </label>
     <input type="text" class="input" required/>
  </div> 
  <br></br>
  <button type="submit" className='But'><b>Submit</b></button>
  </form>
  <p>
  <Link to="/">Login</Link>
</p>
</div>
  );
}
 
 function Alert() {
  return <h2>Please use the login or signup forms</h2>;
 }
 function App() {
  return (
     <Router>
       <div>
 
         <Routes>
           <Route path="/" exact element={<Login />} />
           <Route path="/signup" element={<Signup />} />
           <Route element={<Alert />} />
         </Routes>
       </div>
     </Router>
  );
 }
 
 export default App; 





