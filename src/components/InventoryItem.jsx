

export default function InventoryItem({movie}){
    const { title, imgUrl, copiesAvailable } = movie;
    console.log(title, imgUrl, copiesAvailable);

        return (
            <div className="inventory-item">
            <h2>{title}</h2>
            <img src={imgUrl} />
            <pre>Copies Available: {copiesAvailable}</pre>
            <button 
                disabled={copiesAvailable ==0} 
                onClick={() => alert(`you checked out ${title}`)}
                >Check out</button>
            </div>
        );
}

