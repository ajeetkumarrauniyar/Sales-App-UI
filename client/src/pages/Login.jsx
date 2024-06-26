import React from 'react';
import '../App.css'

// This component renders a Login form in a card format
const Login = () => {
  return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        {/* Display the login header */}
                        <h4 className="text-center">Login</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            {/* Email input field */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
                            </div>
                            {/* Password input field */}
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
                            </div>
                            {/* Login button */}
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
