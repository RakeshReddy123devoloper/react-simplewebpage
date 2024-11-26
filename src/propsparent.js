// import Child from './propschild'
// function Parent(){
// return(
// <div>
// < Child  style={{color:"red"}}name="rakesh"city="hyd" place="kphb"/>
// < Child name="ravi"city="nellore" place="kphb"/>

// </div>
// )
// }
// export default Parent



// import  React,{Component} from 'react'
// import Notification from './notification'
// class Parent extends Component{
//     render(){
//         return(
// <div>
//     <Notification type="liked"/>
// </div>
//         )
//     }
// }
// export default Parent

// this is class compont in class component we have to use this keyword to access the state and props



import  React,{Component} from 'react'
import Notification from './notification'
class Parent extends Component{
render(){
    return(
<div>
    <Notification>
        <h1>hello</h1>
        <p>rakesh</p>
    </Notification>
</div>
    )
}
}
export default Parent;
