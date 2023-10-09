import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(`Welcome, ${response.data[0].username}`);
        }
      });
  };

  const [email, setEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/register", {
        email: email,
        username: newUsername,
        password: newPassword,
      })
      .then((response) => {
        if (response.data.message) {
          setRegisterStatus(response.data.message);
        } else {
          setRegisterStatus("Account Created Successfully");
        }
      });
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              React Auth
            </Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/login">
            <div className="container mt-5">
              <h1>Login</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter Your Username"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <h1>{loginStatus}</h1>
              </form>
            </div>
          </Route>
          <Route path="/register">
            <div className="container mt-5">
              <h1>Register</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email Address"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="newUsername" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="newUsername"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="Enter Your Username"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleRegister}
                >
                  Register
                </button>
                <h1>{registerStatus}</h1>
              </form>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginStatus, setLoginStatus] = useState("");

//   const handleLogin = () => {
//     axios
//       .post("http://localhost:3001/api/login", {
//         username: username,
//         password: password,
//       })
//       .then((response) => {
//         if (response.data.message) {
//           setLoginStatus(response.data.message);
//         } else {
//           setLoginStatus(`Welcome, ${response.data[0].username}`);
//         }
//       });
//   };

//   return (
//     <div className="container mt-5">
//       <h1>Login</h1>
//       <form>
//         <div className="mb-3">
//           <label htmlFor="username" className="form-label">
//             Username
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter Your Username"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter Your Password"
//             required
//           />
//         </div>
//         <button type="button" className="btn btn-primary" onClick={handleLogin}>
//           Login
//         </button>
//         <h1>{loginStatus}</h1>
//       </form>
//     </div>
//   );
// }

// function Signup() {
//   const [email, setEmail] = useState("");
//   const [newUsername, setNewUsername] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [registerStatus, setRegisterStatus] = useState("");

//   const handleRegister = () => {
//     axios
//       .post("http://localhost:3001/api/register", {
//         email: email,
//         username: newUsername,
//         password: newPassword,
//       })
//       .then((response) => {
//         if (response.data.message) {
//           setRegisterStatus(response.data.message);
//         } else {
//           setRegisterStatus("Account Created Successfully");
//         }
//       });
//   };

//   return (
//     <div className="container mt-5">
//       <h1>Register</h1>
//       <form>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email Address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter Your Email Address"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="newUsername" className="form-label">
//             Username
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="newUsername"
//             value={newUsername}
//             onChange={(e) => setNewUsername(e.target.value)}
//             placeholder="Enter Your Username"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="newPassword" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="newPassword"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             placeholder="Enter Your Password"
//             required
//           />
//         </div>
//         <button
//           type="button"
//           className="btn btn-success"
//           onClick={handleRegister}
//         >
//           Register
//         </button>
//         <h1>{registerStatus}</h1>
//       </form>
//     </div>
//   );
// }

// function Welcome() {
//   return (
//     <div className="container mt-5">
//       <h1>Welcome</h1>
//       <p>You have successfully logged in!</p>
//     </div>
//   );
// }

// function RegisteredSuccessfully() {
//   return (
//     <div className="container mt-5">
//       <h1>Registered Successfully</h1>
//       <p>Your registration was successful!</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="container">
//             <Link to="/" className="navbar-brand">
//               React Auth
//             </Link>
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to="/login" className="nav-link">
//                   Login
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/register" className="nav-link">
//                   Register
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </nav>
//         <Routes>
//           <Route path="/login" component={Login} />
//           <Route path="/register" component={Signup} />
//           <Route path="/welcome" component={Welcome} />
//           <Route
//             path="/registered-success"
//             component={RegisteredSuccessfully}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

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

//       <LoadData />
//     </div>
//   );
// }

// export default App;
