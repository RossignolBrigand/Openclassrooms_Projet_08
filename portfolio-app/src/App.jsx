import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';

import HomePage from './pages/Home/homePage';
import AboutPage from './pages/About/aboutPage';
import ErrorPage from './pages/Error/errorPage';

import './utils/i18nConfig';

function App() {
    return (
        <Router basename="/Portfolio">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route path="*" element={<Navigate to="/error" />} />
            </Routes>
        </Router>
    );
}

export default App;
