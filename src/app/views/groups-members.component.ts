import {Component} from "@angular/core";

@Component({
    selector: 'groupsMembers',
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
    }
    .tooltip {
        position: relative;
        display: inline-block;

    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: white;
        color: black;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        top: 150%;
        left: 50%;
        margin-left: -60px;
    }

    .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent black transparent;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
    }
    `],
    template: `
        <div>
            <h2>רשימת קבוצות השתייכות</h2>
            <table>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>סוג</th>
                    <th>הצטרפות</th>
                    <th>מחירון</th>
                    <th></th>
                </tr>
                <tr>
                    <td class="icon-edit-14"></td>
                    <td class="icon-full-star-18"></td>
                    <td class="icon-delete-13" (click)="delete()"></td>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td>
                        <div class="tooltip">
                            <div class="icon-Details-04">
                                <span class="tooltiptext">Tooltip text</span>
                            </div>
                        </div>
                    </td>
                </tr>

            </table>
            <input type="button" value="שמירה"/>

        </div>
    `
})
export class GroupsMembersComponent {
    constructor() {
    }

    isEdit: boolean = false
    currentId: number;


    edit(i: number) {
        this.currentId = i;
        this.isEdit = true;
    }

    canEdit(i: number) {
        return !(this.isEdit && this.currentId === i);
    }

    delete() {
        let txt;
        if (confirm("האם אתה בטוח שברצונך למחוק?") == true) {
            console.log("delete")
        } else {
            console.log("not delete")
        }
    }
}