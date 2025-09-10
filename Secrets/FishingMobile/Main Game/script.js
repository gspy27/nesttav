const textLabel = document.getElementById("ResultText");
let fishable = true;

let Money1 = 0;
let sleepTime;
let FasterFish = false;

window.localStorage.setItem("Money", Money1)

//Commons
let Seaweed1 = 0;
let Boot1 = 0;
let Trout1 = 0;
let Bass1 = 0;
let Cod1 = 0;

window.localStorage.setItem("Seaweed", Seaweed1);
window.localStorage.setItem("Boot", Boot1);
window.localStorage.setItem("Trout", Trout1);
window.localStorage.setItem("Bass", Bass1);
window.localStorage.setItem("Cod", Cod1);

//Uncommons
let Walleye1 = 0;
let Salmon1 = 0;
let Tuna1 = 0;
let Grouper1 = 0;
let Mackerel1 = 0;
let Halibut1 = 0;

window.localStorage.setItem("Walleye", Walleye1);
window.localStorage.setItem("Salmon", Salmon1);
window.localStorage.setItem("Tuna", Tuna1);
window.localStorage.setItem("Grouper", Grouper1);
window.localStorage.setItem("Mackerel", Mackerel1);
window.localStorage.setItem("Halibut", Halibut1);

//Rares
let Marlin1 = 0;
let Snapper1 = 0;
let Eel1 = 0;

window.localStorage.setItem("Marlin", Marlin1);
window.localStorage.setItem("Snapper", Snapper1);
window.localStorage.setItem("Eel", Eel1);

//Really Rares
let Shark1= 0;
let Sturgeon1 = 0;
let Swordfish1 = 0;
let Butterflyfish1 = 0;

window.localStorage.setItem("Shark", Shark1);
window.localStorage.setItem("Sturgeon", Sturgeon1);
window.localStorage.setItem("Swordfish", Swordfish1);
window.localStorage.setItem("Butterflyfish", Butterflyfish1);

//Ultra Rares
let Clownfish1 = 0;
let Lionfish1 = 0;
let Stingray1 = 0;

window.localStorage.setItem("Clownfish", Clownfish1);
window.localStorage.setItem("Lionfish", Lionfish1);
window.localStorage.setItem("Stingray", Stingray1);

//Godly
let Anglerfish1 = 0;
let RedHandfish1 = 0;

window.localStorage.setItem("Anglerfish", Anglerfish1);
window.localStorage.setItem("RedHandfish", RedHandfish1);

//Ungodly
let SakhalinSturgeon1 = 0;
let DevilsHolePufferfish1 = 0;

window.localStorage.setItem("SakhalinSturgeon", SakhalinSturgeon1);
window.localStorage.setItem("DevilsHolePufferfish", DevilsHolePufferfish1);

//Fish
let TheFish1 = 0;

window.localStorage.setItem("Fish", TheFish1);

//???
let QuestionFish1 = 0;

window.localStorage.setItem("???", QuestionFish1);

let Money = parseInt(window.localStorage.getItem("Money"));

//Common
let Seaweed = parseInt(window.localStorage.getItem("Seaweed"));
let Boot = parseInt(localStorage.getItem("Boot"));
let Trout = parseInt(localStorage.getItem("Trout"));
let Bass = parseInt(localStorage.getItem("Bass"));
let Cod = parseInt(localStorage.getItem("Cod"));

//Uncommon
let Walleye = parseInt(localStorage.getItem("Walleye"));
let Salmon = parseInt(localStorage.getItem("Salmon"));
let Tuna = parseInt(localStorage.getItem("Tuna"));
let Grouper = parseInt(localStorage.getItem("Grouper"));
let Mackerel = parseInt(localStorage.getItem("Mackerel"));
let Halibut = parseInt(localStorage.getItem("Halibut"));

//Rare
let Marlin = parseInt(localStorage.getItem("Marlin"));
let Snapper = parseInt(localStorage.getItem("Snapper"));
let Eel = parseInt(localStorage.getItem("Eel"));

//Really Rare
let Shark = parseInt(localStorage.getItem("Shark"));
let Sturgeon = parseInt(localStorage.getItem("Sturgeon"));
let Swordfish = parseInt(localStorage.getItem("Swordfish"));
let Butterflyfish = parseInt(localStorage.getItem("Butterflyfish"));

//Ultra Rare
let Clownfish = parseInt(localStorage.getItem("Clownfish"));
let Lionfish = parseInt(localStorage.getItem("Lionfish"));
let Stingray = parseInt(localStorage.getItem("Stingray"));

//Godly
let Anglerfish = parseInt(localStorage.getItem("Anglerfish"));
let RedHandfish = parseInt(localStorage.getItem("RedHandfish"));

//Ungodly
let SakhalinSturgeon = parseInt(localStorage.getItem("SakhalinSturgeon"));
let DevilsHolePufferfish = parseInt(localStorage.getItem("DevilsHolePufferfish"));

//Fish
let TheFish = parseInt(localStorage.getItem("Fish"));

//???
let QuestionFish = parseInt(localStorage.getItem("???"));

let BackpackSpace = 10;
let FilledBackpackSpace
setInterval(function() {
  if (FasterFish === false) {
    sleepTime = 1754;
  } else {
    sleepTime = 154;
  }

  FilledBackpackSpace = Seaweed + Boot + Trout + Bass + Cod + Walleye + Salmon + Tuna + Grouper + Mackerel + Halibut + Marlin + Snapper + Eel + Shark + Swordfish + Sturgeon + Butterflyfish + Clownfish + Lionfish + Stingray + Anglerfish + RedHandfish + SakhalinSturgeon + DevilsHolePufferfish + TheFish;
  document.getElementById("BackpackSpaceText").innerHTML = `Backpack: ${FilledBackpackSpace}/${BackpackSpace}`
  document.getElementById("BackpackSpaceTextTwo").innerHTML = `Backpack: ${FilledBackpackSpace}/${BackpackSpace}`
  document.getElementById("BackpackSpaceTextThree").innerHTML = `Backpack: ${FilledBackpackSpace}/${BackpackSpace}`
}, 200);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Shop
function OpenShop() {
  const shop = document.getElementById("FishdexShop")

  shop.style.opacity = "100%";
  document.getElementById("CloseShop").style.opacity = "100%";
  document.getElementById("OpenShop").style.opacity = "0%";
}

function CloseShop() {
  const shop = document.getElementById("FishdexShop")

  shop.style.opacity = "0%";
    document.getElementById("CloseShop").style.opacity = "0%";
    document.getElementById("OpenShop").style.opacity = "100%";
}

document.getElementById("FishButton").addEventListener('click',()=>{
    document.getElementById("FishButton").disabled = true
    sleep(sleepTime + 2100).then(() => document.getElementById("FishButton").disabled = false)
})



//Fishing
function Fish() {
  let fishNum = Math.random() * (99 + 1);
  
  if (FilledBackpackSpace < BackpackSpace) {
    if (fishable = true) 
  {
    FilledBackpackSpace ++;
    console.log(`${FilledBackpackSpace}/${BackpackSpace}`)
    if (fishNum <= 50) 
  {
    textLabel.innerHTML = "Fishing...";
    fishable = false;
    
    let whichFishNum = Math.floor(Math.random() * 4); //Five Fish
    fishable = false
    document.getElementById("GoFishDiv").style.opacity = "0%";

    if (whichFishNum === 0) 
    {
      sleep(sleepTime - 1).then(() => Seaweed ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = `You Found Common Seaweed`);
    } else if (whichFishNum === 1) 
    {
      sleep(sleepTime).then(() => Boot ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found a Common Boot");
    } else if (whichFishNum === 2)
    {
      sleep(sleepTime).then(() => Trout ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found a Common Trout");
    } else if (whichFishNum === 3) 
    {
      sleep(sleepTime).then(() => Bass ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found a Common Bass");
    } else if (whichFishNum === 4)
    {
      sleep(sleepTime).then(() => Cod ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found a Common Cod"); 
    }

    sleep(sleepTime).then(() => textLabel.style.color = "grey");
    sleep(sleepTime + 2100).then(() => textLabel.innerHTML = "Fish!")
    sleep(sleepTime + 2100).then(() => textLabel.style.color = "black");
    sleep(sleepTime + 2100).then(() => document.getElementById("GoFishDiv").style.opacity = "100%");
    sleep(sleepTime + 2100).then(() => fishable = true);
  } else if (fishNum <= 75 && fishNum > 50)
  {
    textLabel.innerHTML = "Fishing...";
    fishable = false;
    
    let whichFishNum = Math.floor(Math.random() * 5); //Six Fish
    document.getElementById("GoFishDiv").style.opacity = "0%";
    
    if (whichFishNum === 0) 
    {
      sleep(sleepTime).then(() => Walleye ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found an Uncommon Walleye");
    } else if (whichFishNum === 1) 
    {
      sleep(sleepTime).then(() => Salmon ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found an Uncommon Salmon");
    }else if (whichFishNum === 2) 
    {
      sleep(sleepTime).then(() => Tuna ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found an Uncommon Tuna");
    }else if (whichFishNum === 3) 
    {
      sleep(sleepTime).then(() => Grouper ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found an Uncommon Grouper");
    }else if (whichFishNum === 4) 
    {
      sleep(sleepTime).then(() => Mackerel ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found an Uncommon Mackerel");
    }else if (whichFishNum === 5) 
    {
      sleep(sleepTime).then(() => Halibut ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found an Uncommon Halibut");
    }

    sleep(sleepTime).then(() => textLabel.style.color = "rgb(84, 223, 114)");
    sleep(sleepTime + 2100).then(() => textLabel.innerHTML = "Fish!")
    sleep(sleepTime + 2100).then(() => textLabel.style.color = "black");
    sleep(sleepTime + 2100).then(() => document.getElementById("GoFishDiv").style.opacity = "100%");
    sleep(sleepTime + 2100).then(() => fishable = true);
  } else if (fishNum <= 87.5 && fishNum > 75)
  {
    textLabel.innerHTML = "Fishing..."
    fishable = false
    
    let whichFishNum = Math.floor(Math.random() * 2) // Three Fish
    document.getElementById("GoFishDiv").style.opacity = "0%"
    
    if (whichFishNum === 0) 
    {
      sleep(sleepTime).then(() => Marlin ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found a Rare Marlin!");
    } else if (whichFishNum === 1) 
    {
      sleep(sleepTime).then(() => Snapper ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found a Rare Snapper!");
    } else if (whichFishNum === 2) 
    {
      sleep(sleepTime).then(() => Eel ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found a Rare Eel!");
    }

    sleep(sleepTime).then(() => textLabel.style.color = "rgb(54, 54, 220)");
    sleep(sleepTime + 2100).then(() => textLabel.innerHTML = "Fish!")
    sleep(sleepTime + 2100).then(() => textLabel.style.color = "black");
    sleep(sleepTime + 2100).then(() => document.getElementById("GoFishDiv").style.opacity = "100%");
    sleep(sleepTime + 2100).then(() => fishable = true);
  } else if (fishNum <= 93.75 && fishNum > 87.5)
  {
    textLabel.innerHTML = "Fishing..."
    fishable =  false;
    
    let whichFishNum = Math.floor(Math.random() * 3) //Four Fish
    document.getElementById("GoFishDiv").style.opacity = "0%"
    
    if (whichFishNum === 0)
    {
      sleep(sleepTime).then(() => Shark ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found a Really Rare Shark!!");
    } else if (whichFishNum === 1)
    {
      sleep(sleepTime).then(() => Swordfish ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found a Really Rare Swordfish!!");
    } else if (whichFishNum === 2)
    {
      sleep(sleepTime).then(() => Sturgeon ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found a Really Rare Sturgeon!!");
    } else if (whichFishNum === 3)
    {
      sleep(sleepTime).then(() => Butterflyfish ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found a Really Rare Butterflyfish!!");
    }

    sleep(sleepTime).then(() => textLabel.style.color = "rgba(0, 0, 131, 1)");
    sleep(sleepTime + 2100).then(() => textLabel.innerHTML = "Fish!")
    sleep(sleepTime + 2100).then(() => textLabel.style.color = "black");
    sleep(sleepTime + 2100).then(() => document.getElementById("GoFishDiv").style.opacity = "100%");
    sleep(sleepTime + 2100).then(() => fishable = true);
  } else if (fishNum <= 96.875 && fishNum > 93.75)
  {
    textLabel.innerHTML = "Fishing..."
    fishable = false;
    
    let whichFishNum = Math.floor(Math.random() * 2) //Three Fish
    document.getElementById("GoFishDiv").style.opacity = "0%"
    
    if (whichFishNum === 0)
    {
      sleep(sleepTime).then(() => Clownfish ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found an Ultra Rare Clownfish!!");
    } else if (whichFishNum === 1)
    {
      sleep(sleepTime).then(() => Lionfish ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found an Ultra Rare Lionfish!!");
    } else if (whichFishNum === 2)
    {
      sleep(sleepTime).then(() => Stingray ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found an Ultra Rare Stingray!!");
    }

    sleep(sleepTime).then(() => textLabel.style.color = "rgba(131, 37, 185, 1)");
    sleep(sleepTime + 2100).then(() => textLabel.innerHTML = "Fish!")
    sleep(sleepTime + 2100).then(() => textLabel.style.color = "black");
    sleep(sleepTime + 2100).then(() => document.getElementById("GoFishDiv").style.opacity = "100%");
    sleep(sleepTime + 2100).then(() => fishable = true);
  } else if (fishNum <= 98.4375 && fishNum > 96.875)
  {
    textLabel.innerHTML = "Fishing..."
    fishable = false;
    
    let whichFishNum = Math.floor(Math.random() * 1) //Two Fish
    document.getElementById("GoFishDiv").style.opacity = "0%"
    
    if (whichFishNum === 0)
    {
      sleep(sleepTime).then(() => Anglerfish ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found an Godly Anglerfish!!");
    } else if (whichFishNum === 1)
    {
      sleep(sleepTime).then(() => RedHandfish ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found an Godly Red Handfish!!");
    }

    sleep(sleepTime).then(() => textLabel.style.color = "rgba(155, 160, 9, 1)");
    sleep(sleepTime + 2100).then(() => textLabel.innerHTML = "Fish!")
    sleep(sleepTime + 2100).then(() => textLabel.style.color = "black");
    sleep(sleepTime + 2100).then(() => document.getElementById("GoFishDiv").style.opacity = "100%");
    sleep(sleepTime + 2100).then(() => fishable = true);
  } else if (fishNum <= 99.609375 && fishNum > 98.4375)
  {
    textLabel.innerHTML = "Fishing..."
    fishable = false;
    
    let whichFishNum = Math.floor(Math.random() * 1) //Two Fish
    document.getElementById("GoFishDiv").style.opacity = "0%"
    
    if (whichFishNum === 0)
    {
      sleep(sleepTime).then(() => SakhalinSturgeon ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found a Ungodly Sakhalin Sturgeon!!?!");
    } else if (whichFishNum === 1)
    {
      sleep(sleepTime).then(() => DevilsHolePufferfish ++);
      sleep(sleepTime).then(() => textLabel.innerHTML = "You Found a Ungodly Devil's Hole Pufferfish!!?!");
    }

    sleep(sleepTime).then(() => textLabel.style.color = "rgba(255, 234, 0, 1)");
    sleep(sleepTime + 2100).then(() => textLabel.innerHTML = "Fish!")
    sleep(sleepTime + 2100).then(() => textLabel.style.color = "black");
    sleep(sleepTime + 2100).then(() => document.getElementById("GoFishDiv").style.opacity = "100%");
    sleep(sleepTime + 2100).then(() => fishable = true);
  } else if (fishNum <= 99.998 && fishNum > 99.609375)
  {
    textLabel.innerHTML = "Fishing..."
    fishable = false;
    
    document.getElementById("GoFishDiv").style.opacity = "0%"
    sleep(sleepTime).then(() => TheFish ++);
    sleep(sleepTime).then(() => textLabel.innerHTML = "You caught The Fish");
    sleep(sleepTime).then(() => textLabel.style.color = "rgba(255, 0, 0, 1)");
    sleep(sleepTime + 2100).then(() => textLabel.innerHTML = "Fish!")
    sleep(sleepTime + 2100).then(() => textLabel.style.color = "black");
    sleep(sleepTime + 2100).then(() => document.getElementById("GoFishDiv").style.opacity = "100%");
    sleep(sleepTime + 2100).then(() => fishable = true);
  } else 
  {
    textLabel.innerHTML = "Fishing..."
    fishable = false;
    
    document.getElementById("GoFishDiv").style.opacity = "0%"
    sleep(sleepTime).then(() => QuestionFish ++);
    sleep(sleepTime).then(() => textLabel.innerHTML = "You caught a ???");
    sleep(sleepTime).then(() => textLabel.style.color = "rgba(43, 10, 10, 1)");
    sleep(sleepTime + 2100).then(() => textLabel.innerHTML = "Fish!")
    sleep(sleepTime + 2100).then(() => textLabel.style.color = "black");
    sleep(sleepTime + 2100).then(() => document.getElementById("GoFishDiv").style.opacity = "100%");
    sleep(sleepTime + 2100).then(() => fishable = true);
  }

  }
  } else { 
    textLabel.innerHTML = "Not enough backpack space! Sell Fish or buy more space.";
    textLabel.style.color = "red";
    sleep(2100 + 1754).then(() => textLabel.innerHTML = "Fish!");
    sleep(2100 + 1754).then(() => textLabel.style.color = "rgb(0, 0, 0)");
  }
}

window.addEventListener('keydown', function(event) {
    if (event.code === "Space")
    {
      event.preventDefault();
      if (fishable == true)
      {
        let sleepTime = 1754
        Fish()
        fishable = false
        sleep(sleepTime + 2100).then(() => fishable = true)
      } else 
      {
        console.log("Bad Boy >:(");
      }
    }
});

//Make inventory show values
const MoneyText = document.getElementById("MoneyText")
const MoneyTextTwo = document.getElementById("MoneyTextTwo")
const MoneyTextThree = document.getElementById("MoneyTextThree")

const SeaweedText = document.getElementById("Seaweed")
const BootText = document.getElementById("Boot")
const TroutText = document.getElementById("Trout")
const BassText = document.getElementById("Bass")
const CodText = document.getElementById("Cod")

const WalleyeText = document.getElementById("Walleye")
const SalmonText = document.getElementById("Salmon")
const TunaText = document.getElementById("Tuna")
const GrouperText = document.getElementById("Grouper")
const MackerelText = document.getElementById("Mackerel")
const HalibutText = document.getElementById("Halibut")

const MarlinText = document.getElementById("Marlin")
const SnapperText = document.getElementById("Snapper")
const EelText = document.getElementById("Eel")

const SharkText = document.getElementById("Shark")
const SwordfishText = document.getElementById("Swordfish")
const SturgeonText = document.getElementById("Sturgeon")
const ButterflyfishText = document.getElementById("ButterflyFish")

const ClownfishText = document.getElementById("Clownfish")
const LionfishText = document.getElementById("Lionfish")
const StingrayText = document.getElementById("Stingray")

const AnglerfishText = document.getElementById("Anglerfish")
const RedHandfishText = document.getElementById("RedHandfish")

const SakhalinSturgeonText = document.getElementById("SakhalinSturgeon")
const DevilsHolePufferfishText = document.getElementById("DevilsHolePufferfish")

const TheFishText = document.getElementById("TheFish")

setInterval(function() {
    MoneyText.innerHTML = `Money: ${Money}`
    MoneyTextTwo.innerHTML = `Money: ${Money}`
    MoneyTextThree.innerHTML = `Money: ${Money}`

    SeaweedText.innerHTML = `Seaweed: ${Seaweed}`
    BootText.innerHTML = `Boots: ${Boot}`
    TroutText.innerHTML = `Trout: ${Trout}`
    BassText.innerHTML = `Bass: ${Bass}`
    CodText.innerHTML = `Cod: ${Cod}`

    WalleyeText.innerHTML = `Walleye: ${Walleye}`
    SalmonText.innerHTML = `Salmon: ${Salmon}`
    TunaText.innerHTML = `Tuna: ${Tuna}`
    GrouperText.innerHTML = `Groupers: ${Grouper}`
    MackerelText.innerHTML = `Mackerels: ${Mackerel}`
    HalibutText.innerHTML = `Halibuts: ${Halibut}`

    MarlinText.innerHTML = `Marlin: ${Marlin}`
    SnapperText.innerHTML = `Snapper: ${Snapper}`
    EelText.innerHTML = `Eel: ${Eel}`

    SharkText.innerHTML = `Shark: ${Shark}`
    SwordfishText.innerHTML = `Swordfish: ${Swordfish}`
    SturgeonText.innerHTML = `Sturgeon: ${Sturgeon}`
    ButterflyfishText.innerHTML = `Butterfly Fish: ${Butterflyfish}`

    ClownfishText.innerHTML = `Clownfish: ${Clownfish}`
    LionfishText.innerHTML = `Lionfish: ${Lionfish}`
    StingrayText.innerHTML = `Stingray: ${Stingray}`

    AnglerfishText.innerHTML = `Anglerfish: ${Anglerfish}`
    RedHandfishText.innerHTML = `Red Handfish: ${RedHandfish}`

    SakhalinSturgeonText.innerHTML = `Sakhalin Sturgeons: ${SakhalinSturgeon}`
    DevilsHolePufferfishText.innerHTML = `Devil's Hole Pufferfishs: ${DevilsHolePufferfish}`

    TheFishText.innerHTML = `The Fish: ${TheFish}`
}, 500);

//Selling
function RandomNum(min, max) {
  const floatRandom = Math.random()

  const difference = max - min

  const RandomDifference = floatRandom * difference

  const randomRange = RandomDifference + min

  return randomRange
}

/* PUT INTO ALL FUNCTIONS 
  if (Seaweed >=1 || Boot >= 1 || Trout >= 1 || Bass >= 1) {
    
  } 
*/

function SellCommons() {
  if (Seaweed >=1 || Boot >= 1 || Trout >= 1 || Bass >= 1 || Cod >= 1) {
    Money = Money + (Seaweed * Math.floor(RandomNum(1, 5))) + (Boot * Math.floor(RandomNum(1, 5)))  + (Trout * Math.floor(RandomNum(1, 5)))  + (Bass * Math.floor(RandomNum(1, 5)))  + (Cod * Math.floor(RandomNum(1, 5))) 
  sleep(100).then(() => 
    Seaweed = 0,
    Boot = 0,
    Trout = 0,
    Bass = 0,
    Cod = 0
  );
  console.log("Sold Commons")
  }
}
function SellUncommons() {
  if (Walleye >=1 || Salmon >= 1 || Tuna >= 1 || Grouper >= 1 || Mackerel >= 1 || Halibut >= 1) {
    Money = Money + (Walleye * Math.floor(RandomNum(6, 15))) + (Salmon * Math.floor(RandomNum(6, 15)))  + (Tuna * Math.floor(RandomNum(6, 15)))  + (Grouper * Math.floor(RandomNum(6, 15)))  + (Mackerel * Math.floor(RandomNum(6, 15))) + (Halibut * Math.floor(RandomNum(6, 15)))
  sleep(100).then(() => 
    Walleye = 0,
    Salmon = 0,
    Tuna = 0,
    Grouper = 0,
    Mackerel = 0,
    Halibut = 0
  );
  console.log("Sold Uncommons")
  }  
}
function SellRares() {
  if (Marlin >=1 || Snapper >= 1 || Eel >= 1) {
    Money = Money + (Marlin * Math.floor(RandomNum(16, 40))) + (Snapper * Math.floor(RandomNum(16, 40)))  + (Eel * Math.floor(RandomNum(16, 40)))
  sleep(100).then(() => 
    Marlin = 0,
    Snapper = 0,
    Eel = 0,
  );
  console.log("Sold Rares")
  } 
}
function SellReallyRares() {
  if (Shark >=1 || Swordfish >= 1 || Sturgeon >= 1 || Butterflyfish >= 1) {
    Money = Money + (Shark * Math.floor(RandomNum(41, 100))) + (Swordfish * Math.floor(RandomNum(41, 100)))  + (Sturgeon * Math.floor(RandomNum(41, 100)))  + (Butterflyfish * Math.floor(RandomNum(41, 100)))
  sleep(100).then(() => 
    Shark = 0,
    Swordfish = 0,
    Sturgeon = 0,
    Butterflyfish = 0,
  );
  console.log("Sold Really Rares")
  }
}
function SellUltraRares() {
  if (Clownfish >=1 || Lionfish >= 1 || Stingray >= 1) {
    Money = Money + (Clownfish * Math.floor(RandomNum(101, 250))) + (Lionfish * Math.floor(RandomNum(101, 250)))  + (Stingray * Math.floor(Math.random() * (153 - 51)) + 51 )
  sleep(100).then(() => 
    Clownfish = 0,
    Lionfish = 0,
    Stingray = 0,
  );
  console.log("Sold Ultra Rares")
  } 
}
function SellGodlys() {
  if (Anglerfish >=1 || RedHandfish >= 1) {
    Money = Money + (Anglerfish * Math.floor(RandomNum(251, 625)))  + (RedHandfish * Math.floor(RandomNum(251, 625))) 
  sleep(100).then(() => 
    Anglerfish = 0,
    RedHandfish = 0,
  );
  console.log("Sold Godlys")
  } 
}
function SellUngodlys() {
  if (SakhalinSturgeon >=1 || DevilsHolePufferfish >= 1) {
    Money = Money + (SakhalinSturgeon * Math.floor(RandomNum(626, 1500))) + (DevilsHolePufferfish * Math.floor(RandomNum(626, 1500))) 
  sleep(100).then(() => 
    SakhalinSturgeon = 0,
    DevilsHolePufferfish = 0,
  );
  console.log("Sold Ungodlys")
  } 
}

function SellALL() {
  SellCommons()
  SellUncommons()
  SellRares()
  SellReallyRares()
  SellUltraRares()
  SellGodlys()
  SellUngodlys()
}

//Switch Menu
function ToInventory() {
  document.getElementById("Sell").style.opacity = "0%";
  document.getElementById("Shop").style.opacity = "0%";
  document.getElementById("Inventory").style.opacity = "100%";
  document.getElementById("Sell").style.zIndex = "1";
  document.getElementById("Shop").style.zIndex = "1";
  document.getElementById("Inventory").style.zIndex = "3";
}
function ToSell() {
  document.getElementById("Sell").style.opacity = "100%";
  document.getElementById("Shop").style.opacity = "0%";
  document.getElementById("Inventory").style.opacity = "0%";
  document.getElementById("Sell").style.zIndex = "3";
  document.getElementById("Shop").style.zIndex = "1";
  document.getElementById("Inventory").style.zIndex = "1";
}
function ToShop() {
  document.getElementById("Sell").style.opacity = "0%";
  document.getElementById("Shop").style.opacity = "100%";
  document.getElementById("Inventory").style.opacity = "0%";
  document.getElementById("Sell").style.zIndex = "1";
  document.getElementById("Shop").style.zIndex = "3";
  document.getElementById("Inventory").style.zIndex = "1";
}

//Shop
function BuySpace(amount, price) {
  if (Money >= price) 
  {
    Money = Money - price;
    BackpackSpace = BackpackSpace + amount;
  } else 
  {
    console.log("Not Enough Money!")
  }
}

function BuyFasterFish() {
  if (Money >= 750) {
    Money = Money - 750;
    FasterFish = true;
    console.log(FasterFish)
    document.getElementById("FasterFishing").style.opacity = "0%"
    document.getElementById("FasterFishing").style.cursor = "not-allowed"
    document.getElementById("FasterFishing").style.pointerEvents = "none"
    document.getElementById("FasterFishingLabel").style.opacity = "0%"
  }
}