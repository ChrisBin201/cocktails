/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";

function SearchForm(){
    return(
        <div css={styles}>
            <form>
                <label htmlFor="name">search your favorite cocktail</label>
                <input type="text" id="name" name ="name"></input>
            </form>
        </div>
    )
}
const styles = css
`
width: 645px;
height: 145px;
margin: 100px auto;
background-color: white;
border-radius: 5px;
padding: 30px 40px;
box-shadow: 2px 6px 4px -1px rgba(0,0,0,0.7);
 form{
    display: flex;
    flex-direction: column;
    label{
        margin-bottom: 20px;
        color:#476a2e;
        font-weight: 700;
        text-transform: capitalize;
        letter-spacing: 4px;
    }
    input{
        font-size: 18px;
        padding: 10px;
        border: none;
        background-color: #f1f5f8;
        border-radius: 3px;
    }
 }

`
export default SearchForm;