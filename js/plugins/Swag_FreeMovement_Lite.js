//=============================================================================
// Swag_FreeMovement.js
//=============================================================================

/*:
 * @target MV MZ
 * @plugindesc [v2.0.0 LITE] Smooth 8-direction pixel movement for the player with wall sliding. Free edition, MV & MZ.
 * @author SwagTopus
 * @url https://swagtopus.itch.io/
 *
 * @param Diagonal Movement
 * @type boolean
 * @desc Allow moving in 8 directions.
 * @default true
 *
 * @command Enable
 * @text Enable Free Movement
 *
 * @command Disable
 * @text Disable Free Movement (tile movement)
 *
 * @help
 * ============================================================================
 *  ★ SWAG FREE MOVEMENT v2.0.0 ★            RPG Maker MV + MZ
 * ============================================================================
 * The player walks freely in 8 directions instead of jumping from tile to
 * tile. Movement is pixel-smooth, slides along walls and slips around
 * corners, so it feels like a modern action RPG. Events, followers and the
 * rest of the engine keep working on the normal tile grid.
 *
 * LITE EDITION: 8-direction pixel movement, wall sliding, all event
 * triggers, followers, encounters, vehicles, Enable / Disable commands.
 * PRO adds corner assist, mouse / touch click-to-move, an adjustable
 * hitbox and the "Disable Switch" for cutscenes:
 * https://swagtopus.itch.io/swag-free-movement
 *
 * What works:
 *  - Keyboard / gamepad (8 directions, same speed on diagonals)
 *  - (PRO) Mouse / touch: click to walk there
 *  - Dash, encounters, floor damage, step counting (once per tile walked)
 *  - Events: Action Button, Player Touch, Event Touch, all priorities
 *  - Walk animation, bushes, ladders, map scrolling, looping maps
 *  - "Set Movement Route" on the player (snaps to the grid by itself)
 *  - Vehicles (inside a vehicle the normal tile movement is used)
 *
 * Commands:
 *  MV:  FreeMovement on   /   FreeMovement off
 *  MZ:  Plugin Command > Enable / Disable
 *  Script: Swag.FreeMove.enable() / disable() / isEnabled()
 *  (PRO) Or use the "Disable Switch" parameter.
 *
 * Tips:
 *  - The hitbox is 0.6 x 0.45 tiles (fits standard 48px sprites).
 *  - Not compatible with other pixel-movement plugins.
 *
 * Terms: free for commercial and non-commercial games. Credit "SwagTopus".
 */
/*:ru
 * @target MV MZ
 * @plugindesc [v2.0.0 LITE] Плавное пиксельное движение игрока в 8 направлениях со скольжением по стенам. Бесплатная версия, MV и MZ.
 * @author SwagTopus
 * @url https://swagtopus.itch.io/
 *
 * @param Diagonal Movement
 * @text Диагональное движение
 * @type boolean
 * @desc Разрешить движение в 8 направлениях.
 * @default true
 *
 * @command Enable
 * @text Включить свободное движение
 *
 * @command Disable
 * @text Выключить (движение по клеткам)
 *
 * @help
 * ============================================================================
 *  ★ SWAG FREE MOVEMENT v2.0.0 ★            RPG Maker MV + MZ
 * ============================================================================
 * Игрок ходит свободно в 8 направлениях, а не прыгает по клеткам. Движение
 * плавное, персонаж скользит вдоль стен и огибает углы. События, спутники и
 * остальной движок продолжают работать по обычной сетке.
 *
 * LITE-ВЕРСИЯ: пиксельное движение в 8 направлениях, скольжение по
 * стенам, все триггеры событий, спутники, встречи, транспорт, команды
 * Enable / Disable. В PRO: обход углов, ходьба по клику мышью / тачем,
 * настраиваемый хитбокс и "Переключатель отключения" для катсцен:
 * https://swagtopus.itch.io/swag-free-movement
 *
 * Что работает:
 *  - Клавиатура / геймпад (8 направлений, по диагонали та же скорость)
 *  - (PRO) Мышь / тач: клик - идти туда
 *  - Бег, встречи, урон от пола, счётчик шагов (раз за пройденный тайл)
 *  - События: Кнопка действия, Касание игрока, Касание события, приоритеты
 *  - Анимация ходьбы, кусты, лестницы, скролл карты, зацикленные карты
 *  - "Задать маршрут" для игрока (сам выравнивается по сетке)
 *  - Транспорт (внутри транспорта обычное движение)
 *
 * Команды:
 *  MV:  FreeMovement on   /   FreeMovement off
 *  MZ:  Команда плагина > Enable / Disable
 *  Скрипт: Swag.FreeMove.enable() / disable() / isEnabled()
 *  (PRO) Или параметр "Переключатель отключения".
 *
 * Условия: бесплатно для коммерческих и некоммерческих игр. Кредит "SwagTopus".
 */

var Imported = Imported || {};
Imported.Swag_FreeMovement = '2.0.0';

var Swag = Swag || {};
Swag.FreeMove = Swag.FreeMove || {};

(function ($) {
    'use strict';

    var LITE = true; // FREE edition - get PRO: https://swagtopus.itch.io/swag-free-movement
    var PRO_URL = 'https://swagtopus.itch.io/swag-free-movement';

    function liteBlock(feature) {
        if (!LITE) return false;
        if (!liteBlock._warned) liteBlock._warned = {};
        if (!liteBlock._warned[feature]) {
            liteBlock._warned[feature] = true;
            console.warn('[Swag Free Movement Lite] "' + feature + '" is a PRO feature: ' + PRO_URL);
        }
        return true;
    }

    var IS_MZ = Utils.RPGMAKER_NAME === 'MZ';
    var pluginName = (function () {
        var sc = document.currentScript;
        var m = sc && sc.src ? decodeURIComponent(sc.src).match(/([^\/\\]+)\.js(?:\?.*)?$/) : null;
        return m ? m[1] : 'Swag_FreeMovement';
    })();
    var P = PluginManager.parameters(pluginName);
    if (!Object.keys(P).length) P = PluginManager.parameters('Swag_FreeMovement');

    function num(k, d) { var v = P[k]; return (v === undefined || v === '' || isNaN(Number(v))) ? d : Number(v); }

    var CFG = {
        diagonal: String(P['Diagonal Movement'] || 'true') === 'true',
        hw: num('Hitbox Width', 0.6),
        hh: num('Hitbox Height', 0.45),
        oy: num('Hitbox Offset Y', 0.2),
        assist: num('Corner Assist', 0.3),
        switchId: num('Disable Switch', 0)
    };
    if (LITE) { // fixed hitbox, no corner assist, no disable switch
        CFG.hw = 0.6; CFG.hh = 0.45; CFG.oy = 0.2; CFG.assist = 0; CFG.switchId = 0;
    }
    var EPS = 0.0001;

    // ------------------------------------------------------------------
    // API
    // ------------------------------------------------------------------
    $.enable = function () { if ($gameSystem) $gameSystem._swagFreeMoveOff = false; };
    $.disable = function () {
        if ($gameSystem) $gameSystem._swagFreeMoveOff = true;
        if ($gamePlayer) $gamePlayer.fmSnapToGrid();
    };
    $.isEnabled = function () {
        if (!$gameSystem || $gameSystem._swagFreeMoveOff) return false;
        return !(CFG.switchId > 0 && $gameSwitches && $gameSwitches.value(CFG.switchId));
    };

    // ------------------------------------------------------------------
    // Collision (tile units: a character at x covers [x, x+1))
    // ------------------------------------------------------------------
    function tileSolid(x, y) {
        if (!$gameMap.isValid(x, y)) return true;
        return !$gameMap.isPassable(x, y, 2) && !$gameMap.isPassable(x, y, 4) &&
            !$gameMap.isPassable(x, y, 6) && !$gameMap.isPassable(x, y, 8);
    }

    function overlaps(box, x, y) {
        return box.r > x + EPS && box.l < x + 1 - EPS && box.b > y + EPS && box.t < y + 1 - EPS;
    }

    Game_Player.prototype.fmBox = function (x, y) {
        var cx = x + 0.5, cy = y + 0.5 + CFG.oy;
        return { l: cx - CFG.hw / 2, r: cx + CFG.hw / 2, t: cy - CFG.hh / 2, b: cy + CFG.hh / 2 };
    };

    Game_Player.prototype.fmEventAt = function (box) {
        var list = $gameMap.events();
        for (var i = 0; i < list.length; i++) {
            var ev = list[i];
            if (!ev || ev._erased || ev.isThrough() || !ev.isNormalPriority()) continue;
            if (overlaps(box, ev._realX, ev._realY)) return ev;
        }
        return null;
    };

    // Can the hitbox move from (x0, y0) to (x, y)?  Remembers a blocking event in _fmBumped.
    Game_Player.prototype.fmCanStand = function (x0, y0, x, y) {
        this._fmBumped = null;
        if (this.isThrough() || this.isDebugThrough()) return true;
        var box = this.fmBox(x, y), old = this.fmBox(x0, y0);
        var ol = Math.floor(old.l + EPS), or = Math.floor(old.r - EPS);
        var ot = Math.floor(old.t + EPS), ob = Math.floor(old.b - EPS);
        for (var ty = Math.floor(box.t + EPS); ty <= Math.floor(box.b - EPS); ty++) {
            for (var tx = Math.floor(box.l + EPS); tx <= Math.floor(box.r - EPS); tx++) {
                if (tx >= ol && tx <= or && ty >= ot && ty <= ob) continue; // already standing there
                var mx = $gameMap.roundX(tx), my = $gameMap.roundY(ty);
                if (tileSolid(mx, my)) return false;
                // directional edges (cliffs, one-way tiles)
                var fx = Math.max(ol, Math.min(tx, or)), fy = Math.max(ot, Math.min(ty, ob));
                var d = tx > fx ? 6 : tx < fx ? 4 : ty > fy ? 2 : 8;
                if (!$gameMap.isPassable($gameMap.roundX(fx), $gameMap.roundY(fy), d) || !$gameMap.isPassable(mx, my, 10 - d)) return false;
            }
        }
        var ev = this.fmEventAt(box);
        if (ev && ev !== this.fmEventAt(old)) { this._fmBumped = ev; return false; }
        return true;
    };

    // ------------------------------------------------------------------
    // Integer x / y for the rest of the engine
    // ------------------------------------------------------------------
    Game_Player.prototype.fmActive = function () {
        return $.isEnabled() && !this.isInVehicle() && !this.isMoveRouteForcing() && !this.isJumping();
    };
    Game_Player.prototype.fmTileX = function () { return $gameMap.roundX(Math.floor(this._x + 0.5)); };
    Game_Player.prototype.fmTileY = function () { return $gameMap.roundY(Math.floor(this._y + 0.5 + CFG.oy)); };

    Object.defineProperties(Game_Player.prototype, {
        x: { get: function () { return this._fmFree ? this.fmTileX() : this._x; }, configurable: true },
        y: { get: function () { return this._fmFree ? this.fmTileY() : this._y; }, configurable: true }
    });

    Game_Player.prototype.pos = function (x, y) { return this.x === x && this.y === y; };

    Game_Player.prototype.fmSnapToGrid = function () {
        if (!this._fmFree) return;
        var tx = this.fmTileX(), ty = this.fmTileY();
        this._fmFree = false;
        this._fmMoving = false;
        this._x = this._realX = tx;
        this._y = this._realY = ty;
    };

    var _Game_Player_initMembers = Game_Player.prototype.initMembers;
    Game_Player.prototype.initMembers = function () {
        _Game_Player_initMembers.call(this);
        this._fmFree = false;
        this._fmMoving = false;
        this._fmDist = 0;
        this._fmStuck = 0;
    };

    var _Game_Player_locate = Game_Player.prototype.locate;
    Game_Player.prototype.locate = function (x, y) {
        this._fmFree = false;
        this._fmMoving = false;
        _Game_Player_locate.call(this, x, y);
    };

    var _Game_Player_isMoving = Game_Player.prototype.isMoving;
    Game_Player.prototype.isMoving = function () {
        return this._fmFree ? !!this._fmMoving : _Game_Player_isMoving.call(this);
    };

    // Tile-based movement (move routes, vehicles, jumps) starts from the grid
    ['forceMoveRoute', 'getOnVehicle', 'jump'].forEach(function (fn) {
        var orig = Game_Player.prototype[fn];
        Game_Player.prototype[fn] = function () {
            this.fmSnapToGrid();
            return orig.apply(this, arguments);
        };
    });

    // ------------------------------------------------------------------
    // Input
    // ------------------------------------------------------------------
    var _Game_Player_moveByInput = Game_Player.prototype.moveByInput;
    Game_Player.prototype.moveByInput = function () {
        if (!this.fmActive()) {
            if (this._fmFree) this.fmSnapToGrid();
            return _Game_Player_moveByInput.call(this);
        }
        this._fmMoving = false;
        if (!this.canMove()) return;
        if (!this._fmFree) {
            if (_Game_Player_isMoving.call(this)) return; // finish the current tile step
            this._fmFree = true;
        }
        var dir = CFG.diagonal ? Input.dir8 : Input.dir4;
        var dx = 0, dy = 0;
        if (dir > 0) {
            dx = (dir % 3 === 0) ? 1 : (dir % 3 === 1) ? -1 : 0;
            dy = (dir <= 3) ? 1 : (dir >= 7) ? -1 : 0;
            $gameTemp.clearDestination();
        } else if (LITE && $gameTemp.isDestinationValid()) {
            liteBlock('Click / touch to move');
            $gameTemp.clearDestination();
        }
        if (dx === 0 && dy === 0) return;
        var len = Math.sqrt(dx * dx + dy * dy);
        if (len > 1) { dx /= len; dy /= len; }
        this.fmFace(dx, dy);
        if (this.fmMove(dx * this.distancePerFrame(), dy * this.distancePerFrame())) {
            this._fmStuck = 0;
        } else {
            if (this._fmBumped) this.fmBumpEvent(this._fmBumped);
            if ($gameTemp.isDestinationValid() && ++this._fmStuck > 20) $gameTemp.clearDestination();
        }
    };

    Game_Player.prototype.fmFace = function (dx, dy) {
        if (this.isDirectionFixed()) return;
        if (Math.abs(dx) > Math.abs(dy) + 0.01) this.setDirection(dx > 0 ? 6 : 4);
        else if (Math.abs(dy) > Math.abs(dx) + 0.01) this.setDirection(dy > 0 ? 2 : 8);
        else {
            var h = dx > 0 ? 6 : 4, v = dy > 0 ? 2 : 8;
            if (this.direction() !== h && this.direction() !== v) this.setDirection(h);
        }
    };

    Game_Player.prototype.fmMove = function (dx, dy) {
        var x0 = this._x, y0 = this._y;
        var nx = x0 + dx, ny = y0 + dy;
        var ok = this.fmCanStand(x0, y0, nx, ny);
        var bumped = this._fmBumped;
        if (!ok && dx !== 0 && dy !== 0) {
            // diagonal into a wall: slide along it
            if (this.fmCanStand(x0, y0, x0 + dx, y0)) { ny = y0; ok = true; }
            else if (this.fmCanStand(x0, y0, x0, y0 + dy)) { nx = x0; ok = true; }
        }
        this._fmBumped = ok ? null : bumped;
        if (!ok) return false;
        var tileX = this.fmTileX(), tileY = this.fmTileY();
        if ($gameMap.isLoopHorizontal()) nx = (nx + $gameMap.width()) % $gameMap.width();
        if ($gameMap.isLoopVertical()) ny = (ny + $gameMap.height()) % $gameMap.height();
        this._x = this._realX = nx;
        this._y = this._realY = ny;
        this._fmMoving = true;
        this.refreshBushDepth();
        // engine "steps" (encounters, floor damage, states) once per tile of distance
        this._fmDist = (this._fmDist || 0) + Math.sqrt(dx * dx + dy * dy);
        if (this._fmDist >= 1) {
            this._fmDist -= 1;
            this.increaseSteps();
            if (!$gameMap.isEventRunning()) {
                $gameParty.onPlayerWalk();
                this.updateEncounterCount();
            }
        }
        if (this.fmTileX() !== tileX || this.fmTileY() !== tileY) {
            this._fmEntered = true;
            this._followers.updateMove(); // the engine does this on every tile step
        }
        return true;
    };

    var _Game_Player_updateMove = Game_Player.prototype.updateMove;
    Game_Player.prototype.updateMove = function () {
        if (!this._fmFree) _Game_Player_updateMove.call(this);
    };

    // Engine's per-step logic -> per tile entered in free mode
    var _Game_Player_updateNonmoving = Game_Player.prototype.updateNonmoving;
    Game_Player.prototype.updateNonmoving = function (wasMoving, sceneActive) {
        if (!this._fmFree) return _Game_Player_updateNonmoving.call(this, wasMoving, sceneActive);
        if (!$gameMap.isEventRunning() && sceneActive) this.triggerAction();
    };

    var _Game_Player_update = Game_Player.prototype.update;
    Game_Player.prototype.update = function (sceneActive) {
        _Game_Player_update.call(this, sceneActive);
        if (this._fmFree && this._fmEntered) {
            this._fmEntered = false;
            if (!$gameMap.isEventRunning() && this.canStartLocalEvents()) {
                this.checkEventTriggerHere([1, 2]);
                $gameMap.setupStartingEvent();
            }
        }
    };

    // Bumping into a normal-priority Player/Event Touch event starts it (once per contact)
    Game_Player.prototype.fmBumpEvent = function (ev) {
        if ($gameMap.isEventRunning() || !this.canStartLocalEvents()) return;
        if (this._fmLastBump === ev && this._fmBumpFrames++ < 30) return;
        this._fmLastBump = ev;
        this._fmBumpFrames = 0;
        if (ev.isTriggerIn([1, 2])) ev.start();
    };

    // Event Touch from events walking into the player
    var _Game_Event_checkEventTriggerTouch = Game_Event.prototype.checkEventTriggerTouch;
    Game_Event.prototype.checkEventTriggerTouch = function (x, y) {
        if (!$gamePlayer._fmFree) return _Game_Event_checkEventTriggerTouch.call(this, x, y);
        if (!$gameMap.isEventRunning() && this._trigger === 2 && this.isNormalPriority() && !this.isJumping() &&
            overlaps($gamePlayer.fmBox($gamePlayer._x, $gamePlayer._y), x, y)) {
            this.start();
        }
    };

    // Events can't walk into the player's hitbox
    var _Game_CharacterBase_isCollidedWithPlayerCharacters = Game_CharacterBase.prototype.isCollidedWithPlayerCharacters;
    Game_CharacterBase.prototype.isCollidedWithPlayerCharacters = function (x, y) {
        if ($gamePlayer._fmFree && this.isNormalPriority() && !$gamePlayer.isThrough() &&
            overlaps($gamePlayer.fmBox($gamePlayer._x, $gamePlayer._y), x, y)) return true;
        return _Game_CharacterBase_isCollidedWithPlayerCharacters.call(this, x, y);
    };

    // Action button: the tile in front of the hitbox
    var _Game_Player_checkEventTriggerThere = Game_Player.prototype.checkEventTriggerThere;
    Game_Player.prototype.checkEventTriggerThere = function (triggers) {
        if (!this._fmFree) return _Game_Player_checkEventTriggerThere.call(this, triggers);
        if (!this.canStartLocalEvents()) return;
        var d = this.direction();
        var cx = this._x + 0.5, cy = this._y + 0.5 + CFG.oy;
        var reach = Math.max(CFG.hw, CFG.hh) / 2 + 0.35;
        var x2 = $gameMap.roundX(Math.floor(cx + (d === 6 ? reach : d === 4 ? -reach : 0)));
        var y2 = $gameMap.roundY(Math.floor(cy + (d === 2 ? reach : d === 8 ? -reach : 0)));
        this.startMapEvent(x2, y2, triggers, true);
        if (!$gameMap.isAnyEventStarting() && $gameMap.isCounter(x2, y2)) {
            this.startMapEvent($gameMap.roundXWithDirection(x2, d), $gameMap.roundYWithDirection(y2, d), triggers, true);
        }
    };

    // Followers trail the player's current tile
    var _Game_Follower_chaseCharacter = Game_Follower.prototype.chaseCharacter;
    Game_Follower.prototype.chaseCharacter = function (character) {
        if ($gamePlayer._fmFree) {
            var sx = this.deltaXFrom(character.x), sy = this.deltaYFrom(character.y);
            if (sx === 0 && sy === 0) return;
            if (character === $gamePlayer && Math.abs(sx) + Math.abs(sy) <= 1 && !this.isMoving()) {
                this.setMoveSpeed($gamePlayer.realMoveSpeed());
                return;
            }
        }
        _Game_Follower_chaseCharacter.call(this, character);
    };
    var _Game_Followers_updateMove = Game_Followers.prototype.updateMove;
    Game_Followers.prototype.updateMove = function () {
        if (!$gamePlayer._fmFree) return _Game_Followers_updateMove.call(this);
        for (var i = this._data.length - 1; i >= 0; i--) {
            var f = this._data[i];
            if (!f.isMoving()) f.chaseCharacter(i > 0 ? this._data[i - 1] : $gamePlayer);
        }
    };

    // ------------------------------------------------------------------
    // Commands
    // ------------------------------------------------------------------
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.apply(this, arguments);
        if (String(command).toLowerCase() === 'freemovement') {
            var a = String(args[0] || '').toLowerCase();
            if (a === 'on' || a === 'enable') $.enable();
            if (a === 'off' || a === 'disable') $.disable();
        }
    };
    if (IS_MZ) {
        PluginManager.registerCommand(pluginName, 'Enable', function () { $.enable(); });
        PluginManager.registerCommand(pluginName, 'Disable', function () { $.disable(); });
    }
})(Swag.FreeMove);
