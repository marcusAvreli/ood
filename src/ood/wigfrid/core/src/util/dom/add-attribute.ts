import {hasAttribute} from "./has-attribute";
/**
 * Adds a class to an element.
 *
 * @param e Element that will have the class added.
 * @param className Class to add to the element.
 */
export function addAttribute(e: HTMLElement, attributeName: string,value:string) {
    // note: using e.getAttribute('class') instead of e.classNames
    // so this works with SVG as well as regular HTML elements.
    if (e && e.setAttribute && !hasAttribute(e, attributeName)) {
        const cn = e.getAttribute(attributeName);
        e.setAttribute(attributeName, value);
    }
}
