import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { TutorialDetailsComponent } from './tutorials/tutorial-details/tutorial-details.component';
import { TutorialListComponent } from './tutorials/tutorial-list/tutorial-list.component';
import { AddTutorialsComponent } from './tutorials/add-tutorials/add-tutorials.component';

import { TopicDetailsComponent } from './topic/topic-details/topic-details.component';
import { TopicListComponent } from './topic/topic-list/topic-list.component';
import { TopicAddComponent } from './topic/topic-add/topic-add.component';
import { PortalComponent } from './portal/portal.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ChartComponent,
    DashboardComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    EventComponent,
    ProfileComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    BoardAdminComponent,
    TutorialDetailsComponent,
    TutorialListComponent,
    AddTutorialsComponent,
    TopicDetailsComponent,
    TopicListComponent,
    TopicAddComponent,
    PortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FileUploadModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
