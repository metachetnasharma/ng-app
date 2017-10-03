import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MatInputModule, MatListModule, MatDialogModule, MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,
    MatGridListModule,
  ],
  exports:[
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,
    MatGridListModule,
  ],
  declarations: []
})
export class MaterialModule { }
