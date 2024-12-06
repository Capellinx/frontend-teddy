import {Route, Routes} from 'react-router-dom';
import {HomePage} from '../app/home';
import {LoginPage} from '../app/login';
import {AuthControllerAccess} from '../utils/auth-control-access.tsx';


export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      
      <Route element={<AuthControllerAccess/>}>
        <Route path="/home" element={<HomePage/>}/>
      </Route>
      
      {/*<Route path="*" element={< />} />*/}
    </Routes>
  );
}