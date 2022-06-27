export function setEvents() {
    const events = ['mount', 'move', 'index', 'resize', 'keys', 'update', 'destroy'];

    events.forEach((event) => {
        node.addEventListener(event, (e) => {
            switch (event) {
                case 'mount':
                    Object.assign(options, e.detail.options);
                    for (const button of document.querySelectorAll('button')) {
                        if (options[button.id]) {
                            button.classList.add('active');
                        } else if (!isNaN(button.id)) {
                            let duration = 0;
                            button.onpointerdown = (e) => {
                                // e.preventDefault();
                                duration = e.timeStamp;
                                e.target.onpointermove = null;
                                e.target.onpointermove = (e) => {
                                    e.target.onpointerup = null;
                                };
                                e.target.onpointerup = (e) => {
                                    slidy.to(+e.target.id, e.timeStamp - duration);
                                };
                            };
                        }
                    }

                    for (const input of document.querySelectorAll('input')) {
                        switch (input.name) {
                            case 'width':
                                input.value = utils.getVar('--width');
                                break;
                            case 'height':
                                input.value = utils.getVar('--height');
                                break;
                            case 'gap':
                                input.value = utils.getVar('--gap');
                                break;
                            case 'index':
                                input.value = options.index;
                                input.max = options.length - 1;
                                break;

                            default:
                                input.value = options[input.name];
                                break;
                        }
                    }

                    const eases = [
                            'linear',
                            'sine',
                            'quad',
                            'cubic',
                            'quart',
                            'quint',
                            'expo',
                            'circ',
                            'back',
                            'elastic',
                            'bounce',
                        ],
                        animates = [
                            'blur',
                            'deck',
                            'fade',
                            'flip',
                            'matrix',
                            'perspective',
                            'rotate',
                            'scale',
                            'shuffle',
                            'stairs',
                            'translate',
                        ],
                        snaps = ['unset', 'start', 'center', 'end', 'deck'],
                        coords = ['x', 'y', 'both'],
                        flows = ['row', 'row-reverse', 'column', 'column-reverse', 'grid'];

                    axis.innerHTML = coords.map(
                        (s) => `<option value="${s === 'unset' ? '' : s}">${s}</option>`
                    );
                    axis.value = options.axis || 'x';

                    // flow.innerHTML = flows.map(
                    //     (s) => `<option value="${s === 'unset' ? '' : s}">${s}</option>`
                    // );
                    utils.setFlow(flow.value);
                    // flow.value = !options.flow ? 'row' : options.flow;

                    snap.innerHTML = snaps.map(
                        (s) => `<option value="${s === 'unset' ? '' : s}">${s}</option>`
                    );
                    snap.value = options.snap;

                    easing.innerHTML = eases.map((e) => `<option value="${e}">${e}</option>`);
                    easing.value = !options.easing ? 'linear' : options.easing.name;
                    options.easing = easings[easing.value];

                    animation.innerHTML = animates.map((e) => `<option value="${e}">${e}</option>`);
                    animation.value = !options.animation ? 'translate' : options.animation.name;
                    options.animation = animations[animation.value];
                    break;

                case 'resize':
                    // slidyT.to(options.index);
                    // console.log(e.detail);
                    break;

                case 'move':
                    utils.moving(e.detail);
                    break;

                case 'index':
                    utils.indexing(e.detail.index);
                    break;

                case 'update':
                    Object.assign(options, e.detail);
                    // const { key: value } = e.detail;
                    // console.log(e.detail, key, value);
                    for (const option in e.detail) {
                        const target = document.getElementById(option);
                        if (target) {
                            if (target.tagName === 'BUTTON') {
                                target.classList.toggle('active');
                                // if (option === 'reverse') {
                                //     console.log(option);
                                //     const nodes = [...node.children];
                                //     node.replaceChildren(...nodes.reverse());
                                // }
                                // getPhotos(node, utils.randomQ(1, 69), options.length)
                            } else {
                                target.value =
                                    target.id === 'easing' || target.id === 'animation'
                                        ? e.detail[option].name
                                        : e.detail[option];
                            }
                        }
                    }
                    break;
                case 'keys':
                // console.log(e);
                default:
                    // console.log(e);
                    break;
            }
        });
    });
}
