import {NgModule} from '@angular/core';
import {
  MatToolbarModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatGridListModule,
  MatRadioModule,
  MatSnackBarModule,
  MatIconModule,
  MatCardModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatGridListModule,
    MatRadioModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
  ],
})
export class AppMaterialModule {
}
