# svelte-preprocess-stylepaths
A preprocessor for Svelte, which allows you to have your component's style defined in a separate file.

#Install

```
npm i svelte-preprocess-stylepaths
```

or

```
yarn add svelte-preprocess-stylepaths
```

Add preprocessor to `rollup.config.js`:

```
import stylepaths from 'svelte-preprocess-stylepaths'

export default {
  ...
  plugins: [
      svelte({
        ...
        preprocess: {
          style: stylepaths
        }
      })
  ]
}
```

Then add a `src` attribute to your `<style>` tags to import styles from another file:

```
// Relative path
<style src="./style.css"></style>
```

```
// Absolute path (from project root)
<style src="src/style.css"></style>
```

It will prepend the imported css to whatever the content is in the style tag, so you can override styles if you want.
