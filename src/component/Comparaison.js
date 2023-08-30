import React from 'react'
function Comparaison(props){



    return (
        <div>Winner {props.playerA >= props.playerB ? "player A " : "player B " }</div>
    )
}

export default Comparaison