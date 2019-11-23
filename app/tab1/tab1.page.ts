import { Post } from '../models/Post';
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

postsToShow: Post[]=[];

  constructor(private data : DataService) {

    this.data.getAllPost().subscribe(res => {
      this.postsToShow= [];

      this.postsToShow= res;
      console.log("Event Happened");

    });

  }

}
