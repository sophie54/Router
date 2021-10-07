import React from 'react'
import { Card , Button } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom'

const MovieCard = ({movie})=>{
  
return (
  <Link to={`/trailer/${movie.id}`}>

<Card style={{ width: '20rem',height:'48rem',marginTop:'2rem' }}>
  <Card.Img style={{ width:'20rem',height:'27rem' }}  variant="top" src={movie.posterURL}  />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
     {movie.description}
     <ReactStars
    count={10}
   value={movie.rating}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />,
     
    </Card.Text>
    
  </Card.Body>
</Card>
  </Link>




)
}
export default MovieCard;