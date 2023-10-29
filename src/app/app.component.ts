import { Component ,ElementRef,OnInit,ViewChild} from '@angular/core';
import {Draggable} from "../ood/wigfrid/components/odo-draggable/draggable";

@Component({
  selector: 'app-root',
   template: `
    <div #divNote >
    </div>
    <br/>
<div id="x1" #divNote2 >
    </div>
    <div #DragAndDrop >
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  @ViewChild('divNote') input: ElementRef;
  draggable : Draggable;
  constructor() {             
	
}



//https://github.com/bradtraversy/vanillawebprojects/blob/master/sortable-list/script.js#L102
//https://angular.io/guide/observables


	public ngOnInit() : void{
	this.draggable = new Draggable(this.input.nativeElement);
	}
  
}
