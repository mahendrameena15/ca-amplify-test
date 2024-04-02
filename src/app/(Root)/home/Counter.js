"use client";
import React, { useState, useEffect } from "react";
import $ from "jquery";

function Counter() {
  const Counter = ({ title, maxCount }) => {
    const [count, setCount] = useState(0);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
      function inVisible() {
        const windowTop = window.scrollY;
        const windowBottom = windowTop + window.innerHeight;
        const element = document.getElementById(title);

        if (element) {
          const elementTop = element.getBoundingClientRect().top + windowTop;
          const elementBottom = elementTop + element.clientHeight;

          if (elementBottom <= windowBottom && elementTop >= windowTop) {
            animate();
          }
        }
      }

      function animate() {
        if (!animated) {
          setAnimated(true);
          $({ countNum: 0 }).animate(
            { countNum: maxCount },
            {
              duration: 5000,
              easing: "linear",
              step: function () {
                setCount(Math.floor(this.countNum));
              },
            }
          );
        }
      }

      window.addEventListener("scroll", inVisible);
      return () => {
        window.removeEventListener("scroll", inVisible);
      };
    }, [animated, maxCount, title]);

    return (
      <div className="text">
        <strong className="number" id={title}>
          {` ${count}+`}
        </strong>
      </div>
    );
  };
  return (
    <>
      <section
        className="ftco-counter bg-light ftco-no-pt ftco-no-pb-20"
        id="section-counter"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2 col-lg-2 d-flex justify-content-center counter-wrap ">
              <div className="block-18 text-center">
                <Counter title="Experienced" maxCount={31} />
                <div className="text">
                  <span>Years of Experience </span>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-8 d-flex justify-content-center counter-wrap ">
              <div className="txt" id="txt">
                <b>C</b>
                <b>H</b>
                <b>A</b>
                <b>R</b>
                <b>T</b>
                <b>E</b>
                <b>R</b>
                <b>E</b>
                <b>D</b>
                &nbsp;
                <b>A</b>
                <b>C</b>
                <b>C</b>
                <b>O</b>
                <b>U</b>
                <b>N</b>
                <b>T</b>
                <b>A</b>
                <b>N</b>
                <b>T</b>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 d-flex justify-content-center counter-wrap ">
              <div className="block-18 text-center">
                <Counter title="Consultant" maxCount={101} />
                <div className="text">
                  <span>
                    Cases <br /> Solved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Counter;
