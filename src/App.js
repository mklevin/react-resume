import Header from './components/header';
import ExperienceSection from './components/experience';
import ResumeData from './data.json';
import './App.css';

function App() {
  console.log(ResumeData);
  
  return (
    <div className="Resume">
    <spacer/>
    <main>
      <Header resumeInfo={ResumeData.info} />
      <ExperienceSection experiences={ResumeData.experience} />
    </main>
    <spacer/>
    </div>
  );
}

export default App;
