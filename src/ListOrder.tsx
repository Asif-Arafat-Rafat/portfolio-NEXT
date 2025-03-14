import { useState } from "react";

interface Props{
    category:string;
    list:string[];
    onSelectItem:(category:string,item:string)=>void;
}
function ListOrder({category,list,onSelectItem}:Props){
    function handleSelection(item:string,index:number){
        console.log("Clicked "+item)
        setselectedItem(index);
        onSelectItem(category,item);
    }
    const [selectedItem,setselectedItem]=useState(0);

    return (<><div>
        <h1 className="text-3xl text-center font-bold"> {category}</h1>
            <ul className="w-48 bg-red-300 text-center rounded-2xl">
                {list.map((item,index)=>(
                    <li key={item} onClick={()=>handleSelection(item,index)}  className={`${selectedItem===index? "bg-blue-500":"hover:bg-blue-500"} transition-colors duration-600 py-2 rounded-2xl list-item`}>{item}</li>
                )
                )}
            </ul>
        
    </div>
    </>)
}
export default ListOrder;