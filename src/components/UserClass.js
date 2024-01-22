import React from "react";
// class based component
class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                // avatar_url: "https://dummy-photo.com"
            }
            // count: 0,
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/manveerKaurB");
        const json = await data.json();
        this.setState({
            userInfo: json
        });

        // api call
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    render() {
        // const {name, location} = this.props;
        // const {count, count2} = this.state;
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                {/* <h1>Count = {count}</h1>
                <button onClick={()=>{
                    // Never update state variables directly
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increase Count</button> */}
                {/* <h1>Count2 = {count2}</h1> */}
                <img src="https://avatars.githubusercontent.com/u/107040691?v=4"/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @manveerk</h4>
            </div>
        )
    }

}

// const User = () => {
//     return (
//         <div className="user-card">
//             <h2>Name: Manveer</h2>
//             <h3>Location: Chandigarh</h3>
//             <h4>Contact: @manveerk</h4>
//         </div>
//     )
// }

export default UserClass;


/*****
 * 
 * ---- MOUNTING ----
 * 
 * Constructor (dummmy)
 * Render (dummy)
 *      <HTML Dummy>
 * Component Did Mount
 *      <API Call>
 *      <this.setState> -> State variable is updated
 * 
 * 
 * ---- UPDATE ----
 *      
 *      render(API data)
 *      <HTML (new api data)>
 *      componentDidUpdate
 */