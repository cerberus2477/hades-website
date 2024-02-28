// logikai tábla
let kjub = [
  [
    [[0], [0], [0], [0]],
    [[0], [0], [0], [0]],
    [[0], [0], [0], [0]],
    [[0], [0], [0], [0]]
  ],
  [
    [[0], [0], [0], [0]],
    [[0], [0], [0], [0]],
    [[0], [0], [0], [0]],
    [[0], [0], [0], [0]]
  ],
  [
    [[0], [0], [0], [0]],
    [[0], [0], [0], [0]],
    [[0], [0], [0], [0]],
    [[0], [0], [0], [0]]
  ],
  [
    [[0], [0], [0], [0]],
    [[0], [0], [0], [0]],
    [[0], [0], [0], [0]],
    [[0], [0], [0], [0]]
  ]
];

//=================================================================VÁLTOZÓK==============================================================

var swapper = 1; // ki jön éppen
var u = false; // lehet e undo-zni
var stoper = false; // lehet e rakni
var x; // egér kiszámolt X koordinátája
var y; // egér kiszámolt Y koordinátája
var ux; // undo koordináták
var uy;
var uz;

//=================================================================FÜGGVÉNYEK==============================================================

function fresh() {
  // FRISSÍTŐ végigmegy a logikai táblán, és beírja a tényleges értékeket a htmlbe, a hovereknek is ez irja át végén tesztel
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (kjub[i][j][k] == 0) {
          td(i, j, k).innerHTML = "";
          if (swapper == 1) {
            td(i, j, k).dataset.ki = "x";
            document.body.dataset.ki = "x";
          } else {
            td(i, j, k).dataset.ki = "o";
            document.body.dataset.ki = "o";
          }
        } else if (kjub[i][j][k] == 1) {
          td(i, j, k).innerHTML = "X";
          td(i, j, k).dataset.ki = "nax";
        } else if (kjub[i][j][k] == 2) {
          td(i, j, k).innerHTML = "O";
          td(i, j, k).dataset.ki = "nao";
        }
      }
    }
  }
  //console.log("friss")
  test(1);
  test(2);
}
function go(x, y, z) {
  // td cellák onclick funkciója, paraméterek alapján (x,y,z koordináták) átírja a logikai táblát aztán frissít
  if (!stoper) {
    if (kjub[x][y][z] == 0) {
      kjub[x][y][z] = swapper;
      if (swapper == 1) {
        swapper = 2;
      } else {
        swapper = 1;
      }
      ux = x;
      uy = y;
      uz = z;
    }
    u = true;
    fresh();
  }
}
function test(c) {
  // SOK SOK if ami teszteli hogy nyert-e valaki, paraméterrel nem kell csak feleannyi, mert ugye ugyanoda rakhat mindkettő játékos
  //sor
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (
        kjub[i][j][0] == c &&
        kjub[i][j][1] == c &&
        kjub[i][j][2] == c &&
        kjub[i][j][3] == c
      ) {
        for (let k = 0; k < 4; k++) {
          if (c == 1) {
            td(i, j, k).dataset.ki = "wx";
            document.body.dataset.ki = "x";
          } else {
            (td(i, j, k).dataset.ki = "wo"), (document.body.dataset.ki = "o");
          }
        }
        stoper = true;
      }
    }
  }
  //zsor
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (
        kjub[0][i][j] == c &&
        kjub[1][i][j] == c &&
        kjub[2][i][j] == c &&
        kjub[3][i][j] == c
      ) {
        for (let k = 0; k < 4; k++) {
          if (c == 1) {
            td(k, i, j).dataset.ki = "wx";
            document.body.dataset.ki = "x";
          } else {
            (td(k, i, j).dataset.ki = "wo"), (document.body.dataset.ki = "o");
          }
        }
        stoper = true;
      }
    }
  }

  //oszlop
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (
        kjub[i][0][j] == c &&
        kjub[i][1][j] == c &&
        kjub[i][2][j] == c &&
        kjub[i][3][j] == c
      ) {
        for (let k = 0; k < 4; k++) {
          if (c == 1) {
            td(i, k, j).dataset.ki = "wx";
            document.body.dataset.ki = "x";
          } else {
            (td(i, k, j).dataset.ki = "wo"), (document.body.dataset.ki = "o");
          }
        }
        stoper = true;
      }
    }
  }

  //átló
  for (let i = 0; i < 4; i++) {
    if (
      kjub[i][0][0] == c &&
      kjub[i][1][1] == c &&
      kjub[i][2][2] == c &&
      kjub[i][3][3] == c
    ) {
      for (let k = 0; k < 4; k++) {
        if (c == 1) {
          td(i, k, k).dataset.ki = "wx";
          document.body.dataset.ki = "x";
        } else {
          (td(i, k, k).dataset.ki = "wo"), (document.body.dataset.ki = "o");
        }
      }
      stoper = true;
    }
  }
  for (let i = 0; i < 4; i++) {
    if (
      kjub[i][0][3] == c &&
      kjub[i][1][2] == c &&
      kjub[i][2][1] == c &&
      kjub[i][3][0] == c
    ) {
      for (let k = 0; k < 4; k++) {
        if (c == 1) {
          td(i, k, 3 - k).dataset.ki = "wx";
          document.body.dataset.ki = "x";
        } else {
          (td(i, k, 3 - k).dataset.ki = "wo"), (document.body.dataset.ki = "o");
        }
      }
      stoper = true;
    }
  }
  //sorátló
  for (let i = 0; i < 4; i++) {
    if (
      kjub[0][i][0] == c &&
      kjub[1][i][1] == c &&
      kjub[2][i][2] == c &&
      kjub[3][i][3] == c
    ) {
      for (let k = 0; k < 4; k++) {
        if (c == 1) {
          td(k, i, k).dataset.ki = "wx";
          document.body.dataset.ki = "x";
        } else {
          (td(k, i, k).dataset.ki = "wo"), (document.body.dataset.ki = "o");
        }
      }
      stoper = true;
    }
  }
  for (let i = 0; i < 4; i++) {
    if (
      kjub[0][i][3] == c &&
      kjub[1][i][2] == c &&
      kjub[2][i][1] == c &&
      kjub[3][i][0] == c
    ) {
      for (let k = 0; k < 4; k++) {
        if (c == 1) {
          td(k, i, 3 - k).dataset.ki = "wx";
          document.body.dataset.ki = "x";
        } else {
          (td(k, i, 3 - k).dataset.ki = "wo"), (document.body.dataset.ki = "o");
        }
      }
      stoper = true;
    }
  }
  //oszlopátló
  for (let i = 0; i < 4; i++) {
    if (
      kjub[0][0][i] == c &&
      kjub[1][1][i] == c &&
      kjub[2][2][i] == c &&
      kjub[3][3][i] == c
    ) {
      for (let k = 0; k < 4; k++) {
        if (c == 1) {
          td(k, k, i).dataset.ki = "wx";
          document.body.dataset.ki = "x";
        } else {
          (td(k, k, i).dataset.ki = "wo"), (document.body.dataset.ki = "o");
        }
      }
      stoper = true;
    }
  }
  for (let i = 0; i < 4; i++) {
    if (
      kjub[0][3][i] == c &&
      kjub[1][2][i] == c &&
      kjub[2][1][i] == c &&
      kjub[3][0][i] == c
    ) {
      for (let k = 0; k < 4; k++) {
        if (c == 1) {
          td(k, 3 - k, i).dataset.ki = "wx";
          document.body.dataset.ki = "x";
        } else {
          (td(k, 3 - k, i).dataset.ki = "wo"), (document.body.dataset.ki = "o");
        }
      }
      stoper = true;
    }
  }
  //gányátló
  if (
    kjub[0][0][0] == c &&
    kjub[1][1][1] == c &&
    kjub[2][2][2] == c &&
    kjub[3][3][3] == c
  ) {
    for (let k = 0; k < 4; k++) {
      if (c == 1) {
        td(k, k, k).dataset.ki = "wx";
        document.body.dataset.ki = "x";
      } else {
        (td(k, k, k).dataset.ki = "wo"), (document.body.dataset.ki = "o");
      }
    }
    stoper = true;
  }
  if (
    kjub[0][0][3] == c &&
    kjub[1][1][2] == c &&
    kjub[2][2][1] == c &&
    kjub[3][3][0] == c
  ) {
    for (let k = 0; k < 4; k++) {
      if (c == 1) {
        td(k, k, 3 - k).dataset.ki = "wx";
        document.body.dataset.ki = "x";
      } else {
        (td(k, k, 3 - k).dataset.ki = "wo"), (document.body.dataset.ki = "o");
      }
    }
    stoper = true;
  }
  if (
    kjub[0][3][0] == c &&
    kjub[1][2][1] == c &&
    kjub[2][1][2] == c &&
    kjub[3][0][3] == c
  ) {
    for (let k = 0; k < 4; k++) {
      if (c == 1) {
        td(k, 3 - k, k).dataset.ki = "wx";
        document.body.dataset.ki = "x";
      } else {
        (td(k, 3 - k, k).dataset.ki = "wo"), (document.body.dataset.ki = "o");
      }
    }
    stoper = true;
  }
  if (
    kjub[0][3][3] == c &&
    kjub[1][2][2] == c &&
    kjub[2][1][1] == c &&
    kjub[3][0][0] == c
  ) {
    for (let k = 0; k < 4; k++) {
      if (c == 1) {
        td(k, 3 - k, 3 - k).dataset.ki = "wx";
        document.body.dataset.ki = "x";
      } else {
        (td(k, 3 - k, 3 - k).dataset.ki = "wo"),
          (document.body.dataset.ki = "o");
      }
    }
    stoper = true;
  }
  if (stoper) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        for (let k = 0; k < 4; k++) {
          if (kjub[i][j][k] == 0) {
            td(i, j, k).dataset.ki = "na";
          }
        }
      }
    }
  }
}
function undo() {
  // visszalépés, az eltárolt koordináták alapján kitöröl, aztán frissít
  if (u) {
    kjub[ux][uy][uz] = 0;
    u = false;
    if (swapper == 1) {
      swapper = 2;
    } else {
      swapper = 1;
    }
    stoper = false;
    fresh();
  }
}
function renew() {
  // lenullázó, végigmegy kitöröl visszaállít
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        kjub[i][j][k] = 0;
        td(i, j, k).dataset.ki = "x";
        td(i, j, k).innerHTML = "";
      }
    }
  }
  swapper = 1;
  document.body.dataset.ki = "x";
  stoper = false;
  u = false;
}
function td(x, y, z) {
  // csak egy rövidítés a td cellákra hivatkozásra
  return document.getElementById("kjub").children[x].children[0].children[y]
    .children[z];
}
function display() {
  // 3D megjelenítés elindító
  stoper = true;
  fresh();
  document.getElementById("stopdisplay").style.display = "block";
  document.getElementById("display").style.display = "none";
  document.getElementById("renew").style.display = "none";
  document.getElementById("undo").style.display = "none";
  document.addEventListener("mousemove", GetPosition);
  document.getElementById("kjub").dataset.is3d = "true";
}
function stopdisplay() {
  // 3d megjelenítés megállító
  document.getElementById("stopdisplay").style.display = "none";
  document.getElementById("display").style.display = "block";
  document.getElementById("renew").style.display = "block";
  document.getElementById("undo").style.display = "block";
  document.removeEventListener("mousemove", GetPosition);
  document.getElementById("kjub").dataset.is3d = "false";
  stoper = false;
  fresh();
}
function GetPosition(e) {
  // egérpozíció lekérő/számoló
  x = Math.round(window.innerWidth / 2 - e.clientX);
  y = Math.round(window.innerHeight / 2 - e.clientY);
  // console.log(x, y)
  document.documentElement.style.setProperty("--PosX", x);
  document.documentElement.style.setProperty("--PosY", y);
}
