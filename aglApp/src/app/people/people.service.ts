import { Http, Response } from '@angular/http';
import { IPeople } from './entities/people';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class PeopleService {
	private static URL_GET_PEOPLE: string = 'http://localhost:3000/api/people';
	constructor(private http: Http) { }

	getPeople(): Observable<IPeople[]> {

		return this.http.get(PeopleService.URL_GET_PEOPLE)
			.map((res: Response) => {
				return res.json();
			});
	}

}