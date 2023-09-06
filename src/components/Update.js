import { useRef } from "react";

const Update = ({
  edit,
  handleUpdate,
  handleChange,
  showEdit,
  showAdd,
  setShowAdd
}) => {
  const inputRef = useRef();
  return (
    <form
      className="updateForm"
      style={{ display: showEdit ? "flex" : "none" }}
      onSubmit={handleUpdate}
    >
      <label htmlFor="updateItem">ADD ITEMS</label>
      <input
        autoFocus
        ref={inputRef}
        id="updateItem"
        type="text"
        placeholder=""
        value={edit && edit.item}
        onChange={(e) => handleChange(e)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => {
          setShowAdd(!showAdd);
          inputRef.current.focus();
        }}
      >
        Update
      </button>
    </form>
  );
};

export default Update;
