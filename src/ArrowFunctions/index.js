// old way
function display() {
    return 'Welcome!'
}

// new way
const welcome = () => 'Welcome!';


`
When don't use it?
- in objects as method
- do not connect with This, arguments, super or new.target
`
const article = {
    claps: 0,
    clap: () => {
        this.claps++
    },
    clap2: function() {
        this.claps++
    }
}

console.log(article) // claps: 0
article.clap()
console.log(article) // claps: 0 <- still 0
article.clap2()
console.log(article) // claps: 1

// Prototype of objects
 
class Article {
    constructor(title) {
        this.title = title;
        this.shared = false;
    }
}

Article.prototype.share = () => {
    return this.shared = true;
}

let newArticle = new Article('The best book')
newArticle.share();
console.log(newArticle) // false

Article.prototype.share2 = function() {
    return this.shared = true;
}

newArticle.share2()
console.log(newArticle) // True! :works!


// common example on event based js programing
let button = document.getElementById('go')
button.addEventListener('click', () => {
    this.classList.toggle('dynamically')
});

// simple fix to get an access to element context
button.addEventListener('click', (e) => {
    e.target.classList.toggle('dynamically')
});
