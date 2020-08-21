import { assertEquals } from "https://deno.land/std@0.65.0/testing/asserts.ts";

import space from "./mod.ts";

Deno.test("test space", function () {
  assertEquals(
    space(
      "As much mud in the streets as if the waters had but newly retired from the face of the earth",
    ),
    "A s   m u c h   m u d   i n   t h e   s t r e e t s   a s   i f   t h e   w a t e r s   h a d   b u t   n e w l y   r e t i r e d   f r o m   t h e   f a c e   o f   t h e   e a r t h",
  );
});
