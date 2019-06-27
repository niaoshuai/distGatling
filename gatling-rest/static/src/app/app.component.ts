import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    location: Location;

    constructor(location: Location) {
        this.location = location;
    }

    ngOnInit() {
    }

    isLoggedIn() {
        return localStorage.getItem('currentUser') != null;
    }
}
