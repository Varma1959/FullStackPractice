import './App.css';
import React, { useState } from "react";
import axios from "axios";
import LoadData from './LoadData';

function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const Register = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/register", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setRegisterStatus(response.data.message);
      } else {
        setRegisterStatus("Account Created Successfully");
      }
    });
  };

  const Login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/api/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(`Welcome, ${response.data[0].username}`);
      }
    });
  };

  return (
    <div className="container">
      <div className="loginForm">
        <form>
          <h4> Login Here</h4>
          <label htmlFor="username"> Username</label>
          <input
            className="textInput"
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Your Username"
            required
          />
          <label htmlFor="password"> Password</label>
          <input
            className="textInput"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            required
          />
          <input className="button" type="submit" onClick={Login} value="Login" />
          <h1> {loginStatus}</h1>
        </form>
      </div>

      <div className="loginForm">
        <form>
          <h4> Register Here</h4>
          <label htmlFor="email"> Email Address*</label>
          <input
            className="textInput"
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email Address"
            required
          />
          <label htmlFor="username"> Username*</label>
          <input
            className="textInput"
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Your Username"
            required
          />
          <label htmlFor="password"> Password*</label>
          <input
            className="textInput"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            required
          />
          <input
            className="button"
            type="submit"
            onClick={Register}
            value="Create an account"
          />
          <h1> {registerStatus}</h1>
        </form>
      </div>

      <LoadData />
    </div>
  );
}

export default App;






// import './App.css';
// import React, { useState } from "react";
// import axios from "axios";
// import LoadData from './LoadData';


// function App() {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginStatus, setLoginStatus] = useState("");
//   const [registerStatus, setRegisterStatus] = useState("");

//   const Register = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:3001/api/register", {
//       email: email,
//       username: username,
//       password: password,
//     }).then((response) => {
//       if (response.data.message) {
//         setRegisterStatus(response.data.message);
//       } else {
//         setRegisterStatus("Account Created Successfully");
//       }
//     });
//   };

//   const Login = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:3001/api/login", {
//       username: username,
//       password: password,
//     }).then((response) => {
//       if (response.data.message) {
//         setLoginStatus(response.data.message);
//       } else {
//         setLoginStatus(`Welcome, ${response.data[0].username}`);
//       }
//     });
//   };

//   return (
//     <>
//     <div className="container">
//       <div className="loginForm">
//         <form>
//           <h4> Login Here</h4>
//           <label htmlFor="username"> Username</label>
//           <input
//             className="textInput"
//             type="text"
//             name="username"
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter Your Username"
//             required
//           />
//           <label htmlFor="password"> Password</label>
//           <input
//             className="textInput"
//             type="password"
//             name="password"
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter Your Password"
//             required
//           />
//           <input className="button" type="submit" onClick={Login} value="Login" />
//           <h1> {loginStatus}</h1>
//         </form>
//       </div>

//       <div className="loginForm">
//         <form>
//           <h4> Register Here</h4>
//           <label htmlFor="email"> Email Address*</label>
//           <input
//             className="textInput"
//             type="text"
//             name="email"
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter Your Email Address"
//             required
//           />
//           <label htmlFor="username"> Username*</label>
//           <input
//             className="textInput"
//             type="text"
//             name="username"
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter Your Username"
//             required
//           />
//           <label htmlFor="password"> Password*</label>
//           <input
//             className="textInput"
//             type="password"
//             name="password"
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter Your Password"
//             required
//           />
//           <input
//             className="button"
//             type="submit"
//             onClick={Register}
//             value="Create an account"
//           />
//           <h1> {registerStatus}</h1>
//         </form>
//       </div>
//     </div>
     
//     <LoadData/>
//     </>




//   );
// }





// export default App;

// import './App.css';
// import React, {useState} from "react";
// import axios from "axios";

// function App() {

//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginStatus, setLoginStatus] = useState("");
//   const [registerStatus, setRegisterStatus] = useState("");


//   const Register =(e)=>{
//  e.preventDefault();
//  axios.post("http://localhost:3001/api/register", {
//   email: email,
//   usename: username,
//   password: password,
//  }).then((response)=>{
//   if(response.data.message){
//     setRegisterStatus(response.data.message);
//   }else{
//     setRegisterStatus("Account Created Succesfully") 
//   }
//  })
//   }

//  const Login =(e)=>{
//   e.preventDefault();
//  axios.post("http://localhost:3001/api/login", {
//   usename: username,
//   password: password,
//  }).then((response)=>{
//   if(response.data.message){
//     setLoginStatus(response.data.message);
//   }else{
//     setLoginStatus(response.data[0].email);
//   }
//  })
//   }



//   return (
//     <div className="container">
//       <div className="loginForm">
//         <form>
//           <h4> Login Here</h4>
//           <label htmlFor="username"> Username</label>
//           <input className="textInput" type="text" name="username" onChange={(e)=>{setUsername(e.target.value)}} placehoilder="Enter Your Username" required/>
//           <label htmlFor="password"> Password</label>
//           <input className="textInput" type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} placehoilder="Enter Your Password" required/>
//           <input className="button" type="submit" onClick={Login} value="Logined"></input>
//           <h1> {loginStatus}</h1>
//         </form>
//       </div>

//       <div className="loginForm">
//         <form>
//           <h4> Register Here</h4>
//           <label htmlFor="email"> Email Address*</label>
//           <input className="textInput" type="text" name="email" onChange={(e)=>setEmail(e.target.value)} placehoilder="Enter Your Email Address" required/>
//           <label htmlFor="username"> Username*</label>
//           <input className="textInput" type="text" name="username" onChange={(e)=>{setUsername(e.target.value)}} placehoilder="Enter Your Username" required/>
//           <label htmlFor="password"> Password*</label>
//           <input className="textInput" type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} placehoilder="Enter Your Password" required/>
//           <input className="button" type="submit" onClick={Register} value="Create an account"></input>
//           <h1> {registerStatus}</h1>
//         </form>
//       </div>



     
//     </div>
//   );
// }

// export default App;
