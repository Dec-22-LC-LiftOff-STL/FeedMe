import { Component, Input, OnInit } from '@angular/core';
import { ChoiceColumn } from 'src/app/model/choice-columns';
import { FuncsService } from 'src/app/Services/funcs.service';

@Component({
  selector: 'app-feed-me-now-column',
  templateUrl: './feed-me-now-column.component.html',
  styleUrls: ['./feed-me-now-column.component.css'],
  providers: [FuncsService]
})
export class FeedMeNowColumnComponent implements OnInit {

  @Input()
  column: ChoiceColumn = {name: "", items: []};

  randomItem: string = "";

  constructor(public fService: FuncsService) {}

  ngOnInit(): void {

  }

  save() {
    
  }

  addNewInput() {
    this.column.items.push("");
  }

  removeInput(index: number) {
    this.column.items.splice(index, 1);
  }

  // This prevents the app from re-rendering the list of input fields when they are typed in
  trackByFn(index: number, obj: any) {
    return index;
  }

  randomizeColumn = (): void => {
    this.randomItem = this.fService.randomize(this.column.items);
  }
}
