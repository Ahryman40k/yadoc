import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarModule } from './shared/navbar/navbar.module';
import { LayoutModule } from '@angular/cdk/layout';
import { HomepageModule } from './pages/homepage/home.page.module';
import { DocumentationItems } from './shared/documentation-items.ts/documentation-items';
import { ProgramsModule } from './pages/programs/programs.module';
import { FooterModule } from './shared/footer/footer.module';
import { ProjectModule } from './pages/project/project.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,

    NavBarModule,
    HomepageModule,
    ProgramsModule,
    ProjectModule,
    FooterModule,
  ],
  providers: [
    DocumentationItems
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
