import {
  component$,
  useComputed$,
  useSignal,
  useStore,
  useStylesScoped$,
  $,
} from "@builder.io/qwik";
import {
  DocumentHead,
  Link,
  routeLoader$,
  useLocation,
} from "@builder.io/qwik-city";

import Counter from "~/components/starter/counter/counter";
import Hero from "~/components/starter/hero/hero";
import Infobox from "~/components/starter/infobox/infobox";
import Starter from "~/components/starter/next-steps/next-steps";
import styles from "./news.scss?inline";

export const fetchNews = routeLoader$(async () => {
  const response = await fetch("http://localhost:3000/news/", {
    headers: { Accept: "application/json" },
  });
  return response.json();
});

export default component$(() => {
  const news = fetchNews();
  const activeCategory = useSignal("");
  const filterCategory = $((category) => {
    activeCategory.value = category;
  });

  const newsComputed = useComputed$(() => {
    if (activeCategory.value === "") {
      return news.value.news;
    } else {
      return news.value.news.filter(
        (article) => article.category === activeCategory.value
      );
    }
  });

  const newsCategoryCount = useComputed$(() => {
    const categories = { GPU: 0, CPU: 0, Storage: 0, Other: 0 };
    news.value.news.forEach((article) => {
      categories[article.category] += 1;
    });
    console.log(Object.entries(categories));
    return Object.entries(categories);
  });
  useStylesScoped$(styles);
  return (
    <>
      <div class="news container">
        <div class="news__filters w-1/5">
          <div class="news__filters__categories">
            <h2>Categories</h2>
            <button
              class={activeCategory.value === "" ? "active" : ""}
              onClick$={() => filterCategory("")}
            >
              All Categories
            </button>
            <button
              class={activeCategory.value === "GPU" ? "active" : ""}
              onClick$={() => filterCategory("GPU")}
            >
              GPUs
            </button>
            <button
              class={activeCategory.value === "CPU" ? "active" : ""}
              onClick$={() => filterCategory("CPU")}
            >
              CPUs
            </button>
            <button
              onClick$={() => filterCategory("Storage")}
              class={activeCategory.value === "Storage" ? "active" : ""}
            >
              Storage
            </button>
            <button
              class={activeCategory.value === "Other" ? "active" : ""}
              onClick$={() => filterCategory("Other")}
            >
              Other
            </button>
          </div>
        </div>

        <div
          class={[
            "news__list",
            "w-4/5",
            "grid",
            "gap-x-8",
            "gap-y-4",
            newsComputed.value.length
              ? ["grid-cols-3", "justify-between"]
              : "justify-center",
          ]}
        >
          {newsComputed.value.length ? (
            newsComputed.value.map((article, index) => (
              <Link href={news.value.news[0].url.url}>
                <div class="news__list__item " key={index}>
                  <div class="overlay"></div>
                  <span class="category-tag">{article.category}</span>
                  <img src={`/images/${article.images[0]}`} alt="" />

                  <div class="news__list__item__info">
                    <div class="news__list__item__date">
                      <span>!!Icon!!</span> May 16, 2023 10:42 AM
                    </div>
                    <div class="news__list__item__title">{article.title}</div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p class="empty-news-title">
              Unfortunately, there are no news in this category <br />
              Here are the categories which have news in them:
              <ul class="categories-size-list">
                {newsCategoryCount.value.map((article, index) => {
                  if (article[1] > 0) {
                    return (
                      <li class="categories-size-list__item">
                        {article[0]} category: {article[1]} articles
                      </li>
                    );
                  }
                })}
              </ul>
            </p>
          )}
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
