import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../service/course.service';
import { AlertService } from '../service/alert.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {

  courses: Course[];
  filterCourses:Course[];
  showCourse: boolean;
  @Input() userRole: string;
  @Input() searchText: string;
  @Input() tags: any;

  constructor(private courseservice: CourseService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.showCourse = true;
    this.courseservice.findCourses().subscribe(courses => {
      // tslint:disable-next-line:no-string-literal
      if (courses['code'] === 200) {
        // tslint:disable-next-line:no-string-literal
        this.courses = courses['data'];

        for(let i=0;i<this.courses.length;i++){

          if(this.tags["tag1"].checked){
            if(this.courses[i].skill.search(this.tags["tag1"].tilte)){
              this.filterCourses.push(this.courses[i]);
            }
          }else if(this.tags["tag2"].checked){
            if(this.courses[i].skill.search(this.tags["tag2"].tilte)){
              this.filterCourses.push(this.courses[i]);
            }

          }else if(this.tags["tag3"].checked){
            if(this.courses[i].skill.search(this.tags["tag3"].tilte)){
              this.filterCourses.push(this.courses[i]);
            }
          }
        }
        this.courses = this.filterCourses;
        this.showCourse = false;
      } else if (courses['code'] === 404) {
        // tslint:disable-next-line:no-string-literal
        this.showCourse = false;
        // tslint:disable-next-line:no-string-literal
        this.alertService.warn(courses['message']);
      }
    },
    error => {
          this.alertService.error(error);
          this.showCourse = false;
          });
  }

}
