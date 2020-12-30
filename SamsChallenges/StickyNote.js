import React, {useState} from 'react'; 

export default function StickyNote() {

    const [translateCoords, setTranslateCoords] = useState({ x: 0, y: 0 });
  const [dragStartCoords, setDragStartCoords] = useState(null);

  const handleMouseDown = (e) => {
    setDragStartCoords({
        clientX: e.clientX, 
        clientY: e.clientY,
        translateX: translateCoords.x, 
        translateY: translateCoords.y
      });
  }

  const handleMouseMove = (e) => {
    if (dragStartCoords) {
        setTranslateCoords({
          x: e.clientX - dragStartCoords.clientX + dragStartCoords.translateX, 
          y: e.clientY - dragStartCoords.clientY + dragStartCoords.translateY
        })
    }
  }

  const handleMouseUp = () => {
    setDragStartCoords(null)

  }

    return (
        <div className='sticky-note-container' 
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseUp={(e) => handleMouseUp(e)}
        >
           <textarea type='text' />
        </div>
    )
}