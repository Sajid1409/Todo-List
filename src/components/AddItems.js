import { useRef } from "react";
import { FaPlus } from "react-icons/fa";
const AddItems = ({ newItem, setNewItem, handleSubmit, showAdd }) => {
  const inputRef = useRef();
  return (
    <form
      className="addForm"
      style={{ display: showAdd ? "flex" : "none" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="addItem">ADD ITEMS</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add New Task"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItems;
