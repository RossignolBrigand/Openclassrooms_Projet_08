import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Layout from './layout/Layout/Layout';
import HomePage from './pages/Home/homePage';
import AboutPage from './pages/About/aboutPage';
import BlogPage from './pages/Blog/blogPage';
import ErrorPage from './pages/Error/errorPage';

import './utils/i18nConfig'

function App() {

  return (
    <Router basename='/'>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/blog' element={<BlogPage />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
