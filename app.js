
window.onload = () => {
    randomQoute();
}


function randomQoute(){
    const qoutes = [
        "Have nothing in your houses that you do not know to be useful, or believe to be beautiful. - William Morris",
        "All cruelty springs from weakness. - Seneca",
        "Nothing is more pathetic than people who run around in circles, 'delving into the things that lie beneath,' and conducting investigations into the souls of the people around them. - [[Marcus Aurelius]]",
        "You are under no obligation to remain the same person you were a year ago, a month ago, or even a day ago. You are here to create yourself, continuously.",
        "Never speak of yourself to others; make them talk about themselves instead; therein lies the whole art of pleasing. Everybody knows it, and everyone forgets it. - Edmond de Goncourt, 1822 - 1896",
    ];

    const result = document.getElementById("result");


    var index = Math.floor(Math.random() * qoutes.length);

    result.innerHTML = qoutes[index];

    console.log(index);
}

randomQoute();