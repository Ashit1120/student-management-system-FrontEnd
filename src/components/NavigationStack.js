import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import StudentSignIn from './StudentSignIn';
import StudentSingnUp from './StudentSingnUp';
import StudentHome from './StudentHome';
import TeacherHome from './TeacherHome';
import TeacherSignIn from './TeacherSignIn';
import TeacherSignUp from './TeacherSignUp';
import Index from './Index';





export default function NavigationStack() {
    return (
        <div>
            <Routes>
                <Route path='/Index' element={<Index />} /> 
                <Route path='/StudentSignIn' element={<StudentSignIn/>}/>
                <Route path='/StudentSingnUp' element={<StudentSingnUp />} />
                <Route path='/StudentHome' element={<StudentHome/>} />
                <Route path='/TeacherHome' element={<TeacherHome />} />
                <Route path='/TeacherSignIn' element={<TeacherSignIn/>}/>
                <Route path='/TeacherSignUp' element={<TeacherSignUp/>}/>
                <Route path='/*' element={<Navigate to="Index" />} />
             


            </Routes>

        </div>
    )
}




