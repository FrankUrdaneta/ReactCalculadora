import './App.css';
import { Testimonio } from './componentes/Testimonio';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freecodecamp</h1>
      <Testimonio 
      nombre="Emma Bostian"
      pais="Suecia"
      imagen="img1"
      cargo="Ingeniero de Software"
      empresa="Spotify"
      testimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
      but also the leap into electronic typesetting" />
      
      <Testimonio 
      nombre="Shown Wan"
      pais="Korea"
      imagen="img3"
      cargo="Ingeniero de Software"
      empresa="Amazon"
      testimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
      but also the leap into electronic typesetting" />
      
      <Testimonio 
      nombre="Frank Urdaneta"
      pais="Venezuela"
      imagen="img"
      cargo="Ingeniero de Software"
      empresa="Globant"
      testimonio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
      but also the leap into electronic typesetting" />
      
      
      </div>
    </div>
  );
}

export default App;
