import { SideMenu } from "../menu/SideMenu";
import { TeamsTable } from "../teams/TeamsTable";

export function ContentWrapper() {
    return (
        <section id="container">
            <SideMenu />
            <div id="main-content">
                <div className="display-content" id="home"></div>
                <div className="display-content" id="skills"></div>
                <div className="display-content" id="teams" style={{ display: "block" }}>
                    <TeamsTable />
                </div>
                <div className="display-content" id="languages"></div>
            </div>
        </section>
    );
}
