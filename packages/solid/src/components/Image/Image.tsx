import { useSlidy } from '../Slidy/Slidy';
import { splitProps, mergeProps } from 'solid-js';

import '@slidy/assets/styles/image.module.css';

import type { JSX, Component } from 'solid-js';

type ImgNativeAttrs = Omit<JSX.ImgHTMLAttributes<HTMLImageElement>, 'loading' | 'class' | 'id'>;

interface Props extends ImgNativeAttrs {
    lazy?: boolean;
    id?: string | number;
}

const defaultProps: Props = {
    decoding: 'auto',
    lazy: false,
};

const Image: Component<ImgNativeAttrs> = ($props) => {
    const props = mergeProps(defaultProps, $props);
    const [it, rest] = splitProps(props, ['lazy', 'id']);

    const { classNames } = useSlidy();

    return (
        <img
            {...rest}
            class={classNames['img']}
            id={it.id ? String(it.id) : undefined}
            loading={it.lazy ? 'lazy' : undefined}
        />
    );
};

export default Image;