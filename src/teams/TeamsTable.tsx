import React from "react";
import "./style.css";
import { deleteTeamRequest, getTeamsRequest } from "./middleware";

type Team = {
    id: string;
    name: string;
    promotion: string;
    members: string;
    url: string;
};

type Props = {
    loading: boolean;
    teams: Team[];
};

type Actions = {
    deleteTeam(id: string): void;
};

export function TeamsTable(props: Props & Actions) {
    return (
        <form id="edit-form" action="" method="post" className={props.loading ? "loading-mask" : ""}>
            <table>
                <colgroup>
                    <col span={1} style={{ width: "40px" }} />
                    <col span={1} style={{ width: "125px" }} />
                    <col span={1} />
                    <col span={1} />
                    <col span={1} />
                    <col span={1} style={{ width: "80px" }} />
                </colgroup>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" name="selectAll" id="selectAll" />
                        </th>
                        <th>Promotion</th>
                        <th>Members</th>
                        <th>Project Name</th>
                        <th>Project URL</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {props.teams.map(({ id, url, promotion, members, name }) => {
                        let displayURL = url;
                        if (url.startsWith("https://")) {
                            displayURL = url.substring(8);
                        }
                        return (
                            <tr key={id}>
                                <td>
                                    <input type="checkbox" name="selected" value={id} />
                                </td>
                                <td>{promotion}</td>
                                <td>{members}</td>
                                <td>{name}</td>
                                <td>
                                    <a href="${url}" target="_blank">
                                        {displayURL}
                                    </a>
                                </td>
                                <td>
                                    <a
                                        className="link-btn remove-btn"
                                        onClick={() => {
                                            props.deleteTeam(id);
                                        }}
                                    >
                                        ✖
                                    </a>
                                    <a className="link-btn edit-btn">&#9998;</a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>

                <tfoot>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text" id="promotion" name="promotion" placeholder={"Promotion"} required />
                        </td>
                        <td>
                            <input type="text" id="members" name="members" placeholder={"Members"} required />
                        </td>
                        <td>
                            <input
                                type="text"
                                id="project-name"
                                name="project-name"
                                placeholder={"Project Name"}
                                required
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                id="project-url"
                                name="project-url"
                                placeholder={"Project URL"}
                                required
                            />
                        </td>
                        <td>
                            <button type="submit">💾</button>
                            <button type="reset">✖</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </form>
    );
}

type WrapperProps = {};

type State = {
    loading: boolean;
    teams: Team[];
};

export class TeamsTableWrapper extends React.Component<WrapperProps, State> {
    constructor(props: WrapperProps) {
        super(props);
        this.state = {
            loading: true,
            teams: []
        };
    }

    componentDidMount(): void {
        this.loadTeams();
    }

    async loadTeams() {
        const teams = await getTeamsRequest();

        this.setState({
            loading: false,
            teams: teams
        });
    }

    render() {
        return (
            <TeamsTable
                teams={this.state.teams}
                loading={this.state.loading}
                deleteTeam={async teamId => {
                    console.log("Delete team...", teamId);
                    const status = await deleteTeamRequest(teamId);
                    console.warn("status", status);
                    this.loadTeams();
                }}
            />
        );
    }
}
