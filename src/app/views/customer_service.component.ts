import {Component} from "@angular/core";

@Component({
    selector: 'service',
    styles: [`table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }`],
    template: `
        <div>
            <table>
                <tr>
                    <th></th>
                    <th>שם מבצע השרות</th>
                    <th>סוג שרות</th>
                    <th>שיחה נכנסת/יוצאת</th>
                    <th>מדיה</th>
                    <th>נושא השיחה</th>
                    <th>תוכן השיחה</th>
                    <th>סיכום השיחה</th>
                    <th>זמן התחלה</th>
                    <th>זמן סיום</th>
                </tr>
                <tr>
                    <td class="icon-edit-14"></td>
                    <td></td>
                    <td><select>
                        <option>אאאא</option>
                        <option>בבבב</option>
                    </select></td>
                    <td></td>
                    <td><select>
                        <option>אאאא</option>
                        <option>בבבב</option>
                    </select></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

            </table>

            <input type="button" value="שמירה"/>
        </div>
    `
})
export class ServiceComponent {
}