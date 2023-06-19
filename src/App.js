import { DndProvider } from "react-dnd";
import {HTML5Backend} from 'react-dnd-html5-backend'
import "./App.css";
import PicturesTable from "./components/PictureFolder/PicturesTable";
import DropArea from "./components/DnD/DropArea";

function App() {

  return <>
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <PicturesTable/>
        <DropArea/>
      </div>
    </DndProvider>
  </>;
}

export default App;
