import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Helmet from "react-helmet";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>App</title>
        </Helmet>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
