import {Route, Routes} from 'react-router-dom';
import {LoginPage} from '../app/login.tsx';


export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      
      {/*<Route path="*" element={< />} />*/}
    </Routes>
  );
}