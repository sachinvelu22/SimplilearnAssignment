import { Routes } from '@angular/router';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientMeetingComponent } from './client-meeting/client-meeting.component';

export const routes: Routes = [
    {path: "client-create", component: ClientCreateComponent},
    {path: "client-meeting", component: ClientMeetingComponent}
];

