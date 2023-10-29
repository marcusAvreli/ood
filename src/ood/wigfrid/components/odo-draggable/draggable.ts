import {Control} from "../Control";
import {ListItem} from '../ListItem/ListItem';
import {    
    getElement
	,createElement
} from "../../core/index";

export class Draggable extends Control {
  static controlTemplate = '<ul wj-part="list"  class="draggable-list" id="draggable-list" />';//<div wj-part="draggable"  class="wj-content" />';//+ '<li  class="draggableq12 grabbing" wj-part="draggable">asdsad update2</li>';
  
  //'<H1 class="draggable grabbing" wj-part="draggable">asdsad update2</H1>';
  _tbx: HTMLElement;
 _draggable : HTMLElement;
 
 _draggable2 : HTMLElement;
  options :{};
 listItem : ListItem;
	constructor(element, options?) {
		super(element,options);
		const tpl = this.getTemplate();
		this._draggable2 = this.applyTemplate(
			'wj-content', tpl, {
				_tbx     : 'list'
				//,_draggable: 'draggable'
			}, null
		);
		var example = {_isDraggable : true};
		//console.log("draggable_get_control",""+Draggable.getControl(this.hostElement));
		//const tpl2 = createElement('<li class=\"p1 mb1 navy bg-yellow\" style=\"position: relative; z-index: 10\" draggable=\"true\" role=\"option\" aria-grabbed=\"false\">Item </li>');
		//this.listItem = new ListItem(this.hostElement,example);
		 this._createDropDown();
		 //this.addData();
		//this.hostElement.appendChild(tpl2);
	//	this.options = Object.assign({}, settings.Defaults, options);
	/*	
	this.addEventListener(this.hostElement, 'dragstart', this.onDragStart.bind(this));
	
	this.addEventListener(this.hostElement, 'dragend',this.onDragEnd.bind(this));
	this.addEventListener(this.hostElement, 'dragover',this.onDragOver.bind(this));
	this.addEventListener(this.hostElement,  'dragenter',this.onDragEnter.bind(this));
	this.addEventListener(this.hostElement,   'drop',this.onDrop.bind(this));
	this.addEventListener(this.hostElement,  'mouseenter',this.onMouseEnter.bind(this));
	this.addEventListener(this.hostElement,  'mouseleave',this.onMouseLeave.bind(this));
*/
}

// create the drop-down element
	_createDropDown() {
		// create the drop-down element
		this.listItem = new ListItem(this._tbx);
		//this.listItem.insertBefore(this._tbx,this._draggable);
	}

 getEventTarget(event) {
      return (event.composedPath && event.composedPath()[0]) || event.target;
  };

makePlaceholder(sortableElement: HTMLElement, placeholder?: HTMLElement, placeholderClass: string = 'sortable-placeholder'){
  if (!(sortableElement instanceof HTMLElement)) {
    throw new Error('You must provide a valid element as a sortable.')
  }
  // if placeholder is not an element
  if (!(placeholder instanceof HTMLElement) && placeholder !== undefined) {
    throw new Error('You must provide a valid element as a placeholder or set ot to undefined.')
  }
  // if no placeholder element is given
  if (placeholder === undefined) {
    if (['UL', 'OL'].includes(sortableElement.tagName)) {
      placeholder = document.createElement('li')
    } else if (['TABLE', 'TBODY'].includes(sortableElement.tagName)) {
      placeholder = document.createElement('tr')
      // set colspan to always all rows, otherwise the item can only be dropped in first column
      placeholder.innerHTML = '<td colspan="100"></td>'
    } else {
      placeholder = document.createElement('div')
    }
  }
  // add classes to placeholder
  if (typeof placeholderClass === 'string') {
    placeholder.classList.add(...placeholderClass.split(' '))
  }

  return placeholder

}

 
/**
 * Remove data from element
 * @param {HTMLElement} element
 */
 removeData (element: HTMLElement) {
 
}

	
	
	
}