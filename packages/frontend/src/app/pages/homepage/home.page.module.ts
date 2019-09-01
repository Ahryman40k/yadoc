import { MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './home.page';
import { FooterModule } from '../../shared/footer/footer.module';

@NgModule({
    imports: [MatButtonModule, RouterModule, FooterModule],
    exports: [HomepageComponent],
    declarations: [HomepageComponent],
  })
  export class HomepageModule {}
  