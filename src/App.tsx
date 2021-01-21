import React, { FC, useEffect, useState } from 'react';
import { getProfile, addProfile } from '@/api';
import { BaseObject } from '@/models';

import './App.scss';

const App: FC = () => {
  const [name, setName] = useState<string>('');
  useEffect(() => {
    getProfile<BaseObject>({ id: 1 }).subscribe(data => {
      setName(data.author as string);
    });
  }, []);

  const clickHandle = () => {
    addProfile({ id: 2, author: 'clattanoia' }).subscribe(data => {
      console.log(data);
    });
  };

  return (
    <div className="App">
      <div>hello {name}</div>
      <button onClick={clickHandle}>add</button>
    </div>
  );
};

export default App;
