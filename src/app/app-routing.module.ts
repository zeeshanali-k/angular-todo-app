import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './presentation/auth/login/login.component';
import { RegisterComponent } from './presentation/auth/register/register.component';
import { DashboardComponent } from './presentation/dashboard/dashboard/dashboard.component';
import { AddTaskComponent } from './presentation/dashboard/tasks/add-task/add-task.component';
import { TasksComponent } from './presentation/dashboard/tasks/tasks/tasks.component';
import { HomeComponent } from './presentation/main/home/home.component';
import { MainComponent } from './presentation/main/main/main.component';

const routes: Routes = [
  {
    path: "", component: MainComponent, children: [
      { path: "home", component: HomeComponent, outlet: "main" },
      { path: "login", component: LoginComponent, outlet: "main" },
      { path: "register", component: RegisterComponent, outlet: "main" }
    ],
  },
  {
    path: "dashboard", component: DashboardComponent, children: [
      { path: "add_task", component: AddTaskComponent, outlet: "dashboard" },
      { path: "tasks", component: TasksComponent, outlet: "dashboard" },
      { path: "completed_tasks", component: TasksComponent, outlet: "dashboard" },
      { path: "pending_tasks", component: TasksComponent, outlet: "dashboard" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
