
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';



export default function InventoryItem(props) {
    const navigate = useNavigate();
    const [rating,setRating] = useState(1) 
    const [users, setUsers] = useState(3)
    const [average, setAverage] = useState(rating/users)
    const [inputValue, setInputValue] = useState()

    useEffect(
        ()=>{setAverage((rating/users).toFixed(2))}, [rating]
    )
    
    useEffect(
        () => {if (inputValue > 0){ setRating(inputValue)}  }, [inputValue]
    )


    function changeRating () {
        setRating(oldRating=>oldRating+1)
    }

    console.log(rating)

    return (
        <div className="inventory_item" >
            <h3 className="item_title">{props.filmData.Title}</h3>
            <div className="stats">
            <p>Rating: {rating}</p>
            <p>Average Rating: {average}</p>
            </div>
            <img onClick={() => navigate(`/film/${props.filmData.imdbID}`)} src={props.filmData.Poster} />
            <input onChange={(e) => setInputValue(e.target.value)} type="number"/>
            
            <Slider valueLabelDisplay="auto" defaultValue={0} step={1} marks min={1} max={5} />
            

            {/*variant lets you choose style*/}
            <Button variant="contained" size="large" onClick={(changeRating)}>Rate</Button> 
        </div>
        
    );
    
}


