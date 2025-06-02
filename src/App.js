import './App.css';

/* Redux */
import { Provider } from "react-redux";

import EditorManagementPortal from './pages/EditorManagementPortal';
import appStore from './utils/appStore';

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <EditorManagementPortal />
      </Provider>
    </div>
  );
}

export default App;
