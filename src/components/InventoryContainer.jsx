import { useState } from "react";
import InventoryItem from "./InventoryItem";
import DetailsPanel from "./DetailsPanel";

export default function InventoryContainer({inventory}) {
    const [selectedTitle, setSelectedTitle] = useState(null);

    console.log(selectedTitle)

    const setSelectedTitleById = (id) =>{
           const match = inventory.find((item) => item.id == id);
        
            if (match){
                setSelectedTitle(match);
            } else{
                setSelectedTitle(null);
            }

    }





    return (
    <>
        <div className = "inventory-container">
        <h2>Inventory</h2>

        <div className = "inventory-list"> 
            {inventory.map((movie, index) => 
                <InventoryItem 
                    key={index} 
                    setSelectedTitleById={setSelectedTitleById}
                    movie={movie} />
            )}
        </div>
        </div>
        {selectedTitle && <DetailsPanel selected ={selectedTitle}/>}
    </>
        
    );
};

