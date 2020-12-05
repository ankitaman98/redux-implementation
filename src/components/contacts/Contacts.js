import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Contact from "./Contact";
import {
  selectAllContact,
  clearAllContact,
  deleteAllContact,
} from "../../actions/contactAction";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts);
  const selctedContcats = useSelector(
    (state) => state.contact.selectedContacts
  );

  
  return (
    <div>
      
      <table className="table shadow">
        <thead>
          <tr>
           
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact contact={contact}   />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
