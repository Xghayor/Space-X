import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import { fetchRockets } from './Redux/rockets/rocketsSlice';
import Missions from './components/Missions';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="mypage" element={<div>My Page</div>} />
          <Route path="*" element={<div>If page not found it goes here</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
