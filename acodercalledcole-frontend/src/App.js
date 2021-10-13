import './App.css';
import TitleAndIntro from './components/TitleAndIntro/TitleAndIntro.js';
import ComputerScreenSection from './containers/ComputerScreenSection/ComputerScreenSection';

function App() {
  return (
    <div className="App">
      <TitleAndIntro />
      <ComputerScreenSection />
    </div>
  );
}

export default App;