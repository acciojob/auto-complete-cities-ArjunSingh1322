import React from 'react';
import Autocomplete from './Autocomplete';

const App = () => {
  const locations = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
    'San Francisco', 'Dallas', 'San Jose', 'Main Street', 'Maple Avenue'
  ];

  return (
    <div>
      <Autocomplete suggestions={locations} />
    </div>
  );
};

export default App;
