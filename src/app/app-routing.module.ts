import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendMsgComponent } from './send-msg/send-msg.component';
import { SaveMsgComponent } from './save-msg/save-msg.component';

const routes: Routes = [
  { path: '', component: SaveMsgComponent },
  { path: 'savepage', component: SaveMsgComponent },
  { path: 'senderpage/:id', component: SendMsgComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
