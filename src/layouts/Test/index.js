import { useRef, useState } from "react"
import './styles.css'
const src = 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0'
function Test() {
  const figureRef = useRef()
  const[state,setState] = useState({
    backgroundImage: `url(${src})`,
    backgroundPosition: '0% 0%'
  })
  
  const handleMouseMove = e => {
    const { left, top, width, height } = figureRef.current.getBoundingClientRect()
    console.log(e.pageX)
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    setState({ backgroundImage: `url(${src})`,backgroundPosition: `${x}% ${y}%` })
  }
  return ( 
  <div className="testContainer">
    <figure ref={figureRef} onMouseMove={handleMouseMove} style={state}>
      <img className="imgTest" src={src} />
    </figure>
  </div>
  );
}

export default Test