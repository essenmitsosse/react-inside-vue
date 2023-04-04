# React component wrapped in a Web Component inside a Vue app

This is a proof of concept for embedding one framework inside another using Web Components. The Web Component here is done without a framework and just Vanilla JS.

## Getting started

```bash
npm install

# You need to run this once at the beginning to build the
# React component. The build component will be placed inside
# `/public/distReact` so it can be loaded during the runtime
# of the Vue component.
#
# If you update the React component this command needs to
# run again.
npm run buildReact

# Start Vue app in dev mode
npm run dev
```
