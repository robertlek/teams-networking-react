import "./style.css";

export function TeamsTable() {
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

                <tbody></tbody>

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
