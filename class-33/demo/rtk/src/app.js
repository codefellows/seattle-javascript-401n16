import React from 'react';
import {Provider} from 'react-redux';

import People from './people.js';

// import oldStore from './redux-store/index.js';
import rtkStore from './rtk-store/index.js';

function App() {
  return (
    <Provider store={rtkStore}>
      <People/>
    </Provider>
  );
}

export default App;
