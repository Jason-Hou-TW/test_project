import {ref,onMounted,onBeforeMount,onUpdated,onBeforeUpdate} from './vue.js'
export default{
    setup(){
        //variable
        const number = ref(0)
        const clickNumber = ()=>{number.value+=1}


        //function 
        //function內含一個指定執行function
        onMounted(()=>{
            console.log("onMounted")
        })
        onBeforeMount(() => {
            console.log("onBeforeMount")
        })
        onUpdated(() => {
            console.log("onUpdated")
        })
        onBeforeUpdate(() => {
            console.log("onBeforeUpdate")
        })

        return{
            number, clickNumber
        }
    },
    template:`
        <button type="button" @click="clickNumber" > {{ number }}</>
        `
}