import Navbar from './modules/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import UserRoutes from './modules/UserRoutes';

import './shared/styles/styles.scss';

export function App() {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Navbar />
      <UserRoutes />
    </BrowserRouter>
  );
}
