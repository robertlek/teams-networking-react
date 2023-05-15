import { SideMenu } from "../menu/SideMenu";
import { TeamsTableWrapper } from "../teams/TeamsTable";

export function ContentWrapper() {
    return (
        <section id="container">
            <SideMenu />
            <div id="main-content">
                <div className="display-content" id="home"></div>
                <div className="display-content" id="skills"></div>
                <div className="display-content" id="teams" style={{ display: "block" }}>
                    <TeamsTableWrapper />
                </div>
                <div className="display-content" id="languages"></div>
            </div>
        </section>
    );
}
