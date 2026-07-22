import React from 'react';

import UploadUI from './components/UploadUI/UploadUI';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Drag & Drop File Upload Challenge</h1>
        <p>A simple UI to handle file uploads via drag & drop or click.</p>
      </header>
      <UploadUI />
    </div>
  );
}

export default App;
