import { component$, useSignal, useStore, $ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.module.css";
import { Link, routeLoader$, useLocation } from "@builder.io/qwik-city";

export const useProductDetails = routeLoader$(async (requestEvent) => {
  // This code runs only on the server, after every navigation
  const res = await fetch(
    `https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2017-01`
  );
  const product = await res.json();
  return requestEvent.params;
});

export default component$(() => {
  const data = useSignal("http://localhost:5173/");

  const changeData = $(function () {
    if (window) {
      data.value = window.location.href;
    }
    data.value.split("/").length;
  });

  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <Link href="/" title="qwik">
            <img src="/logos/logo.png" alt="" height={80} />

            <span>Techuar</span>
          </Link>
        </div>
        <ul>
          <li onClick$={changeData}>
            <Link
              class={data.value.split("/").length === 4 ? styles.active : ""}
              href="/"
            >
              Home
            </Link>
          </li>
          <li onClick$={changeData}>
            <Link
              class={data.value.includes("news") ? styles.active : ""}
              href="/news"
            >
              News
            </Link>
          </li>
          <li onClick$={changeData}>
            <Link
              class={data.value.includes("build") ? styles.active : ""}
              href="/build"
            >
              Build
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
