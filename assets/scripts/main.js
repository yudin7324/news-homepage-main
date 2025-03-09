document.addEventListener("DOMContentLoaded", function() {
  const selectors = {
    NAV: ".js-nav",
    BURGER: ".js-burger-btn",
    CLOSE_BTN: ".js-close-menu",
    BACKDROP: ".js-backdrop",
  };
  const classes = {
    ACTIVE: "active",
  }

  const navigation = document.querySelector(selectors.NAV);
  const burger = document.querySelector(selectors.BURGER);

  if(!navigation || !burger) {
    return;
  }
 
  const backdrop = document.querySelector(selectors.BACKDROP);
  const closeBtn = navigation.querySelector(selectors.CLOSE_BTN);

  function toggleMenu() {
    if(navigation.classList.contains(classes.ACTIVE)) {
      navigation.classList.remove(classes.ACTIVE);
      backdrop.classList.remove(classes.ACTIVE);
    } else {
      navigation.classList.add(classes.ACTIVE);
      backdrop.classList.add(classes.ACTIVE);
    }
  }

  function closeMenu() {
    navigation.classList.remove(classes.ACTIVE);
    backdrop.classList.remove(classes.ACTIVE);
  }

  burger.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);
});
