/**
 * Checks whether an element has a class.
 *
 * @param e Element to check.
 * @param className Class to check for.
 */
export function hasAttribute(e: HTMLElement, attributeName: string): boolean {
    // note: using e.getAttribute('class') instead of e.classNames
    // so this works with SVG as well as regular HTML elements.
    if (e && e.getAttribute) {
        const rx = new RegExp('\\b' + attributeName + '\\b');
        return e && rx.test(e.getAttribute(attributeName));
    }
    return false;
}
