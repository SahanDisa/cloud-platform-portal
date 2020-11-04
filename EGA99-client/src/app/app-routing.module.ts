import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { TutorialListComponent } from './tutorials/tutorial-list/tutorial-list.component';
import { TutorialDetailsComponent } from './tutorials/tutorial-details/tutorial-details.component';
import { AddTutorialsComponent } from './tutorials/add-tutorials/add-tutorials.component';
import { TopicListComponent } from './topic/topic-list/topic-list.component';
import { TopicDetailsComponent } from './topic/topic-details/topic-details.component';
import { TopicAddComponent } from './topic/topic-add/topic-add.component';
import { PortalComponent } from './portal/portal.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},  
  { path: 'upload', component: UploadComponent },
  { path: 'portal', component: PortalComponent },
  { path: 'chart', component: ChartComponent} ,
  { path: 'dashboard', component: DashboardComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialsComponent },
  { path: '', redirectTo: 'topics', pathMatch: 'full' },
  { path: 'topics', component: TopicListComponent },
  { path: 'topics/:id', component: TopicDetailsComponent },
  { path: 'addtopic', component: TopicAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
