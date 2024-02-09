import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientCreateComponent } from "./client-create/client-create.component";
import { ClientMeetingComponent } from "./client-meeting/client-meeting.component";

const routes: Routes = [
    {path: 'client-create', component: ClientCreateComponent},
    {path: 'client-meeting', component: ClientMeetingComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule]
})

export class AppRoutingModule { }
