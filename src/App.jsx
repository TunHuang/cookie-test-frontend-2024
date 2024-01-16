import { useState } from 'react';
import EinloggenFormular from './components/EinloggenFormular.jsx';
import GeheimerInhalt from './components/GeheimerInhalt.jsx';
import './App.css';

function App() {
  const [eingeloggt, setEingeloggt] = useState(false);

  return (
    <>
      <h1>Einloggen mit Session Demo</h1>
      {eingeloggt ? (
        <GeheimerInhalt setEingeloggt={setEingeloggt} />
      ) : (
        <EinloggenFormular setEingeloggt={setEingeloggt} />
      )}
    </>
  );
}

export default App;
