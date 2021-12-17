# Vue starter template

2 simple starter templates using Vue2 and Vite.

## branches

- master
  Simple starter template using Vue2 and Vite including:

  - Yarn
  - Vue router
  - Vuex store
  - Default layout component
    - Menu (also mobile) component
    - Footer component
  - Scss setup
    - default mixins
    - text setup
    - variable setup
  - Hidden scrollbar

- three-vue-starter-template including
  Simple starter template using Vue2, Vite and Threejs including:
  - All of the above
  - Basic threejs setup
    - Sketch.js file with basic setup
    - Default vertex shader
    - Default particle vertex shader
    - Default fragment shader
    - Includes dat.gui
    - Includes gsap
  - Sketch available in components using vuex

## Setup

**Don't forget to include all branches when using this template!**

```bash
  yarn set version stable # use latest yarn version
  yarn # install dependencies
  yarn dev # localy serve application
  yarn build # build production app
```

# Extra

To set the three-vue-starter-template to master branch for a clean git history:

```bash
  git switch switch master
  git reset --hard three-vue-starter-template
  git push --force
```
