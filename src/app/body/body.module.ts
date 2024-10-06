import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodySelectorComponent } from './components/body-selector/body-selector.component';
import { BodyRoutingModule } from './body-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { CardModule } from 'primeng/card';
import { AddEditPatientComponent } from './components/add-edit-patient/add-edit-patient.component';


@NgModule({
  declarations: [
    BodySelectorComponent,
    MenuComponent,
    AddEditPatientComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    CardModule
  ]
})
export class BodyModule { }
