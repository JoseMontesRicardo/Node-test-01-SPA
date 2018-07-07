import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {
  
  heros: any [];
  constructor(public DataService: DataService, private router : ActivatedRoute) {}

  ngOnInit() {
    // get list movies
    this.DataService.getList().then(data => {
      this.heros = data
      console.log(data)
    });
  }

  details(url, hero) {
    let newParams = {
      heroUrl : url.url,
      heroName : hero.name
    }
    this.router.params.forEach((params:Params)=>{
      let id = params['id'];
      this.DataService.updateUser(newParams, id).then(data => {
        window.location.href = data.heroUrl;
      });
    })
    // console.log(newParams, this.router.params[0].id);
  }

}
