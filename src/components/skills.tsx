import React from 'react';
import { Skill } from './../models';

interface SkillProps {
    skills: Skill[];
};

function hasSubskills(input: Skill | string): input is Skill {
    if ((input as Skill).items) {
        return true;
    } else {
        return false;
    }
}

function renderSkill(skill: Skill | string) {
    if (hasSubskills(skill)) {
        const renderedSubskills = skill.items.map(
            (subskill) => renderSkill(subskill)).join(', ');
        return skill.name + ` (${renderedSubskills})`;
    } else {
        return skill;
    }
}

const SkillsSection = ({ skills }: SkillProps) => {
    const renderedSkills = skills.map((skill: Skill) =>
        <div className="category" key={skill.name}>
            <div className="categoryName">
                <h3>
                    {skill.name}
                </h3>
            </div>
            <div className="skills">
                {skill.items.map((item) => renderSkill(item)).join(', ')}
            </div>
        </div> 
    );

    return (
        <div className="skills">
            <h2>Skills</h2>
            <div className="skillsList">
                {renderedSkills}
            </div>
        </div>
    );
};

export default SkillsSection;