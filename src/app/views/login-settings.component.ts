import {Component} from "@angular/core";

@Component({
  selector: 'loginSettings',
    styles : [`
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 50%;
    }

   td, th {
        border: 1px solid #dddddd ;
        text-align: left;
        padding: 8px;
    }

   tr:nth-child(even) {
        background-color: #dddddd ;
    }`],
    template: `
        <div>
            <div>
                <h2>כניסה למערכת</h2>
                <table>
                    <tr>
                        <th></th>
                        <th>שעת פתיחה</th>
                        <th>שעת סגירה</th>
                    </tr>
                    <tr>
                        <td>א</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ב</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ג</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ד</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ה</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ו</td>
                        <td></td>
                        <td></td>
                    </tr>

                </table>
                <br/>
                <table>
                    <tr>
                        <th>עריכה</th>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>

                </table>
                <input type="button" value="שמירה"/>
                <input type="button" value="עריכה"/>

            </div>


        </div>
    `})
export class LoginSettingsComponent { }