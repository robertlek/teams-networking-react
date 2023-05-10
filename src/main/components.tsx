import { SideMenu } from "../menu/SideMenu";

export function ContentWrapper() {
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
