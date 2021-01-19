import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MobileHeader from "./components/MobileHeader";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Profiles from "./components/Profile/Profiles";

function App() {
  return (
    <Router>
      <Navbar />
      <MobileHeader />
      {/* <MobileNav /> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/profile" component={Profiles} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
