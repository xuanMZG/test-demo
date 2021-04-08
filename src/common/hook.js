import { reactive, effect  } from '@vue/reactivity'
import React, {  useRef , useEffect, useMemo, useState } from 'react'
function useReactive (initState){
   const reactiveState = useRef(initState) // state 
   const [  ,forceUpdate ] = useState(0)
   const state = useMemo(()=> reactive(reactiveState.current)  ,[ reactiveState.current ]) 
   useEffect(()=>{
       let isdep = false
       effect(()=>{
           for(let i in state ){ state[i] } //依赖收集
           isdep && forceUpdate(num => num + 1)  // 强制更新
           if(!isdep) isdep = true
       })
   },[ state ])
   return state
}
