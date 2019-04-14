import React, {useState, useEffect} from 'react'

const Greetings = props => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const synonyms = ["dude", "doode", "dewd"]
  useEffect(()=>{
    const interval = setInterval(()=>{
        setCurrentIndex((currentIndex + 1) % synonyms.length)
      }, 1000)
    return ()=> clearInterval(interval)

  })

  return  (
    <h1>
      Hello {synonyms[currentIndex]} 👾
    </h1>
  )
}

export default Greetings