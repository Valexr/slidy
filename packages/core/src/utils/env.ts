import type { Child, CssRules, DispathDetail, Slidy, UniqEvent } from '../types';

function mount(node: Slidy, length = 2): Promise<HTMLCollectionOf<Child>> {
    return new Promise((resolve, reject) => {
        let count = 0;
        if (node) {
            const mounting = setInterval(() => {
                count++;
                if (count >= 69) {
                    count = 0;
                    clearInterval(mounting);
                    reject(`Slidy haven't items`);
                } else if (length && node.children.length >= length) {
                    const childs = Array.from(node.children).filter(child => child.isConnected);
                    if (node.children.length === childs.length) {
                        count = 0;
                        clearInterval(mounting);
                        resolve(init(node));
                    }
                }
            }, 16);
        }
    });
}

function getFPS(): Promise<number> {
    return new Promise((resolve) =>
        requestAnimationFrame((t1: number) => requestAnimationFrame((t2: number) => resolve(1000 / (t2 - t1))))
    );
}

function dispatch(node: Slidy, name: string, detail?: DispathDetail): void {
    node.dispatchEvent(new CustomEvent(name, { detail: detail as CustomEventInit<unknown> }));
}

function listen(
    node: Window | Slidy | null,
    events: [string, EventListenerOrEventListenerObject, AddEventListenerOptions?][],
    on = true
): void {
    for (const [event, handle, options] of events) {
        const state = on ? 'addEventListener' : 'removeEventListener';
        if (node) node[state](event, handle, options);
    }
}

function init(node: Slidy, childs?: HTMLCollectionOf<Child>): HTMLCollectionOf<Child> {
    childs = node.children as unknown as HTMLCollectionOf<Child>;
    for (let index = 0; index < childs.length; index++) {
        childs[index].index = index;
    }
    return childs;
}

function style(node: Slidy, styles: CssRules): void {
    for (const property in styles) {
        node.style[property as keyof CssRules] = styles[property as keyof CssRules] as never;
    }
}

function coordinate(e: UniqEvent, vertical?: boolean): number {
    // !e.deltaMode || 0 === track/touchpad

    if (e.type === 'wheel') {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) e.preventDefault();
        return vertical || e.shiftKey
            ? e.deltaY : Math.abs(e.deltaX) > Math.abs(e.deltaY)
                ? e.deltaX : 0
    } else return vertical ? uniQ(e).clientY : uniQ(e).clientX;
}

const uniQ = (e: UniqEvent): UniqEvent | { [key: string]: number } => (e.changedTouches ? e.changedTouches[0] : e);

function throttle(fn: (args: UniqEvent) => void, ms: number, wait?: boolean, tm?: NodeJS.Timeout): (args: UniqEvent) => void {
    return (args) => {
        if (!wait) {
            fn(args);
            wait = true;
            tm && clearTimeout(tm);
            tm = setTimeout(() => wait = false, ms);
        }
    }
}

function delay(fn: (args: any) => void, ms: number, tm?: NodeJS.Timeout): (args: any) => void {
    tm && clearTimeout(tm)
    return (args: any) => {
        tm = setTimeout(() => fn(args), ms);
    };
}

export { coordinate, style, delay, dispatch, init, listen, throttle, mount, getFPS };
