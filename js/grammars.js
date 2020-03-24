/**
 * @author Drew
 */



var outputFormat = "CBDQ";

//Fixme I don't work with single item lists because the english grammar is hard
function listOf(listName,items){
    return ["#"+items+"#, #"+listName+"#","#"+items+"# and #"+items+"#"];
}

function ingredient(item){
	return "[ingredients:#ingredients#"+item+"<br>]"+
        		 item
}

//"[ingredients:#ingredients# artichoke]artichoke" for example. This appends an 
//ingredient to an ingredient list
function ingredients(items,prep=true){
    for (var i = items.length - 1; i >= 0; i--) {
        if(prep){
        	items[i]=ingredient(items[i])
        } else {
        	items[i]=noPrepIngredient(items[i])
        }
    }
    //console.log(items);
    return items;
}

function noPrepIngredient(item){
	return ingredient(item)+"[method:#method##addIn.capitalize# "+item+".]"
}

var addInList = ["mix in", "top with", "serve with", "add the"];
var fineList = ["mince", "finely dice", "thinly slice"];//may be appended with d

//FIXME only go through June
//FIXME I don't like the implementation of this
function inSeasonVegetables(){
    //for social distancing:
    //FIXME allow dried chickpeas
    return ["[ingredients:Canned chickpeas<br>#ingredients#]"+
    "[method:Drain chickpeas. #method#. #addIn.capitalize# chickpeas. ]"+
    "canned chickpeas", 

    "[ingredients:Dried chickpeas<br>#ingredients#]"+
    "[overnight:Soak chickpeas overnight. #overnight#]"+
    "[method:Boil chickpeas for 25 minutes before "+
    "draining and setting aside. #method# #addIn.capitalize# chickpeas. ]"+
    "chickpeas", 
    
    "[ingredients:Mushrooms<br>#ingredients#]"+
    "[method:Clean mushrooms with a damp cloth. Cut large mushrooms until all "+
    "mushroom pieces are similar sizes, season and cook in a skillet until "+
    "tender and fragrant. Set the mushrooms aside. #method# #addIn.capitalize# "+
    "mushrooms. ]foraged mushrooms",
    
    "[ingredients:Onion<br>#ingredients#]"+
    "[method:Remove top and root of the onion and peel. Mince a quarter of the "+
    "onion and set aside #method##addIn.capitalize# the minced onion. ]onions", 
    "that vegetable in the back of the fridge", 

    "[ingredients:Potato<br>#ingredients#]"+
    "[method:Peel potato, cut into one inch peices and boil for 20-30 minutes "+
    "until easily pierced with a fork. #method##addIn.capitalize# potato]"+
    "potato", 

    "[ingredients:Cabbage<br>#ingredients#]"+
    "[method:#method# Shred cabbage and season before serving.]"+
    "cabbage", 
    
    "[ingredients:Chickpeas<br>#ingredients#]"+
    "[method:Soak beans over night and cook in boiling water "+
    "until beans soften (about an hour.) #method#]"+
    "dried beans", 
    
    "[ingredients:Beans<br>#ingredients#]"+
    "[method:Open and drain beans. #method#]"+
    "canned beans"];

    var Today = new Date();
    switch(Today.getMonth()){
        case 0:
        	//FIXME add specific prep for non-seasonal vegetables
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
    return ["[method:Drain chickpeas. #method#]canned chickpeas", 
    "[overnight:Soak chickpeas overnight. #overnight#]dried chickpeas", 
    "[method:Clean mushrooms with a damp cloth. #method#]foraged mushrooms",
    "[method:Remove top and root of the onion and peel. #method#]onions", 
    "that vegetable in the back of the fridge", 
    "[method:Peel potato #method]potato", "cabbage",

    "[overnight:Soak beans overnight. #overnight#]"+
    "[method:Cook beans in boiling water until starting to soften "+
    "(about an hour.) #method#]dried beans", 

    "[method:Open and drain beans. #method#]canned beans"];

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
//FIXME add prep for fish
var fishList = ingredients(["salmon","fish","tuna","cod"]);
//build lists with a mix of ingredients and non-ingredients
var descriptiveProteinList = ingredients(["bean", "lentil", "chickpea", 
	"chicken", "mushroom", "beef"]);
descriptiveProteinList.push("#descriptiveProtein# and #vegetable#");
descriptiveProteinList.push("#fish#");
descriptiveProteinList.push("smoked #fish#");

var proteinList = ingredients(["dried beans",
"canned beans", "tofu", "lentils",
    "chickpeas", "frozen chicken", "canned chicken", "foraged mushrooms", 
    "frozen beef"]);
proteinList.push("#protein# and #vegetable#");
proteinList.push("smoked #fish#");
proteinList.push("canned #fish#");
proteinList.push("#fish#");

var pastaList = ingredients(["spaghetti","ziti","macaroni","tagliatelle",
    "rigatoni","linguine","penne","fettuccine","orzo"]);
pastaList.push("[filling:#nonSauceExtra#][ingredients:#ingredients#flour and eggs (to make pasta) or #filling# tortellini<br>]#filling# tortellini");
pastaList.push("[filling:#nonSauceExtraOrVegetableOrDescriptiveProtien#][ingredients:#ingredients#flour and eggs (to make pasta) or #filling# ravioli<br>] #filling# ravioli");
pastaList.push("#optAdj ##pasta#");

var nonSauceExtraList = ingredients([
            "cheese",
            "peanuts",
            "toasted walnuts",
            "toasted slivered almonds",
            "capers",
            "cooked bacon"],true);
nonSauceExtraList.push("[ingredients:#ingredients#soba noodles<br>lime<br>sesame oil<br>rice wine vinegar<br>sugar<br>]marinated soba noodles");
var saucesList = ["[ingredients:#ingredients#sour cream<br>]#optSpice #sour cream"];
saucesList.push("[ingredients:#ingredients#yogurt<br>]#optSpice #[ingredients:#ingredients#salt and pepper to taste<br>]yogurt sauce");
saucesList.push("yogurt #vegetable# sauce[ingredients:#ingredients#yogurt<br>]");
saucesList.push("[ingredients:#ingredients##fine.capitalize#d onion<br>wine<br>#stock#<br>butter<br>]#optSpice #pan sauce[ingredients:#ingredients#salt and pepper to taste<br>]");
saucesList.push("#optSpice ##vegetable# pesto[ingredients:#ingredients#oil<br>nuts<br>garlic<br>parmesan<br>]");

if(outputFormat=="CBDQ"){
    var origin =["[recipes:]#setLets##message#"];
    var dish = ["[ingredients:][overnight:][method:]#dishDescription#"];
    var side = ["[ingredients:]#sideDescription#"];
} else {
    var origin = ["[recipes:]#setLets##message#<br>#recipes#"];
    var dish = ["[ingredients: ]#dishDescription#[recipes:#recipes# <br> Ingredients #ingredients#]"];
    var side = ["[ingredients: ]#sideDescription#[recipes:#recipes# <br> Ingredients #ingredients#]"];
}
var dishDescription = [
			"[thisStock:#stock#]"+
            "[ingredients:#ingredients#Oil<br>#thisStock#<br>]"+
            "[thisProtein:#protein#]"+
            "[method:#method#Heat oil until shimmering, before adding "+
            "#thisProtein# and browning on high heat. Remove and set aside. "+
            "Add vegetables and cook until they take on a little color, return "+
            "#thisProtein# to the pan and deglazing with #thisStock#. Simmer "+
            "on the stove or covered in a 300 degree oven for 30-60 minutes "+
            "before seasoning to taste.]"+
            "a stew of #listOfCookableVegetables# with #optAdj ##thisProtein#",
            
            "#optSpice ##listOfVegetables# soup with #protein#[ingredients:#ingredients##stock.capitalize#<br>Salt and pepper to taste<br>]",

            "[ingredients:#ingredients#Rice<br>]#optAdj ##vegetable#, #protein# and rice",
            
            "#optAdj ##descriptiveProtein# #proteinPreparation#",
            
            "[ingredients:#ingredients#Beans<br>Onions<br>Tomatoes<br>Cumin<br>Chili<br>]#optAdj ##spice# chili with #protein#",
            
            "#pasta# with #protein# and #vegetable#",
            
            "#specificDish## optAddition#",
            
            "#vegetable# salad with #listOfVegetables# and #protein#",
            
            "#dishDescription# with #extra#",
            
            "#dishDescription## optAddition#",
            
            //"#dishDescription# might be nice# optAddition#",//grammatically wierd
            "#optAdj ##descriptiveProtein# casserole with #listOfVegetables#[ingredients:#ingredients#Butter<br>Flour<br>Bread crumbs<br>]",
        ];

var stockList = ingredients(["vegetable stock", "vegetable broth", "chicken stock", "chicken broth", "mushroom broth", "white wine"]);

var adjList = ["#adj#, #adj#",
        	"[ingredients:#ingredients#Garlic<br>Butter<br>Parsely<br>]garlic",
        	"[ingredients:#ingredients#Green-garlic<br>]green-garlic",
        	"[ingredients:#ingredients#Garlic<br>Lemon juice<br>Lemon zest<br>]fresh","pureed","sauteed","baked","fried",
        	"[ingredients:#ingredients#Green chile<br>]green chile",
        	"[ingredients:#ingredients#Peppers<br>Cinnamon<br>Chocolate<br>Black pepper<br>Cumin<br>Salt to taste<br>]mole",
        	"[ingredients:#ingredients#Szechuan peppercorn<br>Chiles<br>Garlic<br>Ginger<br>Star anise<br>Soy sauce<br>Rice wine vinegar<br>]Szechuan",
        	"[ingredients:#ingredients#Curry<br>Water chestnuts<br>Corn<br>Carrots<br>Coconut milk<br>]Thai",
        	"[ingredients:#ingredients#Butter<br>Flour<br>Garlic<br>Paprika<br>Cayanne pepper<br>Thyme<br>]Cajun",
        	"[ingredients:#ingredients#Couscous<br>Za'atar<br>Pine nuts<br>]za'atar",
        	"[ingredients:#ingredients#Lemon<br>Parsely<br>Garlic<br>Chopped tomatoes<br>]Mediterranean",
        	"[ingredients:#ingredients##fruit.capitalize#<br>]sweet",
        	"[ingredients:#ingredients##stock.capitalize#<br>Butter or cream<br>]rich",
        	"[ingredients:#ingredients#Red pepper flakes<br>]spicy"];
var CondimentList = ["Ketchup", "Mustard", "Mayo", "Relish", "Pickles", 
	"Salt and pepper", "Brown mustard", "Yellow mustard"];
var proteinPrepList = [
        	"[ingredients:#ingredients#Pie crust<br>Butter<br>Flour<br>Diced potatoes<br>Peas<br>Diced carrots<br>]pot-pie",
        	"[ingredients:#ingredients#Chopped onion<br>Pepper<br>Bread crumbs<br>Bun<br>#Condiment#<br>]burger"];

        //specific dishes don't allow for much modification
var specificDishList = [
			"[ingredients:#ingredients#Oil<br>Onion<br>Tomatoes<br>Eggs<br>Salt and pepper to taste<br>]"+
			"[method:#method#Dice the onions and brown them in a frying pan. When the onions "+
			"start to brown, crush and add the tomatoes and cook for half an "+
			"hour. Season with salt and pepper before forming a set of wells "+
			"and adding an egg to each well. Let the egg cook to your "+
			"preference and serve.<br>]"+
			"shakshuka",

            "[ingredients:#ingredients#Onions<br>Peppers<br>Oil<br>Chili powder<br>Flour tortillas<br>]"+
            "[method:#method#Cut the vegetables into long long slices. Add "+
            "oil to the pan and heat. Add the peppers and onions and sautee "+
            "for twenty minutes, adding spices half way through. Serve "+
            "immediately with warm flour tortillas.<br>]"+
            "fajitas",

            "[ingredients:#ingredients#Oil<br>Onions<br>Eggplant<br>Squash<br>Peppers<br>Salt and pepper<br>Bay leaves<br>Butter<br>]"+
            "[method:#method#Preheat oven to 350. Oil a casserole dish before "+
            "arranging slices of the vegetables in alternating layers, "+
            "seasoning each layer. Top with bay leaves and slices of butter "+
            "and bake for 60 minutes until top is browned.<br>]"+
            "ratatouille",

            "[thisProtein:#descriptiveProtein#]"+
            "[ingredients:#ingredients#Lasagna noodles<br>Tomato sauce<br>Ricotta<br>Mozzarella<br>Parmesan<br>]"+
            "[method:#method#If desired, parcook the noodles to make a more "+
            "tender lasagna. Sautee #thisProtein# until browned but not cooked through. "+
            "Preheat oven to 375 degrees, and oil a "+
            "casserole dish. Set aside half the mozzerella and the parmesan "+
            "for the top. Lay out a layer of sauce, then a layer of "+
            "noodles then a layer of cheese. Repeat to use all the noodles, "+
            "sauce and ricotta. Top with remaining cheese and bake for 35 "+
            "minutes until the top is bubbly and lightly browned.<br>]"+
            "#thisProtein# lasagna",
            
            "[thisProtein:#descriptiveProtein#]"+
            "[ingredients:#ingredients#Onion<br>Carrots<br>Peas<br>Potatoes<br>Rasins<br>]"+
            "[method:#method#In a dutch oven, brown #thisProtein#, onions and "+
            "carrots. Don't crowd the pan; set aside browned ingredients "+
            "until finished. When finished, return to pan and add other "+
            "ingredients. Cover and cook in a 300 degree oven for 45 minutes.<br>]"+
            "#thisProtein# tagine"];

var sideDescriptionList = [
            "[thisVegetable:#cookableVegetable#]"+
            "[ingredients:#ingredients#Oil<br>]"+
            "[method:Start by thinly slicing #thisVegetable#. Heat oil to 325 "+
            "degrees and add #thisVegetable#, allowing the slices to cook "+
            "until golden before removing them, seasoning and placing on a "+
            "wire rack or a plate lined with paper towel.<br>#method#]"+
            "#thisVegetable# chips",

            "[ingredients:#ingredients#Oil<br>]"+
            "[thisVegetable:cookableVegetable]"+
            "[ingredients:#ingredients#Salt and pepper<br>]"+
            "[Coarsely chop #thisVegetable, before cooking it in an oiled "+
            "skillet and seasoning to taste as it cools.]"+
            "sauteed #thisVegetable#",
            
            "[thisVegetable:#vegetable#]"+
            "[Wash, dry and thinly chop #thisVegetable#, seasoning as you "+
            "arrange it on a plate"+
            "#thisVegetable#",
            
            "#spice# spiced #vegetable#",
            "#sideDescription# and #extra#"
        ];

var grammars = {
	recipes : {
		"origin":"<h1>#dish.capitalize#</h1>"+
		"<h3>Ingredients</h3>"+
		"#ingredients.brListToComma.commaListUniquify.commaListTobr#<br>"+
		"#overnight##method#",
		"dish":dish,
		"addIn":addInList,

		"fine":fineList,
		"dishDescription":dishDescription,
		        "listOfVegetables": listOf("listOfVegetables","vegetable"),
        "listOfCookableVegetables": listOf("listOfCookableVegetables","cookableVegetable"),

        "vegetable": inSeasonVegetables(),
        "cookableVegetable": ingredients(inSeasonCookableVegetables()),
        "fruit":["apple","orange","honey","juice"],
        "fish":fishList,
        "descriptiveProtein":descriptiveProteinList,
        "protein":proteinList,
        "pasta":pastaList,
        "adj": adjList,
        "stock": stockList,
        "optAdj ":["","#adj# "],
        "spice":ingredients(["turmeric","cinnamon","paprika","cumin","cilantro","parsely",
        	"mint","thyme","oregano","garam masala","rosemary","sage"],true),
        "optSpice ":["a hint of #spice# on ","#spice# ",""],
        "proteinPreparation":proteinPrepList,
		"specificDish":specificDishList,

        "!":["",".","!"],
        "sideDescription":sideDescriptionList,
        "nonSauceExtra":nonSauceExtraList,
        "sauces":saucesList,
        "extra": ["#nonSauceExtra#","#sauces#"],
        " optAddition": [
            ", with #sideDescription#",
            "",
            " with #extra#"
        ],
        "nonSauceExtraOrVegetableOrDescriptiveProtien":["#nonSauceExtra#","#vegetable#","#descriptiveProtein#"],
        "Condiment": CondimentList
	},
    dinners : {
        "origin":origin,
        "dish":dish,
        "side":side,
        "addIn":addInList,
        "fine":fineList,
        "message":[
            "#lets.capitalize# make #dish##!#",
            "Today #lets# make #dish##!#",
            "#lets.capitalize# make #side#, that can go with #dish##!#",
            "#lets.capitalize# have #dish# for #savoryMeal##!#",
            "#dish.capitalize# for #savoryMeal#?",
        ],

        "dishDescription":dishDescription,
        "listOfVegetables": listOf("listOfVegetables","vegetable"),
        "listOfCookableVegetables": listOf("listOfCookableVegetables","cookableVegetable"),

        "vegetable": ingredients(inSeasonVegetables()),
        "cookableVegetable": ingredients(inSeasonCookableVegetables()),
        "fruit":["apple","orange","honey","juice"],
        "fish":fishList,
        "descriptiveProtein":descriptiveProteinList,
        "protein":proteinList,
        "pasta":pastaList,
        "adj": adjList,
        "stock": stockList,
        "optAdj ":["","#adj# "],
        "spice":ingredients(["turmeric","cinnamon","paprika","cumin","cilantro","parsely",
        "mint","thyme","oregano","garam masala","rosemary","sage"]),
        "optSpice ":["a hint of #spice# on ","#spice# ",""],
        "proteinPreparation":proteinPrepList,
        "specificDish":specificDishList,
        "savoryMeal":["dinner","lunch"],
        "!":["",".","!"],
        "setLets":["[lets:let's]","[lets:I'll]","[lets:you should]","[lets:we will]"],
        "sideDescription":sideDescriptionList,
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
