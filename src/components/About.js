import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        //API call
    }

    render(){
        return(
            <div>
                <h1>About</h1>
                <h2>This is Namaste react Web Series</h2>
                {/* <User name="Manveer" location="Chandigarh"/> */}
                <UserContext>{(({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>)}</UserContext>
                <UserClass name="miru" location="Mohali"></UserClass>
                {/* <UserClass name="first" location="Mohali"/>
                <UserClass name="second" location="Chandigarh"/> */}
            </div>
        )
    }
}
// const About = () =>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste react Web Series</h2>
//             <User name="Manveer" location="Chandigarh"/>
//             <UserClass name="Gursimran" location="Mohali"/>
//         </div>
//     )
// }
export default About;

/*
 - Parent Constructor
 - Parent render
    
    - First constructor
    - First render

    - Second constructor
    - Second render

    <DOM UPDATED - IN SINGLE BATCH>

    - First ComponentDidMount
    - Second ComponentDidMount

- Parent ComponentDidMount
*/