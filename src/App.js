import Header from "./components/Header.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Footer from "./components/Footer.tsx";
import Nav from "./components/Nav.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.tsx";
import Services from "./components/Services.tsx";
import Contact from "./components/Contact.tsx";
import Aboutus from "./components/Aboutus.tsx";
import Error from "./components/Error.tsx";
import Software from "./components/Software.tsx";
import Careers from "./components/Careers.tsx";

function App() {

  return (
    <>


<Router>
        <Header />
        <Nav/>
      

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Careers/>
        <Software/>
        <Footer/>
        <ScrollToTop/>
      </Router>

    
    </>
  );
}

export default App;