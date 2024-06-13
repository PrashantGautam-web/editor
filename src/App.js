import logo from './logo.svg';
import './App.css';
import Editor from './Editor';
import { useCallback } from 'react';
import EmailEditorData from './EmailEditor';
import Templates from './Templates';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const handleLoad = (unlayer) => {
    console.log('Editor loaded', unlayer);
  };

  const handleChange = (design) => {
    console.log('Design updated', design);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/template" element={<Templates />} />
          <Route path="/edit-template" element={<EmailEditorData />} />
        </Routes>
      </Router>
      {/* <Editor /> */}
      {/* <h1>Email Editor</h1> */}
      {/* <Templates /> */}
      {/* <EmailEditorData onLoad={handleLoad} onChange={handleChange} /> */}
    </div>
  );
}

export default App;
