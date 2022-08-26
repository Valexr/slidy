import { useSlidy } from '../Slidy/Slidy';
import { mergeProps } from 'solid-js';

import '@slidy/assets/styles/progress.module.css';

import type { VoidComponent, JSX } from 'solid-js';

interface Props {
    value: number;
    max: number;
    vertical: boolean;
}

const defaultProps: Props = {
    value: 0,
    max: 1,
    vertical: false,
};

const Progress: VoidComponent<Partial<Props>> = ($props) => {
    const props = mergeProps(defaultProps, $props);

    const { classNames } = useSlidy();

    return (
        <div class={classNames.progress} classList={{ vertical: props.vertical }}>
            <span
                style={
                    {
                        '--_slidy-progress-size': `${Math.ceil(100 / props.max)}%`,
                        '--_slidy-progress': `${Math.ceil((props.value * 100) / props.max)}%`,
                    } as JSX.CSSProperties
                }
            />
        </div>
    );
};

export default Progress;