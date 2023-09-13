import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./next-steps.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const state = useStore({
    feature1: false,
    feature2: false,
    feature3: false,
    feature4: false,
  });
  return (
    <div class="features_container">
      <h2>Key Components</h2>
      <div class="features">
        <div class="features__wrapper">
          <div class="features_1 features__item">
            <div class="features__title">
              <svg
                id="Layer_5"
                data-name="Layer 5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                class="iconLg"
              >
                <path
                  d="M462.18,150.846H77.829v-53.4A12.427,12.427,0,0,0,65.416,85.037H32.96A12.427,12.427,0,0,0,20.547,97.449v12.662A12.427,12.427,0,0,0,32.96,122.524h7.381V418.8a12.427,12.427,0,0,0,12.413,12.413H65.416A12.427,12.427,0,0,0,77.829,418.8V372.778H94.31v27.83a10.447,10.447,0,0,0,10.435,10.435H367.817a10.447,10.447,0,0,0,10.435-10.435v-27.83h14.591v27.83a10.447,10.447,0,0,0,10.434,10.435h37.289A10.447,10.447,0,0,0,451,400.608v-27.83h11.18a18.324,18.324,0,0,0,18.3-18.3V169.148A18.323,18.323,0,0,0,462.18,150.846Zm-64.494,13c-.788.4-18.019,14-18.256,13.528-1.336-.413-213.6.778-214.515-.4a6.5,6.5,0,0,0-.681-.593l-16.608-12.535ZM64.829,418.214H53.341V118.98a9.467,9.467,0,0,0-9.456-9.456H33.547V98.037H64.829Zm82.8-58.436c.787-.4,18.019-14,18.255-13.528,1.337.414,213.6-.782,214.517.4a6.594,6.594,0,0,0,.681.592l16.607,12.535Zm-40.316,13.16h32.157v25.105H107.31Zm45.157,0h32.158v25.105H152.467Zm45.158,0h32.156v25.105H197.625Zm45.156,0h32.157v25.105H242.781Zm45.157,0h32.156v25.105H287.938Zm77.314,25.105H333.094V372.938h32.158Zm72.748,0H405.843V372.938H438Zm29.483-43.568a5.309,5.309,0,0,1-5.3,5.3H419.264L389.219,337.1a14.271,14.271,0,0,0-9.789-3.849H165.881a14.267,14.267,0,0,0-9.788,3.849l-30.046,22.679H77.829V163.846h48.218l30.046,22.678a14.264,14.264,0,0,0,9.788,3.85H379.43a14.264,14.264,0,0,0,9.788-3.85l30.046-22.678H462.18a5.309,5.309,0,0,1,5.3,5.3Z"
                  id="id_105"
                  style="fill: rgb(255, 255, 255);"
                ></path>
                <path
                  d="M203.145,249.812c-5.777-31.237-38.326-52.648-69.32-45.843-31.151,5.737-52.618,38.151-45.941,69.093h0c11.975,57.044,89.542,64.45,112.082,10.71A58.146,58.146,0,0,0,203.145,249.812Zm-55.3,57.5a45.59,45.59,0,0,1-15.307-1.826c.684-8.836,4.477-16.609,7.57-21.613a22.852,22.852,0,0,0,5.457.654A103.223,103.223,0,0,0,147.849,307.31Zm-48.04-43.442a45.751,45.751,0,0,1,1.827-15.3c8.813.694,16.589,4.5,21.6,7.6a22.9,22.9,0,0,0-.648,5.425A103.212,103.212,0,0,0,99.809,263.868Zm35.778-2.3a9.968,9.968,0,0,1,9.957-9.956c13.208.547,13.2,19.369,0,19.913A9.967,9.967,0,0,1,135.587,261.569Zm7.681-45.72a45.891,45.891,0,0,1,15.271,1.829c-.7,8.822-4.486,16.582-7.577,21.587a22.871,22.871,0,0,0-5.441-.651A104.21,104.21,0,0,0,143.268,215.849ZM168.5,261.543a103.174,103.174,0,0,0,22.781-2.277,45.538,45.538,0,0,1-1.825,15.3c-8.817-.69-16.591-4.483-21.606-7.583A22.879,22.879,0,0,0,168.5,261.543Zm20.29-15.041c-9.264,1.9-17.484,2.5-24.536,1.791a23.021,23.021,0,0,0-2.045-2.487,63.914,63.914,0,0,0,8.685-22.362A45.366,45.366,0,0,1,188.789,246.5ZM130.5,218.326c1.884,9.289,2.478,17.506,1.771,24.529a23.1,23.1,0,0,0-2.5,2.059,63.835,63.835,0,0,0-22.354-8.7A45.457,45.457,0,0,1,130.5,218.326Zm-28.2,58.3c9.253-1.9,17.47-2.5,24.529-1.792a23.184,23.184,0,0,0,2.052,2.5,65.352,65.352,0,0,0-8.687,22.37A45.392,45.392,0,0,1,102.3,276.631Zm58.312,28.184c-1.9-9.262-2.5-17.481-1.793-24.534a23.21,23.21,0,0,0,2.492-2.049,63.8,63.8,0,0,0,22.346,8.7A45.49,45.49,0,0,1,160.611,304.815Z"
                  id="id_106"
                  style="fill: rgb(255, 255, 255);"
                ></path>
                <path
                  d="M330.222,249.66c-5.856-31.27-38.642-52.677-69.65-45.607-31.053,5.994-52.172,38.1-45.575,69.009,12.015,57.017,89.368,64.476,112.043,10.8A57.955,57.955,0,0,0,330.222,249.66Zm-55.257,57.65a46.479,46.479,0,0,1-8.908-.413h0a44.822,44.822,0,0,1-6.4-1.411c.682-8.871,4.484-16.627,7.586-21.61a22.842,22.842,0,0,0,5.443.65A103.229,103.229,0,0,0,274.965,307.31Zm-48.044-43.441c-.075-1.5-.077-3.008-.006-4.5a45.506,45.506,0,0,1,1.838-10.8c8.81.694,16.585,4.5,21.6,7.6a22.865,22.865,0,0,0-.649,5.428A103.169,103.169,0,0,0,226.921,263.869Zm35.778-2.3c-.138-7.354,8.193-12.35,14.591-8.8.1.058.2.116.3.169,8.745,5.016,5.28,18.52-4.935,18.592A9.967,9.967,0,0,1,262.7,261.569Zm7.666-45.719a45.931,45.931,0,0,1,15.29,1.828c-.7,8.824-4.486,16.584-7.577,21.588a22.863,22.863,0,0,0-5.44-.652A103.113,103.113,0,0,0,270.365,215.85Zm25.246,45.693a103.105,103.105,0,0,0,22.78-2.277,45.574,45.574,0,0,1-1.824,15.3c-8.819-.691-16.592-4.484-21.606-7.584A22.817,22.817,0,0,0,295.611,261.543ZM315.9,246.5c-9.265,1.9-17.485,2.5-24.536,1.789a23.146,23.146,0,0,0-2.041-2.482,63.956,63.956,0,0,0,8.685-22.364A45.37,45.37,0,0,1,315.9,246.5Zm-58.3-28.171c1.9,9.255,2.5,17.469,1.79,24.52a23.035,23.035,0,0,0-2.506,2.06,63.852,63.852,0,0,0-22.357-8.7A45.454,45.454,0,0,1,257.6,218.332Zm-28.188,58.3c9.252-1.9,17.469-2.5,24.528-1.792A23.1,23.1,0,0,0,256,277.348a64.774,64.774,0,0,0-8.7,22.357A45.385,45.385,0,0,1,229.412,276.631Zm58.315,28.183c-1.9-9.264-2.5-17.483-1.793-24.536a23.18,23.18,0,0,0,2.489-2.047,63.785,63.785,0,0,0,22.344,8.7A45.482,45.482,0,0,1,287.727,304.814Z"
                  id="id_107"
                  style="fill: rgb(255, 255, 255);"
                ></path>
                <path
                  d="M457.432,250.028c-.038-.189-.088-.374-.143-.558-5.939-31.16-38.641-52.455-69.569-45.425-56.75,12.5-63.631,89.707-9.979,112.026C420.959,333.6,466.544,295.783,457.432,250.028ZM402.08,307.31a45.516,45.516,0,0,1-15.307-1.824c.683-8.837,4.476-16.61,7.57-21.613a22.859,22.859,0,0,0,5.458.652A103.218,103.218,0,0,0,402.08,307.31Zm-48.047-43.441a45.769,45.769,0,0,1,1.821-15.305c8.813.689,16.593,4.5,21.606,7.6a22.862,22.862,0,0,0-.648,5.427A103.287,103.287,0,0,0,354.033,263.869Zm43.448-48.019a45.952,45.952,0,0,1,15.293,1.829c-.677,8.644-4.294,16.272-7.588,21.586a22.892,22.892,0,0,0-5.432-.651A103.184,103.184,0,0,0,397.481,215.85Zm-7.67,45.719a9.968,9.968,0,0,1,9.956-9.956c13.209.547,13.2,19.369,0,19.913A9.967,9.967,0,0,1,389.811,261.569Zm32.912-.026a103.17,103.17,0,0,0,22.77-2.273,46.047,46.047,0,0,1-1.823,15.3c-8.807-.688-16.582-4.486-21.6-7.588A22.846,22.846,0,0,0,422.723,261.543Zm20.29-15.039c-9.265,1.9-17.485,2.5-24.537,1.788a23.064,23.064,0,0,0-2.053-2.5,64.6,64.6,0,0,0,8.69-22.356A45.367,45.367,0,0,1,443.013,246.5Zm-58.3-28.174c1.9,9.256,2.5,17.47,1.791,24.519A22.969,22.969,0,0,0,384,244.911a63.784,63.784,0,0,0-22.358-8.7A45.465,45.465,0,0,1,384.715,218.33Zm-28.191,58.3c9.26-1.9,17.476-2.506,24.527-1.8a23.1,23.1,0,0,0,2.058,2.5,65.32,65.32,0,0,0-8.685,22.37A45.39,45.39,0,0,1,356.524,276.633Zm58.318,28.179c-1.9-9.263-2.5-17.483-1.792-24.537a23.116,23.116,0,0,0,2.486-2.046,63.778,63.778,0,0,0,22.342,8.709A45.489,45.489,0,0,1,414.842,304.812Z"
                  id="id_108"
                  style="fill: rgb(255, 255, 255);"
                ></path>
              </svg>
              Graphics Processing Unit
              <p class="features__desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                deserunt iste accusamus corporis esse ullam omnis, rerum sequi
                eaque nemo quasi ut tempore id quidem reiciendis ex architecto
                quo! Iure!
              </p>
            </div>

            <button onClick$={() => (state.feature1 = !state.feature1)}>
              Discover
            </button>
            {state.feature1 && (
              <p class="features__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                fugit placeat id, est voluptatem neque expedita, dolor
                laboriosam necessitatibus laborum consequuntur accusamus
                officiis in incidunt dicta. Animi expedita repudiandae quae
                sapiente in eaque facilis, error optio accusamus ratione
                asperiores unde.
              </p>
            )}
          </div>

          <div class="features_2 features__item">
            <div class="features__title">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 48 48"
                style="enable-background:new 0 0 48 48;"
              >
                <path
                  d="M10,25c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S11.654,25,10,25z M10,29c-0.551,0-1-0.449-1-1s0.449-1,1-1
                    s1,0.449,1,1S10.551,29,10,29z M6,20h8c0.552,0,1-0.448,1-1v-4c0-0.552-0.448-1-1-1H6c-0.552,0-1,0.448-1,1v4
                    C5,19.552,5.448,20,6,20z M7,16h6v2H7V16z M24,20h18c0.552,0,1-0.448,1-1v-4c0-0.552-0.448-1-1-1H24c-0.552,0-1,0.448-1,1v4
                    C23,19.552,23.448,20,24,20z M37,16h4v2h-4V16z M31,16h4v2h-4V16z M25,16h4v2h-4V16z M46,10H2c-0.552,0-1,0.448-1,1v26
                    c0,0.552,0.448,1,1,1h44c0.552,0,1-0.448,1-1V11C47,10.448,46.552,10,46,10z M45,36H3V12h42V36z M24,34h18c0.552,0,1-0.448,1-1v-4
                    c0-0.552-0.448-1-1-1H24c-0.552,0-1,0.448-1,1v4C23,33.552,23.448,34,24,34z M37,30h4v2h-4V30z M31,30h4v2h-4V30z M25,30h4v2h-4V30z
                    M24,27h18c0.552,0,1-0.448,1-1v-4c0-0.552-0.448-1-1-1H24c-0.552,0-1,0.448-1,1v4C23,26.552,23.448,27,24,27z M37,23h4v2h-4V23z
	                M31,23h4v2h-4V23z M25,23h4v2h-4V23z"
                  id="id_101"
                  style="fill: rgb(255, 255, 255);"
                ></path>
              </svg>
              Power Supply
              <p class="features__desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                deserunt iste accusamus corporis esse ullam omnis, rerum sequi
                eaque nemo quasi ut tempore id quidem reiciendis ex architecto
                quo! Iure!
              </p>
            </div>

            <button onClick$={() => (state.feature2 = !state.feature2)}>
              Discover
            </button>
            {state.feature2 && (
              <p class="features__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                fugit placeat id, est voluptatem neque expedita, dolor
                laboriosam necessitatibus laborum consequuntur accusamus
                officiis in incidunt dicta. Animi expedita repudiandae quae
                sapiente in eaque facilis, error optio accusamus ratione
                asperiores unde.
              </p>
            )}
          </div>

          <div class="features_3 features__item">
            <div class="features__title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-cpu"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="2"
                  ry="2"
                  id="id_101"
                  style="stroke: rgb(255, 255, 255);"
                ></rect>
                <rect
                  x="9"
                  y="9"
                  width="6"
                  height="6"
                  id="id_102"
                  style="stroke: rgb(255, 255, 255);"
                ></rect>
                <line
                  x1="9"
                  y1="1"
                  x2="9"
                  y2="4"
                  id="id_103"
                  style="stroke: rgb(255, 255, 255);"
                ></line>
                <line
                  x1="15"
                  y1="1"
                  x2="15"
                  y2="4"
                  id="id_104"
                  style="stroke: rgb(255, 255, 255);"
                ></line>
                <line
                  x1="9"
                  y1="20"
                  x2="9"
                  y2="23"
                  id="id_105"
                  style="stroke: rgb(255, 255, 255);"
                ></line>
                <line
                  x1="15"
                  y1="20"
                  x2="15"
                  y2="23"
                  id="id_106"
                  style="stroke: rgb(255, 255, 255);"
                ></line>
                <line
                  x1="20"
                  y1="9"
                  x2="23"
                  y2="9"
                  id="id_107"
                  style="stroke: rgb(255, 255, 255);"
                ></line>
                <line
                  x1="20"
                  y1="14"
                  x2="23"
                  y2="14"
                  id="id_108"
                  style="stroke: rgb(255, 255, 255);"
                ></line>
                <line
                  x1="1"
                  y1="9"
                  x2="4"
                  y2="9"
                  id="id_109"
                  style="stroke: rgb(255, 255, 255);"
                ></line>
                <line
                  x1="1"
                  y1="14"
                  x2="4"
                  y2="14"
                  id="id_110"
                  style="stroke: rgb(255, 255, 255);"
                ></line>
              </svg>
              <p> Central Processing Unit</p>
              <p class="features__desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                deserunt iste accusamus corporis esse ullam omnis, rerum sequi
                eaque nemo quasi ut tempore id quidem reiciendis ex architecto
                quo! Iure!
              </p>
            </div>
            <button onClick$={() => (state.feature3 = !state.feature3)}>
              Discover
            </button>
            {state.feature3 && (
              <p class="features__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                fugit placeat id, est voluptatem neque expedita, dolor
                laboriosam necessitatibus laborum consequuntur accusamus
                officiis in incidunt dicta. Animi expedita repudiandae quae
                sapiente in eaque facilis, error optio accusamus ratione
                asperiores unde.
              </p>
            )}
          </div>

          <div class="features_4 features__item">
            <div class="features__title">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39 2H9C8.20435 2 7.44129 2.31607 6.87868 2.87868C6.31607 3.44129 6 4.20435 6 5V43C6 43.7956 6.31607 44.5587 6.87868 45.1213C7.44129 45.6839 8.20435 46 9 46H39C39.7956 46 40.5587 45.6839 41.1213 45.1213C41.6839 44.5587 42 43.7956 42 43V5C42 4.20435 41.6839 3.44129 41.1213 2.87868C40.5587 2.31607 39.7956 2 39 2ZM40 43C40 43.2652 39.8946 43.5196 39.7071 43.7071C39.5196 43.8946 39.2652 44 39 44H9C8.73478 44 8.48043 43.8946 8.29289 43.7071C8.10536 43.5196 8 43.2652 8 43V5C8 4.73478 8.10536 4.48043 8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4H39C39.2652 4 39.5196 4.10536 39.7071 4.29289C39.8946 4.48043 40 4.73478 40 5V43Z"
                  fill="#ffffff"
                  id="id_101"
                ></path>
                <path
                  d="M11 8C11.5523 8 12 7.55228 12 7C12 6.44772 11.5523 6 11 6C10.4477 6 10 6.44772 10 7C10 7.55228 10.4477 8 11 8Z"
                  fill="#ffffff"
                  id="id_102"
                ></path>
                <path
                  d="M37 8C37.5523 8 38 7.55228 38 7C38 6.44772 37.5523 6 37 6C36.4477 6 36 6.44772 36 7C36 7.55228 36.4477 8 37 8Z"
                  fill="#ffffff"
                  id="id_103"
                ></path>
                <path
                  d="M11 42C11.5523 42 12 41.5523 12 41C12 40.4477 11.5523 40 11 40C10.4477 40 10 40.4477 10 41C10 41.5523 10.4477 42 11 42Z"
                  fill="#ffffff"
                  id="id_104"
                ></path>
                <path
                  d="M37 42C37.5523 42 38 41.5523 38 41C38 40.4477 37.5523 40 37 40C36.4477 40 36 40.4477 36 41C36 41.5523 36.4477 42 37 42Z"
                  fill="#ffffff"
                  id="id_105"
                ></path>
                <path
                  d="M24 32C26.5712 32 29.0846 31.2376 31.2224 29.8091C33.3603 28.3806 35.0265 26.3503 36.0104 23.9749C36.9944 21.5994 37.2518 18.9856 36.7502 16.4638C36.2486 13.9421 35.0105 11.6257 33.1924 9.80761C31.3743 7.98953 29.0579 6.7514 26.5362 6.24979C24.0144 5.74818 21.4006 6.00563 19.0251 6.98956C16.6497 7.9735 14.6194 9.63975 13.1909 11.7776C11.7624 13.9154 11 16.4288 11 19C11.004 22.4466 12.3749 25.7509 14.812 28.188C17.2491 30.6251 20.5534 31.996 24 32ZM24 8C26.1756 8 28.3023 8.64514 30.1113 9.85383C31.9202 11.0625 33.3301 12.7805 34.1627 14.7905C34.9952 16.8005 35.2131 19.0122 34.7886 21.146C34.3642 23.2798 33.3166 25.2398 31.7782 26.7782C30.2398 28.3166 28.2798 29.3642 26.146 29.7886C24.0122 30.2131 21.8005 29.9952 19.7905 29.1627C17.7805 28.3301 16.0625 26.9202 14.8538 25.1113C13.6451 23.3023 13 21.1756 13 19C13.0034 16.0837 14.1635 13.2878 16.2256 11.2256C18.2878 9.16347 21.0837 8.00344 24 8Z"
                  fill="#ffffff"
                  id="id_106"
                ></path>
                <path
                  d="M24 23C24.7911 23 25.5645 22.7654 26.2223 22.3259C26.8801 21.8864 27.3928 21.2616 27.6955 20.5307C27.9983 19.7998 28.0775 18.9956 27.9231 18.2196C27.7688 17.4437 27.3878 16.731 26.8284 16.1716C26.269 15.6122 25.5563 15.2312 24.7804 15.0769C24.0044 14.9225 23.2002 15.0017 22.4693 15.3045C21.7384 15.6072 21.1136 16.1199 20.6741 16.7777C20.2346 17.4355 20 18.2089 20 19C20 20.0609 20.4214 21.0783 21.1716 21.8284C21.9217 22.5786 22.9391 23 24 23ZM24 17C24.3956 17 24.7822 17.1173 25.1111 17.3371C25.44 17.5568 25.6964 17.8692 25.8478 18.2346C25.9991 18.6001 26.0387 19.0022 25.9616 19.3902C25.8844 19.7781 25.6939 20.1345 25.4142 20.4142C25.1345 20.6939 24.7781 20.8844 24.3902 20.9616C24.0022 21.0387 23.6001 20.9991 23.2346 20.8478C22.8692 20.6964 22.5568 20.44 22.3371 20.1111C22.1173 19.7822 22 19.3956 22 19C22 18.4696 22.2107 17.9609 22.5858 17.5858C22.9609 17.2107 23.4696 17 24 17V17Z"
                  fill="#ffffff"
                  id="id_107"
                ></path>
                <path
                  d="M31 34H29C28.7348 34 28.4804 34.1054 28.2929 34.2929C28.1054 34.4804 28 34.7348 28 35V41C28 41.2652 28.1054 41.5196 28.2929 41.7071C28.4804 41.8946 28.7348 42 29 42H31C31.7956 42 32.5587 41.6839 33.1213 41.1213C33.6839 40.5587 34 39.7956 34 39V37C34 36.2044 33.6839 35.4413 33.1213 34.8787C32.5587 34.3161 31.7956 34 31 34V34ZM32 39C32 39.2652 31.8946 39.5196 31.7071 39.7071C31.5196 39.8946 31.2652 40 31 40H30V36H31C31.2652 36 31.5196 36.1054 31.7071 36.2929C31.8946 36.4804 32 36.7348 32 37V39Z"
                  fill="#ffffff"
                  id="id_108"
                ></path>
                <path
                  d="M24 34H22C21.7348 34 21.4804 34.1054 21.2929 34.2929C21.1054 34.4804 21 34.7348 21 35V41C21 41.2652 21.1054 41.5196 21.2929 41.7071C21.4804 41.8946 21.7348 42 22 42H24C24.7956 42 25.5587 41.6839 26.1213 41.1213C26.6839 40.5587 27 39.7956 27 39V37C27 36.2044 26.6839 35.4413 26.1213 34.8787C25.5587 34.3161 24.7956 34 24 34ZM25 39C25 39.2652 24.8946 39.5196 24.7071 39.7071C24.5196 39.8946 24.2652 40 24 40H23V36H24C24.2652 36 24.5196 36.1054 24.7071 36.2929C24.8946 36.4804 25 36.7348 25 37V39Z"
                  fill="#ffffff"
                  id="id_109"
                ></path>
                <path
                  d="M19 34C18.7348 34 18.4804 34.1054 18.2929 34.2929C18.1054 34.4804 18 34.7348 18 35V37H16V35C16 34.7348 15.8946 34.4804 15.7071 34.2929C15.5196 34.1054 15.2652 34 15 34C14.7348 34 14.4804 34.1054 14.2929 34.2929C14.1054 34.4804 14 34.7348 14 35V41C14 41.2652 14.1054 41.5196 14.2929 41.7071C14.4804 41.8946 14.7348 42 15 42C15.2652 42 15.5196 41.8946 15.7071 41.7071C15.8946 41.5196 16 41.2652 16 41V39H18V41C18 41.2652 18.1054 41.5196 18.2929 41.7071C18.4804 41.8946 18.7348 42 19 42C19.2652 42 19.5196 41.8946 19.7071 41.7071C19.8946 41.5196 20 41.2652 20 41V35C20 34.7348 19.8946 34.4804 19.7071 34.2929C19.5196 34.1054 19.2652 34 19 34Z"
                  fill="#ffffff"
                  id="id_110"
                ></path>
              </svg>
              <p> Storage</p>
              <p class="features__desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                deserunt iste accusamus corporis esse ullam omnis, rerum sequi
                eaque nemo quasi ut tempore id quidem reiciendis ex architecto
                quo! Iure!
              </p>
            </div>

            <button onClick$={() => (state.feature4 = !state.feature4)}>
              Discover
            </button>
            {state.feature4 && (
              <div class="features__description">
                <h4>SSD or HDD</h4>
                <p>
                  The hard drive is where your software, documents, and other
                  files are stored. The hard drive is long-term storage, which
                  means the data is still saved even if you turn the computer
                  off or unplug it. When you run a program or open a file, the
                  computer copies some of the data from the hard drive onto the
                  RAM.
                </p>
              </div>
            )}
          </div>

          <div class="features_5 features__item">
            <div class="features__title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.70666in"
                height="1.70666in"
                version="1.1"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                viewBox="0 0 1707 1707"
              >
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    class="fil0"
                    d="M980 443l-62 0c-29,0 -29,-46 0,-46l62 0c0,-17 -3,-44 22,-44l371 0c25,0 23,27 23,44l59 0c29,0 29,46 0,46l-59 0c0,18 3,47 -23,47l-371 0c-26,0 -22,-29 -22,-47zm625 1106l-132 0 0 135c0,12 -10,22 -23,22l-276 0c-13,0 -23,-10 -23,-22l0 -135 -143 0 0 84c0,13 -10,23 -22,23l-196 0c-13,0 -23,-10 -23,-23l0 -84 -665 0c-13,0 -23,-10 -23,-23l0 -1503c0,-12 10,-23 23,-23l1503 0c13,0 23,11 23,23l0 1503c0,13 -10,23 -23,23zm-177 0l-232 0 0 112 26 0c0,-21 -8,-65 23,-65 30,0 22,44 22,65l22 0c0,-21 -8,-65 23,-65 30,0 23,44 23,65l22 0c0,-21 -8,-65 22,-65 31,0 23,44 23,65l26 0 0 -112zm-465 0l-150 0 0 62 150 0 0 -62zm-839 -45l214 0 0 -137c0,-24 24,-23 41,-23l0 -109 -74 0c-25,69 -130,53 -130,-23 0,-75 105,-91 130,-22l97 0c12,0 23,10 23,22l0 132 40 0 0 -214c-69,-25 -53,-130 23,-130 75,0 91,105 22,130l0 214 41 0 0 -132c0,-12 10,-22 23,-22l96 0c25,-69 130,-53 130,22 0,76 -105,92 -130,23l-74 0 0 109c17,0 41,-1 41,23l0 137 945 0 0 -1458 -1458 0 0 1458zm260 0l208 0 0 -114 -208 0 0 114zm103 -416c28,0 29,-43 1,-43 -28,0 -28,42 -1,43zm246 103c-28,0 -28,43 0,43 28,0 28,-43 0,-43zm-491 0c-28,0 -28,43 0,43 29,0 29,-43 0,-43zm360 -654l-347 0c-12,0 -22,-10 -22,-22l0 -347c0,-13 10,-23 22,-23l347 0c13,0 23,10 23,23l0 347c0,12 -10,22 -23,22zm-324 -45l302 0 0 -302 -302 0 0 302zm235 -218l-169 0c-29,0 -29,-45 0,-45l169 0c30,0 30,45 0,45zm0 90l-169 0c-29,0 -29,-46 0,-46l169 0c30,0 30,46 0,46zm0 89l-169 0c-29,0 -29,-45 0,-45l169 0c30,0 30,45 0,45zm512 -33l0 25 325 0 0 -46 -325 0 0 21zm348 -138l-371 0c-25,0 -22,-28 -22,-46l-62 0c-29,0 -29,-45 0,-45l62 0c0,-18 -3,-46 22,-46l371 0c25,0 23,28 23,46l59 0c29,0 29,45 0,45l-59 0c0,18 2,46 -23,46zm-348 -46l325 0 0 -46 -325 0 0 46zm298 988l-63 0 0 109c0,30 -46,30 -46,0l0 -109 -51 0 0 109c0,30 -45,30 -45,0l0 -109 -51 0 0 109c0,30 -46,30 -46,0l0 -109c-97,0 -86,11 -86,-86l-109 0c-29,0 -29,-45 0,-45l109 0 0 -52 -109 0c-29,0 -29,-45 0,-45l109 0 0 -51 -109 0c-29,0 -29,-46 0,-46l109 0c0,-97 -11,-86 86,-86l0 -109c0,-29 46,-29 46,0l0 109 51 0 0 -109c0,-29 45,-29 45,0l0 109 51 0 0 -109c0,-29 46,-29 46,0l0 109c97,0 86,-11 86,86l109 0c29,0 29,46 0,46l-109 0 0 51 109 0c29,0 29,45 0,45l-109 0 0 52 109 0c29,0 29,45 0,45l-109 0 0 63c0,13 -10,23 -23,23zm-342 -45l320 0 0 -320 -320 0 0 320zm242 -55l-165 0c-12,0 -23,-10 -23,-23l0 -165c0,-12 11,-22 23,-22l165 0c13,0 23,10 23,22l0 165c0,13 -10,23 -23,23zm-142 -46l119 0 0 -119 -119 0 0 119z"
                    id="id_101"
                    style="fill: rgb(255, 255, 255);"
                  ></path>
                  <polygon
                    class="fil1"
                    points="1200,959 1081,959 1081,1078 1200,1078 "
                    id="id_102"
                    style="fill: rgb(255, 255, 255);"
                  ></polygon>
                  <path
                    class="fil1"
                    d="M1246 936l0 165c0,13 -10,23 -23,23l-165 0c-12,0 -23,-10 -23,-23l0 -165c0,-12 11,-22 23,-22l165 0c13,0 23,10 23,22zm55 -77l-320 0 0 320 320 0 0 -320z"
                    id="id_103"
                    style="fill: rgb(255, 255, 255);"
                  ></path>
                  <path
                    class="fil1"
                    d="M733 1234c28,0 28,-43 0,-43 -28,0 -28,43 0,43z"
                    id="id_104"
                    style="fill: rgb(255, 255, 255);"
                  ></path>
                  <path
                    class="fil1"
                    d="M487 1088c28,0 29,-43 1,-43 -28,0 -28,42 -1,43z"
                    id="id_105"
                    style="fill: rgb(255, 255, 255);"
                  ></path>
                  <path
                    class="fil1"
                    d="M242 1234c29,0 29,-43 0,-43 -28,0 -28,43 0,43z"
                    id="id_106"
                    style="fill: rgb(255, 255, 255);"
                  ></path>
                  <polygon
                    class="fil1"
                    points="592,1390 384,1390 384,1504 592,1504 "
                    id="id_107"
                    style="fill: rgb(255, 255, 255);"
                  ></polygon>
                  <path
                    class="fil1"
                    d="M1196 1549l0 112 26 0c0,-21 -8,-65 23,-65 30,0 22,44 22,65l22 0c0,-21 -8,-65 23,-65 30,0 23,44 23,65l22 0c0,-21 -8,-65 22,-65 31,0 23,44 23,65l26 0 0 -112 -232 0z"
                    id="id_108"
                    style="fill: rgb(255, 255, 255);"
                  ></path>
                  <polygon
                    class="fil1"
                    points="963,1611 963,1549 813,1549 813,1611 "
                    id="id_109"
                    style="fill: rgb(255, 255, 255);"
                  ></polygon>
                  <polygon
                    class="fil1"
                    points="1025,236 1350,236 1350,190 1025,190 "
                    id="id_110"
                    style="fill: rgb(255, 255, 255);"
                  ></polygon>
                  <polygon
                    class="fil1"
                    points="1350,399 1025,399 1025,420 1025,445 1350,445 "
                    id="id_111"
                    style="fill: rgb(255, 255, 255);"
                  ></polygon>
                  <path
                    class="fil1"
                    d="M580 492l0 -302 -302 0 0 302 302 0zm-67 -218l-169 0c-29,0 -29,-45 0,-45l169 0c30,0 30,45 0,45zm-169 44l169 0c30,0 30,46 0,46l-169 0c-29,0 -29,-46 0,-46zm0 90l169 0c30,0 30,45 0,45l-169 0c-29,0 -29,-45 0,-45z"
                    id="id_112"
                    style="fill: rgb(255, 255, 255);"
                  ></path>
                </g>
              </svg>
              <p> Motherboard</p>
              <p class="features__desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                deserunt iste accusamus corporis esse ullam omnis, rerum sequi
                eaque nemo quasi ut tempore id quidem reiciendis ex architecto
                quo! Iure!
              </p>
            </div>

            <button onClick$={() => (state.feature4 = !state.feature4)}>
              Discover
            </button>
            {state.feature4 && (
              <div class="features__description">
                <h4>SSD or HDD</h4>
                <p>
                  The hard drive is where your software, documents, and other
                  files are stored. The hard drive is long-term storage, which
                  means the data is still saved even if you turn the computer
                  off or unplug it. When you run a program or open a file, the
                  computer copies some of the data from the hard drive onto the
                  RAM.
                </p>
              </div>
            )}
          </div>

          <div class="features_6 features__item">
            <div class="features__title">
              <img src="/icons/case-icon.png" alt="" class="icon" />
              <p> Case</p>
              <p class="features__desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                deserunt iste accusamus corporis esse ullam omnis, rerum sequi
                eaque nemo quasi ut tempore id quidem reiciendis ex architecto
                quo! Iure!
              </p>
            </div>

            <button onClick$={() => (state.feature4 = !state.feature4)}>
              Discover
            </button>
            {state.feature4 && (
              <div class="features__description">
                <h4>SSD or HDD</h4>
                <p>
                  The hard drive is where your software, documents, and other
                  files are stored. The hard drive is long-term storage, which
                  means the data is still saved even if you turn the computer
                  off or unplug it. When you run a program or open a file, the
                  computer copies some of the data from the hard drive onto the
                  RAM.
                </p>
              </div>
            )}
          </div>

          <div class="features_7 features__item">
            <div class="features__title">
              <img src="/icons/ram-icon.png" alt="" class="icon" />

              <p> RAM</p>
              <p class="features__desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                deserunt iste accusamus corporis esse ullam omnis, rerum sequi
                eaque nemo quasi ut tempore id quidem reiciendis ex architecto
                quo! Iure!
              </p>
            </div>

            <button onClick$={() => (state.feature4 = !state.feature4)}>
              Discover
            </button>
            {state.feature4 && (
              <div class="features__description">
                <h4>SSD or HDD</h4>
                <p>
                  The hard drive is where your software, documents, and other
                  files are stored. The hard drive is long-term storage, which
                  means the data is still saved even if you turn the computer
                  off or unplug it. When you run a program or open a file, the
                  computer copies some of the data from the hard drive onto the
                  RAM.
                </p>
              </div>
            )}
          </div>

          <img src="/images/features.png" alt="cpu image" class="featuresImg" />
        </div>
      </div>
    </div>
  );
});
