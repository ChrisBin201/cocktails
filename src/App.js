/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
function App() {
  return (
    <div css={styles}>
      <NavBar/>
      <Home/>
      {/* <About/> */}
    </div>
  );
}
const styles = css
`
background-color: #f1f5f8;

`
export default App;
