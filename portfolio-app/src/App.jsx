import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Layout from './layout/Layout';
import HomePage from './pages/Home/homePage';
import AboutPage from './pages/About/aboutPage';
import BlogPage from './pages/Blog/blogPage';
import ErrorPage from './pages/Error/errorPage';

import './utils/i18nConfig'

function App() {

  return (
    <Router basename='/Portfolio'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element= {<HomePage/>}/>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/error' element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
