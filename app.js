const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 1300,
    colors: [
      {
        code: "black",
        img: "IMAGE 1.png",
      },
      {
        code: "white",
        img: "IMAGE 1.1.png",
      },
    ],
  },{
    id: 2,
    title: "Air Jordan",
    price: 1750,
    colors: [
      {
        code: "red",
        img: "IMAGE2.png",
      },
      {
        code: "black",
        img: "IMAGE2.1.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 2000,
    colors: [
      {
        code: "blue",
        img: "IMAGE 3.png",
      },
      {
        code: "yellow",
        img: "IMAGE 3.1.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 2400,
    colors: [
      {
        code: "white",
        img: "IMAGE4.png",
      },
      {
        code: "black",
        img: "IMAGE4.1.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 2500,
    colors: [
      {
        code: "brown",
        img: "IMAGE5.png",
      },
      {
        code: "black",
        img: "IMAGE5.1.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs." + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});