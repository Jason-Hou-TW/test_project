import {ref} from './vue.js'

export default{
    props:{
        number:Number
    },
    //新增事件
    emit: ["handleClick"],
    setup(props,{emit}){
        //這邊只會於initial時啟動
        const number2 = ref(props.number)

        const click2 = ()=>{

            //const number2 = ref(props.number)
            //通知上層元件 觸發handleClick
            emit("handleClick")
            //the props should be 
            alert(props.number+' '+number2.value)
            
        }
        return { number2, click2}
    },
    template:
        `<button type="button" @click="click2" >you click {{number}} times</button>`

}