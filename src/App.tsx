// named export - isso permite importar mais de uma coisa dentro do arquivo
// Usando named export
import { Button } from './components/Button'

function App() {
  return (
    <div>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
}

export default App;
