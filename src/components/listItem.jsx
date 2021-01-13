

const ListItem = (props) => {
    return (
            
        <li
        className={
          props.index === props.current
            ? "list-group-item active"
            : "list-group-item"
        }
        key={props.index}
      >
        {props.chick.race}
        <button
            type="button"
            className="btn btn-secondary float-right"
            onClick={ props.handleDelete }
          >
            Delete
          </button>
      </li>   
           
          
    )
}



export default ListItem