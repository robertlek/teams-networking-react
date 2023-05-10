import React from "react";
import "./App.css";
import logo from "./images/avatar.jpg";
import ro_flag from "./images/ro-language.png";
import en_flag from "./images/us-language.png";

function AppHeader() {
    return (
        <header id="header">
            <div id="header-wrapper">
                <div id="avatar-wrapper">
                    <img src={logo} id="avatar-image" alt="Avatar" />
                </div>
                <div>
                    <h1>Robert Andrei Leca</h1>
                    <h2 id="text-function-name">Software Developer</h2>
                </div>
                <div id="quote-wrapper">
                    <h2 id="text-quote"># "Why do Java programmers have to wear glasses? Because they don't C#."</h2>
                </div>
                <div id="language-select-wrapper">
                    <button type="button" className="language-button">
                        <img src={en_flag} className="language-button-image" width="16" height="16" title="English" />
                    </button>
                    <button type="button" className="language-button">
                        <img src={ro_flag} className="language-button-image" width="16" height="16" title="Romanian" />
                    </button>
                </div>
            </div>

            <MainMenu />
        </header>
    );
}

function MainMenu() {
    return (
        <ul id="top-menu-bar">
            <li>
                <button type="button" id="home-button" data-tab="home">
                    <i className="fa-solid fa-house margin-right-md"></i>
                    <span id="text-home-button">Home</span>
                </button>
            </li>
            <li>
                <button type="button" id="skills-button" data-tab="skills">
                    <i className="fa-solid fa-gear margin-right-md"></i>
                    <span id="text-skills-button">Skills</span>
                </button>
            </li>
            <li>
                <button type="button" id="projects-button" data-tab="projects">
                    <i className="fa-solid fa-briefcase margin-right-md"></i>
                    <span id="text-projects-button">Projects</span>
                </button>
            </li>
            <li>
                <button type="button" id="languages-button" data-tab="languages">
                    <i className="fa-solid fa-globe margin-right-md"></i>
                    <span id="text-languages-button">Languages</span>
                </button>
            </li>
        </ul>
    );
}

function SideMenu() {
    return (
        <div id="side-menu">
            <div id="upper-side-menu">
                <h4>
                    <i className="fa-solid fa-id-card margin-right-md"></i>
                    <span id="text-contact-me-label">Contact me:</span>
                </h4>
                <form action="/index.html" method="get">
                    <label htmlFor="user-email" id="text-user-email-label">
                        Your email address:
                    </label>
                    <input type="email" id="user-email" name="user-email" placeholder="example@me.com" required />
                    <label htmlFor="user-name" id="text-user-name-label">
                        Your full name:
                    </label>
                    <input type="text" id="user-name" name="user-name" placeholder="John Doe" required />
                    <button type="submit">
                        <i className="fa-solid fa-paper-plane margin-right-md"></i>
                        <span id="text-contact-me-button">Contact me!</span>
                    </button>
                </form>
            </div>
            <div id="lower-side-menu">
                <h4>
                    <i className="fa-solid fa-id-card-clip margin-right-md"></i>
                    <span id="text-personal-details-label">Personal details:</span>
                </h4>
                <ul>
                    <li>
                        <i className="fa-solid fa-circle-user margin-right-md"></i>
                        <span id="text-current-age">Current age:</span> <b>21</b>
                    </li>
                    <li>
                        <i className="fa-solid fa-globe margin-right-md"></i>
                        <span id="text-location">Location:</span> <b>Romania, Sibiu</b>
                    </li>
                    <li>
                        <i className="fa-solid fa-phone margin-right-md"></i>
                        <span id="text-phone-number">Phone number:</span> <b>0747577171</b>
                    </li>
                    <li>
                        <i className="fa-solid fa-envelope margin-right-md"></i>
                        <span id="text-email-address">Email address:</span> <b>lecarobertandrei@gmail.com</b>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function ContentWrapper() {
    return (
        <section id="container">
            <SideMenu />
            <div id="main-content">
                <div className="display-content" id="home"></div>
                <div className="display-content" id="skills"></div>
                <div className="display-content" id="projects"></div>
                <div className="display-content" id="languages"></div>
            </div>
        </section>
    );
}

function AppFooter() {
    return (
        <footer id="footer">
            <ul>
                <li>
                    <a href="https://github.com/RobertLek" target="_blank">
                        <i className="fa-brands fa-github margin-right-lg"></i>GitHub
                    </a>
                </li>
            </ul>
        </footer>
    );
}

function App() {
    return (
        <div>
            <AppHeader />
            <ContentWrapper />
            <AppFooter />
        </div>
    );
}

export default App;
