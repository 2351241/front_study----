import React from 'react'
import "./game.css"

function gameReducer(state, action){

}

function Board(){
    // useReducer(reducer업데이트함수, state 초기값)
    const [state, dispatch] = useReducer(gameReducer,{ squares: Array(9).fill(null), xIsNext: true })

    const {squares, xISNext} = state;

    function renderSquare(index){
        return(
            <button className='square' onClick={()=>selectSquare(index)}>
                {squares[index]}
            </button>
        )
    }


    function selectSquare(square){
        dispatch({type: "SELECT_SQUARE", square})
    }

    const status = getStatus(squares, xIsNext)

}

function Game(){
    return(<Board/>)
}
export default Game;