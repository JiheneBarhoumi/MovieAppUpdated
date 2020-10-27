import React,{useState} from 'react';
import '../assets/Search.css';
import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import {motion} from 'framer-motion';
import Rating from './Rating'
import {Bootstrap,Form} from 'react-bootstrap';

const Search=({handleSearch,rating,setRatingSearch})=>{
const [ value, setValue ] = useState(0); 

    return(
        <>
        <motion.div initial={{x:'-100vw'}} animate={{x:'0vw'}} transition={{duration:10,type:'spring',stiffness:'100',delay:0.5}}   id="input-container">
        <img src="https://img.icons8.com/cotton/64/000000/search--v2.png"/>
        <input type="text" placeholder="Search..." onChange={(e)=>{handleSearch(e.target.value)}}/>
        </motion.div>
        <motion.div initial={{x:'-100vw'}} animate={{x:'0vw'}} transition={{duration:10,type:'spring',stiffness:'100',delay:0.5}} class="ranger">
        <Form> 
      <Form.Group>
        <Form.Label>
          Filter By Rank
        </Form.Label>
        <div className="rating-search">
          <Rating rating={rating} setRatingSearch={setRatingSearch} />
        </div>
      </Form.Group>   
    </Form>
        </motion.div>
        </>
    )
}

export default Search;



