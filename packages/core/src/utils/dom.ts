import type { Parent, Child, Slidy } from '../types';
import { maxMin } from './helpers';

function indexing(node: Slidy, index: number, loop?: boolean) {
    if (loop) {
        if (index < 0) {
            return node.childNodes.length - 1;
        } else if (index > node.childNodes.length - 1) {
            return 0;
        } else return index;
    } else return maxMin(node.childNodes.length - 1, 0, index);
}

const cix = (node: Slidy) => Math.floor(node.childNodes.length / 2);
const parent = (node: Slidy): Parent => node.parentNode as Parent;
const nodes = (node: Slidy): Child[] => Array.from(node.childNodes as NodeListOf<Child>);
const child = (node: Slidy, index: number) =>
    nodes(node).find((child: Child) => child.index === index) as Child;
const coord = (vertical: boolean) => (vertical ? 'offsetTop' : 'offsetLeft');
const size = (vertical: boolean) => (vertical ? 'offsetHeight' : 'offsetWidth');
const part = (snap: string | undefined) => (snap === 'center' ? 0.5 : snap === 'end' ? 1 : 0.5);
const diff = (snap: string | undefined, pos: number) => (snap !== 'start' ? pos : 0);
const offset = (node: Slidy, child: Child, vertical: boolean) =>
    parent(node)[size(vertical)] - child[size(vertical)];
const position = (node: Slidy, child: Child, vertical: boolean, snap: string | undefined) =>
    child[coord(vertical)] - diff(snap, offset(node, child, vertical) * part(snap));
const distance = (node: Slidy, index: number, vertical: boolean) =>
    Math.abs(nodes(node)[index][coord(vertical)]);

function closest(node: Slidy, target: number, vertical: boolean, snap: string | undefined): Child {
    return nodes(node).reduce((prev: Child, curr: Child) => {
        const dist = (child: Child) => Math.abs(position(node, child, vertical, snap) - target);
        return dist(curr) < dist(prev) ? curr : prev;
    });
}

function indents(node: Slidy, index: number, loop?: boolean, gap?: number): number {
    const edge = index === 0 ? -1 : index === nodes(node).length - 1 ? 1 : 0
    return loop ? 0 : (gap as number * edge)
}

const find = (node: Slidy, vertical: boolean) => ({
    index: (target: number, snap: string | undefined): number => closest(node, target, vertical, snap).index,
    position: (index: number, snap?: string, loop?: boolean, gap?: number) => position(node, child(node, index), vertical, snap) + indents(node, index, loop, gap),
    target: (target: number, snap?: string) => position(node, closest(node, target, vertical, snap), vertical, snap),
    size: (index: number) => nodes(node)[index][size(vertical)],
    gap: () => {
        const last = nodes(node).length - 1;
        const prev = distance(node, last - 1, vertical) + nodes(node)[last - 1][size(vertical)];
        return distance(node, last, vertical) - prev;
    },
    parent: () => parent(node)[size(vertical)],
});

function shuffle(node: Slidy, direction: number): void | null {
    return direction > 0 ? node.append(node.childNodes[0])
        : direction < 0 ? node.prepend(node.childNodes[node.childNodes.length - 1])
            : null;
}

function rotate(array: Array<Node | string>, key: number) {
    return array.slice(key).concat(array.slice(0, key));
}

function replace(node: Slidy, index: number, loop?: boolean) {
    const elements = loop
        ? rotate(nodes(node), index - cix(node))
        : nodes(node).sort((a, b) => a.index - b.index);
    node.replaceChildren(...elements);
}

// DRAFT's --------------------------------------
// function cumulativeOffset(element) {
// 	let top = 0,
// 		left = 0;
// 	if (element)
// 		do {
// 			top += element.offsetTop || 0;
// 			left += element.offsetLeft || 0;
// 			element = element.offsetParent;
// 		} while (element);

// 	return {
// 		top: top,
// 		left: left,
// 	};
// }

// function traverse(callback, elem) {
//     if (elem && elem.children && elem.children.length) {
//         for (const childNode of elem.children) {
//             callback(childNode)
//             traverse(callback, childNode)
//         }
//     }
// }

export { find, shuffle, replace, indexing };
