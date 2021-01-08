import React, { FC, useEffect } from 'react';
import { getProfile } from './api';

import './App.scss';

const App: FC = () => {
  useEffect(() => {
    getProfile({ id: 1 }).subscribe(data => {
      console.log(data);
    });
  }, []);

  return <div className="App">hello world</div>;
};

export default App;
