/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react";
import { Link } from 'react-router-dom';

function About(){
    return(
            <section css={styles}>
                <div>
                    <h1>about us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Molestiae repudiandae architecto qui adipisci in officiis, aperiam sequi atque perferendis 
                        eos, autem maiores nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo 
                        obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?
                    </p>
                </div>
            </section>
    )
}
const styles = css `
    height:100vh;
    overflow: auto;
    display: flex;
    div{
        margin: auto 300px;
        h1{
            text-align: center;
            margin-bottom: 70px;
            text-transform: capitalize;
            font-size:40px;
            letter-spacing: 5px;
        }
        p{
            line-height: 1.8;
            font-size: 20px;
            letter-spacing: 2px;
            color: #476a2e;
        }
    }
`
export default About;