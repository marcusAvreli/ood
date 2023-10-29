export class Pointer  {
 private element: HTMLElement;                    
  /**
   * An abstraction layer for adding pointer events and calculating drag values.
   * @param {HTMLElement} element Element to watch.
   * @param {PointerOptions} options Options object.
   * @throws {TypeError} Throws when the element parameter isn't an element.
   */
  constructor(element, options = {}) {
  
    this.element = element;

     }
	 }