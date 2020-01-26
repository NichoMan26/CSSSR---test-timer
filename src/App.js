import React from 'react';
import './App.css';
import { Provider} from 'react-redux'
import store from './redux/store'
import TaimerContainer from './components/Taimer/TaimerContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <TaimerContainer/>
      </div>
    </Provider>
  );
}

export default App;
