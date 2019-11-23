import { Component } from '@angular/core';
import { Friend } from '../models/Friend';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


model: Friend = new Friend();
  myFriends: Friend[] = [];

  constructor(private data : DataService) {

      this.data.getAllFriends().subscribe(res =>{
        this.myFriends = [];

        this.myFriends = res;

      });

  }

saveFriend(){
console.log("saving friend", this.model); 

this.data.saveFriend(this.model);

this.model = new Friend();


}

}

