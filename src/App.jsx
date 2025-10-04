import { useState, useEffect } from 'react';
import Header from "./components/Header";
import ThemeProvider from "./components/ThemeProvider";
import '/src/assets/style/Theme.css';

function App() {
  const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    document.body.className = modoOscuro ? 'dark' : 'light';
  }, [modoOscuro]);

  return (
    <div>
      <button className="boton-tema" onClick={() => setModoOscuro(prev => !prev)}>
        Cambiar a {modoOscuro ? 'Claro' : 'Oscuro'}
      </button>

      <h1>Bienvenid@  a the Music</h1>
      <p>Este es el contenido de tu app.</p>
    </div>
  );
}

export default App;
