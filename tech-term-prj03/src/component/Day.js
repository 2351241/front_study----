import dummy from "../db/data.json"
import {useParams} from "react-router-dom"
import Word from './Word'
import {useEffect, useState} from 'react'


export default function Day(){

    // const inputDay = 3;
    const {inputDay} = useParams();
    // const {words, setWords} = useState([]);

    // useEffect( () => {
    //     // fetch("https://localhost:4000/words?day=1")
    //     fetch(`https://localhost:4000/words?day=${inputDay}`)
    //     .then(res => {return res.json();})
    //     .then(data => {setWords(data);});
    // },    []
    // )

    const words = useFetch('https://localhost:4000/words?day=${inputDay}`')

    const wordList = dummy.words.filter( word=> (word.day===Number(inputDay)))
    // wordList : filter함수로 day가 3인 요소들을 담은 배열집합 (words)
    return(
        <div>
            <h2> 오늘의 학습 : Day {inputDay} </h2>
                <table>
                    <tbody>
                        {wordList.map( word => (
                            <Word word={word} key={word.id}></Word>
                        ))}
                    </tbody>
                </table>
        </div>
    )
} 