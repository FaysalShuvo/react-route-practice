import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import PostDetail from "./components/PostDetail";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/post/:postId">
            <PostDetail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
