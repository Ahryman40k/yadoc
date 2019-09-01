import { NgModule } from '@angular/core';
import {MatButtonModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBar } from './navbar.component';


@NgModule({
    imports: [
      MatToolbarModule,
      MatButtonModule,
      MatMenuModule,
      RouterModule,
      CommonModule
    ],
    exports: [NavBar],
    declarations: [NavBar],
  })
  export class NavBarModule {}
  