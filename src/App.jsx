import InventoryContainer from "./components/InventoryContainer";
import inventory from "./data/inventory.json";
import "./App.css";

function App() {
 return (
  <div>
  <h1>VIDEO STORE</h1>
  <InventoryContainer inventory={inventory}/>
  </div>
 )


}

export default App
