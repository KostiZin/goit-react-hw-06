import { useEffect, useState } from "react";

import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import data from "./components/contacts.json";
import { nanoid } from "nanoid";

function App() {
  // Contact List

  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return data;
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  //Search Box
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const filteredContacts = contacts.filter((user) =>
    user.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  //Contact Form

  const initialValues = {
    id: "",
    number: "",
    name: "",
  };

  //Adding new contact

  const handleAddNewContacts = (values, options) => {
    values.id = nanoid();
    setContacts((prev) => [...prev, values]);
    options.resetForm();
  };

  //Deleting a contact
  const handleDeleteContacts = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm value={initialValues} getValue={handleAddNewContacts} />
        <SearchBox inputValue={inputValue} onInputChange={handleInputChange} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={handleDeleteContacts}
        />
      </div>
    </>
  );
}

export default App;
