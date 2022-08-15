import { Core, Image } from '..';

import { mergeProps, For, Show } from 'solid-js';
import { useClassNames } from '../Slidy/Slidy';

import type { SlidyThumbOptions } from './thumbnail.types';
import type { VoidComponent } from 'solid-js';

import './thumbnail.module.css';

interface Options {
    active: number;
    animation: SlidyThumbOptions['animation'];
    axis: SlidyThumbOptions['axis'];
    background: boolean;
    clamp: number;
    duration: SlidyThumbOptions['duration'];
    easing: SlidyThumbOptions['easing'];
    getImgSrc: SlidyThumbOptions['getImgSrc'];
    gravity: number;
    indent: number;
    index: number;
    loop: boolean;
    sensity: number;
    slides: SlidyThumbOptions['slides'];
    snap: SlidyThumbOptions['snap'];

    onIndex?: (event: CustomEvent<{ index: number }>) => void;
    onSelect?: (index: number) => void;
}

const defaultProps: Options = {
    active: 0,
    animation: undefined,
    axis: 'x',
    background: false,
    clamp: 0,
    duration: 250,
    easing: (t) => t,
    getImgSrc: (item) => (item as unknown as { src: string }).src ?? '',
    gravity: 0.75,
    indent: 0,
    index: 0,
    loop: false,
    sensity: 5,
    slides: [],
    snap: undefined,
};

const Thumbnail: VoidComponent<Partial<Options>> = ($props) => {
    const props = mergeProps(defaultProps, $props);

    const classNames = useClassNames();

    return (
        <Core {...props} tag="nav" className={classNames?.thumbnails}>
            <For each={props.slides}>
                {(item, i) => {
                    const active = () => props.active === i();

                    return (
                        <button
                            type="button"
                            aria-current={active() ? 'true' : undefined}
                            aria-label={`${i() + 1} of ${props.slides.length}`}
                            aria-roledescription="slide"
                            class={classNames.thumbnail}
                            classList={{
                                active: active(),
                                bg: props.background,
                            }}
                            role="group"
                            style={{
                                '--_slidy-slide-bg': props.background
                                    ? `url(${props.getImgSrc(item)}`
                                    : '',
                            }}
                            onClick={() => props.onSelect?.(i())}
                        >
                            <Show when={!props.background}>
                                <Image {...item} src={props.getImgSrc(item)} />
                            </Show>
                        </button>
                    );
                }}
            </For>
        </Core>
    );
};

export default Thumbnail;