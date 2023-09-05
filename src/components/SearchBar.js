import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  // set a peice of state that stores the updating serach term
  const [term, setTerm] = useState("");

  // pass the peice of state as a argument to the callback function when the form is submitted
  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  // on input text change set the piece of state 
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  // pass the piece of state as a prop value to the prop "value" on the input element. This is known as controlled input.
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} type="text" required />
      </form>
    </div>
  );
}

export default SearchBar;
