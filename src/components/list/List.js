import Item from "../items/Items";


function List ({arr}) {
    const items = arr.map(item =>    <Item key={item} text={item} />)
    return(
        
        <ul>
            {items}
            {/* <Item text={arr[0]}/> */}
            {/* <Item text={arr[1]}/> */}
            {/* <Item text={arr[1]}/> */}
        </ul> 
    
        ) ;
    }

  export default  List ;