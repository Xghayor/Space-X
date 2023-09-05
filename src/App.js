import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import Navbar from './components/Navbar';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Rockets</div>} />
          <Route path="missions" element={<div>Missions</div>} />
          <Route path="mypage" element={<div>My Page</div>} />
          <Route path="*" element={<div>If page not found it goes here</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
