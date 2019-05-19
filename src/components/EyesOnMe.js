// Code EyesOnMe Component Here
import React,{Component} from 'react'

export default class EyesOnME extends Component{
focus=()=>{

console.log('Good!')


}

blur=()=>{
   // console.log('Good!')

console.log('Hey! Eyes on me!')


}        




render(){
return (


<div>
<button  onBlur={this.blur} onFocus={this.focus}/>

</div>

)





}




}