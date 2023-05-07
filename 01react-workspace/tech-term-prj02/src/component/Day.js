import dummy from "../db/data.json"
import {useParams} from "react-router-dom"
import Word from './Word'


export default function Day(){

    // const inputDay = 3;
    const {inputDay} = useParams();

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