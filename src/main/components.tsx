import { useState } from "react";
import { SideMenu } from "../menu/SideMenu";
import { TeamsTableWrapper } from "../teams/TeamsTable";
import { Page } from "./models";

type Props = {
    activePage: Page;
};
type Actions = {};

export function ContentWrapper(props: Props & Actions) {
    const [search, setSearch] = useState("");
    const page = props.activePage;

    return (
        <section id="container">
            <SideMenu />
            <div id="main-content">
                <div className="display-content" style={{ display: page === "home" ? "block" : "" }}>
                    Home page.
                </div>
                <div className="display-content" style={{ display: page === "skills" ? "block" : "" }}>
                    Skills page.
                </div>
                <div className="display-content" style={{ display: page === "teams" ? "block" : "" }}>
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
                <div className="display-content" style={{ display: page === "languages" ? "block" : "" }}>
                    Languages page.
                </div>
            </div>
        </section>
    );
}
