import EducationSection from './components/education';
import ExperienceSection from './components/experience';
import Header from './components/header';
import SkillsSection from './components/skills';
import ResumeData from './data.json';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="Resume">
        <Header resumeInfo={ResumeData.info} />
        <main>
          <ExperienceSection experiences={ResumeData.experience} />
          <div className="sidebar">
            <SkillsSection skills={ResumeData.skills} />
            <EducationSection education={ResumeData.education} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
