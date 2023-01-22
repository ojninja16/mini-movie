import {useEffect,useState} from "react";
import './App.css';
import SearchIcon from  './search.svg';
import MovieCard from "./MovieCard";
// APi key: 865016a2
const APi_url = 'http://www.omdbapi.com?apikey=865016a2';
// const movie1={Title: 'Amazing Spiderman Syndrome', Year: '2012', imdbID: 'tt2586634', Type: 'movie', Poster: 'N/A'}
const App=()=>{
    const[movies,setmovies]=useState([])
    const[searchterm,setSearchterm]=useState([])
    const searchMovies=async(title)=>{
        const response=await fetch(`${APi_url}&s=${title}`)
        const data=await response.json();
        setmovies(data.Search);
    }
    useEffect(()=>{
       searchMovies('Spiderman') 
    },[])
   return(
<div className="app">
     <h1>MoviesHub</h1>
    <div className="search">
    <input type="text" placeholder="Search For Movies" value={searchterm} onChange={(val)=>{setSearchterm(val.target.value)}} />
    <img src={SearchIcon} alt="Search" onClick={()=>searchMovies(searchterm)} />
   </div>
   {
    movies?.length>0
    ?(
    <div className="container">
   {movies.map((movie)=>
   (
    <MovieCard movie={movie}/>
    ))}
   </div>):
   (
    <div className="empty">
        <h2>No Movies found</h2>
    </div>
   )
   } 
</div>
   );

}
export default App
