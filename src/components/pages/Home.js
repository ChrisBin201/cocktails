/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import SearchForm from "../SearchForm";
function Home(){
    return(
        <section css={styles}>
            <SearchForm/>
        </section>
    )
}
const styles = css
`
padding-bottom: 100px;
`
export default Home;