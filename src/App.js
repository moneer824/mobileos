import './App.css';
import MobComponents from './components/MobComponents';

function App() {
  return (
    <div className="App">
<MobComponents title="Mobile Operating System" arr = {['Android','Blackberry',"iPhone","Windows Phone"]}/>
<MobComponents title="Mobile Operating System" arr = {['Samsung','HTC','Micromax','Apple']}/>
    </div>
  );
}

export default App;
