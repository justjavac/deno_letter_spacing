# deno_letter_spacing

[![tag](https://img.shields.io/github/release/justjavac/deno_letter_spacing)](https://github.com/justjavac/deno_letter_spacing/releases)
[![Build Status](https://github.com/justjavac/deno_letter_spacing/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_letter_spacing/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_letter_spacing)](https://github.com/justjavac/deno_letter_spacing/blob/master/LICENSE)

Set the horizontal spacing behavior between text characters.

## Usage

```js
import space from 'https://deno.land/x/letter_spacing/mod.ts';

space('As much mud in the streets as if the waters had but newly retired from the face of the earth', 1);
```

Results in:

```
A s   m u c h   m u d   i n   t h e   s t r e e t s   a s   i f   t h e   w a t e r s   h a d   b u t   n e w l y   r e t i r e d   f r o m   t h e   f a c e   o f   t h e   e a r t h
```

## Example

```bash
deno run https://deno.land/x/text_indent/example.ts
```

## License

[deno_letter_spacing](https://github.com/justjavac/deno_letter_spacing) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
