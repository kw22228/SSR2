import React, { Component, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import loadable from '@loadable/component';

// const Header = loadable(() => import(/* webpackChunkName: "Header" */ './components/Header'));
// const Footer = loadable(() => import(/* webpackChunkName: "Footer" */ './components/Footer'));
// const Home = loadable(() => import(/* webpackChunkName: "Home" */ './pages/Home'));
// const News = loadable(() => import(/* webpackChunkName: "News" */ './pages/News'));
import Header from './components/Header';
import Footer from './components/Footer';
const Home = React.lazy(() => import('./pages/Home'));
const News = React.lazy(() => import('./pages/News'));

class App extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>App</title>
                </Helmet>
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/news" element={<News />} />
                    </Routes>
                </Suspense>
                <Footer />
            </div>
        );
    }
}

export default App;
