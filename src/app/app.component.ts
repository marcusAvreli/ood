import { Component ,ElementRef,OnInit,ViewChild} from '@angular/core';
import {Draggable} from "../ood/wigfrid/components/odo-draggable/draggable";
import {RichMan} from "./RichMan";
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
//https://github.com/bradtraversy/vanillawebprojects/blob/master/sortable-list/script.js#L102
//https://angular.io/guide/observables
//https://github.com/vishalsingh6350/drag-and-drop-todo-list/blob/main/main.js

export class AppComponent implements OnInit{
  title = 'app';
  @ViewChild('divNote') input: ElementRef;
  draggable : Draggable;
  richMen : RichMan[];
  constructor() {}





	public ngOnInit() : void{
		this.richMen = [];
		var rm = new RichMan(1,"Jeff Bezos","1"); 	
		this.richMen.push(rm);	  
		rm = new RichMan(2,"Bill Gates","1");
		this.richMen.push(rm);
		rm = new RichMan(3,"Warren Buffett","1");
		this.richMen.push(rm);
		
		rm = new RichMan(4, 'Bernard Arnault',"usa");
		this.richMen.push(rm);
		rm = new RichMan(5, 'Carlos Slim Helu',"usa");
		this.richMen.push(rm);
		rm = new RichMan(6,'Amancio Ortega',"usa");
		this.richMen.push(rm);
		rm = new RichMan(7,'Larry Ellison',"usa");
		this.richMen.push(rm);
		rm = new RichMan(8,'Mark Zuckerberg',"usa");
		this.richMen.push(rm);
		rm = new RichMan(9,'Michael Bloomberg',"usa");
		this.richMen.push(rm);
		rm = new RichMan(10,'Larry Page',"usa");
		this.richMen.push(rm);
		
		
		this.draggable = new Draggable(this.input.nativeElement);
		this.draggable.itemsSource=this.richMen;
		this.draggable.displayMemberPath="name";
	}
  
}
