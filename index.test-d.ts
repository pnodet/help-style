import {expectType} from 'tsd';
import * as helpStyle from './index.js';

const element = new HTMLElement();
const list = new NodeList();
expectType<boolean>(helpStyle.hasClass(element, 'hello'));
expectType<boolean>(helpStyle.toggleClass(element, 'hello'));
expectType<void>(helpStyle.addClass(element, 'hello'));
expectType<void>(helpStyle.addClassAll(list, 'hello'));
expectType<void>(helpStyle.removeClass(element, 'hello'));
expectType<void>(helpStyle.removeClassAll(list, 'hello'));
expectType<any>(helpStyle.getStyle(element, 'hello'));
expectType<string>(helpStyle.getCurrentMediaQuery());
expectType<string>(helpStyle.getMetaContentByName('hello'));
