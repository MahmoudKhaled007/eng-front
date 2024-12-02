import React from "react";
import "./App.css";
import Header from "./Assets/components/Header";
import Banner from "./Assets/components/Banner";
import Footer from "./Assets/components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/css/responsive.css"; // Responsive styles
import "./Assets/css/style.css"; // Responsive styles

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
