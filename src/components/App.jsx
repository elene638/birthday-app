import React from "react";
import Data from "./Data";
import List from "./List";

function App () {

    const [people, setPeople] = React.useState(Data)
    const [back, setBack] = React.useState(false)
    
    function handleClick () {
        if(!back) {
            setPeople([])
            setBack(true)
        } else {
            setPeople(Data)
            setBack(false)
        }
    }

    const handlePeople = people.map(person => {
        return <List 
            name={person.name}
            age={person.age}
            key={person.id}
            img={person.image}
        />
    })

    return (
        <div className="main">
            <main className="block" >
                <h3>{people.length} birthdays today</h3>
                {handlePeople}
                <button onClick={handleClick}>{back ? `Return All` : `Clear All`}</button>
            </main>
            
        </div>
    )
}

export default App;