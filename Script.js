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
    document.getElementById("GemsPerSecond").innerHTML = (WorkerSam * 0.5) + (WorkerSam_2 * 5) + (WorkerSam_3 * 25) + (WorkerRick * 666.5) + (WorkerRick_2 * 6666.5) + (WorkerRick_3 * 33333.5 + (WorkerMax * 20000) + (WorkerMax_2 * 200000) + (WorkerMax_3 * 1000000)); 
    GemsPerSecCounter = (WorkerSam * 0.5) + (WorkerSam_2 * 5) + (WorkerSam_3 * 25) + (WorkerRick * 666.5) + (WorkerRick_2 * 6666.5) + (WorkerRick_3 * 33333.5 + (WorkerMax * 20000) + (WorkerMax_2 * 200000) + (WorkerMax_3 * 1000000)); 
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
    if (count >= 10) {
        document.getElementById("count").innerHTML = count - 10;
        count = count - 10;
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
    if (count >= 50) {
        document.getElementById("count").innerHTML = +count - 50;
        count = +count - 50;
        document.getElementById("WorkerSam").innerHTML = +WorkerSam + 5;
        WorkerSam = +WorkerSam + 5;
        WorkerSamPicture();
        WorkerSamPicture();
        WorkerSamPicture();
        WorkerSamPicture();
        WorkerSamPicture();
        WorkerCountFunction();
        GemsPerSecond();
    } else {
        Error1();
    }
}

// Worker Sam 2 Upgraded // 

var WorkerSam_2 = document.getElementById("WorkerSam_2");

function Active2_2() {
    if (count >= 100) {
        document.getElementById("count").innerHTML = +count - 100;
        count = +count - 100;
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
    if (count > 500) {
        document.getElementById("count").innerHTML = +count - 500;
        count = +count - 500;
        document.getElementById("WorkerSam_2").innerHTML = +WorkerSam_2 + 5;
        WorkerSam_2 = +WorkerSam_2 + 5;
        WorkerSamPicture_2();
        WorkerSamPicture_2();
        WorkerSamPicture_2();
        WorkerSamPicture_2();
        WorkerSamPicture_2();
        WorkerCountFunction();
        GemsPerSecond();
    } else {
        Error1();
    }
}

// Worker SAM 3 UPGRADED // 

var WorkerSam_3 = document.getElementById("WorkerSam_3");

function Active2_4() {

    if (count >= 500 ) {
        document.getElementById("count").innerHTML = +count - 500;
        count = +count - 500;
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

    if (count >= 2500) {
        document.getElementById("count").innerHTML = +count - 2500;
        count = +count - 2500;
        document.getElementById("WorkerSam_3").innerHTML = +WorkerSam_3 + 5;
        WorkerSam_3 = +WorkerSam_3 + 5;
        WorkerSamPicture_3();
        WorkerSamPicture_3();
        WorkerSamPicture_3();
        WorkerSamPicture_3();
        WorkerSamPicture_3();
        WorkerCountFunction();
        GemsPerSecond();
    } else {
        Error1();
    }
}


 // Worker Rick //
 var WorkerRick = document.getElementById("WorkerRick");

 function Active3() {
     if (count >= 10000) {
 
         document.getElementById("count").innerHTML = +count - 10000;
         count = +count - 10000;
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
     if (count >= 1250) {
 
         document.getElementById("count").innerHTML = +count - 1250;
         count = +count - 1250;
         document.getElementById("WorkerRick").innerHTML = +WorkerRick + 5;
         WorkerRick = +WorkerRick + 5;
         WorkerRickPicture();
         WorkerRickPicture();
         WorkerRickPicture();
         WorkerRickPicture();
         WorkerRickPicture();
         WorkerCountFunction();
         GemsPerSecond();
     } else {
 
         Error1();
     }
 }
 
 // Worker Rick 2 Upgraded // 

var WorkerRick_2 = document.getElementById("WorkerRick_2");

function Active3_2() {
    if (count >= 100000) {
        document.getElementById("count").innerHTML = +count - 100000;
        count = +count - 100000;
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
    if (count > 500000) {
        document.getElementById("count").innerHTML = +count - 500000;
        count = +count - 500000;
        document.getElementById("WorkerRick_2").innerHTML = +WorkerRick_2 + 5;
        WorkerRick_2 = +WorkerRick_2 + 5;
        WorkerRickPicture_2();
        WorkerRickPicture_2();
        WorkerRickPicture_2();
        WorkerRickPicture_2();
        WorkerRickPicture_2();
        WorkerCountFunction();
        GemsPerSecond();
    } else {
        Error1();
    }
}

// Worker Rick 3 UPGRADED // 

var WorkerRick_3 = document.getElementById("WorkerRick_3");

function Active3_4() {

    if (count >= 2500000 ) {
        document.getElementById("count").innerHTML = +count - 2500000;
        count = +count - 2500000;
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

    if (count >= 1250000) {
        document.getElementById("count").innerHTML = +count - 1250000;
        count = +count - 1250000;
        document.getElementById("WorkerRick_3").innerHTML = +WorkerRick_3 + 5;
        WorkerRick_3 = +WorkerRick_3 + 5;
        WorkerRickPicture_3();
        WorkerRickPicture_3();
        WorkerRickPicture_3();
        WorkerRickPicture_3();
        WorkerRickPicture_3();
        WorkerCountFunction();
        GemsPerSecond();
    } else {
        Error1();
    }
}


  // Worker Max // 
  var WorkerMax = document.getElementById("WorkerMax");
 
  function Active4() {
      if (count > 1000000) {
 
          document.getElementById("count").innerHTML = +count - 1000000 ;
          count = +count - 1000000;
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
      if (count >= 5000000) {
 
          document.getElementById("count").innerHTML = +count - 5000000;
          count = +count - 5000000;
          document.getElementById("WorkerMax").innerHTML = +WorkerMax + 5;
          WorkerMax = +WorkerMax + 5;
          WorkerMaxPicture();
          WorkerMaxPicture();
          WorkerMaxPicture();
          WorkerMaxPicture();
          WorkerMaxPicture();
          WorkerCountFunction();
          GemsPerSecond();
 
      } else {
 
          Error1();
      }
  }

  // Worker MAX 2 Upgraded // 

var WorkerMax_2 = document.getElementById("WorkerMax_2");

function Active4_2() {
    if (count >= 10000000) {
        document.getElementById("count").innerHTML = +count - 10000000;
        count = +count - 10000000;
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
    if (count > 50000000 ) {
        document.getElementById("count").innerHTML = +count - 50000000;
        count = +count - 50000000;
        document.getElementById("WorkerMax_2").innerHTML = +WorkerMax_2 + 5;
        WorkerMax_2 = +WorkerMax_2 + 5;
        WorkerMaxPicture_2();
        WorkerMaxPicture_2();
        WorkerMaxPicture_2();
        WorkerMaxPicture_2();
        WorkerMaxPicture_2();
        WorkerCountFunction();
        GemsPerSecond();
    } else {
        Error1();
    }
}

// Worker MAX 3 UPGRADED // 

var WorkerMax_3 = document.getElementById("WorkerMax_3");

function Active4_4() {

    if (count >= 50000000 ) {
        document.getElementById("count").innerHTML = +count - 50000000;
        count = +count - 50000000;
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

    if (count >= 250000000) {
        document.getElementById("count").innerHTML = +count - 250000000;
        count = +count - 250000000;
        document.getElementById("WorkerMax_3").innerHTML = +WorkerMax_3 + 5;
        WorkerMax_3 = +WorkerMax_3 + 5;
        WorkerMaxPicture_3();
        WorkerMaxPicture_3();
        WorkerMaxPicture_3();
        WorkerMaxPicture_3();
        WorkerMaxPicture_3();
        WorkerCountFunction();
        GemsPerSecond();
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
    if (count >= 5000 ) {

    document.getElementById("SamUpgrade2").style.visibility = "visible";
    document.getElementById("count").innerHTML = +count - 5000;
    count = +count - 5000;
    DissmissUpgradeButton()

    } else {

    Error1()

    }
}

// Upgrade FIORA 1 // 

function UpgradeFiora1() {
    if (count >= 1000000) {

    document.getElementById("FioraUpgrade2").style.visibility = "visible";
    document.getElementById("count").innerHTML = +count - 1000000;
    count = +count - 1000000;
    DissmissUpgradeButtonFiora()

    } else {

    Error1()

    }
}

// Upgrade Darius 1 // 

function UpgradeDarius1() {
    if (count >= 1000000000) {

    document.getElementById("DariusUpgrade2").style.visibility = "visible";
    document.getElementById("count").innerHTML = +count - 1000000000;
    count = +count - 1000000000;
    DissmissUpgradeButtonDarius()

    } else {

    Error1()

    }
}

// Upgrade YASUO 2// 

function UpgradeSam2() {
    if (count >= 50000) {

    document.getElementById("SamUpgrade3").style.visibility = "visible";
    document.getElementById("count").innerHTML = +count - 50000;
    count = +count - 50000;
    DissmissUpgradeButton2()

    } else {

    Error1()
    }
}

// Upgrade Fiora 2// 

function UpgradeFiora2() {
    if (count >= 10000000 ) {

    document.getElementById("FioraUpgrade3").style.visibility = "visible";
    document.getElementById("count").innerHTML = +count - 10000000;
    count = +count - 10000000;
    DissmissUpgradeButton2Fiora()

    } else {

    Error1()
    }
}

// Upgrade Darius 2// 

function UpgradeDarius2() {
    if (count >= 10000000000) {

    document.getElementById("DariusUpgrade3").style.visibility = "visible";
    document.getElementById("count").innerHTML = +count - 10000000000;
    count = +count - 10000000000;
    DissmissUpgradeButton2Darius()

    } else {

    Error1()
    }
}

// workers engine // 

WorkersGoToWork = setInterval(Work1, 1000);

function Work1() {

    document.getElementById("count").innerHTML = +count + (+WorkerSam * 0.5);
    count = +count + (+WorkerSam * 0.5);

    document.getElementById("count").innerHTML = +count + (+WorkerSam_2 * 5);
    count = +count + (+WorkerSam_2 * 5);

    document.getElementById("count").innerHTML = +count + (+WorkerSam_3 * 25);
    count = +count + (+WorkerSam_3 * 25);

    document.getElementById("count").innerHTML = +count + (+WorkerRick * 666.5);
    count = +count + (+WorkerRick * 666.5);

    document.getElementById("count").innerHTML = +count + (+WorkerRick_2 * 6666.5);
    count = +count + (+WorkerRick_2 * 6666.5);

    document.getElementById("count").innerHTML = +count + (+WorkerRick_3 * 33333.5);
    count = +count + (+WorkerRick_3 * 33333.5);

    document.getElementById("count").innerHTML = +count + (+WorkerMax * 20000);
    count = +count + (+WorkerMax * 20000);

    document.getElementById("count").innerHTML = +count + (+WorkerMax_2 * 200000);
    count = +count + (+WorkerMax_2 * 200000);

    document.getElementById("count").innerHTML = +count + (+WorkerMax_3 * 1000000);
    count = +count + (+WorkerMax_3 * 1000000);
}

// Worker Count Engine // 

var WorkerCount = document.getElementById("WorkerCount");
var WorkerCount1 = document.getElementById("WorkerCount1");

function WorkerCountFunction() {

    document.getElementById("WorkerCount",).innerHTML = +WorkerSam + +WorkerSam_2 + +WorkerSam_3 + +WorkerRick + +WorkerRick_2 + +WorkerRick_3 + +WorkerMax + +WorkerMax_2 + +WorkerMax_3;
    WorkerCount = +WorkerSam + +WorkerSam_2 + +WorkerSam_3 + +WorkerRick + +WorkerRick_2 + +WorkerRick_3 + +WorkerMax + +WorkerMax_2 + +WorkerMax_3;
    document.getElementById("WorkerCount1").innerHTML = +WorkerSam + +WorkerSam_2 + +WorkerSam_3 + +WorkerRick + +WorkerRick_2 + +WorkerRick_3 + +WorkerMax + +WorkerMax_2 + +WorkerMax_3;
    WorkerCount1 = +WorkerSam + +WorkerSam_2 + +WorkerSam_3 + +WorkerRick + +WorkerRick_2 + +WorkerRick_3 + +WorkerMax + +WorkerMax_2 + +WorkerMax_3;
}

// Dragon ///

var DragonHealth = 1250000000;

function AtackDragon() {
    if(WorkerCount > 100) {

    document.getElementById("DragonHealth").innerHTML = +DragonHealth - ((+WorkerSam * 30) + (+WorkerSam_2 * 300) + (+WorkerSam_3 * 1500) + (+WorkerRick * 2000) + (+WorkerRick_2 * 20000) + (+WorkerRick_3 * 100000) + (+WorkerMax * 500000)+ (+WorkerMax_2 * 5000000)+ (+WorkerMax_3 * 25000000));
    DragonHealth = +DragonHealth - ((+WorkerSam * 30) + (+WorkerSam_2 * 300) + (+WorkerSam_3 * 1500) + (+WorkerRick * 2000) + (+WorkerRick_2 * 20000) + (+WorkerRick_3 * 100000) + (+WorkerMax * 500000)+ (+WorkerMax_2 * 5000000)+ (+WorkerMax_3 * 25000000));
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
    GemsPerSecond()

    } else {

    NoArmy();
    }
}
function GameOver(){
    if(DragonHealth > 0 ) {
        GemsPerSecond()
    }
    else {
        document.body.style.background = "black";
        alert("You Win, Phe");
    }
}




























