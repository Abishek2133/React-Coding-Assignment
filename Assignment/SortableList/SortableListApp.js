import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ListItem } from './SortableList'
import { List } from './List'

export const SortableListApp = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      {<List/>}
    </DndProvider>
  )
}

export default SortableListApp
