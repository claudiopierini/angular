import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'courses',
    template: `<button class="btn btn-primary" [class.active]="isActive">Save</button>
    `
})

export class CoursesComponent {
    // tslint:disable-next-line: quotemark
    title = "List of courses";
    courses = [];
    isActive = true;
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

}
