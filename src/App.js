import React, {useState} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import MovieList from './components/MovieList.js';
import AddModal from './components/AddModal.js';
import Search from './components/Search.js';
import logo from './img/movieapp.png';
import {motion} from 'framer-motion';




function App() {
  /*
  const axios = require('axios');
  const [movies,setMovies]=useState([]);
  const requestUrl='https://api.themoviedb.org/3/movie/popular?api_key=7ed0007f41bd487478d51e42844315f9';
  axios.get(requestUrl)
  .then(function(response){
    setMovies([...response.data.results]);
  }); */
  const [movies , setMovies]=useState(
    [
      {id:uuidv4(),
       title : "Tenet",
       genre : "Action",
       duration :" 2h 31m",
       release : 2020,
       poster :require('./posters/tenet.jpg'),
       rating : 4
      },

      {id:uuidv4(),
        title : "Project Power",
        genre : "Action",
        duration :"1h 54m",
        release :2020,
        poster :require('./posters/projectpower.jpg'),
        rating : 2.5
       },
       {id:uuidv4(),
        title : "Pyjama Party",
        genre : "Comédie",
        duration :"1h 29m",
        release :2004,
        poster :require('./posters/pyjamaparty.jpg'),
        rating : 3
       },
       {id:uuidv4(),
        title : "Mirage",
        genre : "Drame",
        duration :"2h 9m",
        release :2018,
        poster : require('./posters/mirage.jpg'),
        rating : 5
       },
      
       {id:uuidv4(),
        title : "Julieta",
        genre : "Drame",
        duration :"1h 40m",
        release :2016,
        poster :require('./posters/julieta.png'),
        rating : 1.5
       },

       {id:uuidv4(),
        title : "Desperados",
        genre : "Comedy",
        duration :"1h 45m",
        release :2020,
        poster :require('./posters/desperate.jpg'),
        rating : 0.5
       },
    ]
  )

   const [search,setSearch]=useState("");
   const [ratingSearch, setRatingSearch] = useState(0);
   
   
  //function to add a movie 
  const addMovie=(movie)=>{
   setMovies([...movies,movie]);
  }
  //function to handle search

  const handleSearch=(val)=>{
    setSearch(val);
    console.log(search);
  }

  
  return (
    <div className="App">
      <motion.img id="img" src={logo} alt="logo"/>
          <center>
            
          <Search handleSearch={handleSearch} rating={ratingSearch}
                           setRatingSearch={setRatingSearch}/>
          
      </center>
      <AddModal addMovie={addMovie}/>
      <MovieList movies={movies} search={search} ratingSearch={ratingSearch}/>

    </div>
  );
}

export default App;
