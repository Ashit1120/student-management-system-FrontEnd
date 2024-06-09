

import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Index() {
  const navigate = useNavigate();
  const Home = async()=>
    {
      navigate("/Index")
    }

  const StudentSignIn = async () => {
    navigate("/StudentSignIn")
  }
  const StudentSingnUp = async () => {
    navigate("/StudentSingnUp")
  }
  const TeacherSignIn = async () => {
    navigate("/TeacherSignIn")
  }
  const TeacherSignUp = async () => {
    navigate("/TeacherSignUp")
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Student Management System</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/Index" onClick={Home}>Home <span class="sr-only">(current)</span></a>    

            </li>
            <li class="nav-item">  
              <a class="nav-link" href="/StudentSignIn" onClick={StudentSignIn}>StudentSignIn </a> 
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/StudentSingnUp" onClick={StudentSingnUp}>StudentSignUp </a> 
          
            </li>
     
            <li class="nav-item">
              <a class="nav-link" href="/TeacherSignIn" onClick={TeacherSignIn}>TeacherSignIn </a> 
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/TeacherSignUp" onClick={TeacherSignUp}>TeacherSignUp </a>
    
            </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}


        
