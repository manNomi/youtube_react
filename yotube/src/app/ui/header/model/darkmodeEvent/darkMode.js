const setDark = (event) => {
  if (event.target.checked == true) {
    document.querySelectorAll("*").forEach((ele) => {
      ele.classList.add("dark");
      ele.classList.remove("white");
    });
    document.querySelectorAll(".svg").forEach((ele) => {
      ele.classList.remove("dark");
      ele.classList.add("dark_svg");
    });
    document.querySelectorAll("p").forEach((ele) => {
      ele.classList.remove("dark");
    });
    document.querySelectorAll("img").forEach((ele) => {
      ele.classList.remove("dark");
    });

    document.querySelector(".header").style.backgroundColor = "black";
  } else {
    document.querySelectorAll("*").forEach((ele) => {
      ele.classList.add("white");
      ele.classList.remove("dark");
    });
    document.querySelectorAll(".svg").forEach((ele) => {
      ele.classList.remove("dark_svg");
      ele.classList.remove("white");
    });
    document.querySelectorAll("p").forEach((ele) => {
      ele.classList.remove("white");
    });
    document.querySelectorAll("img").forEach((ele) => {
      ele.classList.remove("white");
    });
    document.querySelector(".header").style.backgroundColor = "white";
  }
};
