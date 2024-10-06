import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { AddEditPatientComponent } from './components/add-edit-patient/add-edit-patient.component';
import { ListPatientComponent } from './components/list-patient/list-patient.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: 'agregar-paciente', component: AddEditPatientComponent },
      { path: 'listado-paciente', component: ListPatientComponent },
      { path: '', redirectTo: 'listado-paciente', pathMatch: 'full' } // Redirige al listado por defecto
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
