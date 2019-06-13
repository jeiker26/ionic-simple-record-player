import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AudioCaptureAndPlayerModule } from '../../../shared/ui-components/audio-capture-and-player/audio-capture-and-player.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    TranslateModule,
    AudioCaptureAndPlayerModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
