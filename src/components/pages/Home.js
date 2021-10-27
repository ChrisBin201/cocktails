/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import SearchForm from "../SearchForm";
import Cocktails from "../Cocktails";
function Home(){
    return(
        <section css={styles}>
            <SearchForm/>
            <Cocktails/>
        </section>
    )
}
const styles = css
`
padding-bottom: 100px;
`
export default Home;