import { Page } from "../main/models";

type Props = {
    activePage: Page;
};

type Actions = {
    setActive(page: Page): void;
};

export function MainMenu(props: Props & Actions) {
    const active: Page = props.activePage;
    return (
        <ul id="top-menu-bar">
            <li>
                <button
                    type="button"
                    id="home-button"
                    className={active === "home" ? "active-button" : ""}
                    onClick={() => {
                        props.setActive("home");
                    }}
                >
                    <i className="fa-solid fa-house margin-right-md"></i>
                    <span id="text-home-button">Home</span>
                </button>
            </li>
            <li>
                <button
                    type="button"
                    id="skills-button"
                    className={active === "todos" ? "active-button" : ""}
                    onClick={() => {
                        props.setActive("todos");
                    }}
                >
                    <i className="fa-solid fa-gear margin-right-md"></i>
                    <span id="text-skills-button">To Dos</span>
                </button>
            </li>
            <li>
                <button
                    type="button"
                    id="projects-button"
                    className={active === "teams" ? "active-button" : ""}
                    onClick={() => {
                        props.setActive("teams");
                    }}
                >
                    <i className="fa-solid fa-briefcase margin-right-md"></i>
                    <span id="text-projects-button">Teams</span>
                </button>
            </li>
            <li>
                <button
                    type="button"
                    id="languages-button"
                    className={active === "languages" ? "active-button" : ""}
                    onClick={() => {
                        props.setActive("languages");
                    }}
                >
                    <i className="fa-solid fa-globe margin-right-md"></i>
                    <span id="text-languages-button">Languages</span>
                </button>
            </li>
        </ul>
    );
}
