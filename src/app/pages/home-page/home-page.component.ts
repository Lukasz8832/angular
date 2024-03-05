import { Component, OnInit } from '@angular/core';
import { RestService, produkt } from '../../services/rest.service';
@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  constructor(private apiService: RestService){
  }
  ngOnInit() : any {
    this.apiService.getProdukt().subscribe(
      
    );
  }
}
