import "./App.css";
import Banner from "./components/Banner";
import Collections from "./components/Collections";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import MobileHeader from "./components/MobileHeader";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MobileHeader />
      <MobileNav />
      <Banner />
      <Gallery />
      <Collections />
      <Testimonial />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
