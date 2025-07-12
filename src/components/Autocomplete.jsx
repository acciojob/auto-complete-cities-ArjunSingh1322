

import React, { useState } from "react";

const Autocomplete = ({ suggestions = [] }) => {
  const [input, setinput]     = useState("");
  const [citylist, setcitylist] = useState([]);
  const [flag, setflag]       = useState(false);

 function handleinputvalue(e) {
  const current = e.target.value;

  const filteredvalue = suggestions.filter((value) =>
    value.toLowerCase().includes(current.toLowerCase())
  );

  setinput(current);
  setcitylist(filteredvalue);
  setflag(true);
}


  function handleClick(suggestion) {
    setinput(suggestion);
    setcitylist([]);
    setflag(false);
  }

  function RenderSuggestions() {
    if (!flag || !input) return null;

    if (citylist.length === 0) {
      return <div>No suggestions available.</div>;
    }

    return (
      <ul>
        {citylist.map((s, i) => (
          <li key={i} onClick={() => handleClick(s)}>
            {s}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter City Name"
        onChange={handleinputvalue}
        value={input}
      />

      {RenderSuggestions()}
    </div>
  );
};

export default Autocomplete;
