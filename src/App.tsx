import React from "react";
import logo from "./logo.svg";
import "./App.css";

function AppHeader() {
    return (
        <div>
            <button id="removeSelected">❌ Remove Selected</button>
            <input type="search" name="search" id="search"></input>
        </div>
    );
}

console.warn(AppHeader());

function MainMenu() {
    return (
        <ul id="top-menu-bar">
            <li>
                <button type="button" id="home-button" data-tab="home">
                    <span id="text-home-button">Home</span>
                </button>
            </li>
            <li>
                <button type="button" id="skills-button" data-tab="skills">
                    <span id="text-skills-button">Skills</span>
                </button>
            </li>
            <li>
                <button type="button" id="projects-button" data-tab="projects">
                    <span id="text-projects-button">Projects</span>
                </button>
            </li>
            <li>
                <button type="button" id="languages-button" data-tab="languages">
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
                        <span id="text-contact-me-button">Contact me!</span>
                    </button>
                </form>
            </div>
            <div id="lower-side-menu">
                <h4>
                    <span id="text-personal-details-label">Personal details:</span>
                </h4>
                <ul>
                    <li>
                        <span id="text-current-age">Current age:</span> <b>21</b>
                    </li>
                    <li>
                        <span id="text-location">Location:</span> <b>Romania, Sibiu</b>
                    </li>
                    <li>
                        <span id="text-phone-number">Phone number:</span> <b>0747577171</b>
                    </li>
                    <li>
                        <span id="text-email-address">Email address:</span> <b>lecarobertandrei@gmail.com</b>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <AppHeader></AppHeader>
            <MainMenu></MainMenu>
            <SideMenu></SideMenu>
        </div>
    );
}

function App_old() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
