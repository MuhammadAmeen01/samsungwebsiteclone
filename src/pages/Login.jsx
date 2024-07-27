// import React from "react";

// const Login = () => {
    
//     return (
//     // <h1>ameen</h1>
//         // <section className="vh-100">
//         //     <div className="container-fluid h-custom">
//         //         <div className="row d-flex justify-content-center align-items-center h-100">
//         //             <div className="col-md-9 col-lg-6 col-xl-5">
//         //                 {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
//         //                     className="img-fluid" alt="Sample image"> */}
//         //             </div>
//         //             <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//         //                 <form>
//         //                     <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
//         //                         <p className="lead fw-normal mb-0 me-3">Sign in with</p>
//         //                         <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-floating mx-1">
//         //                             <i className="fab fa-facebook-f"></i>
//         //                         </button>

//         //                         <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-floating mx-1">
//         //                             <i className="fab fa-twitter"></i>
//         //                         </button>

//         //                         <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-floating mx-1">
//         //                             <i className="fab fa-linkedin-in"></i>
//         //                         </button>
//         //                     </div>

//         //                     <div className="divider d-flex align-items-center my-4">
//         //                         <p className="text-center fw-bold mx-3 mb-0">Or</p>
//         //                     </div>

//         //                     <div data-mdb-input-init className="form-outline mb-4">
//         //                         <input type="email" id="form3Example3" className="form-control form-control-lg"
//         //                             placeholder="Enter a valid email address" />
//         //                         <label className="form-label" htmlFor="form3Example3">Email address</label>
//         //                     </div>

//         //                     <div data-mdb-input-init className="form-outline mb-3">
//         //                         <input type="password" id="form3Example4" className="form-control form-control-lg"
//         //                             placeholder="Enter password" />
//         //                         <label className="form-label" htmlFor="form3Example4">Password</label>
//         //                     </div>

//         //                     <div className="d-flex justify-content-between align-items-center">
//         //                         {/* <!-- Checkbox --> */}
//         //                         <div className="form-check mb-0">
//         //                             <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
//         //                             <label className="form-check-label" htmlFor="form2Example3">
//         //                                 Remember me
//         //                             </label>
//         //                         </div>
//         //                         <a href="#!" className="text-body">Forgot password?</a>
//         //                     </div>

//         //                     <div className="text-center text-lg-start mt-4 pt-2">
//         //                         <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg"
//         //                             style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
//         //                         <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
//         //                             className="link-danger">Register</a></p>
//         //                     </div>

//         //                 </form>
//         //             </div>
//         //         </div>
//         //     </div>
//         //     <div
//         //         className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
//         //         <div className="text-white mb-3 mb-md-0">
//         //             Copyright © 2020. All rights reserved.
//         //         </div>

//         //         <div>
//         //             <a href="#!" className="text-white me-4">
//         //                 <i className="fab fa-facebook-f"></i>
//         //             </a>
//         //             <a href="#!" className="text-white me-4">
//         //                 <i className="fab fa-twitter"></i>
//         //             </a>
//         //             <a href="#!" className="text-white me-4">
//         //                 <i className="fab fa-google"></i>
//         //             </a>
//         //             <a href="#!" className="text-white">
//         //                 <i className="fab fa-linkedin-in"></i>
//         //             </a>
//         //         </div>
//         //     </div>
//         // </section>
//       <div className="container" style={{ backgroundImage: `url(${"https://t4.ftcdn.net/jpg/06/91/05/19/360_F_691051962_GFhQPOAXABmf7l706q89b2PFh6FnB1kI.jpg"})`, backgroundSize: "cover", minHeight: "100vh" }}>

//       <form>
//   <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label" style={{ display:"flex"}}>Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label" style={{ display:"flex"}}>Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1"/>
//   </div>
//   <div className="mb-3 form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//         </div>
      
//     );
    
// };
// export default Login;
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
     const [login, setBook] = useState({
    email: "",
    password: "",
  });

  console.log(login);
  const [setError] = useState(false)

  // const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {

    e.preventDefault();
    console.log(login)
    try {
      await axios.post("http://localhost:8080/login", login);
      // navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

    return (
        <div 
            className="container-fluid"
            style={{
                backgroundImage: `url(${"https://t4.ftcdn.net/jpg/06/91/05/19/360_F_691051962_GFhQPOAXABmf7l706q89b2PFh6FnB1kI.jpg"})`,
                backgroundSize: "cover",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <div className="login-form-container" style={{ backgroundColor: "transparent", padding: "20px", borderRadius: "5px" }}>
                <form className="login-form">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: "white" }}>Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"  onChange={handleChange}/>
              <div id="emailHelp" className="form-text" style={{ color: "white" }}>We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: "white" }}>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password"  onChange={handleChange}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1" style={{ color: "white" }}>Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
