import { build } from 'esbuild';
import { derver } from 'derver';

const DEV = process.argv.includes('--dev');

const esbuildBase = {
    bundle: true,
    minify: !DEV,
    incremental: DEV,
    legalComments: 'none',
    entryPoints: ['src/slidy.tsx'],
    sourcemap: DEV ? 'inline' : false,
};
const derverConfig = {
    port: 3332,
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
        entryPoints: ['public/app.tsx'],
        outfile: 'public/build/bundle.js',
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
