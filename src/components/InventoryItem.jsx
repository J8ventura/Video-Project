

export default function InventoryItem({movie, setSelectedTitleById}){
    const { id, title, imgUrl, copiesAvailable } = movie;
    console.log(id, title, imgUrl, copiesAvailable, setSelectedTitleById);

        return (
            <div className="inventory-item">
                <h2>{title}</h2>
                <img src={imgUrl} onClick={() => setSelectedTitleById(id)} />
                <div className="item-action">
                    <pre>Copies Available: {copiesAvailable.current}</pre>
                </div>
            </div>
        );
}

