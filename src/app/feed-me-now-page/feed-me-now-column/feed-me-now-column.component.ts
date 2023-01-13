import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChoiceColumn } from 'src/app/model/choice-columns';
import { AuthService } from 'src/app/Services/auth.service';
import { ColumnsService } from 'src/app/Services/columns.service';
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

  @Output() 
  saveColumn: EventEmitter<ChoiceColumn> = new EventEmitter<ChoiceColumn>();

  randomItem: string = "";

  constructor(public fService: FuncsService, private auth: AuthService, private columnService: ColumnsService) {}

  ngOnInit(): void {

  }

  save() {
    // logged in user save to backend
    if(this.auth.userInfo) {
      this.columnService.updateColumn(this.column).subscribe();
    }
    // anonymous user save to local storage
    else {
      this.saveColumn.emit(this.column);
    }
  }

  addNewInput() {
    this.column.items.push("");
    this.save();
  }

  removeInput(index: number) {
    this.column.items.splice(index, 1);
    this.save();
  }

  // This prevents the app from re-rendering the list of input fields when they are typed in
  trackByFn(index: number, obj: any) {
    return index;
  }

  randomizeColumn = (): void => {
    this.randomItem = this.fService.randomize(this.column.items);
  }
}
