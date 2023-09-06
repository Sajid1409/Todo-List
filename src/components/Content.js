import ItemList from "./ItemList";
const Content = ({
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
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          setEdit={setEdit}
          handleUpdate={handleUpdate}
          setShowAdd={setShowAdd}
          showAdd={showAdd}
          setShowEdit={setShowEdit}
          showEdit={showEdit}
        />
      ) : (
        <p style={{ marginTop: "2rem", color: "white" }}>Your list is empty.</p>
      )}
    </main>
  );
};
export default Content;
