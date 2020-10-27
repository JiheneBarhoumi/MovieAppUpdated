import React from 'react';
import {Bootstrap,Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/MovieList.css';
import Rating from './Rating'
import {motion} from 'framer-motion';
import '../assets/rating.css';

 

const MovieList=({movies,search,ratingSearch})=>{


    let filteredMovies=movies.filter((movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase().trim()) &&
          movie.rating >= ratingSearch
      )

    const allmoviesCards = filteredMovies.map(movie=>{
        return(
         //for each movie i create a card 
         <Card  style={{ width: '18rem', marginBottom:'5%', marginLeft:'10%'}} className='card'>
         <Card.Img variant="top" src={movie.poster} width={'700px'} height={'370px'}/>
        
             <Card.Title style={{paddingTop:7}}>{movie.title} </Card.Title>
         
         <ListGroup className="list-group-flush">
             <ListGroupItem>{movie.release} - {movie.duration}</ListGroupItem>
             <ListGroupItem>{movie.genre}</ListGroupItem>
             <ListGroupItem>
             <div className="rating-search">
                 <Rating rating={movie.rating}/>
              </div>
             </ListGroupItem>
        </ListGroup>
        </Card>
    )})
        
        




    return(
<center><motion.div initial={{y:'100vw'}} animate={{y:'0vw'}} transition={{duration:10,type:'spring',stiffness:'100'}}   className='cards'>
   {allmoviesCards}
</motion.div></center>
)
}

export default MovieList;