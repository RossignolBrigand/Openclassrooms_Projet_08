import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';

import Layout from './layout/Layout';
import HomePage from './pages/Home/homePage';
import AboutPage from './pages/About/aboutPage';
import BlogPage from './pages/Blog/blogPage';
import ErrorPage from './pages/Error/errorPage';

import './utils/i18nConfig';

function App() {
    return (
        <Router basename="/Portfolio/">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/error" element={<ErrorPage />} />
                    <Route path="*" element={<Navigate to="/error" />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
