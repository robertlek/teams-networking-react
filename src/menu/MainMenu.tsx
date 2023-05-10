export function MainMenu() {
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
                <button type="button" id="projects-button" data-tab="teams">
                    <i className="fa-solid fa-briefcase margin-right-md"></i>
                    <span id="text-projects-button">Teams</span>
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
