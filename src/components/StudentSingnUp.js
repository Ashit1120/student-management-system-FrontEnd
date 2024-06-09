import React from 'react';
import '../CSS/Student.css'

export default function StudentSignUp() {
    return (
        <div>
            <form>
                <div data-mdb-input-init className="form-outline mb-4">
                    <input type="text" id="form3Example1" className="form-control" />
                    <label className="form-label" htmlFor="form3Example1">Full Name</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <input type="email" id="form3Example2" className="form-control" />
                    <label className="form-label" htmlFor="form3Example2">Email address</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <input type="text" id="form3Example5" className="form-control" />
                    <label className="form-label" htmlFor="form3Example5">Address</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <input type="text" id="form3Example6" className="form-control" />
                    <label className="form-label" htmlFor="form3Example6">Phone Number</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" id="form3Example3" className="form-control" />
                    <label className="form-label" htmlFor="form3Example3">Password</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" />
                    <label className="form-label" htmlFor="form3Example4">Confirm Password</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                        I agree to the <a href="#!">terms and conditions</a>
                    </label>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>

                <div className="text-center">
                    <p>Already a member? <a href="#!">Sign in</a></p>
                    <p>or sign up with:</p>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </div>
    );
}
