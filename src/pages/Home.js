import './Home.css';
import React from 'react';
import { useEffect } from 'react';

import resume from '../pdf/Resume.pdf';
import portfolio from '../pdf/Portfolio.pdf';

function SiteLink({href, text}) {
    return (
        <div>
            <a href={href} className="linkbar_link"> {text} </a>
        </div>
    );
}

function Home() {
    useEffect(() => {
        document.title = "David Santamaria";
    });
    return (
        <div className="full center">
            <div id="title">
                [  David Santamaria  ]
            </div>
            <div id="linkbar">
                <div className="linkbar_item">
                    <SiteLink href={portfolio} text="portfolio" />
                </div>
                <div className="linkbar_divider">
                </div>
                <div className="linkbar_item">
                    <SiteLink href={resume} text="resume" />
                </div>
                <div className="linkbar_divider">
                </div>
                <div className="linkbar_item">
                    <SiteLink href="https://github.com/Daves1245" text="github" />
                </div>
                <div className="linkbar_divider">
                </div>
                <div className="linkbar_item">
                    <SiteLink href="http://codeforces.com/profile/medbar" text="codeforces" />
                </div>
                <div className="linkbar_divider">
                </div>
                <div className="linkbar_item">
                    <SiteLink href="./projects" text="projects" />
                </div>
                <div className="linkbar_divider">
            </div>
        </div>
    </div>
  );
}

export default Home;
