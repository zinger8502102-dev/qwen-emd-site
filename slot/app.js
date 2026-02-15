const CONFIG = {
  title: "Слот The Dog House — 96,7% RTP, 6,750x Max Win",
  subtitle: "Играйте в демо или на реальные деньги с бесплатными вращениями и стикки-вайлдами от Pragmatic Play",
  demoUrl: "https://demo.pragmaticplay.com/game/131418",
  realUrl: "https://go.pragmaticplay.com/go/131418",
  rtp: "96,7%",
  maxWin: "6,750x",
  freeSpins: "до 27",
  features: [
    "Sticky Wilds",
    "Бесплатные вращения",
    "Мультипликаторы",
    "Уникальная тематика"
  ],
  faq: [
    {
      question: "Каковы характеристики слота The Dog House?",
      answer: "The Dog House — это слот от Pragmatic Play с 96,7% RTP, волатильностью средней, максимальным выигрышем 6,750x и возможностью до 27 бесплатных вращений."
    },
    {
      question: "Где можно сыграть в демо?",
      answer: "Демо-режим доступен по ссылке: https://demo.pragmaticplay.com/game/131418"
    },
    {
      question: "Как начать играть на реальные деньги?",
      answer: "Нажмите кнопку «Play for Real» для перехода на официальную площадку: https://go.pragmaticplay.com/go/131418"
    }
  ]
};

document.addEventListener("DOMContentLoaded", function () {
  const demoBtn = document.getElementById("demoBtn");
  const realBtn = document.getElementById("realBtn");
  const demoCover = document.getElementById("demoCover");
  const playButton = document.getElementById("playDemo");
  const iframe = document.getElementById("demoIframe");

  demoBtn.href = CONFIG.demoUrl;
  realBtn.href = CONFIG.realUrl;

  playButton.addEventListener("click", function () {
    iframe.style.display = "block";
    demoCover.style.display = "none";
  });

  const tocToggle = document.getElementById("tocToggle");
  const tocList = document.getElementById("tocList");
  let isTocVisible = false;

  tocToggle.addEventListener("click", function () {
    if (isTocVisible) {
      tocList.style.display = "none";
      tocToggle.textContent = "[Показать]";
    } else {
      tocList.style.display = "block";
      tocToggle.textContent = "[Скрыть]";
    }
    isTocVisible = !isTocVisible;
  });

  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach(header => {
    header.addEventListener("click", function () {
      const body = this.nextElementSibling;
      const isActive = body.classList.contains("active");

      document.querySelectorAll(".accordion-body").forEach(b => {
        b.classList.remove("active");
      });
      document.querySelectorAll(".accordion-header").forEach(h => {
        h.setAttribute("aria-expanded", "false");
      });

      if (!isActive) {
        body.classList.add("active");
        this.setAttribute("aria-expanded", "true");
      }
    });
  });
});