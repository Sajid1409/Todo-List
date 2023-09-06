import { FaTrashAlt, FaPen } from "react-icons/fa";

const LineItems = ({
  item,
  handleCheck,
  handleDelete,
  setEdit,
  handleUpdate,
  setShowEdit,
  setShowAdd,
  showAdd,
  showEdit
}) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>

      <FaPen
        role="button"
        tabIndex="0"
        onClick={() => {
          setShowEdit(!showEdit);
          setShowAdd(!showAdd);
          setEdit({ id: item.id, checked: item.checked, item: item.item });
        }}
      ></FaPen>

      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
      />
    </li>
  );
};

export default LineItems;
