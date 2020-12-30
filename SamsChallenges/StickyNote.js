import React, {useState} from 'react'; 

export default function StickyNote() {

    const [translateCoords, setTranslateCoords] = useState({ x: 0, y: 0 }); // setting our initial x & y coordinates to 0. they will be updated later 
  const [dragStartCoords, setDragStartCoords] = useState(null); // setting the start of our drag coordinates to null. 

  const handleMouseDown = (e) => {
    setDragStartCoords({ // updating the start of our drag coordinates to the x & y coordinates from the event.
        clientX: e.clientX, // e.clientX gives us the horizontal coordinate of the event.
        clientY: e.clientY, // e.clientY gives ut the vertical coordinate of the mouse. 
        translateX: translateCoords.x,  // here we are getting our x pointer coordinate when we click our mouse down on the sticky note.
        translateY: translateCoords.y  // here we are getting our y pointer coordinate when we click our mouse down on the sticky note.
      });
  }

  const handleMouseMove = (e) => {
    if (dragStartCoords) { // if there are dragStart coordinates (without this conditional we would be setting translatecoords all the time)
        setTranslateCoords({
          x: e.clientX - dragStartCoords.clientX + dragStartCoords.translateX, // setting our x coordinate to be the difference of the event.clientX
          // minus the horizontal coordinate plus the x axis coordinate where we end up.
          y: e.clientY - dragStartCoords.clientY + dragStartCoords.translateY //doing the same as x but for y
        })
    }
  }

  const handleMouseUp = () => {
    setDragStartCoords(null) // setting our drag coordinates back to null after dropping the element. 

  }

    return (
        <div className='sticky-note-container' 
        onMouseDown={(e) => handleMouseDown(e)} // event handler
        onMouseMove={(e) => handleMouseMove(e)} // event handler
        onMouseUp={(e) => handleMouseUp(e)} // event handler
        >
           <textarea type='text'
             style={{
                backgroundColor: 'yellow',
                border: 'solid 2px blue',
                height: '125px',
                transform: `translate(${translateCoords.x}px, ${translateCoords.y}px)` // this is a very key part this is how we get to 
                // drag and drop. without this line the drag and drop wouldnt work correctly. 
              }}
           />
        </div>
    )
}