import {Component, Input, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {juegoInterface} from "../../interface/JuegoInterface";

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  @Input() juego:juegoInterface;
  constructor(private _http: Http) {
  }

  ngOnInit() {
  }



}
