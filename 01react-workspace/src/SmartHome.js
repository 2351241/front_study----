import React, {useCallback, useState} from 'react'
import Light from './Light'

function SmartHome(){

    const [masterOn, setMasterOn] = useState(false)
    const [kitchenOn, setKitchenOn] = useState(false)
    const [bathOn, setBathOn] = useState(false)

    
    // 방법2. useCallback과 React.memo - 최적화
    // 침실버튼 클릭시 침실관련 컴포넌트만 동작하도록하고 콘솔창에서 확인가능.
    const toggleMaster = useCallback(()=> {setMasterOn(!masterOn)}, [masterOn])
    const toggleKitchen = useCallback(() => {setKitchenOn(!kitchenOn)}, [kitchenOn])
    const toggleBath = useCallback(() => {setBathOn(!bathOn)}, [bathOn])

    
    // 방법1.
    // useCallback과 React.memo 를 사용하지 않을 경우의 코드는 다음과 같다.
    // 브라우저창의 콘솔탭에서 침실버튼을 클릭하면 주방,욕실까지 불필요한 코드가 동작한다.
    // 그래서, 상단의 useCallback과 React.Memo 을 통해 침실을 클릭시 관련 함수, 랜더링만 되도록 최적화함.
    // const toggleMaster = useCallback(()=> {setMasterOn(!masterOn)})
    // const toggleKitchen = useCallback(() => {setKitchenOn(!kitchenOn)})
    // const toggleBath = useCallback(() => {setBathOn(!bathOn)})




    return(
        <div>
            <Light room="침실" on={masterOn} toggle={toggleMaster}/>
            <Light room="주방" on={kitchenOn} toggle={toggleKitchen}/>
            <Light room="욕실" on={bathOn} toggle={toggleBath}/>
        </div>
    )
}
export default SmartHome