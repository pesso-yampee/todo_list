/**
 * @see https://nextjs.org/docs/app/building-your-application/configuring/eslint#lint-staged
 */

const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.{js,jsx,ts,tsx}': ['prettier --single-quote --write'],
}
