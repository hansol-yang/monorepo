import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.ts', '.tsx'];
export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.min.js',
        format: 'cjs',
        plugins: [terser()],
    },
    plugins: [
        resolve({ extensions }),
        commonjs(),
        babel({ babelHelpers: 'bundled', extensions, exclude: /node_modules/ }),
        postcss({
            modules: true,
        }),
    ],
};
