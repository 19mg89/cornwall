{
    const welcome = () => {
        console.log("Moje uszanowanie!");
    }

    const OnChangeBackgroundClick = () => {
        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    }

    let description1 = document.querySelector(".description1");
    let description2 = document.querySelector(".description2");
    let description3 = document.querySelector(".description3");
    let button1 = document.querySelector(".button1");

    button1.addEventListener("click", () => {
        description1.remove()
        description2.remove()
        description3.remove()
    });

    let body = document.querySelector(".body");
    let button2 = document.querySelector(".button2");
    let themeName = document.querySelector(".themeName");

    button2.addEventListener("click", OnChangeBackgroundClick);
}
