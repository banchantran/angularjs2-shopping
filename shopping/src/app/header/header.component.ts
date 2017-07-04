import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() selectedFeature = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

    selectFeature(feature: string) {
        this.selectedFeature.emit(feature);
    }
}
