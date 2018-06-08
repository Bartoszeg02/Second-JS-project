    //test końca rundy + era
var label_current_age = document.querySelector(".current_age"),
    label_current_round = document.querySelector(".current_round"),
    button_end_of_round = document.querySelector("#end_of_round_img"),

    //testowanie funkcji zbierania surowców
    resource_wood = document.querySelector(".resource_wood"),
    resource_food = document.querySelector(".resource_food"),
    resource_gold = document.querySelector(".resource_gold"),
    resource_stone = document.querySelector(".resource_stone"),
    resource_peasants = document.querySelector(".resource_peasants"),

    wood_counter = document.querySelector(".wood"),
    food_counter = document.querySelector(".food"),
    gold_counter = document.querySelector(".gold"),
    stone_counter = document.querySelector(".stone"),
    peasants_counter = document.querySelector(".peasants");

//dzwięki 
var s_woodGathering = new Audio('sounds/peasant/somus.wav'),
    s_foodGathering = new Audio('sounds/peasant/zukantah.wav'),
    s_goldGathering = new Audio('sounds/peasant/ebertotty.wav'),
    s_stoneGathering = new Audio('sounds/peasant/ebertotty.wav');


//---------------Objects
var players_resources = {
    wood: 200,
    food: 200,
    gold: 0,
    stone: 0,
    peasant: 3,
    avaliablePeasants: 30,
}

var peasantStats = {
    woodGathering: 20,
    foodGathering: {
        fruitsGathering: 16,
        hunting: 24,
        farming: 20,
    },
    goldMining: 20,
    stoneMining: 20,
}

//--------------Funkcja-test-zbieranie-surowców
///jak dodać że po kliknięciu tylko w diva o klasie map_resources???
document.body.onclick = function (event) {
    var clickedObject = event.target;

    if (players_resources.avaliablePeasants < 1) {
        return console.log("brak wolnych chłopów");
    }

    switch (clickedObject) {

        case resource_wood:
            console.log("drewno");
            soundEffect(s_woodGathering);
            players_resources.wood = get_resources(players_resources.wood, peasantStats.woodGathering);
            wood_counter.innerHTML = players_resources.wood;
            console.log(players_resources.wood);
            break;

        case resource_food:
            console.log("jedzenie");
            soundEffect(s_foodGathering);
            players_resources.food = get_resources(players_resources.food, peasantStats.foodGathering.fruitsGathering);
            food_counter.innerHTML = players_resources.food;
            console.log(players_resources.food);
            break;

        case resource_gold:
            console.log("złoto");
            soundEffect(s_goldGathering);
            players_resources.gold = get_resources(players_resources.gold, peasantStats.goldMining);
            gold_counter.innerHTML = players_resources.gold;
            console.log(players_resources.gold);
            break;

        case resource_stone:
            console.log("kamień");
            soundEffect(s_stoneGathering);
            players_resources.stone = get_resources(players_resources.stone, peasantStats.stoneMining);
            stone_counter.innerHTML = players_resources.stone;
            console.log(players_resources.stone);
            break;

        default: 
            return;
    }
    players_resources.avaliablePeasants--;
    peasants_counter.innerHTML = players_resources.avaliablePeasants;
}

// Zwiększa liczbę zasobów gracza (wartość obiektu nie tą wyświetlaną)
function get_resources(resource, gathering) {
    resource = resource + gathering;
    return resource;
}

function soundEffect(sound){
    sound.play();
}
















// document.body.onclick = function(event) {
//     var clickedObject = event.target,
//         resource,
//         resource_counter;

//     switch(clickedObject) {

//         case resource_wood : 
//             console.log("drewno");
//             resources = players_resources.wood;
//             resource_counter = wood_counter;
//             res='wood'
//             get_resources(resources, resource_counter, res);
//             break;

//         default : 
//             console.log("kotek");

//     }
// }
//     ///dlaczego tu nie działał x = player_resource.resource gdzie resource="wood"
//     // var x = resource;
//     /// nie działa a jeżeli na początku dam players_resources.wood to działa ???
//     // resources = resource + 25;
//     // resources = players_resources.wood + 25;
//     ////bo resources to liczba - pytanie jak sie odwołaś do zasobu ale nie jako liczby tylko żeby go nadpisywać
//     function get_resources(resources, resource_counter, res) {

//         resources = resources + 25;
//         console.log(players_resources.wood);
//         // var x = resources


//         // resource_counter.innerHTML = 

//         // players_resources.resource = players_resources.resource + 25;
//     }