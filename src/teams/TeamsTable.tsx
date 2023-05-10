import "./style.css";

export function TeamsTable() {
    const teams = [
        {
            id: "qqu6ka1683557400775",
            promotion: "FastTrackIT",
            members: "Robert Leca Andrei",
            name: "JavaScript",
            url: "https://github.com/robertlek/teams-networking"
        },
        {
            id: "bdw22b1683557416185",
            promotion: "FastTrackIT",
            members: "Robert Leca",
            name: "CSS",
            url: "https://github.com/robertlek/teams-networking"
        }
    ];
    return (
        <form id="edit-form" action="" method="post">
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
                    {teams.map(({ id, url, promotion, members, name }) => {
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
                                    <a data-id={id} className="link-btn remove-btn">
                                        ✖
                                    </a>
                                    <a data-id={id} className="link-btn edit-btn">
                                        &#9998;
                                    </a>
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
