import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../shared/services/project.service';
import { Subject, takeUntil } from 'rxjs';
import { Until_check } from '../../../p-lib/until/until';
interface Project {
  id: number;
  name: string;
  categoryName: string;
  category: number;
  location: string;
  date: string;
  client: string;
  duration: string;
  images: string[];
  description: string;
  solution: string;
  result: string[];

  relatedProjects: number[];
}

@Component({
  selector: 'app-project-detail',
  standalone: false,

  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  project: Project | undefined;
  relatedProjects: Project[] = [];

  Unsubscribe = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private apiService: ProjectService
  ) {}

  //#region LIFE CYCLE
  ngOnInit(): void {
    this.onGetProjectDetails();
  }

  ngOnDestroy(): void {
    this.Unsubscribe.next();
    this.Unsubscribe.complete();
  }
  //#endregion

  //#region HANDLE
  onGetProjectDetails(): void {
    this.route.paramMap.subscribe((params) => {
      const projectId = Number(params.get('id'));
      this.APIGetProjectById(projectId);
    });
  }

  //#region API

  APIGetProjectById(id: number) {
    return this.apiService
      .GetProjectById(id)
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.project = res.data;
            console.log(this.project);
            this.APIGetAllProject();
          } else {
            // this.nofiService.error(
            //   `Đã xảy ra lỗi khi lấy danh sách chính sách: ${res.ErrorString}`
            // );
          }
        },
        (error) => {
          // this.nofiService.error(
          //   `Đã xảy ra lỗi khi lấy danh sách chính sách: ${error}`
          // );
        }
      );
  }

  APIGetAllProject() {
    return this.apiService
      .GetAllProject()
      .pipe(takeUntil(this.Unsubscribe))
      .subscribe(
        (res) => {
          if (Until_check.hasValue(res)) {
            this.relatedProjects = res.data.filter(
              (project: Project) =>
                project.id !== this.project?.id &&
                project.category === this.project?.category
            );
          } else {
            // this.nofiService.error(
            //   `Đã xảy ra lỗi khi lấy danh sách chính sách: ${res.ErrorString}`
            // );
          }
        },
        (error) => {
          // this.nofiService.error(
          //   `Đã xảy ra lỗi khi lấy danh sách chính sách: ${error}`
          // );
        }
      );
  }
  //#endregion
}
