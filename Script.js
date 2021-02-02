// Balanční změny Cena / DMG / Produkce / Upgrade  //

///////////////////////////// Yasuo 1

var Yasuo1_Cena = 10;
var Yasuo1_CenaScale = 10;
var Yasuo1_Dmg = 30;
var Yasuo1_Produkce = 0.5;
var Yasuo1_Upgrade = 1000;

////////////////////////////  Yasuo 2

var Yasuo2_Cena = 100;
var Yasuo2_CenaScale = 100;
var Yasuo2_Dmg = 300;
var Yasuo2_Produkce = 5;
var Yasuo2_Upgrade = 5000;

///////////////////////////// Yasuo 3

var Yasuo3_Cena = 500;
var Yasuo3_CenaScale = 500;
var Yasuo3_Dmg = 1500;
var Yasuo3_Produkce = 25;

////////////////////////////////////////////////////////////// Fiora 1

var Fiora1_Cena = 750;
var Fiora1_CenaScale = 750;
var Fiora1_Dmg = 150;
var Fiora1_Produkce = 50;
var Fiora1_Upgrade = 20000;

//////////////////////////////////////////////////////////////  Fiora 2

var Fiora2_Cena = 7500;
var Fiora2_CenaScale = 7500;
var Fiora2_Dmg = 1500;
var Fiora2_Produkce = 500;
var Fiora2_Upgrade = 100000;

/////////////////////////////////////////////////////////////// Fiora 3

var Fiora3_Cena = 37500;
var Fiora3_CenaScale = 37500;
var Fiora3_Dmg = 7500;
var Fiora3_Produkce = 2500;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Darius 1 

var Darius1_Cena = 1500;
var Darius1_CenaScale = 1500;
var Darius1_Dmg = 750;
var Darius1_Produkce = 30;
var Darius1_Upgrade = 500000;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  Darius 2

var Darius2_Cena = 15000;
var Darius2_CenaScale = 15000;
var Darius2_Dmg = 7500;
var Darius2_Produkce = 300;
var Darius2_Upgrade = 1000000;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Darius 3

var Darius3_Cena = 75000;
var Darius3_CenaScale = 75000;
var Darius3_Dmg = 37500;
var Darius3_Produkce = 1500;

//////////////////////////////////////////////// Baron HP 

var DragonHealth = 5000000;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Picture of Sam creating engine //

function WorkerSamPicture() {
    var SAM = document.createElement("IMG");
    SAM.setAttribute("src", "SAM.png");
    SAM.setAttribute("height", "50");
    SAM.setAttribute("width", "auto");
    SAM.setAttribute("class", "picture");
    document.getElementById("WorkerField").appendChild(SAM);
}

function WorkerSamPicture_2() {
    var SAM_2 = document.createElement("IMG");
    SAM_2.setAttribute("src", "SAM_2.png");
    SAM_2.setAttribute("height", "50");
    SAM_2.setAttribute("width", "auto");
    SAM_2.setAttribute("class", "picture");
    document.getElementById("WorkerField").appendChild(SAM_2);
}

function WorkerSamPicture_3() {
    var SAM_3 = document.createElement("IMG");
    SAM_3.setAttribute("src", "SAM_3.png");
    SAM_3.setAttribute("height", "50");
    SAM_3.setAttribute("width", "auto");
    SAM_3.setAttribute("class", "picture");
    document.getElementById("WorkerField").appendChild(SAM_3);
}

function WorkerRickPicture() {
    var RICK = document.createElement("IMG");
    RICK.setAttribute("src", "RICK.png");
    RICK.setAttribute("height", "50");
    RICK.setAttribute("width", "auto");
    RICK.setAttribute("class", "picture");
    document.getElementById("WorkerField").appendChild(RICK);
}

function WorkerRickPicture_2() {
    var RICK = document.createElement("IMG");
    RICK.setAttribute("src", "RICK_2.png");
    RICK.setAttribute("height", "50");
    RICK.setAttribute("width", "auto");
    RICK.setAttribute("class", "picture");
    document.getElementById("WorkerField").appendChild(RICK);
}

function WorkerRickPicture_3() {
    var RICK = document.createElement("IMG");
    RICK.setAttribute("src", "RICK_3.png");
    RICK.setAttribute("height", "50");
    RICK.setAttribute("width", "auto");
    RICK.setAttribute("class", "picture");
    document.getElementById("WorkerField").appendChild(RICK);
}


function WorkerMaxPicture() {
    var MAX = document.createElement("IMG");
    MAX.setAttribute("src", "MAX.png");
    MAX.setAttribute("height", "50");
    MAX.setAttribute("width", "auto");
    MAX.setAttribute("class", "picture");
   document.getElementById("WorkerField").appendChild(MAX);
}

function WorkerMaxPicture_2() {
    var MAX = document.createElement("IMG");
    MAX.setAttribute("src", "MAX_2.png");
    MAX.setAttribute("height", "50");
    MAX.setAttribute("width", "auto");
    MAX.setAttribute("class", "picture");
   document.getElementById("WorkerField").appendChild(MAX);
}


function WorkerMaxPicture_3() {
    var MAX = document.createElement("IMG");
    MAX.setAttribute("src", "MAX_3.png");
    MAX.setAttribute("height", "50");
    MAX.setAttribute("width", "auto");
    MAX.setAttribute("class", "picture");
   document.getElementById("WorkerField").appendChild(MAX);
}


// Gems per Second // 

var GemsPerSecCounter = document.getElementById("GemsPerSecond");

function GemsPerSecond() {
    document.getElementById("GemsPerSecond").innerHTML = (WorkerSam * Yasuo1_Produkce) + (WorkerSam_2 * Yasuo2_Produkce) + (WorkerSam_3 * Yasuo3_Produkce) + (WorkerRick * Fiora1_Produkce) + (WorkerRick_2 * Fiora2_Produkce) + (WorkerRick_3 * Fiora3_Produkce) + (WorkerMax * Darius1_Produkce) + (WorkerMax_2 * Darius2_Produkce) + (WorkerMax_3 * Darius3_Produkce); 
    GemsPerSecCounter = (WorkerSam * Yasuo1_Produkce) + (WorkerSam_2 * Yasuo2_Produkce) + (WorkerSam_3 * Yasuo3_Produkce) + (WorkerRick * Fiora1_Produkce) + (WorkerRick_2 * Fiora2_Produkce) + (WorkerRick_3 * Fiora3_Produkce) + (WorkerMax * Darius1_Produkce) + (WorkerMax_2 * Darius2_Produkce) + (WorkerMax_3 * Darius3_Produkce);
}


// Clickign engine //
var count = document.getElementById("count");

function Active1() {

    document.getElementById("count").innerHTML = +count + 1;
    count = +count + 1;
}


// Error Message //

function Error2() {
    document.getElementById("ErrorMessage").style.visibility = "hidden";
}

function Error1() {
    document.getElementById("ErrorMessage").style.visibility = "visible";
    setTimeout(Error2, 1000);
}

// Killed workers // 

function KillAllWorkers() {
    var list = document.getElementById("WorkerField");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
  }

function KilledWorkers2() {
    document.getElementById("ErrorMessage1").style.visibility = "hidden";
}

function KilledWorkers() {
    document.getElementById("ErrorMessage1").style.visibility = "visible";
    setTimeout(KilledWorkers2, 2000);
    KillAllWorkers();
}

// Vojsko //

function NoArmy2() {
    document.getElementById("ErrorMessage2").style.visibility = "hidden";
}

function NoArmy() {
    document.getElementById("ErrorMessage2").style.visibility = "visible";
    setTimeout(NoArmy2, 1500);
}

// WOrker SAM // 

var WorkerSam = document.getElementById("WorkerSam");

function Active2() {
    if (count >= Yasuo1_Cena) {
        document.getElementById("count").innerHTML = count - Yasuo1_Cena;
        count = count - Yasuo1_Cena;
        Yasuo1_Cena = Yasuo1_Cena + Yasuo1_CenaScale;
        document.getElementById("Yasuo1_Cena").innerHTML = Yasuo1_Cena;
        document.getElementById("WorkerSam").innerHTML = +WorkerSam + 1;
        WorkerSam = +WorkerSam + 1;
        WorkerSamPicture();
        WorkerCountFunction();
        GemsPerSecond();
    } else {
        Error1();
    }
}

function Active2_1() {
    if (count >= (Yasuo1_Cena * 5)) {
        Active2();
        Active2();
        Active2();
        Active2();
        Active2();
    } else {
        Error1();
    }
}

// Worker Sam 2 Upgraded // 

var WorkerSam_2 = document.getElementById("WorkerSam_2");

function Active2_2() {
    if (count >= Yasuo2_Cena) {
        document.getElementById("count").innerHTML = +count - Yasuo2_Cena;
        count = +count - Yasuo2_Cena;
        Yasuo2_Cena = Yasuo2_Cena + Yasuo2_CenaScale;
        document.getElementById("Yasuo2_Cena").innerHTML = Yasuo2_Cena;
        document.getElementById("WorkerSam_2").innerHTML = +WorkerSam_2 + 1;
        WorkerSam_2 = +WorkerSam_2 + 1;
        WorkerSamPicture_2();
        WorkerCountFunction();
        GemsPerSecond();
    } else {
        Error1();
    }
}

function Active2_3() {
    if (count > (Yasuo2_Cena * 5)) {
        Active2_2();
        Active2_2();
        Active2_2();
        Active2_2();
        Active2_2();
    } else {
        Error1();
    }
}

// Worker SAM 3 UPGRADED // 

var WorkerSam_3 = document.getElementById("WorkerSam_3");

function Active2_4() {

    if (count >= Yasuo3_Cena) {
        document.getElementById("count").innerHTML = +count - Yasuo3_Cena;
        count = +count - Yasuo3_Cena;
        Yasuo3_Cena = Yasuo3_Cena + Yasuo3_CenaScale;
        document.getElementById("Yasuo3_Cena").innerHTML = Yasuo3_Cena;
        document.getElementById("WorkerSam_3").innerHTML = +WorkerSam_3 + 1;
        WorkerSam_3 = +WorkerSam_3 + 1;
        WorkerSamPicture_3();
        WorkerCountFunction();
        GemsPerSecond();
    } else {
        Error1();
    }
}

function Active2_5() {

    if (count >= (Yasuo3_Cena * 5)) {
        Active2_4();
        Active2_4();
        Active2_4();
        Active2_4();
        Active2_4();
    } else {
        Error1();
    }
}


 // Worker Rick //
 var WorkerRick = document.getElementById("WorkerRick");

 function Active3() {
     if (count >= Fiora1_Cena) {
 
         document.getElementById("count").innerHTML = +count - Fiora1_Cena;
         count = +count - Fiora1_Cena;
         Fiora1_Cena = Fiora1_Cena + Fiora1_CenaScale;
        document.getElementById("Fiora1_Cena").innerHTML = Fiora1_Cena;
         document.getElementById("WorkerRick").innerHTML = +WorkerRick + 1;
         WorkerRick = +WorkerRick + 1;
         WorkerRickPicture();
         WorkerCountFunction();
         GemsPerSecond();
     } else {
 
         Error1();
 
     }
 }
 
 function Active3_1() {
     if (count >= (Fiora1_Cena * 5)) {
        Active3();
        Active3();
        Active3();
        Active3();
        Active3();
     } else {
 
         Error1();
     }
 }
 
 // Worker Rick 2 Upgraded // 

var WorkerRick_2 = document.getElementById("WorkerRick_2");

function Active3_2() {
    if (count >= Fiora2_Cena) {
        document.getElementById("count").innerHTML = +count - Fiora2_Cena;
        count = +count - Fiora2_Cena;
        Fiora2_Cena = Fiora2_Cena + Fiora2_CenaScale;
        document.getElementById("Fiora2_Cena").innerHTML = Fiora2_Cena;
        document.getElementById("WorkerRick_2").innerHTML = +WorkerRick_2 + 1;
        WorkerRick_2 = +WorkerRick_2 + 1;
        WorkerRickPicture_2();
        WorkerCountFunction();
        GemsPerSecond();
    } else {
        Error1();
    }
}

function Active3_3() {
    if (count > (Fiora2_Cena * 5)) {
        Active3_2();
        Active3_2();
        Active3_2();
        Active3_2();
        Active3_2();
    } else {
        Error1();
    }
}

// Worker Rick 3 UPGRADED // 

var WorkerRick_3 = document.getElementById("WorkerRick_3");

function Active3_4() {

    if (count >= Fiora3_Cena) {
        document.getElementById("count").innerHTML = +count - Fiora3_Cena;
        count = +count - Fiora3_Cena;
        Fiora3_Cena = Fiora3_Cena + Fiora3_CenaScale;
        document.getElementById("Fiora3_Cena").innerHTML = Fiora3_Cena;
        document.getElementById("WorkerRick_3").innerHTML = +WorkerRick_3 + 1;
        WorkerRick_3 = +WorkerRick_3 + 1;
        WorkerRickPicture_3();
        WorkerCountFunction();
        GemsPerSecond();
    } else {
        Error1();
    }
}

function Active3_5() {

    if (count >= (Fiora3_Cena * 5)) {
        Active3_4();
        Active3_4();
        Active3_4();
        Active3_4();
        Active3_4();
    } else {
        Error1();
    }
}


  // Worker Max // 
  var WorkerMax = document.getElementById("WorkerMax");
 
  function Active4() {
      if (count > Darius1_Cena) {
 
          document.getElementById("count").innerHTML = +count - Darius1_Cena;
          count = +count - Darius1_Cena;
          Darius1_Cena = Darius1_Cena + Darius1_CenaScale;
          document.getElementById("Darius1_Cena").innerHTML = Darius1_Cena;
          document.getElementById("WorkerMax").innerHTML = +WorkerMax + 1;
          WorkerMax = +WorkerMax + 1;
          WorkerMaxPicture();
          WorkerCountFunction();
          GemsPerSecond();
 
      } else {
 
          Error1();
      }
  }
  
  function Active4_1() {
      if (count >= (Darius1_Cena * 5)) {
        Active4();
        Active4();
        Active4();
        Active4();
        Active4();
      } else {
 
          Error1();
      }
  }

  // Worker MAX 2 Upgraded // 

var WorkerMax_2 = document.getElementById("WorkerMax_2");

function Active4_2() {
    if (count >= Darius2_Cena) {
        document.getElementById("count").innerHTML = +count - Darius2_Cena;
        count = +count - Darius2_Cena;
        Darius2_Cena = Darius2_Cena + Darius2_CenaScale;
        document.getElementById("Darius2_Cena").innerHTML = Darius2_Cena;
        document.getElementById("WorkerMax_2").innerHTML = +WorkerMax_2 + 1;
        WorkerMax_2 = +WorkerMax_2 + 1;
        WorkerMaxPicture_2();
        WorkerCountFunction();
        GemsPerSecond();
    } else {
        Error1();
    }
}

function Active4_3() {
    if (count > (Darius2_Cena * 5)) {
        Active4_2();
        Active4_2();
        Active4_2();
        Active4_2();
        Active4_2();
    } else {
        Error1();
    }
}

// Worker MAX 3 UPGRADED // 

var WorkerMax_3 = document.getElementById("WorkerMax_3");

function Active4_4() {

    if (count >= Darius3_Cena ) {
        document.getElementById("count").innerHTML = +count - Darius3_Cena;
        count = +count - Darius3_Cena;
        Darius3_Cena = Darius3_Cena + Darius3_CenaScale;
        document.getElementById("Darius3_Cena").innerHTML = Darius3_Cena;
        document.getElementById("WorkerMax_3").innerHTML = +WorkerMax_3 + 1;
        WorkerMax_3 = +WorkerMax_3 + 1;
        WorkerMaxPicture_3();
        WorkerCountFunction();
        GemsPerSecond();
    } else {
        Error1();
    }
}

function Active4_5() {

    if (count >= (Darius3_Cena * 5)) {
        Active4_4();
        Active4_4();
        Active4_4();
        Active4_4();
        Active4_4();
    } else {
        Error1();
    }
}


// dissmiss ugrade buttons // 

function DissmissUpgradeButton() {
    document.getElementById("UpgradeButtonSam1").style.visibility = "hidden";
}

function DissmissUpgradeButton2() {
    document.getElementById("UpgradeButtonSam2").style.visibility = "hidden";
}

function DissmissUpgradeButtonFiora() {
    document.getElementById("UpgradeButtonFiora1").style.visibility = "hidden";
}

function DissmissUpgradeButton2Fiora() {
    document.getElementById("UpgradeButtonFiora2").style.visibility = "hidden";
}

function DissmissUpgradeButtonDarius() {
    document.getElementById("UpgradeButtonDarius1").style.visibility = "hidden";
}

function DissmissUpgradeButton2Darius() {
    document.getElementById("UpgradeButtonDarius2").style.visibility = "hidden";
}


// Upgrade YASUO 1 // 

function UpgradeSam1() {
    if (count >= Yasuo1_Upgrade ) {

    document.getElementById("SamUpgrade2").style.visibility = "visible";
    document.getElementById("count").innerHTML = +count - Yasuo1_Upgrade;
    count = +count - Yasuo1_Upgrade;
    DissmissUpgradeButton();

    } else {

    Error1();

    }
}

// Upgrade FIORA 1 // 

function UpgradeFiora1() {
    if (count >= Fiora1_Upgrade) {

    document.getElementById("FioraUpgrade2").style.visibility = "visible";
    document.getElementById("count").innerHTML = +count - Fiora1_Upgrade;
    count = +count - Fiora1_Upgrade;
    DissmissUpgradeButtonFiora();

    } else {

    Error1();

    }
}

// Upgrade Darius 1 // 

function UpgradeDarius1() {
    if (count >= Darius1_Upgrade) {

    document.getElementById("DariusUpgrade2").style.visibility = "visible";
    document.getElementById("count").innerHTML = +count - Darius1_Upgrade;
    count = +count - Darius1_Upgrade;
    DissmissUpgradeButtonDarius();

    } else {

    Error1();

    }
}

// Upgrade YASUO 2// 

function UpgradeSam2() {
    if (count >= Yasuo2_Upgrade) {

    document.getElementById("SamUpgrade3").style.visibility = "visible";
    document.getElementById("count").innerHTML = +count - Yasuo2_Upgrade;
    count = +count - Yasuo2_Upgrade;
    DissmissUpgradeButton2();

    } else {

    Error1();
    }
}

// Upgrade Fiora 2// 

function UpgradeFiora2() {
    if (count >= Fiora2_Upgrade) {

    document.getElementById("FioraUpgrade3").style.visibility = "visible";
    document.getElementById("count").innerHTML = +count - Fiora2_Upgrade;
    count = +count - Fiora2_Upgrade;
    DissmissUpgradeButton2Fiora()

    } else {

    Error1();
    }
}

// Upgrade Darius 2// 

function UpgradeDarius2() {
    if (count >= Darius2_Upgrade) {

    document.getElementById("DariusUpgrade3").style.visibility = "visible";
    document.getElementById("count").innerHTML = +count - Darius2_Upgrade;
    count = +count - Darius2_Upgrade;
    DissmissUpgradeButton2Darius();

    } else {

    Error1();
    }
}

// workers engine // 

WorkersGoToWork = setInterval(Work1, 1000);

function Work1() {

    document.getElementById("count").innerHTML = +count + (+WorkerSam * Yasuo1_Produkce);
    count = +count + (+WorkerSam * Yasuo1_Produkce);

    document.getElementById("count").innerHTML = +count + (+WorkerSam_2 * Yasuo2_Produkce);
    count = +count + (+WorkerSam_2 * Yasuo2_Produkce);

    document.getElementById("count").innerHTML = +count + (+WorkerSam_3 * Yasuo3_Produkce);
    count = +count + (+WorkerSam_3 * Yasuo3_Produkce);

    document.getElementById("count").innerHTML = +count + (+WorkerRick * Fiora1_Produkce);
    count = +count + (+WorkerRick * Fiora1_Produkce);

    document.getElementById("count").innerHTML = +count + (+WorkerRick_2 * Fiora2_Produkce);
    count = +count + (+WorkerRick_2 * Fiora2_Produkce);

    document.getElementById("count").innerHTML = +count + (+WorkerRick_3 * Fiora3_Produkce);
    count = +count + (+WorkerRick_3 * Fiora3_Produkce);

    document.getElementById("count").innerHTML = +count + (+WorkerMax * Darius1_Produkce);
    count = +count + (+WorkerMax * Darius1_Produkce);

    document.getElementById("count").innerHTML = +count + (+WorkerMax_2 * Darius2_Produkce);
    count = +count + (+WorkerMax_2 * Darius2_Produkce);

    document.getElementById("count").innerHTML = +count + (+WorkerMax_3 * Darius3_Produkce);
    count = +count + (+WorkerMax_3 * Darius3_Produkce);
}

// Worker Count Engine // 

var WorkerCount = document.getElementById("WorkerCount");
var WorkerCount1 = document.getElementById("WorkerCount1");

function WorkerCountFunction() {

    document.getElementById("WorkerCount",).innerHTML = +WorkerSam + +WorkerSam_2 + +WorkerSam_3 + +WorkerRick + +WorkerRick_2 + +WorkerRick_3 + +WorkerMax + +WorkerMax_2 + +WorkerMax_3;
    WorkerCount = +WorkerSam + +WorkerSam_2 + +WorkerSam_3 + +WorkerRick + +WorkerRick_2 + +WorkerRick_3 + +WorkerMax + +WorkerMax_2 + +WorkerMax_3;

    document.getElementById("WorkerCount1").innerHTML = WorkerCount;
    WorkerCount1 = WorkerCount;
}

// Dragon ///

function AtackDragon() {

    var health = document.getElementById("health");

    document.getElementById("DragonHealth").innerHTML = +DragonHealth - ((+WorkerSam * Yasuo1_Dmg) + (+WorkerSam_2 * Yasuo2_Dmg) + (+WorkerSam_3 * Yasuo3_Dmg) + (+WorkerRick * Fiora1_Dmg) + (+WorkerRick_2 * Fiora2_Dmg) + (+WorkerRick_3 * Fiora3_Dmg) + (+WorkerMax * Darius1_Dmg)+ (+WorkerMax_2 * Darius2_Dmg)+ (+WorkerMax_3 * Darius3_Dmg));
    DragonHealth = +DragonHealth - ((+WorkerSam * Yasuo1_Dmg) + (+WorkerSam_2 * Yasuo2_Dmg) + (+WorkerSam_3 * Yasuo3_Dmg) + (+WorkerRick * Fiora1_Dmg) + (+WorkerRick_2 * Fiora2_Dmg) + (+WorkerRick_3 * Fiora3_Dmg) + (+WorkerMax * Darius1_Dmg)+ (+WorkerMax_2 * Darius2_Dmg)+ (+WorkerMax_3 * Darius3_Dmg));
    health.value -= ((+WorkerSam * Yasuo1_Dmg) + (+WorkerSam_2 * Yasuo2_Dmg) + (+WorkerSam_3 * Yasuo3_Dmg) + (+WorkerRick * Fiora1_Dmg) + (+WorkerRick_2 * Fiora2_Dmg) + (+WorkerRick_3 * Fiora3_Dmg) + (+WorkerMax * Darius1_Dmg)+ (+WorkerMax_2 * Darius2_Dmg)+ (+WorkerMax_3 * Darius3_Dmg));; 
    WorkerSam = 0;
    document.getElementById("WorkerSam").innerHTML = 0;
    WorkerSam_2 = 0;
    document.getElementById("WorkerSam_2").innerHTML = 0;
    WorkerSam_3 = 0;
    document.getElementById("WorkerSam_3").innerHTML = 0;
    WorkerRick = 0;
    document.getElementById("WorkerRick").innerHTML = 0;
    WorkerRick_2 = 0;
    document.getElementById("WorkerRick_2").innerHTML = 0;
    WorkerRick_3 = 0;
    document.getElementById("WorkerRick_3").innerHTML = 0;
    WorkerMax = 0;
    document.getElementById("WorkerMax").innerHTML = 0;
    WorkerMax_2 = 0;
    document.getElementById("WorkerMax_2").innerHTML = 0;
    WorkerMax_3 = 0;
    document.getElementById("WorkerMax_3").innerHTML = 0;
    WorkerCountFunction();
    KilledWorkers();
    GemsPerSecond();
    GameOver();
}
 
// konec hry //

function WIN() {
    document.getElementById("WIN").style.visibility = "visible";
}   


function GameOver(){
    if(DragonHealth > 0 ) {
        GemsPerSecond();
    }
    else {
        WIN();
    }
}


// baron gif //

function BaronFightGIF() {
    document.getElementById("BaronGIF").style.visibility = "hidden";
}

function BaronFightGIF2() {

    if(WorkerCount >= 100) {

    document.getElementById("BaronGIF").style.visibility = "visible";
    setTimeout(BaronFightGIF, 3000);
    setTimeout(AtackDragon, 3100);
    playAudio();
    }
    else {
        NoArmy();
    }
}

////////// HELP ME /////////////////////

function HelpMe() {
    document.getElementById("HiddenHelpLayer").style.visibility = "visible";
}

function HelpMeExit() {
    document.getElementById("HiddenHelpLayer").style.visibility = "hidden";
}


















