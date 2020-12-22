import React from 'react';
import { Experience } from './../models';

interface ExperienceProps {
    experiences: Experience[];
};

const ExperienceSection = ({ experiences }: ExperienceProps) => {
    const renderedExperiences = experiences.map((experience: Experience) =>
        <li className="experienceItem" key={experience.company}>
            <div className="summary">
                <div className="info">
                    <h3>{experience.company}</h3>
                    <h4>{experience.jobTitle}</h4>
                </div>
                <div className="context">
                    <div class="when">
                        {experience.startDate} &mdash; {experience.endDate}
                    </div>
                    <div class="where">
                        {experience.location}
                    </div>
                </div>
            </div>
            <ul className="details">
                
            </ul>
        </li>
    );

    return (
        <div className="experience">
            <h2>Experience</h2>
            <ul>
                {renderedExperiences}
            </ul>
        </div>
    );
};

export default ExperienceSection;