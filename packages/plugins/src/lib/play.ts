import { timer as IntervalTimer } from '../utils/env'
import type { PluginArgs } from '../types'

export function play(params?: { duration: number, delay: number }, cb?: () => void) {

    if (!params || !Object.keys(params).length) {
        params = { duration: 1000, delay: 0 }
    }

    const { duration, delay } = params

    return ({ node, options, instance }: PluginArgs) => {
        cb ||= () => instance.to((options.index as number) + 1)

        const timer = IntervalTimer(cb, duration, delay);

        node.addEventListener('mount', mount)
        node.addEventListener('destroy', timer.stop);

        return timer

        function mount() {
            options.loop = true

            document.onvisibilitychange = () => {
                if (document.visibilityState === 'hidden') timer.pause()
                else timer.resume()
            }
            node.onpointerenter = () => {
                timer.pause()
            }
            node.onpointerleave = () => {
                timer.resume()
            }
        }
    }
}