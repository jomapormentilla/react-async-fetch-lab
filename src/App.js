// create your App component here
import React from 'react'

class App extends React.Component {
    state = {
        people: []
    }

    componentDidMount(){
        fetch(`http://api.open-notify.org/astros.json`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                people: data.people
            }, ()=>{console.log(this.state)})
        })
    }

    render(){
        return(
            <div className="App">

            </div>
        )
    }
}

export default App