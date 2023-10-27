import{BrowserRouter,Routes,Route} from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import ForgotPassword from './pages/Login/ForgotPassword';
import NewPassword from './pages/Login/NewPassword';
import ConfirmAccount from './pages/Login/ConfirmAccount';
import { AuthProvider } from './context/AuthProvider';
import ProtectedRoute from './layouts/ProtectedRoute';
import WorkPlace from './pages/LugarDeTrabajo/WorkPlace';


function App() {

  return (    
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path ='/' element={<AuthLayout/>}>
          <Route index element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='forgot-password' element={<ForgotPassword/>}/>
          <Route path='forgot-password/:token' element={<NewPassword/>}/>
          <Route path='confirmar/:id' element={<ConfirmAccount/>}/>
        </Route>
        <Route path='/projects' element={<ProtectedRoute/>}>
          <Route index element={<WorkPlace/>}/>
        </Route>

      </Routes>
      </AuthProvider>
    </BrowserRouter>
    
  );
}

export default App;
