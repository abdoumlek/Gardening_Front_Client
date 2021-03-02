import React from "react";

export default function Loader() {
  return (
    <div>
      <div
        className="animation-container d-inline"
        style={{ width: 100, height: 100 }}
      >
        <svg
          style={{ margin: "auto", background: "#fff", display: "block" }}
          width="100px"
          height="100px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="translate(50,50) scale(1) translate(-50,-50)">
            <g transform="rotate(24.0667 50 50)">
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 50 50;90 50 50"
                dur="1s"
                repeatCount="indefinite"
              ></animateTransform>
              <path
                d="M44.6,20.6c2.6,4.4,7,7.1,11.7,7.7c1.9-4.4,1.7-9.5-0.8-14c-2.6-4.4-7-7.1-11.7-7.7C41.9,11,42,16.2,44.6,20.6z"
                fill="#e15b64"
                transform="rotate(0 50 50)"
              >
                <animate
                  attributeName="fill"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;0.33;0.66;1"
                  values="#e15b64;#f47e60;#f8b26a;#abbd81"
                  begin="0s"
                ></animate>
              </path>
              <path
                d="M44.6,20.6c2.6,4.4,7,7.1,11.7,7.7c1.9-4.4,1.7-9.5-0.8-14c-2.6-4.4-7-7.1-11.7-7.7C41.9,11,42,16.2,44.6,20.6z"
                fill="#f47e60"
                transform="rotate(30 50 50)"
              >
                <animate
                  attributeName="fill"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;0.33;0.66;1"
                  values="#f47e60;#f8b26a;#abbd81;#e15b64"
                  begin="0s"
                ></animate>
              </path>
              <path
                d="M44.6,20.6c2.6,4.4,7,7.1,11.7,7.7c1.9-4.4,1.7-9.5-0.8-14c-2.6-4.4-7-7.1-11.7-7.7C41.9,11,42,16.2,44.6,20.6z"
                fill="#f8b26a"
                transform="rotate(60 50 50)"
              >
                <animate
                  attributeName="fill"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;0.33;0.66;1"
                  values="#f8b26a;#abbd81;#e15b64;#f47e60"
                  begin="0s"
                ></animate>
              </path>
              <path
                d="M44.6,20.6c2.6,4.4,7,7.1,11.7,7.7c1.9-4.4,1.7-9.5-0.8-14c-2.6-4.4-7-7.1-11.7-7.7C41.9,11,42,16.2,44.6,20.6z"
                fill="#abbd81"
                transform="rotate(90 50 50)"
              >
                <animate
                  attributeName="fill"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;0.33;0.66;1"
                  values="#abbd81;#e15b64;#f47e60;#f8b26a"
                  begin="0s"
                ></animate>
              </path>
              <path
                d="M44.6,20.6c2.6,4.4,7,7.1,11.7,7.7c1.9-4.4,1.7-9.5-0.8-14c-2.6-4.4-7-7.1-11.7-7.7C41.9,11,42,16.2,44.6,20.6z"
                fill="#e15b64"
                transform="rotate(120 50 50)"
              >
                <animate
                  attributeName="fill"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;0.33;0.66;1"
                  values="#e15b64;#f47e60;#f8b26a;#abbd81"
                  begin="0s"
                ></animate>
              </path>
              <path
                d="M44.6,20.6c2.6,4.4,7,7.1,11.7,7.7c1.9-4.4,1.7-9.5-0.8-14c-2.6-4.4-7-7.1-11.7-7.7C41.9,11,42,16.2,44.6,20.6z"
                fill="#f47e60"
                transform="rotate(150 50 50)"
              >
                <animate
                  attributeName="fill"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;0.33;0.66;1"
                  values="#f47e60;#f8b26a;#abbd81;#e15b64"
                  begin="0s"
                ></animate>
              </path>
              <path
                d="M44.6,20.6c2.6,4.4,7,7.1,11.7,7.7c1.9-4.4,1.7-9.5-0.8-14c-2.6-4.4-7-7.1-11.7-7.7C41.9,11,42,16.2,44.6,20.6z"
                fill="#f8b26a"
                transform="rotate(180 50 50)"
              >
                <animate
                  attributeName="fill"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;0.33;0.66;1"
                  values="#f8b26a;#abbd81;#e15b64;#f47e60"
                  begin="0s"
                ></animate>
              </path>
              <path
                d="M44.6,20.6c2.6,4.4,7,7.1,11.7,7.7c1.9-4.4,1.7-9.5-0.8-14c-2.6-4.4-7-7.1-11.7-7.7C41.9,11,42,16.2,44.6,20.6z"
                fill="#abbd81"
                transform="rotate(210 50 50)"
              >
                <animate
                  attributeName="fill"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;0.33;0.66;1"
                  values="#abbd81;#e15b64;#f47e60;#f8b26a"
                  begin="0s"
                ></animate>
              </path>
              <path
                d="M44.6,20.6c2.6,4.4,7,7.1,11.7,7.7c1.9-4.4,1.7-9.5-0.8-14c-2.6-4.4-7-7.1-11.7-7.7C41.9,11,42,16.2,44.6,20.6z"
                fill="#e15b64"
                transform="rotate(240 50 50)"
              >
                <animate
                  attributeName="fill"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;0.33;0.66;1"
                  values="#e15b64;#f47e60;#f8b26a;#abbd81"
                  begin="0s"
                ></animate>
              </path>
              <path
                d="M44.6,20.6c2.6,4.4,7,7.1,11.7,7.7c1.9-4.4,1.7-9.5-0.8-14c-2.6-4.4-7-7.1-11.7-7.7C41.9,11,42,16.2,44.6,20.6z"
                fill="#f47e60"
                transform="rotate(270 50 50)"
              >
                <animate
                  attributeName="fill"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;0.33;0.66;1"
                  values="#f47e60;#f8b26a;#abbd81;#e15b64"
                  begin="0s"
                ></animate>
              </path>
              <path
                d="M44.6,20.6c2.6,4.4,7,7.1,11.7,7.7c1.9-4.4,1.7-9.5-0.8-14c-2.6-4.4-7-7.1-11.7-7.7C41.9,11,42,16.2,44.6,20.6z"
                fill="#f8b26a"
                transform="rotate(300 50 50)"
              >
                <animate
                  attributeName="fill"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;0.33;0.66;1"
                  values="#f8b26a;#abbd81;#e15b64;#f47e60"
                  begin="0s"
                ></animate>
              </path>
              <path
                d="M44.6,20.6c2.6,4.4,7,7.1,11.7,7.7c1.9-4.4,1.7-9.5-0.8-14c-2.6-4.4-7-7.1-11.7-7.7C41.9,11,42,16.2,44.6,20.6z"
                fill="#abbd81"
                transform="rotate(330 50 50)"
              >
                <animate
                  attributeName="fill"
                  repeatCount="indefinite"
                  dur="1s"
                  keyTimes="0;0.33;0.66;1"
                  values="#abbd81;#e15b64;#f47e60;#f8b26a"
                  begin="0s"
                ></animate>
              </path>
            </g>
          </g>
        </svg>
      </div>
      <p className="mt-3">Chargement en cours...</p>
    </div>
  );
}
