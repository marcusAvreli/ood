import {Control} from "../Control";
import {    
    getElement
	,createElement
	,addAttribute
} from "../../core/index";

export class ListItem extends Control {
static listItems = [];
 dragStartIndex : number;
static richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page'
];
	static controlTemplate = '<li  class="draggable grabbing" wj-part="draggable">asdsad update2</li>';
	
	_isDraggable : boolean;
	_draggable : HTMLElement;
	_draggable2 : HTMLElement;
	constructor(element, options?) {
		super(element,options);
		//const tpl = this.getTemplate();
		const tpl = this.getTemplate();
		// instantiate and apply template
		  [...ListItem.richestPeople]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement('li');
	   listItem.setAttribute('data-index', ''+index);
	   listItem.innerText=person;
	      ListItem.listItems.push(listItem);

	  });
		this._draggable2 = this.applyTemplate('wj-control wj-listbox wj-content', tpl, {
				
				_draggable: 'draggable'
			},null);
		//	this._draggable2 = this.applyTemplate('wj-control wj-listbox wj-content', null,null);
			this.addData();
		//	this._draggable.innerHtml = tpl;
		 this._listen2(this.hostElement);
			//this.addEventListener(this._draggable2, 'dragstart', this.onDragStart.bind(this));
			//this.insertAfter(element,this._draggable);
		//this.initialize(options);
		addAttribute(this._draggable2,"draggable","true");
	}
addData (): void {
	this._draggable=createElement(ListItem.controlTemplate);
	this._draggable.innerText="a";
	addAttribute(this._draggable,"draggable","true");
	this._listen(this._draggable);
console.log(""+ListItem.listItems);
	this.insertBefore(this._draggable2,this._draggable);
for (let i = 0; i < ListItem.listItems.length; i++) {
	this.insertBefore(this._draggable2,ListItem.listItems[i]);
	this._listen(ListItem.listItems[i]);
	addAttribute(ListItem.listItems[i],"draggable","true");
}

	//this.addAttribute(this._draggable,"draggable","true");
	this.insertBefore(this._draggable2,this._draggable);
}
private _listen2(element : HTMLElement){
	//this.addEventListener(element,	'dragend',this.onDragEnd.bind(this));
	//this.addEventListener(element,	'dragover',this.onDragOver.bind(this));
	//this.addEventListener(element,	'dragenter',this.onDragEnter.bind(this));
	this.addEventListener(element,	'drop',this.onDrop.bind(this));
	//this.addEventListener(element,	'mouseenter',this.onMouseEnter.bind(this));
	//this.addEventListener(element,	'mouseleave',this.onMouseLeave.bind(this));
}
private _listen(element : HTMLElement){
	this.addEventListener(element,	'dragstart', this.onDragStart.bind(this));
	//this.addEventListener(element,	'dragend',this.onDragEnd.bind(this));
	this.addEventListener(element,	'dragover',this.onDragOver.bind(this));
	//this.addEventListener(element,	'dragenter',this.onDragEnter.bind(this));
	this.addEventListener(element,	'drop',this.onDrop.bind(this));
	//this.addEventListener(element,	'mouseenter',this.onMouseEnter.bind(this));
	//this.addEventListener(element,	'mouseleave',this.onMouseLeave.bind(this));
}

/**
   * find sortable from element. travels up parent element until found or null.
   * @param {HTMLElement} element a single sortable
   * @param {Event} event - the current event. We need to pass it to be able to
   * find Sortable whith shadowRoot (document fragment has no parent)
   */
   findSortable(element, event) {
      if (event.composedPath) {
	  console.log("list_item","find_sortable_1");
         // return event.composedPath().find(function (el) {console.log("list_item",""+JSON.stringify(el)); return el; });
		 return element;
      }
      while (element.isSortable !== true) {
          element = element.parentElement;
      }
	  console.log("list_item","find_sortable_2");
      return element;
  }
  /**
   * Dragging event is on the sortable element. finds the top child that
   * contains the element.
   * @param {HTMLElement} sortableElement a single sortable
   * @param {HTMLElement} element is that being dragged
   */
 
public onDragStart(event){
	console.log("draggable","drag_start");
	var target = this.getEventTarget(event);
	event.stopImmediatePropagation();
	addAttribute(target, 'aria-grabbed', 'true');
	var sortableContainer = this.findSortable(target, event);
	this.dragStartIndex = target.getAttribute("data-index");
}
	
	swapItems(fromIndex, toIndex) {		
		const itemOne = ListItem.listItems[fromIndex];
		const itemTwo = ListItem.listItems[toIndex];
		this.insertAfter(ListItem.listItems[fromIndex-1],itemTwo);
		this.insertAfter(ListItem.listItems[toIndex-1],itemOne);
	}

	public onDragEnd(event){
		console.log("draggable","drag_end");
		var target = this.getEventTarget(event);	  
	}
	
	public onDragOver(event){
	console.log("draggable","drag_over");
	 event.preventDefault();
    
	}
	public onDragEnter(event){
	//	console.log("draggable","drag_enter");
	
	}
	public onDrop(event){
	console.log("list_item","drop");
	var target = this.getEventTarget(event);
	
	    const dragEndIndex = target.getAttribute('data-index');
		console.log("list_item:","drag_end_index:"+dragEndIndex+" "+"drag_start_index:"+this.dragStartIndex);
  this.swapItems(this.dragStartIndex, dragEndIndex);
	}
	public onMouseEnter(event){
	//console.log("draggable","mouse_enter");
	
	}
	public onMouseLeave(event){
	//console.log("draggable","mouse_leave");
	
	}
	getEventTarget(event) {
		  return (event.composedPath && event.composedPath()[0]) || event.target;
	};
	
	
insertNode(referenceNode: HTMLElement, newElement: HTMLElement, position: String){
  if (!(referenceNode instanceof HTMLElement) || !(referenceNode.parentElement instanceof HTMLElement)) {
    throw new Error('target and element must be a node')
  }
  referenceNode.parentElement.insertBefore(
    newElement,
    (position === 'before' ? referenceNode : referenceNode.nextElementSibling)
  )
}
/**
 * Insert before target
 * @param {HTMLElement} target
 * @param {HTMLElement} element
 */
insertBefore(target: HTMLElement, element: HTMLElement){
	this.insertNode(target, element, 'before');
 }
/**
 * Insert after target
 * @param {HTMLElement} target
 * @param {HTMLElement} element
 */
insertAfter(target: HTMLElement, element: HTMLElement){
	this.insertNode(target, element, 'after')
}	
	set isDraggable(value:boolean){
		this._isDraggable=value;
	}
	get isDraggable():boolean{
		return this._isDraggable;
	}
}