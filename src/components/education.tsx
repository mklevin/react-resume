import React from 'react';
import { Education } from './../models';

interface EducationProps {
    education: Education[];
};

const EducationSection = ({ education }: EducationProps) => {
    const renderedEducation = education.map((edu: Education) =>
        <li className="educationItem" key={edu.institute}>
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
                    <div className="gpa">
                        GPA: {edu.overallGpa}
                    </div>
                    <div className="gpa">
                        Major GPA: {edu.majorGpa}
                    </div>
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
            <ul className="educationList">
                {renderedEducation}
            </ul>
        </div>
    );
};

export default EducationSection;