import { useState } from "react";
import { SideMenu } from "../menu/SideMenu";
import { TeamsTableWrapper } from "../teams/TeamsTable";

export function ContentWrapper() {
    const [search, setSearch] = useState("");

    return (
        <section id="container">
            <SideMenu />
            <div id="main-content">
                <div className="display-content" id="home"></div>
                <div className="display-content" id="skills"></div>
                <div className="display-content" id="teams" style={{ display: "block" }}>
                    <input
                        type="search"
                        placeholder="Search"
                        value={search}
                        onChange={e => {
                            setSearch(e.target.value);
                        }}
                    />
                    <span>🔎 searching {search}</span>
                    <TeamsTableWrapper search={search} />
                </div>
                <div className="display-content" id="languages"></div>
            </div>
        </section>
    );
}
