/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CocktailsContext } from "../Context";

function DetailCocktail(){
    const { id } = useParams();
    const { cocktails,loading } = useContext(CocktailsContext);
    // loading while data is coming
    if(loading)
        return(
            <section css={styles2} >
                <div className="lds-ring">
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
            </section>
    ) 
    //if data is fetched => loading =false, render things below 
    if(cocktails.length >0){
        const cocktail = cocktails.find(item => item.idDrink == id); 
        const {idDrink, 
        strDrink: name, 
        strCategory: category, 
        strAlcoholic: info, 
        strGlass: glass,
        strInstructions: instruction,
        strDrinkThumb: drinkThumb} = cocktail;
        // lay ra cac gia tri cua ingredient trong object cocktail
        let ingredients = Object.entries(cocktail).map( ([key,value]) =>{
            if(key.search("strIngredient") !=-1 && value)
                return value
        })
        ingredients = ingredients.filter(item => item); // ingredient dc tra ve với type array
        console.log(ingredients);
        return(
            <section css={styles1}>
                <Link to="/" className="back_home">
                    <button>back home</button>
                </Link>
                <h1 className="detail_heading">{name}</h1>
                <div className="detail_info">
                    <div className="drinkThumb">
                        <img src={drinkThumb}></img>
                    </div>
                    <div className="drinkInfo">
                        <div className="name">
                            <p>name :</p>{name}
                        </div>
                        <div className="category">
                            <p>category :</p>{category}
                        </div>
                        <div className="info">
                            <p>info :</p>{info}
                        </div>
                        <div className="glass">
                            <p>glass :</p>{glass}
                        </div>
                        <div className="instruction">
                            <p>instruction :</p>{instruction}
                        </div>
                        <div className="ingredients">
                            <p>ingredients :</p>
                            {//render ra cac ingredient
                                ingredients.map((item,index) =>{
                                if(index!= ingredients.length -1)
                                return(
                                    <span>{item}, </span>
                                )
                                return(
                                    <span>{item}</span>
                                )
                            })}    
                        </div>   
                    </div>     
                </div>
            </section>
        )
   }
}
const styles1=css `
    display:flex;
    flex-direction: column;
    padding-top: 100px;
    padding-bottom: 100px;
    margin: 0 100px;
    >.back_home,.detail_heading,.detail_info{
        margin: 0 auto;
        margin-bottom: 50px;
    }
    .back_home{
        button{
            margin-top: 10px;
            text-transform: uppercase;
            letter-spacing: 5px;
            padding: 10px;
            border-radius: 4px;
            border: none;
            color: white;
            background-color: #476a2e;
            cursor: pointer;
            transition: all 0.3s linear;
        }
        button:hover{
            background-color: #d4e6a5;
        }
    }
    .detail_heading{
        letter-spacing: 3px;
        font-size: 40px
    }
    .detail_info{
        display: flex;
        .drinkThumb{
            margin-right: 50px;
            img{
                max-width:400px;
                display:block;
                border-radius: 5px;
            }
        }
        .drinkInfo{
            display: flex;
            flex-direction: column;
            justify-content: center;
            >div{
                margin: 10px 0;
                font-weight: bold;
                line-height: 1.8;
                >p{
                    color: #476a2e;
                    padding: 3px 10px;
                    background-color: #d4e6a5;
                    border-radius: 3px;
                    text-transform: capitalize;
                    display: inline-block;
                    margin-right: 10px;
                }
            }
        }
    }
`
const styles2 = css `
  display: flex;
  height: 100vh;
  overflow: auto;
  .lds-ring {
    display: block;
    position: relative;
    width: 80px;
    height: 80px;
    margin: auto;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #476a2e transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
export default DetailCocktail;