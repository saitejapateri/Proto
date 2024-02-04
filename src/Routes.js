import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Root from './pages/Root';
import DashboardPage from './Pages1/DashboardPage.jsx';
import CoursePage from './Pages1/CoursePage.jsx'
import Layout from './pages/Layout.js'
import CourseTab from './pages/CourseTab';
import Grid from './pages/MuiGrid';

const AppRouter = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Root />}>
            <Route index element={<Login />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/course/:courseId' element={<CoursePage />} />
          </Route>
        </Routes>
    </Router>
  );
};

export default AppRouter;