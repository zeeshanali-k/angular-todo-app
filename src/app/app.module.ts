import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './presentation/auth/login/login.component';
import { HomeComponent } from './presentation/main/home/home.component';
import { MainComponent } from './presentation/main/main/main.component';
import { DashboardComponent } from './presentation/dashboard/dashboard/dashboard.component';
import { TasksComponent } from './presentation/dashboard/tasks/tasks/tasks.component';
import { TaskComponent } from './presentation/dashboard/tasks/components/task/task.component';
import { RegisterComponent } from './presentation/auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidNavContentComponent } from './presentation/dashboard/dashboard/components/sid-nav-content/sid-nav-content.component';
import { AddTaskComponent } from './presentation/dashboard/tasks/add-task/add-task.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    DashboardComponent,
    TasksComponent,
    TaskComponent,
    RegisterComponent,
    SidNavContentComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
