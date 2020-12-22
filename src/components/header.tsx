import React from 'react';
import { ResumeInfo, SocialLink } from './../models';
import { SocialIcon } from 'react-social-icons';

interface HeaderProps {
    resumeInfo: ResumeInfo;
};

const Header = ({ resumeInfo }: HeaderProps) => {
    const links = resumeInfo.links.map((link: SocialLink) =>
        <li key={link.name}>
            <SocialIcon 
                url={link.url}
                fgColor="white"
                bgColor="navy"
                style = {{ height: 40, width: 40 }}
            />
        </li>
    );

    return (
        <header>
            <div className="name">
                <h1>{resumeInfo.name}</h1>
            </div>
            <div className="links">
                <ul>
                    {links}
                </ul>
            </div>
        </header>
    );
};

export default Header;