import {Route, Routes} from 'react-router-dom';
import {HomePage} from '../app/home-page.tsx';


export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      
      {/*<Route path="*" element={< />} />*/}
    </Routes>
  );
}