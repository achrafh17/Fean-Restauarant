const ButtonCarousselOne = document.querySelector("#caroussel-button-one");
const ButtonCarousselTwo = document.querySelector("#caroussel-button-two");
const ButtonCarousselThree = document.querySelector("#caroussel-button-three");
const HomeBg = document.querySelector("#home-section");

ButtonCarousselOne.addEventListener("click", () => {
  HomeBg.style.backgroundImage = "url('Images/hero-bg.jpg')";
});
ButtonCarousselTwo.addEventListener("click", () => {
  HomeBg.style.backgroundImage = "url('Images/f1.jpg')";
});
ButtonCarousselThree.addEventListener("click", () => {
  HomeBg.style.backgroundImage = "url('Images/f2.jpg')";
});
/**--------------------------------------------------------- */
const All = document.querySelector("#menu-all");
const MenuBurger = document.querySelector("#menu-burger");
const MenuPizas = document.querySelector("#menu-pizas");
const MenuPasta = document.querySelector("#menu-pasta");
const MenuFries = document.querySelector("#menu-fries");

/**----------Burgers----------------- */
const classicBurger = document.querySelector("#classic-burger");
const chikenBurger = document.querySelector("#chiken-burger");
const GardenBurger = document.querySelector("#garden-burger");
/**---------pasta------------------------------------------ */
const primivaeraPasta = document.querySelector("#primivaera-pasta");
const classicPasta = document.querySelector("#classic-pasta");
//**---------pizzas--------------------------------------------------- */
const deluxPizzas = document.querySelector("#delux-pizzas");
const pizzasMargharita = document.querySelector("#pizzas-margharita");
const vegetarianPizzas = document.querySelector("#vegetarian-pizzas");
//------------Fries----------------------------------------------
const Fries = document.querySelector("#fries");

All.addEventListener("click", () => {
  primivaeraPasta.style.display = "flex";
  classicPasta.style.display = "flex";
  deluxPizzas.style.display = "flex";
  pizzasMargharita.style.display = "flex";
  vegetarianPizzas.style.display = "flex";
  Fries.style.display = "flex";
  classicBurger.style.display = "flex";
  chikenBurger.style.display = "flex";
  GardenBurger.style.display = "flex";
  Fries.style.width = "";
  GardenBurger.style.opacity = "1";
});

MenuBurger.addEventListener("click", () => {
  primivaeraPasta.style.display = "none";
  classicPasta.style.display = "none";
  deluxPizzas.style.display = "none";
  pizzasMargharita.style.display = "none";
  vegetarianPizzas.style.display = "none";
  Fries.style.display = "none";
  classicBurger.style.display = "flex";
  chikenBurger.style.display = "flex";
  GardenBurger.style.display = "flex";
  GardenBurger.style.opacity = "1";
});
MenuPizas.addEventListener("click", () => {
  primivaeraPasta.style.display = "none";
  classicPasta.style.display = "none";
  deluxPizzas.style.display = "flex";
  pizzasMargharita.style.display = "flex";
  vegetarianPizzas.style.display = "flex";
  Fries.style.display = "none";
  classicBurger.style.display = "none";
  chikenBurger.style.display = "none";
  GardenBurger.style.display = "flex";
  GardenBurger.style.opacity = "1";
});
MenuPasta.addEventListener("click", () => {
  GardenBurger.style.opacity = "0";
  vegetarianPizzas.style.display = "none";
  deluxPizzas.style.display = "none";
  pizzasMargharita.style.display = "none";
  Fries.style.display = "none";
  primivaeraPasta.style.display = "flex";
  classicPasta.style.display = "flex";
  classicBurger.style.display = "none";
  chikenBurger.style.display = "none";
  GardenBurger.style.opacity = "0";
});
MenuFries.addEventListener("click", () => {
  vegetarianPizzas.style.display = "none";
  deluxPizzas.style.display = "none";
  pizzasMargharita.style.display = "none";
  primivaeraPasta.style.display = "none";
  classicPasta.style.display = "none";
  classicBurger.style.display = "none";
  chikenBurger.style.display = "none";
  GardenBurger.style.display = "flex";
  Fries.style.display = "flex";
  Fries.style.width = "66%";
  GardenBurger.style.opacity = "0";
});

//--------------------------------------------------------------------------
let index = 0;
const numberArticle=document.querySelector(".number-arctil");
classicBurger.addEventListener("click", () => {
  index++;
  numberArticle.textContent=`${index}`;
});
chikenBurger.addEventListener("click", () => {
    index++;
    numberArticle.textContent=`${index}`;
  });
  GardenBurger.addEventListener("click", () => {
    index++;
    numberArticle.textContent=`${index}`;
  });
  primivaeraPasta.addEventListener("click", () => {
    index++;
    numberArticle.textContent=`${index}`;
  });
  deluxPizzas.addEventListener("click", () => {
    index++;
    numberArticle.textContent=`${index}`;
  });
  classicPasta.addEventListener("click", () => {
    index++;
    numberArticle.textContent=`${index}`;
  });
  pizzasMargharita.addEventListener("click", () => {
    index++;
    numberArticle.textContent=`${index}`;
  });
  vegetarianPizzas.addEventListener("click", () => {
    index++;
    numberArticle.textContent=`${index}`;
  });
  Fries.addEventListener("click", () => {
    index++;
    numberArticle.textContent=`${index}`;
  });
