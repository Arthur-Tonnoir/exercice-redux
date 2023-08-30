import React from 'react';
import { add_point } from '../reducer.js';
import { useDispatch, useSelector } from 'react-redux';

function Player(props){
    const dispatch = useDispatch();
    const handleAddPoint = () =>{
        dispatch(add_point((1), String(props.name)))
    }
    
    return (
        <div>
            <input type='button' value={props.name} onClick={handleAddPoint}/>
        </div>
    )
}

export default Player;