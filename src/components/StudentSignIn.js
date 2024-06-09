import React,{useState} from 'react';
import '../CSS/Student.css'; // Ensure the path is correct and matches your project structure
import { useNavigate } from 'react-router-dom';

export default function StudentSignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLoginFormSubmit = async (e) =>
        {
        e.preventDefault();
        console.log(email)
        console.log(password)
        navigate('/StudentSingnUp')
        }
    return (  



        <div className='body'>
            <form onSubmit={handleLoginFormSubmit}>
                <div data-mdb-input-init className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" />
                    <label className="form-label" htmlFor="form2Example1">Email address</label>

                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        style={{ color: 'blue' }}
                        className='custom-input'
                        onChange={(e) => setEmail(e.target.value)}
                    />


                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <label className="form-label" htmlFor="form2Example2">Password</label>


                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>

                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                    <p>or sign up with:</p>
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                    </button>
                </div>
            </form >
        </div>
    );
}
