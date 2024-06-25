import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const API_URL = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`;

const AppContext = createContext();

const AppProvider = ({ children }) => {

const [isLoading,setIsLoading] = useState(true);
const [movie,setMovie] = useState([])
const [isError,setIsError]=useState({show:"false",msg:""})  
const [query,setQuery]=useState("justice League")
// const [debouncekeyword]= useDebounce
const getMovies = async(url) => {
     setIsLoading(true);
     try{
          const res = await fetch(url);
          const data = await res.json()
          console.log(data)
          if(data?.Response === "True"){
               setIsLoading(false);
               setMovie(data.Search);
               setIsError({
                    show:"false",
                    msg:"",
               }) 
          }else{
               setIsError({
                    show:"true",
                    msg:data.Error,
               })
          }
     } 
     catch(error){
          console.log(error)
     }
} 
  
useEffect(() => {
     let timerOut = setTimeout(()=> {getMovies(`${API_URL}&s=${query}`);},500);     
     return () => clearTimeout(timerOut)  
}, 
 
[query]);

  return <AppContext.Provider value={{isLoading,isError,movie,query,setQuery}}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
