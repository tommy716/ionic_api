import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wp-head',
  templateUrl: './wp-head.component.html',
  styleUrls: ['./wp-head.component.scss'],
})
export class WpHeadComponent implements OnInit {
  @Input() title: String;
  @Input() date: String;

  constructor() { }

  ngOnInit() {}

}
