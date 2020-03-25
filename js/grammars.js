/**
 * @author Drew
 */



var outputFormat = "CBDQ";

//Fixme I don't work with single item lists because the english grammar is hard
function listOf(listName,items){
    return ["#"+items+"#, #"+listName+"#","#"+items+"# and #"+items+"#"];
}

function ingredient(item){
	return "[thisItem:"+item+"]"+
	"[ingredients:#ingredients##thisItem.capitalize#,]#thisItem#"
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
    return ["[ingredients:#ingredients#,Canned chickpeas]"+
    "[method:Drain chickpeas. #method#. #addIn.capitalize# chickpeas. ]"+
    "chickpeas", 

    "[overnightIngredients:Dried chickpeas,#overnightIngredients#]"+
    "[overnightMethod:Soak chickpeas overnight. #overnightMethod#]"+
    "[method:Boil chickpeas for 25 minutes before "+
    "draining and setting aside. #method# #addIn.capitalize# chickpeas. ]"+
    "chickpeas", 
    
    "[ingredients:Mushrooms,#ingredients#]"+
    "[method:Clean mushrooms with a damp cloth. Cut large mushrooms until all "+
    "mushroom pieces are similar sizes, season and cook in a skillet until "+
    "tender and fragrant. Set the mushrooms aside. #method# #addIn.capitalize# "+
    "mushrooms. ]foraged mushrooms",
    
    "[ingredients:Onion,#ingredients#]"+
    "[method:Remove top and root of the onion and peel. Mince a quarter of the "+
    "onion and set aside. #method##addIn.capitalize# the minced onion. ]onions", 

    "[method:(#method#)]that vegetable in the back of the fridge", 

    "[ingredients:Potato,#ingredients#]"+
    "[method:Peel potato, cut into one inch peices and boil for 20-30 minutes "+
    "until easily pierced with a fork. #method##addIn.capitalize# potato]"+
    "potato", 

    "[ingredients:Cabbage,#ingredients#]"+
    "[method:#method# Shred cabbage and season before serving.]"+
    "cabbage", 
    
    "[overnightIngredients:Chickpeas,#ingredients#]"+
    "[overnightMethod:Soak beans over night. #overnightMethod#]"+
    "[method:Cook beans in boiling water "+
    "until beans soften (about an hour.) #method#]"+
    "beans", 
    
    "[ingredients:Beans,#ingredients#]"+
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
    "[overnightMethod:Soak chickpeas overnight. #overnightMethod#]dried chickpeas", 
    "[method:Clean mushrooms with a damp cloth. #method#]foraged mushrooms",
    "[method:Remove top and root of the onion and peel. #method#]onions", 
    "that vegetable in the back of the fridge", 
    "[method:Peel potato #method]potato", 

    "[method:(#method#)]cabbage",

    "[overnightIngredients:#overnightIngredients#Dried beans,]"+"[overnightMethod:#overnightMethod#Soak beans overnight. ]"+
    "[method:Cook beans in boiling water until starting to soften "+
    "(about an hour.) #method#]beans", 

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
proteinList.push("smoked #fish#[method:#method#Roll slices of fish and add. ]");
proteinList.push("canned #fish#"+
	"[method:Open and drain fish before breaking up with a fork. #method#Add fish. ]");
proteinList.push("#fish#");

var pastaList = ingredients([
	//FIXME pasta needs uncommenting, and methods
	//"spaghetti","ziti","macaroni","tagliatelle","rigatoni","linguine",

    "[method:Boil penne for 15 minutes or until cooked as you like it. #method# Toss with pasta. ]"+"penne",
    
    "[method:#method#Boil fettuccine for 6 minutes or until pleasantly cooked. ]"+
    "fettuccine",

    "[method:#method#Boil orzo for 5 minutes or as instructed. Mix other ingredients into orzo and serve. ]"+
    "orzo"]);
pastaList.push("[filling:#nonSauceExtra#]"+
	"[ingredients:#ingredients#flour and eggs (to make pasta) or #filling# tortellini,]"+
	"#filling# tortellini");
pastaList.push("[filling:#nonSauceExtraOrVegetableOrDescriptiveProtien#][ingredients:#ingredients#Flour and eggs (to make pasta) or #filling# ravioli,] #filling# ravioli");
pastaList.push("#optAdj ##pasta#");

var nonSauceExtraList = ingredients([
            "cheese",
            "peanuts",
            "toasted walnuts",
            "toasted slivered almonds",
            "capers",
            "cooked bacon"],false);
var sugarList = ["brown sugar","sugar","honey"];
nonSauceExtraList.push("[ingredients:#ingredients#Soba noodles,Lime juice,Sesame oil,Rice wine vinegar,#sugar.capitalize#,]marinated soba noodles");
var saucesList = ["[ingredients:#ingredients#Sour cream,]#optSpice #sour cream"];
saucesList.push("[ingredients:#ingredients#Yogurt,]#optSpice #[ingredients:#ingredients#Salt and pepper to taste,]yogurt sauce");
saucesList.push("yogurt #vegetable# sauce[ingredients:#ingredients#Yogurt,]");
saucesList.push("[ingredients:#ingredients##fine.capitalize.d# onion,Wine.#stock.capitalize#,Butter,]#optSpice #pan sauce[ingredients:#ingredients#Salt and pepper to taste,]");
saucesList.push(
	"[pestoVegetable:#Vegetable#]"+
	"#optSpice ##pestoVegetable# pesto"+
	"[ingredients:#pestoVegetable#,Nuts,Garlic,Parmesan,Oil,#ingredients#]"+
	"[methods:Finely chop #pestoVegetable# and nuts, mince garlic and grate parmesan. Combine and wet with oil to make a pesto. #methods#Top with pesto. ]"
	);

if(outputFormat=="CBDQ"){
    var origin =["[recipes:]#setLets##message#"];
    var dish = ["#dishDescription#"];
    var side = ["[ingredients:]#sideDescription#"];
} else {
    var origin = ["[recipes:]#setLets##message#<br>#recipes#"];
    var dish = ["[ingredients: ]#dishDescription#[recipes:#recipes# <br> Ingredients #ingredients#]"];
    var side = ["[ingredients: ]#sideDescription#[recipes:#recipes# <br> Ingredients #ingredients#]"];
}
var dishDescription = [
			"[thisStock:#stock#]"+
            "[ingredients:#ingredients#Oil,#thisStock.capitalize#,]"+
            "[thisProtein:#protein#]"+
            "[method:#method#Heat oil until shimmering, before adding "+
            "#thisProtein# and browning on high heat. Remove and set aside. "+
            "Add vegetables and cook until they take on a little color, return "+
            "#thisProtein# to the pan and deglazing with #thisStock#. Simmer "+
            "on the stove or covered in a 300 degree oven for 30-60 minutes "+
            "before seasoning to taste.]"+
            "a stew of #listOfCookableVegetables# with #optAdj ##thisProtein#",
            
            "#optSpice ##listOfVegetables# soup with #protein#[ingredients:#ingredients##stock.capitalize#,Salt and pepper to taste,]",

            "[ingredients:#ingredients#Rice,]#optAdj ##vegetable#, #protein# and rice",
            
            "#optAdj ##descriptiveProtein# #proteinPreparation#",
            
            
            "[chiliProtein:#protein#]"+
            "[chiliSpice:#spice#]"+
            "[ingredients:#ingredients#Onions,#chiliProtein.capitalize#,Beans,Tomatoes,Cumin,#chiliSpice.capitalize#,Chili,]"+
            "[method:Brown the onions over medium heat. #method#Add #chiliProtein#. Add the beans, tomatoes, cumin,#chiliSpice# and chili.]"+
            "#optAdj ##chiliSpice# chili with #protein#",
            
            "#pasta# with #protein# and #vegetable#",
            
            "#specificDish## optAddition#",
            
            "#vegetable# salad with #listOfVegetables# and #protein#",
            
            "#dishDescription# with #extra#",
            
            "#dishDescription## optAddition#",
            
            //"#dishDescription# might be nice# optAddition#",//grammatically wierd
            "#optAdj ##descriptiveProtein# casserole with #listOfVegetables#[ingredients:#ingredients#Butter,Flour,Bread crumbs,]",
        ];

var stockList = ingredients(["vegetable stock", "vegetable broth", "chicken stock", "chicken broth", "mushroom broth", "white wine"]);

var adjList = ["#adj#, #adj#",
        	"[overnightMethods:#overnightMethods##fine.capitalize# garlic and parsely before mixing them into room temperature butter and refrigerate for a few hours. ]"+"[ingredients:#ingredients#Garlic,Butter,Parsely,]garlic",
        	"[ingredients:#ingredients#Green-garlic,]green-garlic",
        	"[ingredients:#ingredients#Garlic,Lemon juice,Lemon zest,]fresh","pureed","sauteed","baked","fried",
        	"[ingredients:#ingredients#Green chile,]green chile",
        	"[ingredients:#ingredients#Peppers,Cinnamon,Chocolate,Black pepper,Cumin,Salt to taste,]mole",
        	"[ingredients:#ingredients#Szechuan peppercorn,Chiles,Garlic,Ginger,Star anise,Soy sauce,Rice wine vinegar,]Szechuan",
        	"[ingredients:#ingredients#Curry,Water chestnuts,Corn,Carrots,Coconut milk,]Thai",
        	"[ingredients:#ingredients#Butter,Flour,Garlic,Paprika,Cayanne pepper,Thyme,]Cajun",
        	"[ingredients:#ingredients#Couscous,Za'atar,Pine nuts,]za'atar",
        	"[ingredients:#ingredients#Lemon,Parsely,Garlic,Chopped tomatoes,]Mediterranean",
        	"[ingredients:#ingredients##fruit.capitalize#,]sweet",
        	"[ingredients:#ingredients##stock.capitalize#,Butter or cream,]rich",
        	"[ingredients:#ingredients#Red pepper flakes,]spicy"];
var CondimentList = ["Ketchup", "Mustard", "Mayo", "Relish", "Pickles", 
	"Salt and pepper", "Brown mustard", "Yellow mustard"];
var proteinPrepList = [
        	"[ingredients:#ingredients#Pie crust,Butter,Flour,Diced potatoes,Peas,Diced carrots,]pot-pie",
        	"[ingredients:#ingredients#Chopped onion,Pepper,Bread crumbs,Egg,Bun,#Condiment.capitalize#,]"+
        	"[method:#method# Mix with the onions, pepper, bread crumbs, and egg so it forms a burger patty. "+
        	"Grill for 15 minutes until cooked through. Toast the bun as it finishes. Add condiments. ]"+
        	"burger"];

        //specific dishes don't allow for much modification
var specificDishList = [
			"[ingredients:#ingredients#Oil,Onion,Tomatoes,Eggs,Salt and pepper to taste,]"+
			"[method:#method#Dice the onions and brown them in a frying pan. When the onions "+
			"start to brown, crush and add the tomatoes and cook for half an "+
			"hour. Season with salt and pepper before forming a set of wells "+
			"and adding an egg to each well. Let the egg cook to your "+
			"preference and serve. ]"+
			"shakshuka",

            "[ingredients:#ingredients#Onions,Peppers,Oil,Chili powder,Flour tortillas,]"+
            "[method:#method#Cut the vegetables into long long slices. Add "+
            "oil to the pan and heat. Add the peppers and onions and sautee "+
            "for twenty minutes, adding spices half way through. Serve "+
            "immediately with warm flour tortillas. ]"+
            "fajitas",

            "[ingredients:#ingredients#Oil,Onions,Eggplant,Squash,Peppers,Salt and pepper,Bay leaves,Butter,]"+
            "[method:#method#Preheat oven to 350. Oil a casserole dish before "+
            "arranging slices of the vegetables in alternating layers, "+
            "seasoning each layer. Top with bay leaves and slices of butter "+
            "and bake for 60 minutes until top is browned. ]"+
            "ratatouille",

            "[thisProtein:#descriptiveProtein#]"+
            "[ingredients:#ingredients#Lasagna noodles,Tomato sauce,Ricotta,Mozzarella,Parmesan,]"+
            "[method:#method#If desired, parcook the noodles to make a more "+
            "tender lasagna. Sautee #thisProtein# until browned but not cooked through. "+
            "Preheat oven to 375 degrees, and oil a "+
            "casserole dish. Set aside half the mozzerella and the parmesan "+
            "for the top. Lay out a layer of sauce, then a layer of "+
            "noodles then a layer of cheese. Repeat to use all the noodles, "+
            "sauce and ricotta. Top with remaining cheese and bake for 35 "+
            "minutes until the top is bubbly and lightly browned. ]"+
            "#thisProtein# lasagna",
            
            "[thisProtein:#descriptiveProtein#]"+
            "[ingredients:#ingredients#Onion,Carrots,Peas,Potatoes,Rasins,]"+
            "[method:#method#In a dutch oven, brown #thisProtein#, onions and "+
            "carrots. Don't crowd the pan; set aside browned ingredients "+
            "until finished. When finished, return to pan and add other "+
            "ingredients. Cover and cook in a 300 degree oven for 45 minutes. ]"+
            "#thisProtein# tagine"];

var sideDescriptionList = [
            "[thisVegetable:#cookableVegetable#]"+
            "[ingredients:#ingredients#Oil,]"+
            "[method:Start by thinly slicing #thisVegetable#. Heat oil to 325 "+
            "degrees and add #thisVegetable#, allowing the slices to cook "+
            "until golden before removing them, seasoning and placing on a "+
            "wire rack or a plate lined with paper towel. #method#]"+
            "#thisVegetable# chips",

            "[ingredients:Oil,#ingredients#]"+
            "[thisVegetable:cookableVegetable]"+
            "[ingredients:#ingredients#Salt and pepper,]"+
            "[method:Coarsely chop #thisVegetable, before cooking it in an oiled "+
            "skillet and seasoning to taste. #method#]"+
            "sauteed #thisVegetable#",
            
            "[thisVegetable:#vegetable#]"+
            "[method:#method# Wash, dry and thinly chop #thisVegetable#, seasoning as you "+
            "arrange it on a plate. ]"+
            "[ingredients:#ingredients##thisVegetable.capitalize#,]"+
            "#thisVegetable#",
            
            "[thisSpice:#spice#]"+
            "#thisSpice# spiced #vegetable#"+
            "[method:#method#Season with #thisSpice#. ]",

            "#sideDescription# and #extra#"
        ];

var sublists = {
	"sugar":sugarList,
	"addIn":addInList,
	"fine":fineList,
	"fish":fishList,
    "fruit":["apple","orange","honey","juice"],
    "descriptiveProtein":descriptiveProteinList,
    "protein":proteinList,
    "pasta":pastaList,
    "adj": adjList,
    "stock": stockList,
    "sauces":saucesList,
                
};

var grammars = {
	recipes : {
		...sublists,
		"origin":"[overnightIngredients:][overnightMethod:][ingredients:][method:]"+
		"<h1>#dish.capitalize#</h1>"+
		"<h3>Ingredients</h3>"+
		"[ingredients:#overnightIngredients##ingredients#]"+
		"#ingredients.brListToComma.commaListUniquify.commaListTobr#<br>"+
		"#overnightMethod##method#",
		"dish":dish,

		"dishDescription":dishDescription,
		        "listOfVegetables": listOf("listOfVegetables","vegetable"),
        "listOfCookableVegetables": listOf("listOfCookableVegetables","cookableVegetable"),

        "vegetable": inSeasonVegetables(),
        "cookableVegetable": ingredients(inSeasonCookableVegetables()),
        "optAdj ":["","#adj# "],
        "spice":ingredients(["turmeric","cinnamon","paprika","cumin","cilantro","parsely",
        	"mint","thyme","oregano","garam masala","rosemary","sage"],true),
        "optSpice ":["a hint of #spice# on ","#spice# ",""],
        "proteinPreparation":proteinPrepList,
		"specificDish":specificDishList,

        "!":["",".","!"],
        "sideDescription":sideDescriptionList,
        "nonSauceExtra":nonSauceExtraList,
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
		...sublists,

        "origin":origin,
        "dish":dish,
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
