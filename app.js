// JK TANIYA STORE
// Main JavaScript Application

"use strict";

document.addEventListener("DOMContentLoaded", function () {

  // Smooth navigation
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");

      if (targetId && targetId.length > 1) {
        const target = document.querySelector(targetId);

        if (target) {
          event.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });

  // Store configuration
  window.JKTaniyaStore = {
    name: "JK TANIYA STORE",
    currency: "BDT",
    cart: [],
    products: [],
    initialized: true
  };

  console.log("JK TANIYA STORE initialized successfully!");

});
