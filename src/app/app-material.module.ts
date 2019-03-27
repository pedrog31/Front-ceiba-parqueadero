import {NgModule} from '@angular/core';
import {
  MatToolbarModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatButtonModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class AppMaterialModule {
}
