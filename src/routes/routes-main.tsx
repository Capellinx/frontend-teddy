import {Route, Routes} from 'react-router-dom';
import {NotFound} from '../app/404';
import {CostumersPage} from '../app/costumers';
import {HomePage} from '../app/home';
import {LoginPage} from '../app/login';
import ConstructionPage from '../app/page-building';
import {RegisterPage} from '../app/register';
import {AuthControllerAccess} from '../utils/auth-control-access.tsx';


export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      
      <Route element={<AuthControllerAccess/>}>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/costumers" element={<CostumersPage/>}/>
        <Route path="/products" element={<ConstructionPage/>}/>
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}