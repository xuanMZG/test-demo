import { useState } from 'react'

function Reload() {
    const [ num, setNumber ] = useState(0)
    console.log(11111, num)
    const handerClick = () => {
        for (let i = 0;i < 5;i++) {
           setTimeout(() => {
                setNumber(num + 1)
                console.log(num)
           }, 1000 * i)
        }
    }
    return <button onClick={ handerClick } >{ num }</button>
}

export default Reload;
