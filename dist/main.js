/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addPopUp: () => (/* binding */ addPopUp),\n/* harmony export */   displayInfoMessage: () => (/* binding */ displayInfoMessage),\n/* harmony export */   displayInstructionMessage: () => (/* binding */ displayInstructionMessage),\n/* harmony export */   displayWinner: () => (/* binding */ displayWinner),\n/* harmony export */   drawBoard: () => (/* binding */ drawBoard),\n/* harmony export */   play: () => (/* binding */ play),\n/* harmony export */   playAgain: () => (/* binding */ playAgain),\n/* harmony export */   removeListeners: () => (/* binding */ removeListeners)\n/* harmony export */ });\nfunction getPromiseFromEvent(board, i, j, item, event) {\n  return new Promise(function (resolve) {\n    var listener = function listener() {\n      item.removeEventListener(event, listener);\n      if (board.getAt(i, j) === undefined) {\n        item.classList.toggle('missed');\n      } else {\n        item.classList.toggle('attacked');\n      }\n      resolve([i, j]);\n    };\n    item.addEventListener(event, listener);\n  });\n}\nfunction removeAllChildNodes(parent) {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\nfunction deleteBoards() {\n  var container = document.querySelector('.container');\n  var computerBoard = container.firstChild;\n  removeAllChildNodes(container);\n  container.append(computerBoard);\n}\nfunction newGame() {\n  var container = document.querySelector('.container');\n  removeAllChildNodes(container);\n}\nfunction drawBoard(board, player) {\n  if (player) {\n    // delete last board\n    deleteBoards();\n  }\n  var promises = [];\n  var grid = board.grid;\n  var target = document.querySelector('.container');\n  var gameboard = document.createElement('div');\n  gameboard.classList.add('game-board');\n  grid.forEach(function (row, i) {\n    row.forEach(function (square, j) {\n      var cell = document.createElement('div');\n      cell.classList.add('square');\n      if (player && board.getAt(i, j) !== undefined && !board.wasAttacked(i, j)) {\n        cell.classList.add('ship');\n      }\n      if (board.getAt(i, j) === undefined && board.wasAttacked(i, j)) {\n        cell.classList.add('missed');\n      }\n      if (board.getAt(i, j) !== undefined && board.wasAttacked(i, j)) {\n        cell.classList.add('attacked');\n      }\n\n      // make promise event listeners\n      if (!player) {\n        promises.push(getPromiseFromEvent(board, i, j, cell, 'click'));\n      }\n      gameboard.append(cell);\n    });\n  });\n  target.append(gameboard);\n  return promises;\n}\nfunction play(gameLoop) {\n  var target = document.querySelector('.main');\n  var button = document.createElement('button');\n  var info = document.querySelector('.info');\n  button.classList.add('play');\n  button.textContent = 'play';\n  target.append(button);\n  button.addEventListener('click', function () {\n    info.style.display = 'grid';\n    newGame();\n    gameLoop();\n  });\n}\nfunction displayInfoMessage(message, position) {\n  var info = position === 'left' ? document.querySelector('.info-left') : document.querySelector('.info-right');\n  info.textContent = message;\n  setTimeout(function () {\n    info.textContent = '';\n  }, 1500);\n}\nfunction setTitle() {\n  var title = document.querySelector('.title');\n  title.textContent = 'Battleship!';\n}\nfunction setBoardNames() {\n  var player = document.querySelector('.player');\n  var computer = document.querySelector('.computer');\n  player.textContent = 'Player board';\n  computer.textContent = 'Computer board';\n}\nfunction displayInstructionMessage() {\n  setTitle();\n  setBoardNames();\n  var instructions = document.querySelector('.instructions');\n  instructions.textContent = 'Click on a cell in the left board to launch an attack!';\n}\nfunction displayWinner(winner) {\n  var infoBottom = document.querySelector('.info-bottom');\n  infoBottom.textContent = \"\".concat(winner, \" wins!\");\n}\nfunction playAgain() {\n  var button = document.querySelector('.play');\n  button.textContent = 'play again';\n}\nfunction removeListeners() {\n  var squares = document.querySelectorAll('.square');\n  squares.forEach(function (square) {\n    square.replaceWith(square.cloneNode(true));\n  });\n}\nfunction removePopUp() {\n  var main = document.querySelector('.main');\n  main.removeChild(main.firstChild);\n}\nfunction addPopUp(winner) {\n  var main = document.querySelector('.main');\n  var popUp = document.createElement('div');\n  var shadow = document.createElement('div');\n  var content = document.createElement('div');\n  var button = document.createElement('button');\n  var text = document.createElement('div');\n  popUp.classList.add('pop-up');\n  shadow.classList.add('shadow');\n  content.classList.add('content');\n  text.classList.add('text');\n  text.textContent = \"\".concat(winner, \" win this time!\");\n  button.classList.add('continue');\n  button.textContent = 'continue';\n  shadow.addEventListener('click', removePopUp, {\n    once: true\n  });\n  button.addEventListener('click', removePopUp, {\n    once: true\n  });\n  content.append(text);\n  content.append(button);\n  popUp.append(shadow);\n  popUp.append(content);\n  main.prepend(popUp, main.firstChild);\n}\n\n\n//# sourceURL=webpack://project-battleship/./src/display.js?");

/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n\nvar gameLoop = function gameLoop() {\n  (0,_display__WEBPACK_IMPORTED_MODULE_2__.playAgain)();\n  (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayInstructionMessage)();\n\n  // create players\n  var player = (0,_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(true);\n  var computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false);\n\n  // create gameboards\n  var playerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  var computerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  // fill gameboards\n  var shipSize = [5, 4, 3, 3, 2];\n  shipSize.forEach(function (ship) {\n    playerGameboard.loadBoard(ship);\n    computerGameboard.loadBoard(ship);\n  });\n\n  // draw boards\n  var playerPromises = (0,_display__WEBPACK_IMPORTED_MODULE_2__.drawBoard)(computerGameboard, false);\n  (0,_display__WEBPACK_IMPORTED_MODULE_2__.drawBoard)(playerGameboard, true);\n\n  // turn loops\n  playerPromises.forEach(function (promise) {\n    promise.then(function (coords) {\n      // player make a play\n      computerGameboard.receiveAttack.apply(computerGameboard, _toConsumableArray(coords));\n      var computerSquare = computerGameboard.getAt.apply(computerGameboard, _toConsumableArray(coords));\n      if (computerSquare !== undefined) {\n        (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayInfoMessage)('A ship has been hit!', 'left');\n        if (computerSquare.isSunk()) {\n          (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayInfoMessage)('The ship sank!', 'left');\n        }\n      } else {\n        (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayInfoMessage)('Attack missed!', 'left');\n      }\n\n      // computer makes a play\n      setTimeout(function () {\n        var computerPlay = computer.makePlay();\n        while (playerGameboard.wasAttacked.apply(playerGameboard, _toConsumableArray(computerPlay))) {\n          computerPlay = computer.makePlay();\n        }\n        playerGameboard.receiveAttack.apply(playerGameboard, _toConsumableArray(computerPlay));\n        (0,_display__WEBPACK_IMPORTED_MODULE_2__.drawBoard)(playerGameboard, true);\n        if (playerGameboard.getAt.apply(playerGameboard, _toConsumableArray(computerPlay)) !== undefined) {\n          (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayInfoMessage)('A ship has been hit!', 'right');\n          if (playerGameboard.getAt.apply(playerGameboard, _toConsumableArray(computerPlay)).isSunk()) {\n            (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayInfoMessage)('The ship sank!', 'right');\n          }\n        } else {\n          (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayInfoMessage)('Attack missed!', 'right');\n        }\n      }, 500);\n      if (playerGameboard.allSunk() || computerGameboard.allSunk()) {\n        // end game - repeat\n        if (playerGameboard.allSunk()) {\n          (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayWinner)('Computer');\n          (0,_display__WEBPACK_IMPORTED_MODULE_2__.addPopUp)('Computer');\n        } else {\n          (0,_display__WEBPACK_IMPORTED_MODULE_2__.displayWinner)('Player');\n          (0,_display__WEBPACK_IMPORTED_MODULE_2__.addPopUp)('player');\n        }\n        (0,_display__WEBPACK_IMPORTED_MODULE_2__.removeListeners)(playerGameboard);\n      }\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameLoop);\n\n//# sourceURL=webpack://project-battleship/./src/gameLoop.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nfunction Gameboard() {\n  var grid = Array.from({\n    length: 10\n  }, function () {\n    return Array(10).fill();\n  });\n  var attacked = new Set();\n  var shipList = [];\n  var isValidPlacement = function isValidPlacement(x, y, shipLen, position) {\n    if (position === 'row' && y + shipLen >= 10 || position !== 'row' && x + shipLen >= 10) return false;\n    var shipRow = y === 0 ? [3, shipLen + 1] : [3, shipLen + 2];\n    var shipCol = y === 0 ? [shipLen + 2, 2] : [shipLen + 2, 3];\n    var shipDir = position === 'row' ? shipRow : shipCol;\n    var row = x - 1;\n    var col = y === 0 ? 0 : y - 1;\n    var matrix = grid.filter(function (_, i) {\n      return i >= row && i < row + shipDir[0];\n    }).map(function (a) {\n      return a.slice(col, col + shipDir[1]);\n    });\n    return matrix.every(function (subArray) {\n      return subArray.every(function (cell) {\n        return cell === undefined;\n      });\n    });\n  };\n  var placeShip = function placeShip(x, y, shipLen, position) {\n    var newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(shipLen);\n    shipList.push(newShip);\n    if (position === 'row') {\n      for (var i = 0; i < shipLen; i += 1) {\n        grid[x][y + i] = newShip;\n      }\n    } else {\n      for (var _i = 0; _i < shipLen; _i += 1) {\n        grid[x + _i][y] = newShip;\n      }\n    }\n  };\n  var loadBoard = function loadBoard(shipLen) {\n    var row = parseInt(10 * Math.random(), 10);\n    var col = parseInt(10 * Math.random(), 10);\n    var position = parseInt(2 * Math.random(), 10) === 1 ? 'row' : 'col';\n    if (isValidPlacement(row, col, shipLen, position)) {\n      placeShip(row, col, shipLen, position);\n      return;\n    }\n    loadBoard(shipLen);\n  };\n  var getAt = function getAt(x, y) {\n    return grid[x][y];\n  };\n  var receiveAttack = function receiveAttack(x, y) {\n    if (grid[x][y] !== undefined) {\n      grid[x][y].hit();\n      attacked.add(\"\".concat(x, \", \").concat(y));\n      return true;\n    }\n    attacked.add(\"\".concat(x, \", \").concat(y));\n    return false;\n  };\n  var wasAttacked = function wasAttacked(x, y) {\n    return attacked.has(\"\".concat(x, \", \").concat(y));\n  };\n  var allSunk = function allSunk() {\n    var ships = shipList.filter(function (ship) {\n      return !ship.isSunk();\n    });\n    return !ships.length;\n  };\n  return {\n    grid: grid,\n    placeShip: placeShip,\n    getAt: getAt,\n    allSunk: allSunk,\n    isValidPlacement: isValidPlacement,\n    receiveAttack: receiveAttack,\n    wasAttacked: wasAttacked,\n    loadBoard: loadBoard\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://project-battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLoop */ \"./src/gameLoop.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n(0,_display__WEBPACK_IMPORTED_MODULE_1__.play)(_gameLoop__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://project-battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Player(player) {\n  var turn = player === true;\n  var makePlay = function makePlay() {\n    var x = parseInt(Math.random() * 10, 10);\n    var y = parseInt(Math.random() * 10, 10);\n    return [x, y];\n  };\n  var switchTurn = function switchTurn() {\n    turn = !turn;\n  };\n  return {\n    player: player,\n    turn: turn,\n    makePlay: makePlay,\n    switchTurn: switchTurn\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://project-battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Ship(length) {\n  var hits = 0;\n  var hit = function hit() {\n    hits += 1;\n  };\n  var getHits = function getHits() {\n    return hits;\n  };\n  var isSunk = function isSunk() {\n    return length - hits <= 0;\n  };\n  return {\n    length: length,\n    hits: hits,\n    hit: hit,\n    getHits: getHits,\n    isSunk: isSunk\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://project-battleship/./src/ship.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/style.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/style.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/image.jpeg */ \"./src/img/image.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html, body {\n    margin: 0;\n    padding: 0;\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    max-height: 1200px;\n}\n\nbody {\n    background: #4e4c4c;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n}\n\n.main {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 1200px;\n    margin-top: 100px;\n}\n\n.text {\n    display: flex;\n    flex-flow: column;\n    max-width: 1200px;\n    min-width: 1200px;\n    border-radius: 12px;\n    background: hsla(0, 0%, 0%, 0.7);\n    border: 2px solid #424d58;\n    color: beige;\n}\n\n.title {\n    display: flex;\n    flex: 1;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    font-size: 48px;\n    font-weight: bold;\n    justify-content: center;\n}\n\n.instructions-container {\n    display: grid;\n    min-height: 150px;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 3fr 1fr;\n}\n\n\n.instructions {\n    display: flex;\n    flex: 1;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    font-size: 24px;\n    justify-content: center;\n    align-items: center;\n    grid-column: 1/3;\n}\n\n.computer, .player {\n    text-align: center;\n    font-size: 24px;\n}\n\n.player {\n    margin-left: 50px;\n}\n\n.computer{\n    margin-right: 50px;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: repeat(2, 700px);\n    justify-content: center;\n    justify-items: center;\n}\n\n.game-board {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    height: 500px;\n    width: 500px;\n    margin: 30px;\n}\n\n.square {\n    box-sizing: border-box;\n    background-color: azure;\n    border: 2px solid black;\n    height: 50px;\n    width: 50px;\n    min-width: 10px;\n    min-height: 10px;\n}\n\n.square.missed {\n    box-sizing: border-box;\n    background-color: gray;\n    border: 2px solid black;\n    height: 50px;\n    width: 50px;\n    min-width: 10px;\n    min-height: 10px;\n}\n\n.square.ship {\n    box-sizing: border-box;\n    background-color: goldenrod;\n    border: 2px solid black;\n    height: 50px;\n    width: 50px;\n    min-width: 10px;\n    min-height: 10px;\n}\n\n.square.attacked {\n    box-sizing: border-box;\n    background-color: rgb(240, 14, 14);\n    border: 2px solid black;\n    height: 50px;\n    width: 50px;\n    min-width: 10px;\n    min-height: 10px;\n}\n\n.info {\n    min-height: 200px;\n    background: rgba(0, 0, 0, 0.7);\n    border: 2px solid #424d58;\n    border-radius: 12px;\n    display: none;\n    grid-template-columns: repeat(2, 600px);\n    grid-template-rows: 1fr 1fr;\n}\n\n.info-left, .info-right {\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    font-size: 22px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: beige;\n}\n\n\n\n.info-bottom {\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    font-size: 22px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    grid-column: 1/3;\n    grid-row: 2/3;\n}\n\n.play {\n    border-radius: 8px;\n    font-size: 20px;\n    min-height: 50px;\n    min-width: 200px;\n    margin: 25px;\n}\n\n.shadow {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    content: ' ';\n    background-color: rgba(0, 0, 0, 0.7);\n}\n\n.content {\n    border: 2px solid #424d58;\n    border-radius: 12px;\n    width: 600px;\n    height: 200px;\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: center;\n    background-color: #c1cad3;\n\n    position: fixed;\n    top: 42vh;\n    left: 50vw;\n    transform: translate(-50%, -50%);\n}`, \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./style.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/img/image.jpeg":
/*!****************************!*\
  !*** ./src/img/image.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d6b462c22f4842053bdf.jpeg\";\n\n//# sourceURL=webpack://project-battleship/./src/img/image.jpeg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;