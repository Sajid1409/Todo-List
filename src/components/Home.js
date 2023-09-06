import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import AddItems from "./AddItems";
import { useEffect, useState } from "react";
import SearchItem from "./SearchItem";
import Update from "./Update";

const Home = () => {
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("TodoList")) || []
  );
  const [edit, setEdit] = useState("");
  const [showAdd, setShowAdd] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  useEffect(() => {
    JSON.parse(localStorage.getItem("TodoList"));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(items));
  }, [items]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => {
      return item.id !== id;
    });
    setAndSaveItems(listItems);
  };

  const handleChange = (e) => {
    const newEntry = {
      id: edit.id,
      checked: edit.checked,
      item: e.target.value
    };
    setEdit(newEntry);
  };

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("TodoList", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const handleUpdate = () => {
    const filteredItems = items.filter((item) => item.id !== edit.id);
    const updatedObject = [...filteredItems, edit];
    setItems(updatedObject);
    setEdit("");
  };
  return (
    <div className="Home">
      <Header />
      <Update
        edit={edit}
        setEdit={setEdit}
        handleUpdate={handleUpdate}
        handleChange={handleChange}
        showEdit={showEdit}
        showAdd={showAdd}
        setShowAdd={setShowAdd}
      />
      <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        showAdd={showAdd}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        setEdit={setEdit}
        handleUpdate={handleUpdate}
        setShowAdd={setShowAdd}
        showAdd={showAdd}
        setShowEdit={setShowEdit}
        showEdit={showEdit}
      />
      <Footer length={items.length} />
    </div>
  );
};

export default Home;
