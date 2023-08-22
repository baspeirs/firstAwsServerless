import React, { useState } from 'react';

function Stuff() {
    const [stuffState, setStuffState] = useState({
        dude: {}
    })
    const willBeFromDB = 
        {
            name: "Bryce",
            goal: "git gud",
            height: "tall"
        }

    const stateSetter = e => {
        setStuffState({
            dude: willBeFromDB
        })
    }

    return (
      <div className="stuff">
        <h2>Click the button for a dude</h2>
        <button onClick={stateSetter}>Click me, I give the dude</button>
        <div>
            <p>{stuffState.dude.name}</p>
            <p>{stuffState.dude.goal}</p>
            <p>{stuffState.dude.height}</p>
        </div>
      </div>
    );
  }
  
  export default Stuff;