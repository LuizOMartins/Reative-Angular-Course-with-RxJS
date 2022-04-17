import { CourseDialogComponent } from './../course-dialog/course-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Course } from './../model/course';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss']
})
export class CoursesCardListComponent implements OnInit {

  @Input() courses: Course[] = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  editCourse(course: Course) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";
    dialogConfig.data = course;
    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
  }

}