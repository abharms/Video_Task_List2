import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ITask } from './task';

@Injectable()
export class TaskService {


	private _tasksUrl = 'http://videotaskapi-dev.works24.com/Tasks/';

	constructor(private _http: Http) {}

	getTasks(): Observable<ITask[]> {
		return this._http.get(this._tasksUrl)
		.map((response: Response) => <ITask[]> response.json())
		.do(data => console.log('All: ' + JSON.stringify(data)))
		.catch(this.handleError);
	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}


    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.task.length;
    }
}