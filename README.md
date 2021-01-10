# blog
Interest causes this

[![CircleCI](https://circleci.com/gh/clattanoia/blog.svg?style=svg)](https://app.circleci.com/pipelines/github/clattanoia)
[![codecov](https://codecov.io/gh/clattanoia/blog/branch/main/graph/badge.svg?token=U7Epgl4FE6)](https://codecov.io/gh/clattanoia/blog)

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