import React, { useState } from 'react';
import axios from 'axios';


const Forms = () => {
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !dept || !age) {
      setMessage("All fields are required.");
      return;
    }

    if (parseInt(age) <= 3) {
      setMessage("Age must be greater than 3.");
      return;
    }

    axios.post("http://localhost:8000/api/submit-form/", {
      name,
      dept,
      age
    })
    .then(response => {
      setMessage("Submitted successfully!");
      setName("");
      setDept("");
      setAge("");
    })
    .catch(error => {
      console.error("Error:", error);
      setMessage("Something went wrong!");
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-pink-700 p-4">
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md min-w-sm flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">User Registration Form</h2>
        
        <label className="text-gray-700 font-semibold" htmlFor="name">Name</label>
        <input
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="text-gray-700 font-semibold" htmlFor="dept">Department</label>
        <input
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          id="dept"
          type="text"
          placeholder="Enter department"
          value={dept}
          onChange={(e) => setDept(e.target.value)}
        />

        <label className="text-gray-700 font-semibold" htmlFor="age">Age</label>
        <input
          className="p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-400"
          id="age"
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        {message && (
          <div className="text-sm text-center text-red-500">{message}</div>
        )}

        <button
          type="submit"
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
