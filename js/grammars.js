/**
 * @author Drew
 */

var outputFormat = "CBDQ";

//Fixme I don't work with single item lists because the english grammar is hard
function listOf(listName,items){
    return ["#"+items+"#, #"+listName+"#","#"+items+"# and #"+items+"#"];
}

//"[ingredients:#ingredients# artichoke]artichoke" for example. This appends an 
//ingredient to an ingredient list
function ingredient(items){
    for (var i = items.length - 1; i >= 0; i--) {
        items[i]="[ingredients:#ingredients#, "+items[i]+"]"+items[i]
    }
    //console.log(items);
    return items;
}

//FIXME only go through June
//FIXME I don't like the implementation of this
function inSeasonVegetables(){
    //for social distancing:
    return ["canned chickpeas", "dried chickpeas", "foraged mushrooms",
    "onions", "that vegetable in the back of the fridge", "potato", "cabbage", 
    "dried beans", "canned beans"]

    var Today = new Date();
    switch(Today.getMonth()){
        case 0:
            return ["beet","bok choy","broccoli","brussel sprouts",
            "cauliflower","chard","kale","leek","onion","radish","spinach"];
        case 1:
            return ["arugula","beet","bok choy","broccoli","cauliflower",
            "chard","kale","leek","onion","radish","spinach"];
        case 2:
            return ["artichoke","arugula","asparagus","beet","bok choy",
            "broccoli","cauliflower","chard","kale","leek",
            "onion"];
        case 3:
            return ["artichoke","arugula","asparagus","avacado","beet",
            "bok choy","carrot","cauliflower","chard",
            "kale","leek"];
        case 4:
            return ["artichoke","arugula","asparagus","avacado","beet",
            "cabbage","carrot","cauliflower","chard",
            "kale","leek"];
        case 5:
            return ["avacado","basil","cabbage","carrot","corn","leek",
            "summer squash","tomato"];
        case 6:
            return ["avacado","basil","corn","cucumber","eggplant","potato",
            "summer squash","tomato"];
        case 7:
            return ["whatever's in season in August"];
        case 8:
            return ["whatever's in season in September"];
        case 9:
            return ["whatever's in season in October"];
        case 10:
            return ["whatever's in season in November"];
        case 11:
            return ["whatever's in season in December"];
    }
}

//FIXME I only go through June
//FIXME I don't like the implementation of this
function inSeasonCookableVegetables(){

	//for social distancing:
    return ["canned chickpeas", "dried chickpeas", "foraged mushrooms",
    "onions", "that vegetable in the back of the fridge", "potato", "cabbage", 
    "dried beans", "canned beans"]

    var Today = new Date();
    switch(Today.getMonth()){
        case 0:
            return ["beet","bok choy","broccoli","brussel sprouts",
            "cauliflower","chard","kale","leek","onion","radish","spinach"];
        case 1:
            return ["beet","bok choy","broccoli","cauliflower","chard","kale",
            "leek","onion","radish","spinach"];
        case 2:
            return ["artichoke","asparagus","beet","bok choy","broccoli",
            "cauliflower","chard","green garlic","kale","leek","onion"];
        case 3:
            return ["artichoke","asparagus","beet","bok choy","carrot",
            "cauliflower","chard","garlic","green garlic","kale","leek"];
        case 4:
            return ["artichoke","asparagus","beet","cabbage","carrot",
            "cauliflower","chard","garlic","green garlic","kale","leek"];
        case 5:
            return ["basil","cabbage","carrot","corn","garlic","leek",
            "summer squash","tomato"];
        case 6:
            return ["basil","corn","eggplant","garlic","potato",
            "summer squash","tomato"];
        case 7:
            return ["whatever's in season in August"];
        case 8:
            return ["whatever's in season in September"];
        case 9:
            return ["whatever's in season in October"];
        case 10:
            return ["whatever's in season in November"];
        case 11:
            return ["whatever's in season in December"];
    }
}

//FIXME weird repetition of ingredients sometimes
//FIXME weird repetition of combining words like "with" and "and"

//FIXME singular and plural in food depends on a bunch of stuff. see mushroom vs
//chicken. Below implementation of protein and descriptiveProtein is clunky

//FIXME vegetables require implementation of descriptive vs quantitative 
//(kale salad, sauteed kales)

//FIXME implementation of cookable and vegetable is clunky
var fishList = ingredient(["salmon","fish","tuna","cod"]);
//build lists with a mix of ingredients and non-ingredients
var descriptiveProteinList = ingredient(["bean", "lentil", "chickpea", "chicken", "mushroom", "beef"]);
descriptiveProteinList.push("#descriptiveProtein# and #vegetable#");
descriptiveProteinList.push("#fish#");
descriptiveProteinList.push("smoked #fish#");

var proteinList = ingredient(["dried beans",
"canned beans", "tofu", "lentils",
    "chickpeas", "frozen chicken", "canned chicken", "foraged mushrooms", "frozen beef"]);
proteinList.push("#protein# and #vegetable#");
proteinList.push("#fish#");
proteinList.push("smoked #fish#");
proteinList.push("canned #fish#");
proteinList.push("frozen #fish#");

var pastaList = ingredient(["spaghetti","ziti","macaroni","tagliatelle",
    "rigatoni","linguine","penne","fettuccine","orzo"]);
pastaList.push("[filling:#nonSauceExtra#][ingredients:#ingredients#, flour and eggs (to make pasta) or #filling# tortellini]#filling# tortellini");
pastaList.push("[filling:#nonSauceExtraOrVegetableOrDescriptiveProtien#][ingredients:#ingredients#, flour and eggs (to make pasta) or #filling# ravioli] #filling# ravioli");
pastaList.push("#optAdj ##pasta#");

var nonSauceExtraList = ingredient([
            "cheese",
            "peanuts",
            "walnuts",
            "slivered almonds",
            "capers",
            "bacon"]);
nonSauceExtraList.push("[ingredients:#ingredients#, soba noodles, lime, sesame oil, rice wine vinegar, sugar]marinated soba noodles");
var saucesList = ["[ingredients:#ingredients#, sour cream]#optSpice #sour cream"];
saucesList.push("[ingredients:#ingredients#, yogurt]#optSpice #[ingredients:#ingredients#, salt and pepper to taste]yogurt sauce");
saucesList.push("yogurt #vegetable# sauce[ingredients:#ingredients# thinly sliced, yogurt]");
saucesList.push("[ingredients:#ingredients#, minced onion, wine, stock, butter]#optSpice #pan sauce[ingredients:#ingredients#, salt and pepper to taste]");
saucesList.push("#optSpice ##vegetable# pesto[ingredients:#ingredients#, oil, nuts, garlic, parmesan]");

if(outputFormat=="CBDQ"){
    var origin =["[recipes:]#setLets##message#"];
    var dish = ["[ingredients:Ingredients]#dishDescription#"];
    var side = ["[ingredients:Ingredients]#sideDescription#"];
} else {
    var origin = ["[recipes:]#setLets##message#<br>#recipes#"];
    var dish = ["[ingredients:Ingredients]#dishDescription#[recipes:#recipes# <br> #ingredients#]"];
    var side = ["[ingredients:Ingredients]#sideDescription#[recipes:#recipes# <br> #ingredients#]"];
}

var grammars = {
    dinners : {
        "origin":origin,
        "dish":dish,
        "side":side,
        "message":[
            "#lets.capitalize# make #dish##!#",
            "Today #lets# make #dish##!#",
            "#lets.capitalize# make #side#, that can go with #dish##!#",
            "#lets.capitalize# have #dish# for #savoryMeal##!#",
            "#dish.capitalize# for #savoryMeal#?",
        ],

        "dishDescription":[
            "a stew of #listOfCookableVegetables# with #optAdj ##descriptiveProtein#",
            "#optSpice ##listOfVegetables# soup with #protein#[ingredients:#ingredients#, stock, salt and pepper to taste]",
            "[ingredients:#ingredients#, rice]#optAdj ##vegetable#, #protein# and rice",
            "#optAdj ##descriptiveProtein# #proteinPreparation#",
            "[ingredients:#ingredients#, beans, onions, tomatoes, cumin, chili]#optAdj ##spice# chili with #protein#",
            "#pasta# with #protein# and #vegetable#",
            "#specificDish## optAddition#",
            "#vegetable# salad with #listOfVegetables# and #protein#",
            "#dishDescription# with #extra#",
            "#dishDescription## optAddition#",
            //"#dishDescription# might be nice# optAddition#",//grammatically wierd
            "#optAdj ##descriptiveProtein# casserole with #listOfVegetables#[ingredients:#ingredients#, butter, flour, bread crumbs]",
        ],

        "listOfVegetables": listOf("listOfVegetables","vegetable"),
        "listOfCookableVegetables": listOf("listOfCookableVegetables","cookableVegetable"),

        "vegetable": ingredient(inSeasonVegetables()),
        "cookableVegetable": ingredient(inSeasonCookableVegetables()),
        "fruit":["apple","orange","honey","juice"],
        "fish":fishList,
        "descriptiveProtein":descriptiveProteinList,
        "protein":proteinList,
        "pasta":pastaList,
        "adj": ["#adj#, #adj#",
        "[ingredients:#ingredients#, garlic, butter, parsely]garlic",
        "[ingredients:#ingredients#, green-garlic]green-garlic",
        "[ingredients:#ingredients#, garlic, lemon juice, lemon zest]fresh","pureed","sauteed","baked","fried",
        "[ingredients:#ingredients#, green chile]green chile",
        "[ingredients:#ingredients#, peppers, cinnamon, chocolate, black pepper, cumin, salt to taste]mole",
        "[ingredients:#ingredients#, Szechuan peppercorn, chiles, garlic, ginger, star anise, soy sauce, rice wine vinegar]Szechuan",
        "[ingredients:#ingredients#, curry, water chestnuts, corn, carrots, coconut milk]Thai",
        "[ingredients:#ingredients#, butter, flour, garlic, paprika, cayanne pepper, thyme]Cajun",
        "[ingredients:#ingredients#, couscous, za'atar, pine nuts]za'atar",
        "[ingredients:#ingredients#, lemon, parsely, garlic, chopped tomatoes]Mediterranean",
        "[ingredients:#ingredients#, #fruit#]sweet",
        "[ingredients:#ingredients#, stock, buttor or cream]rich",
        "[ingredients:#ingredients#, red pepper flakes]spicy"],
        "optAdj ":["","#adj# "],
        "spice":ingredient(["turmeric","cinnamon","paprika","cumin","cilantro","parsely",
        "mint","thyme","oregano","garam masala","rosemary","sage"]),
        "optSpice ":["a hint of #spice# on ","#spice# ",""],
        "proteinPreparation":[
        "[ingredients:#ingredients#, pie crust, butter, flour, diced potatoes,  peas, diced carrots]pot-pie",
        "[ingredients:#ingredients#, chopped onion, pepper, bread crumbs, bun, ketchup]burger"],
        //specific dishes don't allow for much modification
        "specificDish":["[ingredients:#ingredients#, onion, tomatoes, eggs, salt and pepper to taste]shakshuka",
            "[ingredients:#ingredients#, onions, peppers, chili powder]fajitas",
            "[ingredients:#ingredients#, onions, eggplant, squash, peppers, bay leaves, salt and pepper to taste]ratatouille",
            "#descriptiveProtein# [ingredients:#ingredients#, lasagna noodles, tomato sauce, ricotta, mozzarella, parmesan]lasagna",
            "#descriptiveProtein# [ingredients:#ingredients#, onion, carrots, peas, potatoes, rasins]tagine"],
        "savoryMeal":["dinner","lunch"],
        "!":["",".","!"],
        "setLets":["[lets:let's]","[lets:I'll]","[lets:you should]","[lets:we will]"],
        "sideDescription":[
            "#cookableVegetable# chips",
            "[ingredients:#ingredients#, oil]sauteed #cookableVegetable#[ingredients:#ingredients#, salt and pepper to taste]",
            "#vegetable#",
            "#spice# spiced #vegetable#",
            "#sideDescription# and #extra#"
        ],
        "nonSauceExtra":nonSauceExtraList,
        "sauces":saucesList,
        "extra": ["#nonSauceExtra#","#sauces#"],
        " optAddition": [
            ", maybe with #sideDescription#",
            "",
            " with #extra#"
        ],
        "nonSauceExtraOrVegetableOrDescriptiveProtien":["#nonSauceExtra#","#vegetable#","#descriptiveProtein#"],

    },

}
