export const hasClass = (element, className) =>
	element.classList.contains(className);

export const toggleClass = (element, className) =>
	element.classList.toggle(className);

export const addClass = (element, className) =>
	element.classList.add(className);

export const addClassAll = (NodeList, className) => {
	for (const element of NodeList) {
		element.classList.add(className);
	}
};

export const removeClass = (element, className) =>
	element.classList.remove(className);

export const removeClassAll = (NodeList, className) => {
	for (const element of NodeList) {
		element.classList.remove(className);
	}
};

export const getStyle = (element, ruleName) =>
	getComputedStyle(element)[ruleName];

export const getCurrentMediaQuery = () =>
	getComputedStyle(document.documentElement)
		.getPropertyValue('--breakpoint')
		.trim();

export const getMetaContentByName = (name) =>
	document.querySelector(`meta[name='${name}']`).getAttribute('content');
