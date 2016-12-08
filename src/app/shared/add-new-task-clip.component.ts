import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
	selector: 'vtl-add-new-task-clip',
	templateUrl: 'app/shared/add-new-task-clip.component.html',
	styleUrls: ['app/shared/add-new-task-clip.component.css']

})
export class AddNewTaskClipComponent implements AfterViewInit, OnInit {
	showAddClip: boolean = false;

	constructor(private _route: ActivatedRoute) {
	}


	ngOnInit(): void {
		let id= +this._route.snapshot.params['id'];
	}

	ngAfterViewInit() {
			  $(document).ready(function(){
    				$('.collapsible').collapsible();
  				});
		}
	}
        
}