import React from 'react';
import { Education } from './../models';

interface EducationProps {
    education: Education[];
};

const EducationSection = ({ education }: EducationProps) => {
    const renderedEducation = education.map((edu: Education) =>
        <li className="education-item" key={edu.institute}>
            <div className="summary">
                <div className="info">
                    <h3>{edu.institute}</h3>
                    <div>{edu.degree}</div>
                    <div>{edu.subDegree}</div>
                </div>
                <div className="context">
                    <div className="when">
                        {edu.graduationDate}
                    </div>
                    {edu.overallGpa && 
                        <div className="gpa">
                            GPA: {edu.overallGpa}
                        </div>
                    }
                    {edu.majorGpa && 
                        <div className="gpa">
                            Major GPA: {edu.majorGpa}
                        </div>
                    }
                </div>
            </div>
            <div className="coursework">
                <span className="title">Related Coursework: </span>{edu.coursework.join(', ')}
            </div>
        </li>
    );

    return (
        <div className="education">
            <h2>Education</h2>
            <ul className="education-list">
                {renderedEducation}
            </ul>
        </div>
    );
};

export default EducationSection;