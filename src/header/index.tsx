import { Page } from "../main/models";
import { MainMenu } from "../menu/MainMenu";
import logo from "./avatar.jpg";
import ro_flag from "./ro-language.png";
import en_flag from "./us-language.png";

type Props = {};
type Actions = {
    setActive(page: Page): void;
};

export default function AppHeader(props: Props & Actions) {
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

            <MainMenu setActive={props.setActive} />
        </header>
    );
}
