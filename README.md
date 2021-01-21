<h1 align="center">blog</h1>
<h4 align="center">Interest causes this</h4>

<p align="center">
   <a href="https://app.circleci.com/pipelines/github/clattanoia" title="CircleCI">
    <img src="https://circleci.com/gh/clattanoia/blog.svg?style=shield" alt="CircleCI" />
  </a>
   <a href="https://codecov.io/gh/clattanoia/blog" title="Coverage Status">
    <img src="https://codecov.io/gh/clattanoia/blog/branch/main/graph/badge.svg?token=U7Epgl4FE6" alt="Coverage Status" />
  </a>
  <a href="https://opensource.org/licenses/MIT" title="License">
    <img src="https://img.shields.io/npm/l/express.svg" alt="License" />
  </a>
</p>

## Available Scripts

### `npm run commit`

Use `@commitlint/config-conventional` as Commit Message Lint. [The following rules](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#problems) are considered problems for `@commitlint/config-conventional` and will yield a non-zero exit code when not met.

`npm run commit` should be used instead of `git commit`.

Or install global `commitizen`

```
npm install -g commitizen
```

You can use `git cz` instead of `git commit`.
If you like `git commit` better, [the following format](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html) must be used.

```
<type>(<scope>): <subject>
```
