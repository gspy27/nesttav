const textLabel = document.getElementById("ResultText");
let fishable = true

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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function Fish() {
  let fishNum = Math.random() * (99 + 1);
  
  if (fishable = true) 
  {
    if (fishNum <= 50) 
  {
    textLabel.innerHTML = "Fishing...";
    fishable = false;
    let sleepTime = 1754;
    let whichFishNum = Math.floor(Math.random() * 4); //Five Fish
    fishable = false
    document.getElementById("GoFishDiv").style.marginLeft = "2000%";

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
    sleep(sleepTime + 2100).then(() => textLabel.innerHTML = "")
    sleep(sleepTime + 2100).then(() => textLabel.style.color = "black");
    sleep(sleepTime + 2100).then(() => document.getElementById("GoFishDiv").style.marginLeft = "40%");
    sleep(sleepTime + 2100).then(() => fishable = true);
  } else if (fishNum <= 75 && fishNum > 50)
  {
    textLabel.innerHTML = "Fishing...";
    fishable = false;
    let sleepTime = 1754;
    let whichFishNum = Math.floor(Math.random() * 5); //Six Fish
    document.getElementById("GoFishDiv").style.marginLeft = "2000%";
    
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
    sleep(sleepTime + 2100).then(() => textLabel.innerHTML = "")
    sleep(sleepTime + 2100).then(() => textLabel.style.color = "black");
    sleep(sleepTime + 2100).then(() => document.getElementById("GoFishDiv").style.marginLeft = "40%");
    sleep(sleepTime + 2100).then(() => fishable = true);
  } else if (fishNum <= 87.5 && fishNum > 75)
  {
    textLabel.innerHTML = "Fishing..."
    fishable = false
    let sleepTime = 1754;
    let whichFishNum = Math.floor(Math.random() * 2) // Three Fish
    document.getElementById("GoFishDiv").style.marginLeft = "2000%"
    
    if (whichFishNum === 0) 
    {
      sleep(sleepTime).then(() => Halibut ++);
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
    sleep(sleepTime + 2100).then(() => textLabel.innerHTML = "")
    sleep(sleepTime + 2100).then(() => textLabel.style.color = "black");
    sleep(sleepTime + 2100).then(() => document.getElementById("GoFishDiv").style.marginLeft = "40%");
    sleep(sleepTime + 2100).then(() => fishable = true);
  } else if (fishNum <= 93.75 && fishNum > 87.5)
  {
    textLabel.innerHTML = "Fishing..."
    fishable =  false;
    let sleepTime = 1754;
    let whichFishNum = Math.floor(Math.random() * 3) //Four Fish
    document.getElementById("GoFishDiv").style.marginLeft = "2000%"
    
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
    sleep(sleepTime + 2100).then(() => textLabel.innerHTML = "")
    sleep(sleepTime + 2100).then(() => textLabel.style.color = "black");
    sleep(sleepTime + 2100).then(() => document.getElementById("GoFishDiv").style.marginLeft = "40%");
    sleep(sleepTime + 2100).then(() => fishable = true);
  } else if (fishNum <= 96.875 && fishNum > 93.75)
  {
    textLabel.innerHTML = "Fishing..."
    fishable = false;
    let sleepTime = 1754;
    let whichFishNum = Math.floor(Math.random() * 2) //Three Fish
    document.getElementById("GoFishDiv").style.marginLeft = "2000%"
    
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

    sleep(sleepTime).then(() => textLabel.style.color = "rgba(88, 85, 5, 1)");
    sleep(sleepTime + 2100).then(() => textLabel.innerHTML = "")
    sleep(sleepTime + 2100).then(() => textLabel.style.color = "black");
    sleep(sleepTime + 2100).then(() => document.getElementById("GoFishDiv").style.marginLeft = "40%");
    sleep(sleepTime + 2100).then(() => fishable = true);
  } else if (fishNum <= 98.4375 && fishNum > 96.875)
  {
    textLabel.innerHTML = "Fishing..."
    fishable = false;
    let sleepTime = 1754;
    let whichFishNum = Math.floor(Math.random() * 1) //Two Fish
    document.getElementById("GoFishDiv").style.marginLeft = "2000%"
    
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
    sleep(sleepTime + 2100).then(() => textLabel.innerHTML = "")
    sleep(sleepTime + 2100).then(() => textLabel.style.color = "black");
    sleep(sleepTime + 2100).then(() => document.getElementById("GoFishDiv").style.marginLeft = "40%");
    sleep(sleepTime + 2100).then(() => fishable = true);
  } else if (fishNum <= 99.609375 && fishNum > 98.4375)
  {
    textLabel.innerHTML = "Fishing..."
    fishable = false;
    let sleepTime = 1754;
    let whichFishNum = Math.floor(Math.random() * 1) //Two Fish
    document.getElementById("GoFishDiv").style.marginLeft = "2000%"
    
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
    sleep(sleepTime + 2100).then(() => textLabel.innerHTML = "")
    sleep(sleepTime + 2100).then(() => textLabel.style.color = "black");
    sleep(sleepTime + 2100).then(() => document.getElementById("GoFishDiv").style.marginLeft = "40%");
    sleep(sleepTime + 2100).then(() => fishable = true);
  } else if (fishNum <= 99.998 && fishNum > 99.609375)
  {
    textLabel.innerHTML = "Fishing..."
    fishable = false;
    let sleepTime = 1754;
    document.getElementById("GoFishDiv").style.marginLeft = "2000%"
    sleep(sleepTime).then(() => TheFish ++);
    sleep(sleepTime).then(() => textLabel.innerHTML = "You caught The Fish");
    sleep(sleepTime).then(() => textLabel.style.color = "rgba(255, 0, 0, 1)");
    sleep(sleepTime + 2100).then(() => textLabel.innerHTML = "")
    sleep(sleepTime + 2100).then(() => textLabel.style.color = "black");
    sleep(sleepTime + 2100).then(() => document.getElementById("GoFishDiv").style.marginLeft = "40%");
    sleep(sleepTime + 2100).then(() => fishable = true);
  } else 
  {
    textLabel.innerHTML = "Fishing..."
    fishable = false;
    let sleepTime = 1754;
    document.getElementById("GoFishDiv").style.marginLeft = "2000%"
    sleep(sleepTime).then(() => QuestionFish ++);
    sleep(sleepTime).then(() => textLabel.innerHTML = "You caught a ???");
    sleep(sleepTime).then(() => textLabel.style.color = "rgba(43, 10, 10, 1)");
    sleep(sleepTime + 2100).then(() => textLabel.innerHTML = "")
    sleep(sleepTime + 2100).then(() => textLabel.style.color = "black");
    sleep(sleepTime + 2100).then(() => document.getElementById("GoFishDiv").style.marginLeft = "40%");
    sleep(sleepTime + 2100).then(() => fishable = true);
  }

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