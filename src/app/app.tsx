// 初始化匯入
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import '@style/globals.scss';
import 'vanillajs-datepicker/css/datepicker-foundation.css';
import '../../index.css';
import './app.scss';

import { Routes, Route } from 'react-router';
import { Demo, Finished } from '../views';

export function App() {
  return (
    <Routes>
      <Route index element={<Demo />} />
      <Route path="/finished" element={<Finished />} />
    </Routes>
  );
}

export default App;
