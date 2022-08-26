import {
    Show,
    For,
    mergeProps,
    createEffect,
    createSignal,
    onCleanup,
    batch,
    untrack,
} from 'solid-js';

import { Arrow, Core, Image, Progress, Thumbnail, Navigation, ButtonAutoplay } from '..';
import { SlidyContext, useSlidy } from '../Context/Context';

import { execute, isFunction, format } from '@slidy/assets/scripts/utils';
import { autoplay as autoplayAction } from '@slidy/assets/actions';

import { i18nDefaults } from './i18n';
import { s } from '../../utils';
import { not, increment } from '@slidy/assets/scripts/utils';
import { classNames as classNamesDefaults } from './slidy.styles';

import '@slidy/assets/styles/slidy.module.css';

import type { Slide, SlidyOptions } from './Slidy.types';
import type { Component, JSX, Setter, Accessor } from 'solid-js';

declare module 'solid-js' {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface CustomEvents {
            play: CustomEvent;
            stop: CustomEvent;
            pause: CustomEvent;
        }
    }
}

interface Options {
    animation?: SlidyOptions['animation'];
    /**
     * @default 'x'
     */
    axis?: SlidyOptions['axis'];
    /**
     * @default false
     */
    background?: boolean;
    /**
     * @default true
     */
    counter?: boolean;
    /**
     * @default 0
     */
    clamp?: number;
    classNames?: SlidyOptions['classNames'];
    i18n?: SlidyOptions['i18n'];
    /**
     * @default 450
     */
    duration?: number;
    easing?: SlidyOptions['easing'];
    getImgSrc?: SlidyOptions['getImgSrc'];
    getThumbSrc?: SlidyOptions['getThumbSrc'];
    /**
     * @default false
     */
    navigation?: boolean;
    /**
     * @default 1.2
     */
    gravity?: number;
    id?: string;
    /**
     * @default 2
     */
    indent?: SlidyOptions['indent'];
    /**
     * @default false
     */
    loop?: boolean;
    /**
     * @default 0
     */
    packed?: number;
    /**
     * @default false
     */
    progress?: boolean;
    /**
     * @default 5
     */
    sensity?: number;
    /**
     * @default []
     */
    slides?: SlidyOptions['slides'];
    /**
     * @default undefined
     */
    snap?: SlidyOptions['snap'];
    /**
     * @default 1500
     */
    interval?: number;
    autoplay?: Accessor<boolean>;
    setAutoplay?: Setter<boolean>;
    autoplayControl?: boolean;

    index?: Accessor<number>;
    position?: Accessor<number>;

    /**
     * Control the index from outside
     */
    setIndex?: Setter<number>;
    /**
     * Control the position from outside
     */
    setPosition?: Setter<number>;

    overlay?: () => JSX.Element;
    thumbnail?: (() => JSX.Element) | boolean;
    arrows?: (() => JSX.Element) | boolean;
    arrow?: () => JSX.Element;
    children?: (item: Slide) => JSX.Element;

    onResize?: (event: CustomEvent<{ ROE: ResizeObserverEntry[] }>) => void;
    onMount?: (event: CustomEvent<Options>) => void;
    onMove?: (event: CustomEvent<{ index: number; position: number }>) => void;
    onIndex?: (event: CustomEvent<{ index: number }>) => void;
    onKeys?: (event: CustomEvent<string>) => void;
    onUpdate?: (event: CustomEvent<Options>) => void;
    onDestroy?: (event: CustomEvent<HTMLElement>) => void;
}

const defaultProps: Options = {
    arrows: true,
    interval: 1500,
    axis: 'x',
    background: false,
    counter: true,
    clamp: 0,
    duration: 450,
    easing: (t) => t,
    getImgSrc: (item) => (item as unknown as { src: string }).src ?? '',
    getThumbSrc: (item) => (item as unknown as { src: string }).src ?? '',
    navigation: false,
    gravity: 1.2,
    indent: 2,
    loop: false,
    packed: 0,
    progress: false,
    sensity: 5,
    slides: [],
    thumbnail: false,
    index: () => 0,
    position: () => 0,
    autoplay: () => false,
    autoplayControl: false,
    classNames: classNamesDefaults,
    i18n: i18nDefaults,
};

const Slidy: Component<Partial<Options>> = ($props) => {
    const props = mergeProps(defaultProps as unknown as Required<Options>, $props);

    const [index, setIndex] = isFunction(props.setIndex)
        ? [props.index, props.setIndex]
        : createSignal(untrack(props.index));

    const [position, setPosition] = isFunction(props.setPosition)
        ? [props.position, props.setPosition]
        : createSignal(untrack(props.position));

    const [autoplay, setAutoplay] = isFunction(props.setAutoplay)
        ? [props.autoplay, props.setAutoplay]
        : createSignal(untrack(props.autoplay));

    /**
     * Indicate the paused autoplay.
     */
    const [autoplayState, setAutoplayState] = createSignal<'play' | 'pause' | 'stop'>('stop');

    const length = () => props.slides.length;
    const vertical = () => props.axis === 'y';

    const handleClick = (event: Event): void => {
        const element = event.target as HTMLElement;

        if (element.nodeName !== 'BUTTON') return;

        if (element.dataset.index) {
            setIndex(parseInt(element.dataset.index));
            return;
        }

        if (element.dataset.step) {
            setIndex(parseInt(element.dataset.step) + untrack(index));
            return;
        }
    };

    const onIndex: Options['onIndex'] = (e) => {
        Promise.resolve(e.detail.index).then(setIndex);
    };

    const onMove: Options['onMove'] = (e) => {
        setPosition(e.detail.position);
    };

    const handleAutoplay = () => {
        batch(() => {
            setAutoplayState('play');

            if (props.loop) {
                setIndex(increment);
            } else if (untrack(index) + 1 < length()) {
                setIndex(increment);
            } else {
                setAutoplay(false);
            }
        });
    };

    const handleAutoplayPause = () => {
        setAutoplayState('pause');
    };

    const handleAutoplayStop = () => {
        batch(() => {
            setAutoplayState('stop');
            setAutoplay(false);
        });
    };

    const handleAutoplayControl = () => {
        const state = untrack(autoplayState);

        batch(() => {
            setAutoplayState(state === 'stop' ? 'play' : 'stop');
            setAutoplay(not);
        });
    };

    const useAutoplay = (el: HTMLElement) => {
        const { update, destroy } = autoplayAction(el, {
            status: untrack(autoplay),
            interval: props.interval,
        });

        onCleanup(destroy);

        createEffect(() => update({ status: autoplay() }));
    };

    return (
        <SlidyContext.Provider value={{ classNames: props.classNames, i18n: props.i18n }}>
            <section
                aria-roledescription={props.i18n.carousel}
                class={props.classNames?.root}
                classList={{ vertical: vertical(), packed: props.packed > 1 }}
                style={s({
                    '--slidy-autoplay-interval': props.interval + 'ms',
                    '--slidy-pack-size': props.packed,
                })}
                id={props.id}
                onClick={handleClick}
                on:play={handleAutoplay}
                on:pause={handleAutoplayPause}
                on:stop={handleAutoplayStop}
                ref={useAutoplay}
            >
                <Show when={props.counter || props.overlay}>
                    <div class={props.classNames?.overlay}>
                        <Show when={props.counter}>
                            <output class={props.classNames?.counter}>
                                {index() + 1} / {length()}
                            </output>
                        </Show>
                        <Show when={props.autoplayControl}>
                            <ButtonAutoplay
                                state={autoplayState()}
                                disabled={index() + 1 >= length() && !props.loop}
                                onClick={handleAutoplayControl}
                            />
                        </Show>
                        {isFunction(props.overlay) && props.overlay()}
                    </div>
                </Show>
                <Core
                    animation={props.animation}
                    axis={props.axis}
                    clamp={props.clamp}
                    className={props.classNames?.slides}
                    duration={props.duration}
                    easing={props.easing}
                    gravity={props.gravity}
                    indent={props.indent}
                    index={index()}
                    loop={props.loop}
                    sensity={props.sensity}
                    snap={props.snap}
                    position={position()}
                    onResize={execute(props.onResize)}
                    onMount={execute(props.onMount)}
                    onMove={execute(onMove, props.onMove)}
                    onIndex={execute(onIndex, props.onIndex)}
                    onKeys={execute(props.onKeys)}
                    onUpdate={execute(props.onUpdate)}
                    onDestroy={execute(props.onDestroy)}
                >
                    <For each={props.slides}>
                        {(item, i) => {
                            const active = () => index() === i();

                            if (props.children) {
                                return props.children(item);
                            }

                            return (
                                <li
                                    aria-current={active() ? 'true' : undefined}
                                    aria-label={format(props.i18n.counter, index() + 1, length())}
                                    aria-roledescription={props.i18n.slide}
                                    class={props.classNames?.slide}
                                    classList={{
                                        active: active(),
                                        bg: props.background,
                                    }}
                                    role="group"
                                    style={s({
                                        '--_slidy-slide-bg': props.background
                                            ? `url("${props.getImgSrc(item)}")`
                                            : undefined,
                                    })}
                                >
                                    <Show when={!props.background}>
                                        <Image {...item} src={props.getImgSrc(item)} />
                                    </Show>
                                </li>
                            );
                        }}
                    </For>
                </Core>
                <Show
                    when={props.arrows === true}
                    fallback={isFunction(props.arrows) && props.arrows()}
                >
                    <For each={[-props.clamp, props.clamp]}>
                        {(type) => (
                            <Arrow
                                clamp={type}
                                index={index()}
                                items={length()}
                                loop={props.loop}
                                vertical={vertical()}
                            >
                                <Show
                                    when={!props.arrow}
                                    fallback={isFunction(props.arrow) && props.arrow()}
                                >
                                    <svg class="slidy-arrow-icon" viewBox="0 0 32 32">
                                        <path d="M19.56,24a.89.89,0,0,1-.63-.26L11.8,16.65a.92.92,0,0,1,0-1.27h0l7.13-7.16A.9.9,0,0,1,20.2,9.48L13.69,16l6.51,6.5a.91.91,0,0,1,0,1.26h0A.9.9,0,0,1,19.56,24Z" />
                                    </svg>
                                </Show>
                            </Arrow>
                        )}
                    </For>
                </Show>

                <Show when={props.progress}>
                    <Progress value={index() + 1} max={length()} vertical={vertical()} />
                </Show>

                <Show
                    when={props.thumbnail === true}
                    fallback={isFunction(props.thumbnail) && props.thumbnail()}
                >
                    <Thumbnail
                        active={index()}
                        background={props.background}
                        duration={props.duration}
                        easing={props.easing}
                        getImgSrc={props.getThumbSrc}
                        indent={props.indent}
                        index={index()}
                        loop={props.loop}
                        sensity={props.sensity}
                        slides={props.slides}
                        onSelect={setIndex}
                    />
                </Show>
                <Show when={props.navigation}>
                    <Navigation
                        current={index() + 1}
                        start={1}
                        end={length()}
                        vertical={vertical()}
                    />
                </Show>
            </section>
        </SlidyContext.Provider>
    );
};

export { useSlidy };
export default Slidy;
