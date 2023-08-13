import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./hero.scss?inline";

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="hero">
      <p class="mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dicta.
      </p>
      <h1 class="hero_h1">
        Lorem ipsum <span class="highlight">dolor</span> sit amet consectetur,{" "}
        <span class="highlight">adipisicing elit.</span>
        In, veniam.
      </h1>
      <h2 class="hero_h2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        excepturi culpa reprehenderit, pariatur doloribus recusandae ut
        temporibus nisi cum nemo. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Deleniti excepturi culpa reprehenderit, pariatur
        doloribus recusandae ut temporibus nisi cum nemo.
      </h2>
      <img class="heroImage" src="/images/hero-background.png" alt="" />
      <a href="" class="btn-main mt-12">
        Start building
      </a>
      <div class="black1"></div>
      <div class="black2"></div>
    </div>
  );
});
