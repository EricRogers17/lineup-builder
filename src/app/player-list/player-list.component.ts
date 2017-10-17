import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent {
  displayedColumns = ['name', 'FPPG', 'played', 'salary'];
  dataSource = new ExampleDataSource();
}

export interface Element {
  name: string;
  FPPG: number;
  played: number;
  salary: number;
}

const data: Element[] = [
  {name: 'Tom Brady', FPPG: 23, played: 1.0079, salary: 9500},
  {name: 'Kareem Hunt', FPPG: 22, played: 4.0026, salary: 8000},
  {name: 'Antonio Brown', FPPG: 21, played: 6.941, salary: 7000},
  {name: 'LeVeon Bell', FPPG: 23, played: 9.0122, salary: 8000},
  {name: 'Aaron Rodgers', FPPG: 11, played: 10.811, salary: 7000},
  {name: 'Drew Brees', FPPG: 24, played: 12.0107, salary: 6000},
  {name: 'Leonard Fourenette', FPPG: 32, played: 14.0067, salary: 9500},
  {name: 'David Johnson', FPPG: 12, played: 15.9994, salary: 6500},
  {name: 'Devonte Freeman', FPPG: 21, played: 18.9984, salary: 4500},
  {name: 'Matthew Stafford', FPPG: 24, played: 20.1797, salary: 6000},
  {name: 'Micheal Thomas', FPPG: 11, played: 22.9897, salary: 6500},
  {name: 'Melvin Gordon', FPPG: 13, played: 24.305, salary: 8000},
  {name: 'Todd Gurly', FPPG: 21, played: 26.9815, salary: 7500},
  {name: 'Julio Jones', FPPG: 21, played: 28.0855, salary: 7000},
  {name: 'Matt Ryan', FPPG: 12, played: 30.9738, salary:3000},
  {name: 'Mike Evans', FPPG: 11, played: 32.065, salary: 3000},
  {name: 'Jordy Nelson', FPPG: 4, played: 35.453, salary: 2000},
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}
