import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class DataService {

  constructor(public http: Http) { }

  getList() {
    return this.http.get('http://localhost:5500/marvel/heros').toPromise().then(this.extractData).catch(this.handleError);
  }

  createNewUser(newUser) {
    return this.http.post('http://localhost:5500/user', newUser).toPromise().then(this.extractData).catch(this.handleError);
  }

  updateUser(user, userId) {
    return this.http.put('http://localhost:5500/user/'+userId, user).toPromise().then(this.extractData).catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}