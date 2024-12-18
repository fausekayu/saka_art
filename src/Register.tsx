// import React from "react";
// import { useNavigate } from 'react-router-dom';
// import "./Register.css";

// const Register: React.FC = () => {
//    const navigate = useNavigate();
  
//     const handleSubmit = (event: React.FormEvent) => {
//       event.preventDefault();
//       navigate('/landing'); 
//     };
//   return (
//     <div className="register-container">
//       <div className="register-left">
//         <h2 className="register-title">Create your Account</h2>
//         <form  onClick={handleSubmit}>
//           <div className="input-group">
//             <label>Username</label>
//             <input type="text" placeholder="Username" />
//           </div>
//           <div className="input-group">
//             <label>Email</label>
//             <input type="email" placeholder="Email" />
//           </div>
//           <div className="input-group">
//             <label>Password</label>
//             <input type="password" placeholder="Password" />
//           </div>
//           <button type="submit">Register</button>
//         </form>
//       </div>
//       <div className="register-right">
//         <h2 className="brand-title">Artcyclopedia</h2>
//       </div>
//     </div>
//   );
// };

// export default Register;