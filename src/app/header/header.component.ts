import { Component } from '@angular/core';

@Component ({
	selector: 'vtl-header',
	templateUrl: 'app/header/header.component.html',
	styleUrls: ['app/header/header.component.css']
})
export class HeaderComponent {
	pageTitle: string = "Video Task List";
}