import { useDrag, useDragDropManager, useDrop } from 'react-dnd'
import { DropZone, DropZoneText } from './style'

const Dropzone = ({
  //props
  children=null,
  onDropItem=()=>{},
  dropMessage="Drop Drinks Here"
}) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'drink',
    drop:(item, monitor)=>{
      onDropItem(item);

    },
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))

	return <DropZone
          ref={drop}
          bg={canDrop && isOver ? '#FF3549' : '#20222300'}
          >
            {children}
            <DropZoneText>
              {dropMessage}
            </DropZoneText>

		</DropZone>
}

export default Dropzone