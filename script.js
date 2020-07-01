class NyanCat{
    constructor(){
        const nyan = ["/images/nyanCat.gif","/images/nyanCatGold.gif",
            "/images/nyanCatMexico.gif","/images/nyanCatPikachu.gif"]
        this.x = -800
        this.y = 0
        this.baseY = Math.random()*window.innerWidth
        this.speed = Math.random()*50
        this.image = document.createElement('img')
        this.image.src = nyan[Math.floor(Math.random()*4)]
        this.image.alt = 'Nyan Cat Random'
        document.querySelector('#cats').appendChild(this.image)
    }
    move(){
        this.x += this.speed
        this.y = this.baseY + Math.cos(this.x/.3)*20
        if(this.x- this.x/2 >= window.innerWidth){
            this.x = -800
        }
        this.image.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

}

function add(){
    let newEl = document.querySelector('#addCat')
        newEl.addEventListener('click', () => {
            cats.push(new NyanCat())
        });
}
