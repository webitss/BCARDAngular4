import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
@Component({
    selector: 'app-root',
    
    template: `
        <router-outlet></router-outlet>
    `,
    styles: [``],

})
export class AppComponent {
    constructor(private router: Router) {
            console.log("here");

    }


}
