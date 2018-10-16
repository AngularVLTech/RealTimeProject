import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { LoginViewComponentComponent } from './login-view-component/login-view-component.component';
import { HomeViewComponentComponent } from './home-view-component/home-view-component.component';
import { CatalogViewComponentComponent } from './catalog-view-component/catalog-view-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ApiService } from './api.service';

const coreRoutes: Routes = [
  { path: 'catalog', component: CatalogViewComponentComponent },
  { path: 'home', component: HomeViewComponentComponent },
  { path: 'login', component: LoginViewComponentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: '**', redirectTo: 'login' }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponentComponent,
    HomeViewComponentComponent,
    CatalogViewComponentComponent,
    DashboardComponent,
    RegisterFormComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(coreRoutes),
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
