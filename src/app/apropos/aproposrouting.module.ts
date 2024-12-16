import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos.component';

const routes: Routes = [
  { path: '', component: AproposComponent } // Route par défaut pour ce module
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AproposRoutingModule {}
