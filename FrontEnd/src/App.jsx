import{BrowserRouter,Routes,Route} from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import ForgotPassword from './pages/Login/ForgotPassword';
import NewPassword from './pages/Login/NewPassword';
import ConfirmAccount from './pages/Login/ConfirmAccount';
import { AuthProvider } from './context/AuthProvider';
import ProtectedRoute from './layouts/ProtectedRoute';
import NewProject from './pages/LugarDeTrabajo/NewProject';
import { ProjectsProvider } from './context/ProjectsProvider';
import Projects from './components/Projects';
import Project from './components/Project';


function App() {

  return (    
    <BrowserRouter>
    <AuthProvider>
      <ProjectsProvider>
      <Routes>
        <Route path ='/' element={<AuthLayout/>}>
          <Route index element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='forgot-password' element={<ForgotPassword/>}/>
          <Route path='forgot-password/:token' element={<NewPassword/>}/>
          <Route path='confirmar/:id' element={<ConfirmAccount/>}/>
        </Route>
        <Route path='/projects' element={<ProtectedRoute/>}>
          <Route index element={<Projects/>}/>
          <Route path='create-project' element={<NewProject/>}/>
          <Route path=':id' element={<Project/>}/>
        </Route>

      </Routes>
      </ProjectsProvider>
      </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;
