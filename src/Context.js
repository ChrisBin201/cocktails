import { useState,createContext,useEffect } from "react";

export const CocktailsContext = createContext();
export const AppProvider = ({children}) =>{
    const [searchKey,setSearchKey] = useState("");
    const [cocktails,setCocktails] = useState([]);
    const [loading,setLoading] = useState(true)
    console.log(loading);
    //get data
    const fetchCocktails = async () =>{
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchKey}`);
        const data = await response.json();
        // console.log(data);  
        const { drinks } =data;
        console.log(drinks);
        if(drinks)
            setCocktails(drinks)
        else
            setCocktails([])
        setLoading(false)
        }
    // handleSubmit =>prevent reload page
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    useEffect(() => {
        fetchCocktails();
        // setLoading(false)
    },[searchKey]);
    return(
        <CocktailsContext.Provider value={{searchKey, setSearchKey,cocktails,handleSubmit, setCocktails, loading,setLoading}}>
            {children}
        </CocktailsContext.Provider>
    )
}