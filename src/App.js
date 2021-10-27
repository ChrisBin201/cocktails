/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import DetailCocktail from "./components/DetailCocktail";
function App() {
  return (
    <Router>
      <div css={styles}>
        <NavBar/>
        <Route path="/" exact >
          <Home/>
        </Route>
        <Route path="/about" >
          <About/>
        </Route>
        <Route path="/cocktail/:id" >
          <DetailCocktail/>
        </Route>
      </div>
    </Router>
  );
}
const styles = css
`
background-color: #f1f5f8;

`
export default App;
