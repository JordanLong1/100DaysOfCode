
import * as React from 'react'
import '../box-styles.css'


function Box({className, size = '', style, ...otherProps}) {
  // conditional to add box-- if there is a size prop passed down. 
  const sizeClassName = size ? `box--${size}` : '' 
  console.log(otherProps)
  return (
   <div className={`box ${className} ${sizeClassName}`}  // return the div, template literal our className from the App component, as well as
   // the size prop. 
   style={{fontStyle: 'italic', ...style}} // set the font size to italic for all of the Box's, use the spread operator because we are
   // overriding the style prop from the otherProps, and then we are overriding this style prop because of the otherProps (confusing but makes sense if you move it around)
   // also, the order of styles matter. if i put ...style on the other side it would override the lightblue, pink, orange etc. 
   {...otherProps} /> // in this case, other props is pretty much what wasnt specificed to be passed through here. 
   // small lightblue box, medium pink box, large orange box.
   
  )
}

function App() {
  // passing down size, style & children props to Box.
  return (
    <div>
      <Box size='small' style={{backgroundColor: 'lightblue'}} >small lightblue box</Box> 
      <Box size='medium' style={{backgroundColor: 'pink'}} >medium pink box</Box>
      <Box size='large' style={{backgroundColor: 'orange'}} >large orange box</Box>

    </div>
  )
}

export default App