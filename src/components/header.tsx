import React from 'react';
import { ResumeInfo, SocialLink } from './../models';

const DOWNLOAD_KEYWORD = 'Download';

interface HeaderProps {
    resumeInfo: ResumeInfo;
};

function handleDownloadClick(e: Event) {
    e.preventDefault();
    window.print();
}

const Header = ({ resumeInfo }: HeaderProps) => {
    const links = resumeInfo.links.map((link: SocialLink) =>
        <span key={link.name}>
            {(link.name) === DOWNLOAD_KEYWORD
                /* intentionally using a href to simplify styling */
                /* eslint-disable-next-line */
                ? <a href="#" onClick={handleDownloadClick}>Download</a>
                : <a href={link.url} target='blank'>{link.name}</a>
            }
        </span>
    ).reduce((prev, curr) => [prev, ' | ', curr]);

    return (
        <header>
            <div className="name">
                <h1>{resumeInfo.name}</h1>
            </div>
            <div className="links">
                <div className="email">
                    <a href={'mailto:' + resumeInfo.email}>
                        {resumeInfo.email}
                    </a>
                </div>
                <div className="other">
                    {links}
                </div>
            </div>
        </header>
    );
};

export default Header;