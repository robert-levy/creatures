import "./App.css";
import {useEffect, useState} from 'react'
import { useDataDispatch } from "./context/dataContext";
import { initMap } from "./context/dataActions";
import GameGrid from "./components/GameGrid/GameGrid";

/**
 * The DataContainer for GameGrid
 * 
 */
function App() {
  const dispatch = useDataDispatch().dispatch;
  const {worldMap, startCapture} = useDataDispatch().state

  // State to manage modals
  const [openCaptureModal, setopenCaptureModal] = useState(false)
  const [openBattleModal, setOpenBattleModal] = useState(false)

  // have custom hook here to handle battles
  

  // have custom hook here to handle captures

  useEffect(() => {
    dispatch(initMap())    
  }, [dispatch])

  /**
   * If Collector is neighbouring a Creature(s), open Capture modal.
   * Run useStartCapture(), after capture update map and set openCaptureModal(false)
   * <code here>
   */
  const handleStartCapture = () => {
    return 
  }

  const handleStartBattle = () => {
    return
  }

  
  return (
      <div >
         <GameGrid worldMap={worldMap} />
      </div>
  );
}

export default App;
