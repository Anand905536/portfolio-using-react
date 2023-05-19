import './App.css';
import Certifications from  './component/certifications/Certifications'
import Connectme from './component/connectme/Connectme'
import Intro from './component/intro/Intro'
import Projects from './component/projects/Projects'
import Skills from './component/skills/Skills'


function App() {
  return (
    <div className="App">
     <Intro/>
     <Skills/>
     <Projects/>
     <Certifications/>
     <Connectme/>
    </div>
  );
}

export default App;
