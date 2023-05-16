import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const ExampleComponent = () => {
  const { data, fetchData } = useContext(AppContext);

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <ul>
        {data.exampleComponent.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
