const grid = document.querySelector(".grid");

// getting pokemon info for the cards
class pokemon {
    constructor(top, pic, ability,power) {
   
        this.top = top;
        this.pic = pic;
        this.ability = ability;
        this.power = power;
        
    }
}
// creating the pokemon card info
const p0 = new pokemon('<div class="top"> <h4 class ="lv">basic</h2>  <h3 class="name">magmar</h3> </div>'
    , '<img class="middle" src=" pic/p0.jpg" />',
    '<h4> . destroy strongest pokemon ur opp has on the field<h4/>'
    , '<h2 class="power">6<h2>');
const p1 = new pokemon('<div class="top"> <h4 class ="lv">basic</h2>  <h3 class="name">lapras</h3> </div>'
    , '<img class="middle" src=" pic/p1.jpg" />',
    '<h4> . bring a spell from the graveyard<h4/>'
    , '<h2 class="power">6<h2>');
const p2 = new pokemon('<div class="top"> <h4 class ="lv">basic</h2>  <h3 class="name">elictricbuzz</h3> </div>'
    , '<img class="middle" src=" pic/p2.jpg" />',
    '<h4> . fights a water pokemon <h4/>'
    , '<h2 class="power">6<h2>');
const p3 = new pokemon('<div class="top"> <h4 class ="lv">basic</h2>  <h3 class="name">didle</h3> </div>'
    , '<img class="middle" src=" pic/p3.jpg" />',
    '<h4> . copy a pokemon on your side of the field<h4/>'
    , '<h2 class="power">0<h2>');
const p4 = new pokemon('<div class="top"> <h4 class ="lv">basic</h2>  <h3 class="name">smergle</h3> </div>'
    , '<img class="middle" src=" pic/p4.jpg" />',
    '<h4> . use a pokemon ability as your own<h4/>'
    , '<h2 class="power">1<h2>');
const p5 = new pokemon('<div class="top"> <h4 class ="lv">basic</h2>  <h3 class="name">chancie</h3> </div>'
    , '<img class="middle" src=" pic/p5.jpg" />',
    '<h4> . bring a pokemon from the graveyard<h4/>'
    , '<h2 class="power">1<h2>');
const p6 = new pokemon('<div class="top"> <h4 class ="lv">basic</h2>  <h3 class="name">blissey</h3> </div>'
    , '<img class="middle" src=" pic/p6.jpg" />',
    '<h4> . any pokemn thats not pink and is killed is brought back as pink<h4/>'
    , '<h2 class="power">1<h2>');
const p7 = new pokemon('<div class="top"> <h4 class ="lv">basic</h2>  <h3 class="name">milktank</h3> </div>'
    , '<img class="middle" src=" pic/p7.jpg" />',
    '<h4> . fight pokemon on opp side of the field <h4/>'
    , '<h2 class="power">5<h2>');
const p8 = new pokemon('<div class="top"> <h4 class ="lv">basic</h2>  <h3 class="name">frostglass</h3> </div>'
    , '<img class="middle" src=" pic/p8.jpg" />',
    '<h4> . frost glass goes to opponet side of the fild , draw 2 cards <h4/>'
    , '<h2 class="power">3<h2>');
const p9 = new pokemon('<div class="top"> <img class="evo" src="pic/p16.jpg"/> <h3 class="name">gloom</h3> </div>'
    , '<img class="middle" src=" pic/p9.jpg" />',
    '<h4> <h4/>'
    , '<h2 class="power">3<h2>');
const p10 = new pokemon('<div class="top"> <h4 class ="lv">basic</h2>  <h3 class="name">dennie</h3> </div>'
    , '<img class="middle" src=" pic/p10.jpg" />',
    '<h4> . find a pokemon in your deck with 3 or less power <h4/>'
    , '<h2 class="power">2<h2>');
const p11 = new pokemon('<div class="top"> <img class="evo" src="pic/p15.jpg"/> <h3 class="name">growthie</h3> </div>'
    , '<img class="middle" src=" pic/p11.jpg" />',
    '<h4> <h4/>'
    , '<h2 class="power">4<h2>');
const p12 = new pokemon('<div class="top"> <img class="evo" src="pic/p13.jpg"/> <h3 class="name">charmander</h3> </div>'
    , '<img class="middle" src=" pic/p12.jpg" />',
    '<h4> <h4/>'
    , '<h2 class="power">3<h2>');
const p13 = new pokemon('<div class="top"> <img class="evo" src="pic/p14.jpg"/> <h3 class="name">charmilian</h3> </div>'
    , '<img class="middle" src=" pic/p13.jpg" />',
    '<h4>. draw 2 cards and send one to the graveyard<h4/>'
    , '<h2 class="power">5<h2>');
const p14 = new pokemon('<div class="top"> <h4 class ="lv">3rd</h2>  <h3 class="name">charazard</h3> </div>'
    , '<img class="middle" src=" pic/p14.jpg" />',
    '<h4> . everytime you summond a pokemon deal that much damage to your opponet pokemon <h4/>'
    , '<h2 class="power">10<h2>');
const p15 = new pokemon('<div class="top"> <h4 class ="lv">2nd</h2>  <h3 class="name">aranine</h3> </div>'
    , '<img class="middle" src=" pic/p15.jpg" />',
    '<h4> . fight a pokemon on your opponet side of the field <h4/>'
    , '<h2 class="power">8<h2>');
const p16 = new pokemon('<div class="top"> <h4 class ="lv">2rd</h2>  <h3 class="name">vileplume</h3> </div>'
    , '<img class="middle" src=" pic/p16.jpg" />',
    '<h4> . bring the sun out and double this pokemon strengh <h4/>'
    , '<h2 class="power">8<h2>');
const p17 = new pokemon('<div class="top"> <h4 class ="lv">legareny</h2>  <h3 class="name">zapdose</h3> </div>'
    , '<img class="middle" src=" pic/p17.jpg" />',
    '<h4> . kill two cards to summond this card, this card cnt be targeted by abilitys or spells <h4/>'
    , '<h2 class="power">15<h2>');
const p18 = new pokemon('<div class="top"> <h4 class ="lv">spell</h2>  <h3 class="name">return</h3> </div>'
    , '<img class="middle" src=" pic/p18.jpg" />',
    '<h4> . bring a pokemon from the field back to your hand <h4/>'
    , '');
const p19 = new pokemon('<div class="top"> <h4 class ="lv">spell</h2>  <h3 class="name">basic finder</h3> </div>'
    , '<img class="middle" src=" pic/p19.jpg" />',
    '<h4> . get a basic pokemon from ur deck <h4/>'
    , '');
const p20 = new pokemon('<div class="top"> <h4 class ="lv">spell</h2>  <h3 class="name">battle</h3> </div>'
    , '<img class="middle" src=" pic/p20.jpg" />',
    '<h4> . fight a pokemon on the opponet side of the field <h4/>'
    , '');
const p21 = new pokemon('<div class="top"> <h4 class ="lv">spell</h2>  <h3 class="name"> sun</h3> </div>'
    , '<img class="middle" src=" pic/p21.jpg" />',
    '<h4> . all fire pokemon ge double the power <h4/>'
    , '');
const p22 = new pokemon('<div class="top"> <h4 class ="lv">spell</h2>  <h3 class="name">max health</h3> </div>'
    , '<img class="middle" src=" pic/p22.jpg" />',
    '<h4> . bring a pokemon back from the graveyard <h4/>'
    , '');
const p23 = new pokemon('<div class="top"> <h4 class ="lv">spell</h2>  <h3 class="name">team rocket</h3> </div>'
    , '<img class="middle" src=" pic/p23.jpg" />',
    '<h4> . get a pokemon from ur opp grave a place it in your hand <h4/>'
    , '');

// looping through the cards
for (let i = 0; i <= 23; i++) {
    switch (i) {
        case 0:
            const card = document.createElement("div");
            card.setAttribute("class", "red");
            grid.appendChild(card);
            card.innerHTML = p0.top+ p0.pic + p0.ability + p0.power;
            break;
        case 1:
            const card1 = document.createElement("div");
            card1.setAttribute("class", "blue");
            grid.appendChild(card1);
            card1.innerHTML = p1.top + p1.pic + p1.ability + p1.power;
            break;
        case 2:
           const card2 = document.createElement("div");
            card2.setAttribute("class", "yellow");
            grid.appendChild(card2);
            card2.innerHTML = p2.top + p2.pic + p2.ability + p2.power;
            break;
         case 3:
           const card3 = document.createElement("div");
            card3.setAttribute("class", "grey");
            grid.appendChild(card3);
            card3.innerHTML = p3.top + p3.pic + p3.ability + p3.power;
            break;
          case 4:
           const card4 = document.createElement("div");
            card4.setAttribute("class", "grey");
            grid.appendChild(card4);
            card4.innerHTML = p4.top + p4.pic + p4.ability + p4.power;
            break;
        case 5:
            const card5 = document.createElement("div");
            card5.setAttribute("class", "pink");
            grid.appendChild(card5);
            card5.innerHTML = p5.top + p5.pic + p5.ability + p5.power;
            break;
        case 6:
            const card6 = document.createElement("div");
            card6.setAttribute("class", "pink");
            grid.appendChild(card6);
            card6.innerHTML = p6.top + p6.pic + p6.ability + p6.power;
            break;
        case 7:
            const card7 = document.createElement("div");
            card7.setAttribute("class", "grey");
            grid.appendChild(card7);
            card7.innerHTML = p7.top + p7.pic + p7.ability + p7.power;
            break;
        case 8:
            const card8 = document.createElement("div");
            card8.setAttribute("class", "blue");
            grid.appendChild(card8);
            card8.innerHTML = p8.top + p8.pic + p8.ability + p8.power;
            break;
        case 9:
            const card9 = document.createElement("div");
            card9.setAttribute("class", "green");
            grid.appendChild(card9);
            card9.innerHTML = p9.top + p9.pic + p9.ability + p9.power;
            break;
        case 10:
            const card10 = document.createElement("div");
            card10.setAttribute("class", "yellow");
            grid.appendChild(card10);
            card10.innerHTML = p10.top + p10.pic + p10.ability + p10.power;
            break;
        case 11:
            const card11 = document.createElement("div");
            card11.setAttribute("class", "red");
            grid.appendChild(card11);
            card11.innerHTML = p11.top + p11.pic + p11.ability + p11.power;
            break;
        case 12:
            const card12 = document.createElement("div");
            card12.setAttribute("class", "red");
            grid.appendChild(card12);
            card12.innerHTML = p12.top + p12.pic + p12.ability + p12.power;
            break;
        case 13:
            const card13 = document.createElement("div");
            card13.setAttribute("class", "red");
            grid.appendChild(card13);
            card13.innerHTML = p13.top + p13.pic + p13.ability + p13.power;
            break;
        case 14:
            const card14 = document.createElement("div");
            card14.setAttribute("class", "red");
            grid.appendChild(card14);
            card14.innerHTML = p14.top + p14.pic + p14.ability + p14.power;
            break;
        case 15:
            const card15 = document.createElement("div");
            card15.setAttribute("class", "red");
            grid.appendChild(card15);
            card15.innerHTML = p15.top + p15.pic + p15.ability + p15.power;
            break;
        case 16:
            const card16 = document.createElement("div");
            card16.setAttribute("class", "green");
            grid.appendChild(card16);
            card16.innerHTML = p16.top + p16.pic + p16.ability + p16.power;
            break;
        case 17:
            const card17 = document.createElement("div");
            card17.setAttribute("class", "yellow");
            grid.appendChild(card17);
            card17.innerHTML = p17.top + p17.pic + p17.ability + p17.power;
            break;
        case 18:
            const card18 = document.createElement("div");
            card18.setAttribute("class", "spell");
            grid.appendChild(card18);
            card18.innerHTML = p18.top + p18.pic + p18.ability;
            break;
        case 19:
            const card19 = document.createElement("div");
            card19.setAttribute("class", "spell");
            grid.appendChild(card19);
            card19.innerHTML = p19.top + p19.pic + p19.ability;
            break;
        case 20:
            const card20 = document.createElement("div");
            card20.setAttribute("class", "spell");
            grid.appendChild(card20);
            card20.innerHTML = p20.top + p20.pic + p20.ability;
            break;
        case 21:
            const card21 = document.createElement("div");
            card21.setAttribute("class", "spell");
            grid.appendChild(card21);
            card21.innerHTML = p21.top + p21.pic + p21.ability;
            break;
        case 22:
            const card22 = document.createElement("div");
            card22.setAttribute("class", "spell");
            grid.appendChild(card22);
            card22.innerHTML = p22.top + p22.pic + p22.ability;
            break;
        case 23:
            const card23 = document.createElement("div");
            card23.setAttribute("class", "spell");
            grid.appendChild(card23);
            card23.innerHTML = p23.top + p23.pic + p23.ability;
            break;
        default:
            console.log("no card");
    }
}