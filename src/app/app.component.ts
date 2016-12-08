import { Component } from '@angular/core';

import { TaskService } from './tasks/task.service';

@Component({
	selector: 'vtl-app',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css'],
	providers: [TaskService]

})
export class AppComponent {

}
