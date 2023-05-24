import { Page } from "../main/models";

type Props = {};
type Actions = {
    setActive(page: Page): void;
};

export function MainMenu(props: Props & Actions) {
    return (
        <ul id="top-menu-bar">
            <li>
                <button
                    type="button"
                    id="home-button"
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
                    onClick={() => {
                        props.setActive("skills");
                    }}
                >
                    <i className="fa-solid fa-gear margin-right-md"></i>
                    <span id="text-skills-button">Skills</span>
                </button>
            </li>
            <li>
                <button
                    type="button"
                    id="projects-button"
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
