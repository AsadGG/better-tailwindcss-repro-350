import antfu from '@antfu/eslint-config';
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default antfu(
  {
    react: true,
    stylistic: {
      commaDangle: 'only-multiline',
      indent: 2,
      quotes: 'single',
      semi: true,
      severity: 'warn',
    },
    typescript: true,
  },
  {
    name: 'unicorn/recommended',
    rules: eslintPluginUnicorn.configs.recommended.rules,
  },
  {
    name: 'better-tailwindcss/recommended',
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss,
    },
    rules: eslintPluginBetterTailwindcss.configs.recommended.rules,
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/index.css',
        group: 'newLine',
        printWidth: 1000,
      },
    },
  },
  {
    rules: {
      'react-refresh/only-export-components': 'off',
      'unicorn/expiring-todo-comments': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            env: true,
            Param: true,
            props: true,
            Props: true,
          },
        },
      ],
    },
    settings: {
      tailwindcss: {
        callees: ['cva', 'cn'],
      },
    },
  },
);
