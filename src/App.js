import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Quiz from "./components/quiz";
import Sandip from "./components/Sandip";
import Shrinivas from "./components/Shrinivas";
import Shailesh from "./components/Shailesh";
import Yash from "./components/Yash";
import Raju from "./components/Raju";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import Shivprasad from "./components/Shivprasad";
import Counselor from "./components/counselor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Abhishek from "./components/Abhishek";
import Start_Now from "./components/Start_Now";

export default function Example() {
  return (
    <>
      <Router>
            <Navbar />
        <Switch>
          <Route path="/">
          </Route>
          
          <Route path="/signinpage">
            <Signin />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/counselor">
            <Counselor />
          </Route>
          <Route path="/Sandip">
            <Sandip />
          </Route>
          <Route path="/Shrinivas">
            <Shrinivas />
          </Route>
          <Route path="/Shailesh">
            <Shailesh />
          </Route>
          <Route path="/Yash">
            <Yash />
          </Route>
          <Route path="/Abhishek">
            <Abhishek />
          </Route>
          <Route path="/Shivprasad">
            <Shivprasad />
          </Route>
          <Route path="/Startnow">
            <Start_Now />
          </Route>
          <Route path="/Raju">
            <Raju />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
