import { DataListComponent } from "./DataListComponent";


export function DatasComponent () {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last name</th>
                    <th>Counntry</th>
                    <th>Identifier</th>
                    <th>Interactive</th>
                </tr>
            </thead>
            <tbody>
                <DataListComponent />
            </tbody>
        </table>
    )
}