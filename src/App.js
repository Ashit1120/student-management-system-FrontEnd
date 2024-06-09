
import StudentSignIn from './components/StudentSignIn';
import TeacherSignIn from './components/TeacherSignIn';
import StudentSignUp from './components/StudentSingnUp';
import TeacherSignUp from './components/TeacherSignUp';
import StuentHome from './components/StudentHome';
import TeacherHome from './components/TeacherHome';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationStack from './components/NavigationStack';


function App() {
  return (
    <div >
      {/* <StudentSignIn /> */}
      {/* <TeacherSignIn /> */}
      {/* <StudentSignUp/> */}
      {/* <TeacherSignUp/> */}
      {/* <StuentHome/> */}
      {/* <TeacherHome /> */}
      <Router>
        <NavigationStack />
      </Router>


    </div>
  );
}

export default App;
