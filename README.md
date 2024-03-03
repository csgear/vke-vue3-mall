### Install vue

### install git cz

```shell
npm install commitizen -g
commitizen init cz-conventional-changelog --pnpm --save-dev --save-exact
pnpm install commitizen @digitalroute/cz-conventional-changelog-for-jira

```

```json
"config": {
    "commitizen": {
      "path": "./node_modules/@digitalroute/cz-conventional-changelog-for-jira"
    }
  }
```

### ESLint

```
pnpm i eslint -D
pnpm eslint --init
```

### 2.2.3 Stylelint

```shell
pnpm add stylelint postcss postcss-less postcss-html stylelint-config-recommended-less stylelint-config-standard stylelint-config-standard-vue stylelint-less stylelint-order -D
```

### Prettier

```
pnpm add eslint-config-prettier eslint-plugin-prettier -D
```

### husky

```shell
pnpm add --save-dev husky
pnpm exec husky init
```

### VSCode

```json
{
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll": "never",
    "source.fixAll.eslint": "explicit",
    "source.fixAll.stylelint": "explicit"
  },
  "stylelint.validate": ["css", "less", "vue", "html"],
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
