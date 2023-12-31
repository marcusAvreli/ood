import {Control} from "../Control";
import {    
    getElement
	,createElement
	,addAttribute
} from "../../core/index";
import {asString} from "../../core";
//import {hasItems} from "../../core";
//import {asCollectionView} from "../../core";
import {CollectionView} from "../../collections/CollectionView";
import {Subscription} from 'rxjs/Subscription';
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
	
	_items: any; // any[] or ICollectionView
	_isDraggable : boolean;
	_draggable : HTMLElement;
	_draggable2 : HTMLElement;
	_cv: CollectionView;
	_pathDisplay: string;
	private subscription1 = new Subscription();
private subscription2 = new Subscription();
	constructor(element, options?) {
		super(element,options);

		this.applyTemplate('wj-control wj-listbox wj-content', null, null);

		//this.addData();	
	
	
	}
_populateList (): void {
	/*this._draggable=createElement(ListItem.controlTemplate);
	this._draggable.innerText="a";
	addAttribute(this._draggable,"draggable","true");
	//this._listen(this._draggable);
	console.log(""+ListItem.listItems);
	this.insertBefore(this._draggable2,this._draggable);
	*/
	const host = this.hostElement;
	if (host) {
	
		  [...ListItem.richestPeople]
		.map(a => ({ value: a, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(a => a.value)
		.forEach((person, index) => {
			const listItem = document.createElement('li'); 
			 listItem.setAttribute('data-index',''+ index);
			ListItem.listItems.push(listItem);

		});	
		if (this._cv) {
		
			for (let i = 0; i < this._cv.items.length; i++) {
			console.log("list_item:",""+this.getDisplayValue(i));
			const childSpan = document.createElement('span');
			var numberString = i+1;
			childSpan.innerText=numberString.toString();
			addAttribute(childSpan,"class","number");
			const draggableDiv = document.createElement('div');   
			addAttribute(draggableDiv,"draggable","true");
			addAttribute(draggableDiv,"class","draggable");
			draggableDiv.addEventListener('dragstart', e => this.onDragStart(e));
		  
			const childParagraph = document.createElement('p');
			addAttribute(childParagraph,"class","person-name");
			draggableDiv.appendChild(childParagraph);
			childParagraph.innerText=this.getDisplayValue(i);
			ListItem.listItems[i].appendChild(childSpan);
			ListItem.listItems[i].appendChild(draggableDiv);
			
			ListItem.listItems[i].addEventListener('dragover', e => this.onDragOver(e,ListItem.listItems[i]));
			
			ListItem.listItems[i].addEventListener('drop', event => {
				
				this.onDrop(event);
			
			});
			ListItem.listItems[i].addEventListener('dragenter', e => this.onDragEnter(ListItem.listItems[i]));
				
			  
			host.appendChild(ListItem.listItems[i]);
			}
		
		}
		
	}
	
}


get itemsSource(): any {
		return this._items;
	}
	set itemsSource(value: any) {
	if (this._items != value) {
	// unbind current collection view
			if (this._cv) {
				this.subscription1.unsubscribe();
				this.subscription2.unsubscribe();
				//this._cv.collectionChanged.removeHandler(this._cvCollectionChanged, this);
				this._cv = null;
			}

			// save new data source and collection view
			this._items = value;
			this._cv = new CollectionView(value)
// bind new collection view
			if (this._cv != null) {
				//this.subscription1 = this._cv.currentChanged.subscribe(data => this._cvCurrentChanged(this,data));
				//this.subscription2 = this._cv.collectionChanged.subscribe(data => this._cvCollectionChanged(this,data));
			}

			// update the list
			//this._populateList();
	}
	}
/**
	 * Gets the string displayed for the item at a given index.
	 *
	 * The string may be plain text or HTML, depending on the setting
	 * of the @see:isContentHtml property.
	 *
	 * @param index The index of the item.
	 */
	getDisplayValue(index: number): string {

		// get the text or html
		let item = null;
		
			item = this._cv.items[index];
			if (this.displayMemberPath) {
				item = item[this.displayMemberPath];
			}
		
		let text = item != null ? item.toString() : '';

		

		// return the result
		return text;
	}
	
	get displayMemberPath(): string {
		return this._pathDisplay;
	}
	set displayMemberPath(value: string) {
		if (value != this._pathDisplay) {
			this._pathDisplay = asString(value);
			this._populateList();
		}
	}
/**
   * find sortable from element. travels up parent element until found or null.
   * @param {HTMLElement} element a single sortable
   * @param {Event} event - the current event. We need to pass it to be able to
   * find Sortable whith shadowRoot (document fragment has no parent)
   */
   findSortable(element, event) {
      if (event.composedPath) {	  
		 return element;
      }
      while (element.isSortable !== true) {
          element = element.parentElement;
      }	  
      return element;
  }
  /**
   * Dragging event is on the sortable element. finds the top child that
   * contains the element.
   * @param {HTMLElement} sortableElement a single sortable
   * @param {HTMLElement} element is that being dragged
   */
 
	public onDragStart(event :Event){
		const element = event.target;
		if(element instanceof HTMLElement){
			const myElement = element.parentElement			
			this.dragStartIndex = +myElement.getAttribute('data-index');
		//	console.log("drag element","startElement:"+JSON.stringify(myElement));
		//	console.log("drag element","startIndex:"+this.dragStartIndex);
		}
	
	}
	
	swapItems(fromIndex, toIndex) {	
		const itemOne = ListItem.listItems[fromIndex].querySelector('.draggable');
		const itemTwo = ListItem.listItems[toIndex].querySelector('.draggable');		
		ListItem.listItems[fromIndex].appendChild(itemTwo);
		ListItem.listItems[toIndex].appendChild(itemOne);
	}

	public onDragEnd(event){		
		var target = this.getEventTarget(event);	  
	}
	
	public onDragOver(event :Event ,element : HTMLElement){	
		event.preventDefault();    
	}
	public onDragEnter(event){	
	
	}
	public onDrop(event :Event ){
		event.preventDefault();
		const element = event.target;
		if(element instanceof HTMLElement){
			const myElement = element.parentNode.parentElement
			const dragEndIndex = myElement.getAttribute('data-index');
			//console.log("drag element","endElement:"+JSON.stringify(myElement));
			//console.log("drag element","endIndex:"+dragEndIndex);
			this.swapItems(this.dragStartIndex, dragEndIndex);
			this.dragStartIndex = 0;
		}	
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