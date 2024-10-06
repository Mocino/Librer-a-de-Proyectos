import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodySelectorComponent } from './components/body-selector/body-selector.component';
import { BodyRoutingModule } from './body-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { CardModule } from 'primeng/card';
import { AddEditPatientComponent } from './components/add-edit-patient/add-edit-patient.component';
import { ListPatientComponent } from './components/list-patient/list-patient.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BodySelectorComponent,
    MenuComponent,
    AddEditPatientComponent,
    ListPatientComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    ReactiveFormsModule,
    CardModule
  ]
})
export class BodyModule { }
