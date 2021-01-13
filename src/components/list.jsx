
import ListItem from "./listItem";

const List = (props) => {
    return (
        <ul className="list-group">
          {props.chicken.map((chick, index) => {
            return (
              <ListItem
                chick={chick}
                index={index}
                current={props.current}
                key = {index}
                handleDelete = {() => props.handleDelete(index)}
              />
            );
          })}
        </ul>
      );
}



export default List;
