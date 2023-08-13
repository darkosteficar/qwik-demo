import { component$, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import styles from "./article.scss?inline";

export const useProductDetails = routeLoader$(async (requestEvent) => {
  const response = await fetch(
    "http://localhost:3000/news/" + requestEvent.params.id,
    {
      headers: { Accept: "application/json" },
    }
  );
  return response.json();
});

export default component$(() => {
  useStyles$(styles);
  const signal = useProductDetails();
  const store = signal.value.doc;

  // In order to access the `routeLoader$` data within a Qwik Component, you need to call the hook.
  return (
    <>
      <div class="article container">
        <div class="article__header">
          <span class="article__header__category">{store.category}</span>
          <h1 class="article__header__main">{store.title}</h1>
          <p class="article__header__date">
            Published: Jun 5th 2023, 12:39 GTM
          </p>
        </div>

        <div class="article__body flex gap-10">
          <div class="w-1/5 article__body__sidebar">
            <h3>Trending right now</h3>
            <div class="article__body__sidebar__item">
              <img src="../../images/rtx4070-1.jpg" alt="" />
              <h4>
                Aannounces RTX 4070 Gaming Trio and Ventus graphics card series
              </h4>
            </div>
            <div class="article__body__sidebar__item">
              <img src="../../images/rtx4070-1.jpg" alt="" />
              <h4>
                Aannounces RTX 4070 Gaming Trio and Ventus graphics card series
              </h4>
            </div>
            <div class="article__body__sidebar__item">
              <img src="../../images/rtx4070-1.jpg" alt="" />
              <h4>
                Aannounces RTX 4070 Gaming Trio and Ventus graphics card series
              </h4>
            </div>
          </div>
          <div class="article__body__content w-4/5">
            <h2 class="article__body__content__subtitle">{store.subtitle}</h2>
            <img
              class="img-top"
              src={"../../images/" + store.images[1]}
              alt=""
            />
            {store.paragraphs.map((item, index) => (
              <div>
                <div key={index} dangerouslySetInnerHTML={item}></div>
                <img src={"../../images/" + store.images[index + 2]} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});
