import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
    @Input() project!: Project;
    @Output() close = new EventEmitter<void>();

    onClose() {
        this.close.emit();
    }
}
