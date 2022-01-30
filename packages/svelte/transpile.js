import { readFile, readFileSync, writeFile, writeFileSync } from 'fs';
import { preprocess } from 'svelte/compiler';
import sveltePreprocess from 'svelte-preprocess';
import { transformSync } from 'esbuild';

const preprocessor = [
    sveltePreprocess({
        // typescript: true,
        typescript({ content }) {
            const { code, map } = transformSync(content, {
                loader: 'ts',
                // treeShaking: true,
                banner: `import { slidy } from "@slidy/core"`,
            });
            // console.log(content, code, map);
            return { code, map };
        },
    }),
];

const source = readFileSync('./src/Slidy.svelte').toString();

preprocess(source, preprocessor, 'Slidy.svelte').then(
    ({ code, dependencies }) => {
        // console.log(code, dependencies);
        const transpiled = code.replace(/ lang=\"(scss|ts)\"/g, '');
        writeFileSync('./dist/Slidy.svelte', transpiled);
    }
);
