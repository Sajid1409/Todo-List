import LineItems from "./LineItems";

const ItemList = ({
  items,
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
    <ul>
      {items.map((item) => (
        <LineItems
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          setEdit={setEdit}
          handleUpdate={handleUpdate}
          setShowAdd={setShowAdd}
          showAdd={showAdd}
          setShowEdit={setShowEdit}
          showEdit={showEdit}
        />
      ))}
    </ul>
  );
};

export default ItemList;
