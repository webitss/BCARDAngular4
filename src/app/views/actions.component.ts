import {Component} from "@angular/core";

@Component({
  selector: 'actions',
    styles : [``],
    template: `
        <div>
            <h2>רשימת פעולות ללקוח</h2>
            <label>בחר איזה טופס פעולה ברצונך להציג</label>
            <select>
                <option></option>
            </select>
            <div style="background-color: lightgray;width: 50%">
                <label>סוג: זיכוי ארנק/כרטיס</label><br/>
                <label>ארנק/כרטיס לזיכוי</label><input type="text"/><br/>
                <label>סכום</label><input type="text"/><br/>
                <label>פרטים</label><input type="text"/><br/>
            </div>


        </div>
    `})
export class ActionsComponent { }