import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Component registration
import { GenderComponent } from './admin/gender/gender.component';

const routes: Routes = [
  { path: 'gender', component:GenderComponent },
  { path: '',   redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
