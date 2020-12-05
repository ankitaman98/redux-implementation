import React from "react";

const Contact = ({ contact}) => {

  const { name, phone, email, id } = contact;
  return (
    <tr>
      <td>
       {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      
    </tr>
  );
};

export default Contact;
