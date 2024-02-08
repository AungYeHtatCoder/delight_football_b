import React, { useEffect, useState } from 'react'
import logo from '../../assets/img/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import BASE_URL from '../../hooks/baseURL';

export default function Login() {

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const auth = localStorage.getItem("token");
    const navigate = useNavigate();
    
    if(auth){
      useEffect(() => {
        navigate("/"); // Navigate to the home route
      }, [navigate]);
    }

    let login = (e) => {
        e.preventDefault();
        let loginData = {
            phone: phone,
            password: password
        }

        fetch(BASE_URL + "/login", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Log In Failed");
              }
              return response.json();
            })
            .then((data) => {
              // console.log('Login successful:', data);
              console.log(data);
              if (data) {
                const userData = data.data.user;
      
                localStorage.setItem("token", data.data.token);
                localStorage.setItem(
                  "user",
                  JSON.stringify({
                    userData,
                  })
                );
                
                //redirect to home page
                navigate("/");
              } else {
                throw new Error("Token not found in response");
              }
            })
            .catch((error) => {
              console.error(error);
              if (error) {
                setErrorMessage("Phone Or Password is incorrect!");
                setLoading(false);
              }
            });
    }



  return (
    <>
    <div
    className="page-header align-items-start min-vh-100"
    style={{
        backgroundImage:
        'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")'
    }}
    >
    <span className="mask bg-gradient-dark opacity-6" />
    <div className="container my-auto">
        <div className="row">
        <div className="col-lg-4 col-md-8 col-12 mx-auto">
            <div className="card z-index-0">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                    <Link to={'/'}>
                        <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
                            <img className='rounded-circle mb-3' src={logo} width={100} height={100} alt="" />
                        </h4>
                    </Link>
                    <h4 className="text-white font-weight-bolder text-center mb-2">
                        Login
                    </h4>
                </div>
            </div>
            <div className="card-body">
                <form role="form" className="text-start" onSubmit={login}>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" id="phone" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Enter Phone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter Password" />
                    </div>

                    <div className="form-check form-switch d-flex align-items-center mb-3">
                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                        <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe">
                        Remember me
                        </label>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn bg-gradient-primary w-100 my-4 mb-2 py-2">
                        Sign in
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
    <footer className="footer position-absolute bottom-2 py-2 w-100">
        <div className="container">
        <div className="d-flex align-items-center justify-content-center">
            <div className="">
            <div className="copyright text-center text-sm text-white text-lg-start">
                ©Copyright 2024  By <a
                href="https://delightmyanmar.pro/"
                className="font-weight-bold text-white"
                target="_blank"
                >
                Delight Myanmar</a>.
            </div>
            </div>
        </div>
        </div>
    </footer>
    </div>

    </>
  )
}
