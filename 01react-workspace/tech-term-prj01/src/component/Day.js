import dummy from "../db/data.json"



export default function Day(){

    const inputDay =3;
    const wordList = dummy.words.filter( word=> word.day===inputDay)

    return(
        <div>
            <table>
                <tbody>
                    {wordList.map( word => (
                        <tr>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}