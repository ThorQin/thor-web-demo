## Install

Use degit to create the project:

```bash
npx degit ThorQin/thor-web-demo my-project
```

## Build

```
npm run build
```

## Start a production web server
```
npm start
```

## Start a development web server with auto reload enable
```
npm run debug
```

- recommend use vscode javascript debug terminal to debug directly

## Upgrade all modules

```bash
npm list --json | jq -r '.dependencies|keys|.[]' | awk '{system("npm i " $0)}' 
```

- Should be executed under linux or macos and require install `jq` first.
