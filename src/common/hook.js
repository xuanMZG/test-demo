import { reactive, effect  } from '@vue/reactivity'
import { useRef , useEffect, useMemo, useState } from 'react'

function useReactive (initState) {
    const reactiveState = useRef(initState) // state 
    const [  ,forceUpdate ] = useState(0)
    const state = useMemo(() => {
        return reactive(reactiveState.current)
    }, [ reactiveState.current ]) 
    useEffect(() => {
        let isdep = false
        effect(()=>{
            for (let i in state ) { 
                state[i] = state[i]
            } //依赖收集
            isdep && forceUpdate(num => num + 1)  // 强制更新
            if(!isdep) isdep = true
        })
    },[ state ])
    return state
}

// function useReactive2 (initState) {
//     const stateMap = {}
//     for (let key in initState) {
//         stateMap[key] = useState(initState[key])
//     }
//     const handelState = {
//         set: (obj, key, val) => {
//             if (key in obj) {
//                 stateMap[key][1](val)
//             } else {
//                 stateMap[key] = useState(val)
//             }
//         }
//     }
//     let state = new Proxy(initState, handelState)
//     return state
// }

export {
    useReactive,
    // useReactive2
}
