# Benford

Generates random numbers that follow the Benford distribution.

```js
const uniform = (min, max) => Math.random() * (max - min) + min
const benford = (min, max) => Math.exp(uniform(Math.log(min), Math.log(max)))
```

That's it. Either `npm i -S benford` if you like dependencies, or just copy and paste the above code.

## Todo

- [ ] Consider using `window.crypto.getRandomValues()` or `crypto.randomBytes()` if available
- [ ] Compile down to ES5 (is that really still necessary?)

## License

MIT

Copyright (c) 2017 John Tasto
