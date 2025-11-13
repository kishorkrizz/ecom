// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ContactList = () => {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8000/api/submit-form/")  // match Django URL
//       .then(response => {
//         setContacts(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching contacts:", error);
//       });
//   }, []);

//   return (
//     <div className="flex flex-col items-center gap-4 p-4">
//       <h2 className="text-2xl font-bold mb-4">Contact List</h2>
//       {contacts.map((contact, index) => (
//         <div key={index} className="bg-white shadow-md p-4 rounded-lg w-80">
//           <h3 className="text-xl font-semibold">{contact.name}</h3>
//           <p>Department: {contact.dept}</p>
//           <p>Age: {contact.age}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ContactList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [ageFilter, setAgeFilter] = useState('');
  const [deptFilter, setDeptFilter] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8000/api/submit-form/")
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error("Error fetching contacts:", error);
      });
  }, []);

  // Filtered contacts based on age and dept input
  const filteredContacts = contacts.filter(contact => {
    const matchesAge = ageFilter === '' || String(contact.age) === String(ageFilter);
    const matchesDept = deptFilter === '' || contact.dept.toLowerCase().includes(deptFilter.toLowerCase());
    return matchesAge && matchesDept;
  });

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h2 className="text-2xl font-bold">Contact List</h2>

      {/* Filter Inputs */}
      <div className="flex gap-4 mb-4">
        <input
          type="number"
          placeholder="Filter by Age"
          value={ageFilter}
          onChange={(e) => setAgeFilter(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Filter by Department"
          value={deptFilter}
          onChange={(e) => setDeptFilter(e.target.value)}
          className="p-2 border rounded"
        />
      </div>

      {/* Display filtered contacts */}
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg w-80">
            <h3 className="text-xl font-semibold">{contact.name}</h3>
            <p>Department: {contact.dept}</p>
            <p>Age: {contact.age}</p>
          </div>
        ))
      ) : (
        <p>No matching contacts found.</p>
      )}
    </div>
  );
};

export default ContactList;
