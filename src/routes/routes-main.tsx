import {Route, Routes} from 'react-router-dom';
import {HomePage} from '../app/home';
import {LoginPage} from '../app/login';


export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/home" element={<HomePage/>} />
      
      {/*<Route path="*" element={< />} />*/}
    </Routes>
  );
}