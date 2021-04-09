import { useReactive } from '@/common/hook'

function Vue () {
    const state = useReactive({ number: 1  , name: 'alien' })
    return <div className="box" >
        <div className="show" >
            <div> 你的姓名是: { state.name } </div>
            <div>{ new Array(state.number).fill(0).map(() => {
                return '👽'
            }) }</div>
        </div>
        <div className="constrol" >
            <div> <button onClick={ () => {
                state.number++
                state.aaa = true
            } } >👽++</button> </div>
            <div> <button onClick={ () => {
                state.number--
            } } >👽--</button>  </div>
            <input placeholder="姓名" value={state.name}  onChange={ (e) => state.name = e.target.value } />       
        </div>
        {
            state.aaa ? <div>asdasasd</div> : null
        }
    </div>

}

export default Vue;
