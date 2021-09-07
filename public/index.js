// Add an event listener to "change_background_button" that sets the home page's background to a random RGB color (not including the heading)

// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
document.getElementById("change_background_button").addEventListener("click", (e) => {

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const random_r = Math.random() * 255;
    const random_g = Math.random() * 255;
    const random_b = Math.random() * 255;

    console.log(`rgb(${random_r}, ${random_g}, ${random_b})`);

    //https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    document.getElementById("content_of_main_page").setAttribute(
        "style",
        `background-color: rgb(${random_r}, ${random_g}, ${random_b})`
    );

});
