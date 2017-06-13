import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {
  @Input() terr:string;
  constructor() { }

  ngOnInit() {
  }

}
