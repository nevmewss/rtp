(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
document.addEventListener("DOMContentLoaded", () => {
  const readyBlock = document.querySelector(".ready");
  const fightBlock = document.querySelector(".fight");
  const outBlock = document.querySelector(".out");
  const question1Block = document.querySelector(".q_1");
  const question2Block = document.querySelector(".q_2");
  const question3Block = document.querySelector(".q_3");
  const claimBlock = document.querySelector(".claim");
  const cornerBlock = document.querySelector(".corner");
  const linksBlock = document.querySelector(".links-page");
  const predictBlock = document.querySelector(".predict");
  const storeBlock = document.querySelector(".store");
  const cardBlock = document.querySelector(".card");
  const formBlock = document.querySelector(".form");
  const logo = readyBlock.querySelector(".ready__logo");
  const title = readyBlock.querySelector(".ready__title");
  const subtitle = readyBlock.querySelector(".ready__subtitle");
  const info = readyBlock.querySelector(".ready__info");
  const button = readyBlock.querySelector(".ready__button");
  const claimButton = document.querySelector(".claim__button");
  const cornerButtons = document.querySelectorAll(".corner__button");
  const predictButton = document.querySelector(".predict__button");
  const storeButton = document.querySelector(".store__button");
  const cardButton = document.querySelector(".card__button");
  const fightButtons = fightBlock.querySelectorAll(".fight__button");
  const outButton = outBlock.querySelector(".out__button");
  const question1Buttons = question1Block.querySelectorAll(".q_1--btn");
  const question2Buttons = question2Block.querySelectorAll(".q_2--btn");
  const question3Buttons = question3Block.querySelectorAll(".q_3--btn");
  readyBlock.classList.remove("hidden");
  readyBlock.classList.add("active");
  logo.classList.add("--visible");
  title.classList.add("--visible");
  subtitle.classList.add("--visible");
  info.classList.add("--visible");
  button.classList.add("--visible");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    readyBlock.classList.remove("active");
    readyBlock.classList.add("hidden");
    fightBlock.classList.remove("hidden");
    fightBlock.classList.add("active");
  });
  fightButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      fightBlock.classList.remove("active");
      fightBlock.classList.add("hidden");
      outBlock.classList.remove("hidden");
      outBlock.classList.add("active");
    });
  });
  outButton.addEventListener("click", (e) => {
    e.preventDefault();
    outBlock.classList.remove("active");
    outBlock.classList.add("hidden");
    question1Block.classList.remove("hidden");
    question1Block.classList.add("active");
  });
  question1Buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      question1Block.classList.remove("active");
      question1Block.classList.add("hidden");
      question2Block.classList.remove("hidden");
      question2Block.classList.add("active");
    });
  });
  question2Buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      question2Block.classList.remove("active");
      question2Block.classList.add("hidden");
      question3Block.classList.remove("hidden");
      question3Block.classList.add("active");
    });
  });
  question3Buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      question3Block.classList.remove("active");
      question3Block.classList.add("hidden");
      claimBlock.classList.remove("hidden");
      claimBlock.classList.add("active");
    });
  });
  claimButton.addEventListener("click", (e) => {
    e.preventDefault();
    claimBlock.classList.remove("active");
    claimBlock.classList.add("hidden");
    cornerBlock.classList.remove("hidden");
    cornerBlock.classList.add("active");
  });
  cornerButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      cornerBlock.classList.remove("active");
      cornerBlock.classList.add("hidden");
      linksBlock.classList.remove("hidden");
      linksBlock.classList.add("active");
    });
  });
  predictButton.addEventListener("click", (e) => {
    e.preventDefault();
    predictBlock.classList.remove("active");
    predictBlock.classList.add("hidden");
    storeBlock.classList.remove("hidden");
    storeBlock.classList.add("active");
  });
  storeButton.addEventListener("click", (e) => {
    e.preventDefault();
    storeBlock.classList.remove("active");
    storeBlock.classList.add("hidden");
    cardBlock.classList.remove("hidden");
    cardBlock.classList.add("active");
  });
  cardButton.addEventListener("click", (e) => {
    e.preventDefault();
    cardBlock.classList.remove("active");
    cardBlock.classList.add("hidden");
    formBlock.classList.remove("hidden");
    formBlock.classList.add("active");
  });
});
