import EducationSection from './components/education';
import ExperienceSection from './components/experience';
import Header from './components/header';
import SkillsSection from './components/skills';
import ResumeData from './data.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="spacer" />
      <div className="Resume">
        <Header resumeInfo={ResumeData.info} />
        <main>
          <ExperienceSection experiences={ResumeData.experience} />
          <div className="sidebar">
            <SkillsSection skills={ResumeData.skills} />
            <div className="spacer" />
            <EducationSection education={ResumeData.education} />
          </div>
        </main>
      </div>
      <div className="spacer" />
    </div>
  );
}

export default App;
