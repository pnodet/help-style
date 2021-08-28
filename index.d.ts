/**
 * Checks whether an element has a particular class
 * @param {HTMLElement} element
 * @param {String} className
 * @return {Boolean}
 */
export function hasClass(element: HTMLElement, className: string): boolean;

/**
 * Toggle a class for an element
 * @param {HTMLElement} element
 * @param {String} className
 */
export function toggleClass(element: HTMLElement, className: string): boolean;

/**
 * Add a class for an element
 * @param {HTMLElement} element
 * @param {String} className
 */
export function addClass(element: HTMLElement, className: string): void;

/**
 * Add a class to all elements of a NodeList
 * @param {NodeList} NodeList
 * @param {String} className
 */
export function addClassAll(NodeList: NodeList, className: string): void;

/**
 * Remove a class for an element
 * @param {HTMLElement} element
 * @param {String} className
 */
export function removeClass(element: HTMLElement, className: string): void;

/**
 * Remove a class to all elements of a NodeList
 * @param {NodeList} NodeList
 * @param {String} className
 */
export function removeClassAll(NodeList: NodeList, className: string): void;

/**
 * Get the value of a CSS rule for an element
 * @param {HTMLElement} element
 * @param {String} ruleName
 */
export function getStyle(element: HTMLElement, ruleName: string): any;

/**
 * Returns the current media query in use by looking at the font-family of the head of the document
 * and text in pseudo content on the body. Useful for running JS functions at certain breakpoints
 * without holding breakpoint size information in CSS and JS.
 * @link https://code.area17.com/a17/a17-helpers/wikis/getCurrentMediaQuery
 */
export function getCurrentMediaQuery(): string;

/**
 * Returns a metatag content by name
 * @link https://code.area17.com/a17/a17-helpers/wikis/getMetaContentByName
 */
export function getMetaContentByName(name: any): string;
