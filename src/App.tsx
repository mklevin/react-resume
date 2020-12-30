import React from 'react';

import EducationSection from './components/education';
import ExperienceSection from './components/experience';
import Header from './components/header';
import SkillsSection from './components/skills';
import ThemeSwitcher from './components/theme-switcher';
import ResumeData from './data.json';
import './App.css';

/** theme switcher settings */
enum ThemeSwitcherMode {
  SWITCHABLE, 
  LIGHT_ONLY, 
  DARK_ONLY 
}
/* adjust this constant to change theme switcher behavior */
const THEME_SWITCHER_MODE: ThemeSwitcherMode = ThemeSwitcherMode.SWITCHABLE;

function App() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') || ''
  );
  React.useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // set theme to OS preference by default (if one exists)
  if (theme === '') {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  if (THEME_SWITCHER_MODE === ThemeSwitcherMode.SWITCHABLE) {
    document.documentElement.setAttribute('data-theme', theme);
  } else if (THEME_SWITCHER_MODE === ThemeSwitcherMode.DARK_ONLY) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  const enableThemeSwitcher = THEME_SWITCHER_MODE === ThemeSwitcherMode.SWITCHABLE;
  return (
    <div className='App'>
      <ThemeSwitcher enabled={enableThemeSwitcher} currentTheme={theme} setThemeFn={setTheme}/>
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
