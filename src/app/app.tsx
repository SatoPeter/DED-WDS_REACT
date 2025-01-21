// 初始化匯入
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import '@style/globals.scss';
import 'vanillajs-datepicker/css/datepicker-foundation.css';
import '../../index.css';
import './app.scss';
import './style.scss';

import { Routes, Route, BrowserRouter, Outlet } from 'react-router';
import { Demo, Finished, Lab1, Lab2, Lab3, Lab4, NotFound } from '../views';
import { useNavigate } from 'react-router';

const RouterLayout = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Outlet />
      <div className="demo-button-group">
        <button className="btn btn-gradient" onClick={() => navigate('/lab1')}>
          Lab1
        </button>
        <button className="btn btn-border" onClick={() => navigate('/lab2')}>
          Lab2
        </button>
        <button className="btn btn-bounce" onClick={() => navigate('/lab3')}>
          Lab3
        </button>
        <button className="btn btn-ripple" onClick={() => navigate('/lab4')}>
          Lab4
        </button>
        <button onClick={() => navigate('/')} className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">Demo</div>
            <div className="flip-card-back">Go</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<RouterLayout />}>
          <Route index element={<Demo />} />
          <Route path="finished" element={<Finished />} />
          <Route path="lab1" element={<Lab1 />} />
          <Route path="lab2" element={<Lab2 />} />
          <Route path="lab3" element={<Lab3 />} />
          <Route path="lab4" element={<Lab4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
