import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule }  from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Angular2DataTableModule } from 'angular2-data-table';                                                                                                                                                                                      

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { MenuComponent }  from './menu/menu.component';
import { MyActiveTasksComponent } from './my-active-tasks/my-active-tasks.component';
import { CreateNewTaskComponent } from './create-new-task/create-new-task.component';
import { AddNewTaskClipComponent } from './create-new-task/add-new-task-clip.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { CreateNewUserComponent } from './manage-users/create-new-user.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';





@NgModule({
  imports: [ 
        BrowserModule,
        HttpModule,
        CommonModule,
        FormsModule,
        Angular2DataTableModule,
        RouterModule.forRoot([
            { path: 'create-new-task', component: CreateNewTaskComponent },
            { path: 'create-new-task/:id', component: AddNewTaskClipComponent },
            { path: 'my-active-tasks', component: MyActiveTasksComponent },
            { path: 'manage-users', component: ManageUsersComponent },
            { path: 'login', component: LoginComponent },
            { path: '', redirectTo: 'my-active-tasks', pathMatch: 'full'}

          ])
      ],
  declarations: [ 
      AppComponent,
      HeaderComponent,
      MenuComponent,
      MyActiveTasksComponent,
      CreateNewTaskComponent,
      AddNewTaskClipComponent,
      ManageUsersComponent,
      CreateNewUserComponent,
      LoginComponent,
      TableComponent,
      ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
