import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  public essa: Array<any> = []
  constructor(private apiService: RestService){
      
  }
  ngOnInit() : any {
    this.apiService.getProdukt().subscribe(
      (data) => { 
        this.essa.push[this.data.name]

      });
  }
}
