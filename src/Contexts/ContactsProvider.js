import React, { useContext, useState } from "react";

const ContactsContext = React.createContext();

export function useContact() {
  return useContext(ContactsContext);
}

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useState([]);

  const addFriend = async (userId, requestEmail) => {
    const res = await fetch(process.env.REACT_APP_BASE_URL + "friend_request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, requestEmail }),
    });

    const data = await res.json();
    return data;
  };

  const findAllFriends = async (user_id) => {
    const res = await fetch(
      process.env.REACT_APP_BASE_URL + `all_friends/${user_id}`
    );

    const data = await res.json();
    return data;
  };

  return (
    <ContactsContext.Provider value={{ addFriend, contacts, findAllFriends }}>
      {children}
    </ContactsContext.Provider>
  );
}
