/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import React, {useContext,Fragment} from "react";
import { CocktailsContext } from "../Context";
import { Link } from 'react-router-dom';
function Cocktails(){
    const {cocktails,loading} = useContext(CocktailsContext);
    console.log(cocktails);
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
    if(!loading){
        if(cocktails.length == 0) 
            return(
                <h2>no cocktails matched your search criteria</h2>
        )
            return(
                <section css={styles1} >
                    <h1 >Cocktails</h1>
                    <div className ="cocktails_list">
                        {cocktails.map((item) =>{
                            const { strDrink: drink,
                                    strGlass: glass,
                                    strAlcoholic: alcoholic,
                                    strDrinkThumb: drinkThumb,
                                    idDrink} = item
                            return(
                                <React.Fragment key={idDrink}>
                                    <article className="cocktails_item">
                                        <div className="cocktails_item-img">
                                            <img src={drinkThumb}></img>
                                        </div>
                                        <div className="cocktails_item-footer">
                                            <h1 className="drink">{drink}</h1>
                                            <div className="glass">{glass}</div>
                                            <div className="alcoholic">{alcoholic}</div>
                                            <Link to ={`/cocktail/${idDrink}`}>
                                            <button className="detail">details</button>
                                            </Link>
                                        </div>
                                    </article>
                                </React.Fragment>    
                                )
                            })
                        }
                    </div>
                </section>
            )
    }
}
const styles1 = css `
    display: flex;
    flex-direction: column;
    h1{
        margin: auto;
        font-size: 40px;
    }
    .cocktails_list{
        margin: 0 100px;
        margin-top:60px;
        display:grid;
        grid-template-columns: auto auto;
        grid-gap: 30px;
        .cocktails_item{
            width: 500px;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 2px 3px 4px 1px rgb(0 0 0 / 65%);
            background-color: white;
            transition: all 0.3s linear;
            .cocktails_item-img{
                img{
                    height: 300px;
                    width:100%;
                    object-fit: cover;
                    display: block;    
                }
            }
            .cocktails_item-footer{
                padding: 15px;
                padding-left: 22px;
                padding-bottom: 20px;
                .drink{
                    letter-spacing: 5px;
                    font-size: 32px;
                }
                .glass{
                    letter-spacing: 5px;
                    font-weight: bold;
                }
                .alcoholic{
                    font-weight: lighter;
                    color: #afafaf;
                }
                .detail{
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
                .detail:hover{
                    background-color: #d4e6a5;
                }
            }
        }
        .cocktails_item:hover{
            box-shadow: 6px 7px 5px 1px rgb(0 0 0 / 50%);
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
    width: 200px;
    height: 200px;
    margin: 0 auto;
    }
    .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 160px;
    height: 160px;
    margin: 8px;
    border: 12px solid #fff;
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
export default Cocktails;