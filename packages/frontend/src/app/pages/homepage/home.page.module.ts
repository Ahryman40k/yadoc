import { MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './home.page';

@NgModule({
    imports: [MatButtonModule, RouterModule],
    exports: [HomepageComponent],
    declarations: [HomepageComponent],
  })
  export class HomepageModule {}
  