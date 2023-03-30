export default function DetailsPanel({selected}){
    console.log(selected);

    return (
        <>
            <h2>{selected.title}</h2>
            <h3>{selected.description}</h3>
        </>
    )
}