import React, {useState} from 'react' 

const ToggleUpperCase = porps => {
  const {name} = porps
  const [upperCaseName, setUpperCaseName ] = useState(name);
  const toggleUpperCase = str => str.toUpperCase() === str ? str.toLowerCase() : str.toUpperCase()

  return (
    <div>
      <h1>{upperCaseName}</h1>
      <button onClick={()=> setUpperCaseName(toggleUpperCase(upperCaseName))}>
        Toggle UpperCase
      </button>
    </div>
    )
}

export default ToggleUpperCase