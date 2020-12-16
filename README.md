# Understand Qur'an
Helps understanding the Holy Qur'an

# Tech used

## Languages
1. <img src="icons/javascript.svg" height="16"/> Javascript
1. <img src="icons/typescript.svg" height="16"/> Typescript
1. <img src="icons/shellscript.png" height="16"/> Shell script
1. <img src="icons/css.png" height="16"/> CSS
1. <img src="icons/sass.png" height="16"/> SCSS
1. <img src="icons/yml.png" height="16"/> YAML

## Frameworks and libraries
1. <img src="icons/react.png" height="16"/> ReactJS
1. <img src="icons/nextjs.jpeg" height="16"/> NextJS
    - Code splitting
    - Prefetching
    - Server-side rendering at runtime
    - Automatically rendered as static HTML
    - Automatically generated as static HTML + JSON
    - Incremental static regeneration
    - Client side rendering
1. <img src="icons/docker.jpeg" height="16"/> Docker
1. <img src="icons/docker_compose.png" height="16"/> Docker Compose
1. <img src="icons/stylelint.png" height="16"/> Stylelint
1. <img src="icons/eslint.png" height="16"/> Eslint
1. <img src="icons/storybook.png" height="16"/> Storybook
1. <img src="icons/material_ui.svg" height="16"/> Material UI
1. <img src="icons/webpack.png" height="16"/> Webpack
1. <img src="icons/verdaccio.png" height="16"/> Verdaccio (private npm registry)
1. <img src="icons/npm.png" height="16"/> NPM (for creating, publishing and reusing private packages)
1. <img src="icons/swr.png" height="16"/> SWR (React Hooks library for data fetching)
1. <img src="icons/graph_ql.png" height="16"/> GraphQL
1. <img src="icons/apollo_server.svg" height="16"/> Apollo server express
1. <img src="icons/apollo_client.jpg" height="16"/> Apollo client

## Conventions
1. SuiteCSS

# Requirements
1. Docker
1. Docker Compose

# Services
- understand-quran: front end
- design-library: a design library for the front end
- npm-registry: private npm registry

## Run all services
```bash
./start
```

## Stop all services
```bash
./stop
```

## Restart services
```bash
./restart <service name>
```

## URLs

- understand-quran: http://localhost:3000
- design-library: http://localhost:6006
- npm-registry: http://localhost:4873

## View logs
```bash
./logs <service name>
```

## Shell into services
### npm-registry
```bash
./shell-npm-registry
```
### other services
```bash
./shell <service name>
```

## Debug
### understand-quran
- Client side code: Use `debugger`
- Server side code: Add `debugger` to server side code. 
  - Chrome: Go to `chrome://inspect/ -> Under "Remote Targets" click on "inspect"`
  - VSCode:
    1. Add this task in `.vscode/tasks.json`:
        ```json
        {
          "version": "2.0.0",
          "tasks": [
            {
              "label": "clear-editor-history",
              "command": "${command:workbench.action.clearEditorHistory}"
            }
          ]
        }
        ```
    1. Add this debugger configuration in `.vscode/launch.json` and lauch after starting server:
        ```json
        {
          "version": "0.2.0",
          "configurations": [
            {
              "type": "node",
              "request": "attach",
              "name": "Launch Program",
              "skipFiles": ["<node_internals>/**"],
              "port": 9229,
              "preLaunchTask": "clear-editor-history"
            }
          ]
        }
        ```
