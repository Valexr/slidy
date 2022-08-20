import { build } from 'esbuild';
import { derver } from 'derver';
import { eslintPlugin } from 'esbuild-plugin-eslinter';
import vuePlugin from 'esbuild-plugin-vue-next';

const DEV = process.argv.includes('--dev');

const esbuildBase = {
    bundle: true,
    minify: !DEV,
    incremental: DEV,
    legalComments: 'none',
    plugins: [vuePlugin(), eslintPlugin()],
    entryPoints: ['src/index.ts'],
    sourcemap: DEV ? 'inline' : false,
};
const derverConfig = {
    port: 3335,
    host: '0.0.0.0',
    dir: 'public',
    watch: ['public', 'src', 'node_modules/@slidy/core'],
};
const builds = {
    cjs: {
        outfile: './dist/slidy.cjs',
    },
    esm: {
        outfile: './dist/slidy.mjs',
    },
    iife: {
        outfile: './dist/slidy.js',
        globalName: 'Slidy',
    },
};

if (DEV) {
    build({
        ...esbuildBase,
        entryPoints: ['public/app.ts'],
        outfile: 'public/build/bundle.js',
        loader: { '.svg': 'file' },
    }).then((bundle) => {
        derver({
            ...derverConfig,
            onwatch: async (lr, item) => {
                if (item !== 'public') {
                    lr.prevent();
                    bundle.rebuild().catch((err) => lr.error(err.message, 'TS compile error'));
                }
            },
        });
    });
} else {
    for (const key in builds) {
        build({
            ...esbuildBase,
            ...builds[key],
            format: key,
        });
    }
}