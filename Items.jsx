function Items(){
    const fruits = [{id: "1", name : "apple"},
       {id: "2", name: "banana"},
        {id: "3", name: "orange"}
        
    ];
   fruits.sort((a,b) => a.name.localeCompare(b.name));
    //alphabetic order
    const items = fruits.map(fruit =><li key={fruits.id}>{fruit.name}</li>)
    return( 
        
        <ol >{items}</ol>
        
       
    );

}
export default Items