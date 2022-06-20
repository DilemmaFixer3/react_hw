import './App.css';
import RickAndMortyComponent from "./rickandmorty_component/RickAndMortyComponent";

function App() {
  return (
    <div className="App">
        <RickAndMortyComponent id={1} name={'Rick Sanchez'} status={'Alive'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}/>
        <RickAndMortyComponent id={2} name={'Morty Smith'} status={'Alive'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}/>
        <RickAndMortyComponent id={3} name={'Summer Smith'} status={'Alive'} species={'Human'} gender={'Female'} image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}/>
        <RickAndMortyComponent id={4} name={'Beth Smith'} status={'Alive'} species={'Human'} gender={'Female'} image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}/>
        <RickAndMortyComponent id={5} name={'Jerry Smith'} status={'Alive'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}/>
        <RickAndMortyComponent id={6} name={'Abadango Cluster Princess'} status={'Alive'} species={'Alien'} gender={'Female'} image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}/>
    </div>
  );
}

export default App;
