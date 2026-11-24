//=============================================================================
// VisuStella MZ - Events & Movement Core
// VisuMZ_1_EventsMoveCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_EventsMoveCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EventsMoveCore = VisuMZ.EventsMoveCore || {};
VisuMZ.EventsMoveCore.version = 1.67;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.67] [EventsMoveCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Events_and_Movement_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Events & Movement Core plugin adds a lot of new functionality in terms
 * of event flexibility and movement options to RPG Maker MZ. These range from
 * adding in old capabilities from previous iterations of RPG Maker to more
 * mainstream techniques found in other game engines. Movement options are also
 * expanded to support 8-directional movement as well as sprite sheets provided
 * that the VisuStella 8 format is used.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Event commands expanded upon to include old and new functions.
 * * Event templates for Copying Events, Morphing Events, and Spawning Events.
 * * 8-directional movement option available and sprite sheet support.
 * * Aesthetics for tilting the sprite when dashing and having shadows below.
 * * Pathfinding support for event movement through custom Move Route commands.
 * * Advanced switches and variable support to run code automatically.
 * * Turn regular Switches and Variables into Self Switches and Self Variables.
 * * Put labels and icons over events.
 * * Allow numerous ways to trigger events, through clicking, proximity, or by
 *   usage of Regions.
 * * Change the hitbox sizes of events to larger in any direction.
 * * Synchronize event movement options to move when player/other events move.
 * * The ability for the player to turn in place.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Features: Advanced Switches and Variables
 * ============================================================================
 *
 * Switches and variables can now run JavaScript code and return values
 * instantly. While at first glance, this may seem no different from using
 * the Control Variables event command's Script option, this can be used to
 * instantly set up Switch and/or Variable conditions for Parallel Common
 * Events, Event Page Conditions, Enemy Skill Conditions, and Troop Page
 * Conditions instantly without needing to make an event command to do so.
 *
 * ---
 *
 * <JS> code </JS>
 * - Used for: Switch and Variable names
 * - Replace 'code' with JavaScript code on what value to return.
 *
 * ---
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 *
 * ============================================================================
 * Features: Self Switches and Variables
 * ============================================================================
 *
 * RPG Maker MZ by default has 4 Self Switches: A, B, C, D. For some types of
 * games, this isn't enough. This plugin gives you the ability convert regular
 * Switches into Self Switches so you could have more.
 *
 * Self Variables also do not exist in RPG Maker MZ by default. Just like with
 * Switches, you can turn regular Variables into Self Variables.
 *
 * ---
 *
 * <Self>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Self Switch/Variable.
 *
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Self> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that event.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Self Switch or Self Variable's
 * value, you can use the following script calls.
 * 
 *   ---
 * 
 *   Get Self Switch Values:
 * 
 *   getSelfSwitchValue(mapID, eventID, switchID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - This will return the true/false value of the Self Switch.
 *   - Example: getSelfSwitchValue(12, 34, 56)
 *   - Example: getSelfSwitchValue(12, 34, 'B')
 * 
 *   ---
 * 
 *   Get Self Variable Values:
 * 
 *   getSelfVariableValue(mapID, eventID, variableID)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - This will return whatever stored value is found in the Self Variable.
 *   - Example: getSelfVariableValue(12, 34, 56)
 * 
 *   ---
 * 
 *   Set Self Switch Values:
 * 
 *   setSelfSwitchValue(mapID, eventID, switchID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'switchID' with the ID number if it is a Self Switch made with
 *     <Self> or a capital letter surrounded by quotes if it's A, B, C, or D.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - This will change the Self Switch's value to true/false.
 *     - Example: setSelfSwitchValue(12, 34, 56, false)
 *     - Example: setSelfSwitchValue(12, 34, 'B', true)
 * 
 *   ---
 * 
 *   Set Self Variable Values:
 * 
 *   setSelfVariableValue(mapID, eventID, variableID, value)
 *   - Replace 'mapID' with the map ID the target event is located on.
 *   - Replace 'eventID' with the ID of the target event.
 *   - Replace 'variableID' with the ID number of the Self Variable.
 *   - Replace 'value' with the value you want to set the Self Variable to.
 *   - Example: setSelfVariableValue(12, 34, 56, 88888)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: Map Switches and Variables
 * ============================================================================
 * 
 * Similar to Self Switches and Self Variables, Map Switches and Map Variables
 * are switches and variables that retain data based on the map the player is
 * currently located in. In other words, they're self switches and variables
 * but for maps instead!
 * 
 * These features do not exist in RPG Maker MZ by default. Just like with the
 * Self Switches and Self Variables, you can turn regular Switches or Variables
 * into Map Switches and Map Variables using the following name tag:
 * 
 * ---
 * 
 * <Map>
 * - Used for: Switch and Variable names
 * - Converts the Switch/Variable into a Map Switch/Variable.
 * 
 * ---
 *
 * After, just use them like you would for normal Switches and Variables in an
 * event's page conditions. If the <Map> tag is present inside the Switch or
 * Variable's name, then it will use data unique to only that map.
 *
 * NOTE: Tagged Switches/Variables are mutually exclusive from one another.
 * You cannot tag them with <JS>, <Self>, <Map>, or <Global> simultaneously.
 * 
 * ---
 * 
 * If you need to use a script call to get a Map Switch or Map Variable's
 * value, you can use the following script calls:
 * 
 *   ---
 * 
 *   Get Map Switch Values:
 * 
 *   getMapSwitchValue(mapID, switchID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Example: getMapSwitchValue(4, 20)
 * 
 *   ---
 * 
 *   Get Variable Switch Values:
 * 
 *   getMapVariableValue(mapID, variableID)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Example: getMapVariableValue(6, 9)
 * 
 *   ---
 * 
 *   Set Map Switch Values:
 * 
 *   setMapSwitchValue(mapID, switchID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'switchID' with the ID number of the switch to get data.
 *   - Replace 'value' with either 'true' or 'false' for ON/OFF respectively.
 *     Do not use quotes.
 *   - Example: setMapSwitchValue(4, 20, true)
 *   - Example: setMapSwitchValue(6, 9, false)
 * 
 *   ---
 * 
 *   Set Map Variable Values:
 * 
 *   setMapVariableValue(mapID, variableID, value)
 *   - Replace 'mapID' with the map ID the switch is located on.
 *   - Replace 'variableID' with the ID number of the variable to get data.
 *   - Replace 'value' with the value you want to set the Map Variable to.
 *   - Example: setMapVariableValue(6, 9, 420)
 * 
 *   ---
 * 
 * ---
 *
 * ============================================================================
 * Features: Reference Switches and Reference Variables
 * ============================================================================
 * 
 * Reference Switches and Reference Variables are added in version 1.62 of this
 * plugin. These switches and variables allow you to reference them through
 * strings when using script calls.
 * 
 * By simply naming your switch or variable ((Reference Name)), you can use
 * that 'reference name' in a string to call them for script calls. This is
 * just so you don't need to remember the ID's of every other Switch/Variable.
 * 
 * When referencing the strings in the script calls, case does not matter,
 * which means you can use all capitals or all lower case and they'll still
 * reference the same switch or variable.
 * 
 * ---
 * 
 * For example:
 * 
 *   ---
 * 
 *   Switch 10 Name: ((Priscilla Joined))
 * 
 *   Script Call: $gameSwitches.value('Priscilla Joined')
 *                $gameSwitches.setValue('Priscilla Joined', true)
 * 
 *   ---
 * 
 *   Variable 20 Name: Total ((Goblins Slain))
 * 
 *   Script Call: $gameVariables.value('Goblins Slain')
 *                $gameVariables.setValue('Goblins Slain', 50)
 * 
 *   ---
 * 
 * Remember to put quotes around the name for the script call!
 * 
 * This only applies for the $gameSwitches and $gameVariables functions of
 * value(id) and setValue(id, value). They do not apply to the other
 * $gameSwitches and $gameVariables functions.
 * 
 * ---
 *
 * ============================================================================
 * Features: Character Sprite Filename Tags
 * ============================================================================
 * 
 * For the files located inside of your project's /img/characters/ folder, if
 * the filenames themselves have specific "tags" in them, special properties
 * will be applied to them. These tags can be combined together with a few
 * exceptions.
 * 
 * Some of these are new to VisuStella MZ, while others are default to MZ.
 * 
 * ---
 * 
 *   !filename.png
 *   - Tag: !
 *   - Causes this character's sprite to align with the tile grid instead of
 *     being lifted a few pixels higher.
 *   - This is primarily used for things like doors, chests, and floor plates.
 *   - Default to RPG Maker MZ.
 * 
 * ---
 * 
 *   $filename.png
 *   - Tag: $
 *   - Causes this character's sprite to use the "big character" format.
 *   - Primarily used for sprites like the big monsters and such which only
 *     have 3x4 cells as opposed to 12x8 cells that regular sprite sheets have.
 *   - Cannot be combined with the [VS8] tag.
 *   - Default to RPG Maker MZ.
 * 
 * ---
 * 
 *   filename[Invisible].png
 *   - Tag: [Invisible] or [Inv]
 *   - This character's sprite will become invisible on the map screen in-game
 *     while almost everything else about it is visible.
 *   - This is used for those who wish to use sprite labels for things such as
 *     autorun and parallel events.
 * 
 * ---
 * 
 *   filename[VS8].png
 *   - Tag: [VS8]
 *   - Converts this sprite into a VisuStella-Style 8-Direction Sprite Sheet.
 *   - Refer to the section below.
 *   - Cannot be combined with the $ tag.
 * 
 * ---
 *
 * ============================================================================
 * Features: VisuStella-Style 8-Directional Sprite Sheets
 * ============================================================================
 *
 * This plugin provides support for the VisuStella-Style 8-Directional Sprite
 * Sheets, also know as VS8. VS8 sprite sheets offer support for walking
 * frames, dashing frames, carrying frames, and emotes.
 *
 * ---
 *
 * To designate a sprite sheet as VS8, simply add [VS8] to the filename.
 * Something like Actor1.png would become Actor1_[VS8].png.
 *
 * ---
 *
 * VS8 sprites are formatted as such. Each block below is a set of 3 frames.
 *
 * Walk Down    Walk DL     Dash Down   Dash DL
 * Walk Left    Walk DR     Dash Left   Dash DR
 * Walk Right   Walk UL     Dash Right  Dash UL
 * Walk Up      Walk UR     Dash Up     Dash UR
 *
 * Carry Down   Carry DL    Ladder      Emotes 3
 * Carry Left   Carry DR    Rope        Emotes 4
 * Carry Right  Carry UL    Emotes 1    Emotes 5
 * Carry Up     Carry UR    Emotes 2    Emotes 6
 *
 * ---
 *
 * Here are how each of the emote sets are grouped from left to right.
 *
 * Emotes 1: Item, Hmph, Victory
 * Emotes 2: Hurt, Kneel, Collapse
 * Emotes 3: !, ?, Music Note
 * Emotes 4: Heart, Anger, Sweat
 * Emotes 5: Cobweb, ..., Light Bulb
 * Emotes 6: Sleep0, Sleep1, Sleep2
 *
 * ---
 *
 * ============================================================================
 * Features: Weighted Random Movement
 * ============================================================================
 * 
 * When creating events to place on the map, you can determine what type of
 * autonomous movement the event will have. When selecting "Random", the event
 * will move randomly across the map.
 * 
 * However, with the way "Random" movement works with the RPG Maker MZ default
 * code, the event is more likely to hit a wall and then hug the said wall as
 * it maps laps around the map's outer borders making it feel very unnatural
 * for any player who's been on the map long enough.
 * 
 * This is where "Weighted Random Movement" comes in. It changes up the random
 * movement behavior to function where the farther the event is, the more
 * likely the event is to step back towards its "home" position (aka where it
 * spawned upon loading the map). This is so that a housewife NPC doesn't
 * suddenly wander off into the middle of an army's training grounds on the
 * same town map.
 * 
 * The event will stay closer to its home value depending on how high the
 * weight's value is. There are a number of ways to adjust the weighted value.
 * 
 * ---
 * 
 * Plugin Parameters > Movement > Event Movement > Random Move Weight
 * 
 * This Plugin Parameter setting allows you to set the default weight for all
 * events with "Random" autonomous movement. It is set at a default value of
 * 0.10 to give the event an understandable degree of freedom.
 * 
 * Lower numbers give events more freedom to move. Larger numbers will make the
 * events stick closer to home.
 * 
 * Change this value to 0 to disable it.
 * 
 * ---
 * 
 * You can customize this individually per event by using Notetags and/or
 * Comment Tags for the events.
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * ============================================================================
 * Notetags and Comment Tags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * Some of these are comment tags. Comment tags are used for events to mark and
 * affect individual event pages rather than the whole event.
 *
 * === Map Notetags ===
 *
 * The following notetags are used for maps only. While some of these options
 * are also available in the Plugin Parameters, some of these notetags extend
 * usage to specific maps marked by these notetags as well.
 *
 * ---
 *
 * <Diagonal Movement: On>
 * <Diagonal Movement: Off>
 *
 * - Used for: Map Notetags
 * - Turns on/off diagonal movement for those maps.
 * - If notetag isn't present, use Plugin Parameter setting.
 *
 * ---
 *
 * <type Allow Region: x>
 * <type Allow Region: x, x, x>
 *
 * <type Forbid Region: x>
 * <type Forbid Region: x, x, x>
 *
 * <type Dock Region: x>
 * <type Dock Region: x, x, x>
 *
 * - Used for: Map Notetags
 * - Replace 'type' with 'All', 'Walk', 'Player', 'Event', 'Vehicle', 'Boat',
 *   'Ship', or 'Airship'.
 * - 'Allow' notetag variants allow that type to pass through them no matter
 *   what other passability settings are in place.
 * - 'Forbid' notetag variants forbid that type from passing through at all.
 * - 'Dock' notetag variants allow vehicles to dock there. Boats and ships must
 *   face the region direction while airships must land directly on top.
 *
 * ---
 * 
 * <Map Load Common Event: x>
 * <Map Load Common Events: x, x, x>
 * 
 * - Used for: Map Notetags
 * - When this map is loaded, run the specified Common Events once available.
 *   - Does NOT trigger if you transfer to a different part of the same map.
 * - Replace 'x' with a number representing the ID of the Common Event you wish
 *   to reserve and run once ready.
 * 
 * ---
 *
 * <Save Event Locations>
 *
 * - Used for: Maps Notetags
 * - Saves the locations of all events on the map so that when you return to
 *   that map at a later point, the events will be in the position they were
 *   last in.
 *
 * ---
 * 
 * <Hide Player>
 * <Show Player>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player sprite. This is so you don't need to
 *   manually turn the setting on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - If the player sprite is hidden, so are the player's followers.
 * - If the player sprite is visible, the player's followers will still depend
 *   on their settings.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * <Hide Followers>
 * <Show Followers>
 * 
 * - Used for: Map Notetags
 * - Forcefully hides or shows the player's followers. This is so you don't
 *   need to manually turn them on/off each time you enter a specific map.
 * - These settings will take priority over the event commands.
 * - These notetags are mutually exclusive from each other.
 * 
 * ---
 * 
 * === JavaScript Notetag: Map Effects ===
 * 
 * ---
 * 
 * <JS On Map Load>
 *  code
 *  code
 * </JS On Map Load>
 * 
 * - Used for: Map Notetags
 * - Replace 'code' with JavaScript code to run the moment the map finishes
 *   loading and before fading in.
 * 
 * ---
 * 
 * <JS On Map Exit>
 *  code
 *  code
 * </JS On Map Exit>
 * 
 * - Used for: Map Notetags
 * - Replace 'code' with JavaScript code to run the moment the player transfers
 *   to a different map and the screen completely fades out.
 * 
 * ---
 * 
 * === Page Comment Tags ===
 * 
 * The following comment tags are to be put inside of the pages of events,
 * troops, and common events for them to work!
 * 
 * ---
 * 
 * <Page Conditions>
 *   conditions
 *   conditions
 *   conditions
 * </Page Conditions>
 * 
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - This allows you to create custom page conditions that utilize the
 *   Conditional Branch event command to see if the additional page conditions
 *   are met.
 * 
 * ---
 * 
 * <Conditions Met>
 * - Used for: Map Event Page, Troop Page, and Common Event Page Comment Tags
 * - If used between the <Page Conditions> and </Page Conditions> comment tag,
 *   upon reaching this part of event command list, the custom page conditions
 *   will be considered met.
 * 
 * ---
 * 
 * Example:
 * 
 * ◆Comment：<Page Conditions>
 * ◆If：Reid has equipped Potion Sword
 *   ◆Comment：If Reid has equipped the Potion Sword
 * ：       ：<Condition Met>
 *   ◆
 * ：End
 * ◆Comment：</Page Conditions>
 * 
 * If Reid has the "Potion Sword" weapon equipped, then the additional custom
 * page conditions are met and the event page will be present/active.
 * 
 * If this is a troop condition, the troop page event will activate.
 * 
 * If this is a common event, there will be a parallel common event active.
 * 
 * ---
 *
 * === Event and Event Page Notetags ===
 *
 * The following notetags have comment tag variants (with a few exceptions).
 * If a notetag is used for an event, it will affect the event constantly.
 * If a comment tag is used, it will only affect the page the comment tag is
 * on and only that page.
 *
 * ---
 *
 * <Activation Region: x>
 * <Activation Regions: x,x,x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   standing within a tile marked by a designated region.
 * - Replace 'x' with the regions you wish to remotely activate this event in.
 *   - Action Button: Player must press OK while being in the region.
 *   - Player/Event Touch: Player must step onto the region.
 *   - Autorun/Parallel: Player be in the region.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Activation Square: x>
 * <Activation Circle: x>
 * <Activation Delta: x>
 * <Activation Row: x>
 * <Activation Column: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to be remotely activated as long as the player is
 *   within range of its activation type.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Delta: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - NOTE: This cannot be used with any other activation tags.
 *
 * ---
 *
 * <Always Update Movement>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Events normally have to be within screen range for them to update their
 *   self movement. If this tag is present, the event is always updating.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Click Trigger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows this event to activate upon being clicked on with the mouse.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Copy Event: Map x, Event y>
 * <Copy Event: x, y>
 *
 * <Copy Event: template>
 *
 * - Used for: Event Notetags ONLY
 * - Makes this event copy all of the event settings from a different event
 *   that can be found on a different map (as long as that map is registered
 *   inside of Plugin Parameters => Event Template Settings => Preloaded Maps).
 * - Replace 'x' with a number representing the copied event's Map ID.
 *   - If '0' is used for the Map ID, reference the current map.
 * - Replace 'y' with a number representing the copied event's Event ID.
 * - For the 'template' variant, replace 'template' with the name of the
 *   template made in Plugin Parameters => Event Template Settings =>
 *   Event Template List.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 *
 * ---
 * 
 * <Custom Z: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number value to determine the event sprite's Z value
 *   relative to the tilemap.
 * - For reference from rmmz_core.js:
 *   - 0 : Lower tiles
 *   - 1 : Lower characters
 *   - 3 : Normal characters
 *   - 4 : Upper tiles
 *   - 5 : Upper characters
 *   - 6 : Airship shadow
 *   - 7 : Balloon
 *   - 8 : Animation
 *   - 9 : Destination
 * - You can use numbers below 0 and above 9.
 *   - Values under 0 go below the tilemap.
 *   - Values above 9 go above everything else on the tilemap.
 *   - These values do NOT go below or above other screen objects that are
 *     NOT attached to the tilemap layer such as parallaxes or weather or
 *     windows because that's simply not how z-axis work with sprite layers.
 * 
 * ---
 * 
 * <Encounter Half Square: x>
 * <Encounter Half Circle: x>
 * <Encounter Half Delta: x>
 * <Encounter Half Row: x>
 * <Encounter Half Column: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If the player is within the 'x' area effect of this event, the random
 *   encounter rate will be halved.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Delta: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * Script Call Check:
 * 
 *   $isTileEncounterHalf(x, y)
 * 
 * - This can be used to check if a certain map tile (x, y) has an encounter
 *   rate halving effect on it.
 * - Returns a boolean (true or false) when used.
 * 
 * ---
 * 
 * <Encounter None Square: x>
 * <Encounter None Circle: x>
 * <Encounter None Delta: x>
 * <Encounter None Row: x>
 * <Encounter None Column: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If the player is within the 'x' area effect of this event, the random
 *   encounter rate will be suppressed completely.
 * - Replace 'x' with a number stating the range in tiles.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Delta: A diamond-shaped range with the event at the center.
 *   - Row: Spans horizontally across the map. 'x' expands up and down.
 *   - Column: Spans vertically across the map. 'x' expands left and right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * Script Call Check:
 * 
 *   $isTileEncounterNone(x, y)
 * 
 * - This can be used to check if a certain map tile (x, y) has an encounter
 *   rate suppression effect on it.
 * - Returns a boolean (true or false) when used.
 * 
 * ---
 * 
 * <Erase if Encounter Half>
 * <Erase if Encounter None>
 * 
 * - Used for: Event Notetags ONLY
 * - Automatically erase this event if the player's party has an encounter half
 *   or encounter none effect, or if the event has spawned in an encounter half
 *   or encounter none area.
 * - This check only occurs in two situations: when the map is first loaded
 *   after being teleported into or when the player leaves a menu and returns
 *   back to the map.
 * - Events that have been erased due to this effect will NOT return even if
 *   the encounter half/none effect is removed while the player is still on the
 *   map. The event will return if the player exits the map and comes back.
 * 
 * ---
 * 
 * <Exit Reset Self Data>
 * 
 * - Used for: Event Notetags ONLY
 * - When the player leaves the current map, all Self Switches and Self
 *   Variables related to this event will be reset.
 * 
 * ---
 *
 * <Hitbox Left: x>
 * <Hitbox Right: x>
 * <Hitbox Up: x>
 * <Hitbox Down: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with a number to extend the hitbox of the event by that many
 *   tiles towards the listed direction.
 * - Use multiples of this notetag to extend them to different directions.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replace 'x' with the Icon ID you wish to put above this event.
 * - This will not override any Icons designated to the ID through a
 *   Plugin Command.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Icon Buffer X: +x>
 * <Icon Buffer X: -x>
 *
 * <Icon Buffer Y: +x>
 * <Icon Buffer Y: -x>
 *
 * <Icon Buffer: +x, +y>
 * <Icon Buffer: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the icon on the envent by buffers.
 * - Replace 'x' and 'y' with the values to adjust the position buffers by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label: text>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - Text codes can be used.
 *   - If text codes are used, avoid text codes that use < and > wrappers.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label>
 * text
 * text
 * </Label>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Puts a label over the event's head displaying 'text'.
 * - This can display multiple lines.
 * - Text codes can be used.
 *   - You can use text codes with < and > wrappers.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Label Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets a range requirement for the player to be in order for the event's
 *   label to appear.
 * - Replace 'x' with a number value depicting the range in tiles.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - If this tag is not used, refer to the default plugin parameter settings.
 *
 * ---
 * 
 * <Label Range Type: Square>
 * <Label Range Type: Circle>
 * <Label Range Type: Diamond>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets a range type for the label to appear visible for.
 *   - Square: A square-shaped range with the event at the center.
 *   - Circle: A circle-shaped range with the event at the center.
 *   - Diamond: A diamond-shaped range with the event at the center.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - If this tag is not used, refer to the default plugin parameter settings.
 * 
 * ---
 *
 * <Label Offset X: +x>
 * <Label Offset X: -x>
 *
 * <Label Offset Y: +x>
 * <Label Offset Y: -x>
 *
 * <Label Offset: +x, +y>
 * <Label Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Allows you to adjust the positions of the label on the envent by offsets.
 * - Replace 'x' and 'y' with the values to adjust the position offsets by.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Label Hue Shift: +x>
 * <Label Hue Shift: -x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the hue of the event label by +x or -x every frame.
 *   - Keep in mind that since this is changing hue, this will appear to have
 *     no effect if you are using black and white labels.
 *   - Use labels with text codes that add color to them like '\C[4]text'
 * - This only works with the sprite version of event labels and does not work
 *   with the legacy version.
 * 
 * ---
 * 
 * <Location X: +x>
 * <Location X: -x>
 * 
 * <Location Y: +x>
 * <Location Y: -x>
 * 
 * <Location: +x, +y>
 * <Location: +x, -y>
 * <Location: -x, +y>
 * <Location: -x, -y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts the initial location of this event by +x and +y (or -x and -y).
 * - This allows you to stack events on top of each other or even move them to
 *   various places of the map.
 * - Replace 'x' with a number that represents the horizontal tiles to adjust
 *   the initial starting location by.
 * - Replace 'y' with a number that represents the vertical tiles to adjust
 *   the initial starting location by.
 * 
 * ---
 * 
 * <Mirror Sprite>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event sprite's visual appearance is mirrored.
 * 
 * ---
 * 
 * <Move Only Region: x>
 * <Move Only Regions: x,x,x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the move range of this event to only the region(s) marked by the
 *   notetag(s) or comment tag(s).
 * - This will bypass terrain passability.
 * - This will not bypass event collision.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Move Synch Target: Player>
 *
 * <Move Synch Target: Event x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Synchronizes the movement of this event with a target (either the player
 *   or another event). This event will only move whenever the synchronized
 *   target moves.
 * - For 'Event x' variant, replace 'x' with the ID of the event to synch to.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Type: Random>
 * <Move Synch Type: Approach>
 * <Move Synch Type: Away>
 * <Move Synch Type: Custom>
 *
 * <Move Synch Type: Mimic>
 * <Move Synch Type: Reverse Mimic>
 *
 * <Move Synch Type: Mirror Horizontal>
 * <Move Synch Type: Mirror Vertical>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Choose the type of movement the event will have if it is synchronized to
 *   a target.
 *   - Random: Move to a random position.
 *   - Approach: Approaches target.
 *   - Away: Flees from target.
 *   - Custom: Follows a custom move route.
 *   - Mimic: Imitates the target's movement style.
 *   - Reverse Mimic: Does the opposite of the target's movement.
 *   - Mirror Horizontal: Moves as if a mirror is placed horizontally.
 *   - Mirror Vertical: Moves as if a mirror is placed vertically.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Move Synch Delay: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is present, the event will wait a bit after each move before
 *   moving again.
 * - Replace 'x' with the number of movement instances in between.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Move Synch Distance Opacity: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the opacity of the event based on the distance between it and its
 *   move synched target. Closer means more opaque. Further away means more
 *   transparent.
 * - Replace 'x' with a number representing the opacity change per pixel
 *   distance away. 'x' can use decimal values like 1.05 and 1.5.
 * 
 * ---
 * 
 * <Picture Filename: filename>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Applies a picture graphic from the /img/pictures/ folder of your project.
 * - This graphic will be on top of the character sprite but below the event
 *   icon sprite.
 *   - The picture priority will be the same as the event's priority.
 *   - If it is "below characters", the player can walk on top of it.
 *   - If it is "above characters", the player will behind it.
 *   - If it is "same as characters", the priority will be based on the
 *     current relative Y position. This also means, if the picture is big
 *     enough, it can clip into the top of tree tiles and such.
 * - Replace 'filename' with a filename from the game project's /img/pictures/
 *   folder. This is case sensitive. Do NOT include the file extension.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Type: Enemy>
 * <Picture Type: SV Enemy>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Will use /img/enemies/ or /img/sv_enemies/ instead of /img/pictures/ to
 *   grab a picture graphic from.
 * - Other picture graphic sprite related notetags will apply as normal.
 * 
 * ---
 * 
 * <Picture Max Size: x>
 * <Picture Scale: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - If the "Max Size" or "Scale" supplementary notetags are used, the picture
 *   graphic will be scaled proportionally to fit either the exact pixel size
 *   for "Max Size" or the "Scale" ratio.
 *   - Both the "Max Size" and "Scale" notetags require the "Filename" notetag.
 * - Replace 'x' with a number value representing the exact pixel size for the
 *   "Max Size" notetag.
 * - Replace 'y' with a number value representing the scale on which to shrink
 *   or enlarge the picture. 100% is normal size. 50% is half size. 200% is
 *   double size.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Picture Offset X: +x>
 * <Picture Offset X: -x>
 *
 * <Picture Offset Y: +x>
 * <Picture Offset Y: -x>
 *
 * <Picture Offset: +x, +y>
 * <Picture Offset: -x, -y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Offsets the X and Y position of the event picture relative to the event
 *   sprite's own position.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Picture Wait Frames: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used with <Picture Filename: filename> notetag.
 * - Requires VisuMZ_4_AnimatedPictures!
 * - "Wait Frames" is used with VisuMZ's Animated Pictures plugin. This
 *   determines the delay inbetween frame changes.
 * - Replace 'x' with a number representing the amount of frames to wait
 *   inbetween frame changes.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 * 
 * <Playtest>
 * 
 * - Used for: Event Notetags.
 * - This does NOT work when it's in the Event Page Comment Tags.
 * - If this notetag is found in the event's notebox (NOT comments), then the
 *   event will only appear during a playtest session. It will not appear in a
 *   deployed game where the playtest flag is not on.
 * 
 * ---
 * 
 * <Random Move Weight: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   the event will stick closer to their home location (where they are located
 *   upon spawning on the map). How close they stick to their home location
 *   will depend on the weighted 'x' value.
 * - Replace 'x' with a number between 0 and 1. Numbers closer to 0 give the
 *   event more freedom when moving randomly while numbers closer to 1 cause
 *   the event to stick closer to their home position.
 * 
 * ---
 * 
 * <True Random Move>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - If this tag is used on an event with random-type autonomous movement, then
 *   that event will ignore the effects of weighted randomized movement.
 * 
 * ---
 *
 * <Save Event Location>
 *
 * - Used for: Event Notetags ONLY
 * - Saves the locations of the event on the map so that when you return to
 *   that map at a later point, the event will be in the position it was
 *   last in.
 *
 * ---
 *
 * <Hide Shadow>
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Hides the shadow for the event.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Scale: x%>
 * 
 * <Scale X: x%>
 * <Scale Y: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the scale of the sprite to the designated size.
 * - For <Scale: x%> variant: replace 'x' with a number representing the
 *   scaling overall percentage to be used.
 * - For <Scale X: x%> variant, replace 'x' with a number representing the x
 *   factor for the horizontal scaling percentage to be used.
 * - For <Scale Y: y%> variant, replace 'y' with a number representing the y
 *   factor for the vertical scaling percentage to be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * 
 * ---
 *
 * <Shadow Filename: filename>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Replaces the shadow graphic used with 'filename' found in the
 *   img/system/ project folder.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Sprite Offset X: +x>
 * <Sprite Offset X: -x>
 *
 * <Sprite Offset Y: +x>
 * <Sprite Offset Y: -x>
 *
 * <Sprite Offset: +x, +y>
 * <Sprite Offset: -x, -y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes how much the event's sprite is visibly offset by.
 * - Replace 'x' and 'y' with numbers indicating the offset in pixels.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Step Pattern: Left to Right>
 * <Step Pattern: Right to Left>
 *
 * <Step Pattern: Spin Clockwise>
 * <Step Pattern: Spin CW>
 *
 * <Step Pattern: Spin CounterClockwise>
 * <Step Pattern: Spin CCW>
 * <Step Pattern: Spin AntiClockwise>
 * <Step Pattern: Spin ACW>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the way the event animates if a tag is present.
 *   - Left to Right: Makes the event sprite's step behavior go from frame 0 to
 *     1 to 2, then back to 0 instead of looping backward.
 *   - Right to Left: Makes the event sprite's step behavior go from frame 2 to
 *     1 to 0, then back to 2 instead of looping forward.
 *   - Spin Clockwise: Makes the event sprite's step behavior spin CW.
 *   - Spin CounterClockwise: Makes the event sprite's step behavior spin CCW.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Tile Expand Up: x>
 * <Tile Expand Down: x>
 * <Tile Expand Left: x>
 * <Tile Expand Right: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Used for events with tile graphics. Expands the graphic up, down, left, or
 *   right from the spritesheet.
 *   - This does NOT expand the hitbox.
 * - The graphic will be anchored to the tile it's expanded from. This means
 *   even if you expanded downward, the actual event's position will still be
 *   the current event's X/Y coordinates. It's just grown more vertically and
 *   is still centered horizontally.
 * - This is primarily used to save on having to use too many events for tiles
 *   that expanded past 1x1 tile sizes.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Auto Movement Plugin Commands ===
 * 
 * ---
 *
 * Auto Movement: Events
 * - Allow/stop events from auto movement.
 *
 *   Value:
 *   - Allow events to move automatically?
 *
 * ---
 * 
 * === Call Event Plugin Commands ===
 * 
 * ---
 *
 * Call Event: Remote Read
 * - Runs the page of a different event remotely.
 * - This will run the page of the target event on the CURRENT event.
 * - This means that any "This Event" commands will be applied to the event
 *   using this Plugin Command and NOT the target event that page data is being
 *   retrieved from.
 * - Think of it as the current event using the target called event as a
 *   Common Event ala how RPG Maker 2003 works (for those familiar with it).
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Page ID:
 *   - The page of the remote event to run.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * Call Event: Same Event (Page #)
 * - Calls a different page of the same event.
 * - References the page number.
 * 
 *   Page ID:
 *   - The page of the same event to run.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * Call Event: Same Event (Page Name)
 * - Calls a different page of the same event.
 * - Looks for <Page Name: string> comment tag.
 * 
 *   Page Name:
 *   - Searches the pages of the same event for comment tag:
 *     <Page Name: string>
 * 
 * ---
 * 
 * === Dash Plugin Commands ===
 * 
 * ---
 *
 * Dash Enable: Toggle
 * - Enable/Disable Dashing on maps.
 *
 *   Value:
 *   - What do you wish to change dashing to?
 *
 * ---
 * 
 * === Event Icon Plugin Commands ===
 * 
 * ---
 *
 * Event Icon: Change (Temporary)
 * - Change the icon that appears on an event.
 * - This change is temporary and resets upon new events.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Change (Forced)
 * - Change the icon that appears on an event.
 * - This change is forced and needs to be restored.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Event Icon: Delete
 * - Delete the icon that appears on an event.
 * - This will remain deleted and invisible for events.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 * 
 * Event Icon: Restore
 * - Restores a deleted or forced icon that appears on an event.
 * 
 *   Map ID: 
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * === Event Label Plugin Commands ===
 * 
 * ---
 *
 * Event Label: Refresh
 * - Refresh all Event Labels on screen.
 * - This is used to refresh page conditions for map changes that don't
 *   force a refresh.
 *
 * ---
 *
 * Event Label: Visible
 * - Change the visibility of Event Labels.
 *
 *   Visibility:
 *   - What do you wish to change visibility to?
 *
 * ---
 * 
 * === Event Location Plugin Commands ===
 * 
 * ---
 *
 * Event Location: Save
 * - Memorize an event's map location so it reappears there the next time the
 *   map is loaded.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Delete
 * - Deletes an event's saved map location.
 * - The event will reappear at its default location.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *   
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Event Location: Create
 * - Creates a custom spawn location for a specific map's event so it appears
 *   there the next time the map is loaded.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   X Coordinate:
 *   - The X coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - The Y coordinate of the event.
 *   - You may use JavaScript code.
 *
 *   Direction:
 *   - The direction the event will be facing.
 *
 *   Optional:
 *
 *     Page ID:
 *     - The page of the event to set the move route to.
 *     - You may use JavaScript code.
 *
 *     Move Route Index:
 *     - The point in the move route for this event to be at if the page ID
 *       matches the rest of the page conditions.
 *
 * ---
 * 
 * === Event Popup Plugin Commands ===
 * 
 * ---
 * 
 * Event Popup: Player
 * - Makes a centered event popup on the player sprite.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second. You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Event Popup: Follower
 * - Makes a centered event popup on target follower sprite.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Follower Index:
 *   - Which follower index to play popup?
 *   - Index starts at 0.
 *   - You may use JavaScript code.
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second.
 *   - You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Event Popup: Event
 * - Makes a centered event popup on target event sprite.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Event ID:
 *   - The ID of the event to play popup on.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second. You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Event Popup: Target Tile
 * - Makes a centered event popup on target tile.
 * - Requires VisuMZ_1_MessageCore!
 * - Cannot be used in battle!
 * 
 *   Map Tile X:
 *   Map Tile Y:
 *   - The x/y coordinate of the map tile.
 *   - You may use JavaScript code.
 * 
 *   Message Text:
 *   - Insert the text to be displayed.
 *   - Text codes can be used.
 * 
 *   Message Duration:
 *   - What is the frame duration of the event popup?
 *   - 60 frames = 1 second. You may use code.
 * 
 *   Popup Settings:
 *   - These settings let you adjust how the popup animates.
 *   - See "Popup Settings" section below.
 * 
 * ---
 * 
 * Popup Settings
 * 
 *   Fade Settings:
 * 
 *     Fade In Duration:
 *     - How many frames does it take to fade in?
 *     - 60 frames = 1 second.
 * 
 *     Fade Out Duration:
 *     - How many frames does it take to fade out?
 *     - 60 frames = 1 second.
 * 
 *   Offset Settings:
 * 
 *     Starting Offset X:
 *     - Offsets the starting x position.
 *     - Negative: left. Positive: right.
 *     - You may use code.
 * 
 *     Starting Offset Y:
 *     - Offsets the starting y position. 
 *     - Negative: up. Positive: down.
 *     - You may use code.
 * 
 *     Ending Offset X:
 *     - Offsets the ending x position. 
 *     - Negative: left. Positive: right.
 *     - You may use code.
 * 
 *     Ending Offset Y:
 *     - Offsets the ending y position. 
 *     - Negative: up. Positive: down.
 *     - You may use code.
 * 
 *   Scaling Settings:
 * 
 *     Starting Scale X:
 *     - What is the starting scale x?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *     Starting Scale Y:
 *     - What is the starting scale y?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *     Ending Scale X:
 *     - What is the ending scale x?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *     Ending Scale Y:
 *     - What is the ending scale y?
 *     - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *     - You may use code.
 * 
 *   Angle Settings:
 * 
 *     Starting Offset Angle:
 *     - What is the starting angle offset?
 *     - Use numbers between 0 and 360.
 *     - You may use code.
 * 
 *     Ending Offset Angle:
 *     - What is the ending angle offset?
 *     - Use numbers between 0 and 360.
 *     - You may use code.
 * 
 *   Misc Settings:
 * 
 *     Arc Peak:
 *     - This is the height of the popup's trajectory arc in pixels.
 *     - Positive: up. Negative: down.
 *     - You may use code.
 * 
 * ---
 * 
 * === Event Timer Plugin Commands ===
 * 
 * ---
 *
 * Event Timer: Change Speed
 * - Changes the timer frame decrease (or increase) speed.
 *
 *   Speed:
 *   - How many 1/60ths of a second does each frame increase or decrease by?
 *   - Negative decreases.
 *   - Positive increases.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Expire Event Assign
 * - Sets a Common Event to run upon expiration.
 * - Bypasses the default code if one is set.
 *
 *   Common Event ID:
 *   - Select the Common Event to run upon the timer's expiration.
 *
 * ---
 *
 * Event Timer: Expire Event Clear
 * - Clears any set to expire Common Event and instead, run the default
 *   Game_Timer expiration code.
 *
 * ---
 *
 * Event Timer: Frames Gain
 * - Chooses how many frames, seconds, minutes, or hours are gained or lost for
 *   the event timer.
 *
 *   Frames:
 *   - How many 1/60ths of a second are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - How many seconds are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - How many minutes are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - How many hours are gained/lost?
 *   - Positive for gain.
 *   - Negative for lost.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Frames Set
 * - Chooses how many frames, seconds, minutes, or hours are set for the event
 *   timer.
 *
 *   Frames:
 *   - Set frame count to this value.
 *   - Each frame is 1/60th of a second.
 *   - JavaScript allowed.
 *
 *   Seconds:
 *   - Set seconds to this value.
 *   - JavaScript allowed.
 *
 *   Minutes:
 *   - Set minutes to this value.
 *   - Each minute is 60 seconds.
 *   - JavaScript allowed.
 *
 *   Hours:
 *   - Set hours to this value.
 *   - Each hour is 60 minutes.
 *   - JavaScript allowed.
 *
 * ---
 *
 * Event Timer: Pause
 * - Pauses the current event timer, but does not stop it.
 *
 * ---
 *
 * Event Timer: Resume
 * - Resumes the current event timer from the paused state.
 *
 * ---
 * 
 * === Follower Control Plugin Commands ===
 * 
 * ---
 *
 * Follower: Set Global Chase
 * - Disables all followers from chasing the player or reenables it.
 *
 *   Chase:
 *   - Sets all followers to chase the player or not.
 *
 * ---
 *
 * Follower: Set Target Chase
 * - Disables target follower from chasing the player or reenables it.
 *
 *   Follower ID:
 *   - Select which follower ID to disable/reenable chasing for.
 *
 *   Chase:
 *   - Sets target follower to chase its target or not.
 *
 * ---
 *
 * Follower: Set Control
 * - Sets the event commands to target a follower when "Player" is selected as
 *   the target.
 *
 *   Follower ID:
 *   - Select which follower ID to control.
 *   - 0 is the player.
 *
 * ---
 *
 * Follower: Reset
 * - Resets all follower controls. Event Commands that target the "Player"
 *   return to normal and followers chase again.
 *
 * ---
 * 
 * === Global Switch Plugin Commands ===
 * 
 * ---
 * 
 * Global Switch: Get Self Switch A B C D
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Letter:
 *   - Letter of the target event's Self Switch to obtain data from.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * Global Switch: Get Self Switch ID
 * - Gets the current ON/OFF value from a Self Switch and stores it onto a
 *   Global Switch.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Switch ID:
 *   - The ID of the source switch.
 * 
 *   -
 * 
 *   Target Switch ID:
 *   - The ID of the target switch.
 * 
 * ---
 * 
 * === Global Variable Plugin Commands ===
 * 
 * ---
 * 
 * Global Variable: Get Self Variable ID
 * - Gets the current stored value from a Self Variable and stores it onto a
 *   Global Variable.
 * 
 *   Map ID:
 *   - The map the source map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 *   Event ID:
 *   - The ID of the source event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 * 
 *   Variable ID:
 *   - The ID of the source variable.
 * 
 *   -
 * 
 *   Target Variable ID:
 *   - The ID of the target variable.
 * 
 * ---
 * 
 * === Morph Event Plugin Commands ===
 * 
 * ---
 *
 * Morph Event: Change
 * - Runs the page of a different event remotely.
 *
 *   Step 1:
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Template Name:
 *     - Name of the target event template to morph into.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map. Use 0 for current map.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event.
 *     - Use 0 for current event.
 *     - You may use JavaScript code.
 *
 *     Preserve Morph:
 *     - Is the morph effect preserved?
 *     - Or does it expire upon leaving the map?
 *
 * ---
 *
 * Morph Event: Remove
 * - Remove the morph status of an event.
 *
 *   Map ID:
 *   - Target event's map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the event to remotely run.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Remove Preservation:
 *   - Also remove the preservation effect?
 *
 * ---
 * 
 * === Player Icon Plugin Commands ===
 * 
 * ---
 *
 * Player Icon: Change
 * - Change the icon that appears on on the player.
 *
 *   Icon Index:
 *   - Icon index used for the icon.
 *   - You may use JavaScript code.
 *
 *   Buffer X:
 *   - How much to shift the X position by?
 *   - You may use JavaScript code.
 *
 *   Buffer Y:
 *   - How much to shift the Y position by?
 *   - You may use JavaScript code.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the icon sprite?
 *
 * ---
 *
 * Player Icon: Delete
 * - Delete the icon that appears on the player.
 *
 * ---
 * 
 * === Player Movement Plugin Commands ===
 * 
 * ---
 * 
 * Player Movement: Control
 * - Enable or disable player control over the player character's movement.
 * 
 *   Enable?:
 *   - Let the player control where the player character moves?
 * 
 * ---
 * 
 * Player Movement: Diagonal
 * - Override settings to for player diagonal movement.
 * 
 *   Setting:
 *   - How do you want to change diagonal movement?
 *   - Default: Whatever the Map Uses
 *   - Forcefully Disable Diagonal Movement
 *   - Forcefully Enable Diagonal Movement
 * 
 * ---
 * 
 * === Self Data Plugin Commands ===
 * 
 * ---
 * 
 * Self Data: Reset All
 * - Reset the Self Switch and Self Variable data of all events within the
 *   specified map.
 * 
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * === Self Switch Plugin Commands ===
 * 
 * ---
 *
 * Self Switch: A B C D
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Letter:
 *   - Letter of the target event's Self Switch to change.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 *
 * Self Switch: Switch ID
 * - Change the Self Switch of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Switch ID:
 *   - The ID of the target switch.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Self Variable Plugin Commands ===
 * 
 * ---
 *
 * Self Variable: Variable ID
 * - Change the Self Variable of a different event.
 *
 *   Map ID:
 *   - The map the target map. Use 0 for current map.
 *   - You may use JavaScript code.
 *
 *   Event ID:
 *   - The ID of the target event.
 *   - Use 0 for current event.
 *   - You may use JavaScript code.
 *
 *   Variable ID:
 *   - The ID of the target variable.
 *
 *   Value:
 *   - What value do you want to set the Self Switch to?
 *
 * ---
 * 
 * === Shadow Visibility Plugin Commands ===
 * 
 * ---
 * 
 * Shadow Hide: Player
 * - Hides the visibility of the player sprite shadow.
 * 
 * ---
 * 
 * Shadow Hide: Followers
 * - Hides the visibility of follower sprite shadows.
 * 
 * ---
 * 
 * Shadow Hide: All Events
 * - Hides the visibility of all event sprite shadows.
 * 
 * ---
 * 
 * Shadow Show: Player
 * - Returns the visibility of the player sprite shadow.
 * - Does NOT override Plugin Parameter "Shadows > Show" if off.
 * 
 * ---
 * 
 * Shadow Show: Followers
 * - Returns the visibility of follower sprite shadows.
 * - Does NOT override Plugin Parameter "Shadows > Show" if off.
 * 
 * ---
 * 
 * Shadow Show: All Events
 * - Returns the visibility of all event sprite shadows.
 * - Does NOT override Plugin Parameter or <Hide Shadow> notetag.
 * 
 * ---
 * 
 * === Spawn Event Plugin Commands ===
 * 
 * ---
 *
 * Spawn Event: Spawn At X, Y
 * - Spawns desired event at X, Y location on the current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     X Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Y Coordinate:
 *     - Target Location to spawn at.
 *     - You may use JavaScript code.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Region
 * - Spawns desired event at a random region-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Region ID(s):
 *     - Pick region(s) to spawn this event at.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Spawn At Terrain Tag
 * - Spawns desired event at a random terrain tag-marked location on the
 *   current map.
 *
 *   Step 1:
 *
 *     Template Name:
 *     - Name of the target event template to spawn as.
 *     - Ignored if this is called "Untitled".
 *
 *     Map ID:
 *     - Target event's map to be used as reference.
 *     - You may use JavaScript code.
 *
 *     Event ID:
 *     - The ID of the target event to be used as reference.
 *     - You may use JavaScript code.
 *
 *   Step 2:
 *
 *     Terrain Tag(s):
 *     - Pick terrain tag(s) to spawn this event at.
 *     - Insert numbers between 0 and 7.
 *
 *     Check Event Collision:
 *     - Check collision with any other events and player?
 *
 *     Check Passability:
 *     - Check passability of the target location.
 *
 *     Preserve Spawn:
 *     - Is the spawned event preserved?
 *     - Or does it expire upon leaving the map?
 *
 *   Step 3:
 *
 *     Success Switch ID:
 *     - Target switch ID to record spawning success.
 *     - Ignore if ID is 0. OFF means failed. ON means success.
 *
 * ---
 *
 * Spawn Event: Despawn Event ID
 * - Despawns the selected Event ID on the current map.
 *
 *   Event ID
 *   - The ID of the target event.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn At X, Y
 * - Despawns any spawned event(s) at X, Y location on the current map.
 *
 *   X Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - Target Location to despawn at.
 *   - You may use JavaScript code.
 *
 * ---
 *
 * Spawn Event: Despawn Region(s)
 * - Despawns the selected Region(s) on the current map.
 *
 *   Region ID(s):
 *   - Pick region(s) and despawn everything inside it.
 *
 * ---
 *
 * Spawn Event: Despawn Terrain Tag(s)
 * - Despawns the selected Terrain Tags(s) on the current map.
 *
 *   Terrain Tag(s):
 *   - Pick terrain tag(s) and despawn everything inside it.
 *   - Insert numbers between 0 and 7.
 *
 * ---
 *
 * Spawn Event: Despawn Everything
 * - Despawns all spawned events on the current map.
 *
 * ---
 *
 * ============================================================================
 * Move Route Custom Commands
 * ============================================================================
 *
 * Some custom commands have been added to the "Set Movement Route" event
 * command. These can be accessed by pressing the "Script..." command and
 * typing in the following, which don't need to be in code form.
 *
 * Keep in mind that since these are custom additions and RPG Maker MZ does not
 * allow plugins to modify the editor, the "Preview" button will not factor in
 * the effects of these commands.
 * 
 * If you wish to use a value from a variable, insert $gameVariables.value(x)
 * or \V[x] in place of the x in any of the below.
 * 
 * If you wish to use a value from a self variable, insert \SelfVar[x] in place
 * of the x in any of the below. This will only draw from the current event. If
 * you wish to draw data from outside event self variables, we recommend you
 * use the \V[x] variant after using the Plugin Commands to draw data from them
 * for the best accuracy.
 *
 * ---
 * 
 * Animation: x
 * - Replace 'x' with the ID of the animation to play on moving unit.
 *
 * ---
 * 
 * Balloon: name
 * - Replace 'name' with any of the following to play a balloon on that the
 *   target moving unit.
 * - '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep', 'User-Defined 1', 'User-Defined 2',
 *   'User-Defined 3', 'User-Defined 4', 'User-Defined 5'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: !
 *   - Balloon: Sleep
 *   - Balloon: Heart
 *
 * ---
 * 
 * Fade In: x
 * Fade Out: x
 * - Fades in/out the sprite's opacity.
 * - Fade In will continuously raise the opacity level until it reaches 255.
 * - Fade Out will continuously lower the opacity level until it reaches 0.
 * - Replace 'x' with the speed to fade in/out the sprite.
 * 
 * ---
 * 
 * Force Carry: On
 * Force Carry: Off
 * - For usage with the VS8 sprite sheet.
 * - Use ON to turn force carrying on.
 * - Use OFF to turn force carrying off.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Carry frames.
 * 
 * ---
 * 
 * Force Dash: On
 * Force Dash: Off
 * - Use ON to turn force dashing on.
 * - Use OFF to turn force dashing off.
 * - Forces dashing will prompt the player or event to be in the dashing state.
 * - Sprites using the VS8 sprite sheet will also show the VS8 Dashing frames.
 * 
 * ---
 * 
 * Hug: Left
 * Hug: Right
 * - Causes the moving unit to hug the left/right side of the wall.
 *
 * ---
 * 
 * Index: x
 * - Replace 'x' with a number depicting the character index to change the
 *   moving unit's sprite to.
 *
 * ---
 * 
 * Index: +x
 * Index: -x
 * - Replace 'x' with the value to change the character index of the moving
 *   unit's sprite by.
 *
 * ---
 * 
 * Jump Forward: x
 * - Replace 'x' with the number of tiles for the unit to jump forward by.
 *
 * ---
 * 
 * Jump To: x, y
 * - Replace 'x' and 'y' with the coordinates for the unit to jump to.
 *
 * ---
 * 
 * Jump to Event: x
 * - Replace 'x' with the ID of the event for the unit to jump to.
 *
 * ---
 * 
 * Jump to Player
 * - Causes the moving unit to jump to the player.
 *
 * ---
 * 
 * Jump To Home
 * - Causes the event to jump to its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Move Lower Left Until Stop
 * Move Down Until Stop
 * Move Lower Right Until Stop
 * Move Left Until Stop
 * Move Right Until Stop
 * Move Upper Left Until Stop
 * Move Up Until Stop
 * Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events will stop moving before they make contact with the player.
 *
 * ---
 * 
 * Crash Move Lower Left Until Stop
 * Crash Move Down Until Stop
 * Crash Move Lower Right Until Stop
 * Crash Move Left Until Stop
 * Crash Move Right Until Stop
 * Crash Move Upper Left Until Stop
 * Crash Move Up Until Stop
 * Crash Move Upper Right Until Stop
 * - Causes the moving unit to move that direction until it hits a stop.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move To: x, y
 * - Replace 'x' and 'y' with the map coordinates to move the unit to through
 *   pathfinding.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events will go around the player.
 *
 * ---
 * 
 * Crash Move to Event: x
 * - Replace 'x' with the ID of the event to move the unit to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Move to Player
 * - Moves the unit to the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Crash Move to Home
 * - Moves the unit towards their home position on the map.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * - Events can crash into the player and trigger an event.
 * 
 * ---
 * 
 * Move Lower Left: x
 * Move Down: x
 * Move Lower Right: x
 * Move Left: x
 * Move Right: x
 * Move Upper Left: x
 * Move Up: x
 * Move Upper Right: x
 * - Replace 'x' with the number of times to move the unit by in the designated
 *   direction on the map.
 * - Events can crash into the player and trigger an event.
 *
 * ---
 * 
 * Opacity: x%
 * - Replace 'x' with the percentage to change the unit's sprite opacity to.
 *
 * ---
 * 
 * Opacity: +x
 * Opacity: -x
 * - Replace 'x' with the increment to change the unit's sprite opacity by.
 *
 * ---
 *
 * Pattern Lock: x
 * - Replace 'x' with the step pattern to lock the unit's sprite to.
 *
 * ---
 *
 * Pattern Unlock
 * - Removes pattern lock effect.
 *
 * ---
 * 
 * Pose: name
 * - If using a VS8 sprite, this will cause the unit to strike a pose.
 * - Replace 'name' with any the following:
 * - 'Item', 'Hmph', 'Victory', 'Hurt', 'Kneel', 'Collapse',
 *   '!', '?', 'Music Note', 'Heart', 'Anger', 'Sweat', 'Cobweb', 'Silence',
 *   'Light Bulb', 'Sleep'
 *    - Do NOT insert quotes.
 * - Examples:
 *   - Balloon: Item
 *   - Balloon: Victory
 *   - Balloon: ?
 *
 * ---
 * 
 * Step Toward: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step towards.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step to.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Player
 * - Causes event to take one step towards the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Toward Home
 * - Causes the event to take one step towards its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Step Away From: x, y
 * - Replace 'x' and 'y' for the desired coordinates for the unit to take one
 *   step away from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Event: x
 * - Replace 'x' with the ID of the event for the unit to take one step from.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Player
 * - Causes event to take one step away from the player.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 *
 * ---
 * 
 * Step Away From Home
 * - Causes the event to take one step away from its home position.
 * - This only works on events, not player characters or followers.
 * - This uses RPG Maker MZ's pathfinding algorithm. It is not perfect so do
 *   not expect the most optimal results.
 * 
 * ---
 * 
 * Turn To: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Event: x
 * - Replace 'x' with the ID of the event to turn the unit towards.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Player
 * - Causes the unit to turn towards the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn to Home
 * - Causes the event to turn towards its home position.
 * - This refers to the original position's X/Y on the map.
 * - The event will turn and face the tile that is its original X/Y location.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Away From: x, y
 * - Replace 'x' and 'y' for the coordinates to make the unit face away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Event: x
 * - Replace 'x' with the ID of the event to turn the unit away from.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Player
 * - Causes the unit to turn away from the player.
 * - This supports 8 directional turning.
 *
 * ---
 * 
 * Turn Away From Home
 * - Causes the event to turn away from its home position.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * Turn Lower Left
 * Turn Lower Right
 * Turn Upper Left
 * Turn Upper Right
 * - Causes the unit to turn to one of the diagonal directions.
 *
 * ---
 * 
 * Self Switch x: On
 * Self Switch x: Off
 * Self Switch x: Toggle
 * - Replace 'x' with 'A', 'B', 'C', 'D', or a <Self> Switch ID to adjust the
 *   unit's Self Switch.
 *
 * ---
 * 
 * Self Variable x: y
 * - Replace 'x' with a <Self> Variable ID to adjust the unit's Self Variable.
 * - Replace 'y' with a number value to set the Self Variable to.
 *
 * ---
 * 
 * Teleport To: x, y
 * - Replace 'x' and 'y' with the coordinates to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Event: x
 * - Replace 'x' with the ID of the event to instantly move the unit to.
 *
 * ---
 * 
 * Teleport to Player
 * - Instantly moves the unit to the player's location.
 *
 * ---
 * 
 * Teleport to Home
 * - Instantly teleports an event to its home position on the map.
 * - This only works on events, not player characters or followers.
 * 
 * ---
 * 
 * If none of the commands are detected above, then a script call will be ran.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Label Settings
 * ============================================================================
 *
 * Event Labels are small windows created to display text over an event's head.
 * They're set up using the <Label> notetags and/or comment tags. Event Labels
 * are a great way to instantly relay information about the event's role to
 * the player.
 *
 * ---
 *
 * Event Labels
 * 
 *   Sprite Based?:
 *   - Use sprite-based labels instead of legacy-window version.
 *   - Legacy-window version will not be supported in future.
 *   - Sprite-based labels are more memory efficient and work better
 *     compatibility-wise.
 * 
 *   Mobile-Enabled?:
 *   - Enable event labels for mobile devices?
 * 
 *   Font Size:
 *   - The font size used for the Event Labels.
 * 
 *   Icon Size:
 *   - The size of the icons used in the Event Labels.
 * 
 *   Line Height:
 *   - The line height used for the Event Labels.
 * 
 *   Offset X:
 *   - Globally offset all labels horizontally by this amount.
 * 
 *   Offset Y:
 *   - Globally offset all labels vertically by this amount.
 * 
 *   Fade Speed:
 *   - Fade speed for labels.
 * 
 *   Visible Range:
 *   - Range the player has to be within the event to make its label visible.
 * 
 *     Range Type:
 *     - What do you want the default label visible range type?
 *       - Square
 *       - Diamond
 *       - Circle
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Icon Settings
 * ============================================================================
 *
 * Icons can be displayed over an event's head through the <Icon> notetags
 * and/or comment tags. These can be used for a variety of things such as
 * making them look like they're carrying an item or to indicate they have a
 * specific role.
 *
 * ---
 *
 * Event Icon
 * 
 *   Buffer X:
 *   - Default X position buffer for event icons.
 * 
 *   Buffer Y:
 *   - Default Y position buffer for event icons.
 * 
 *   Blend Mode:
 *   - Default blend mode for even icons.
 *     - 0 - Normal
 *     - 1 - Additive
 *     - 2 - Multiply
 *     - 3 - Screen
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Event Template Settings
 * ============================================================================
 *
 * Event Templates allow you to store specific maps and/or event data to bring
 * out on need while having a premade set base. They're similar to prefabs but
 * aren't things that can be altered individually as one setting for an event
 * template will serve as a blueprint for all of them that use them.
 *
 * Event Templates are used for the <Copy Event> notetags, the Morph Event and
 * Spawn Event Plugin Commands.
 *
 * ---
 *
 * Settings
 * 
 *   Preloaded Maps:
 *   - A list of all the ID's of the maps that will be preloaded to serve as
 *     template maps for this plugin.
 *
 * ---
 *
 * Templates
 * - A list of all the Event Templates used by this project. Used for notetags
 *   and Plugin Commands.
 * 
 *     Name:
 *     - Name of the template. It'll be used as anchor points for notetags and
 *       Plugin Commands.
 * 
 *     Map ID:
 *     - ID of the map the template event is stored on.
 *     - This will automatically add this ID to preloaded list.
 * 
 *     Event ID:
 *     - ID of the event the template event is based on.
 * 
 *     JavaScript:
 *       JS: Pre-Copy:
 *       JS: Post-Copy:
 *       JS: Pre-Morph:
 *       JS: Post-Morph:
 *       JS: Pre-Spawn:
 *       JS: Post-Spawn:
 *       - Code that's ran during certain circumstances.
 *       - The code will occur at the same time as the ones listed in the main
 *         Event Template Settings Plugin Parameters. However, the ones listed
 *         in these individual entries will only occur for these specific
 *         templates and only if the templates are used.
 *
 * ---
 *
 * JavaScript
 * 
 *   JS: Pre-Copy:
 *   JS: Post-Copy:
 *   JS: Pre-Morph:
 *   JS: Post-Morph:
 *   JS: Pre-Spawn:
 *   JS: Post-Spawn:
 *   - Code that's ran during certain circumstances.
 *   - These are global and are ran for all copies, morphs, and/or spawns.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Movement Settings
 * ============================================================================
 *
 * These plugin parameters allow you to control how movement works in your
 * game, toggling it from 4-directional to 8-directional, setting up rules to
 * stop self-movement from events while an event or message is present, and
 * other aesthetics such as tilting the sprite while dashing, setting shadows
 * beneath the sprites, and allow for turning in place.
 * 
 * Shadows do NOT appear for sprites using a "!" as their leading filename
 * marker. These sprites are environmental and are considered "object"
 * characters by the RPG Maker MZ core scripts. They do not utilize character
 * shadows due.
 *
 * ---
 *
 * 8 Directional Movement
 * 
 *   Enable:
 *   - Allow 8-directional movement by default? Players can move diagonally.
 * 
 *   Strict Collision:
 *   - Enforce strict collission rules where the player must be able to pass
 *     both cardinal directions?
 * 
 *   Favor Horizontal:
 *   - Favor horizontal if cannot pass diagonally but can pass both
 *     horizontally and vertically?
 * 
 *   Slower Diagonals?
 *   - Enforce a slower movement speed when moving diagonally?
 * 
 *     Speed Multiplier
 *     - What's the multiplier to adjust movement speed when moving diagonally?
 *
 * ---
 *
 * Automatic Movement
 * 
 *   Stop During Events:
 *   - Stop automatic event movement while events are running.
 * 
 *   Stop During Messages:
 *   - Stop automatic event movement while a message is running.
 *
 * ---
 * 
 * Bitmap
 * 
 *   Smoothing:
 *   - Do you want to smooth or pixelate the map sprites?
 *   - Pixelating them is better for zooming and tilting.
 * 
 * ---
 *
 * Dash
 * 
 *   Dash Modifier:
 *   - Alters the dash speed modifier.
 * 
 *   Dash on Ladder?
 *   - Allow dashing while on a ladder or rope?
 * 
 *   Enable Dash Tilt?:
 *   - Tilt any sprites that are currently dashing?
 * 
 *     Tilt Left Amount:
 *     - Amount in radians when moving left (upper left, left, lower left).
 * 
 *     Tilt Right Amount:
 *     - Amount in radians when moving right (upper right, right, lower right).
 * 
 *     Tilt Vertical Amount:
 *     - Amount in radians when moving vertical (up, down).
 *
 * ---
 * 
 * Event Movement
 * 
 *   Random Move Weight:
 *   - Use numbers between 0 and 1.
 *   - Numbers closer to 1 stay closer to their home position.
 *   - 0 to disable it.
 * 
 *   Shift Y:
 *   - How many pixels should non-tile characters be shifted by?
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Path Finding
 * 
 *   Mobile-Enabled?:
 *   - Enable diagonal pathfinding for mobile devices?
 * 
 * ---
 *
 * Shadows
 * 
 *   Show:
 *   - Show shadows on all events and player-related sprites.
 * 
 *   Default Filename:
 *   - Default filename used for shadows found in img/system/ folder.
 * 
 *   Shadow Z Layer:
 *   - What is the sprite Z layer used for the shadow sprites?
 *     - In-game layers are as follows:
 *     - 0 : Lower tiles
 *     - 1 : Lower characters
 *     - 3 : Normal characters
 *     - 4 : Upper tiles
 *     - 5 : Upper characters
 *     - 6 : Airship shadow
 *     - 7 : Balloon
 *     - 8 : Animation
 *     - 9 : Destination
 *
 * ---
 *
 * Turn in Place
 * 
 *   Enable:
 *   - When not dashing, player will turn in place before moving.
 *   - This only applies with keyboard inputs.
 * 
 *   Delay in Frames:
 *   - The number of frames to wait before moving.
 *
 * ---
 * 
 * Vehicle Speeds
 * 
 *   Boat Speed:
 *   - Allows you to adjust the base speed of the boat vehicle.
 * 
 *   Ship Speed:
 *   - Allows you to adjust the base speed of the ship vehicle.
 * 
 *   Airship Speed:
 *   - Allows you to adjust the base speed of the airship vehicle.
 * 
 * ---
 * 
 * Wall Bump
 * 
 *   Enable?:
 *   - Enable the sound effect to be played when bumping into a wall?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: VisuStella 8-Dir Settings
 * ============================================================================
 *
 * These are settings for sprite sheets using the VS8 format.
 * For more information on the VS8 format, look in the help section above.
 *
 * ---
 *
 * Balloon Icon Settings
 * 
 *   Auto-Balloon Poses:
 *   - Automatically pose VS8 sprites when using balloon icons.
 * 
 *   Balloon Offset X:
 *   - Offset balloon icons on VS8 sprites by x pixels.
 * 
 *   Balloon Offset Y:
 *   - Offset balloon icons on VS8 sprites by y pixels.
 *
 * ---
 *
 * Icons
 * 
 *   Auto Buffer:
 *   - Automatically buffer the X and Y coordinates of VS8 sprites?
 * 
 *   Use Carry Pose:
 *   - Use the carry pose when moving with an icon overhead.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Region Rulings
 * ============================================================================
 *
 * These settings allow you to decide the passability of the player, events,
 * and various vehicles through the usage of Regions.
 *
 * ---
 *
 * Allow Regions
 * 
 *   All Allow:
 *   Walk Allow:
 *   Player Allow:
 *   Event Allow:
 *   Vehicle Allow:
 *   Boat Allow:
 *   Ship Allow:
 *   Airship Allow:
 *   - Insert Region ID's where the affected unit type can enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Forbid Regions
 * 
 *   All Forbid:
 *   Walk Forbid:
 *   Player Forbid:
 *   Event Forbid:
 *   Vehicle Forbid:
 *   Boat Forbid:
 *   Ship Forbid:
 *   Airship Forbid:
 *   - Insert Region ID's where the affected unit type cannot enter.
 *   - Region ID's range from 0 to 255.
 *
 * ---
 *
 * Dock Regions
 * 
 *   Vehicle Dock:
 *   Boat Dock:
 *   Ship Dock:
 *   Airship Dock:
 *   - Insert Region ID's where the affected vehicle can dock
 *   - Region ID's range from 0 to 255.
 * 
 *   Only Region Dockable:
 *   - Vehicles are only able to dock at designated regions.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on OK Button
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that activate using
 * Regions when pressing the OK button while standing on top of them or in
 * front of them. These let you create near universally interactable objects
 * using Regions, such as rivers to start up fishing events or locations to
 * places items on.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * Target Tile
 * 
 *   Target Tile:
 *   - Which tile should be checked for Common Event on OK Button?
 *     - Tile in front of player.
 *     - Tile player is standing on top of.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Common Event on Touch
 * ============================================================================
 *
 * These Plugin Parameters allow you to setup Common Events that trigger when
 * stepping onto Region-marked tiles. These let you create custom effects that
 * will occur such as customized damage floors, traps, and/or events.
 * 
 * Areas marked with these regions will not allow random encounters to occur.
 * This is how RPG Maker works. Assuming you are not using plugins at all, by
 * putting on touch events all over the map, tiles with those on touch events
 * will not let random encounters trigger.
 *
 * ---
 *
 * Regions
 * 
 *   Regions 1 - 255:
 *   - Which Common Event does this region activate?
 *   - Use 0 to not activate any Common Events.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Terrain Tag Settings
 * ============================================================================
 *
 * Terrain Tags are used in Database => Tilesets to mark certain tiles and
 * give them unique properties through terrain tags.
 *
 * ---
 *
 * Terrain Tag ID's
 * 
 *   Rope:
 *   - Which terrain tag number to use for ropes?
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.67: September 14, 2026
 * * Bug Fixes!
 * ** Fixed a bug where reference variables weren't working properly. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Added better debugging for reference switches and reference variables
 *    in case reference names weren't found. Update made by Arisu.
 * 
 * Version 1.66: August 17, 2026
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Call Event: Same Event (Page #)
 * **** Calls a different page of the same event.
 * **** References the page number.
 * *** Call Event: Same Event (Page Name)
 * **** Calls a different page of the same event.
 * **** Looks for <Page Name: string> comment tag.
 * 
 * Version 1.65: May 18, 2026
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New JavaScript notetags added by Arisu:
 * *** <JS On Map Load>
 * **** Replace 'code' with JavaScript code to run the moment the map finishes
 *      loading and before fading in.
 * *** <JS On Map Exit>
 * **** Replace 'code' with JavaScript code to run the moment the player
 *      transfers to a different map and the screen completely fades out.
 * 
 * Version 1.64: March 16, 2026
 * * Bug Fixes!
 * ** Click + hold movement no longer crashes when moving over events without
 *    any active pages. Fix made by Arisu.
 * 
 * Version 1.63: February 16, 2026
 * * Feature Update!
 * ** When moving by clicking and holding down the mouse button, the touch
 *    input will no longer lock onto any events with empty event lists or
 *    populated by just comments. Update made by Arisu.
 * 
 * Version 1.62: January 19, 2026
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** New section added: Reference Switches and Reference Variables
 * *** Reference Switches and Reference Variables are added in version 1.62 of
 *     this plugin. These switches and variables allow you to reference them
 *     through strings when using script calls.
 * *** By simply naming your switch or variable ((Reference Name)), you can use
 *     that 'reference name' in a string to call them for script calls.
 * *** When referencing the strings in the script calls, case does not matter,
 *     which means you can use all capitals or all lower case and they'll still
 *     reference the same switch or variable.
 * **** Example: Switch 10 Name: ((Priscilla Joined))
 * ***** Script Call: $gameSwitches.value('Priscilla Joined')
 * ***** $gameSwitches.setValue('Priscilla Joined', true)
 * **** Variable 20 Name: Total ((Goblins Slain))
 * ***** $gameVariables.value('Goblins Slain')
 * ***** $gameVariables.setValue('Goblins Slain', 50)
 * *** Remember to put quotes around the name for the script call!
 * *** This only applies for the $gameSwitches and $gameVariables functions of
 *     value(id) and setValue(id, value). They do not apply to the other
 *     $gameSwitches and $gameVariables functions.
 * * New Features!
 * ** Added Reference Switches and Reference Variables
 * *** See Help section for more info about Reference Switches and Variables
 * ** New Plugin Commands added:
 * *** Shadow Hide: Player
 * *** Shadow Hide: Followers
 * *** Shadow Hide: All Events
 * **** Hides the visibility of the target sprite shadow.
 * *** Shadow Show: Player
 * *** Shadow Show: Followers
 * *** Shadow Show: All Events
 * **** Returns the visibility of target sprite shadow.
 * **** Does NOT override Plugin Parameter "Shadows > Show" if off.
 * **** Does NOT override <Hide Shadow> notetag.
 * 
 * Version 1.61: December 15, 2025
 * * Bug Fixes!
 * ** Fixed a bug where shadows would appear under lower-priority event sprites
 *    making usage of certain tiles awkward looking. This is corrected by the
 *    new Plugin Parameter. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Arisu:
 * *** Parameters > Movement Settings > Shadows > Shadow Z Layer
 * **** What is the sprite Z layer used for the shadow sprites?
 * **** By default, this layer will now be 0.5 instead of 0.
 * * Feature Update!
 * ** If a event is made whose priority is "Below characters" and is a tile
 *    object (ie taking a sprite from the map tileset or a character sprite
 *    with "!" in front of the name), it will be automatically regulated to
 *    a custom Z layer of 0.
 * 
 * Version 1.60: August 29, 2024
 * * Bug Fixes!
 * ** Fixed a bug where events with large hitboxes do not work with crash move.
 *    Fix made by Arisu.
 * ** Fixed a bug where single-mode save games by Save Core would freeze after
 *    executed event movements. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Event Labels will adjust their vertical position to the picture of any
 *    attached event picture if one is present. Update by Arisu.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Picture Type: Enemy>
 * *** <Picture Type: SV Enemy>
 * **** Will use /img/enemies/ or /img/sv_enemies/ instead of /img/pictures/ to
 *      grab a picture graphic from.
 * **** Other picture graphic sprite related notetags will apply as normal.
 * *** <Label Range Type: Square>
 * *** <Label Range Type: Circle>
 * *** <Label Range Type: Diamond>
 * **** Sets a range type for the label to appear visible for.
 * ** New Plugin Parameters added by Arisu:
 * *** Parameters > Event Label Settings > Visible Range > Range Type:
 * **** What do you want the default label visible range type?
 * 
 * Version 1.59: June 13, 2024
 * * Bug Fixes!
 * ** Added a cache check for character sprite tag names to reduce frame drops.
 *    Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Arisu:
 * *** <Location X: +x>, <Location X: -x>
 * *** <Location Y: +y>, <Location Y: -y>
 * *** <Location: +x, +y>, <Location: +x, -y>
 * *** <Location: -x, +y>, <Location: -x, -y>
 * **** Adjusts the initial location of this event by +x and +y (or -x and -y).
 * **** This allows you to stack events on top of each other or even move them
 *      to various places of the map.
 * *** <Tile Expand Up: x>
 * *** <Tile Expand Down: x>
 * *** <Tile Expand Left: x>
 * *** <Tile Expand Right: x>
 * **** Used for events with tile graphics. Expands the graphic up, down, left,
 *      or right from the spritesheet.
 * **** This does NOT expand the hitbox.
 * **** The graphic will be anchored to the tile it's expanded from. This means
 *      even if you expanded downward, the actual event's position will still
 *      be the current event's X/Y coordinates. It's just grown more vertically
 *      and is still centered horizontally.
 * **** This is primarily used to save on having to use too many events for
 *      tiles that expanded past 1x1 tile sizes.
 * 
 * Version 1.58: May 16, 2024
 * * Documentation Update!
 * ** Added "Features: Character Sprite Filename Tags" section.
 * * New Features!
 * ** [Invisible] tag added to character sprite filenames.
 * *** If a character sprite's filename has [invisible] in it, it will become
 *     invisible on the map screen in-game while almost everything else about
 *     it is visible. This is used for those who wish to use sprite labels for
 *     things such as autorun and parallel events.
 * 
 * Version 1.57: March 14, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Plugin Command: "Event Icon: Delete" will now keep an event icon cleared
 *    until the newly added Plugin Command: "Event Icon: Restore" is used.
 *    Update made by Arisu.
 * ** Plugin Command: "Event Icon: Change" is now renamed to have "(Temporary)"
 *    after its name in order to clarify the temporary changes made to it.
 * * New Features!
 * ** New Plugin Command added by Arisu:
 * *** Event Icon: Event Icon: Change (Forced)
 * **** Change the icon that appears on an event.
 * **** This change is forced and needs to be restored.
 * *** Event Icon: Restore
 * **** Restores a deleted or forced icon that appears on an event.
 * 
 * Version 1.56: February 15, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added fail safes for activation proximity notetags when loaded from past
 *    save files without Events and Movement Core installed. Added by Arisu.
 * * New Features!
 * ** New notetags added by Arisu:
 * *** <Encounter Half Square: x>
 * *** <Encounter Half Circle: x>
 * *** <Encounter Half Delta: x>
 * *** <Encounter Half Row: x>
 * *** <Encounter Half Column: x>
 * *** <Encounter None Square: x>
 * *** <Encounter None Circle: x>
 * *** <Encounter None Delta: x>
 * *** <Encounter None Row: x>
 * *** <Encounter None Column: x>
 * **** If the player is within the 'x' area effect of this event, the random
 *      encounter rate will be halved or suppressed completely depending on the
 *      notetag used.
 * **** These include script call checks.
 * *** <Erase if Encounter Half>
 * *** <Erase if Encounter None>
 * **** Automatically erase this event if the player's party has an encounter
 *      half or encounter none effect, or if the event has spawned in an
 *      encounter half or encounter none area.
 * **** This check only occurs in two situations: when the map is first loaded
 *      after being teleported into or when the player leaves a menu and
 *      returns back to the map.
 * **** Events that have been erased due to this effect will NOT return even if
 *      the encounter half/none effect is removed while the player is still on
 *      the map. The event will return if the player exits the map and comes
 *      back.
 * 
 * Version 1.55: December 14, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Event Popup: Player
 * *** Event Popup: Follower
 * *** Event Popup: Event
 * *** Event Popup: Target Tile
 * **** Makes a centered event popup on the player sprite, target follower
 *      sprite, target event sprite, or target tile.
 * **** All of these new Plugin Commands require VisuMZ_1_MessageCore and
 *      cannot be used in battle.
 * 
 * Version 1.54: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated to reduce confusion:
 * *** Call Event: Remote Read
 * **** This will run the page of the target event on the current event.
 * **** This means that any "This Event" commands will be applied to the event
 *      using this Plugin Command and NOT the target event that page data is
 *      being retrieved from.
 * **** Think of it as the current event using the target called event as a
 *      Common Event ala how RPG Maker 2003 works (for those familiar with it).
 * * Feature Update!
 * ** Renamed "Call Event: Remote Activation" to "Call Event: Remote Read" to
 *    reduce confusion.
 * * Feature Update!
 * ** <Activation Radius: x> notetag is now defined as <Activation Delta: x>
 * *** 'Radius' variant will still work and function as 'Delta' but will no
 *     longer be listed in the help file as 'Radius'
 * *** This is changed to avoid confusion with the new notetag.
 * * New Features!
 * ** New notetag added by Arisu and sponsored by AndyL:
 * *** <Activation Circle: x>
 * **** A circle-shaped range with the event at the center.
 * **** 'x' represents the distance from the center.
 * 
 * Version 1.53: August 17, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** <Map Load Common Event: x>
 * ** <Map Load Common Events: x, x, x>
 * *** When this map is loaded, run the specified Common Events once available.
 * **** Does NOT trigger if you transfer to a different part of the same map.
 * 
 * Version 1.52: July 13, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated help file for <Label: text> notetags:
 * *** If text codes are used, avoid text codes that use < and > wrappers.
 * ** Updated help file for <Label> sandwich notetags:
 * *** You can use text codes with < and > wrappers.
 * * Feature Update!
 * ** Event labels now work properly with scaling sprites.
 * * New Features!
 * ** New notetag added by Arisu and sponsored by Anon:
 * *** <Label Hue Shift: +x>
 * *** <Label Hue Shift: -x>
 * **** Changes the hue of the event label by +x or -x every frame.
 * **** Keep in mind that since this is changing hue, this will appear to have
 *      no effect if you are using black and white labels.
 * **** Use labels with text codes that add color to them like '\C[4]text'
 * **** This only works with the sprite version of event labels and does not
 *      work with the legacy version.
 * 
 * Version 1.51: June 15, 2023
 * * Bug Fixes!
 * ** Provided a fail safe for plugins using the scaling options from this
 *    plugin but do not have scaling parameters identified. The scaling ratio
 *    should now default to 1.0. Fix made by Olivia.
 * * Feature Update!
 * ** Diagonal pathfinding is now improved as to not get stuck on tight corners
 *    on the map. Feature update made by Arisu.
 * 
 * Version 1.50: April 13, 2023
 * * Bug Fixes!
 * ** <Icon: x> should now update correctly when changing pages through self
 *    switches or other event conditions. Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Event Labels > Mobile-Enabled?
 * *** Plugin Parameters > Movement > Pathfinding > Mobile-Enabled?
 * **** These settings allow you to enable or disable certain features when
 *      played on mobile devices for better performance.
 * 
 * Version 1.49: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Event Notetag and Comment Tags added by Arisu:
 * *** <Scale: x%>
 * *** <Scale X: x%>
 * *** <Scale Y: y%>
 * **** Changes the scale of the sprite to the designated size.
 * 
 * Version 1.48: January 20, 2023
 * * Feature Update!
 * ** <Move Synch> for certain types will also copy facing directions even if
 *    there are no tile movements (ie changing directions when pressed up
 *    against and obstacle). Update made by Arisu.
 * 
 * Version 1.47: November 10, 2022
 * * Feature Update!
 * ** If "Follower: Set Global Chase" is set to false, followers will no longer
 *    jump towards the player location when the player jumps. This does NOT
 *    apply to gather or location changing players. Followers will still have
 *    to synchronize their positions there regardless in order to maintain
 *    consistency. Update made by Olivia.
 * 
 * Version 1.46: September 29, 2022
 * * Bug Fixes!
 * ** Altered the self switch auto-reset timing to reduce errors. Fix by Arisu.
 * * Feature Update!
 * ** Added self-movement prevention whenever scenes are deactivated. Update
 *    made by Arisu.
 * 
 * Version 1.45: August 18, 2022
 * * Bug Fixes!
 * ** Fixed a bug that caused event labels with variables from refreshing
 *    properly. Fix made by Arisu.
 * 
 * Version 1.44: July 21, 2022
 * * Bug Fixes!
 * ** Fixed a problem that caused <Exit Reset Self Data> notetag to not work.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Diagonal pathfinding is now disabled when there are too many events on a
 *    map, causing extra collission checks. This value is set to 100 for the
 *    time being until we can figure out a better way to calculate diagonal
 *    pathfinding. Update made by Irina.
 * 
 * Version 1.43: July 14, 2022
 * * Bug Fixes!
 * ** Move to Player for events should no longer cause hang ups. Fix by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added caching function for pathfinding when using touch movement for a
 *    smoother experience. When touch movement is held down, pathfinding will
 *    utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Update made by Arisu.
 * * New Features!
 * ** New notetag added by Arisu:
 * *** <Playtest>
 * **** If this notetag is found in the event's notebox (NOT comments), then
 *      the event will only appear during a playtest session. It will not
 *      appear in a deployed game where the playtest flag is not on.
 * 
 * Version 1.42: June 23, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added to <Copy Event: x, y> notetag help:
 * *** - If '0' is used for the Map ID, reference the current map.
 * * Feature Update!
 * ** Default MZ behavior would have "below characters" trigger events with
 *    only comments lock out facing "same as characters" trigger events. This
 *    is now bypassed. Update made by Arisu.
 * ** The <Copy Event: mapID, eventID> notetags now allow usage of '0' for the
 *    mapID to reference the current map. Update made by Arisu.
 * ** <Save Event Location> should now work more efficiently. Update by Arisu.
 * ** Dashing animations for followers will no longer look weird after having
 *    gathered up and then proceeding to dash. Update made by Irina.
 * * New Features!
 * ** New event notetag added by Arisu:
 * *** <Exit Reset Self Data>
 * **** When the player leaves the current map, all Self Switches and Self
 *      Variables related to this event will be reset.
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Self Data: Reset All
 * **** Reset the Self Switch and Self Variable data of all events within the
 *      specified map.
 * ** New Plugin Parameter added by Arisu and sponsored by Anon:
 * *** Plugin Params > Movement Settings > Dash > Dash on Ladder?
 * **** Allow dashing while on a ladder or rope?
 * 
 * Version 1.41: June 1, 2022
 * * Bug Fixes!
 * ** Parallel Process Common Events above 1000 should no longer crash the
 *    game. Bug fixed by Irina.
 * 
 * Version 1.40: May 19, 2022
 * * Bug Fixes!
 * ** Sprite Event Labels with distance properties will now work properly
 *    when changing from a non-met page condition to a met page condition.
 *    Fix made by Arisu.
 * 
 * Version 1.39: May 5, 2022
 * * Bug Fixes!
 * ** Save event location should now work properly with Set Event Location
 *    command. Fix made by Arisu.
 * ** Sprite Event Labels with distance properties will no longer be visible
 *    when constantly entering/exiting the Main Menu. Fix made by Arisu.
 * 
 * Version 1.38: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu and sponsored by Archeia:
 * *** Plugin Parameters > Movement Settings > Event Movement > Shift Y
 * **** How many pixels should non-tile characters be shifted by?
 * ** New Notetags added by Arisu and sponsored by Archeia:
 * *** <Picture Filename: filename>
 * **** applies a picture graphic from the /img/pictures/ folder of your
 *      game project.
 * **** This graphic will be on top of the character sprite but below the event
 *      icon sprite.
 * **** The picture priority will be the same as the event's priority. If it is
 *      "below characters", the player can walk on top of it. If it is "above
 *      characters", the player will behind it. If it is "same as characters",
 *      the priority will be based on the current relative Y position.
 * *** <Picture Max Size: x>
 * *** <Picture Scale: y%>
 * **** If the "Max Size" or "Scale" supplementary notetags are used, the
 *      picture graphic will be scaled proportionally to fit either the exact
 *      pixel size for "Max Size" or the "Scale" ratio.
 * *** <Picture Offset: +x, +y>
 * *** <Picture Offset: -x, -y>
 * **** Offsets the X and Y position of the event picture relative to the event
 *      sprite's own position.
 * *** <Picture Wait Frames: x>
 * **** Requires VisuMZ_4_AnimatedPictures! "Wait Frames" is used with VisuMZ's
 *      Animated Pictures plugin. This determines the delay inbetween
 *      frame changes.
 * 
 * Version 1.37: March 24, 2022
 * * Documentation Update!
 * ** Added extra clarity to "Turn to Home" Movement Command.
 * *** This refers to the original position's X/Y on the map.
 * *** The event will turn and face the tile that is its original X/Y location.
 * 
 * Version 1.36: March 17, 2022
 * * Bug Fixes!
 * ** "Turn To Home" movement command now properly faces the home position.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.35: March 3, 2022
 * * IMPORTANT! Compatibility Update!
 * ** Compatibility Update with RPG Maker MZ 1.4.4.
 * *** For some reason this update broke any saves made before 1.4.4 was
 *     updated and they cannot be loaded. The only way saves would load is if
 *     you made a safe after 1.4.4 was done. This should be fixed and saves
 *     made with 1.4.3 and before should now be working. Update made by Irina.
 * 
 * Version 1.34: February 17, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * New Features!
 * ** Arisu has created new event notetag/comment tags:
 * *** <Custom Z: x>
 * **** Replace 'x' with a number value to determine the event sprite's Z value
 *      relative to the tilemap.
 * **** View the helpfile for more information.
 * *** <Mirror Sprite>
 * **** The event sprite's visual appearance is mirrored.
 * *** <Move Synch Distance Opacity: x>
 * **** Changes the opacity of the event based on the distance between it and
 *      its move synched target. Closer means more opaque. Further away means
 *      more transparent.
 * ** Irina has created a more memory efficient version of Event Labels.
 * *** Plugin Parameters > Event Label Settings > Sprite Based?
 * **** Use sprite-based labels instead of legacy-window version.
 * **** Legacy-window version will not be supported in future.
 * 
 * Version 1.33: February 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu!
 * *** <Hide Player>
 * *** <Show Player>
 * **** Map Notetag. Forcefully hides or shows the player sprite. This is so
 *      you don't need to manually turn the setting on/off each time you enter
 *      a specific map.
 * *** <Hide Followers>
 * *** <Show Followers>
 * **** Map Notetag. Forcefully hides or shows the player's followers. This is
 *      so you don't need to manually turn them on/off each time you enter a
 *      specific map.
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Self Variable changes from custom move routes should no longer cause
 *    crashes. Fix made by Arisu.
 * ** Self Switch custom move route toggles should now work properly. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Better shadow tracking algorithm to remove any shadow twitching.
 *    Update made by Yanfly.
 * 
 * Version 1.31: January 6, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.30: November 25, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Map Switches and Map Variables added by Arisu:
 * *** Map Switches are self-switches for maps. Instead of using <Self>, use
 *     <Map> in the Switch name to designate it as a Map Switch. The ON/OFF
 *     data for that Switch will vary depending on the map the player is
 *     currently on.
 * *** Map Variables are self-variables for maps. Instead of using <Self>, use
 *     <Map> in the Variable name to designate it as a Map Switch. The number
 *     data for that Variable will vary depending on the map the player is
 *     currently on.
 * *** Script Calls have been added for these features as well.
 * **** See help file for them.
 * 
 * Version 1.29: October 7, 2021
 * * Bug Fixes!
 * ** Same map event spawning should now work properly without the need to add
 *    the current map ID to the preloaded map array. Update made by Arisu.
 * 
 * Version 1.28: September 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New move route commands added by Arisu:
 * *** Jump to Home
 * *** Move to Home
 * *** Crash Move to Home
 * *** Step Toward Home
 * *** Step Away From Home
 * *** Turn to Home
 * *** Turn Away From Home
 * *** Teleport to Home
 * **** These only work on events. Their actions should be reflective of what
 *      their command names suggest.
 * 
 * Version 1.27: September 17, 2021
 * * Bug Fixes!
 * ** Fixed event spawn templates so that they can work properly with Common
 *    Events. Fix made by Arisu.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** "Step Towards Player" custom command should now work properly. Fix made
 *    by Arisu.
 * ** Having multiple region restriction notetags for a map will no longer
 *    cause others to lock out. Fix made by Arisu.
 * 
 * Version 1.25: July 30, 2021
 * * Bug Fixes!
 * ** Fixed a problem that caused the 'setSelfSwitchValue' and
 *    'setSelfVariableValue' functions to not work properly. Fix made by Irina.
 * 
 * Version 1.24: June 4, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added extra clarification on which commands will go around the player
 *    character and which ones won't.
 * * New Move Route Custom Commands added by Arisu:
 * ** Crash Move (direction) Until Stop
 * ** Crash Move To: x, y
 * ** Crash Move To Event: x
 * *** These allow events to collide with the player character and trigger
 *     Event Touch events.
 * 
 * Version 1.23: May 21, 2021
 * * Bug Fixes!
 * ** Morphing by templates should no longer cause a crash. Fix made by Arisu.
 * 
 * Version 1.22: May 7, 2021
 * * Bug Fixes!
 * ** Plugin Commands for Event Label Visibility should now update without
 *    needing to take steps as per distance detection. Fix made by Arisu.
 * * Documentation Update!
 * ** Added clarity to "Common Event on Touch" Plugin Parameters.
 * *** Areas marked with these regions will not allow random encounters to
 *     occur. This is how RPG Maker works. Assuming you are not using plugins
 *     at all, by putting on touch events all over the map, tiles with those on
 *     touch events will not let random encounters trigger.
 * 
 * Version 1.21: March 12, 2021
 * * Bug Fixes!
 * ** Move until stop custom move routes should no longer cause crashes.
 *    Fix made by Arisu.
 * 
 * Version 1.20: February 26, 2021
 * * Bug Fixes!
 * ** Region Restrictions regarding Player Allow will no longer affect vehicle
 *    passability. Update made by Arisu.
 * 
 * Version 1.19: February 12, 2021
 * * Bug Fixes!
 * ** "Self Variable: Variable ID" plugin command's Map ID should now be able
 *    to use "0" to self reference the current map. Fix made by Olivia.
 * 
 * Version 1.18: February 5, 2021
 * * Bug Fixes!
 * ** Event icon plugin commands should now work properly. Fix made by Arisu.
 * * Documentation Update!
 * ** Added new "Features: Weighted Random Movement" section.
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Random Move Weight: x>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then the event will stick closer to their home location (where they are
 *      located upon spawning on the map). How close they stick to their home
 *      location will depend on the weighted 'x' value.
 * *** <True Random Move>
 * **** If this tag is used on an event with random-type autonomous movement,
 *      then that event will ignore the effects of weighted randomized
 *      movement.
 * ** New Plugin Commands added by Arisu and sponsored by AndyL:
 * *** Event Timer: Change Speed
 * *** Event Timer: Expire Event Assign
 * *** Event Timer: Expire Event Clear
 * *** Event Timer: Frames Gain
 * *** Event Timer: Frames Set
 * *** Event Timer: Pause
 * *** Event Timer: Resume
 * **** The above Plugin Commands allow you to control the game timer better.
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Movement > Event Movement > Random Move Weight
 * **** Use numbers between 0 and 1. Numbers closer to 1 stay closer to their
 *      home position.
 * 
 * Version 1.17: January 29, 2021
 * * Documentation Update!
 * ** Added "Do NOT insert quotes" to "Balloon: name" and "Pose: name".
 * ** Added Examples for extra clarification.
 * * Optimization Update!
 * ** When touch clicking an event on a map with multiple events, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.16: January 22, 2021
 * * Optimization Update!
 * ** When touch clicking multiple times on an impassable tile, pathfinding
 *    will utilize the non-diagonal function for less resource consumption to
 *    prevent FPS frame drops. Fix made by Arisu.
 * 
 * Version 1.15: January 1, 2021
 * * Bug Fixes!
 * ** Spawned events should now resume their automated self movement after
 *    being interacted with. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for updated features.
 * * Feature Updates!
 * ** Collission checks for the Spawn Event Plugin Commands now account for
 *    the spawning event's Hitbox, too. Update made by Yanfly.
 * ** Spawn Event Plugin Commands adds a new parameter "Success Switch ID" to
 *    check if the spawning has been successful or not.
 * * New Features!
 * ** New Plugin Commands added by Yanfly!
 * *** Spawn Event: Spawn At Terrain Tag
 * *** Spawn Event: Despawn Terrain Tag(s)
 * **** These function similar to their region counterparts except they target
 *      terrain tags instead.
 * 
 * Version 1.14: December 18, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for page index.
 *    Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the new features!
 * * New Features!
 * ** New Plugin Commands added by Irina.
 * *** Follower: Set Global Chase
 * *** Follower: Set Target Chase
 * *** Follower: Set Control
 * *** Follower: Reset
 * **** These plugin commands allow you to change whether or not the followers
 *      will chase their intended targets and/or shift control over their
 *      movement route from the "Player" to the target follower.
 * 
 * Version 1.13: December 4, 2020
 * * Bug Fixes!
 * ** Caching for event label positions now account for one-screen maps.
 *    Fix made by Arisu.
 * 
 * Version 1.12: November 29, 2020
 * * Bug Fixes!
 * ** Click Triggers no longer work on erased events. Fix made by Arisu.
 * ** Erased events no longer have icons appear above their heads.
 *    Fix made by Arisu.
 * * Feature Update!
 * ** Initialization of the plugin's effects no only occur if the event's
 *    current page settings have been altered. Change made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 15, 2020
 * * Bug Fixes!
 * ** Morph plugin command should no longer cause crashes. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added documentation for the updated features!
 * * Feature Updates!
 * ** Updates to these Plugin Commands made by Yanfly:
 * *** Call Event: Remote Activation
 * *** Event Icon: Change
 * *** Event Icon: Delete
 * *** Event Location: Create
 * *** Event Location: Delete
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * *** Morph Event: Change
 * *** Morph Event: Remove
 * *** Self Switch: A B C D
 * *** Self Switch: Switch ID
 * *** Self Variable: Variable ID
 * **** All of the above Plugin Commands can now use 0 for their Event ID's in
 *      order to refer to the running event's ID value.
 * 
 * Version 1.10: November 1, 2020
 * * Bug Fixes!
 * ** Spawned Event preserve function now works properly. Fix made by Arisu.
 * 
 * Version 1.09: October 25, 2020
 * * Documentation Update
 * ** Added clarity on the notetags and comment tags on when their effects
 *    are present.
 * * Feature Update!
 * ** Event icons now have an unsmoothing property to them to make them
 *    look better. Update made by Irina.
 * 
 * Version 1.08: October 11, 2020
 * * Compatibility Update
 * ** Added failsafes for better compatibility.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** Updated for the new features!
 * * Feature Update!
 * ** Data from deleted events will now be cleared and removed from maps if the
 *    events do not exist to prevent conflict with plugins from the VisuStella
 *    MZ library and other plugins. Feature added by Irina.
 * ** Move Route Custom Commands now support self variable values! If you wish
 *    to use a value from a self variable, insert \SelfVar[x] in place of the x
 *    in any of the below. This will only draw from the current event. If you 
 *    wish to draw data from outside event self variables, we recommend you
 *    use the \V[x] variant after using the Plugin Commands to draw data from
 *    them for the best accuracy.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly!
 * *** Movement > Bitmap > Smoothing
 * **** Do you want to smooth or pixelate the map sprites? Pixelating them is
 *      better for zooming and tilting.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Events & Movement Core no longer disables the Core Engine's Smart Event
 *    Collision plugin parameter. Fix made by Yanfly.
 * * Documentation Update!
 * ** Move Route Custom Commands updated with the new feature for inserting
 *    variable values.
 * * Feature Update!
 * ** Move Route Custom Commands now support $gameVariable.value(x) values.
 *    You can also just use \V[x] for variable values, too. Added by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** If player movement is disabled, mouse movement is disabled, too.
 *    Fix made by Arisu.
 * ** The region restriction notetags should be fixed and work again.
 *    Fix made by Arisu.
 * 
 * Version 1.04: September 13, 2020
 * * Feature Update!
 * * Some Move Route Custom Commands are updated to ignore spaces:
 * ** Jump To: x, y
 * ** Move To: x, y
 * ** Step Toward: x, y
 * ** Step Away From: x, y
 * ** Turn To: x, y
 * ** Turn Away From: x, y
 * ** Teleport To: x, y
 * *** These can now be written as x,y. There still needs to be a space between
 *     the : and x for parsing clarity, however.
 * *** Feature updated by Arisu with help from BlueMoon and Zeriab.
 * * New Features!
 * ** New 'Move Route Custom Commands' added by Arisu.
 * *** Fade In: x
 * *** Fade Out: x
 * *** Force Carry: On
 * *** Force Carry: Off
 * *** Force Dash: On
 * *** Force Dash: Off
 * ** New Plugin Commands added by Arisu.
 * *** Player Movement: Control
 * **** Enable or disable player control over the player character's movement.
 * *** Player Movement: Diagonal
 * **** Override settings to for player diagonal movement.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Sleeping pose is now fixed and working! Fix made by Yanfly.
 * * Documentation Update!
 * ** Extended "Features: Self Switches and Variables" to explain how to use
 *    script calls to grab self switch information.
 * * New Features!
 * ** New Plugin Commands added by Yanfly:
 * *** Global Switch: Get Self Switch A B C D
 * *** Global Switch: Get Self Switch ID
 * *** Global Variable: Get Self Variable ID
 * **** These plugin commands allow you to transfer data stored in a self
 *      switch or Self Variable into a global switch or global variable.
 * 
 * Version 1.02: August 30, 2020
 * * Bug Fixes!
 * ** <Diagonal Movement: Off> notetag now works properly. Fix made by Yanfly.
 * ** Plugin Command "Event Label: Visible" now works properly. Fix made by
 *    Shaz.
 * ** Custom Move Route commands should now be working properly. Fix made by
 *    Shaz.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Event Cache issues fixed upon loading a saved game. Fix made by Yanfly.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_AutoMove
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AutoMoveEvents
 * @text Auto Movement: Events
 * @desc Allow/stop events from auto movement.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Allow
 * @value Allow
 * @option Stop
 * @value Stop
 * @option Toggle
 * @value Toggle
 * @desc Allow events to move automatically?
 * @default Allow
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_CallEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallEvent
 * @text Call Event: Remote Read
 * @desc Runs the page of a different event remotely. This will run
 * the page of the target event on the CURRENT event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to remotely run. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg PageId:eval
 * @text Page ID
 * @desc The page of the remote event to run.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallEventSamePageNumber
 * @text Call Event: Same Event (Page #)
 * @desc Calls a different page of the same event.
 * References the page number.
 *
 * @arg PageId:eval
 * @text Page ID
 * @desc The page of the same event to run.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallEventSamePageName
 * @text Call Event: Same Event (Page Name)
 * @desc Calls a different page of the same event.
 * Looks for <Page Name: string> comment tag.
 *
 * @arg PageName:str
 * @text Page Name
 * @desc Searches the pages of the same event for
 * comment tag: <Page Name: string>
 * @default string
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_DashEnable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DashEnableToggle
 * @text Dash Enable: Toggle
 * @desc Enable/Disable Dashing on maps.
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option Enable
 * @value Enable
 * @option Disable
 * @value Disable
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change dashing to?
 * @default Enable
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChange
 * @text Event Icon: Change (Temporary)
 * @desc Change the icon that appears on an event.
 * This change is temporary and resets upon new events.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.  Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconChangeForced
 * @text Event Icon: Change (Forced)
 * @desc Change the icon that appears on an event.
 * This change is forced and needs to be restored.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event.  Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconDelete
 * @text Event Icon: Delete
 * @desc Delete the icon that appears on an event.
 * This will remain deleted and invisible for events.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventIconRestore
 * @text Event Icon: Restore
 * @desc Restores a deleted or forced icon that appears on an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLabel
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelRefresh
 * @text Event Label: Refresh
 * @desc Refresh all Event Labels on screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLabelVisible
 * @text Event Label: Visible
 * @desc Change the visibility of Event Labels.
 *
 * @arg Visibility:str
 * @text Visibility
 * @type select
 * @option Visible
 * @value Visible
 * @option Hidden
 * @value Hidden
 * @option Toggle
 * @value Toggle
 * @desc What do you wish to change visibility to?
 * @default Visible
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventLocation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationSave
 * @text Event Location: Save
 * @desc Memorize an event's map location so it reappears there
 * the next time the map is loaded.
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationCreate
 * @text Event Location: Create
 * @desc Creates a custom spawn location for a specific map's event
 * so it appears there the next time the map is loaded.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent MapId:eval
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent MapId:eval
 * @desc The X coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent MapId:eval
 * @desc The Y coordinate of the event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Direction:num
 * @text Direction
 * @parent MapId:eval
 * @type select
 * @option 1 - Lower Left
 * @value 1
 * @option 2 - Down
 * @value 2
 * @option 3 - Lower Right
 * @value 3
 * @option 4 - Left
 * @value 4
 * @option 6 - Right
 * @value 6
 * @option 7 - Upper Left
 * @value 7
 * @option 8 - Up
 * @value 8
 * @option 9 - Upper Right
 * @value 9
 * @desc The direction the event will be facing.
 * @default 2
 *
 * @arg Optional
 *
 * @arg PageId:eval
 * @text Page ID
 * @parent Optional
 * @desc The page of the event to set the move route to.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg MoveRouteIndex:eval
 * @text Move Route Index
 * @parent Optional
 * @desc The point in the move route for this event to be at
 * if the page ID matches the rest of the page conditions.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventLocationDelete
 * @text Event Location: Delete
 * @desc Deletes an event's saved map location.
 * The event will reappear at its default location.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventPopup
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupPlayer
 * @text Event Popup: Player
 * @desc Makes a centered event popup on the player sprite.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "+\\LastGainObjQuantity\\LastGainObj"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-48","endOffsetX:eval":"+0","endOffsetY:eval":"-96","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupFollower
 * @text Event Popup: Follower
 * @desc Makes a centered event popup on target follower sprite.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg FollowerIndex:eval
 * @text Follower Index
 * @desc Which follower index to play popup?
 * Index starts at 0. You may use JavaScript code.
 * @default 0
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "\\I[23]"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-48","endOffsetX:eval":"+0","endOffsetY:eval":"-96","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupEvent
 * @text Event Popup: Event
 * @desc Makes a centered event popup on target event sprite.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the event to play popup on.
 * Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "Line1\nLine2"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-48","endOffsetX:eval":"+0","endOffsetY:eval":"-96","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgPopupTargetTile
 * @text Event Popup: Target Tile
 * @desc Makes a centered event popup on target tile.
 * Requires VisuMZ_1_MessageCore! Cannot be used in battle!
 *
 * @arg TileX:eval
 * @text Map Tile X
 * @desc The x coordinate of the map tile.
 * You may use JavaScript code.
 * @default $gameMap.width() / 2
 *
 * @arg TileY:eval
 * @text Map Tile Y
 * @desc The y coordinate of the map tile.
 * You may use JavaScript code.
 * @default $gameMap.height() / 2
 *
 * @arg MessageText:json
 * @text Message Text
 * @type note
 * @desc Insert the text to be displayed.
 * Text codes can be used.
 * @default "\\I[87]"
 * 
 * @arg MsgDuration:eval
 * @text Message Duration
 * @parent MessageText:json
 * @desc What is the frame duration of the event popup?
 * 60 frames = 1 second. You may use code.
 * @default 60
 *
 * @arg PopupExtra:struct
 * @text Popup Settings
 * @type struct<PopupExtra>
 * @desc These settings let you adjust how the popup animates.
 * @default {"Fade":"","fadeInDuration:eval":"8","fadeOutDuration:eval":"8","Offset":"","startOffsetX:eval":"+0","startOffsetY:eval":"-24","endOffsetX:eval":"+0","endOffsetY:eval":"-24","Scale":"","startScaleX:eval":"0.8","startScaleY:eval":"0.8","endScaleX:eval":"0.8","endScaleY:eval":"0.8","Angle":"","startAngle:eval":"+0","endAngle:eval":"+0","Misc":"","Arc:eval":"+0"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_EventTimer
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireEvent
 * @text Event Timer: Expire Event Assign
 * @desc Sets a Common Event to run upon expiration.
 * Bypasses the default code if one is set.
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Select the Common Event to run upon the timer's expiration.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerSpeed
 * @text Event Timer: Change Speed
 * @desc Changes the timer frame decrease (or increase) speed.
 *
 * @arg Speed:eval
 * @text Speed
 * @desc How many 1/60ths of a second does each frame increase or
 * decrease by? Negative decreases. Positive increases.
 * @default -1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerExpireClear
 * @text Event Timer: Expire Event Clear
 * @desc Clears any set to expire Common Event and instead,
 * run the default Game_Timer expiration code.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesGain
 * @text Event Timer: Frames Gain
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are gained or lost for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc How many 1/60ths of a second are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc How many seconds are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc How many minutes are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc How many hours are gained/lost?
 * Positive for gain. Negative for lost. JavaScript allowed.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerFramesSet
 * @text Event Timer: Frames Set
 * @desc Chooses how many frames, seconds, minutes, or hours
 * are set for the event timer.
 *
 * @arg Frames:eval
 * @text Frames
 * @desc Set frame count to this value.
 * Each frame is 1/60th of a second. JavaScript allowed.
 * @default 0
 *
 * @arg Seconds:eval
 * @text Seconds
 * @desc Set seconds to this value.
 * JavaScript allowed.
 * @default 0
 *
 * @arg Minutes:eval
 * @text Minutes
 * @desc Set minutes to this value.
 * Each minute is 60 seconds. JavaScript allowed.
 * @default 0
 *
 * @arg Hours:eval
 * @text Hours
 * @desc Set hours to this value.
 * Each hour is 60 minutes. JavaScript allowed.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerPause
 * @text Event Timer: Pause
 * @desc Pauses the current event timer, but does not stop it.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTimerResume
 * @text Event Timer: Resume
 * @desc Resumes the current event timer from the paused state.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Follower
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetGlobalChase
 * @text Follower: Set Global Chase
 * @desc Disables all followers from chasing the player
 * or reenables it.
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets all followers to chase the player or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetTargetChase
 * @text Follower: Set Target Chase
 * @desc Disables target follower from chasing the player
 * or reenables it.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to disable/reenable chasing for.
 * @default 1
 *
 * @arg Chase:eval
 * @text Chase
 * @type boolean
 * @on Chase
 * @off Don't Chase
 * @desc Sets target follower to chase its target or not.
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerSetControl
 * @text Follower: Set Control
 * @desc Sets the event commands to target a follower when "Player"
 * is selected as the target.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to control.
 * 0 is the player.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FollowerReset
 * @text Follower: Reset
 * @desc Resets all follower controls. Event Commands that target
 * the "Player" return to normal and followers chase again.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchABCD
 * @text Global Switch: Get Self Switch A B C D
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to obtain data from.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchGetSelfSwitchID
 * @text Global Switch: Get Self Switch ID
 * @desc Gets the current ON/OFF value from a Self Switch and
 * stores it onto a Global Switch.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the source switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetSwitchId:num
 * @text Target Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_GlobalVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableGetSelfVariableID
 * @text Global Variable: Get Self Variable ID
 * @desc Gets the current stored value from a Self Variable and
 * stores it onto a Global Variable.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the source map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the source event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the source variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg TargetVariableId:num
 * @text Target Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_MorphEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventTo
 * @text Morph Event: Change
 * @desc Runs the page of a different event remotely.
 *
 * @arg Step1
 * @text Step 1: To Be Changed
 *
 * @arg Step1MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step1EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2
 * @text Step 2: Change Into
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step2
 * @desc Name of the target event template to morph into.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg Step2MapId:eval
 * @text Map ID
 * @parent Step2
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2EventId:eval
 * @text Event ID
 * @parent Step2
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Step2Preserve:eval
 * @text Preserve Morph
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the morph effect preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MorphEventRemove
 * @text Morph Event: Remove
 * @desc Remove the morph status of an event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the event to remove morph from. Use 0 for current event. You may use JavaScript code.
 * @default 0
 *
 * @arg RemovePreserve:eval
 * @text Remove Preservation
 * @parent Step2
 * @type boolean
 * @on Remove
 * @off Contain
 * @desc Also remove the preservation effect?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerIcon
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconChange
 * @text Player Icon: Change
 * @desc Change the icon that appears on on the player.
 *
 * @arg IconIndex:eval
 * @text Icon Index
 * @desc Icon index used for the icon.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg IconBufferX:eval
 * @text Buffer X
 * @parent IconIndex:eval
 * @desc How much to shift the X position by?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg IconBufferY:eval
 * @text Buffer Y
 * @parent IconIndex:eval
 * @desc How much to shift the Y position by?
 * You may use JavaScript code.
 * @default 12
 *
 * @arg IconBlendMode:num
 * @text Blend Mode
 * @parent IconIndex:eval
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the icon sprite?
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerIconDelete
 * @text Player Icon: Delete
 * @desc Delete the icon that appears on the player.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_PlayerMovement
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementChange
 * @text Player Movement: Control
 * @desc Enable or disable player control over the player character's movement.
 *
 * @arg Enable:eval
 * @text Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Let the player control where the player character moves?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PlayerMovementDiagonal
 * @text Player Movement: Diagonal
 * @desc Override settings to for player diagonal movement.
 *
 * @arg Setting:str
 * @text Setting
 * @type select
 * @option Default: Whatever the Map Uses
 * @value default
 * @option Forcefully Disable Diagonal Movement
 * @value disable
 * @option Forcefully Enable Diagonal Movement
 * @value enable
 * @desc How do you want to change diagonal movement?
 * @default default
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfData
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfDataResetAll
 * @text Self Data: Reset All
 * @desc Reset the Self Switch and Self Variable data of all events
 * within the specified map.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfSwitch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchABCD
 * @text Self Switch: A B C D
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Letter:str
 * @text Letter
 * @type select
 * @option A
 * @value A
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @desc Letter of the target event's Self Switch to change.
 * @default A
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfSwitchID
 * @text Self Switch: Switch ID
 * @desc Change the Self Switch of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg SwitchId:num
 * @text Switch ID
 * @type switch
 * @desc The ID of the target switch.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Value:str
 * @text Value
 * @type select
 * @option ON
 * @value ON
 * @option OFF
 * @value OFF
 * @option Toggle
 * @value Toggle
 * @desc What value do you want to set the Self Switch to?
 * @default ON
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SelfVar
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelfVariableID
 * @text Self Variable: Variable ID
 * @desc Change the Self Variable of a different event.
 *
 * @arg MapId:eval
 * @text Map ID
 * @desc The map the target map. Use 0 for current map.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg EventId:eval
 * @text Event ID
 * @desc The ID of the target event. Use 0 for current event.
 * You may use JavaScript code.
 * @default 0
 *
 * @arg VariableId:num
 * @text Variable ID
 * @type variable
 * @desc The ID of the target variable.
 * @default 1
 *
 * @arg Break
 * @text -
 *
 * @arg Operation:str
 * @text Operation
 * @type select
 * @option = Set
 * @value =
 * @option + Add
 * @value +
 * @option - Subtract
 * @value -
 * @option * Multiply
 * @value *
 * @option / Divide
 * @value /
 * @option % Modulus
 * @value %
 * @desc Set the operation used.
 * @default =
 *
 * @arg Break2
 * @text -
 *
 * @arg Value:eval
 * @text Value
 * @desc Insert the value to modify the Self Variable by.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Shadow
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ShadowHidePlayer
 * @text Shadow Hide: Player
 * @desc Hides the visibility of the player sprite shadow.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ShadowHideFollowers
 * @text Shadow Hide: Followers
 * @desc Hides the visibility of follower sprite shadows.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ShadowHideAllEvents
 * @text Shadow Hide: All Events
 * @desc Hides the visibility of all event sprite shadows.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ShadowShowPlayer
 * @text Shadow Show: Player
 * @desc Returns the visibility of the player sprite shadow.
 * Does NOT override Plugin Parameter "Shadows > Show" if off.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ShadowShowFollowers
 * @text Shadow Show: Followers
 * @desc Returns the visibility of follower sprite shadows.
 * Does NOT override Plugin Parameter "Shadows > Show" if off.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ShadowShowAllEvents
 * @text Shadow Show: All Events
 * @desc Returns the visibility of all event sprite shadows.
 * Does NOT override Plugin Parameter or <Hide Shadow> notetag.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_SpawnEvent
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtXY
 * @text Spawn Event: Spawn At X, Y
 * @desc Spawns desired event at X, Y location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event to be used as reference.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to spawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtRegion
 * @text Spawn Event: Spawn At Region
 * @desc Spawns desired event at a random region-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) to spawn this event at.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventAtTerrainTag
 * @text Spawn Event: Spawn At Terrain Tag
 * @desc Spawns desired event at a random terrain tag-marked location on the current map.
 *
 * @arg Step1
 * @text Step 1: Spawned Event
 *
 * @arg TemplateName:str
 * @text Template Name
 * @parent Step1
 * @desc Name of the target event template to spawn as.
 * Ignored if this is called "Untitled".
 * @default Untitled
 *
 * @arg MapId:eval
 * @text Map ID
 * @parent Step1
 * @desc Target event's map.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg EventId:eval
 * @text Event ID
 * @parent Step1
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg Step2
 * @text Step 2: Location
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) to spawn this event at.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @arg Collision:eval
 * @text Check Event Collision
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check collision with any other events and player?
 * @default true
 *
 * @arg Passability:eval
 * @text Check Passability
 * @parent Step2
 * @type boolean
 * @on Check
 * @off Ignore
 * @desc Check passability of the target location.
 * @default true
 *
 * @arg Preserve:eval
 * @text Preserve Spawn
 * @parent Step2
 * @type boolean
 * @on Preserve
 * @off Expires
 * @desc Is the spawned event preserved?
 * Or does it expire upon leaving the map?
 * @default true
 *
 * @arg Step3
 * @text Step 3: Success Check
 *
 * @arg SuccessSwitchId:num
 * @text Success Switch ID
 * @parent Step3
 * @type switch
 * @desc Target switch ID to record spawning success.
 * Ignore if ID is 0. OFF means failed. ON means success.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEventID
 * @text Spawn Event: Despawn Event ID
 * @desc Despawns the selected Event ID on the current map.
 *
 * @arg EventID:eval
 * @text Event ID
 * @type combo
 * @option $gameMap.firstSpawnedEventID()
 * @option $gameMap.lastSpawnedEventID()
 * @option 1001
 * @desc The ID of the target event.
 * You may use JavaScript code.
 * @default $gameMap.lastSpawnedEventID()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnAtXY
 * @text Spawn Event: Despawn At X, Y
 * @desc Despawns any spawned event(s) at X, Y location on the current map.
 *
 * @arg PosX:eval
 * @text X Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontX()
 * @option $gamePlayer.backX()
 * @option Math.randomInt($gameMap.width())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontX()
 *
 * @arg PosY:eval
 * @text Y Coordinate
 * @parent Step2
 * @type combo
 * @option $gamePlayer.frontY()
 * @option $gamePlayer.backY()
 * @option Math.randomInt($gameMap.height())
 * @option 0
 * @desc Target Location to despawn at.
 * You may use JavaScript code.
 * @default $gamePlayer.frontY()
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnRegions
 * @text Spawn Event: Despawn Region(s)
 * @desc Despawns the selected Region(s) on the current map.
 *
 * @arg Region:arraynum
 * @text Region ID(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 255
 * @desc Pick region(s) and despawn everything inside it.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnTerrainTags
 * @text Spawn Event: Despawn Terrain Tag(s)
 * @desc Despawns the selected Terrain Tags(s) on the current map.
 *
 * @arg TerrainTags:arraynum
 * @text Terrain Tag(s)
 * @parent Step2
 * @type number[]
 * @min 0
 * @max 7
 * @desc Pick terrain tag(s) and despawn everything inside it.
 * Insert numbers between 0 and 7.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SpawnEventDespawnEverything
 * @text Spawn Event: Despawn Everything
 * @desc Despawns all spawned events on the current map.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param EventsMoveCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Label:struct
 * @text Event Label Settings
 * @type struct<Label>
 * @desc Choose settings regarding the Event Labels.
 * @default {"FontSize:num":"22","IconSize:num":"26","LineHeight:num":"30","OffsetX:num":"0","OffsetY:num":"12","OpacitySpeed:num":"16","VisibleRange:num":"30"}
 *
 * @param Icon:struct
 * @text Event Icon Settings
 * @type struct<Icon>
 * @desc Choose settings regarding the Event Icons.
 * @default {"BufferX:num":"0","BufferY:num":"12","BlendMode:num":"0"}
 *
 * @param Template:struct
 * @text Event Template Settings
 * @type struct<Template>
 * @desc Choose settings regarding Event Templates.
 * @default {"Settings":"","PreloadMaps:arraynum":"[\"1\"]","Prefabs":"","List:arraystruct":"[]","JavaScript":"","PreCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostCopyJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostMorphJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PreSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\"","PostSpawnJS:func":"\"// Declare Constants\\nconst mapId = arguments[1];\\nconst eventId = arguments[2];\\nconst target = arguments[3];\\nconst player = $gamePlayer;\\n\\n// Perform Actions\\n\""}
 *
 * @param EventBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Movement:struct
 * @text Movement Settings
 * @type struct<Movement>
 * @desc Change the rules regarding movement in the game.
 * @default {"Dir8":"","EnableDir8:eval":"true","StrictCollision:eval":"true","FavorHorz:eval":"true","SlowerSpeed:eval":"false","DiagonalSpeedMultiplier:num":"0.85","AutoMove":"","StopAutoMoveEvents:eval":"true","StopAutoMoveMessages:eval":"true","Bitmap":"","BitmapSmoothing:eval":"false","Dash":"","DashModifier:num":"+1.0","EnableDashTilt:eval":"true","TiltLeft:num":"-0.15","TiltRight:num":"0.15","TiltVert:num":"0.05","EventMove":"","RandomMoveWeight:num":"0.10","Shadows":"","ShowShadows:eval":"true","DefaultShadow:str":"Shadow1","TurnInPlace":"","EnableTurnInPlace:eval":"false","TurnInPlaceDelay:num":"10","Vehicle":"","BoatSpeed:num":"4.0","ShipSpeed:num":"5.0","AirshipSpeed:num":"6.0"}
 *
 * @param VS8:struct
 * @text VisuStella 8-Dir Settings
 * @type struct<VS8>
 * @desc Choose settings regarding VisuStella 8-Directional Sprites.
 * @default {"Balloons":"","AutoBalloon:eval":"true","BalloonOffsetX:num":"0","BalloonOffsetY:num":"12","Icons":"","AutoBuffer:eval":"true","CarryPose:eval":"true"}
 *
 * @param MovementBreak
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Region:struct
 * @text Region Rulings
 * @type struct<Region>
 * @desc Choose settings regarding regions.
 * @default {"Allow":"","AllAllow:arraynum":"[]","WalkAllow:arraynum":"[]","PlayerAllow:arraynum":"[]","EventAllow:arraynum":"[]","VehicleAllow:arraynum":"[]","BoatAllow:arraynum":"[]","ShipAllow:arraynum":"[]","AirshipAllow:arraynum":"[]","Forbid":"","AllForbid:arraynum":"[]","WalkForbid:arraynum":"[]","PlayerForbid:arraynum":"[]","EventForbid:arraynum":"[]","VehicleForbid:arraynum":"[]","BoatForbid:arraynum":"[]","ShipForbid:arraynum":"[]","AirshipForbid:arraynum":"[]","Dock":"","VehicleDock:arraynum":"[]","BoatDock:arraynum":"[]","BoatDockRegionOnly:eval":"false","ShipDock:arraynum":"[]","ShipDockRegionOnly:eval":"false","AirshipDock:arraynum":"[]","AirshipDockRegionOnly:eval":"false"}
 *
 * @param RegionOk:struct
 * @text Common Event on OK Button
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon pressing the
 * OK button while standing on top of designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param RegionOkTarget:str
 * @text Target Tile
 * @parent RegionOk:struct
 * @type select
 * @option Tile in front of player.
 * @value front
 * @option Tile player is standing on top of.
 * @value standing
 * @desc Which tile should be checked for
 * Common Event on OK Button?
 * @default front
 *
 * @param RegionTouch:struct
 * @text Common Event on Touch
 * @parent Region:struct
 * @type struct<RegionCommonEvent>
 * @desc Set Common Events that activate upon stepping the tiles
 * marked by the designated regions.
 * @default {"Region1:num":"0","Region2:num":"0","Region3:num":"0","Region4:num":"0","Region5:num":"0","Region6:num":"0","Region7:num":"0","Region8:num":"0","Region9:num":"0","Region10:num":"0","Region11:num":"0","Region12:num":"0","Region13:num":"0","Region14:num":"0","Region15:num":"0","Region16:num":"0","Region17:num":"0","Region18:num":"0","Region19:num":"0","Region20:num":"0","Region21:num":"0","Region22:num":"0","Region23:num":"0","Region24:num":"0","Region25:num":"0","Region26:num":"0","Region27:num":"0","Region28:num":"0","Region29:num":"0","Region30:num":"0","Region31:num":"0","Region32:num":"0","Region33:num":"0","Region34:num":"0","Region35:num":"0","Region36:num":"0","Region37:num":"0","Region38:num":"0","Region39:num":"0","Region40:num":"0","Region41:num":"0","Region42:num":"0","Region43:num":"0","Region44:num":"0","Region45:num":"0","Region46:num":"0","Region47:num":"0","Region48:num":"0","Region49:num":"0","Region50:num":"0","Region51:num":"0","Region52:num":"0","Region53:num":"0","Region54:num":"0","Region55:num":"0","Region56:num":"0","Region57:num":"0","Region58:num":"0","Region59:num":"0","Region60:num":"0","Region61:num":"0","Region62:num":"0","Region63:num":"0","Region64:num":"0","Region65:num":"0","Region66:num":"0","Region67:num":"0","Region68:num":"0","Region69:num":"0","Region70:num":"0","Region71:num":"0","Region72:num":"0","Region73:num":"0","Region74:num":"0","Region75:num":"0","Region76:num":"0","Region77:num":"0","Region78:num":"0","Region79:num":"0","Region80:num":"0","Region81:num":"0","Region82:num":"0","Region83:num":"0","Region84:num":"0","Region85:num":"0","Region86:num":"0","Region87:num":"0","Region88:num":"0","Region89:num":"0","Region90:num":"0","Region91:num":"0","Region92:num":"0","Region93:num":"0","Region94:num":"0","Region95:num":"0","Region96:num":"0","Region97:num":"0","Region98:num":"0","Region99:num":"0","Region100:num":"0","Region101:num":"0","Region102:num":"0","Region103:num":"0","Region104:num":"0","Region105:num":"0","Region106:num":"0","Region107:num":"0","Region108:num":"0","Region109:num":"0","Region110:num":"0","Region111:num":"0","Region112:num":"0","Region113:num":"0","Region114:num":"0","Region115:num":"0","Region116:num":"0","Region117:num":"0","Region118:num":"0","Region119:num":"0","Region120:num":"0","Region121:num":"0","Region122:num":"0","Region123:num":"0","Region124:num":"0","Region125:num":"0","Region126:num":"0","Region127:num":"0","Region128:num":"0","Region129:num":"0","Region130:num":"0","Region131:num":"0","Region132:num":"0","Region133:num":"0","Region134:num":"0","Region135:num":"0","Region136:num":"0","Region137:num":"0","Region138:num":"0","Region139:num":"0","Region140:num":"0","Region141:num":"0","Region142:num":"0","Region143:num":"0","Region144:num":"0","Region145:num":"0","Region146:num":"0","Region147:num":"0","Region148:num":"0","Region149:num":"0","Region150:num":"0","Region151:num":"0","Region152:num":"0","Region153:num":"0","Region154:num":"0","Region155:num":"0","Region156:num":"0","Region157:num":"0","Region158:num":"0","Region159:num":"0","Region160:num":"0","Region161:num":"0","Region162:num":"0","Region163:num":"0","Region164:num":"0","Region165:num":"0","Region166:num":"0","Region167:num":"0","Region168:num":"0","Region169:num":"0","Region170:num":"0","Region171:num":"0","Region172:num":"0","Region173:num":"0","Region174:num":"0","Region175:num":"0","Region176:num":"0","Region177:num":"0","Region178:num":"0","Region179:num":"0","Region180:num":"0","Region181:num":"0","Region182:num":"0","Region183:num":"0","Region184:num":"0","Region185:num":"0","Region186:num":"0","Region187:num":"0","Region188:num":"0","Region189:num":"0","Region190:num":"0","Region191:num":"0","Region192:num":"0","Region193:num":"0","Region194:num":"0","Region195:num":"0","Region196:num":"0","Region197:num":"0","Region198:num":"0","Region199:num":"0","Region200:num":"0","Region201:num":"0","Region202:num":"0","Region203:num":"0","Region204:num":"0","Region205:num":"0","Region206:num":"0","Region207:num":"0","Region208:num":"0","Region209:num":"0","Region210:num":"0","Region211:num":"0","Region212:num":"0","Region213:num":"0","Region214:num":"0","Region215:num":"0","Region216:num":"0","Region217:num":"0","Region218:num":"0","Region219:num":"0","Region220:num":"0","Region221:num":"0","Region222:num":"0","Region223:num":"0","Region224:num":"0","Region225:num":"0","Region226:num":"0","Region227:num":"0","Region228:num":"0","Region229:num":"0","Region230:num":"0","Region231:num":"0","Region232:num":"0","Region233:num":"0","Region234:num":"0","Region235:num":"0","Region236:num":"0","Region237:num":"0","Region238:num":"0","Region239:num":"0","Region240:num":"0","Region241:num":"0","Region242:num":"0","Region243:num":"0","Region244:num":"0","Region245:num":"0","Region246:num":"0","Region247:num":"0","Region248:num":"0","Region249:num":"0","Region250:num":"0","Region251:num":"0","Region252:num":"0","Region253:num":"0","Region254:num":"0","Region255:num":"0"}
 *
 * @param TerrainTag:struct
 * @text Terrain Tag Settings
 * @type struct<TerrainTag>
 * @desc Choose settings regarding terrain tags.
 * @default {"TerrainTag":"","Rope:num":"1"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Label:
 *
 * @param SpriteBased:eval
 * @text Sprite Based?
 * @type boolean
 * @on Sprite-Based
 * @off Legacy-Window
 * @desc Use sprite-based labels instead of legacy-window version.
 * Legacy-window version will not be supported in future.
 * @default true
 *
 * @param MobileEnabled:eval
 * @text Mobile-Enabled?
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Enable event labels for mobile devices?
 * @default true
 *
 * @param FontSize:num
 * @text Font Size
 * @type number
 * @min 1
 * @desc The font size used for the Event Labels.
 * @default 22
 *
 * @param IconSize:num
 * @text Icon Size
 * @type number
 * @min 1
 * @desc The size of the icons used in the Event Labels.
 * @default 26
 *
 * @param LineHeight:num
 * @text Line Height
 * @type number
 * @min 1
 * @desc The line height used for the Event Labels.
 * @default 26
 *
 * @param OffsetX:num
 * @text Offset X
 * @type number
 * @min 0
 * @desc Globally offset all labels horizontally by this amount.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @type number
 * @min 0
 * @desc Globally offset all labels vertically by this amount.
 * @default 12
 *
 * @param OpacitySpeed:num
 * @text Fade Speed
 * @type number
 * @min 1
 * @desc Fade speed for labels.
 * @default 16
 *
 * @param VisibleRange:num
 * @text Visible Range
 * @type number
 * @min 1
 * @desc Range the player has to be within the event to make its label visible.
 * @default 30
 *
 * @param RangeType:str
 * @text Range Type
 * @parent VisibleRange:num
 * @type select
 * @option square
 * @option circle
 * @option diamond
 * @desc What do you want the default label visible range type?
 * @default square
 *
 */
/* ----------------------------------------------------------------------------
 * Icon Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Icon:
 *
 * @param BufferX:num
 * @text Buffer X
 * @desc Default X position buffer for event icons.
 * @default 0
 *
 * @param BufferY:num
 * @text Buffer Y
 * @desc Default Y position buffer for event icons.
 * @default 12
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc Default blend mode for even icons.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Template Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Template:
 *
 * @param Settings
 *
 * @param PreloadMaps:arraynum
 * @text Preloaded Maps
 * @parent Settings
 * @type number[]
 * @desc A list of all the ID's of the maps that will be preloaded
 * to serve as template maps for this plugin.
 * @default ["1"]
 *
 * @param Templates
 *
 * @param List:arraystruct
 * @text Event Template List
 * @parent Templates
 * @type struct<EventTemplate>[]
 * @desc A list of all the Event Templates used by this project.
 * Used for notetags and Plugin Commands.
 * @default []
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is global and is ran for all copied events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is global and is ran for all morphed events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Event Template
 * ----------------------------------------------------------------------------
 */
/*~struct~EventTemplate:
 *
 * @param Name:str
 * @text Name
 * @desc Name of the template. It'll be used as anchor points for
 * notetags and Plugin Commands.
 * @default Untitled
 *
 * @param MapID:num
 * @text Map ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the map the template event is stored on.
 * This will automatically add this ID to preloaded list.
 * @default 1
 *
 * @param EventID:num
 * @text Event ID
 * @parent Name:str
 * @type number
 * @min 1
 * @max 999
 * @desc ID of the event the template event is based on.
 * @default 1
 *
 * @param JavaScript
 *
 * @param PreCopyJS:func
 * @text JS: Pre-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostCopyJS:func
 * @text JS: Post-Copy
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is copied.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreMorphJS:func
 * @text JS: Pre-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostMorphJS:func
 * @text JS: Post-Morph
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is morphed.
 * This is local only for this template.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PreSpawnJS:func
 * @text JS: Pre-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran before an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 * @param PostSpawnJS:func
 * @text JS: Post-Spawn
 * @parent JavaScript
 * @type note
 * @desc Code that's ran after an event is spawned.
 * This is global and is ran for all spawned events.
 * @default "// Declare Constants\nconst mapId = arguments[1];\nconst eventId = arguments[2];\nconst target = arguments[3];\nconst player = $gamePlayer;\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Movement Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Movement:
 *
 * @param Dir8
 * @text 8 Directional Movement
 *
 * @param EnableDir8:eval
 * @text Enable
 * @parent Dir8
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Allow 8-directional movement by default? Players can move diagonally.
 * @default true
 *
 * @param StrictCollision:eval
 * @text Strict Collision
 * @parent Dir8
 * @type boolean
 * @on Strict
 * @off Flexible
 * @desc Enforce strict collission rules where the player must be able to pass both cardinal directions?
 * @default true
 *
 * @param FavorHorz:eval
 * @text Favor Horizontal
 * @parent StrictCollision:eval
 * @type boolean
 * @on Horizontal
 * @off Vertical
 * @desc Favor horizontal if cannot pass diagonally but can pass both horizontally and vertically?
 * @default true
 *
 * @param SlowerSpeed:eval
 * @text Slower Diagonals?
 * @parent Dir8
 * @type boolean
 * @on Slower
 * @off Normal
 * @desc Enforce a slower movement speed when moving diagonally?
 * @default false
 *
 * @param DiagonalSpeedMultiplier:num
 * @text Speed Multiplier
 * @parent SlowerSpeed:eval
 * @desc What's the multiplier to adjust movement speed when moving diagonally?
 * @default 0.85
 *
 * @param AutoMove
 * @text Automatic Movement
 *
 * @param StopAutoMoveEvents:eval
 * @text Stop During Events
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while events are running.
 * @default true
 *
 * @param StopAutoMoveMessages:eval
 * @text Stop During Messages
 * @parent AutoMove
 * @type boolean
 * @on Stop
 * @off Wander
 * @desc Stop automatic event movement while a message is running.
 * @default true
 *
 * @param Bitmap
 *
 * @param BitmapSmoothing:eval
 * @text Smoothing
 * @parent Bitmap
 * @type boolean
 * @on Smooth
 * @off Pixelated
 * @desc Do you want to smooth or pixelate the map sprites?
 * Pixelating them is better for zooming and tilting.
 * @default false
 *
 * @param Dash
 * @text Dash
 *
 * @param DashModifier:num
 * @text Dash Modifier
 * @parent Dash
 * @desc Alters the dash speed modifier.
 * @default +1.0
 *
 * @param DashOnLadder:eval
 * @text Dash On Ladder?
 * @parent Dash
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow dashing while on a ladder or rope?
 * @default false
 *
 * @param EnableDashTilt:eval
 * @text Enable Dash Tilt?
 * @parent Dash
 * @type boolean
 * @on Enable
 * @off Disabled
 * @desc Tilt any sprites that are currently dashing?
 * @default true
 *
 * @param TiltLeft:num
 * @text Tilt Left Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving left (upper left, left, lower left).
 * @default -0.15
 *
 * @param TiltRight:num
 * @text Tilt Right Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving right (upper right, right, lower right).
 * @default 0.15
 *
 * @param TiltVert:num
 * @text Tilt Vertical Amount
 * @parent EnableDashTilt:eval
 * @desc Amount in radians when moving vertical (up, down).
 * @default 0.05
 * 
 * @param EventMove
 * @text Event Movement
 *
 * @param RandomMoveWeight:num
 * @text Random Move Weight
 * @parent EventMove
 * @desc Use numbers between 0 and 1. Numbers closer to 1 stay
 * closer to their home position. 0 to disable it.
 * @default 0.10
 *
 * @param ShiftY:num
 * @text Shift Y
 * @parent EventMove
 * @desc How many pixels should non-tile characters be shifted by?
 * Negative: up. Positive: down.
 * @default -6
 *
 * @param PathFind
 * @text Path Finding
 *
 * @param PathfindMobileEnabled:eval
 * @text Mobile-Enabled?
 * @parent PathFind
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Enable diagonal pathfinding for mobile devices?
 * @default false
 *
 * @param Shadows
 *
 * @param ShowShadows:eval
 * @text Show
 * @parent Shadows
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show shadows on all events and player-related sprites.
 * @default true
 *
 * @param DefaultShadow:str
 * @text Default Filename
 * @parent Shadows
 * @type file
 * @dir img/system/
 * @desc Default filename used for shadows found in img/system/ folder.
 * @default Shadow1
 *
 * @param ShadowLayer:num
 * @text Shadow Z Layer
 * @parent Shadows
 * @desc What is the sprite Z layer used for the shadow sprites?
 * @default 0.5
 *
 * @param TurnInPlace
 * @text Turn in Place
 *
 * @param EnableTurnInPlace:eval
 * @text Enable
 * @parent TurnInPlace
 * @type boolean
 * @on Turn in Place
 * @off Skip
 * @desc When not dashing, player will turn in place before moving.
 * This only applies with keyboard inputs.
 * @default false
 *
 * @param TurnInPlaceDelay:num
 * @text Delay in Frames
 * @parent TurnInPlace
 * @type number
 * @min 0
 * @desc The number of frames to wait before moving.
 * @default 10
 *
 * @param Vehicle
 * @text Vehicle Speeds
 *
 * @param BoatSpeed:num
 * @text Boat Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the boat vehicle.
 * @default 4.0
 *
 * @param ShipSpeed:num
 * @text Ship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the ship vehicle.
 * @default 5.0
 *
 * @param AirshipSpeed:num
 * @text Airship Speed
 * @parent Vehicle
 * @desc Allows you to adjust the base speed of the airship vehicle.
 * @default 6.0
 *
 */
/* ----------------------------------------------------------------------------
 * Region Rulings
 * ----------------------------------------------------------------------------
 */
/*~struct~Region:
 *
 * @param Allow
 * @text Allow Regions
 *
 * @param AllAllow:arraynum
 * @text All Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkAllow:arraynum
 * @text Walk Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerAllow:arraynum
 * @text Player Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventAllow:arraynum
 * @text Event Allow
 * @parent WalkAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleAllow:arraynum
 * @text Vehicle Allow
 * @parent Allow
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatAllow:arraynum
 * @text Boat Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipAllow:arraynum
 * @text Ship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipAllow:arraynum
 * @text Airship Allow
 * @parent VehicleAllow:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Forbid
 * @text Forbid Regions
 *
 * @param AllForbid:arraynum
 * @text All Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param WalkForbid:arraynum
 * @text Walk Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where walking units cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param PlayerForbid:arraynum
 * @text Player Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where the player cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param EventForbid:arraynum
 * @text Event Forbid
 * @parent WalkForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where events cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param VehicleForbid:arraynum
 * @text Vehicle Forbid
 * @parent Forbid
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where vehicles cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatForbid:arraynum
 * @text Boat Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipForbid:arraynum
 * @text Ship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipForbid:arraynum
 * @text Airship Forbid
 * @parent VehicleForbid:arraynum
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships cannot enter.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param Dock
 * @text Dock Regions
 *
 * @param VehicleDock:arraynum
 * @text Vehicle Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where any vehicle can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDock:arraynum
 * @text Boat Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where boats can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param BoatDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent BoatDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Boats can only dock at designated regions.
 * @default false
 *
 * @param ShipDock:arraynum
 * @text Ship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where ships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param ShipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent ShipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Ships can only dock at designated regions.
 * @default false
 *
 * @param AirshipDock:arraynum
 * @text Airship Dock
 * @parent Dock
 * @type number[]
 * @min 0
 * @max 255
 * @desc Insert Region ID's where airships can dock.
 * Region ID's range from 0 to 255.
 * @default []
 *
 * @param AirshipDockRegionOnly:eval
 * @text Only Region Dockable
 * @parent AirshipDock:arraynum
 * @type boolean
 * @on At Regions Only
 * @off Default
 * @desc Airships can only dock at designated regions.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Region Common Events
 * ----------------------------------------------------------------------------
 */
/*~struct~RegionCommonEvent:
 *
 * @param Region1:num
 * @text Region 1
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region2:num
 * @text Region 2
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region3:num
 * @text Region 3
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region4:num
 * @text Region 4
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region5:num
 * @text Region 5
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region6:num
 * @text Region 6
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region7:num
 * @text Region 7
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region8:num
 * @text Region 8
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region9:num
 * @text Region 9
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region10:num
 * @text Region 10
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region11:num
 * @text Region 11
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region12:num
 * @text Region 12
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region13:num
 * @text Region 13
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region14:num
 * @text Region 14
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region15:num
 * @text Region 15
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region16:num
 * @text Region 16
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region17:num
 * @text Region 17
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region18:num
 * @text Region 18
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region19:num
 * @text Region 19
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region20:num
 * @text Region 20
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region21:num
 * @text Region 21
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region22:num
 * @text Region 22
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region23:num
 * @text Region 23
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region24:num
 * @text Region 24
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region25:num
 * @text Region 25
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region26:num
 * @text Region 26
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region27:num
 * @text Region 27
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region28:num
 * @text Region 28
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region29:num
 * @text Region 29
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region30:num
 * @text Region 30
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region31:num
 * @text Region 31
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region32:num
 * @text Region 32
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region33:num
 * @text Region 33
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region34:num
 * @text Region 34
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region35:num
 * @text Region 35
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region36:num
 * @text Region 36
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region37:num
 * @text Region 37
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region38:num
 * @text Region 38
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region39:num
 * @text Region 39
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region40:num
 * @text Region 40
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region41:num
 * @text Region 41
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region42:num
 * @text Region 42
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region43:num
 * @text Region 43
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region44:num
 * @text Region 44
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region45:num
 * @text Region 45
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region46:num
 * @text Region 46
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region47:num
 * @text Region 47
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region48:num
 * @text Region 48
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region49:num
 * @text Region 49
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region50:num
 * @text Region 50
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region51:num
 * @text Region 51
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region52:num
 * @text Region 52
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region53:num
 * @text Region 53
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region54:num
 * @text Region 54
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region55:num
 * @text Region 55
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region56:num
 * @text Region 56
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region57:num
 * @text Region 57
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region58:num
 * @text Region 58
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region59:num
 * @text Region 59
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region60:num
 * @text Region 60
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region61:num
 * @text Region 61
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region62:num
 * @text Region 62
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region63:num
 * @text Region 63
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region64:num
 * @text Region 64
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region65:num
 * @text Region 65
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region66:num
 * @text Region 66
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region67:num
 * @text Region 67
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region68:num
 * @text Region 68
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region69:num
 * @text Region 69
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region70:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region71:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region72:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region73:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region74:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region75:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region76:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region77:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region78:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region79:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 70
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 71
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 72
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 73
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 74
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 75
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 76
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 77
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 78
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 79
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region80:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region81:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region82:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region83:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region84:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region85:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region86:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region87:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region88:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region89:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 80
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 81
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 82
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 83
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 84
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 85
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 86
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 87
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 88
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 89
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region90:num
 * @text Region 90
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region91:num
 * @text Region 91
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region92:num
 * @text Region 92
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region93:num
 * @text Region 93
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region94:num
 * @text Region 94
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region95:num
 * @text Region 95
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region96:num
 * @text Region 96
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region97:num
 * @text Region 97
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region98:num
 * @text Region 98
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region99:num
 * @text Region 99
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region100:num
 * @text Region 100
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region101:num
 * @text Region 101
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region102:num
 * @text Region 102
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region103:num
 * @text Region 103
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region104:num
 * @text Region 104
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region105:num
 * @text Region 105
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region106:num
 * @text Region 106
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region107:num
 * @text Region 107
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region108:num
 * @text Region 108
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region109:num
 * @text Region 109
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region110:num
 * @text Region 110
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region111:num
 * @text Region 111
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region112:num
 * @text Region 112
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region113:num
 * @text Region 113
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region114:num
 * @text Region 114
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region115:num
 * @text Region 115
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region116:num
 * @text Region 116
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region117:num
 * @text Region 117
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region118:num
 * @text Region 118
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region119:num
 * @text Region 119
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region120:num
 * @text Region 120
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region121:num
 * @text Region 121
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region122:num
 * @text Region 122
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region123:num
 * @text Region 123
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region124:num
 * @text Region 124
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region125:num
 * @text Region 125
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region126:num
 * @text Region 126
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region127:num
 * @text Region 127
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region128:num
 * @text Region 128
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region129:num
 * @text Region 129
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region130:num
 * @text Region 130
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region131:num
 * @text Region 131
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region132:num
 * @text Region 132
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region133:num
 * @text Region 133
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region134:num
 * @text Region 134
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region135:num
 * @text Region 135
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region136:num
 * @text Region 136
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region137:num
 * @text Region 137
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region138:num
 * @text Region 138
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region139:num
 * @text Region 139
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region140:num
 * @text Region 140
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region141:num
 * @text Region 141
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region142:num
 * @text Region 142
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region143:num
 * @text Region 143
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region144:num
 * @text Region 144
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region145:num
 * @text Region 145
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region146:num
 * @text Region 146
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region147:num
 * @text Region 147
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region148:num
 * @text Region 148
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region149:num
 * @text Region 149
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region150:num
 * @text Region 150
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region151:num
 * @text Region 151
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region152:num
 * @text Region 152
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region153:num
 * @text Region 153
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region154:num
 * @text Region 154
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region155:num
 * @text Region 155
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region156:num
 * @text Region 156
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region157:num
 * @text Region 157
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region158:num
 * @text Region 158
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region159:num
 * @text Region 159
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region160:num
 * @text Region 160
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region161:num
 * @text Region 161
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region162:num
 * @text Region 162
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region163:num
 * @text Region 163
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region164:num
 * @text Region 164
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region165:num
 * @text Region 165
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region166:num
 * @text Region 166
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region167:num
 * @text Region 167
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region168:num
 * @text Region 168
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region169:num
 * @text Region 169
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region170:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region171:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region172:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region173:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region174:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region175:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region176:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region177:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region178:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region179:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 170
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 171
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 172
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 173
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 174
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 175
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 176
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 177
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 178
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 179
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region180:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region181:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region182:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region183:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region184:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region185:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region186:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region187:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region188:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region189:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 180
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 181
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 182
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 183
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 184
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 185
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 186
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 187
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 188
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 189
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region190:num
 * @text Region 190
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region191:num
 * @text Region 191
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region192:num
 * @text Region 192
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region193:num
 * @text Region 193
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region194:num
 * @text Region 194
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region195:num
 * @text Region 195
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region196:num
 * @text Region 196
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region197:num
 * @text Region 197
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region198:num
 * @text Region 198
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region199:num
 * @text Region 199
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region200:num
 * @text Region 200
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region201:num
 * @text Region 201
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region202:num
 * @text Region 202
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region203:num
 * @text Region 203
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region204:num
 * @text Region 204
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region205:num
 * @text Region 205
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region206:num
 * @text Region 206
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region207:num
 * @text Region 207
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region208:num
 * @text Region 208
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region209:num
 * @text Region 209
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region210:num
 * @text Region 210
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region211:num
 * @text Region 211
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region212:num
 * @text Region 212
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region213:num
 * @text Region 213
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region214:num
 * @text Region 214
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region215:num
 * @text Region 215
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region216:num
 * @text Region 216
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region217:num
 * @text Region 217
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region218:num
 * @text Region 218
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region219:num
 * @text Region 219
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region220:num
 * @text Region 220
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region221:num
 * @text Region 221
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region222:num
 * @text Region 222
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region223:num
 * @text Region 223
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region224:num
 * @text Region 224
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region225:num
 * @text Region 225
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region226:num
 * @text Region 226
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region227:num
 * @text Region 227
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region228:num
 * @text Region 228
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region229:num
 * @text Region 229
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region230:num
 * @text Region 230
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region231:num
 * @text Region 231
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region232:num
 * @text Region 232
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region233:num
 * @text Region 233
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region234:num
 * @text Region 234
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region235:num
 * @text Region 235
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region236:num
 * @text Region 236
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region237:num
 * @text Region 237
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region238:num
 * @text Region 238
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region239:num
 * @text Region 239
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region240:num
 * @text Region 240
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region241:num
 * @text Region 241
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region242:num
 * @text Region 242
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region243:num
 * @text Region 243
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region244:num
 * @text Region 244
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region245:num
 * @text Region 245
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region246:num
 * @text Region 246
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region247:num
 * @text Region 247
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region248:num
 * @text Region 248
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region249:num
 * @text Region 249
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region250:num
 * @text Region 250
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region251:num
 * @text Region 251
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region252:num
 * @text Region 252
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region253:num
 * @text Region 253
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region254:num
 * @text Region 254
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 * @param Region255:num
 * @text Region 255
 * @type common_event
 * @desc Which Common Event does this region activate?
 * Use 0 to not activate any Common Events.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Terrain Tag Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TerrainTag:
 *
 * @param TerrainTag
 * @text Terrain Tag ID's
 *
 * @param Rope:num
 * @text Rope
 * @parent TerrainTag
 * @type number
 * @min 0
 * @max 7
 * @desc Which terrain tag number to use for ropes?
 * @default 1
 *
 */
/* ----------------------------------------------------------------------------
 * VisuStella 8-Dir Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~VS8:
 *
 * @param Balloons
 * @text Balloon Icon Settings
 *
 * @param AutoBalloon:eval
 * @text Auto-Balloon Poses
 * @parent Balloons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically pose VS8 sprites when using balloon icons.
 * @default true
 *
 * @param BalloonOffsetX:num
 * @text Balloon Offset X
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by x pixels.
 * @default 0
 *
 * @param BalloonOffsetY:num
 * @text Balloon Offset Y
 * @parent Balloons
 * @desc Offset balloon icons on VS8 sprites by y pixels.
 * @default 10
 *
 * @param Icons
 * 
 * @param AutoBuffer:eval
 * @text Auto Buffer
 * @parent Icons
 * @type boolean
 * @on Auto
 * @off Manual
 * @desc Automatically buffer the X and Y coordinates of
 * VS8 sprites?
 * @default true
 * 
 * @param CarryPose:eval
 * @text Use Carry Pose
 * @parent Icons
 * @type boolean
 * @on Carry Pose
 * @off Normal
 * @desc Use the carry pose when moving with an icon overhead.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Popup Extra Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PopupExtra:
 *
 * @param Fade
 * @text Fade Settings
 *
 * @param fadeInDuration:eval
 * @text Fade In Duration
 * @parent Fade
 * @desc How many frames does it take to fade in?
 * 60 frames = 1 second.
 * @default 8
 *
 * @param fadeOutDuration:eval
 * @text Fade Out Duration
 * @parent Fade
 * @desc How many frames does it take to fade out?
 * 60 frames = 1 second.
 * @default 8
 *
 * @param Offset
 * @text Offset Settings
 *
 * @param startOffsetX:eval
 * @text Starting Offset X
 * @parent Offset
 * @desc Offsets the starting x position. You may use code.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param startOffsetY:eval
 * @text Starting Offset Y
 * @parent Offset
 * @desc Offsets the starting y position. You may use code.
 * Negative: up. Positive: down.
 * @default -48
 *
 * @param endOffsetX:eval
 * @text Ending Offset X
 * @parent Offset
 * @desc Offsets the ending x position. You may use code.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param endOffsetY:eval
 * @text Ending Offset Y
 * @parent Offset
 * @desc Offsets the ending y position. You may use code.
 * Negative: up. Positive: down.
 * @default -96
 *
 * @param Scale
 * @text Scaling Settings
 *
 * @param startScaleX:eval
 * @text Starting Scale X
 * @parent Scale
 * @desc What is the starting scale x? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param startScaleY:eval
 * @text Starting Scale Y
 * @parent Scale
 * @desc What is the starting scale y? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param endScaleX:eval
 * @text Ending Scale X
 * @parent Scale
 * @desc What is the ending scale x? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param endScaleY:eval
 * @text Ending Scale Y
 * @parent Scale
 * @desc What is the ending scale y? You may use code.
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.8
 *
 * @param Angle
 * @text Angle Settings
 *
 * @param startAngle:eval
 * @text Starting Offset Angle
 * @parent Angle
 * @desc What is the starting angle offset?
 * Use numbers between 0 and 360. You may use code.
 * @default +0
 *
 * @param endAngle:eval
 * @text Ending Offset Angle
 * @parent Angle
 * @desc What is the ending angle offset?
 * Use numbers between 0 and 360. You may use code.
 * @default +0
 * 
 * @param Misc
 * @text Misc Settings
 * 
 * @param Arc:eval
 * @text Arc Peak
 * @parent Misc
 * @desc This is the height of the popup's trajectory arc
 * in pixels. Positive: up. Negative: down. Code allowed.
 * @default +0
 *
 */
//=============================================================================

const _0xa852ab=_0x45ca;(function(_0x2b5f74,_0x234b53){const _0x2050ff=_0x45ca,_0x100676=_0x2b5f74();while(!![]){try{const _0x485b1e=parseInt(_0x2050ff(0x3ab))/0x1+parseInt(_0x2050ff(0x4e4))/0x2+-parseInt(_0x2050ff(0x3f2))/0x3*(-parseInt(_0x2050ff(0x310))/0x4)+-parseInt(_0x2050ff(0x554))/0x5*(-parseInt(_0x2050ff(0x6e7))/0x6)+parseInt(_0x2050ff(0x5ae))/0x7+parseInt(_0x2050ff(0x646))/0x8+-parseInt(_0x2050ff(0x423))/0x9;if(_0x485b1e===_0x234b53)break;else _0x100676['push'](_0x100676['shift']());}catch(_0x3c5c1a){_0x100676['push'](_0x100676['shift']());}}}(_0x4222,0x44ec8));var label='EventsMoveCore',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0xa852ab(0x3ea)](function(_0x4997b3){const _0x147358=_0xa852ab;return _0x4997b3[_0x147358(0x6bb)]&&_0x4997b3[_0x147358(0x2dd)][_0x147358(0x37c)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0xa852ab(0x4d4)]||{},VisuMZ[_0xa852ab(0x2c1)]=function(_0x1f08f2,_0x3b1f76){const _0x100082=_0xa852ab;for(const _0x154e79 in _0x3b1f76){if(_0x154e79[_0x100082(0x57e)](/(.*):(.*)/i)){const _0x479501=String(RegExp['$1']),_0x1c83cf=String(RegExp['$2'])['toUpperCase']()[_0x100082(0x572)]();let _0x2da181,_0x45f242,_0x3c450f;switch(_0x1c83cf){case _0x100082(0x518):_0x2da181=_0x3b1f76[_0x154e79]!==''?Number(_0x3b1f76[_0x154e79]):0x0;break;case _0x100082(0x284):_0x45f242=_0x3b1f76[_0x154e79]!==''?JSON[_0x100082(0x6be)](_0x3b1f76[_0x154e79]):[],_0x2da181=_0x45f242['map'](_0x2584ee=>Number(_0x2584ee));break;case _0x100082(0x279):_0x2da181=_0x3b1f76[_0x154e79]!==''?eval(_0x3b1f76[_0x154e79]):null;break;case _0x100082(0x228):_0x45f242=_0x3b1f76[_0x154e79]!==''?JSON[_0x100082(0x6be)](_0x3b1f76[_0x154e79]):[],_0x2da181=_0x45f242[_0x100082(0x357)](_0x3100ac=>eval(_0x3100ac));break;case _0x100082(0x39f):_0x2da181=_0x3b1f76[_0x154e79]!==''?JSON['parse'](_0x3b1f76[_0x154e79]):'';break;case'ARRAYJSON':_0x45f242=_0x3b1f76[_0x154e79]!==''?JSON[_0x100082(0x6be)](_0x3b1f76[_0x154e79]):[],_0x2da181=_0x45f242[_0x100082(0x357)](_0x5230ac=>JSON[_0x100082(0x6be)](_0x5230ac));break;case _0x100082(0x370):_0x2da181=_0x3b1f76[_0x154e79]!==''?new Function(JSON['parse'](_0x3b1f76[_0x154e79])):new Function('return\x200');break;case _0x100082(0x47f):_0x45f242=_0x3b1f76[_0x154e79]!==''?JSON[_0x100082(0x6be)](_0x3b1f76[_0x154e79]):[],_0x2da181=_0x45f242[_0x100082(0x357)](_0x85c9d0=>new Function(JSON[_0x100082(0x6be)](_0x85c9d0)));break;case _0x100082(0x55e):_0x2da181=_0x3b1f76[_0x154e79]!==''?String(_0x3b1f76[_0x154e79]):'';break;case'ARRAYSTR':_0x45f242=_0x3b1f76[_0x154e79]!==''?JSON[_0x100082(0x6be)](_0x3b1f76[_0x154e79]):[],_0x2da181=_0x45f242[_0x100082(0x357)](_0x2ecc26=>String(_0x2ecc26));break;case _0x100082(0x63e):_0x3c450f=_0x3b1f76[_0x154e79]!==''?JSON['parse'](_0x3b1f76[_0x154e79]):{},_0x1f08f2[_0x479501]={},VisuMZ[_0x100082(0x2c1)](_0x1f08f2[_0x479501],_0x3c450f);continue;case'ARRAYSTRUCT':_0x45f242=_0x3b1f76[_0x154e79]!==''?JSON['parse'](_0x3b1f76[_0x154e79]):[],_0x2da181=_0x45f242[_0x100082(0x357)](_0x3e10db=>VisuMZ['ConvertParams']({},JSON[_0x100082(0x6be)](_0x3e10db)));break;default:continue;}_0x1f08f2[_0x479501]=_0x2da181;}}return _0x1f08f2;},(_0x58caa0=>{const _0x2e285e=_0xa852ab,_0x357da4=_0x58caa0[_0x2e285e(0x5e4)];for(const _0x3e124c of dependencies){if(!Imported[_0x3e124c]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x2e285e(0x58f)](_0x357da4,_0x3e124c)),SceneManager['exit']();break;}}const _0x1069af=_0x58caa0[_0x2e285e(0x2dd)];if(_0x1069af[_0x2e285e(0x57e)](/\[Version[ ](.*?)\]/i)){const _0x33a3c5=Number(RegExp['$1']);_0x33a3c5!==VisuMZ[label][_0x2e285e(0x345)]&&(alert(_0x2e285e(0x56c)[_0x2e285e(0x58f)](_0x357da4,_0x33a3c5)),SceneManager[_0x2e285e(0x6b1)]());}if(_0x1069af[_0x2e285e(0x57e)](/\[Tier[ ](\d+)\]/i)){const _0x85a2ae=Number(RegExp['$1']);_0x85a2ae<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x2e285e(0x58f)](_0x357da4,_0x85a2ae,tier)),SceneManager[_0x2e285e(0x6b1)]()):tier=Math[_0x2e285e(0x23b)](_0x85a2ae,tier);}VisuMZ[_0x2e285e(0x2c1)](VisuMZ[label][_0x2e285e(0x4d4)],_0x58caa0[_0x2e285e(0x402)]);})(pluginData),VisuMZ[_0xa852ab(0x267)]=function(_0x1f8ae8,_0x1bafbf,_0x4de42e){switch(_0x4de42e){case'=':return _0x1bafbf;break;case'+':return _0x1f8ae8+_0x1bafbf;break;case'-':return _0x1f8ae8-_0x1bafbf;break;case'*':return _0x1f8ae8*_0x1bafbf;break;case'/':return _0x1f8ae8/_0x1bafbf;break;case'%':return _0x1f8ae8%_0x1bafbf;break;}return _0x1f8ae8;},PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x585),_0x345d6b=>{const _0x203b1d=_0xa852ab;VisuMZ[_0x203b1d(0x2c1)](_0x345d6b,_0x345d6b);switch(_0x345d6b[_0x203b1d(0x62f)]){case _0x203b1d(0x400):$gameSystem[_0x203b1d(0x62d)](!![]);break;case _0x203b1d(0x399):$gameSystem[_0x203b1d(0x62d)](![]);break;case'Toggle':$gameSystem['setAllowEventAutoMovement'](!$gameSystem[_0x203b1d(0x631)]());break;}}),PluginManager['registerCommand'](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x234),_0x35441d=>{const _0x1660b0=_0xa852ab;VisuMZ[_0x1660b0(0x2c1)](_0x35441d,_0x35441d);const _0x28852b=$gameTemp[_0x1660b0(0x26b)](),_0x497256={'mapId':_0x35441d[_0x1660b0(0x20d)],'eventId':_0x35441d[_0x1660b0(0x2a7)]||_0x28852b[_0x1660b0(0x379)](),'pageId':_0x35441d[_0x1660b0(0x21c)]};if(_0x497256[_0x1660b0(0x4c3)]<=0x0)_0x497256[_0x1660b0(0x4c3)]=$gameMap?$gameMap['mapId']():0x1;$gameTemp[_0x1660b0(0x26b)]()[_0x1660b0(0x64d)](_0x497256);}),PluginManager['registerCommand'](pluginData['name'],_0xa852ab(0x34c),_0x49f17f=>{const _0xa2c2d2=_0xa852ab;VisuMZ[_0xa2c2d2(0x2c1)](_0x49f17f,_0x49f17f);const _0x4bab05=$gameTemp[_0xa2c2d2(0x26b)](),_0x32ff64={'mapId':$gameMap?$gameMap[_0xa2c2d2(0x4c3)]():0x1,'eventId':_0x4bab05['eventId'](),'pageId':_0x49f17f['PageId']};$gameTemp[_0xa2c2d2(0x26b)]()[_0xa2c2d2(0x64d)](_0x32ff64);}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x5ce),_0x59ed52=>{const _0x2c0471=_0xa852ab;VisuMZ['ConvertParams'](_0x59ed52,_0x59ed52);const _0x45b31d=$gameTemp[_0x2c0471(0x26b)](),_0x93b46d={'mapId':$gameMap?$gameMap[_0x2c0471(0x4c3)]():0x1,'eventId':_0x45b31d['eventId']()},_0x2174cb=$gameMap[_0x2c0471(0x6b2)](_0x45b31d[_0x2c0471(0x379)]());if(!_0x2174cb)return;_0x93b46d[_0x2c0471(0x539)]=_0x2174cb[_0x2c0471(0x463)](_0x59ed52[_0x2c0471(0x39a)]);if(!_0x93b46d[_0x2c0471(0x539)])return;$gameTemp[_0x2c0471(0x26b)]()[_0x2c0471(0x64d)](_0x93b46d);}),Game_Event['prototype'][_0xa852ab(0x463)]=function(_0x4e851d){const _0x422d72=_0xa852ab,_0x58281b=/<PAGE NAME:[ ](.*)>/i,_0x46baed=this[_0x422d72(0x6b2)]()[_0x422d72(0x494)];_0x4e851d=(_0x4e851d||'')['toUpperCase']()[_0x422d72(0x572)]();for(const _0x537437 of _0x46baed){const _0x46bfe5=_0x537437[_0x422d72(0x22a)][_0x422d72(0x3ea)](_0x42bce5=>[0x6c,0x198]['includes'](_0x42bce5['code']));for(const _0x49ce83 of _0x46bfe5){const _0x132ca9=_0x49ce83[_0x422d72(0x402)][0x0];if(_0x132ca9[_0x422d72(0x57e)](_0x58281b)){const _0x299577=String(RegExp['$1'])[_0x422d72(0x20e)]()['trim']();if(_0x299577===_0x4e851d){const _0x2a7f73=_0x46baed[_0x422d72(0x4ba)](_0x537437);return(_0x2a7f73+0x1)['clamp'](0x1,0x14);}}}}return 0x0;},PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x59b),_0x566df6=>{const _0x4be618=_0xa852ab;VisuMZ[_0x4be618(0x2c1)](_0x566df6,_0x566df6);switch(_0x566df6[_0x4be618(0x62f)]){case _0x4be618(0x676):$gameSystem[_0x4be618(0x5c2)](!![]);break;case'Disable':$gameSystem[_0x4be618(0x5c2)](![]);break;case _0x4be618(0x34a):$gameSystem['setDashingEnabled'](!$gameSystem['isDashingEnabled']());break;}}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x3b7),_0x5830e8=>{const _0x135fc7=_0xa852ab;VisuMZ['ConvertParams'](_0x5830e8,_0x5830e8);const _0x2c874e=$gameTemp[_0x135fc7(0x26b)]();_0x5830e8[_0x135fc7(0x20d)]=_0x5830e8['MapId']||$gameMap[_0x135fc7(0x4c3)](),$gameSystem[_0x135fc7(0x35e)](_0x5830e8[_0x135fc7(0x20d)],_0x5830e8[_0x135fc7(0x2a7)]||_0x2c874e[_0x135fc7(0x379)](),_0x5830e8[_0x135fc7(0x263)],_0x5830e8[_0x135fc7(0x428)],_0x5830e8[_0x135fc7(0x5a3)],_0x5830e8['IconBlendMode'],![]);}),PluginManager['registerCommand'](pluginData['name'],_0xa852ab(0x3c5),_0x476ce4=>{const _0x3da8aa=_0xa852ab;VisuMZ[_0x3da8aa(0x2c1)](_0x476ce4,_0x476ce4);const _0x57a737=$gameTemp[_0x3da8aa(0x26b)]();_0x476ce4[_0x3da8aa(0x20d)]=_0x476ce4['MapId']||$gameMap[_0x3da8aa(0x4c3)](),$gameSystem[_0x3da8aa(0x35e)](_0x476ce4[_0x3da8aa(0x20d)],_0x476ce4[_0x3da8aa(0x2a7)]||_0x57a737['eventId'](),_0x476ce4[_0x3da8aa(0x263)],_0x476ce4[_0x3da8aa(0x428)],_0x476ce4[_0x3da8aa(0x5a3)],_0x476ce4['IconBlendMode'],!![]);}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x39b),_0x23f397=>{const _0x6854e5=_0xa852ab;VisuMZ['ConvertParams'](_0x23f397,_0x23f397);const _0x293a99=$gameTemp['getLastPluginCommandInterpreter']();_0x23f397['MapId']=_0x23f397['MapId']||$gameMap[_0x6854e5(0x4c3)](),$gameSystem[_0x6854e5(0x53f)](_0x23f397[_0x6854e5(0x20d)],_0x23f397[_0x6854e5(0x2a7)]||_0x293a99['eventId']());}),PluginManager['registerCommand'](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x3ce),_0x45e254=>{const _0x5768a9=_0xa852ab;VisuMZ['ConvertParams'](_0x45e254,_0x45e254);const _0x2cc1a5=$gameTemp[_0x5768a9(0x26b)]();_0x45e254[_0x5768a9(0x20d)]=_0x45e254[_0x5768a9(0x20d)]||$gameMap['mapId'](),$gameSystem[_0x5768a9(0x3a2)](_0x45e254[_0x5768a9(0x20d)],_0x45e254[_0x5768a9(0x2a7)]||_0x2cc1a5[_0x5768a9(0x379)]());}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x35a),_0x34dea2=>{const _0x2d6d59=_0xa852ab;if($gameMap)for(const _0x10160c of $gameMap[_0x2d6d59(0x2e3)]()){_0x10160c[_0x2d6d59(0x2af)](),_0x10160c[_0x2d6d59(0x6c6)]();}if(SceneManager[_0x2d6d59(0x599)]()){const _0x30d69d=SceneManager[_0x2d6d59(0x6ce)][_0x2d6d59(0x56a)];if(_0x30d69d)_0x30d69d[_0x2d6d59(0x4f3)]();}}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x4b8),_0x54f1a9=>{const _0x36be30=_0xa852ab;VisuMZ[_0x36be30(0x2c1)](_0x54f1a9,_0x54f1a9);switch(_0x54f1a9[_0x36be30(0x2fe)]){case _0x36be30(0x28a):$gameSystem['setEventLabelsVisible'](!![]);break;case _0x36be30(0x2b5):$gameSystem[_0x36be30(0x28f)](![]);break;case'Toggle':$gameSystem[_0x36be30(0x28f)](!$gameSystem['eventLabelsVisible']());break;}}),PluginManager['registerCommand'](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x339),_0x123a62=>{const _0x2e2df5=_0xa852ab;VisuMZ[_0x2e2df5(0x2c1)](_0x123a62,_0x123a62);const _0x5f5781=$gameTemp[_0x2e2df5(0x26b)]();if(!$gameMap)return;const _0x44e1f7=$gameMap[_0x2e2df5(0x6b2)](_0x123a62[_0x2e2df5(0x2a7)]||_0x5f5781[_0x2e2df5(0x379)]());if(_0x44e1f7)_0x44e1f7['saveEventLocation']();}),PluginManager['registerCommand'](pluginData[_0xa852ab(0x5e4)],'EventLocationCreate',_0x2cb9e4=>{const _0x26535e=_0xa852ab;VisuMZ[_0x26535e(0x2c1)](_0x2cb9e4,_0x2cb9e4);const _0x1e6580=$gameTemp[_0x26535e(0x26b)](),_0x210e6a=_0x2cb9e4[_0x26535e(0x20d)]||$gameMap['mapId'](),_0x43e79a=_0x2cb9e4[_0x26535e(0x2a7)]||_0x1e6580['eventId'](),_0x17f811=_0x2cb9e4['PosX']||0x0,_0x262db5=_0x2cb9e4['PosY']||0x0,_0x4625dd=_0x2cb9e4['Direction']||0x2,_0xa2c4a5=((_0x2cb9e4['PageId']||0x1)-0x1)['clamp'](0x0,0x13),_0x1491c6=_0x2cb9e4[_0x26535e(0x49b)]||0x0;$gameSystem[_0x26535e(0x2ec)](_0x210e6a,_0x43e79a,_0x17f811,_0x262db5,_0x4625dd,_0xa2c4a5,_0x1491c6);}),PluginManager['registerCommand'](pluginData[_0xa852ab(0x5e4)],'EventLocationDelete',_0x354703=>{const _0x30aad5=_0xa852ab;VisuMZ['ConvertParams'](_0x354703,_0x354703);const _0x1e0562=$gameTemp['getLastPluginCommandInterpreter'](),_0x1ed8fe=_0x354703[_0x30aad5(0x20d)]||$gameMap[_0x30aad5(0x4c3)](),_0x5d14e1=_0x354703[_0x30aad5(0x2a7)]||_0x1e0562[_0x30aad5(0x379)]();$gameSystem[_0x30aad5(0x6e0)](_0x1ed8fe,_0x5d14e1);}),VisuMZ['EventsMoveCore'][_0xa852ab(0x52f)]=function(_0x48c6de,_0x13123b){const _0x331365=_0xa852ab;_0x13123b=_0x13123b||{},_0x48c6de[_0x331365(0x459)]={'fadeIn':_0x13123b[_0x331365(0x3f4)]||0x0,'fadeOut':_0x13123b[_0x331365(0x329)]||0x0},_0x48c6de[_0x331365(0x552)]={'x':_0x13123b[_0x331365(0x5d1)]||0x0,'y':_0x13123b[_0x331365(0x46d)]||0x0},_0x48c6de[_0x331365(0x600)]={'x':_0x13123b[_0x331365(0x4bb)]||0x0,'y':_0x13123b[_0x331365(0x6a7)]||0x0},_0x48c6de['endScale']={'x':_0x13123b['endScaleX']||0x0,'y':_0x13123b[_0x331365(0x34b)]||0x0},_0x48c6de['startScale']={'x':_0x13123b[_0x331365(0x327)]||0x0,'y':_0x13123b['startScaleY']||0x0},_0x48c6de[_0x331365(0x251)]={'start':_0x13123b[_0x331365(0x5de)]||0x0,'end':_0x13123b[_0x331365(0x3b8)]||0x0},_0x48c6de[_0x331365(0x547)]={'arc':_0x13123b[_0x331365(0x562)]||0x0};},PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x5f8),_0x4d6f92=>{const _0x2103f8=_0xa852ab;if(!SceneManager['isInstanceOfSceneMap']())return;if(!Imported[_0x2103f8(0x4ee)]){$gameTemp['isPlaytest']()&&alert('VisuMZ_1_MessageCore\x20is\x20required\x20to\x20run\x20'+'\x22Event\x20Popup:\x20Player\x22\x20plugin\x20command!');return;}VisuMZ[_0x2103f8(0x2c1)](_0x4d6f92,_0x4d6f92);const _0x1889cc={'text':_0x4d6f92[_0x2103f8(0x25d)]||'','duration':Math[_0x2103f8(0x23b)](_0x4d6f92[_0x2103f8(0x3fa)]||0x3c,0xc)},_0x9c872a=_0x4d6f92['PopupExtra']||{};VisuMZ[_0x2103f8(0x5fb)][_0x2103f8(0x52f)](_0x1889cc,_0x9c872a);const _0x495c14=SceneManager[_0x2103f8(0x6ce)]['_spriteset'];if(_0x495c14){const _0x302fd6=$gamePlayer;_0x495c14['createEventsMoveCoreMessagePopup'](_0x302fd6,_0x1889cc);}}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x223),_0x5214fb=>{const _0x41f625=_0xa852ab;if(!SceneManager[_0x41f625(0x2c4)]())return;if(!Imported['VisuMZ_1_MessageCore']){$gameTemp['isPlaytest']()&&alert(_0x41f625(0x44d)+_0x41f625(0x40a));return;}VisuMZ['ConvertParams'](_0x5214fb,_0x5214fb);const _0x4e5c1c=_0x5214fb[_0x41f625(0x5d3)]||0x0,_0x4e0f1d={'text':_0x5214fb['MessageText']||'','duration':Math[_0x41f625(0x23b)](_0x5214fb['MsgDuration']||0x3c,0xc)},_0x884ba2=_0x5214fb[_0x41f625(0x2c3)]||{};VisuMZ[_0x41f625(0x5fb)][_0x41f625(0x52f)](_0x4e0f1d,_0x884ba2);const _0xd40c7b=SceneManager[_0x41f625(0x6ce)][_0x41f625(0x56a)];if(_0xd40c7b){const _0x594688=$gamePlayer[_0x41f625(0x5fa)]()[_0x41f625(0x51a)](_0x4e5c1c);_0xd40c7b[_0x41f625(0x556)](_0x594688,_0x4e0f1d);}}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x3c8),_0x480570=>{const _0x33965=_0xa852ab;if(!SceneManager['isInstanceOfSceneMap']())return;if(!Imported[_0x33965(0x4ee)]){$gameTemp[_0x33965(0x642)]()&&alert(_0x33965(0x44d)+_0x33965(0x40a));return;}VisuMZ[_0x33965(0x2c1)](_0x480570,_0x480570);const _0x104efc=$gameTemp[_0x33965(0x26b)](),_0x2605f4=_0x480570[_0x33965(0x2a7)]||(_0x104efc?_0x104efc[_0x33965(0x379)]():0x1),_0x448ccd={'text':_0x480570[_0x33965(0x25d)]||'','duration':Math['max'](_0x480570[_0x33965(0x3fa)]||0x3c,0xc)},_0xa412da=_0x480570['PopupExtra']||{};VisuMZ['EventsMoveCore'][_0x33965(0x52f)](_0x448ccd,_0xa412da);const _0xd8c19b=SceneManager[_0x33965(0x6ce)][_0x33965(0x56a)];if(_0xd8c19b){const _0x3966a2=$gameMap[_0x33965(0x6b2)](_0x2605f4);_0xd8c19b[_0x33965(0x556)](_0x3966a2,_0x448ccd);}}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x421),_0xef3e47=>{const _0x2d8636=_0xa852ab;if(!SceneManager[_0x2d8636(0x2c4)]())return;if(!Imported[_0x2d8636(0x4ee)]){$gameTemp[_0x2d8636(0x642)]()&&alert(_0x2d8636(0x44d)+'\x22Event\x20Popup:\x20Player\x22\x20plugin\x20command!');return;}VisuMZ[_0x2d8636(0x2c1)](_0xef3e47,_0xef3e47);const _0x3a7543={'text':_0xef3e47[_0x2d8636(0x25d)]||'','duration':Math['max'](_0xef3e47[_0x2d8636(0x3fa)]||0x3c,0xc),'tileCoordinates':{'x':Math[_0x2d8636(0x5e5)](_0xef3e47[_0x2d8636(0x53c)]||0x0),'y':Math[_0x2d8636(0x5e5)](_0xef3e47['TileY']||0x0)}},_0x26d46e=_0xef3e47[_0x2d8636(0x2c3)]||{};VisuMZ[_0x2d8636(0x5fb)][_0x2d8636(0x52f)](_0x3a7543,_0x26d46e);const _0x53919b=SceneManager[_0x2d8636(0x6ce)]['_spriteset'];_0x53919b&&_0x53919b[_0x2d8636(0x340)](_0x3a7543);}),PluginManager[_0xa852ab(0x2d5)](pluginData['name'],'EventTimerExpireEvent',_0x3643dc=>{const _0x486b5e=_0xa852ab;VisuMZ[_0x486b5e(0x2c1)](_0x3643dc,_0x3643dc);const _0x1343ce=_0x3643dc[_0x486b5e(0x484)];$gameTimer['setCommonEvent'](_0x1343ce);}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x661),_0x56c277=>{const _0x45fcef=_0xa852ab;$gameTimer[_0x45fcef(0x45f)](0x0);}),PluginManager[_0xa852ab(0x2d5)](pluginData['name'],_0xa852ab(0x403),_0x6d41c9=>{const _0x5c1127=_0xa852ab;if(!$gameTimer[_0x5c1127(0x320)]())return;VisuMZ['ConvertParams'](_0x6d41c9,_0x6d41c9);let _0x5e7c94=0x0;_0x5e7c94+=_0x6d41c9[_0x5c1127(0x502)],_0x5e7c94+=_0x6d41c9[_0x5c1127(0x4c0)]*0x3c,_0x5e7c94+=_0x6d41c9[_0x5c1127(0x624)]*0x3c*0x3c,_0x5e7c94+=_0x6d41c9[_0x5c1127(0x2b1)]*0x3c*0x3c*0x3c,$gameTimer['gainFrames'](_0x5e7c94);}),PluginManager[_0xa852ab(0x2d5)](pluginData['name'],_0xa852ab(0x389),_0x1106df=>{const _0x7dcaf5=_0xa852ab;if(!$gameTimer['isWorking']())return;VisuMZ[_0x7dcaf5(0x2c1)](_0x1106df,_0x1106df);let _0x575911=0x0;_0x575911+=_0x1106df[_0x7dcaf5(0x502)],_0x575911+=_0x1106df[_0x7dcaf5(0x4c0)]*0x3c,_0x575911+=_0x1106df['Minutes']*0x3c*0x3c,_0x575911+=_0x1106df['Hours']*0x3c*0x3c*0x3c,$gameTimer[_0x7dcaf5(0x46e)](_0x575911);}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x6cb),_0x220e56=>{const _0x4a14a3=_0xa852ab;if(!$gameTimer[_0x4a14a3(0x320)]())return;$gameTimer['pause']();}),PluginManager[_0xa852ab(0x2d5)](pluginData['name'],_0xa852ab(0x351),_0x21fd85=>{const _0x16b623=_0xa852ab;if(!$gameTimer[_0x16b623(0x320)]())return;$gameTimer[_0x16b623(0x5bb)]();}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x557),_0x374a89=>{const _0x43542b=_0xa852ab;VisuMZ[_0x43542b(0x2c1)](_0x374a89,_0x374a89);const _0x1dcb21=_0x374a89['Speed']||0x0;$gameTimer['changeSpeed'](_0x1dcb21);}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],'FollowerSetGlobalChase',_0x35ae89=>{const _0x45d109=_0xa852ab;VisuMZ[_0x45d109(0x2c1)](_0x35ae89,_0x35ae89);const _0x4280f6=!_0x35ae89[_0x45d109(0x465)];$gameSystem[_0x45d109(0x5f4)](_0x4280f6);}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x602),_0x109cc7=>{const _0x2e0d76=_0xa852ab;VisuMZ[_0x2e0d76(0x2c1)](_0x109cc7,_0x109cc7);const _0x3b05b3=(_0x109cc7['FollowerID']||0x0)-0x1,_0x449c15=!_0x109cc7[_0x2e0d76(0x465)],_0x22b726=$gamePlayer[_0x2e0d76(0x5fa)]()[_0x2e0d76(0x51a)](_0x3b05b3);if(_0x22b726)_0x22b726[_0x2e0d76(0x1fd)](_0x449c15);}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x6a4),_0xdf9f80=>{const _0x540e56=_0xa852ab;VisuMZ[_0x540e56(0x2c1)](_0xdf9f80,_0xdf9f80);const _0x40ccfa=_0xdf9f80[_0x540e56(0x48f)];$gameSystem[_0x540e56(0x608)](_0x40ccfa);}),PluginManager[_0xa852ab(0x2d5)](pluginData['name'],_0xa852ab(0x686),_0x21670a=>{const _0x2bdcde=_0xa852ab;VisuMZ[_0x2bdcde(0x2c1)](_0x21670a,_0x21670a),$gameSystem[_0x2bdcde(0x608)](0x0),$gameSystem[_0x2bdcde(0x5f4)](![]);for(const _0x233f5b of $gamePlayer[_0x2bdcde(0x5fa)]()[_0x2bdcde(0x62c)]){if(_0x233f5b)_0x233f5b[_0x2bdcde(0x1fd)](![]);}}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x2aa),_0x4dc7d2=>{const _0x2703ad=_0xa852ab;VisuMZ[_0x2703ad(0x2c1)](_0x4dc7d2,_0x4dc7d2);const _0x39435e=$gameTemp[_0x2703ad(0x26b)]();_0x4dc7d2[_0x2703ad(0x20d)]=_0x4dc7d2[_0x2703ad(0x20d)]||$gameMap[_0x2703ad(0x4c3)]();const _0x2d86f7=[_0x4dc7d2[_0x2703ad(0x20d)],_0x4dc7d2['EventId']||_0x39435e['eventId'](),_0x4dc7d2[_0x2703ad(0x383)]],_0x84f284=_0x4dc7d2[_0x2703ad(0x638)],_0x459f63=$gameSelfSwitches[_0x2703ad(0x420)](_0x2d86f7)||![];$gameSwitches[_0x2703ad(0x5d6)](_0x84f284,_0x459f63);}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x5aa),_0x4317b5=>{const _0x45b20e=_0xa852ab;VisuMZ['ConvertParams'](_0x4317b5,_0x4317b5);const _0x569a56=$gameTemp[_0x45b20e(0x26b)]();_0x4317b5['MapId']=_0x4317b5[_0x45b20e(0x20d)]||$gameMap['mapId']();const _0x2ff6b0=[_0x4317b5[_0x45b20e(0x20d)],_0x4317b5[_0x45b20e(0x2a7)]||_0x569a56[_0x45b20e(0x379)](),_0x45b20e(0x6d4)[_0x45b20e(0x58f)](_0x4317b5[_0x45b20e(0x66e)])],_0x3f7e46=_0x4317b5['TargetSwitchId'],_0x127977=$gameSelfSwitches[_0x45b20e(0x420)](_0x2ff6b0)||![];$gameSwitches[_0x45b20e(0x5d6)](_0x3f7e46,_0x127977);}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],'VariableGetSelfVariableID',_0x447598=>{const _0x54b234=_0xa852ab;VisuMZ[_0x54b234(0x2c1)](_0x447598,_0x447598);const _0x23faaa=$gameTemp[_0x54b234(0x26b)]();_0x447598[_0x54b234(0x20d)]=_0x447598[_0x54b234(0x20d)]||$gameMap['mapId']();const _0x5ee824=[_0x447598[_0x54b234(0x20d)],_0x447598['EventId']||_0x23faaa[_0x54b234(0x379)](),_0x54b234(0x476)['format'](_0x447598[_0x54b234(0x207)])],_0x526dfb=_0x447598[_0x54b234(0x2c8)],_0x2d37ff=$gameSelfSwitches[_0x54b234(0x420)](_0x5ee824)||![];$gameVariables['setValue'](_0x526dfb,_0x2d37ff);}),PluginManager[_0xa852ab(0x2d5)](pluginData['name'],_0xa852ab(0x5be),_0x297b0d=>{const _0xc7ed0a=_0xa852ab;VisuMZ[_0xc7ed0a(0x2c1)](_0x297b0d,_0x297b0d);if(!$gameMap)return;const _0x32ed50=$gameTemp['getLastPluginCommandInterpreter'](),_0x4376e9=_0x297b0d[_0xc7ed0a(0x45c)];_0x297b0d[_0xc7ed0a(0x58d)]=_0x297b0d[_0xc7ed0a(0x58d)]||$gameMap[_0xc7ed0a(0x4c3)](),_0x297b0d[_0xc7ed0a(0x25b)]=_0x297b0d['Step2MapId']||$gameMap[_0xc7ed0a(0x4c3)](),_0x297b0d[_0xc7ed0a(0x1f8)]=_0x297b0d[_0xc7ed0a(0x1f8)][_0xc7ed0a(0x20e)]()[_0xc7ed0a(0x572)]();if(!_0x4376e9&&_0x297b0d[_0xc7ed0a(0x58d)]!==$gameMap[_0xc7ed0a(0x4c3)]())return;if($gameMap[_0xc7ed0a(0x4c3)]()===_0x297b0d[_0xc7ed0a(0x58d)]){const _0x561407=$gameMap[_0xc7ed0a(0x6b2)](_0x297b0d[_0xc7ed0a(0x56e)]||_0x32ed50[_0xc7ed0a(0x379)]());if(!_0x561407)return;_0x297b0d[_0xc7ed0a(0x1f8)]!==_0xc7ed0a(0x692)?_0x561407[_0xc7ed0a(0x5da)](_0x297b0d['TemplateName']):_0x561407[_0xc7ed0a(0x4f2)](_0x297b0d[_0xc7ed0a(0x25b)],_0x297b0d[_0xc7ed0a(0x49d)]||_0x32ed50[_0xc7ed0a(0x379)]());}_0x4376e9&&$gameSystem[_0xc7ed0a(0x5b2)](_0x297b0d['Step1MapId'],_0x297b0d['Step1EventId'],_0x297b0d['TemplateName'],_0x297b0d['Step2MapId'],_0x297b0d['Step2EventId']);}),PluginManager['registerCommand'](pluginData['name'],_0xa852ab(0x5fe),_0x4556a2=>{const _0x3964d8=_0xa852ab;VisuMZ[_0x3964d8(0x2c1)](_0x4556a2,_0x4556a2);if(!$gameMap)return;const _0x182110=$gameTemp[_0x3964d8(0x26b)]();_0x4556a2[_0x3964d8(0x20d)]=_0x4556a2['MapId']||$gameMap['mapId']();if($gameMap[_0x3964d8(0x4c3)]()===_0x4556a2[_0x3964d8(0x20d)]){const _0x80c01f=$gameMap[_0x3964d8(0x6b2)](_0x4556a2[_0x3964d8(0x2a7)]||_0x182110[_0x3964d8(0x379)]());_0x80c01f['removeMorph']();}_0x4556a2[_0x3964d8(0x5eb)]&&$gameSystem[_0x3964d8(0x622)](_0x4556a2[_0x3964d8(0x20d)],_0x4556a2[_0x3964d8(0x2a7)]||_0x182110['eventId']());}),PluginManager['registerCommand'](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x293),_0x10bce1=>{const _0x10c847=_0xa852ab;VisuMZ['ConvertParams'](_0x10bce1,_0x10bce1),$gameSystem[_0x10c847(0x532)]($gamePlayer,_0x10bce1[_0x10c847(0x263)],_0x10bce1[_0x10c847(0x428)],_0x10bce1['IconBufferY'],_0x10bce1[_0x10c847(0x3cc)]);}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x3fe),_0x239866=>{const _0x5a790f=_0xa852ab;VisuMZ[_0x5a790f(0x2c1)](_0x239866,_0x239866),$gameSystem[_0x5a790f(0x55b)]($gamePlayer);}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],'PlayerMovementChange',_0x348839=>{VisuMZ['ConvertParams'](_0x348839,_0x348839),$gameSystem['setPlayerControlDisable'](!_0x348839['Enable']);}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x6df),_0x16da69=>{const _0x42e557=_0xa852ab;VisuMZ['ConvertParams'](_0x16da69,_0x16da69),$gameSystem[_0x42e557(0x499)](_0x16da69[_0x42e557(0x22e)]);}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x319),_0x14f209=>{const _0x282aeb=_0xa852ab;VisuMZ[_0x282aeb(0x2c1)](_0x14f209,_0x14f209);const _0x166426=_0x14f209[_0x282aeb(0x20d)]||$gameMap[_0x282aeb(0x4c3)]();$gameSelfSwitches[_0x282aeb(0x444)](_0x166426);}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x30a),_0xef298b=>{const _0x3c031c=_0xa852ab;VisuMZ[_0x3c031c(0x2c1)](_0xef298b,_0xef298b);const _0x2e128a=$gameTemp[_0x3c031c(0x26b)]();_0xef298b['MapId']=_0xef298b[_0x3c031c(0x20d)]||$gameMap['mapId']();const _0x1ffab0=[_0xef298b[_0x3c031c(0x20d)],_0xef298b[_0x3c031c(0x2a7)]||_0x2e128a[_0x3c031c(0x379)](),_0xef298b[_0x3c031c(0x383)]];switch(_0xef298b[_0x3c031c(0x62f)]){case'ON':$gameSelfSwitches[_0x3c031c(0x5d6)](_0x1ffab0,!![]);break;case _0x3c031c(0x209):$gameSelfSwitches[_0x3c031c(0x5d6)](_0x1ffab0,![]);break;case _0x3c031c(0x34a):$gameSelfSwitches[_0x3c031c(0x5d6)](_0x1ffab0,!$gameSelfSwitches[_0x3c031c(0x420)](_0x1ffab0));break;}}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x248),_0x2215f0=>{const _0x3c62c3=_0xa852ab;VisuMZ[_0x3c62c3(0x2c1)](_0x2215f0,_0x2215f0);const _0x430d65=$gameTemp['getLastPluginCommandInterpreter']();_0x2215f0['MapId']=_0x2215f0[_0x3c62c3(0x20d)]||$gameMap[_0x3c62c3(0x4c3)]();const _0x13f44a=[_0x2215f0[_0x3c62c3(0x20d)],_0x2215f0['EventId']||_0x430d65[_0x3c62c3(0x379)](),_0x3c62c3(0x6d4)[_0x3c62c3(0x58f)](_0x2215f0[_0x3c62c3(0x66e)])];switch(_0x2215f0[_0x3c62c3(0x62f)]){case'ON':$gameSelfSwitches[_0x3c62c3(0x5d6)](_0x13f44a,!![]);break;case _0x3c62c3(0x209):$gameSelfSwitches[_0x3c62c3(0x5d6)](_0x13f44a,![]);break;case'Toggle':$gameSelfSwitches[_0x3c62c3(0x5d6)](_0x13f44a,!$gameSelfSwitches[_0x3c62c3(0x420)](_0x13f44a));break;}}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x2c2),_0x170fc9=>{const _0x8cbf5c=_0xa852ab;VisuMZ[_0x8cbf5c(0x2c1)](_0x170fc9,_0x170fc9);const _0x599fd6=$gameTemp[_0x8cbf5c(0x26b)]();_0x170fc9['MapId']=_0x170fc9[_0x8cbf5c(0x20d)]||$gameMap[_0x8cbf5c(0x4c3)]();const _0x5ab682=[_0x170fc9[_0x8cbf5c(0x20d)],_0x170fc9['EventId']||_0x599fd6[_0x8cbf5c(0x379)](),_0x8cbf5c(0x476)[_0x8cbf5c(0x58f)](_0x170fc9[_0x8cbf5c(0x207)])],_0x6a1ccc=VisuMZ['OperateValues']($gameSelfSwitches[_0x8cbf5c(0x420)](_0x5ab682),_0x170fc9[_0x8cbf5c(0x62f)],_0x170fc9[_0x8cbf5c(0x5f5)]);$gameSelfSwitches['setValue'](_0x5ab682,_0x6a1ccc);}),PluginManager[_0xa852ab(0x2d5)](pluginData['name'],'ShadowHidePlayer',_0x542dcf=>{$gamePlayer['_noMovementShadow']=!![];}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],'ShadowHideFollowers',_0x5558e9=>{$gamePlayer['_noFollowerMovementShadow']=!![];}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x5b0),_0x17976b=>{const _0x2c27f1=_0xa852ab;$gamePlayer[_0x2c27f1(0x461)]=!![];}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x325),_0x2ab0fd=>{const _0x41e28a=_0xa852ab;$gamePlayer[_0x41e28a(0x29a)]=![];}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],'ShadowShowFollowers',_0x3283f6=>{const _0x4db1a8=_0xa852ab;$gamePlayer[_0x4db1a8(0x516)]=![];}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x2b2),_0x52f2cb=>{const _0x25e669=_0xa852ab;$gamePlayer[_0x25e669(0x461)]=!![];}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],'SpawnEventAtXY',_0x46aabc=>{const _0x30808a=_0xa852ab;VisuMZ[_0x30808a(0x2c1)](_0x46aabc,_0x46aabc);const _0x4ebac0=$gameTemp[_0x30808a(0x26b)](),_0x11eaf1={'template':_0x46aabc[_0x30808a(0x1f8)],'mapId':_0x46aabc[_0x30808a(0x20d)]||$gameMap[_0x30808a(0x4c3)](),'eventId':_0x46aabc['EventId']||_0x4ebac0['eventId'](),'x':_0x46aabc['PosX'],'y':_0x46aabc[_0x30808a(0x2e2)],'spawnPreserved':_0x46aabc[_0x30808a(0x5e8)],'spawnEventId':$gameMap[_0x30808a(0x36f)][_0x30808a(0x4d9)]+0x3e8},_0x1ec74c=_0x46aabc['SuccessSwitchId']||0x0;if(!VisuMZ[_0x30808a(0x4d6)][_0x11eaf1['mapId']]&&_0x11eaf1['mapId']!==$gameMap[_0x30808a(0x4c3)]()){let _0x196237=_0x30808a(0x6c3)[_0x30808a(0x58f)](_0x11eaf1[_0x30808a(0x4c3)]);_0x196237+=_0x30808a(0x2ad),_0x196237+=_0x30808a(0x457),_0x196237+=_0x30808a(0x33c),_0x196237+=_0x30808a(0x69f)[_0x30808a(0x58f)](_0x11eaf1[_0x30808a(0x4c3)]),alert(_0x196237);return;}const _0x4c9139=$gameMap[_0x30808a(0x5c6)](_0x11eaf1,_0x46aabc[_0x30808a(0x1fa)],_0x46aabc[_0x30808a(0x3e0)]);_0x1ec74c&&$gameSwitches[_0x30808a(0x5d6)](_0x1ec74c,!!_0x4c9139);}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x6cc),_0x326db4=>{const _0x16950d=_0xa852ab;VisuMZ[_0x16950d(0x2c1)](_0x326db4,_0x326db4);const _0x1af4f5=$gameTemp[_0x16950d(0x26b)](),_0x26115d={'template':_0x326db4[_0x16950d(0x1f8)],'mapId':_0x326db4[_0x16950d(0x20d)]||$gameMap[_0x16950d(0x4c3)](),'eventId':_0x326db4[_0x16950d(0x2a7)]||_0x1af4f5['eventId'](),'x':-0x1,'y':-0x1,'spawnPreserved':_0x326db4['Preserve'],'spawnEventId':$gameMap[_0x16950d(0x36f)]['length']+0x3e8},_0x232cf9=_0x326db4['SuccessSwitchId']||0x0;if(!VisuMZ[_0x16950d(0x4d6)][_0x26115d[_0x16950d(0x4c3)]]&&_0x26115d['mapId']!==$gameMap[_0x16950d(0x4c3)]()){let _0x41c010='You\x20do\x20not\x20have\x20Map\x20%1\x20added\x20to\x20the\x20list\x0a'['format'](_0x26115d[_0x16950d(0x4c3)]);_0x41c010+=_0x16950d(0x2ad),_0x41c010+=_0x16950d(0x457),_0x41c010+=_0x16950d(0x33c),_0x41c010+=_0x16950d(0x69f)['format'](_0x26115d[_0x16950d(0x4c3)]),alert(_0x41c010);return;}const _0x40c667=$gameMap['prepareSpawnedEventAtRegion'](_0x26115d,_0x326db4[_0x16950d(0x5f2)],_0x326db4[_0x16950d(0x1fa)],_0x326db4[_0x16950d(0x3e0)]);_0x232cf9&&$gameSwitches[_0x16950d(0x5d6)](_0x232cf9,!!_0x40c667);}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],'SpawnEventAtTerrainTag',_0x507acb=>{const _0x14b19a=_0xa852ab;VisuMZ[_0x14b19a(0x2c1)](_0x507acb,_0x507acb);const _0xb90ba3=$gameTemp[_0x14b19a(0x26b)](),_0x5e3941={'template':_0x507acb['TemplateName'],'mapId':_0x507acb[_0x14b19a(0x20d)]||$gameMap[_0x14b19a(0x4c3)](),'eventId':_0x507acb[_0x14b19a(0x2a7)]||_0xb90ba3[_0x14b19a(0x379)](),'x':-0x1,'y':-0x1,'spawnPreserved':_0x507acb[_0x14b19a(0x5e8)],'spawnEventId':$gameMap['_spawnedEvents'][_0x14b19a(0x4d9)]+0x3e8},_0x216c4d=_0x507acb['SuccessSwitchId']||0x0;if(!VisuMZ[_0x14b19a(0x4d6)][_0x5e3941[_0x14b19a(0x4c3)]]&&_0x5e3941[_0x14b19a(0x4c3)]!==$gameMap[_0x14b19a(0x4c3)]()){let _0x38f8f6=_0x14b19a(0x6c3)['format'](_0x5e3941[_0x14b19a(0x4c3)]);_0x38f8f6+=_0x14b19a(0x2ad),_0x38f8f6+='Set\x20this\x20up\x20in\x20Events\x20&\x20Movement\x20Core\x27s\x0a',_0x38f8f6+=_0x14b19a(0x33c),_0x38f8f6+='Preloaded\x20Maps\x20and\x20add\x20in\x20Map\x20%1'[_0x14b19a(0x58f)](_0x5e3941[_0x14b19a(0x4c3)]),alert(_0x38f8f6);return;}const _0x1746e1=$gameMap[_0x14b19a(0x3ae)](_0x5e3941,_0x507acb[_0x14b19a(0x53e)],_0x507acb[_0x14b19a(0x1fa)],_0x507acb[_0x14b19a(0x3e0)]);_0x216c4d&&$gameSwitches['setValue'](_0x216c4d,!!_0x1746e1);}),PluginManager[_0xa852ab(0x2d5)](pluginData['name'],'SpawnEventDespawnEventID',_0x32c52f=>{const _0x5164d9=_0xa852ab;VisuMZ[_0x5164d9(0x2c1)](_0x32c52f,_0x32c52f);const _0x5aab46=$gameTemp['getLastPluginCommandInterpreter']();$gameMap[_0x5164d9(0x594)](_0x32c52f[_0x5164d9(0x2b6)]||_0x5aab46[_0x5164d9(0x379)]());}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x3b4),_0x1bed75=>{const _0x555b6c=_0xa852ab;VisuMZ[_0x555b6c(0x2c1)](_0x1bed75,_0x1bed75);const _0x236461=_0x1bed75[_0x555b6c(0x3fc)],_0x46f0=_0x1bed75['PosY'];$gameMap[_0x555b6c(0x616)](_0x236461,_0x46f0);}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x2df),_0x412204=>{const _0xd59d4e=_0xa852ab;VisuMZ[_0xd59d4e(0x2c1)](_0x412204,_0x412204),$gameMap[_0xd59d4e(0x359)](_0x412204[_0xd59d4e(0x5f2)]);}),PluginManager['registerCommand'](pluginData[_0xa852ab(0x5e4)],'SpawnEventDespawnTerrainTags',_0x24c1a3=>{const _0x2e89cf=_0xa852ab;VisuMZ[_0x2e89cf(0x2c1)](_0x24c1a3,_0x24c1a3),$gameMap[_0x2e89cf(0x230)](_0x24c1a3[_0x2e89cf(0x53e)]);}),PluginManager[_0xa852ab(0x2d5)](pluginData[_0xa852ab(0x5e4)],_0xa852ab(0x365),_0x284f71=>{const _0x5ef7da=_0xa852ab;VisuMZ[_0x5ef7da(0x2c1)](_0x284f71,_0x284f71),$gameMap[_0x5ef7da(0x38c)]();}),VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x264)]=Scene_Boot[_0xa852ab(0x410)][_0xa852ab(0x561)],Scene_Boot[_0xa852ab(0x410)][_0xa852ab(0x561)]=function(){const _0x1d0bc4=_0xa852ab;VisuMZ['EventsMoveCore'][_0x1d0bc4(0x264)][_0x1d0bc4(0x558)](this),this[_0x1d0bc4(0x69d)](),this['process_VisuMZ_EventsMoveCore_Switches_Variables']();if(VisuMZ[_0x1d0bc4(0x5fb)][_0x1d0bc4(0x36e)])VisuMZ[_0x1d0bc4(0x5fb)]['CustomPageConditions'][_0x1d0bc4(0x6b7)]();},VisuMZ[_0xa852ab(0x4d6)]=[],VisuMZ['EventTemplates']={},Scene_Boot[_0xa852ab(0x410)][_0xa852ab(0x69d)]=function(){const _0x4d66c6=_0xa852ab;if(DataManager['isBattleTest']()||DataManager[_0x4d66c6(0x440)]())return;const _0x5f0e28=VisuMZ[_0x4d66c6(0x5fb)][_0x4d66c6(0x4d4)]['Template'],_0x538ccb=_0x5f0e28['PreloadMaps'][_0x4d66c6(0x61d)](0x0);for(const _0x118b7b of _0x5f0e28['List']){_0x118b7b[_0x4d66c6(0x6eb)]=_0x118b7b['Name'][_0x4d66c6(0x20e)]()[_0x4d66c6(0x572)](),VisuMZ[_0x4d66c6(0x50c)][_0x118b7b[_0x4d66c6(0x6eb)]]=_0x118b7b;if(!_0x538ccb[_0x4d66c6(0x37c)](_0x118b7b[_0x4d66c6(0x4f0)]))_0x538ccb[_0x4d66c6(0x215)](_0x118b7b['MapID']);}for(const _0x22b171 of _0x538ccb){if(VisuMZ[_0x4d66c6(0x4d6)][_0x22b171])continue;const _0x1e4d91=_0x4d66c6(0x50e)[_0x4d66c6(0x58f)](_0x22b171[_0x4d66c6(0x419)](0x3)),_0x63ed6d=_0x4d66c6(0x202)[_0x4d66c6(0x58f)](_0x22b171);DataManager[_0x4d66c6(0x255)](_0x63ed6d,_0x1e4d91),setTimeout(this[_0x4d66c6(0x462)][_0x4d66c6(0x269)](this,_0x22b171,_0x63ed6d),0x64);}},Scene_Boot[_0xa852ab(0x410)][_0xa852ab(0x462)]=function(_0x28f771,_0x1f0f49){const _0x4f0d15=_0xa852ab;window[_0x1f0f49]?(VisuMZ[_0x4f0d15(0x4d6)][_0x28f771]=window[_0x1f0f49],window[_0x1f0f49]=undefined):setTimeout(this[_0x4f0d15(0x462)]['bind'](this,_0x28f771,_0x1f0f49),0x64);},VisuMZ[_0xa852ab(0x24f)]=[],VisuMZ[_0xa852ab(0x4f4)]=[],VisuMZ[_0xa852ab(0x2d1)]=[],VisuMZ['RefSwitches']={},VisuMZ[_0xa852ab(0x371)]=[],VisuMZ[_0xa852ab(0x60c)]=[],VisuMZ['MapVariables']=[],VisuMZ[_0xa852ab(0x48d)]={},Scene_Boot['prototype']['process_VisuMZ_EventsMoveCore_Switches_Variables']=function(){const _0x1245d6=_0xa852ab;for(let _0x588bbc=0x1;_0x588bbc<$dataSystem[_0x1245d6(0x3f6)][_0x1245d6(0x4d9)];_0x588bbc++){if($dataSystem['switches'][_0x588bbc][_0x1245d6(0x57e)](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ[_0x1245d6(0x24f)][_0x1245d6(0x215)](_0x588bbc);if($dataSystem['switches'][_0x588bbc][_0x1245d6(0x57e)](/<SELF>/i))VisuMZ[_0x1245d6(0x4f4)][_0x1245d6(0x215)](_0x588bbc);if($dataSystem[_0x1245d6(0x3f6)][_0x588bbc]['match'](/<MAP>/i))VisuMZ['MapSwitches'][_0x1245d6(0x215)](_0x588bbc);if($dataSystem['switches'][_0x588bbc][_0x1245d6(0x57e)](/\(\((.*)\)\)/i)){const _0xe96b34=String(RegExp['$1'])['toUpperCase']()[_0x1245d6(0x572)]();VisuMZ['RefSwitches'][_0xe96b34]=_0x588bbc;}else{if($dataSystem[_0x1245d6(0x3f6)][_0x588bbc][_0x1245d6(0x57e)](/\（\（(.*)\）\）/i)){const _0x1e57ca=String(RegExp['$1'])[_0x1245d6(0x20e)]()['trim']();VisuMZ[_0x1245d6(0x6a6)][_0x1e57ca]=_0x588bbc;}}}for(let _0x6f8620=0x1;_0x6f8620<$dataSystem[_0x1245d6(0x45b)][_0x1245d6(0x4d9)];_0x6f8620++){if($dataSystem[_0x1245d6(0x45b)][_0x6f8620][_0x1245d6(0x57e)](/<JS>\s*([\s\S]*)\s*<\/JS>/i))VisuMZ['AdvancedVariables'][_0x1245d6(0x215)](_0x6f8620);if($dataSystem[_0x1245d6(0x45b)][_0x6f8620][_0x1245d6(0x57e)](/<SELF>/i))VisuMZ['SelfVariables'][_0x1245d6(0x215)](_0x6f8620);if($dataSystem[_0x1245d6(0x45b)][_0x6f8620][_0x1245d6(0x57e)](/<MAP>/i))VisuMZ[_0x1245d6(0x4fb)][_0x1245d6(0x215)](_0x6f8620);if($dataSystem[_0x1245d6(0x45b)][_0x6f8620][_0x1245d6(0x57e)](/\(\((.*)\)\)/i)){const _0x10358c=String(RegExp['$1'])[_0x1245d6(0x20e)]()[_0x1245d6(0x572)]();VisuMZ['RefVariables'][_0x10358c]=_0x6f8620;}else{if($dataSystem[_0x1245d6(0x45b)][_0x6f8620][_0x1245d6(0x57e)](/\（\（(.*)\）\）/i)){const _0x5f410d=String(RegExp['$1'])[_0x1245d6(0x20e)]()['trim']();VisuMZ[_0x1245d6(0x48d)][_0x5f410d]=_0x6f8620;}}}},VisuMZ['EventsMoveCore'][_0xa852ab(0x36e)]={},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x36e)][_0xa852ab(0x6b7)]=function(){const _0x1b9bf3=_0xa852ab;this['_interpreter']=new Game_CPCInterpreter(),this[_0x1b9bf3(0x577)]();},VisuMZ[_0xa852ab(0x5fb)]['CustomPageConditions']['determineCommonEventsWithCPC']=function(){const _0x2a00ff=_0xa852ab;this['_commonEvents']=[];for(const _0x495787 of $dataCommonEvents){if(!_0x495787)continue;VisuMZ[_0x2a00ff(0x5fb)]['CustomPageConditions']['loadCPC'](_0x495787);if(_0x495787['CPC']['length']>0x0)this[_0x2a00ff(0x4c7)][_0x2a00ff(0x215)](_0x495787['id']);}},VisuMZ['EventsMoveCore'][_0xa852ab(0x36e)][_0xa852ab(0x4bc)]=function(_0x2ea6e2,_0x2b88f5,_0x36e6b4){const _0x307b4c=_0xa852ab;return this[_0x307b4c(0x213)]['setup'](_0x2ea6e2,_0x2b88f5),_0x36e6b4?this[_0x307b4c(0x213)]['executeCommonEvent'](_0x36e6b4):this[_0x307b4c(0x213)][_0x307b4c(0x3e6)](),this[_0x307b4c(0x213)]['_cpc'];},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x36e)][_0xa852ab(0x6d2)]=function(_0x34f17c){const _0x1b9b25=_0xa852ab;let _0x2eb70a=![];_0x34f17c[_0x1b9b25(0x6a9)]=[];for(const _0x236c59 of _0x34f17c['list']){if([0x6c,0x198][_0x1b9b25(0x37c)](_0x236c59[_0x1b9b25(0x30b)])){const _0x553ace=_0x236c59[_0x1b9b25(0x402)][0x0];if(_0x553ace[_0x1b9b25(0x57e)](/<PAGE (?:CONDITION|CONDITIONS)>/i))_0x2eb70a=!![];else _0x553ace[_0x1b9b25(0x57e)](/<\/PAGE (?:CONDITION|CONDITIONS)>/i)&&(_0x2eb70a=![]);}_0x2eb70a&&_0x34f17c[_0x1b9b25(0x6a9)][_0x1b9b25(0x215)](_0x236c59);}},getSelfSwitchValue=function(_0x4c6ad6,_0x42e3c6,_0x4e94b3){const _0x1972ab=_0xa852ab;let _0x14d988=[_0x4c6ad6,_0x42e3c6,_0x1972ab(0x6d4)[_0x1972ab(0x58f)](_0x4e94b3)];return typeof _0x4e94b3===_0x1972ab(0x571)&&(_0x14d988=[_0x4c6ad6,_0x42e3c6,_0x4e94b3[_0x1972ab(0x20e)]()[_0x1972ab(0x572)]()]),$gameSelfSwitches['value'](_0x14d988);},getMapSwitchValue=function(_0x17256d,_0x11d60d){const _0x13d022=_0xa852ab;let _0x4a0cfb=[0x0,0x0,_0x13d022(0x6e3)['format'](_0x17256d,_0x11d60d)];return $gameSelfSwitches[_0x13d022(0x420)](_0x4a0cfb);},getMapVariableValue=function(_0x377b12,_0x5eba34){const _0x4992e8=_0xa852ab;let _0x345a20=[0x0,0x0,_0x4992e8(0x246)[_0x4992e8(0x58f)](_0x377b12,_0x5eba34)];return $gameSelfSwitches[_0x4992e8(0x420)](_0x345a20);},getSelfVariableValue=function(_0x2edb93,_0x597539,_0x5e1213){const _0x404811=_0xa852ab,_0x334b63=[_0x2edb93,_0x597539,_0x404811(0x476)['format'](_0x5e1213)];return $gameSelfSwitches['value'](_0x334b63);},setSelfSwitchValue=function(_0x2bac4e,_0x2efa59,_0x43a41a,_0x3ec10f){const _0x167afb=_0xa852ab;let _0x5ae666=[_0x2bac4e,_0x2efa59,_0x167afb(0x6d4)['format'](_0x43a41a)];typeof _0x43a41a===_0x167afb(0x571)&&(_0x5ae666=[_0x2bac4e,_0x2efa59,_0x43a41a[_0x167afb(0x20e)]()['trim']()]),$gameSelfSwitches[_0x167afb(0x5d6)](_0x5ae666,_0x3ec10f);},setSelfVariableValue=function(_0x2a1d6c,_0x2a9952,_0x21b416,_0x42e139){const _0x526a36=_0xa852ab,_0x387b42=[_0x2a1d6c,_0x2a9952,_0x526a36(0x476)[_0x526a36(0x58f)](_0x21b416)];$gameSelfSwitches[_0x526a36(0x5d6)](_0x387b42,_0x42e139);},setMapSwitchValue=function(_0x3beccc,_0x264e00,_0x4e6766){const _0x25a8d2=_0xa852ab;let _0xb123d2=[0x0,0x0,_0x25a8d2(0x6e3)[_0x25a8d2(0x58f)](_0x3beccc,_0x264e00)];$gameSelfSwitches['setValue'](_0xb123d2,_0x4e6766);},setMapVariableValue=function(_0x5e19db,_0xa08e97,_0xe86a2c){const _0x485649=_0xa852ab;let _0x4ea2bf=[0x0,0x0,_0x485649(0x246)[_0x485649(0x58f)](_0x5e19db,_0xa08e97)];$gameSelfSwitches[_0x485649(0x5d6)](_0x4ea2bf,_0xe86a2c);},DataManager[_0xa852ab(0x318)]=function(_0x21523f){const _0x501b72=_0xa852ab;if(SceneManager['_scene'][_0x501b72(0x6b9)]===Scene_Debug)return![];return VisuMZ[_0x501b72(0x24f)][_0x501b72(0x37c)](_0x21523f);},DataManager['isAdvancedVariable']=function(_0x3bd44b){const _0x2fb158=_0xa852ab;if(SceneManager[_0x2fb158(0x6ce)][_0x2fb158(0x6b9)]===Scene_Debug)return![];return VisuMZ['AdvancedVariables'][_0x2fb158(0x37c)](_0x3bd44b);},DataManager['isSelfSwitch']=function(_0x18000c){const _0x4c8b8d=_0xa852ab;if(SceneManager[_0x4c8b8d(0x6ce)]['constructor']===Scene_Debug)return![];return VisuMZ[_0x4c8b8d(0x4f4)]['includes'](_0x18000c);},DataManager[_0xa852ab(0x4ff)]=function(_0x16d68d){if(SceneManager['_scene']['constructor']===Scene_Debug)return![];return VisuMZ['SelfVariables']['includes'](_0x16d68d);},DataManager[_0xa852ab(0x52b)]=function(_0x592410){const _0x2c27d8=_0xa852ab;if(BattleManager[_0x2c27d8(0x377)]())return![];return VisuMZ[_0x2c27d8(0x2d1)][_0x2c27d8(0x37c)](_0x592410);},DataManager['isMapVariable']=function(_0x4d885c){const _0x3bcdbe=_0xa852ab;if(BattleManager['isBattleTest']())return![];return VisuMZ[_0x3bcdbe(0x4fb)][_0x3bcdbe(0x37c)](_0x4d885c);},ImageManager[_0xa852ab(0x42a)]=function(_0x57d3e5){const _0x176452=_0xa852ab;return _0x57d3e5[_0x176452(0x57e)](/\[INV(?:|ISIBLE)\]/i);},SceneManager[_0xa852ab(0x599)]=function(){const _0x4c9d2b=_0xa852ab;return this[_0x4c9d2b(0x6ce)]&&this[_0x4c9d2b(0x6ce)]['constructor']===Scene_Map;},SceneManager[_0xa852ab(0x2c4)]=function(){const _0x137d1e=_0xa852ab;return this[_0x137d1e(0x6ce)]&&this[_0x137d1e(0x6ce)]instanceof Scene_Map;},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x6cf)]=Game_Temp['prototype']['setDestination'],Game_Temp['prototype'][_0xa852ab(0x5cf)]=function(_0x45b325,_0x548e63){const _0x3af84c=_0xa852ab;if(this[_0x3af84c(0x405)](_0x45b325,_0x548e63))return;VisuMZ[_0x3af84c(0x5fb)]['Game_Temp_setDestination'][_0x3af84c(0x558)](this,_0x45b325,_0x548e63);},Game_Temp[_0xa852ab(0x410)][_0xa852ab(0x405)]=function(_0x2e1ca5,_0x46e69d){const _0x135fdf=_0xa852ab,_0x5338a5=$gameMap[_0x135fdf(0x5bd)](_0x2e1ca5,_0x46e69d);for(const _0x27eabb of _0x5338a5){if(_0x27eabb&&_0x27eabb[_0x135fdf(0x6d3)]())return _0x27eabb[_0x135fdf(0x23a)](),!![];}return TouchInput[_0x135fdf(0x2c6)]()&&_0x5338a5['length']>0x0&&_0x5338a5['some'](_0x472a74=>_0x472a74&&_0x472a74[_0x135fdf(0x69e)]())&&TouchInput[_0x135fdf(0x296)](),![];},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x69e)]=function(){const _0x550e60=_0xa852ab;if(this[_0x550e60(0x237)])return![];if(!this[_0x550e60(0x543)]())return![];if(!this[_0x550e60(0x22a)]())return![];let _0x4ab840=this['list']()[_0x550e60(0x3b0)]();return _0x4ab840=_0x4ab840[_0x550e60(0x3ea)](_0x1cefda=>![0x0,0x6c,0x198][_0x550e60(0x37c)](_0x1cefda[_0x550e60(0x30b)])),_0x4ab840[_0x550e60(0x4d9)]>0x0;},Game_Temp[_0xa852ab(0x410)][_0xa852ab(0x46c)]=function(_0x428748){const _0xb23710=_0xa852ab;this[_0xb23710(0x208)]=_0x428748;},Game_Temp[_0xa852ab(0x410)]['getLastPluginCommandInterpreter']=function(){const _0x3a5efe=_0xa852ab;return this[_0x3a5efe(0x208)];},Game_Temp['prototype'][_0xa852ab(0x5a0)]=function(_0x19947a){const _0x58caa3=_0xa852ab;this[_0x58caa3(0x673)]=_0x19947a;},Game_Temp['prototype'][_0xa852ab(0x4b9)]=function(){this['_selfTarget']=undefined;},Game_Temp[_0xa852ab(0x410)][_0xa852ab(0x489)]=function(){return this['_selfTarget'];},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x37b)]=Game_System[_0xa852ab(0x410)][_0xa852ab(0x6b7)],Game_System[_0xa852ab(0x410)]['initialize']=function(){const _0x3f82d9=_0xa852ab;VisuMZ[_0x3f82d9(0x5fb)][_0x3f82d9(0x37b)][_0x3f82d9(0x558)](this),this[_0x3f82d9(0x6e1)](),this[_0x3f82d9(0x536)]();},Game_System[_0xa852ab(0x410)][_0xa852ab(0x6e1)]=function(){const _0x2f8ada=_0xa852ab;this[_0x2f8ada(0x4c9)]={'DashingEnable':!![],'EventAutoMovement':!![],'VisibleEventLabels':!![]},this[_0x2f8ada(0x4a7)]={},this['_MapSpawnedEventData']=[],this[_0x2f8ada(0x470)]={},this[_0x2f8ada(0x28b)]={},this[_0x2f8ada(0x2ba)]=![],this[_0x2f8ada(0x41c)]=_0x2f8ada(0x66b);},Game_System['prototype'][_0xa852ab(0x283)]=function(){const _0xa9d2bc=_0xa852ab;if(this[_0xa9d2bc(0x4c9)]===undefined)this[_0xa9d2bc(0x6e1)]();if(this[_0xa9d2bc(0x4c9)][_0xa9d2bc(0x3ef)]===undefined)this['initEventsMoveCore']();return this[_0xa9d2bc(0x4c9)][_0xa9d2bc(0x3ef)];},Game_System[_0xa852ab(0x410)][_0xa852ab(0x5c2)]=function(_0x59bf89){const _0xecebf3=_0xa852ab;if(this[_0xecebf3(0x4c9)]===undefined)this['initEventsMoveCore']();if(this[_0xecebf3(0x4c9)]['DashingEnable']===undefined)this[_0xecebf3(0x6e1)]();this[_0xecebf3(0x4c9)][_0xecebf3(0x3ef)]=_0x59bf89;},Game_System[_0xa852ab(0x410)][_0xa852ab(0x631)]=function(){const _0x447518=_0xa852ab;if(this[_0x447518(0x4c9)]===undefined)this[_0x447518(0x6e1)]();if(this['_EventsMoveCoreSettings'][_0x447518(0x61a)]===undefined)this[_0x447518(0x6e1)]();return this['_EventsMoveCoreSettings'][_0x447518(0x61a)];},Game_System['prototype']['setAllowEventAutoMovement']=function(_0x3f63b9){const _0x2d3985=_0xa852ab;if(this['_EventsMoveCoreSettings']===undefined)this[_0x2d3985(0x6e1)]();if(this['_EventsMoveCoreSettings'][_0x2d3985(0x61a)]===undefined)this['initEventsMoveCore']();this[_0x2d3985(0x4c9)][_0x2d3985(0x61a)]=_0x3f63b9;},Game_System[_0xa852ab(0x410)][_0xa852ab(0x589)]=function(){const _0x4a3c4d=_0xa852ab;if(this[_0x4a3c4d(0x4c9)]===undefined)this[_0x4a3c4d(0x6e1)]();if(this['_EventsMoveCoreSettings'][_0x4a3c4d(0x438)]===undefined)this[_0x4a3c4d(0x6e1)]();return this[_0x4a3c4d(0x4c9)][_0x4a3c4d(0x438)];},Game_System[_0xa852ab(0x410)][_0xa852ab(0x28f)]=function(_0x593958){const _0x475632=_0xa852ab;if(this[_0x475632(0x4c9)]===undefined)this['initEventsMoveCore']();if(this['_EventsMoveCoreSettings']['VisibleEventLabels']===undefined)this[_0x475632(0x6e1)]();this['_EventsMoveCoreSettings'][_0x475632(0x438)]=_0x593958;},Game_System['prototype'][_0xa852ab(0x491)]=function(){const _0x4ef0b6=_0xa852ab;return this[_0x4ef0b6(0x2ba)]===undefined&&(this[_0x4ef0b6(0x2ba)]=![]),this[_0x4ef0b6(0x2ba)];},Game_System[_0xa852ab(0x410)][_0xa852ab(0x270)]=function(_0x2ade2f){const _0x143df0=_0xa852ab;this[_0x143df0(0x2ba)]=_0x2ade2f;},Game_System[_0xa852ab(0x410)][_0xa852ab(0x538)]=function(){const _0xb4369b=_0xa852ab;return this[_0xb4369b(0x41c)];},Game_System[_0xa852ab(0x410)][_0xa852ab(0x499)]=function(_0x537f9f){const _0x104176=_0xa852ab;this[_0x104176(0x41c)]=String(_0x537f9f)[_0x104176(0x2cf)]()[_0x104176(0x572)]();},Game_System['prototype'][_0xa852ab(0x5a1)]=function(_0x29bb92){const _0x259c32=_0xa852ab;if(this['_EventIcons']===undefined)this['initEventsMoveCore']();if(!_0x29bb92)return null;if(_0x29bb92===$gamePlayer)return this[_0x259c32(0x4a7)][_0x259c32(0x60b)];else{const _0x5d761f=VisuMZ[_0x259c32(0x5fb)][_0x259c32(0x4d4)],_0x17c5cd=_0x259c32(0x226)[_0x259c32(0x58f)](_0x29bb92[_0x259c32(0x1f1)],_0x29bb92[_0x259c32(0x268)]);return this[_0x259c32(0x4a7)][_0x17c5cd]=this[_0x259c32(0x4a7)][_0x17c5cd]||{'iconIndex':0x0,'bufferX':_0x5d761f[_0x259c32(0x3e9)]['BufferX'],'bufferY':_0x5d761f['Icon'][_0x259c32(0x39c)],'blendMode':_0x5d761f[_0x259c32(0x3e9)][_0x259c32(0x3c9)]},this[_0x259c32(0x4a7)][_0x17c5cd];}},Game_System[_0xa852ab(0x410)][_0xa852ab(0x532)]=function(_0x1e8b7d,_0x15a065,_0x4532bc,_0x428467,_0x49e96a){const _0x31c6a5=_0xa852ab;if(this[_0x31c6a5(0x4a7)]===undefined)this[_0x31c6a5(0x6e1)]();const _0x30852d=_0x1e8b7d===$gamePlayer?_0x31c6a5(0x60b):'Map%1-Event%2'[_0x31c6a5(0x58f)](_0x1e8b7d['_mapId'],_0x1e8b7d[_0x31c6a5(0x268)]);this[_0x31c6a5(0x4a7)][_0x30852d]={'iconIndex':_0x15a065,'bufferX':_0x4532bc,'bufferY':_0x428467,'blendMode':_0x49e96a};},Game_System[_0xa852ab(0x410)][_0xa852ab(0x35e)]=function(_0x33800f,_0x1cc0e8,_0xcd5b0c,_0x336bf0,_0x4d5e2e,_0x2975bd,_0x441ebd){const _0x2e4acf=_0xa852ab;if(this[_0x2e4acf(0x4a7)]===undefined)this[_0x2e4acf(0x6e1)]();const _0x4917e2=_0x2e4acf(0x226)[_0x2e4acf(0x58f)](_0x33800f,_0x1cc0e8);this[_0x2e4acf(0x4a7)][_0x4917e2]={'iconIndex':_0xcd5b0c,'forced':_0x441ebd,'bufferX':_0x336bf0,'bufferY':_0x4d5e2e,'blendMode':_0x2975bd};},Game_System['prototype'][_0xa852ab(0x55b)]=function(_0x37bccc){const _0x2564b0=_0xa852ab;if(this[_0x2564b0(0x4a7)]===undefined)this[_0x2564b0(0x6e1)]();if(!_0x37bccc)return null;_0x37bccc===$gamePlayer?delete this[_0x2564b0(0x4a7)][_0x2564b0(0x60b)]:this['deleteIconsOnEventsDataKey'](_0x37bccc['_mapId'],_0x37bccc[_0x2564b0(0x268)]);},Game_System[_0xa852ab(0x410)][_0xa852ab(0x53f)]=function(_0x421064,_0x2c047a){const _0x481c32=_0xa852ab;if(this[_0x481c32(0x4a7)]===undefined)this[_0x481c32(0x6e1)]();this['setEventIconDataKey'](_0x421064,_0x2c047a,-0x1,0x0,0x0,0x0,![]);},Game_System[_0xa852ab(0x410)]['resetIconsOnEventsData']=function(_0x3b4c79){const _0x674311=_0xa852ab;if(this[_0x674311(0x4a7)]===undefined)this['initEventsMoveCore']();if(!_0x3b4c79)return null;_0x3b4c79===$gamePlayer?delete this[_0x674311(0x4a7)][_0x674311(0x60b)]:this[_0x674311(0x5e1)](_0x3b4c79[_0x674311(0x1f1)],_0x3b4c79[_0x674311(0x268)]);},Game_System[_0xa852ab(0x410)][_0xa852ab(0x5e1)]=function(_0x6a406d,_0x2b92dd){const _0x2386cb=_0xa852ab;if(this[_0x2386cb(0x4a7)]===undefined)this[_0x2386cb(0x6e1)]();const _0x4de5bb=_0x2386cb(0x226)[_0x2386cb(0x58f)](_0x6a406d,_0x2b92dd);if(this[_0x2386cb(0x4a7)][_0x4de5bb]){if(this[_0x2386cb(0x4a7)][_0x4de5bb][_0x2386cb(0x439)]<0x0)return;if(this[_0x2386cb(0x4a7)][_0x4de5bb]['forced'])return;}delete this[_0x2386cb(0x4a7)][_0x4de5bb];},Game_System[_0xa852ab(0x410)][_0xa852ab(0x3a2)]=function(_0x346bd3,_0x589fc7){const _0x23944a=_0xa852ab;if(this[_0x23944a(0x4a7)]===undefined)this[_0x23944a(0x6e1)]();const _0x1581b8='Map%1-Event%2'[_0x23944a(0x58f)](_0x346bd3,_0x589fc7);delete this[_0x23944a(0x4a7)][_0x1581b8];if(_0x346bd3!==$gameMap[_0x23944a(0x4c3)]())return;const _0x19119d=$gameMap[_0x23944a(0x6b2)](_0x589fc7);if(!_0x19119d)return;_0x19119d[_0x23944a(0x666)]();},Game_System[_0xa852ab(0x410)]['getSavedEventLocation']=function(_0x16786a){const _0x51facb=_0xa852ab;if(this[_0x51facb(0x28b)]===undefined)this[_0x51facb(0x6e1)]();if(!_0x16786a)return null;const _0x5b9408=_0x51facb(0x226)[_0x51facb(0x58f)](_0x16786a['_mapId'],_0x16786a[_0x51facb(0x268)]);return this['_SavedEventLocations'][_0x5b9408];},Game_System[_0xa852ab(0x410)][_0xa852ab(0x2d0)]=function(_0x298f60){const _0x5297b2=_0xa852ab;if(this[_0x5297b2(0x28b)]===undefined)this['initEventsMoveCore']();if(!_0x298f60)return;const _0x26b615=_0x5297b2(0x226)[_0x5297b2(0x58f)](_0x298f60['_mapId'],_0x298f60['_eventId']);this[_0x5297b2(0x28b)][_0x26b615]={'direction':_0x298f60[_0x5297b2(0x2be)](),'x':Math[_0x5297b2(0x5e5)](_0x298f60['x']),'y':Math[_0x5297b2(0x5e5)](_0x298f60['y']),'pageIndex':_0x298f60[_0x5297b2(0x625)],'moveRouteIndex':_0x298f60[_0x5297b2(0x670)]};},Game_System['prototype']['deleteSavedEventLocation']=function(_0x397a07){const _0x486296=_0xa852ab;if(this[_0x486296(0x28b)]===undefined)this[_0x486296(0x6e1)]();if(!_0x397a07)return;this['deleteSavedEventLocationKey'](_0x397a07[_0x486296(0x1f1)],_0x397a07[_0x486296(0x268)]);},Game_System['prototype']['deleteSavedEventLocationKey']=function(_0xb6fd31,_0x31f704){const _0x41a4d6=_0xa852ab;if(this[_0x41a4d6(0x28b)]===undefined)this[_0x41a4d6(0x6e1)]();const _0x461727=_0x41a4d6(0x226)[_0x41a4d6(0x58f)](_0xb6fd31,_0x31f704);delete this[_0x41a4d6(0x28b)][_0x461727];},Game_System[_0xa852ab(0x410)][_0xa852ab(0x2ec)]=function(_0x10557e,_0x8d881f,_0x2052c0,_0x385f73,_0x452228,_0x523f17,_0x4acabf){const _0x1ee6c3=_0xa852ab;if(this['_SavedEventLocations']===undefined)this['initEventsMoveCore']();const _0xb7b1e5=_0x1ee6c3(0x226)[_0x1ee6c3(0x58f)](_0x10557e,_0x8d881f);this['_SavedEventLocations'][_0xb7b1e5]={'direction':_0x452228,'x':Math[_0x1ee6c3(0x5e5)](_0x2052c0),'y':Math['round'](_0x385f73),'pageIndex':_0x523f17,'moveRouteIndex':_0x4acabf};},Game_System[_0xa852ab(0x410)][_0xa852ab(0x587)]=function(_0x24d8a3){const _0x3343ff=_0xa852ab;if(this[_0x3343ff(0x470)]===undefined)this[_0x3343ff(0x6e1)]();if(!_0x24d8a3)return;const _0x5b86c4='Map%1-Event%2'['format'](_0x24d8a3[_0x3343ff(0x1f1)],_0x24d8a3['_eventId']);return this[_0x3343ff(0x470)][_0x5b86c4];},Game_System[_0xa852ab(0x410)][_0xa852ab(0x5b2)]=function(_0x2b6bc0,_0x47b503,_0x40e1ae,_0x5ca692,_0x275434){const _0x41f8f2=_0xa852ab;if(this[_0x41f8f2(0x470)]===undefined)this['initEventsMoveCore']();const _0x357e71=_0x41f8f2(0x226)[_0x41f8f2(0x58f)](_0x2b6bc0,_0x47b503);this[_0x41f8f2(0x470)][_0x357e71]={'template':_0x40e1ae,'mapId':_0x5ca692,'eventId':_0x275434};},Game_System['prototype'][_0xa852ab(0x622)]=function(_0x96ede4,_0x5a6c6d){const _0x18bf57=_0xa852ab;if(this['_PreservedEventMorphData']===undefined)this[_0x18bf57(0x6e1)]();const _0x56af9a=_0x18bf57(0x226)[_0x18bf57(0x58f)](_0x96ede4,_0x5a6c6d);delete this[_0x18bf57(0x470)][_0x56af9a];},Game_System[_0xa852ab(0x410)][_0xa852ab(0x6a5)]=function(_0x4b2dc6){const _0x22f37a=_0xa852ab;if(this[_0x22f37a(0x3d5)]===undefined)this[_0x22f37a(0x6e1)]();return this['_MapSpawnedEventData'][_0x4b2dc6]=this[_0x22f37a(0x3d5)][_0x4b2dc6]||[],this[_0x22f37a(0x3d5)][_0x4b2dc6];},Game_System['prototype'][_0xa852ab(0x203)]=function(_0x29d8fa){const _0x3b2689=_0xa852ab,_0xe79df1=this[_0x3b2689(0x6a5)](_0x29d8fa);for(const _0x2bfc60 of _0xe79df1){if(!_0x2bfc60)continue;if(_0x2bfc60[_0x3b2689(0x672)])continue;const _0x4d1c60=_0xe79df1['indexOf'](_0x2bfc60);_0xe79df1[_0x4d1c60]=null;}},Game_System[_0xa852ab(0x410)][_0xa852ab(0x536)]=function(){const _0x20e20e=_0xa852ab;this[_0x20e20e(0x584)]=0x0,this[_0x20e20e(0x381)]=![];},Game_System[_0xa852ab(0x410)]['getControlledFollowerID']=function(){const _0x7ef9b9=_0xa852ab;if(this[_0x7ef9b9(0x584)]===undefined)this[_0x7ef9b9(0x536)]();return this[_0x7ef9b9(0x584)];},Game_System[_0xa852ab(0x410)][_0xa852ab(0x608)]=function(_0x5cbddf){const _0x17726f=_0xa852ab;if(this[_0x17726f(0x584)]===undefined)this[_0x17726f(0x536)]();this['_followerControlID']=_0x5cbddf;;},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x4b2)]=Game_Interpreter[_0xa852ab(0x410)]['character'],Game_Interpreter[_0xa852ab(0x410)][_0xa852ab(0x3c4)]=function(_0x29337b){const _0x1870dd=_0xa852ab;if(!$gameParty[_0x1870dd(0x2a0)]()&&_0x29337b<0x0){let _0x5e0032=$gameSystem[_0x1870dd(0x3c1)]();if(_0x5e0032>0x0)return $gamePlayer['followers']()[_0x1870dd(0x51a)](_0x5e0032-0x1);}return VisuMZ[_0x1870dd(0x5fb)][_0x1870dd(0x4b2)][_0x1870dd(0x558)](this,_0x29337b);},Game_System[_0xa852ab(0x410)][_0xa852ab(0x378)]=function(){const _0x24f87d=_0xa852ab;if(this[_0x24f87d(0x381)]===undefined)this['initFollowerController']();return this[_0x24f87d(0x381)];},Game_System['prototype']['setStopFollowerChasing']=function(_0x154a91){const _0x37d237=_0xa852ab;if(this[_0x37d237(0x381)]===undefined)this['initFollowerController']();this['_followerChaseOff']=_0x154a91;;},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x52d)]=Game_Followers[_0xa852ab(0x410)]['jumpAll'],Game_Followers[_0xa852ab(0x410)][_0xa852ab(0x4d5)]=function(){const _0x33d1ed=_0xa852ab;if($gameSystem[_0x33d1ed(0x378)]())return;VisuMZ['EventsMoveCore'][_0x33d1ed(0x52d)][_0x33d1ed(0x558)](this);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x1f4)]=Game_Timer[_0xa852ab(0x410)][_0xa852ab(0x6b7)],Game_Timer[_0xa852ab(0x410)][_0xa852ab(0x6b7)]=function(){const _0x501a17=_0xa852ab;VisuMZ[_0x501a17(0x5fb)][_0x501a17(0x1f4)][_0x501a17(0x558)](this),this[_0x501a17(0x6e1)]();},Game_Timer[_0xa852ab(0x410)][_0xa852ab(0x6e1)]=function(){const _0x2fd759=_0xa852ab;this['_paused']=![],this[_0x2fd759(0x5f7)]=-0x1,this[_0x2fd759(0x204)]=0x0;},Game_Timer[_0xa852ab(0x410)]['update']=function(_0x5a727d){const _0xab34bc=_0xa852ab;if(!_0x5a727d)return;if(!this['_working'])return;if(this[_0xab34bc(0x570)])return;if(this['_frames']<=0x0)return;if(this[_0xab34bc(0x5f7)]===undefined)this[_0xab34bc(0x6e1)]();this['_frames']+=this[_0xab34bc(0x5f7)],this['_frames']<=0x0&&this['onExpire']();},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x22d)]=Game_Timer[_0xa852ab(0x410)][_0xa852ab(0x3be)],Game_Timer['prototype'][_0xa852ab(0x3be)]=function(_0x3d49f2){const _0x5a0a71=_0xa852ab;VisuMZ[_0x5a0a71(0x5fb)][_0x5a0a71(0x22d)][_0x5a0a71(0x558)](this,_0x3d49f2);if(this['_paused']===undefined)this['initEventsMoveCore']();this[_0x5a0a71(0x570)]=![];},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x519)]=Game_Timer[_0xa852ab(0x410)][_0xa852ab(0x3d6)],Game_Timer[_0xa852ab(0x410)][_0xa852ab(0x3d6)]=function(){const _0x246897=_0xa852ab;VisuMZ[_0x246897(0x5fb)][_0x246897(0x519)][_0x246897(0x558)](this);if(this['_paused']===undefined)this['initEventsMoveCore']();this[_0x246897(0x570)]=![];},Game_Timer['prototype']['pause']=function(){const _0x294664=_0xa852ab;if(this['_frames']<=0x0)return;this[_0x294664(0x570)]=!![],this['_working']=!![];},Game_Timer[_0xa852ab(0x410)][_0xa852ab(0x5bb)]=function(){const _0x35bd63=_0xa852ab;if(this['_frames']<=0x0)return;this[_0x35bd63(0x570)]=![],this['_working']=!![];},Game_Timer[_0xa852ab(0x410)][_0xa852ab(0x2b7)]=function(_0x2a6435){const _0x32af5c=_0xa852ab;this[_0x32af5c(0x3d4)]=this[_0x32af5c(0x3d4)]||0x0,this[_0x32af5c(0x3d4)]+=_0x2a6435,this[_0x32af5c(0x305)]=!![],this[_0x32af5c(0x3d4)]=Math[_0x32af5c(0x23b)](0x1,this[_0x32af5c(0x3d4)]);},Game_Timer[_0xa852ab(0x410)]['setFrames']=function(_0x54897f){const _0x46d3a2=_0xa852ab;this[_0x46d3a2(0x3d4)]=this[_0x46d3a2(0x3d4)]||0x0,this['_frames']=_0x54897f,this[_0x46d3a2(0x305)]=!![],this[_0x46d3a2(0x3d4)]=Math[_0x46d3a2(0x23b)](0x1,this['_frames']);},Game_Timer[_0xa852ab(0x410)]['changeSpeed']=function(_0x4ba14a){const _0x29bb56=_0xa852ab;this['_speed']=_0x4ba14a,this['_working']=!![],_0x4ba14a>0x0&&(this['_frames']=Math[_0x29bb56(0x23b)](this[_0x29bb56(0x3d4)],0x1));},Game_Timer[_0xa852ab(0x410)]['setCommonEvent']=function(_0x7e3664){const _0x8a3d8=_0xa852ab;if(this[_0x8a3d8(0x204)]===undefined)this[_0x8a3d8(0x6e1)]();this[_0x8a3d8(0x204)]=_0x7e3664;},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x5b1)]=Game_Timer[_0xa852ab(0x410)]['onExpire'],Game_Timer[_0xa852ab(0x410)][_0xa852ab(0x353)]=function(){const _0x1f80d7=_0xa852ab;if(this[_0x1f80d7(0x204)]===undefined)this[_0x1f80d7(0x6e1)]();this[_0x1f80d7(0x204)]?$gameTemp[_0x1f80d7(0x4df)](this[_0x1f80d7(0x204)]):VisuMZ['EventsMoveCore'][_0x1f80d7(0x5b1)][_0x1f80d7(0x558)](this);},VisuMZ[_0xa852ab(0x5fb)]['Game_Message_add']=Game_Message[_0xa852ab(0x410)][_0xa852ab(0x56f)],Game_Message['prototype'][_0xa852ab(0x56f)]=function(_0x2c51a1){const _0x395445=_0xa852ab;VisuMZ[_0x395445(0x5fb)]['Game_Message_add']['call'](this,_0x2c51a1),this[_0x395445(0x49a)]=$gameTemp[_0x395445(0x489)]();},Game_Message[_0xa852ab(0x410)][_0xa852ab(0x59f)]=function(){const _0x594c92=_0xa852ab;$gameTemp[_0x594c92(0x5a0)](this['_selfEvent']);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x39e)]=Game_Switches[_0xa852ab(0x410)][_0xa852ab(0x420)],Game_Switches[_0xa852ab(0x410)][_0xa852ab(0x420)]=function(_0x4fe37a){const _0x53225e=_0xa852ab;if(typeof _0x4fe37a===_0x53225e(0x571)){const _0x507d7d=_0x4fe37a[_0x53225e(0x20e)]()[_0x53225e(0x572)]();if(!Object[_0x53225e(0x410)][_0x53225e(0x32d)]['call'](VisuMZ[_0x53225e(0x6a6)],_0x507d7d))return console['warn'](_0x53225e(0x335)[_0x53225e(0x58f)](_0x507d7d)),![];_0x4fe37a=VisuMZ['RefSwitches'][_0x507d7d];}if(DataManager['isAdvancedSwitch'](_0x4fe37a))return!!this[_0x53225e(0x520)](_0x4fe37a);else{if(DataManager[_0x53225e(0x694)](_0x4fe37a))return!!this[_0x53225e(0x443)](_0x4fe37a);else return DataManager[_0x53225e(0x52b)](_0x4fe37a)?!!this[_0x53225e(0x3e1)](_0x4fe37a):VisuMZ['EventsMoveCore']['Game_Switches_value'][_0x53225e(0x558)](this,_0x4fe37a);}},Game_Switches['advancedFunc']={},Game_Switches[_0xa852ab(0x410)][_0xa852ab(0x520)]=function(_0x41308d){const _0x1c862f=_0xa852ab;if(!Game_Switches[_0x1c862f(0x57d)][_0x41308d]){const _0x55dea2=String($dataSystem[_0x1c862f(0x3f6)][_0x41308d]||'')['match'](/<JS>\s*([\s\S]*?)\s*<\/JS>/i),_0x4f9d57=_0x1c862f(0x332)['format'](_0x55dea2?String(_0x55dea2[0x1]):_0x1c862f(0x3f7));Game_Switches['advancedFunc'][_0x41308d]=new Function(_0x1c862f(0x5d8),_0x4f9d57);}const _0x28af35=$gameTemp['getSelfTarget']()||this;return Game_Switches[_0x1c862f(0x57d)][_0x41308d][_0x1c862f(0x558)](_0x28af35,_0x41308d);},Game_Switches[_0xa852ab(0x410)][_0xa852ab(0x443)]=function(_0xeba58a){const _0x22de75=_0xa852ab,_0x37b678=$gameTemp[_0x22de75(0x489)]()||this;if(!(_0x37b678 instanceof Game_Event))return VisuMZ[_0x22de75(0x5fb)][_0x22de75(0x39e)]['call'](this,_0xeba58a);else{const _0x4799ca=[_0x37b678[_0x22de75(0x1f1)],_0x37b678[_0x22de75(0x268)],'Self\x20Switch\x20%1'['format'](_0xeba58a)];return $gameSelfSwitches[_0x22de75(0x420)](_0x4799ca);}},Game_Switches[_0xa852ab(0x410)][_0xa852ab(0x3e1)]=function(_0xec6272){const _0x31b1e0=_0xa852ab,_0xd32e52=$gameMap?$gameMap[_0x31b1e0(0x4c3)]():0x0,_0xf85577=[0x0,0x0,'Map\x20%1\x20Switch\x20%2'[_0x31b1e0(0x58f)](_0xd32e52,_0xec6272)];return $gameSelfSwitches[_0x31b1e0(0x420)](_0xf85577);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x33a)]=Game_Switches['prototype'][_0xa852ab(0x5d6)],Game_Switches[_0xa852ab(0x410)][_0xa852ab(0x5d6)]=function(_0x495022,_0x48646e){const _0x42d5a3=_0xa852ab;if(typeof _0x495022===_0x42d5a3(0x571)){const _0xfbf7c3=_0x495022[_0x42d5a3(0x20e)]()[_0x42d5a3(0x572)]();if(!Object[_0x42d5a3(0x410)][_0x42d5a3(0x32d)][_0x42d5a3(0x558)](VisuMZ[_0x42d5a3(0x6a6)],_0xfbf7c3)){console[_0x42d5a3(0x355)](_0x42d5a3(0x335)['format'](_0xfbf7c3));return;}_0x495022=VisuMZ['RefSwitches'][_0xfbf7c3];}if(DataManager[_0x42d5a3(0x694)](_0x495022))this['setSelfValue'](_0x495022,_0x48646e);else DataManager[_0x42d5a3(0x52b)](_0x495022)?this['setMapValue'](_0x495022,_0x48646e):VisuMZ[_0x42d5a3(0x5fb)][_0x42d5a3(0x33a)][_0x42d5a3(0x558)](this,_0x495022,_0x48646e);},Game_Switches[_0xa852ab(0x410)][_0xa852ab(0x68b)]=function(_0x403c85,_0x45e58b){const _0x30a4f4=_0xa852ab,_0x2ba289=$gameTemp[_0x30a4f4(0x489)]()||this;if(!(_0x2ba289 instanceof Game_Event))VisuMZ[_0x30a4f4(0x5fb)]['Game_Switches_setValue']['call'](this,_0x403c85,_0x45e58b);else{const _0x35c822=[_0x2ba289['_mapId'],_0x2ba289['_eventId'],_0x30a4f4(0x6d4)[_0x30a4f4(0x58f)](_0x403c85)];$gameSelfSwitches[_0x30a4f4(0x5d6)](_0x35c822,_0x45e58b);}},Game_Switches[_0xa852ab(0x410)][_0xa852ab(0x26c)]=function(_0x54cd3c,_0x191828){const _0x5c7c97=_0xa852ab,_0xe97d4f=$gameMap?$gameMap[_0x5c7c97(0x4c3)]():0x0,_0x29370d=[0x0,0x0,'Map\x20%1\x20Switch\x20%2'['format'](_0xe97d4f,_0x54cd3c)];return $gameSelfSwitches[_0x5c7c97(0x5d6)](_0x29370d,_0x191828);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x4e6)]=Game_Variables[_0xa852ab(0x410)][_0xa852ab(0x420)],Game_Variables[_0xa852ab(0x410)][_0xa852ab(0x420)]=function(_0x2e96d4){const _0x4fa76b=_0xa852ab;if(typeof _0x2e96d4===_0x4fa76b(0x571)){const _0x4bbad6=_0x2e96d4[_0x4fa76b(0x20e)]()[_0x4fa76b(0x572)]();if(!Object[_0x4fa76b(0x410)][_0x4fa76b(0x32d)][_0x4fa76b(0x558)](VisuMZ[_0x4fa76b(0x48d)],_0x4bbad6))return console['warn'](_0x4fa76b(0x46b)[_0x4fa76b(0x58f)](_0x4bbad6)),0x0;_0x2e96d4=VisuMZ['RefVariables'][_0x4bbad6];}if(DataManager['isAdvancedVariable'](_0x2e96d4))return this['advancedValue'](_0x2e96d4);else{if(DataManager[_0x4fa76b(0x4ff)](_0x2e96d4))return this[_0x4fa76b(0x443)](_0x2e96d4);else return DataManager[_0x4fa76b(0x569)](_0x2e96d4)?this['mapValue'](_0x2e96d4):VisuMZ['EventsMoveCore'][_0x4fa76b(0x4e6)][_0x4fa76b(0x558)](this,_0x2e96d4);}},Game_Variables[_0xa852ab(0x57d)]={},Game_Variables[_0xa852ab(0x410)][_0xa852ab(0x520)]=function(_0x133a6c){const _0x58113f=_0xa852ab;if(!Game_Variables['advancedFunc'][_0x133a6c]){const _0x4a7293=String($dataSystem[_0x58113f(0x45b)][_0x133a6c]||'')[_0x58113f(0x57e)](/<JS>\s*([\s\S]*?)\s*<\/JS>/i),_0x10bf94='return\x20%1'[_0x58113f(0x58f)](_0x4a7293?String(_0x4a7293[0x1]):'0');Game_Variables[_0x58113f(0x57d)][_0x133a6c]=new Function(_0x58113f(0x496),_0x10bf94);}const _0x2f5469=$gameTemp['getSelfTarget']()||this;return Game_Variables['advancedFunc'][_0x133a6c][_0x58113f(0x558)](_0x2f5469,_0x133a6c);},Game_Variables['prototype']['selfValue']=function(_0x247ef1){const _0x4f2f39=_0xa852ab,_0x39ea6f=$gameTemp['getSelfTarget']()||this;if(!(_0x39ea6f instanceof Game_Event))return VisuMZ[_0x4f2f39(0x5fb)][_0x4f2f39(0x4e6)][_0x4f2f39(0x558)](this,_0x247ef1);else{const _0x910fe9=[_0x39ea6f[_0x4f2f39(0x1f1)],_0x39ea6f[_0x4f2f39(0x268)],_0x4f2f39(0x476)[_0x4f2f39(0x58f)](_0x247ef1)];return $gameSelfSwitches[_0x4f2f39(0x420)](_0x910fe9);}},Game_Variables[_0xa852ab(0x410)][_0xa852ab(0x3e1)]=function(_0x13baa6){const _0x2142fd=_0xa852ab,_0x2cab36=$gameMap?$gameMap[_0x2142fd(0x4c3)]():0x0,_0x11eee8=[0x0,0x0,'Map\x20%1\x20Variable\x20%2'[_0x2142fd(0x58f)](_0x2cab36,_0x13baa6)],_0x37529d=$gameSelfSwitches[_0x2142fd(0x420)](_0x11eee8);return _0x37529d===undefined?0x0:_0x37529d;},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x4a5)]=Game_Variables[_0xa852ab(0x410)]['setValue'],Game_Variables[_0xa852ab(0x410)][_0xa852ab(0x5d6)]=function(_0x54b459,_0x80cef8){const _0x4dd49a=_0xa852ab;if(typeof _0x54b459==='string'){const _0x47fd35=_0x54b459['toUpperCase']()[_0x4dd49a(0x572)]();if(!Object[_0x4dd49a(0x410)][_0x4dd49a(0x32d)][_0x4dd49a(0x558)](VisuMZ['RefVariables'],_0x47fd35)){console[_0x4dd49a(0x355)](_0x4dd49a(0x46b)[_0x4dd49a(0x58f)](_0x47fd35));return;}_0x54b459=VisuMZ['RefVariables'][_0x47fd35];}if(DataManager[_0x4dd49a(0x4ff)](_0x54b459))this[_0x4dd49a(0x68b)](_0x54b459,_0x80cef8);else DataManager[_0x4dd49a(0x569)](_0x54b459)?this['setMapValue'](_0x54b459,_0x80cef8):VisuMZ[_0x4dd49a(0x5fb)][_0x4dd49a(0x4a5)][_0x4dd49a(0x558)](this,_0x54b459,_0x80cef8);},Game_Variables[_0xa852ab(0x410)]['setSelfValue']=function(_0x9e934f,_0x1e4533){const _0xd69907=_0xa852ab,_0xd47e45=$gameTemp[_0xd69907(0x489)]()||this;if(!(_0xd47e45 instanceof Game_Event))VisuMZ[_0xd69907(0x5fb)]['Game_Variables_setValue'][_0xd69907(0x558)](this,_0x9e934f,_0x1e4533);else{const _0x35933f=[_0xd47e45[_0xd69907(0x1f1)],_0xd47e45['_eventId'],_0xd69907(0x476)[_0xd69907(0x58f)](_0x9e934f)];$gameSelfSwitches[_0xd69907(0x5d6)](_0x35933f,_0x1e4533);}},Game_Variables[_0xa852ab(0x410)][_0xa852ab(0x26c)]=function(_0x4b91ba,_0x2d5c46){const _0x1a2469=_0xa852ab,_0x2432c6=$gameMap?$gameMap[_0x1a2469(0x4c3)]():0x0,_0x11adc0=[0x0,0x0,_0x1a2469(0x246)[_0x1a2469(0x58f)](_0x2432c6,_0x4b91ba)];$gameSelfSwitches[_0x1a2469(0x5d6)](_0x11adc0,_0x2d5c46);},VisuMZ[_0xa852ab(0x5fb)]['Game_SelfSwitches_value']=Game_SelfSwitches[_0xa852ab(0x410)]['value'],Game_SelfSwitches['prototype'][_0xa852ab(0x420)]=function(_0x387a08){const _0x5a433f=_0xa852ab;if(_0x387a08[0x2][_0x5a433f(0x57e)](/(?:SELF|MAP)/i))return this['selfValue'](_0x387a08);else{return VisuMZ[_0x5a433f(0x5fb)][_0x5a433f(0x38d)][_0x5a433f(0x558)](this,_0x387a08);;}},Game_SelfSwitches[_0xa852ab(0x410)][_0xa852ab(0x443)]=function(_0x4ca397){const _0x3e4575=_0xa852ab;return _0x4ca397[0x2][_0x3e4575(0x57e)](/VAR/i)?this[_0x3e4575(0x62c)][_0x4ca397]||0x0:!!this[_0x3e4575(0x62c)][_0x4ca397];},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x257)]=Game_SelfSwitches[_0xa852ab(0x410)][_0xa852ab(0x5d6)],Game_SelfSwitches[_0xa852ab(0x410)][_0xa852ab(0x5d6)]=function(_0x336a3a,_0x5c4c86){const _0xdbc503=_0xa852ab;_0x336a3a[0x2][_0xdbc503(0x57e)](/(?:SELF|MAP)/i)?this[_0xdbc503(0x68b)](_0x336a3a,_0x5c4c86):VisuMZ[_0xdbc503(0x5fb)][_0xdbc503(0x257)][_0xdbc503(0x558)](this,_0x336a3a,_0x5c4c86);},Game_SelfSwitches['prototype']['setSelfValue']=function(_0x443be4,_0x1b2a6e){const _0x111f40=_0xa852ab;this[_0x111f40(0x62c)][_0x443be4]=_0x443be4[0x2][_0x111f40(0x57e)](/VAR/i)?_0x1b2a6e:!!_0x1b2a6e,this[_0x111f40(0x4e8)]();},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x211)]=Scene_Map[_0xa852ab(0x410)][_0xa852ab(0x6aa)],Scene_Map['prototype']['createDisplayObjects']=function(){const _0x1ed77a=_0xa852ab;$gameMap['resetExitSelfSwitches'](),VisuMZ['EventsMoveCore'][_0x1ed77a(0x211)][_0x1ed77a(0x558)](this);},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x3b6)]=function(){const _0x2b9751=_0xa852ab;if(this[_0x2b9751(0x398)]===this[_0x2b9751(0x4c3)]())return;this[_0x2b9751(0x398)]=this[_0x2b9751(0x4c3)](),this[_0x2b9751(0x3af)]=undefined;const _0x1d9a0e=this[_0x2b9751(0x2e3)]();for(const _0x53d54c of _0x1d9a0e){if(_0x53d54c)$gameSelfSwitches[_0x2b9751(0x541)](_0x53d54c);}},Game_SelfSwitches[_0xa852ab(0x410)][_0xa852ab(0x541)]=function(_0x102e83){const _0x4c533d=_0xa852ab;if(!_0x102e83)return;if(!_0x102e83[_0x4c533d(0x6b2)]())return;const _0x519818=_0x102e83[_0x4c533d(0x6b2)]()[_0x4c533d(0x28d)]||'';if(_0x519818[_0x4c533d(0x57e)](/<(?:EXIT RESET|EXIT|TEMP|TEMPORARY) (?:SELF|SELF SWITCH|SELF SWITCHES|SELF DATA)>/i)){const _0x17dd8f=_0x4c533d(0x3a7)[_0x4c533d(0x58f)]($gameMap[_0x4c533d(0x1f1)],_0x102e83[_0x4c533d(0x268)]),_0x47b18d=Object['keys'](this[_0x4c533d(0x62c)])[_0x4c533d(0x3ea)](_0x26a452=>_0x26a452[_0x4c533d(0x4e2)](_0x17dd8f));while(_0x47b18d[_0x4c533d(0x4d9)]>0x0){const _0xadb4e4=_0x47b18d[_0x4c533d(0x2fd)]();delete this['_data'][_0xadb4e4];}}},Game_SelfSwitches[_0xa852ab(0x410)][_0xa852ab(0x444)]=function(_0x37f830){const _0x5d2d1c=_0xa852ab,_0x43b5c3='%1,'[_0x5d2d1c(0x58f)]($gameMap[_0x5d2d1c(0x1f1)]),_0xfe7aa7=Object[_0x5d2d1c(0x3cd)](this['_data'])[_0x5d2d1c(0x3ea)](_0x1ce788=>_0x1ce788[_0x5d2d1c(0x4e2)](_0x43b5c3));while(_0xfe7aa7[_0x5d2d1c(0x4d9)]>0x0){const _0x3f24cf=_0xfe7aa7[_0x5d2d1c(0x2fd)]();delete this['_data'][_0x3f24cf];}_0x37f830===$gameMap[_0x5d2d1c(0x4c3)]()&&$gameMap[_0x5d2d1c(0x3e7)]();},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x3dc)]=Game_Enemy[_0xa852ab(0x410)][_0xa852ab(0x3da)],Game_Enemy[_0xa852ab(0x410)][_0xa852ab(0x3da)]=function(_0x35a573){const _0x3cf42e=_0xa852ab;$gameTemp[_0x3cf42e(0x5a0)](this);const _0x5aaa88=VisuMZ[_0x3cf42e(0x5fb)][_0x3cf42e(0x3dc)][_0x3cf42e(0x558)](this,_0x35a573);return $gameTemp[_0x3cf42e(0x4b9)](),_0x5aaa88;},VisuMZ[_0xa852ab(0x5fb)]['Game_Party_hasEncounterHalf']=Game_Party[_0xa852ab(0x410)]['hasEncounterHalf'],Game_Party[_0xa852ab(0x410)]['hasEncounterHalf']=function(){const _0x32478a=_0xa852ab;if(this[_0x32478a(0x498)]())return!![];return VisuMZ['EventsMoveCore']['Game_Party_hasEncounterHalf'][_0x32478a(0x558)](this);},Game_Party[_0xa852ab(0x410)][_0xa852ab(0x498)]=function(){const _0x9a84fc=_0xa852ab;if(this[_0x9a84fc(0x4be)])return![];return $isTileEncounterHalf($gamePlayer['x'],$gamePlayer['y']);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x2bb)]=Game_Party[_0xa852ab(0x410)][_0xa852ab(0x2e5)],Game_Party[_0xa852ab(0x410)][_0xa852ab(0x2e5)]=function(){const _0x2b3572=_0xa852ab;if(this[_0x2b3572(0x300)]())return!![];return VisuMZ[_0x2b3572(0x5fb)][_0x2b3572(0x2bb)][_0x2b3572(0x558)](this);},Game_Party[_0xa852ab(0x410)][_0xa852ab(0x300)]=function(){if(this['_checkEncounterRaw'])return![];return $isTileEncounterNone($gamePlayer['x'],$gamePlayer['y']);};var $isTileEncounterHalf=function(_0x2b798f,_0x474606){const _0xa4c20=_0xa852ab;if(!$gameMap)return![];_0x2b798f=Math[_0xa4c20(0x5e5)](_0x2b798f||0x0),_0x474606=Math[_0xa4c20(0x5e5)](_0x474606||0x0);const _0xdd0355=$gameMap[_0xa4c20(0x2e3)]();for(const _0x5eade9 of _0xdd0355){if(!_0x5eade9)continue;if(_0x5eade9['_erased'])continue;const _0x13d4f8=_0x5eade9[_0xa4c20(0x6c2)](!![]),_0x577781=_0x5eade9[_0xa4c20(0x242)](!![]);if($gameMap['checkEventProximity'](_0x2b798f,_0x474606,_0x5eade9,_0x13d4f8,_0x577781))return!![];}return![];},$isTileEncounterNone=function(_0xef75b8,_0x1c75d1){const _0x47035e=_0xa852ab;if(!$gameMap)return![];_0xef75b8=Math['round'](_0xef75b8||0x0),_0x1c75d1=Math['round'](_0x1c75d1||0x0);const _0x42b13f=$gameMap[_0x47035e(0x2e3)]();for(const _0x5608c3 of _0x42b13f){if(!_0x5608c3)continue;if(_0x5608c3['_erased'])continue;const _0x4bdeb5=_0x5608c3[_0x47035e(0x6c2)](![]),_0x58414b=_0x5608c3[_0x47035e(0x242)](![]);if($gameMap['checkEventProximity'](_0xef75b8,_0x1c75d1,_0x5608c3,_0x4bdeb5,_0x58414b))return!![];}return![];};function _0x4222(){const _0x52c7b3=['despawnEventId','_wholeDuration','WalkAllow','updatePeriodicRefresh','scale','isSceneMap','removeMorph','DashEnableToggle','checkActivationProximity','PlayerForbid','correctFacingDirection','registerSelfEvent','registerSelfTarget','getEventIconData','update','IconBufferY','setupFollowerVisibilityOverrides','_regionRules','_characterName','lastSpawnedEventID','initMembers','FRUSTRATION','SwitchGetSelfSwitchID','updateVisibility','DashModifier','delay','2392565ORFGyT','min','ShadowHideAllEvents','Game_Timer_onExpire','savePreservedMorphEventDataKey','Template','SILENCE','turnAwayFromCharacter','EventForbid','FontSize','command108','restoreSavedEventPosition','zoomScale','resume','regionId','eventsXy','MorphEventTo','Game_CharacterBase_screenY','setWaitMode','attachPictureSettings','setDashingEnabled','BufferX','_tilemap','ITEM','prepareSpawnedEventAtXY','updateText','setupEvents','Game_Follower_chaseCharacter','_event','RIGHT\x20TO\x20LEFT','meetsCPC','_needsPeriodicRefresh','CallEventSamePageName','setDestination','isEventOverloaded','startOffsetX','getAttachPictureBitmapHeight','FollowerIndex','isPreventSelfMovement','Game_Message_setItemChoice','setValue','Game_Event_checkEventTriggerAuto','switchId','delta','morphIntoTemplate','command357','updateSelfMovement','dashSpeedModifier','startAngle','RIGHT','spawnPreserved','resetIconsOnEventsDataKey','clearStepPattern','TurnInPlaceDelay','name','round','roundYWithDirection','Sprite_Character_setCharacterBitmap','Preserve','contentsOpacity','_shadowOpacity','RemovePreserve','pos','Game_Vehicle_isLandOk','isCollidedWithEvents','getInputDir8','bufferY','processMoveRouteJumpToCharacter','Region','reverseDir','setStopFollowerChasing','Operation','SlowerSpeed','_speed','MsgPopupPlayer','startMessage','followers','EventsMoveCore','createIconSprite','Game_CharacterBase_increaseSteps','MorphEventRemove','ship','endOffset','bufferX','FollowerSetTargetChase','visible','Game_CharacterBase_isTransparent','standing','General','visibleRange','setControlledFollowerID','Game_Player_checkEventTriggerThere','isEmptyCharacter','Player','SelfVariables','player','SLEEP','setOpacity','LOWER\x20RIGHT','endScale','updateWaitMode','_advancedSwitchVariable','updateScaleBase','updateStop','despawnAtXY','convertSelfVariableValuesInScriptCall','opacitySpeed','itemPadding','EventAutoMovement','COLLAPSE','processMoveRouteTeleportTo','slice','width','Game_Event_start','offsetX','_forceHideFollower','deletePreservedMorphEventDataKey','approach','Minutes','_pageIndex','jump','_settings','isShadowVisible','Game_Event_clearPageSettings','attachPictureBlendMode','eventsXyNt','_data','setAllowEventAutoMovement','setupSpawnTest','Value','screenTileY','isAllowEventAutoMovement','isAllowCharacterTilt','isPosing','Boat','checkAdvancedSwitchVariablePresent','_clickTrigger','isPassable','TargetSwitchId','MUSICNOTE','characterPatternYBasic','_direction','reverse\x20mimic','outlineColor','STRUCT','clearSpriteOffsets','Game_Troop_meetsConditions','_eventCopyData','isPlaytest','useCarryPoseForIcons','setFrame','setPattern','1163096fLEsDK','checkSmartEventCollision','tileWidth','USER-DEFINED\x203','Game_Player_executeMove','Button','moveAwayFromCharacter','pluginCommandCallEvent','VS8','copy','findDiagonalDirectionTo','_duration','processMoveRouteHugWall','isInsideLabelRange','setItemChoice','chaseCharacter','increaseSteps','timer','_scaleY','processMoveSynchReverseMimic','randomInt','Game_Player_checkEventTriggerHere','updatePose','isValid','updateAttachPictureSprite','processMoveCommandEventsMoveCore','SPIN\x20ANTICLOCKWISE','EventTimerExpireClear','_forceHidePlayer','Game_CharacterBase_canPass','Sprite_Balloon_setup','isJumping','setupPageSettings','processMoveCommand','spriteId','Game_CharacterBase_moveStraight','_screenActivation','default','textSizeEx','IconSet','SwitchId','executeMoveDir8','_moveRouteIndex','createLowerLayer','_spawnPreserved','_selfTarget','processMoveSynchCustom','clearPageSettings','Enable','ANGER','mimic','LIGHTBULB','BitmapSmoothing','vert\x20mirror','updateTextAngle','Game_Event_locate','Game_Interpreter_executeCommand','anchor','turnTowardPoint','LineHeight','sv\x20enemy','Game_Map_event','_moveSpeed','vertical\x20mirror','FollowerReset','maxSize','setupChild','Spriteset_Map_createLowerLayer','getDirectionFromPoint','setSelfValue','replace','pattern','_isCharacterSpriteSheetInvisible','SPIN\x20CLOCKWISE','EnableTurnInPlace','moveDiagonally','UNTITLED','Game_Troop_meetsConditionsCPC','isSelfSwitch','switch2Valid','deleteSavedEventLocation','Game_Map_update','Game_CharacterBase_characterIndex','_lastAttachPictureType','setup','_startScaleY','referEvent','process_VisuMZ_EventsMoveCore_LoadTemplateMaps','isEventClickStopValid','Preloaded\x20Maps\x20and\x20add\x20in\x20Map\x20%1','filename','setupMorphEvent','Window_EventItem_onCancel','getDiagonalDestination','FollowerSetControl','getMapSpawnedEventData','RefSwitches','endOffsetY','MUSIC','CPC','createDisplayObjects','_randomMoveWeight','rangeType','forceDashing','_active','isAirship','_characterSprites','exit','event','updateMove','parent','bitmap','attachPictureMaxSize','initialize','Forbid','constructor','_lastMovedDirection','status','isTurnInPlace','isOnLadder','parse','processMoveSynchRandom','moveAwayFromPoint','createCharacterShadow','encounterProximityType','You\x20do\x20not\x20have\x20Map\x20%1\x20added\x20to\x20the\x20list\x0a','convertVariableValuesInScriptCall','Game_Event_update','updateEventLabelText','mirror\x20horz','right','splice','_attachPicture','EventTimerPause','SpawnEventAtRegion','clearAttachPictureSettings','_scene','Game_Temp_setDestination','posNt','getEventIconIndex','loadCPC','hasClickTrigger','Self\x20Switch\x20%1','isBusy','screenX','CarryPose','requestMapExitCustomJS','setupCopyEvent','turn180','_scaleX','_seconds','Game_Map_parallelCommonEvents','loadEnemy','PlayerMovementDiagonal','deleteSavedEventLocationKey','initEventsMoveCore','processMoveRouteFadeOut','Map\x20%1\x20Switch\x20%2','_moveAllowPlayerCollision','Scene_Map_createOnMapExit','WalkForbid','1194444KFpOmM','arc','deltaXFrom','checkValidEventerMap','Name','updateSaveEventLocation','abs','_mapId','Label','Game_CharacterBase_initMembers','Game_Timer_initialize','_encounterNoneProximity','Game_CharacterBase_bushDepth','concat','TemplateName','square','Collision','onCancel','getInputDirection','setChaseOff','_eventLabelOffsetX','DiagonalSpeedMultiplier','_eventLabelOffsetY','setNumberInput','$preloadedMap_%1','removeTemporaryMapSpawnedEvents','_expireCommonEvent','updateFadeOut','_fadeOutStart','VariableId','_lastPluginCommandInterpreter','OFF','LIGHT\x20BULB','mirror\x20vertical','HMPH','MapId','toUpperCase','Game_Event_meetsConditionsCPC','setupPlayerVisibilityOverrides','Scene_Map_createDisplayObjects','isDashing','_interpreter','processMoveRouteStepToCharacter','push','Game_Map_setupEvents','requestMapLoadCustomJS','_eventErased','onLoadSuccess','checkEventTriggerTouch','updateShadow','PageId','setBalloonPose','innerWidth','_offsetX','canStartLocalEvents','Game_Event_meetsConditions','_character','MsgPopupFollower','_alwaysUpdateMove','loadSystem','Map%1-Event%2','updateSpritePosition','ARRAYEVAL','ADDITIVE','list','processMoveRouteSetIndex','_textSprite','Game_Timer_start','Setting','createLabelWindowForTarget','despawnTerrainTags','checkCollisionKeywords','Game_Event_moveTypeRandom','roundXWithDirection','CallEvent','_eventPageIndex','createLabelWindows','_bypassClickStop','checkEventTriggerThere','_reflection','onClickTrigger','max','isInVehicle','processMoveRouteAnimation','_checkRelocateNotetag','resizeWindow','executeCommand','Game_CharacterBase_opacity','encounterProximityDistance','needsAttachPictureUpdate','Game_Vehicle_initMoveSpeed','_targetAngle','Map\x20%1\x20Variable\x20%2','opacityDelta','SelfSwitchID','updateFrame','_cpc','opacity','MessageCore','ShiftY','end','AdvancedSwitches','Game_Interpreter_PluginCommand','angle','FALSE','isLabelVisible','findTargetSprite','loadDataFile','hasStepAnime','Game_SelfSwitches_setValue','moveStraight','lastMovedDirection','resetFontSettings','Step2MapId','MobileEnabled','MessageText','attachPictureOffsetY','Game_Player_isDashing','clamp','setupEventsMoveCoreEffects','updateEventsMoveCoreTagChanges','IconIndex','Scene_Boot_onDatabaseLoaded','PlayerAllow','BULB','OperateValues','_eventId','bind','setupSpawnedEvents','getLastPluginCommandInterpreter','setMapValue','processMoveRouteJumpTo','characterIndexVS8','patternWidth','setPlayerControlDisable','PostMorphJS','hueShift','unlock','_labelWindows','_forceCarrying','_diagonalSupport','setTileBitmap','Scene_Map_startEncounterEffect','EVAL','airship','Game_CharacterBase_moveDiagonally','processMoveRouteStepTo','VisuMZ_0_CoreEngine','isMoving','_visiblePlayerY','_eventScreenY','setupSpawn','iconWidth','isDashingEnabled','ARRAYNUM','UPPER\x20LEFT','_target','mainFontSize','updateBitmapSmoothing','LEFT\x20TO\x20RIGHT','Visible','_SavedEventLocations','checkNeedForPeriodicRefresh','note','updateEventCustomZ','setEventLabelsVisible','Game_Player_isMapPassable','custom','ShadowLayer','PlayerIconChange','setMovementSuccess','Game_Event_updateSelfMovement','clear','pow','lastSpawnedEvent','labelWindowText','_noMovementShadow','isObjectCharacter','isMobileDevice','startEncounterEffect','_stepPattern','StopAutoMoveEvents','inBattle','isDashingAndMoving','Game_Event_canPass','_mirrorSprite','isBoat','fontFace','spawnEventId','EventId','updateFadeIn','setupEventsMoveCoreCommentTags','SwitchGetSelfSwitchABCD','offsetY','fontSize','of\x20Preloaded\x20Maps.\x0a\x0a','_selfTargetItemChoice','refresh','_targetX','Hours','ShadowShowAllEvents','target','StopAutoMoveMessages','Hidden','EventID','gainFrames','adjustMoveSynchOpacityDelta','enemy','_DisablePlayerControl','Game_Party_hasEncounterNone','_realY','refreshIfNeeded','direction','reverse\x20copy','_encounterEffectDuration','ConvertParams','SelfVariableID','PopupExtra','isInstanceOfSceneMap','processMoveSynchMimic','isLongPressed','_scaleBaseX','TargetVariableId','loadPicture','_waitMode','Game_CharacterBase_updatePattern','BoatSpeed','_inputTime','MOBILE_DIAGONAL_PATHFINDING','toLowerCase','saveEventLocation','MapSwitches','processEraseEncounterSpawn','executeCommonEvent','PreSpawnJS','registerCommand','_moveSynch','checkEventProximity','labelWindowRange','Game_Event_event','MUSIC\x20NOTE','activationProximityType','meetActivationRegionConditions','description','_stopCount','SpawnEventDespawnRegions','LEFT','setupRegionRestrictions','PosY','events','isPlayerForceHidden','hasEncounterNone','_tileExpand','defaultFontSize','HEART','destroy','isLandOk','regionList','createSaveEventLocationData','_currentArc','SCREEN','setupSaveEventLocations','processMoveRouteFadeIn','checkRegionEventTrigger','Game_Character_setMoveRoute','moveForward','VICTORY','characterPatternY','AutoBuffer','%1DockRegionOnly','setCharacterBitmap','updateMoveSynchDirection','requestBalloon','Movement','lock','shift','Visibility','executeCommandCommonEvent','isPlayerWithinEncounterNoneEvents','checkEventTriggerEventsMoveCore','_tileId','processMoveSynchApproach','DefaultShadow','_working','_proxyWindow','createShadow','frontY','updateTilt','SelfSwitchABCD','code','updatePosition','isDiagonalDirection','Sprite_Character_update','left','4LGEMWB','roundY','Game_CharacterBase_hasStepAnime','_opacity','checkEventTriggerAuto','VisibleRange','%1Allow','MOBILE_EVENT_LABELS','isAdvancedSwitch','SelfDataResetAll','addChild','Sprite_Balloon_updatePosition','moveTowardPoint','EXCLAMATION','createShadows','AllAllow','isWorking','Window_NumberInput_start','_eventIconSprite','setMoveRoute','initMoveSpeed','ShadowShowPlayer','initEventsMoveCoreSettings','startScaleX','areFollowersForceHidden','fadeOutDuration','startScale','onAfterLoad','isTriggerIn','hasOwnProperty','circle','eraseEvent','Dock','drawText','return\x20%1','_lastAttachPictureFilename','windowPadding','Unknown\x20switch\x20reference:\x20%1','switch1Id','createSpawnedEventWithData','hasMoveOnlyRegions','EventLocationSave','Game_Switches_setValue','_targetScaleY','Plugin\x20Parameters\x20>\x20Event\x20Template\x20Settings\x20>\x0a','updateEventsAndMovementCore','checkEventTriggerHere','diamond','createEventsMoveCoreTileMessagePopup','isShip','Scene_Load_onLoadSuccess','iconHeight','MoveAllSynchTargets','version','createTextSprite','isPressed','Game_Event_updateParallel','_lastAttachPictureMaxSize','Toggle','endScaleY','CallEventSamePageNumber','_offsetY','_visibleEventY','type','isActive','EventTimerResume','updateMoveSynch','onExpire','Game_CharacterBase_pattern','warn','sqrt','map','move','despawnRegions','EventLabelRefresh','updateShadowChanges','labelWindowRangeType','_commonEventId','setEventIconDataKey','TiltVert','Game_CharacterBase_isDashing','setDirection','Game_CharacterBase_setDirection','blendMode','canPass','SpawnEventDespawnEverything','TiltRight','turnRight90','ANNOYED','_eventMorphData','isEventsMoveCoreInvisible','blt','hasEventIcon','findProperPageIndex','CustomPageConditions','_spawnedEvents','FUNC','AdvancedVariables','KNEEL','tileCoordinates','template','createProxyWindow','processMoveRouteMoveUntilStop','isBattleTest','isStopFollowerChasing','eventId','canUpdate','Game_System_initialize','includes','_filename','_arcPeak','unlockEvent','isTransparent','_followerChaseOff','remove','Letter','VehicleForbid','_startY','firstSpawnedEvent','PostSpawnJS','_saveEventLocations','EventTimerFramesSet','attachPictureOffsetX','autoEventIconBuffer','despawnEverything','Game_SelfSwitches_value','isSaveEventLocation','_spriteOffsetX','updateEventIconSprite','getDirectionToPoint','isAnyEventStarting','isSpawnHitboxCollisionOk','processMoveRouteTeleportToCharacter','adjustY','startMapCommonEventOnOKTarget','Game_CharacterBase_direction','_lastSesetExitSelfSwitchesMapId','Stop','PageName','EventIconDelete','BufferY','_callEventMap','Game_Switches_value','JSON','drawTextEx','CPCsMet','restoreIconsOnEventsDataKey','findDirectionTo','Sprite_Character_initMembers','createDummyWindow','getSavedEventLocation','%1,%2,','ROUTE_SCRIPT','random','_cacheSystemVisible','22684epqkCn','VehicleDock','_fadeOutDuration','prepareSpawnedEventAtTerrainTag','_eventCache','clone','%1Dock','forceCarrying','_scaleBaseY','SpawnEventDespawnAtXY','Game_Message_setNumberInput','resetExitSelfSwitches','EventIconChange','endAngle','checkExistingEntitiesAt','processMoveRouteMoveToCharacter','column','isMapPassable','SWEAT','start','isMovementSucceeded','SPIN\x20ACW','getControlledFollowerID','text','rotation','character','EventIconChangeForced','Window_NumberInput_processOk','removeChild','MsgPopupEvent','BlendMode','RangeType','addLoadListener','IconBlendMode','keys','EventIconRestore','_forceShowPlayer','_saveEventLocation','Game_Follower_initialize','LOVE','attachPictureType','_frames','_MapSpawnedEventData','stop','_hue','enable','isSupportDiagonalMovement','meetsSwitchCondition','setupEventsMoveCoreNotetags','Game_Enemy_meetsSwitchCondition','updateTextPosition','ZZZ','isMoveOnlyRegionPassable','Passability','mapValue','isNormalPriority','_chaseOff','originalText','switch1Valid','execute','requestRefresh','updateOpacity','Icon','filter','_pose','Region%1','_isObjectCharacter','VisuMZ_2_DragonbonesUnion','DashingEnable','clearDestination','processMoveRouteMoveTo','104541gCiqtg','absDistance','fadeInDuration','clearPose','switches','false','_screenParallelOnce','updatePatternEventsMoveCore','MsgDuration','characterName','PosX','_randomHomeY','PlayerIconDelete','PathfindMobileEnabled','Allow','_customZ','parameters','EventTimerFramesGain','processMoveRoutePatternLock','isEventClickTriggered','_moveOnlyRegions','none','_hidden','OpacitySpeed','\x22Event\x20Popup:\x20Player\x22\x20plugin\x20command!','_eventOverload','getTileExpandData','Game_Map_refresh','updateScale','isRegionAllowPass','prototype','firstSpawnedEventID','Game_Event_checkEventTriggerTouch','screenY','loadSvEnemy','Game_CharacterBase_realMoveSpeed','turnAwayFromPoint','PostCopyJS','DIAGONAL_PATHFINDING_EVENT_LIMIT','padZero','DashOnLadder','ceil','_PlayerDiagonalSetting','clearEventCache','_startAngle','_eventSpawnData','value','MsgPopupTargetTile','isShadowShrink','6041025paVmeS','_visiblePlayerX','roundX','OffsetY','contents','IconBufferX','smooth','isInvisibleCharacter','deltaYFrom','processEraseEncounterEvents','_selfTargetNumberInput','isTile','Scene_Map_onMapLoadedEncErase','LOWER\x20LEFT','some','_lastAttachPictureScale','StrictCollision','isPassableByAnyDirection','_patternLocked','moveSynchType','cwX','VisibleEventLabels','iconIndex','<JS\x20ON\x20MAP\x20LOAD>\x20code\x20error','Window_Message_startMessage','USER-DEFINED\x205','Game_CharacterBase_screenX','duration','_spawnData','isEventTest','_startScaleX','height','selfValue','resetSelfSwitchesForMap','updateParallel','_encounterHalfProximity','Sprite_Character_setTileBitmap','needsUpdate','_pattern','_attachPictureSprite','horizontal\x20mirror','_targetY','VisuMZ_1_MessageCore\x20is\x20required\x20to\x20run\x20','locate','realMoveSpeed','_fadeInDuration','DEFAULT_SHIFT_Y','_visibleEventX','moveTowardCharacter','iconSize','Game_Character_forceMoveRoute','%1Forbid','Set\x20this\x20up\x20in\x20Events\x20&\x20Movement\x20Core\x27s\x0a','setBackgroundType','fadeDuration','_forceShowFollower','variables','Step2Preserve','_text','onOk','setCommonEvent','setCharacterSpriteSheetInvisible','_noEventMovementShadow','VisuMZ_Setup_Preload_Map','findPageName','updateTextScale','Chase','isOnScreen','areFollowersForceShown','padding','processMoveSynch','processMoveRouteSelfSwitch','Unknown\x20variable\x20reference:\x20%1','setLastPluginCommandInterpreter','startOffsetY','setFrames','mirror\x20horizontal','_PreservedEventMorphData','Game_Character_processMoveCommand','ShipSpeed','away','isEventRunning','Window_EventItem_onOk','Self\x20Variable\x20%1','MULTIPLY','processMoveRouteJumpForward','ShowShadows','_eventIcon','deleteEventLocation','Game_Event_isCollidedWithPlayerCharacters','cwY','setMoveSpeed','ARRAYFUNC','parallelCommonEvents','tileHeight','Game_Interpreter_updateWaitMode','isSpawnedEvent','CommonEventID','distance','<JS\x20ON\x20MAP\x20EXIT>\x20code\x20error','setImage','Spriteset_Map_createShadow','getSelfTarget','SPIN\x20CW','isSpriteVS8dir','makeDeepCopy','RefVariables','GetMoveSynchTarget','FollowerID','isAutoBufferIcon','isPlayerControlDisabled','deltaY','radius','pages','_addedHitbox','variableId','isSaveEventLocations','isPlayerWithinEncounterHalfEvents','setPlayerDiagonalSetting','_selfEvent','MoveRouteIndex','_CPCs','Step2EventId','Game_Player_getInputDirection','down','_events','onLoadAttachPicture','create','frontX','_screenActivated','Game_Variables_setValue','turnTowardCharacter','_EventIcons','_randomHomeX','isTransferring','activationRegionList','USER-DEFINED\x204','Game_Event_findProperPageIndex','OffsetX','processMoveRouteBalloon','_activationProximityAutoTriggerBypass','Game_Event_initialize','BalloonOffsetY','Game_Interpreter_character','attachPictureFilename','_periodicRefreshTimer','_targetScaleX','erase','_callEventData','EventLabelVisible','clearSelfTarget','indexOf','endOffsetX','metCPC','_type','_checkEncounterRaw','_dummyWindow','Seconds','updateVS8BalloonOffsets','meetActivationProximityConditions','mapId','_trigger','startMapCommonEventOnOK','isRegionDockable','_commonEvents','destinationY','_EventsMoveCoreSettings','Game_System_onAfterLoad','_erased','createSpawnedEvent','FaceSynchAllSynchTargets','split','conditions','_spriteOffsetY','bushDepth','processMoveSynchDirection','frameCount','Settings','jumpAll','PreloadedMaps','COBWEB','clearDashing','length','...','Game_Map_events','moveByInput','DOWN','floor','reserveCommonEvent','isOnRope','isVisible','startsWith','processDrawIcon','419500sMtLJs','resetPattern','Game_Variables_value','autosaveEventLocation','onChange','canPassDiagonally','_actuallyMoving','processMoveRouteStepFrom','moveSynchTarget','processSaveEventLocation','VisuMZ_1_MessageCore','hideShadows','MapID','posEventsMoveCore','morphInto','refreshEventLabels','SelfSwitches','getPose','setupAttachPictureBitmap','All','TerrainTag','isCollidedWithPlayerCharacters','isNearTheScreen','MapVariables','characterIndex','charAt','setPosition','isSelfVariable','hasAdvancedSwitchVariable','activationProximityDistance','Frames','QUESTION','forceMoveRoute','requestMapLoadCommonEvents','onMapLoaded','_screenParallel','processMoveSynchMirrorHorz','setupDiagonalSupport','processMoveSynchAway','EnableDashTilt','EventTemplates','_poseDuration','Map%1.json','Window_ScrollText_startMessage','boxWidth','_forceDashing','VehicleAllow','_eventScreenX','shiftY','checkEventsMoveCoreStringTags','_noFollowerMovementShadow','AirshipSpeed','NUM','Game_Timer_stop','follower','RegionTouch','_cacheVisibility','clearCarrying','getPosingCharacterIndex','processMoveRouteSelfVariable','advancedValue','log','createBitmap','_requestSaveEventLocation','_needsRefresh','Rope','hasDragonbones','isDestinationValid','_shadowGraphic','isAdvancedVariable','TiltLeft','isMapSwitch','shadowX','Game_Followers_jumpAll','drawing','ApplyPopupExtraSettings','adjustDir8MovementSpeed','processMoveRouteMoveRepeat','setEventIconData','isBigCharacter','setDiagonalDirection','executeMove','initFollowerController','region','getPlayerDiagonalSetting','pageId','isPlayerForceShown','getPosingCharacterPattern','TileX','startCallEvent','TerrainTags','deleteIconsOnEventsDataKey','mirror\x20vert','resetSelfSwitchesForEvent','setPose','page','_characterIndex','reverse','isDashDisabled','misc','hasEncounterHalf','adjustX','switch2Id','_activationProximity','terrainTag','updateHueShift','createAttachPictureSprite','_comments','picture','updateEventMirrorSprite','startOffset','meetsConditions','5owBIBO','getPosingCharacterDirection','createEventsMoveCoreMessagePopup','EventTimerSpeed','call','turnLeft90','vehicle','deleteIconsOnEventsData','shadowFilename','Game_Map_unlockEvent','STR','isRegionForbidPass','USER-DEFINED\x202','onDatabaseLoaded','Arc','Game_Player_increaseSteps','_shadowSprite','characterPatternYVS8','resetIconsOnEventsData','horz\x20mirror','forced','isMapVariable','_spriteset','initEventsMoveCoreEffects','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','updatePattern','Step1EventId','add','_paused','string','trim','isTargetEventValidForLabelWindow','setHue','EventAllow','processMoveSynchMirrorVert','determineCommonEventsWithCPC','deltaX','_startX','_labelWindow','startMapCommonEventOnTouch','isRunning','advancedFunc','match','ALLOW_LADDER_DASH','shadowY','HURT','Game_Event_setupPageSettings','TRUE','_followerControlID','AutoMoveEvents','timerText','getPreservedMorphEventData','updateAttachPictureBitmap','eventLabelsVisible','createContents','_screenZoomScale','hasCPCs','Step1MapId','fittingHeight','format','moveTypeRandom','Game_Followers_isVisible','FavorHorz','Game_CharacterBase_update'];_0x4222=function(){return _0x52c7b3;};return _0x4222();}VisuMZ[_0xa852ab(0x5fb)]['Game_Troop_meetsConditions']=Game_Troop[_0xa852ab(0x410)][_0xa852ab(0x553)],Game_Troop[_0xa852ab(0x410)]['meetsConditions']=function(_0xdc08b4){const _0x18a060=_0xa852ab;$gameTemp[_0x18a060(0x5a0)](this);const _0x919394=VisuMZ[_0x18a060(0x5fb)][_0x18a060(0x640)]['call'](this,_0xdc08b4);return $gameTemp[_0x18a060(0x4b9)](),_0x919394;},VisuMZ[_0xa852ab(0x5fb)]['Game_Map_setup']=Game_Map[_0xa852ab(0x410)][_0xa852ab(0x69a)],Game_Map['prototype'][_0xa852ab(0x69a)]=function(_0x2bcdd3){const _0x4cfecb=_0xa852ab;this[_0x4cfecb(0x203)](_0x2bcdd3),this[_0x4cfecb(0x41d)](),VisuMZ[_0x4cfecb(0x5fb)]['Game_Map_setup'][_0x4cfecb(0x558)](this,_0x2bcdd3),this[_0x4cfecb(0x41d)](),this[_0x4cfecb(0x509)](),this[_0x4cfecb(0x2e1)](),this['setupSaveEventLocations'](),this[_0x4cfecb(0x26a)](),this[_0x4cfecb(0x210)](),this[_0x4cfecb(0x5a4)](),this[_0x4cfecb(0x42c)](),this[_0x4cfecb(0x505)](),this[_0x4cfecb(0x217)](),this[_0x4cfecb(0x41d)]();},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x216)]=Game_Map[_0xa852ab(0x410)]['setupEvents'],Game_Map[_0xa852ab(0x410)][_0xa852ab(0x5c8)]=function(){const _0x3249ce=_0xa852ab;VisuMZ[_0x3249ce(0x5fb)]['Game_Map_setupEvents']['call'](this),this[_0x3249ce(0x2bd)]();},Game_Map['_eventOverloadThreshold']=0xc8,Game_Map[_0xa852ab(0x410)]['determineEventOverload']=function(){const _0x2ef22e=_0xa852ab,_0x5e8486=Game_Map['_eventOverloadThreshold'];this[_0x2ef22e(0x40b)]=this['events']()[_0x2ef22e(0x4d9)]>_0x5e8486;if(this[_0x2ef22e(0x40b)]&&$gameTemp[_0x2ef22e(0x642)]()){}},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x5d0)]=function(){return this['_eventOverload'];},Game_Map['prototype'][_0xa852ab(0x41d)]=function(){const _0x3c5e11=_0xa852ab;this[_0x3c5e11(0x3af)]=undefined;},Game_Map[_0xa852ab(0x410)]['setupDiagonalSupport']=function(){const _0x11c9c2=_0xa852ab;this[_0x11c9c2(0x276)]=VisuMZ[_0x11c9c2(0x5fb)]['Settings'][_0x11c9c2(0x2fb)]['EnableDir8'];const _0x576c2c=$dataMap[_0x11c9c2(0x28d)]||'';if(_0x576c2c[_0x11c9c2(0x57e)](/<DIAGONAL MOVEMENT: ON>/i))this[_0x11c9c2(0x276)]=!![];else _0x576c2c[_0x11c9c2(0x57e)](/<DIAGONAL MOVEMENT: OFF>/i)&&(this[_0x11c9c2(0x276)]=![]);},Game_Map['MOBILE_DIAGONAL_PATHFINDING']=VisuMZ[_0xa852ab(0x5fb)]['Settings'][_0xa852ab(0x2fb)][_0xa852ab(0x3ff)]??![],Game_Map[_0xa852ab(0x410)][_0xa852ab(0x3d9)]=function(){const _0x21da96=_0xa852ab;if(Utils[_0x21da96(0x29c)]()){if(!Game_Map[_0x21da96(0x2ce)])return![];}const _0x3ebf80=$gameSystem[_0x21da96(0x538)]();if(_0x3ebf80===_0x21da96(0x3d8))return!![];if(_0x3ebf80==='disable')return![];if(this['_diagonalSupport']===undefined)this['setupDiagonalSupport']();return this[_0x21da96(0x276)];},Game_Map['prototype'][_0xa852ab(0x233)]=function(_0x2ca294,_0x533c88){const _0x3bcbf6=_0xa852ab;if([0x1,0x4,0x7][_0x3bcbf6(0x37c)](_0x533c88))_0x2ca294-=0x1;if([0x3,0x6,0x9][_0x3bcbf6(0x37c)](_0x533c88))_0x2ca294+=0x1;return this[_0x3bcbf6(0x425)](_0x2ca294);},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x5e6)]=function(_0x394a46,_0x16a77e){const _0x4884a5=_0xa852ab;if([0x1,0x2,0x3][_0x4884a5(0x37c)](_0x16a77e))_0x394a46+=0x1;if([0x7,0x8,0x9]['includes'](_0x16a77e))_0x394a46-=0x1;return this[_0x4884a5(0x311)](_0x394a46);},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x3f3)]=function(_0x45e5a9,_0x4a4faf,_0x2516b4,_0x31b760){const _0x16f74e=_0xa852ab;return Math['max'](Math[_0x16f74e(0x1f0)](this[_0x16f74e(0x578)](_0x45e5a9,_0x2516b4)),Math['abs'](this[_0x16f74e(0x492)](_0x4a4faf,_0x31b760)));},Game_Map[_0xa852ab(0x410)]['setupRegionRestrictions']=function(){const _0x4ab12f=_0xa852ab,_0x201947=VisuMZ[_0x4ab12f(0x5fb)][_0x4ab12f(0x4d4)][_0x4ab12f(0x5f2)],_0x272213={},_0x552780=[_0x4ab12f(0x400),_0x4ab12f(0x6b8),_0x4ab12f(0x330)],_0x247c94=[_0x4ab12f(0x4f7),'Walk',_0x4ab12f(0x60b),'Event','Vehicle',_0x4ab12f(0x634),'Ship','Airship'];for(const _0x38efe5 of _0x552780){for(const _0x4bbdf5 of _0x247c94){const _0x2e54d0='%1%2'[_0x4ab12f(0x58f)](_0x4bbdf5,_0x38efe5);_0x201947[_0x2e54d0]&&(_0x272213[_0x2e54d0]=_0x201947[_0x2e54d0][_0x4ab12f(0x61d)](0x0));}}const _0x3a1e35=$dataMap[_0x4ab12f(0x28d)]||'',_0x4fb488=_0x3a1e35['match'](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/gi);if(_0x4fb488)for(const _0x169920 of _0x4fb488){_0x169920[_0x4ab12f(0x57e)](/<(.*) (.*) REGION:[ ]*(\d+(?:\s*,\s*\d+)*)>/i);let _0xcf42be=String(RegExp['$1'])[_0x4ab12f(0x2cf)]()[_0x4ab12f(0x572)](),_0x3c09ae=String(RegExp['$2'])[_0x4ab12f(0x2cf)]()[_0x4ab12f(0x572)]();const _0x555ed7=JSON[_0x4ab12f(0x6be)]('['+RegExp['$3'][_0x4ab12f(0x57e)](/\d+/g)+']');_0xcf42be=_0xcf42be[_0x4ab12f(0x4fd)](0x0)[_0x4ab12f(0x20e)]()+_0xcf42be[_0x4ab12f(0x61d)](0x1),_0x3c09ae=_0x3c09ae[_0x4ab12f(0x4fd)](0x0)[_0x4ab12f(0x20e)]()+_0x3c09ae[_0x4ab12f(0x61d)](0x1);const _0x1a8e75='%1%2'[_0x4ab12f(0x58f)](_0xcf42be,_0x3c09ae);if(_0x272213[_0x1a8e75])_0x272213[_0x1a8e75]=_0x272213[_0x1a8e75][_0x4ab12f(0x1f7)](_0x555ed7);}this[_0x4ab12f(0x5a5)]=_0x272213;},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x40f)]=function(_0x3251e1,_0x2e80f4,_0x485e51,_0x4a6531){const _0x523b37=_0xa852ab,_0x1f4e3f=this[_0x523b37(0x233)](_0x3251e1,_0x485e51),_0x48a699=this['roundYWithDirection'](_0x2e80f4,_0x485e51),_0xc08215=this['regionId'](_0x1f4e3f,_0x48a699),_0x2c1cd4=this[_0x523b37(0x5a5)];if(_0x2c1cd4[_0x523b37(0x31f)][_0x523b37(0x37c)](_0xc08215))return!![];else{if(_0x4a6531===_0x523b37(0x60d))return _0x2c1cd4[_0x523b37(0x265)]['includes'](_0xc08215)||_0x2c1cd4[_0x523b37(0x596)]['includes'](_0xc08215);else{if(_0x4a6531===_0x523b37(0x6b2))return _0x2c1cd4[_0x523b37(0x575)][_0x523b37(0x37c)](_0xc08215)||_0x2c1cd4[_0x523b37(0x596)]['includes'](_0xc08215);else{if(_0x2c1cd4[_0x523b37(0x512)][_0x523b37(0x37c)](_0xc08215))return!![];else{const _0x1e1c38=_0x523b37(0x316)[_0x523b37(0x58f)](_0x4a6531[_0x523b37(0x4fd)](0x0)[_0x523b37(0x20e)]()+_0x4a6531[_0x523b37(0x61d)](0x1));if(_0x2c1cd4[_0x1e1c38])return _0x2c1cd4[_0x1e1c38][_0x523b37(0x37c)](_0xc08215);}}}}return![];},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x55f)]=function(_0x4fab0c,_0x33e4ef,_0x46f160,_0x1d5028){const _0x2ab67e=_0xa852ab,_0x29335a=this[_0x2ab67e(0x233)](_0x4fab0c,_0x46f160),_0x101821=this[_0x2ab67e(0x5e6)](_0x33e4ef,_0x46f160),_0x40db71=this['regionId'](_0x29335a,_0x101821),_0x6f24e0=this[_0x2ab67e(0x5a5)];if(_0x6f24e0['AllForbid'][_0x2ab67e(0x37c)](_0x40db71))return!![];else{if(_0x1d5028===_0x2ab67e(0x60d))return _0x6f24e0[_0x2ab67e(0x59d)][_0x2ab67e(0x37c)](_0x40db71)||_0x6f24e0[_0x2ab67e(0x6e6)][_0x2ab67e(0x37c)](_0x40db71);else{if(_0x1d5028===_0x2ab67e(0x6b2))return _0x6f24e0[_0x2ab67e(0x5b6)][_0x2ab67e(0x37c)](_0x40db71)||_0x6f24e0[_0x2ab67e(0x6e6)]['includes'](_0x40db71);else{if(_0x6f24e0[_0x2ab67e(0x384)][_0x2ab67e(0x37c)](_0x40db71))return!![];else{const _0x56e06b=_0x2ab67e(0x456)['format'](_0x1d5028[_0x2ab67e(0x4fd)](0x0)[_0x2ab67e(0x20e)]()+_0x1d5028[_0x2ab67e(0x61d)](0x1));if(_0x6f24e0[_0x56e06b])return _0x6f24e0[_0x56e06b]['includes'](_0x40db71);}}}}return![];},Game_Map[_0xa852ab(0x410)]['isRegionDockable']=function(_0x48e96c,_0x261624,_0x4a3c54,_0x3024ea){const _0x17ae7a=_0xa852ab;_0x4a3c54=_0x3024ea===_0x17ae7a(0x27a)?0x5:_0x4a3c54;const _0x1b2a0e=this['roundXWithDirection'](_0x48e96c,_0x4a3c54),_0x21c101=this[_0x17ae7a(0x5e6)](_0x261624,_0x4a3c54),_0x29e891=this['regionId'](_0x1b2a0e,_0x21c101),_0x12dd04=this[_0x17ae7a(0x5a5)];if(_0x12dd04[_0x17ae7a(0x3ac)][_0x17ae7a(0x37c)](_0x29e891))return!![];else{const _0x13ad6b=_0x17ae7a(0x3b1)[_0x17ae7a(0x58f)](_0x3024ea[_0x17ae7a(0x4fd)](0x0)['toUpperCase']()+_0x3024ea['slice'](0x1));if(_0x12dd04[_0x13ad6b])return _0x12dd04[_0x13ad6b][_0x17ae7a(0x37c)](_0x29e891);}return![];},VisuMZ['EventsMoveCore'][_0xa852ab(0x40d)]=Game_Map[_0xa852ab(0x410)][_0xa852ab(0x2af)],Game_Map['prototype'][_0xa852ab(0x2af)]=function(){const _0x482ecd=_0xa852ab;VisuMZ[_0x482ecd(0x5fb)][_0x482ecd(0x40d)]['call'](this),this[_0x482ecd(0x28c)]();},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x28c)]=function(){const _0x3a095e=_0xa852ab;this['_needsPeriodicRefresh']=![];if(this['events']()['some'](_0x16afcb=>_0x16afcb[_0x3a095e(0x500)]())){this['_needsPeriodicRefresh']=!![];return;}if(this[_0x3a095e(0x2e3)]()[_0x3a095e(0x431)](_0x4660ab=>_0x4660ab['hasCPCs']())){this[_0x3a095e(0x5cd)]=!![];return;}if(this[_0x3a095e(0x4c7)][_0x3a095e(0x431)](_0x21c6b5=>_0x21c6b5[_0x3a095e(0x500)]())){this[_0x3a095e(0x5cd)]=!![];return;}if(this[_0x3a095e(0x4c7)][_0x3a095e(0x431)](_0x44a646=>_0x44a646[_0x3a095e(0x58c)]())){this[_0x3a095e(0x5cd)]=!![];return;}},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x697)]=Game_Map[_0xa852ab(0x410)]['update'],Game_Map[_0xa852ab(0x410)][_0xa852ab(0x5a2)]=function(_0x4f373c){const _0x2583d2=_0xa852ab;this[_0x2583d2(0x597)](),VisuMZ['EventsMoveCore'][_0x2583d2(0x697)][_0x2583d2(0x558)](this,_0x4f373c);},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x597)]=function(){const _0x209c1d=_0xa852ab;if(!this[_0x209c1d(0x5cd)])return;this[_0x209c1d(0x4b4)]=this[_0x209c1d(0x4b4)]||0x3c,this[_0x209c1d(0x4b4)]--,this[_0x209c1d(0x4b4)]<=0x0&&(this['requestRefresh'](),this[_0x209c1d(0x4b4)]=0x3c);},VisuMZ['EventsMoveCore']['Game_Map_isDashDisabled']=Game_Map['prototype']['isDashDisabled'],Game_Map[_0xa852ab(0x410)][_0xa852ab(0x546)]=function(){const _0xa9ee5e=_0xa852ab;if(!$gameSystem[_0xa9ee5e(0x283)]())return!![];return VisuMZ[_0xa9ee5e(0x5fb)]['Game_Map_isDashDisabled']['call'](this);},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x2ef)]=function(){const _0x1d345a=_0xa852ab;this[_0x1d345a(0x388)]=![];const _0x1d215b=$dataMap[_0x1d345a(0x28d)]||'';_0x1d215b['match'](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this[_0x1d345a(0x388)]=!![]);},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x497)]=function(){const _0x5d076f=_0xa852ab;if(this[_0x5d076f(0x388)]===undefined)this[_0x5d076f(0x2ef)]();return this[_0x5d076f(0x388)];},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x203)]=function(_0x36c853){const _0x52a3a4=_0xa852ab;_0x36c853!==this[_0x52a3a4(0x4c3)]()&&$gamePlayer&&$gameSystem[_0x52a3a4(0x203)](this['mapId']());},Game_Map[_0xa852ab(0x410)]['setupSpawnedEvents']=function(){const _0x2f83f3=_0xa852ab;this[_0x2f83f3(0x36f)]=$gameSystem[_0x2f83f3(0x6a5)](this[_0x2f83f3(0x4c3)]()),this[_0x2f83f3(0x524)]=!![];},VisuMZ[_0xa852ab(0x5fb)]['Game_Map_events']=Game_Map[_0xa852ab(0x410)]['events'],Game_Map[_0xa852ab(0x410)][_0xa852ab(0x2e3)]=function(){const _0x407971=_0xa852ab;if(this[_0x407971(0x3af)])return this[_0x407971(0x3af)];const _0x59cdc8=VisuMZ[_0x407971(0x5fb)][_0x407971(0x4db)][_0x407971(0x558)](this),_0x4412ac=_0x59cdc8[_0x407971(0x1f7)](this[_0x407971(0x36f)]||[]);return this[_0x407971(0x3af)]=_0x4412ac[_0x407971(0x3ea)](_0x4dec80=>!!_0x4dec80),this[_0x407971(0x3af)];},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x683)]=Game_Map[_0xa852ab(0x410)][_0xa852ab(0x6b2)],Game_Map[_0xa852ab(0x410)][_0xa852ab(0x6b2)]=function(_0x26e66a){const _0x953d86=_0xa852ab;return _0x26e66a>=0x3e8?(_0x26e66a-=0x3e8,this[_0x953d86(0x36f)][_0x26e66a]):VisuMZ[_0x953d86(0x5fb)]['Game_Map_event']['call'](this,_0x26e66a);},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x32f)]=function(_0x1cdac7){const _0x575cda=this['event'](_0x1cdac7);if(_0x575cda)_0x575cda['erase']();},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x62e)]=function(){const _0x37234a=_0xa852ab,_0xcec891={'template':_0x37234a(0x64b),'mapId':0x1,'eventId':0xc,'x':$gamePlayer['x']+0x1,'y':$gamePlayer['y']+0x1,'spawnPreserved':!![],'spawnEventId':this['_spawnedEvents'][_0x37234a(0x4d9)]+0x3e8};this[_0x37234a(0x337)](_0xcec891);},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x3b9)]=function(_0x234a6c,_0x6b8ae9){const _0x5b926d=_0xa852ab;if(this[_0x5b926d(0x5bd)](_0x234a6c,_0x6b8ae9)[_0x5b926d(0x4d9)]>0x0)return!![];if($gamePlayer['x']===_0x234a6c&&$gamePlayer['y']===_0x6b8ae9)return!![];if(this['boat']()['posNt'](_0x234a6c,_0x6b8ae9))return!![];if(this[_0x5b926d(0x5ff)]()[_0x5b926d(0x6d0)](_0x234a6c,_0x6b8ae9))return!![];return![];},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x393)]=function(_0x5331bc,_0x45cd6b,_0xb864c8){const _0x21a5e2=_0xa852ab;$gameTemp['_spawnData']=_0x5331bc;const _0x3cc227=new Game_Event(_0x5331bc[_0x21a5e2(0x4c3)],_0x5331bc[_0x21a5e2(0x379)]);$gameTemp['_spawnData']=undefined,_0x3cc227[_0x21a5e2(0x2af)]();let _0x5e1868=_0x45cd6b-_0x3cc227['_addedHitbox'][_0x21a5e2(0x30f)],_0x27ae1d=_0x45cd6b+_0x3cc227[_0x21a5e2(0x495)][_0x21a5e2(0x6c8)],_0x378f0f=_0xb864c8-_0x3cc227[_0x21a5e2(0x495)]['up'],_0x3d081d=_0xb864c8+_0x3cc227[_0x21a5e2(0x495)][_0x21a5e2(0x49f)];for(let _0x563560=_0x5e1868;_0x563560<=_0x27ae1d;_0x563560++){for(let _0x10e1ab=_0x378f0f;_0x10e1ab<=_0x3d081d;_0x10e1ab++){if(this[_0x21a5e2(0x3b9)](_0x563560,_0x10e1ab))return![];}}return!![];},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x337)]=function(_0x233548){const _0x2d7c62=_0xa852ab;$gameTemp[_0x2d7c62(0x43f)]=_0x233548;const _0x30101a=new Game_Event(_0x233548[_0x2d7c62(0x4c3)],_0x233548[_0x2d7c62(0x379)]);$gameTemp[_0x2d7c62(0x43f)]=undefined,this[_0x2d7c62(0x36f)][_0x2d7c62(0x215)](_0x30101a),_0x30101a[_0x2d7c62(0x281)](_0x233548),this['clearEventCache']();},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x5c6)]=function(_0x4877f0,_0x5ece95,_0x4f0eb4){const _0x5512f8=_0xa852ab,_0x44b604=_0x4877f0[_0x5512f8(0x374)][_0x5512f8(0x20e)]()[_0x5512f8(0x572)]();if(_0x44b604!=='UNTITLED'){const _0x58416b=VisuMZ[_0x5512f8(0x50c)][_0x44b604];_0x58416b&&(_0x4877f0[_0x5512f8(0x4c3)]=_0x58416b[_0x5512f8(0x4f0)],_0x4877f0['eventId']=_0x58416b[_0x5512f8(0x2b6)]);}const _0x2219c2=_0x4877f0['x'],_0x17dc47=_0x4877f0['y'];if(!this[_0x5512f8(0x65d)](_0x2219c2,_0x17dc47))return![];if(_0x5ece95){if(this[_0x5512f8(0x3b9)](_0x2219c2,_0x17dc47))return![];if(!this['isSpawnHitboxCollisionOk'](_0x4877f0,_0x2219c2,_0x17dc47))return![];}if(_0x4f0eb4){if(!this[_0x5512f8(0x434)](_0x2219c2,_0x17dc47))return![];}return this[_0x5512f8(0x337)](_0x4877f0),!![];},Game_Map[_0xa852ab(0x410)]['prepareSpawnedEventAtRegion']=function(_0x4a445e,_0x1e5723,_0x13cc39,_0x59038f){const _0x1d67ee=_0xa852ab,_0xe409dd=_0x4a445e[_0x1d67ee(0x374)][_0x1d67ee(0x20e)]()[_0x1d67ee(0x572)]();if(_0xe409dd!==_0x1d67ee(0x692)){const _0x35a692=VisuMZ[_0x1d67ee(0x50c)][_0xe409dd];_0x35a692&&(_0x4a445e[_0x1d67ee(0x4c3)]=_0x35a692['MapID'],_0x4a445e['eventId']=_0x35a692[_0x1d67ee(0x2b6)]);}const _0xb6d142=[],_0x1d490d=this[_0x1d67ee(0x61e)](),_0x4ede91=this[_0x1d67ee(0x442)]();for(let _0x4fb2ea=0x0;_0x4fb2ea<_0x1d490d;_0x4fb2ea++){for(let _0x4f93e5=0x0;_0x4f93e5<_0x4ede91;_0x4f93e5++){if(!_0x1e5723[_0x1d67ee(0x37c)](this['regionId'](_0x4fb2ea,_0x4f93e5)))continue;if(!this[_0x1d67ee(0x65d)](_0x4fb2ea,_0x4f93e5))continue;if(_0x13cc39){if(this[_0x1d67ee(0x3b9)](_0x4fb2ea,_0x4f93e5))continue;if(!this['isSpawnHitboxCollisionOk'](_0x4a445e,_0x4fb2ea,_0x4f93e5))continue;}if(_0x59038f){if(!this['isPassableByAnyDirection'](_0x4fb2ea,_0x4f93e5))continue;}_0xb6d142['push']([_0x4fb2ea,_0x4f93e5]);}}if(_0xb6d142['length']>0x0){const _0x2a576f=_0xb6d142[Math[_0x1d67ee(0x65a)](_0xb6d142[_0x1d67ee(0x4d9)])];return _0x4a445e['x']=_0x2a576f[0x0],_0x4a445e['y']=_0x2a576f[0x1],this[_0x1d67ee(0x337)](_0x4a445e),!![];}return![];},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x3ae)]=function(_0x5c80df,_0x59c14e,_0x4ceb98,_0x783f92){const _0x12bb70=_0xa852ab,_0x44b811=_0x5c80df[_0x12bb70(0x374)][_0x12bb70(0x20e)]()[_0x12bb70(0x572)]();if(_0x44b811!==_0x12bb70(0x692)){const _0xe3866d=VisuMZ[_0x12bb70(0x50c)][_0x44b811];_0xe3866d&&(_0x5c80df['mapId']=_0xe3866d['MapID'],_0x5c80df[_0x12bb70(0x379)]=_0xe3866d[_0x12bb70(0x2b6)]);}const _0x4f8dc8=[],_0x10a29e=this[_0x12bb70(0x61e)](),_0x15c64e=this['height']();for(let _0x5e4cf6=0x0;_0x5e4cf6<_0x10a29e;_0x5e4cf6++){for(let _0x452092=0x0;_0x452092<_0x15c64e;_0x452092++){if(!_0x59c14e[_0x12bb70(0x37c)](this['terrainTag'](_0x5e4cf6,_0x452092)))continue;if(!this[_0x12bb70(0x65d)](_0x5e4cf6,_0x452092))continue;if(_0x4ceb98){if(this['checkExistingEntitiesAt'](_0x5e4cf6,_0x452092))continue;if(!this[_0x12bb70(0x393)](_0x5c80df,_0x5e4cf6,_0x452092))continue;}if(_0x783f92){if(!this[_0x12bb70(0x434)](_0x5e4cf6,_0x452092))continue;}_0x4f8dc8[_0x12bb70(0x215)]([_0x5e4cf6,_0x452092]);}}if(_0x4f8dc8[_0x12bb70(0x4d9)]>0x0){const _0x41dbad=_0x4f8dc8[Math[_0x12bb70(0x65a)](_0x4f8dc8['length'])];return _0x5c80df['x']=_0x41dbad[0x0],_0x5c80df['y']=_0x41dbad[0x1],this['createSpawnedEventWithData'](_0x5c80df),!![];}return![];},Game_Map['prototype'][_0xa852ab(0x434)]=function(_0x3922e2,_0x5ee7c7){const _0x1b010c=_0xa852ab;if(this[_0x1b010c(0x637)](_0x3922e2,_0x5ee7c7,0x2))return!![];if(this['isPassable'](_0x3922e2,_0x5ee7c7,0x4))return!![];if(this[_0x1b010c(0x637)](_0x3922e2,_0x5ee7c7,0x6))return!![];if(this[_0x1b010c(0x637)](_0x3922e2,_0x5ee7c7,0x8))return!![];return![];},Game_Map['prototype']['despawnEventId']=function(_0x3d4780){const _0x59ad7f=_0xa852ab;if(_0x3d4780<0x3e8)return;if(!this[_0x59ad7f(0x36f)])return;const _0x57b0c1=this[_0x59ad7f(0x6b2)](_0x3d4780);_0x57b0c1['locate'](-0x1,-0x1),_0x57b0c1[_0x59ad7f(0x4b6)](),this[_0x59ad7f(0x36f)][_0x3d4780-0x3e8]=null,this[_0x59ad7f(0x41d)]();},Game_Map[_0xa852ab(0x410)]['firstSpawnedEvent']=function(){for(const _0x16dfc1 of this['_spawnedEvents']){if(_0x16dfc1)return _0x16dfc1;}return null;},Game_Map['prototype'][_0xa852ab(0x411)]=function(){const _0x23fdd6=_0xa852ab,_0x2fe604=this[_0x23fdd6(0x386)]();return _0x2fe604?_0x2fe604['_eventId']:0x0;},Game_Map[_0xa852ab(0x410)]['lastSpawnedEvent']=function(){const _0x5b879f=_0xa852ab,_0x55cfcc=this['_spawnedEvents']['slice'](0x0)[_0x5b879f(0x545)]();for(const _0x120abb of _0x55cfcc){if(_0x120abb)return _0x120abb;}return null;},Game_Map['prototype'][_0xa852ab(0x5a7)]=function(){const _0x251887=_0xa852ab,_0x2ddec4=this[_0x251887(0x298)]();return _0x2ddec4?_0x2ddec4[_0x251887(0x268)]:0x0;},Game_Map['prototype'][_0xa852ab(0x616)]=function(_0x33333a,_0x393571){const _0x1cc5ba=_0xa852ab,_0x192c1f=this[_0x1cc5ba(0x5bd)](_0x33333a,_0x393571);for(const _0x2936d9 of _0x192c1f){if(!_0x2936d9)continue;if(_0x2936d9[_0x1cc5ba(0x483)]())this[_0x1cc5ba(0x594)](_0x2936d9[_0x1cc5ba(0x268)]);}},Game_Map['prototype'][_0xa852ab(0x359)]=function(_0x21c6e3){const _0x53e6ec=_0xa852ab;for(const _0x2edf41 of this['_spawnedEvents']){if(!_0x2edf41)continue;_0x21c6e3['includes'](_0x2edf41[_0x53e6ec(0x5bc)]())&&this[_0x53e6ec(0x594)](_0x2edf41[_0x53e6ec(0x268)]);}},Game_Map['prototype'][_0xa852ab(0x230)]=function(_0x2016a2){const _0x41d207=_0xa852ab;for(const _0x52fe23 of this[_0x41d207(0x36f)]){if(!_0x52fe23)continue;_0x2016a2['includes'](_0x52fe23[_0x41d207(0x54c)]())&&this['despawnEventId'](_0x52fe23['_eventId']);}},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x38c)]=function(){const _0xba91cb=_0xa852ab;for(const _0x368fa4 of this[_0xba91cb(0x36f)]){if(!_0x368fa4)continue;this['despawnEventId'](_0x368fa4[_0xba91cb(0x268)]);}},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x55d)]=Game_Map[_0xa852ab(0x410)][_0xa852ab(0x37f)],Game_Map[_0xa852ab(0x410)]['unlockEvent']=function(_0x29ee91){const _0xb69dc9=_0xa852ab;VisuMZ['EventsMoveCore'][_0xb69dc9(0x55d)]['call'](this,_0x29ee91);if(_0x29ee91>=0x3e8){const _0x43a701=this[_0xb69dc9(0x6b2)](_0x29ee91);if(_0x43a701)_0x43a701[_0xb69dc9(0x273)]();}},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x210)]=function(){const _0x4a8391=_0xa852ab;this['_forceShowPlayer']=![],this['_forceHidePlayer']=![];if(!$dataMap)return;const _0x181fd7=$dataMap[_0x4a8391(0x28d)]||'';if(_0x181fd7['match'](/<HIDE PLAYER>/i))this['_forceShowPlayer']=![],this[_0x4a8391(0x662)]=!![];else _0x181fd7[_0x4a8391(0x57e)](/<SHOW PLAYER>/i)&&(this[_0x4a8391(0x3cf)]=!![],this[_0x4a8391(0x662)]=![]);},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x53a)]=function(){const _0x16b4ea=_0xa852ab;return this[_0x16b4ea(0x3cf)]===undefined&&this['setupPlayerVisibilityOverrides'](),this[_0x16b4ea(0x3cf)];},Game_Map[_0xa852ab(0x410)]['isPlayerForceHidden']=function(){const _0x59251c=_0xa852ab;return this[_0x59251c(0x662)]===undefined&&this[_0x59251c(0x210)](),this[_0x59251c(0x662)];},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x604)]=Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x380)],Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x380)]=function(){const _0x21641d=_0xa852ab;if(this===$gamePlayer){if($gameMap[_0x21641d(0x53a)]())return![];if($gameMap[_0x21641d(0x2e4)]())return!![];}return VisuMZ['EventsMoveCore'][_0x21641d(0x604)][_0x21641d(0x558)](this);},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x5a4)]=function(){const _0x1279e5=_0xa852ab;this[_0x1279e5(0x45a)]=![],this[_0x1279e5(0x621)]=![];if(!$dataMap)return;const _0x24ca9c=$dataMap[_0x1279e5(0x28d)]||'';if(_0x24ca9c[_0x1279e5(0x57e)](/<HIDE FOLLOWERS>/i))this[_0x1279e5(0x45a)]=![],this['_forceHideFollower']=!![];else _0x24ca9c['match'](/<SHOW FOLLOWERS>/i)&&(this[_0x1279e5(0x45a)]=!![],this['_forceHideFollower']=![]);},Game_Map['prototype'][_0xa852ab(0x467)]=function(){const _0x235c7f=_0xa852ab;return this[_0x235c7f(0x45a)]===undefined&&this[_0x235c7f(0x5a4)](),this[_0x235c7f(0x45a)];},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x328)]=function(){const _0x4fa5a9=_0xa852ab;return this[_0x4fa5a9(0x621)]===undefined&&this[_0x4fa5a9(0x5a4)](),this['_forceHideFollower'];},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x591)]=Game_Followers[_0xa852ab(0x410)][_0xa852ab(0x4e1)],Game_Followers[_0xa852ab(0x410)][_0xa852ab(0x4e1)]=function(){const _0x733563=_0xa852ab;if($gameMap['areFollowersForceShown']())return!![];if($gameMap[_0x733563(0x328)]())return![];return VisuMZ[_0x733563(0x5fb)][_0x733563(0x591)][_0x733563(0x558)](this);},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x42c)]=function(){const _0x4673a6=_0xa852ab,_0x38f4bb=this[_0x4673a6(0x2e3)](),_0x455bcf=[];$gameParty['_checkEncounterRaw']=!![];for(const _0x4b8a12 of _0x38f4bb){if(!_0x4b8a12)continue;if(_0x4b8a12['_erased'])continue;_0x4b8a12[_0x4673a6(0x2d2)]()&&_0x455bcf[_0x4673a6(0x215)](_0x4b8a12);}$gameParty['_checkEncounterRaw']=undefined;for(const _0x468d1a of _0x455bcf){if(!_0x468d1a)continue;if(_0x468d1a[_0x4673a6(0x4cb)])continue;this[_0x4673a6(0x32f)](_0x468d1a['eventId']());}},Game_Event[_0xa852ab(0x410)]['processEraseEncounterSpawn']=function(){const _0x1d3eb1=_0xa852ab,_0x212de6=this['event']()[_0x1d3eb1(0x28d)]||'';if(_0x212de6[_0x1d3eb1(0x57e)](/<ERASE IF ENC(?:|OUNTER) HALF>/i)){if($gameParty[_0x1d3eb1(0x548)]())return!![];if($isTileEncounterHalf(this['x'],this['y']))return!![];}if(_0x212de6[_0x1d3eb1(0x57e)](/<ERASE IF ENC(?:|OUNTER) NONE>/i)){if($gameParty[_0x1d3eb1(0x2e5)]())return!![];if($isTileEncounterNone(this['x'],this['y']))return!![];}return![];},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x42f)]=Scene_Map[_0xa852ab(0x410)][_0xa852ab(0x506)],Scene_Map['prototype'][_0xa852ab(0x506)]=function(){const _0x35b190=_0xa852ab;VisuMZ[_0x35b190(0x5fb)][_0x35b190(0x42f)][_0x35b190(0x558)](this),$gameMap[_0x35b190(0x42c)]();},Game_Map['prototype'][_0xa852ab(0x505)]=function(){const _0xf41caa=_0xa852ab;if(!$dataMap)return;if(!$dataMap[_0xf41caa(0x28d)])return;const _0xd27c45=$dataMap['note'];if(_0xd27c45[_0xf41caa(0x57e)](/<MAP LOAD COMMON EVENT(?:|S):[ ](.*)>/i)){const _0x484963=String(RegExp['$1'])[_0xf41caa(0x4ce)](',')[_0xf41caa(0x357)](_0x5f33ae=>Number(_0x5f33ae));for(const _0x127f49 of _0x484963){$gameTemp[_0xf41caa(0x4df)](_0x127f49);}}},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x217)]=function(){const _0x3766ce=_0xa852ab;if(!$dataMap)return;if(!$dataMap[_0x3766ce(0x28d)])return;const _0x10b0b7=$dataMap[_0x3766ce(0x28d)];if(_0x10b0b7[_0x3766ce(0x57e)](/<JS ON MAP LOAD>\s*([\s\S]*)\s*<\/JS ON MAP LOAD>/i)){const _0x1f6099=String(RegExp['$1']);try{eval(_0x1f6099);}catch(_0x57fc81){console[_0x3766ce(0x521)](_0x3766ce(0x43a));}}},Game_Map[_0xa852ab(0x410)][_0xa852ab(0x6d8)]=function(){const _0x1a13ca=_0xa852ab;if(!$gamePlayer)return;if(!$gamePlayer[_0x1a13ca(0x4a9)]())return;if(!$dataMap)return;if(!$dataMap[_0x1a13ca(0x28d)])return;const _0x48dd99=$dataMap[_0x1a13ca(0x28d)];if(_0x48dd99[_0x1a13ca(0x57e)](/<JS ON MAP EXIT>\s*([\s\S]*)\s*<\/JS ON MAP EXIT>/i)){const _0x5487d0=String(RegExp['$1']);try{eval(_0x5487d0);}catch(_0x5ca281){console[_0x1a13ca(0x521)](_0x1a13ca(0x486));}}},VisuMZ['EventsMoveCore'][_0xa852ab(0x6e5)]=Scene_Map[_0xa852ab(0x410)][_0xa852ab(0x4a2)],Scene_Map[_0xa852ab(0x410)][_0xa852ab(0x4a2)]=function(){const _0x308067=_0xa852ab;if($gameMap)$gameMap['requestMapExitCustomJS']();VisuMZ[_0x308067(0x5fb)][_0x308067(0x6e5)][_0x308067(0x558)](this);},Game_CommonEvent['prototype'][_0xa852ab(0x500)]=function(){const _0x1992b5=_0xa852ab,_0x2dce66=this[_0x1992b5(0x6b2)]();return this[_0x1992b5(0x350)]()&&_0x2dce66['trigger']>=0x1&&DataManager['isAdvancedSwitch'](_0x2dce66[_0x1992b5(0x5d8)]);},Game_CommonEvent[_0xa852ab(0x410)]['hasCPCs']=function(){const _0x1c62bf=_0xa852ab;return VisuMZ[_0x1c62bf(0x5fb)][_0x1c62bf(0x36e)][_0x1c62bf(0x4c7)]['includes'](this['_commonEventId']);},VisuMZ[_0xa852ab(0x5fb)]['Game_CommonEvent_isActive']=Game_CommonEvent['prototype'][_0xa852ab(0x350)],Game_CommonEvent[_0xa852ab(0x410)]['isActive']=function(){const _0x200a88=_0xa852ab;if(VisuMZ[_0x200a88(0x5fb)]['Game_CommonEvent_isActive'][_0x200a88(0x558)](this))return!![];else{const _0x85e3b3=this[_0x200a88(0x6b2)]();return VisuMZ['EventsMoveCore'][_0x200a88(0x36e)][_0x200a88(0x4bc)](this[_0x200a88(0x6b2)]()['CPC'],this[_0x200a88(0x35d)],_0x85e3b3);}},VisuMZ[_0xa852ab(0x5fb)]['Game_Map_parallelCommonEvents']=Game_Map[_0xa852ab(0x410)][_0xa852ab(0x480)],Game_Map[_0xa852ab(0x410)][_0xa852ab(0x480)]=function(){const _0x43e3a1=_0xa852ab,_0x3a6ffc=VisuMZ[_0x43e3a1(0x5fb)][_0x43e3a1(0x6dd)][_0x43e3a1(0x558)](this),_0x15a5e8=VisuMZ[_0x43e3a1(0x5fb)][_0x43e3a1(0x36e)][_0x43e3a1(0x4c7)]['map'](_0xf15aeb=>$dataCommonEvents[_0xf15aeb]);return _0x3a6ffc[_0x43e3a1(0x1f7)](_0x15a5e8)['filter']((_0x5bf9c7,_0x12cbe4,_0x6f1d4d)=>_0x6f1d4d[_0x43e3a1(0x4ba)](_0x5bf9c7)===_0x12cbe4);},Game_CharacterBase['ALLOW_LADDER_DASH']=VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x4d4)][_0xa852ab(0x2fb)][_0xa852ab(0x41a)]??![],VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x1f3)]=Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x5a8)],Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x5a8)]=function(){const _0x462398=_0xa852ab;VisuMZ[_0x462398(0x5fb)][_0x462398(0x1f3)]['call'](this),this['initEventsMoveCoreSettings']();},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x326)]=function(){const _0x2f0728=_0xa852ab;this[_0x2f0728(0x2c7)]=0x1,this[_0x2f0728(0x3b3)]=0x1,this[_0x2f0728(0x435)]=![],this[_0x2f0728(0x3f5)](),this[_0x2f0728(0x4d8)](),this[_0x2f0728(0x63f)](),this[_0x2f0728(0x5e2)]();},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x241)]=Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x24b)],Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x24b)]=function(){const _0x5ebb5c=_0xa852ab;let _0x128b41=VisuMZ[_0x5ebb5c(0x5fb)]['Game_CharacterBase_opacity'][_0x5ebb5c(0x558)](this);return _0x128b41=this['adjustMoveSynchOpacityDelta'](_0x128b41),_0x128b41;},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x2b8)]=function(_0x50613e){return _0x50613e;},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x48b)]=function(){const _0x1aaca6=_0xa852ab;if(this[_0x1aaca6(0x6b9)]===Game_Player&&this['isInVehicle']())return this['vehicle']()[_0x1aaca6(0x3fb)]()[_0x1aaca6(0x57e)](/\[VS8\]/i);else return Imported[_0x1aaca6(0x3ee)]&&this[_0x1aaca6(0x526)]()?!![]:this[_0x1aaca6(0x3fb)]()[_0x1aaca6(0x57e)](/\[VS8\]/i);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x397)]=Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x2be)],Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x2be)]=function(){const _0x2ecb9a=_0xa852ab;if(!$dataMap)return this[_0x2ecb9a(0x63b)]||0x2;if(this[_0x2ecb9a(0x6bd)]()&&!this['isJumping']()&&this[_0x2ecb9a(0x48b)]())return this['directionOnLadderSpriteVS8dir']();else{if(this[_0x2ecb9a(0x6bd)]()&&!this[_0x2ecb9a(0x665)]())return 0x8;else return this[_0x2ecb9a(0x633)]()&&this[_0x2ecb9a(0x48b)]()?this[_0x2ecb9a(0x555)]():VisuMZ[_0x2ecb9a(0x5fb)]['Game_CharacterBase_direction']['call'](this);}},VisuMZ['EventsMoveCore'][_0xa852ab(0x362)]=Game_CharacterBase[_0xa852ab(0x410)]['setDirection'],Game_CharacterBase[_0xa852ab(0x410)]['setDirection']=function(_0x33dc26){const _0x526d38=_0xa852ab;if(!this[_0x526d38(0x48b)]())_0x33dc26=this[_0x526d38(0x59e)](_0x33dc26);VisuMZ[_0x526d38(0x5fb)][_0x526d38(0x362)][_0x526d38(0x558)](this,_0x33dc26),this[_0x526d38(0x2f9)]();},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x59e)]=function(_0x43431b){const _0x5551c3=_0xa852ab;if(_0x43431b===0x1)return this[_0x5551c3(0x364)](this['_x'],this['_y'],0x4)?0x4:0x2;if(_0x43431b===0x3)return this[_0x5551c3(0x364)](this['_x'],this['_y'],0x6)?0x6:0x2;if(_0x43431b===0x7)return this[_0x5551c3(0x364)](this['_x'],this['_y'],0x4)?0x4:0x8;if(_0x43431b===0x9)return this[_0x5551c3(0x364)](this['_x'],this['_y'],0x6)?0x6:0x8;return _0x43431b;},Game_CharacterBase[_0xa852ab(0x410)]['isDiagonalDirection']=function(_0x14a5ef){const _0x573e77=_0xa852ab;return[0x1,0x3,0x5,0x7,0x9][_0x573e77(0x37c)](_0x14a5ef);},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x259)]=function(){const _0x55a555=_0xa852ab;return this[_0x55a555(0x6ba)]||0x0;},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x669)]=Game_CharacterBase['prototype'][_0xa852ab(0x258)],Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x258)]=function(_0x136084){const _0x321f66=_0xa852ab;this[_0x321f66(0x6ba)]=_0x136084,VisuMZ['EventsMoveCore'][_0x321f66(0x669)]['call'](this,_0x136084);},Game_CharacterBase[_0xa852ab(0x410)]['executeMoveDir8']=function(_0x1a0f3e){const _0x5b54b1=_0xa852ab;if(!this[_0x5b54b1(0x30d)](_0x1a0f3e))return this['moveStraight'](_0x1a0f3e);let _0x56fcd0=0x0,_0x5d30ba=0x0;switch(_0x1a0f3e){case 0x1:_0x56fcd0=0x4,_0x5d30ba=0x2;break;case 0x3:_0x56fcd0=0x6,_0x5d30ba=0x2;break;case 0x7:_0x56fcd0=0x4,_0x5d30ba=0x8;break;case 0x9:_0x56fcd0=0x6,_0x5d30ba=0x8;break;}if(VisuMZ[_0x5b54b1(0x5fb)][_0x5b54b1(0x4d4)][_0x5b54b1(0x2fb)][_0x5b54b1(0x433)]){if(!this['canPass'](this['_x'],this['_y'],_0x56fcd0))return this[_0x5b54b1(0x258)](_0x5d30ba);if(!this[_0x5b54b1(0x364)](this['_x'],this['_y'],_0x5d30ba))return this[_0x5b54b1(0x258)](_0x56fcd0);if(!this[_0x5b54b1(0x4e9)](this['_x'],this['_y'],_0x56fcd0,_0x5d30ba)){let _0x3c6881=VisuMZ[_0x5b54b1(0x5fb)][_0x5b54b1(0x4d4)][_0x5b54b1(0x2fb)][_0x5b54b1(0x592)]?_0x56fcd0:_0x5d30ba;return this[_0x5b54b1(0x258)](_0x3c6881);}}this[_0x5b54b1(0x6ba)]=_0x1a0f3e,this[_0x5b54b1(0x691)](_0x56fcd0,_0x5d30ba);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x415)]=Game_CharacterBase[_0xa852ab(0x410)]['realMoveSpeed'],Game_CharacterBase[_0xa852ab(0x410)]['realMoveSpeed']=function(){const _0xb26ba8=_0xa852ab;let _0x4f99a3=this[_0xb26ba8(0x684)];return this[_0xb26ba8(0x212)]()&&(_0x4f99a3+=this[_0xb26ba8(0x5dd)]()),this[_0xb26ba8(0x530)](_0x4f99a3);},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x5dd)]=function(){const _0x5666eb=_0xa852ab,_0x30a9aa=VisuMZ[_0x5666eb(0x5fb)][_0x5666eb(0x4d4)][_0x5666eb(0x2fb)];return _0x30a9aa[_0x5666eb(0x5ac)]!==undefined?_0x30a9aa[_0x5666eb(0x5ac)]:VisuMZ[_0x5666eb(0x5fb)][_0x5666eb(0x415)][_0x5666eb(0x558)](this)-this[_0x5666eb(0x684)];},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x530)]=function(_0x26225d){const _0xa5fdfa=_0xa852ab,_0x1dc254=VisuMZ[_0xa5fdfa(0x5fb)][_0xa5fdfa(0x4d4)]['Movement'];if(!_0x1dc254[_0xa5fdfa(0x5f6)])return _0x26225d;return[0x1,0x3,0x7,0x9][_0xa5fdfa(0x37c)](this['_lastMovedDirection'])&&(_0x26225d*=_0x1dc254[_0xa5fdfa(0x1ff)]||0.01),_0x26225d;},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x360)]=Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x212)],Game_CharacterBase[_0xa852ab(0x410)]['isDashing']=function(){const _0x50a9ea=_0xa852ab;if(!Game_CharacterBase[_0x50a9ea(0x57f)]&&this[_0x50a9ea(0x6bd)]())return![];if(this['_forceDashing'])return!![];return VisuMZ[_0x50a9ea(0x5fb)]['Game_CharacterBase_isDashing']['call'](this);},Game_CharacterBase['prototype']['isDashingAndMoving']=function(){const _0x543f0a=_0xa852ab;return this[_0x543f0a(0x212)]()&&this[_0x543f0a(0x2de)]===0x0;},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x354)]=Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x68d)],Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x68d)]=function(){const _0x192c10=_0xa852ab;return this[_0x192c10(0x633)]()?this[_0x192c10(0x53b)]():VisuMZ[_0x192c10(0x5fb)][_0x192c10(0x354)][_0x192c10(0x558)](this);},VisuMZ['EventsMoveCore'][_0xa852ab(0x5fd)]=Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x656)],Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x656)]=function(){const _0x3d1a2d=_0xa852ab;VisuMZ['EventsMoveCore']['Game_CharacterBase_increaseSteps']['call'](this),this[_0x3d1a2d(0x3f5)]();},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x698)]=Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x4fc)],Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x4fc)]=function(){const _0x1e269e=_0xa852ab;if(this[_0x1e269e(0x48b)]())return this[_0x1e269e(0x26e)]();return VisuMZ['EventsMoveCore'][_0x1e269e(0x698)][_0x1e269e(0x558)](this);},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x26e)]=function(){const _0x44882e=_0xa852ab,_0x26a2bd=this[_0x44882e(0x2be)]();if(this[_0x44882e(0x665)]()){if([0x2,0x4,0x6,0x8][_0x44882e(0x37c)](_0x26a2bd))return 0x4;if([0x1,0x3,0x7,0x9]['includes'](_0x26a2bd))return 0x5;}else{if(this[_0x44882e(0x6bd)]())return 0x6;else{if(this['isPosing']())return this[_0x44882e(0x51e)]();else{if(this[_0x44882e(0x275)]){if([0x2,0x4,0x6,0x8][_0x44882e(0x37c)](_0x26a2bd))return 0x4;if([0x1,0x3,0x7,0x9][_0x44882e(0x37c)](_0x26a2bd))return 0x5;}else{if(this[_0x44882e(0x36c)]()&&this[_0x44882e(0x643)]()){if([0x2,0x4,0x6,0x8]['includes'](_0x26a2bd))return 0x4;if([0x1,0x3,0x7,0x9][_0x44882e(0x37c)](_0x26a2bd))return 0x5;}else{if(this[_0x44882e(0x2a1)]()){if([0x2,0x4,0x6,0x8][_0x44882e(0x37c)](_0x26a2bd))return 0x2;if([0x1,0x3,0x7,0x9][_0x44882e(0x37c)](_0x26a2bd))return 0x3;}else{if([0x2,0x4,0x6,0x8][_0x44882e(0x37c)](_0x26a2bd))return 0x0;if([0x1,0x3,0x7,0x9]['includes'](_0x26a2bd))return 0x1;}}}}}}},Game_CharacterBase['prototype']['useCarryPoseForIcons']=function(){const _0x568695=_0xa852ab;return VisuMZ[_0x568695(0x5fb)][_0x568695(0x4d4)]['VS8'][_0x568695(0x6d7)];},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x4e0)]=function(){const _0x3e21fd=_0xa852ab;return this['isOnLadder']()&&this[_0x3e21fd(0x54c)]()===VisuMZ[_0x3e21fd(0x5fb)][_0x3e21fd(0x4d4)][_0x3e21fd(0x4f8)][_0x3e21fd(0x525)];},Game_CharacterBase[_0xa852ab(0x410)]['directionOnLadderSpriteVS8dir']=function(){const _0x96f33d=_0xa852ab;return this[_0x96f33d(0x4e0)]()?0x4:0x2;},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x593)]=Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x5a2)],Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x5a2)]=function(){const _0x75012e=_0xa852ab;this[_0x75012e(0x614)](),VisuMZ[_0x75012e(0x5fb)]['Game_CharacterBase_update']['call'](this),this[_0x75012e(0x65c)]();},Game_CharacterBase['prototype'][_0xa852ab(0x614)]=function(){const _0x5dc5c2=_0xa852ab;this[_0x5dc5c2(0x6db)]=this[_0x5dc5c2(0x2c7)]??0x1,this[_0x5dc5c2(0x658)]=this[_0x5dc5c2(0x3b3)]??0x1;},VisuMZ['EventsMoveCore']['Game_CharacterBase_bushDepth']=Game_CharacterBase[_0xa852ab(0x410)]['bushDepth'],Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x4d1)]=function(){const _0x3ed45b=_0xa852ab;let _0x566b0b=VisuMZ[_0x3ed45b(0x5fb)][_0x3ed45b(0x1f6)][_0x3ed45b(0x558)](this);return this[_0x3ed45b(0x658)]!==undefined&&(_0x566b0b/=Math['max'](this[_0x3ed45b(0x658)],0.00001)),Math[_0x3ed45b(0x4de)](_0x566b0b);},Game_CharacterBase[_0xa852ab(0x410)]['updatePose']=function(){const _0x5af7d4=_0xa852ab;this[_0x5af7d4(0x50d)]=this['_poseDuration']||0x0;if(this[_0x5af7d4(0x50d)]>0x0){this['_poseDuration']--;if(this['_poseDuration']<=0x0&&this['_pose']!=='ZZZ')this[_0x5af7d4(0x3f5)]();}},VisuMZ[_0xa852ab(0x5fb)]['Game_CharacterBase_moveDiagonally']=Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x691)],Game_CharacterBase[_0xa852ab(0x410)]['moveDiagonally']=function(_0x76fc0d,_0x4d89df){const _0x3227b2=_0xa852ab;VisuMZ[_0x3227b2(0x5fb)][_0x3227b2(0x27b)][_0x3227b2(0x558)](this,_0x76fc0d,_0x4d89df);if(this[_0x3227b2(0x48b)]())this[_0x3227b2(0x534)](_0x76fc0d,_0x4d89df);},Game_CharacterBase['prototype'][_0xa852ab(0x534)]=function(_0x53b201,_0x384430){const _0x23c2ad=_0xa852ab;if(_0x53b201===0x4&&_0x384430===0x2)this['setDirection'](0x1);if(_0x53b201===0x6&&_0x384430===0x2)this['setDirection'](0x3);if(_0x53b201===0x4&&_0x384430===0x8)this[_0x23c2ad(0x361)](0x7);if(_0x53b201===0x6&&_0x384430===0x8)this[_0x23c2ad(0x361)](0x9);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x312)]=Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x256)],Game_CharacterBase[_0xa852ab(0x410)]['hasStepAnime']=function(){const _0x38c2ad=_0xa852ab;if(this[_0x38c2ad(0x633)]()&&this[_0x38c2ad(0x4f5)]()===_0x38c2ad(0x3de))return!![];return VisuMZ[_0x38c2ad(0x5fb)][_0x38c2ad(0x312)][_0x38c2ad(0x558)](this);},Game_CharacterBase['prototype'][_0xa852ab(0x542)]=function(_0xa72d1a,_0x2d67c3){const _0x36b4bd=_0xa852ab;if(_0xa72d1a[_0x36b4bd(0x57e)](/Z/i))_0xa72d1a='ZZZ';if(_0xa72d1a['match'](/SLEEP/i))_0xa72d1a=_0x36b4bd(0x3de);this[_0x36b4bd(0x48b)]()&&(this[_0x36b4bd(0x3eb)]=_0xa72d1a[_0x36b4bd(0x20e)]()[_0x36b4bd(0x572)](),this[_0x36b4bd(0x50d)]=_0x2d67c3||Infinity);},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x4f5)]=function(){const _0x4fddf0=_0xa852ab;return this[_0x4fddf0(0x48b)]()?(this[_0x4fddf0(0x3eb)]||'')[_0x4fddf0(0x20e)]()[_0x4fddf0(0x572)]():''['toUpperCase']()['trim']();},Game_CharacterBase['prototype'][_0xa852ab(0x21d)]=function(_0x2e0eea,_0x45a648){const _0x11c932=_0xa852ab;if(this[_0x11c932(0x48b)]()){const _0x54252d=['',_0x11c932(0x31d),_0x11c932(0x503),'MUSIC\x20NOTE',_0x11c932(0x2e8),_0x11c932(0x677),'SWEAT',_0x11c932(0x4d7),_0x11c932(0x5b4),_0x11c932(0x20a),_0x11c932(0x3de),'','','','',''][_0x2e0eea];this[_0x11c932(0x542)](_0x54252d,_0x45a648);}},Game_CharacterBase['prototype'][_0xa852ab(0x3f5)]=function(){const _0x4a1e26=_0xa852ab;this[_0x4a1e26(0x3eb)]='',this[_0x4a1e26(0x50d)]=0x0;},Game_CharacterBase[_0xa852ab(0x410)]['isPosing']=function(){const _0x40cf0a=_0xa852ab;return this[_0x40cf0a(0x48b)]()&&!!this['_pose'];},Game_CharacterBase[_0xa852ab(0x410)]['getPosingCharacterIndex']=function(){const _0x233b2e=_0xa852ab,_0x2f6c48=this[_0x233b2e(0x3eb)][_0x233b2e(0x20e)]();switch(this[_0x233b2e(0x3eb)]['toUpperCase']()[_0x233b2e(0x572)]()){case _0x233b2e(0x5c5):case _0x233b2e(0x20c):case _0x233b2e(0x2f4):case _0x233b2e(0x581):case _0x233b2e(0x372):case'COLLAPSE':return 0x6;break;default:return 0x7;break;}},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x555)]=function(){const _0x401327=_0xa852ab;switch(this[_0x401327(0x3eb)]['toUpperCase']()){case _0x401327(0x31d):case _0x401327(0x503):case _0x401327(0x2da):case'!':case'?':return 0x2;break;case'HEART':case _0x401327(0x677):case _0x401327(0x3bd):return 0x4;break;case _0x401327(0x5c5):case _0x401327(0x20c):case _0x401327(0x2f4):case _0x401327(0x4d7):case'SILENCE':case _0x401327(0x20a):return 0x6;break;case _0x401327(0x581):case _0x401327(0x372):case _0x401327(0x61b):case _0x401327(0x3de):case _0x401327(0x60e):return 0x8;break;default:return VisuMZ[_0x401327(0x5fb)]['Game_CharacterBase_setDirection']['call'](this);break;}},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x53b)]=function(){const _0x1be610=_0xa852ab;switch(this[_0x1be610(0x3eb)]['toUpperCase']()){case _0x1be610(0x5c5):case _0x1be610(0x581):case _0x1be610(0x31d):case'!':case'HEART':case _0x1be610(0x4d7):return 0x0;break;case _0x1be610(0x20c):case _0x1be610(0x372):case _0x1be610(0x503):case'?':case _0x1be610(0x677):case'SILENCE':return 0x1;break;case _0x1be610(0x2f4):case _0x1be610(0x61b):case _0x1be610(0x2da):case _0x1be610(0x3bd):case _0x1be610(0x20a):return 0x2;break;default:return VisuMZ['EventsMoveCore'][_0x1be610(0x354)][_0x1be610(0x558)](this);break;}},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x3b2)]=function(){this['_forceCarrying']=!![];},Game_CharacterBase[_0xa852ab(0x410)]['clearCarrying']=function(){const _0x3adf24=_0xa852ab;this[_0x3adf24(0x275)]=![];},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x6ad)]=function(){const _0x2fd825=_0xa852ab;this[_0x2fd825(0x511)]=!![];},Game_CharacterBase[_0xa852ab(0x410)]['clearDashing']=function(){const _0x51e13e=_0xa852ab;this[_0x51e13e(0x511)]=![];},Game_CharacterBase[_0xa852ab(0x410)]['isShadowVisible']=function(){const _0x34c9e0=_0xa852ab;if(this[_0x34c9e0(0x42e)]())return![];if(this[_0x34c9e0(0x3ed)])return![];if(this[_0x34c9e0(0x5a6)]==='')return![];if(this[_0x34c9e0(0x6b9)]===Game_Vehicle)return![];if(this[_0x34c9e0(0x380)]())return![];if(this['_noMovementShadow'])return![];return!![];},Game_Follower[_0xa852ab(0x410)][_0xa852ab(0x628)]=function(){const _0x4d87ae=_0xa852ab;if($gamePlayer['_noFollowerMovementShadow'])return![];return Game_CharacterBase['prototype'][_0x4d87ae(0x628)][_0x4d87ae(0x558)](this);},Game_CharacterBase['prototype'][_0xa852ab(0x422)]=function(){const _0x10f865=_0xa852ab;if(this[_0x10f865(0x6bd)]())return!![];if(this['constructor']===Game_Player&&this[_0x10f865(0x23c)]())return!![];return![];},Game_CharacterBase['prototype']['shadowFilename']=function(){const _0x2e7c7b=_0xa852ab;return VisuMZ[_0x2e7c7b(0x5fb)]['Settings'][_0x2e7c7b(0x2fb)]['DefaultShadow'];},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x52c)]=function(){const _0x35d2e8=_0xa852ab;return this[_0x35d2e8(0x6d6)]();},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x580)]=function(){const _0xaca4bc=_0xa852ab,_0x23ab87=$gameMap[_0xaca4bc(0x481)]();return Math[_0xaca4bc(0x4de)](this['scrolledY']()*_0x23ab87+_0x23ab87);},Game_CharacterBase[_0xa852ab(0x418)]=0x64,Game_CharacterBase['prototype']['getDiagonalDestination']=function(_0x4ecab8,_0x102527){const _0x5a2b85=_0xa852ab;if(TouchInput['isPressed']())return![];if(!$gameMap['isSupportDiagonalMovement']())return![];if($gameMap[_0x5a2b85(0x62b)](_0x4ecab8,_0x102527)[_0x5a2b85(0x4d9)]>0x0)return![];if(!$gameMap['isPassableByAnyDirection'](_0x4ecab8,_0x102527))return![];const _0x283c51=$gameMap[_0x5a2b85(0x4a0)]['length'];if(_0x283c51>=Game_CharacterBase[_0x5a2b85(0x418)])return![];return!![];},Game_Character[_0xa852ab(0x410)]['findDiagonalDirectionTo']=function(_0x4ac144,_0xd31bc){const _0x5178e5=_0xa852ab;let _0x13f40b=this[_0x5178e5(0x3a3)](_0x4ac144,_0xd31bc);if(!this[_0x5178e5(0x6a3)](_0x4ac144,_0xd31bc))return _0x13f40b;if(this[_0x5178e5(0x5ee)](_0x4ac144,_0xd31bc))return _0x13f40b;const _0x7f02e8=_0x13f40b;if(_0x13f40b===0x2){if(_0x4ac144>this['x']&&this[_0x5178e5(0x364)](this['x'],this['y'],0x6))_0x13f40b=0x3;if(_0x4ac144<this['x']&&this[_0x5178e5(0x364)](this['x'],this['y'],0x4))_0x13f40b=0x1;}else{if(_0x13f40b===0x4){if(_0xd31bc>this['y']&&this[_0x5178e5(0x364)](this['x'],this['y'],0x4))_0x13f40b=0x1;if(_0xd31bc<this['y']&&this[_0x5178e5(0x364)](this['x'],this['y'],0x6))_0x13f40b=0x7;}else{if(_0x13f40b===0x6){if(_0xd31bc>this['y']&&this[_0x5178e5(0x364)](this['x'],this['y'],0x4))_0x13f40b=0x3;if(_0xd31bc<this['y']&&this[_0x5178e5(0x364)](this['x'],this['y'],0x6))_0x13f40b=0x9;}else{if(_0x13f40b===0x8){if(_0x4ac144>this['x']&&this[_0x5178e5(0x364)](this['x'],this['y'],0x6))_0x13f40b=0x9;if(_0x4ac144<this['x']&&this[_0x5178e5(0x364)](this['x'],this['y'],0x4))_0x13f40b=0x7;}}}}if(!this[_0x5178e5(0x364)](this['x'],this['y'],_0x13f40b))return _0x7f02e8;const _0x4a0fdf=$gameMap[_0x5178e5(0x233)](this['x'],_0x13f40b),_0x3ea66e=$gameMap['roundYWithDirection'](this['y'],_0x13f40b);if(this['isCollidedWithEvents'](_0x4a0fdf,_0x3ea66e))_0x13f40b=_0x7f02e8;return _0x13f40b;},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x663)]=Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x364)],Game_CharacterBase['prototype'][_0xa852ab(0x364)]=function(_0x1e1505,_0x5b9887,_0x524cd6){const _0x5560ea=_0xa852ab;return this['_vehicleType']===_0x5560ea(0x27a)?this[_0x5560ea(0x55a)]()['isAirshipPassable'](_0x1e1505,_0x5b9887,_0x524cd6):VisuMZ[_0x5560ea(0x5fb)][_0x5560ea(0x663)][_0x5560ea(0x558)](this,_0x1e1505,_0x5b9887,_0x524cd6);},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x63f)]=function(){const _0x1b7b2e=_0xa852ab;this[_0x1b7b2e(0x38f)]=0x0,this[_0x1b7b2e(0x4d0)]=0x0;},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x43d)]=Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x6d6)],Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x6d6)]=function(){const _0x4a02b2=_0xa852ab;return VisuMZ[_0x4a02b2(0x5fb)]['Game_CharacterBase_screenX'][_0x4a02b2(0x558)](this)+(this[_0x4a02b2(0x38f)]||0x0);},VisuMZ[_0xa852ab(0x5fb)]['Game_CharacterBase_screenY']=Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x413)],Game_CharacterBase[_0xa852ab(0x410)]['screenY']=function(){const _0x2345a2=_0xa852ab;return VisuMZ[_0x2345a2(0x5fb)][_0x2345a2(0x5bf)][_0x2345a2(0x558)](this)+(this['_spriteOffsetY']||0x0);},Game_CharacterBase[_0xa852ab(0x451)]=VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x4d4)][_0xa852ab(0x2fb)][_0xa852ab(0x24d)]??-0x6,Game_CharacterBase['prototype'][_0xa852ab(0x514)]=function(){const _0x438c67=_0xa852ab;let _0x3d7369=this['isObjectCharacter']()?0x0:-Game_CharacterBase[_0x438c67(0x451)];return this[_0x438c67(0x658)]&&(_0x3d7369*=this['_scaleY']),Math[_0x438c67(0x5e5)](_0x3d7369);},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x5e2)]=function(){const _0x1d1591=_0xa852ab;this[_0x1d1591(0x29e)]='';},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x2cb)]=Game_CharacterBase['prototype'][_0xa852ab(0x56d)],Game_CharacterBase[_0xa852ab(0x410)]['updatePattern']=function(){const _0x1e7704=_0xa852ab;if(this[_0x1e7704(0x435)])return;if(this[_0x1e7704(0x3f9)]())return;VisuMZ[_0x1e7704(0x5fb)][_0x1e7704(0x2cb)][_0x1e7704(0x558)](this);},Game_CharacterBase['prototype'][_0xa852ab(0x3f9)]=function(){const _0x788780=_0xa852ab;if(!this[_0x788780(0x256)]()&&this[_0x788780(0x2de)]>0x0)return![];switch(String(this[_0x788780(0x29e)])[_0x788780(0x20e)]()[_0x788780(0x572)]()){case _0x788780(0x289):this[_0x788780(0x449)]+=0x1;if(this[_0x788780(0x449)]>0x2)this[_0x788780(0x645)](0x0);break;case _0x788780(0x5cb):this['_pattern']-=0x1;if(this[_0x788780(0x449)]<0x0)this[_0x788780(0x645)](0x2);break;case _0x788780(0x68f):case _0x788780(0x48a):this[_0x788780(0x367)]();break;case'SPIN\x20COUNTERCLOCKWISE':case'SPIN\x20CCW':case _0x788780(0x660):case _0x788780(0x3c0):this[_0x788780(0x559)]();break;default:return![];}return!![];},Game_CharacterBase['prototype'][_0xa852ab(0x5a1)]=function(){const _0x103930=_0xa852ab;return $gameSystem[_0x103930(0x5a1)](this);},Game_CharacterBase['prototype'][_0xa852ab(0x36c)]=function(){const _0x4c029a=_0xa852ab,_0x253fc9=this[_0x4c029a(0x5a1)]();if(!_0x253fc9)return![];return _0x253fc9[_0x4c029a(0x439)]>0x0;},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x4a3)]=function(){const _0xee0f26=this['direction']();return $gameMap['roundXWithDirection'](this['x'],_0xee0f26);},Game_CharacterBase['prototype'][_0xa852ab(0x308)]=function(){const _0x410e63=_0xa852ab,_0xa17aed=this[_0x410e63(0x2be)]();return $gameMap[_0x410e63(0x5e6)](this['y'],_0xa17aed);},Game_CharacterBase[_0xa852ab(0x410)]['backX']=function(){const _0x4450f7=_0xa852ab,_0x2be94d=this[_0x4450f7(0x5f3)](this[_0x4450f7(0x2be)]());return $gameMap[_0x4450f7(0x233)](this['x'],_0x2be94d);},Game_CharacterBase[_0xa852ab(0x410)]['backY']=function(){const _0x152c37=_0xa852ab,_0x24f373=this[_0x152c37(0x5f3)](this['direction']());return $gameMap[_0x152c37(0x5e6)](this['y'],_0x24f373);},Game_CharacterBase[_0xa852ab(0x410)]['ccwX']=function(){const _0x2fe161=_0xa852ab,_0x10ab32=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x2fe161(0x2be)]()];return $gameMap['roundXWithDirection'](this['x'],_0x10ab32);},Game_CharacterBase[_0xa852ab(0x410)]['ccwY']=function(){const _0x4c43a2=_0xa852ab,_0x48cd95=[0x0,0x3,0x6,0x9,0x2,0x5,0x8,0x1,0x4,0x7][this[_0x4c43a2(0x2be)]()];return $gameMap[_0x4c43a2(0x5e6)](this['y'],_0x48cd95);},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x437)]=function(){const _0x17316a=_0xa852ab,_0x5bf1cd=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this[_0x17316a(0x2be)]()];return $gameMap[_0x17316a(0x233)](this['x'],_0x5bf1cd);},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x47d)]=function(){const _0x272528=_0xa852ab,_0x3a694e=[0x0,0x7,0x4,0x1,0x8,0x5,0x2,0x9,0x6,0x3][this[_0x272528(0x2be)]()];return $gameMap[_0x272528(0x5e6)](this['y'],_0x3a694e);},VisuMZ['EventsMoveCore'][_0xa852ab(0x2f2)]=Game_Character[_0xa852ab(0x410)][_0xa852ab(0x323)],Game_Character['prototype'][_0xa852ab(0x323)]=function(_0x5cf085){const _0x1637e6=_0xa852ab;route=JsonEx[_0x1637e6(0x48c)](_0x5cf085),VisuMZ[_0x1637e6(0x5fb)]['Game_Character_setMoveRoute'][_0x1637e6(0x558)](this,route);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x455)]=Game_Character[_0xa852ab(0x410)][_0xa852ab(0x504)],Game_Character[_0xa852ab(0x410)][_0xa852ab(0x504)]=function(_0x12fa36){const _0x889a79=_0xa852ab;route=JsonEx['makeDeepCopy'](_0x12fa36),VisuMZ[_0x889a79(0x5fb)][_0x889a79(0x455)][_0x889a79(0x558)](this,route);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x471)]=Game_Character['prototype'][_0xa852ab(0x667)],Game_Character[_0xa852ab(0x410)][_0xa852ab(0x667)]=function(_0x28b56b){const _0x2bfe5=_0xa852ab,_0x4f631c=Game_Character,_0x526918=_0x28b56b['parameters'];if(_0x28b56b[_0x2bfe5(0x30b)]===_0x4f631c[_0x2bfe5(0x3a8)]){let _0x328f59=_0x28b56b['parameters'][0x0];_0x328f59=this[_0x2bfe5(0x6c4)](_0x328f59),_0x328f59=this[_0x2bfe5(0x617)](_0x328f59),this[_0x2bfe5(0x65f)](_0x28b56b,_0x328f59);}else VisuMZ[_0x2bfe5(0x5fb)][_0x2bfe5(0x471)][_0x2bfe5(0x558)](this,_0x28b56b);},Game_Character[_0xa852ab(0x410)]['convertVariableValuesInScriptCall']=function(_0x1c815b){const _0x136339=_0xa852ab,_0x5622e8=/\$gameVariables\.value\((\d+)\)/gi,_0x46bd54=/\\V\[(\d+)\]/gi;while(_0x1c815b[_0x136339(0x57e)](_0x5622e8)){_0x1c815b=_0x1c815b[_0x136339(0x68c)](_0x5622e8,(_0x361a73,_0x1f9c26)=>$gameVariables['value'](parseInt(_0x1f9c26)));}while(_0x1c815b[_0x136339(0x57e)](_0x46bd54)){_0x1c815b=_0x1c815b['replace'](_0x46bd54,(_0x5b0ea5,_0x223094)=>$gameVariables[_0x136339(0x420)](parseInt(_0x223094)));}return _0x1c815b;},Game_Character[_0xa852ab(0x410)][_0xa852ab(0x617)]=function(_0x2cfbaa){const _0x188054=_0xa852ab,_0x13f445=/\\SELFVAR\[(\d+)\]/gi;while(_0x2cfbaa['match'](_0x13f445)){_0x2cfbaa=_0x2cfbaa['replace'](_0x13f445,(_0x45504d,_0x41686c)=>getSelfVariableValue(this[_0x188054(0x1f1)],this['_eventId'],parseInt(_0x41686c)));}return _0x2cfbaa;},Game_Character['prototype'][_0xa852ab(0x65f)]=function(_0x524621,_0x366422){const _0x3b8410=_0xa852ab;if(_0x366422[_0x3b8410(0x57e)](/ANIMATION:[ ](\d+)/i))return this[_0x3b8410(0x23d)](Number(RegExp['$1']));if(_0x366422[_0x3b8410(0x57e)](/BALLOON:[ ](.*)/i))return this[_0x3b8410(0x4ae)](String(RegExp['$1']));if(_0x366422[_0x3b8410(0x57e)](/FADE IN:[ ](\d+)/i))return this[_0x3b8410(0x2f0)](Number(RegExp['$1']));if(_0x366422['match'](/FADE OUT:[ ](\d+)/i))return this[_0x3b8410(0x6e2)](Number(RegExp['$1']));if(_0x366422[_0x3b8410(0x57e)](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:TRUE|ON)/i))return this['forceCarrying']();if(_0x366422[_0x3b8410(0x57e)](/FORCE (?:CARRY|CARRYING|HOLD|HOLDING):[ ](?:FALSE|OFF)/i))return this[_0x3b8410(0x51d)]();if(_0x366422[_0x3b8410(0x57e)](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:TRUE|ON)/i))return this['forceDashing']();if(_0x366422['match'](/FORCE (?:DASH|DASHING|RUN|RUNNING):[ ](?:FALSE|OFF)/i))return this[_0x3b8410(0x4d8)]();if(_0x366422[_0x3b8410(0x57e)](/HUG:[ ]LEFT/i))return this[_0x3b8410(0x652)](_0x3b8410(0x30f));if(_0x366422['match'](/HUG:[ ]RIGHT/i))return this['processMoveRouteHugWall']('right');if(_0x366422['match'](/INDEX:[ ](\d+)/i))return this[_0x3b8410(0x22b)](Number(RegExp['$1']));if(_0x366422[_0x3b8410(0x57e)](/INDEX:[ ]([\+\-]\d+)/i)){const _0x2fcf41=this[_0x3b8410(0x544)]+Number(RegExp['$1']);return this[_0x3b8410(0x22b)](_0x2fcf41);}if(_0x366422['match'](/JUMP FORWARD:[ ](\d+)/i))return this['processMoveRouteJumpForward'](Number(RegExp['$1']));if(_0x366422[_0x3b8410(0x57e)](/JUMP TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this['processMoveRouteJumpTo'](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x366422['match'](/JUMP TO EVENT:[ ](\d+)/i)){const _0x56bd14=$gameMap['event'](Number(RegExp['$1']));return this[_0x3b8410(0x5f1)](_0x56bd14);}if(_0x366422[_0x3b8410(0x57e)](/JUMP TO PLAYER/i))return this[_0x3b8410(0x5f1)]($gamePlayer);if(_0x366422[_0x3b8410(0x57e)](/JUMP TO HOME/i)&&this[_0x3b8410(0x379)]){const _0x598dc8=this[_0x3b8410(0x4a8)],_0x5953e0=this[_0x3b8410(0x3fd)];return this[_0x3b8410(0x26d)](_0x598dc8,_0x5953e0);}if(_0x366422[_0x3b8410(0x57e)](/MOVE[ ](.*)[ ]UNTIL STOP/i)){const _0x1520f4=String(RegExp['$1']),_0x39642e=this[_0x3b8410(0x231)](_0x366422);return this['processMoveRouteMoveUntilStop'](_0x1520f4,_0x39642e);}if(_0x366422['match'](/MOVE TO:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0x136bec=Number(RegExp['$1']),_0x4189b9=Number(RegExp['$2']),_0x31e82b=this[_0x3b8410(0x231)](_0x366422);return this[_0x3b8410(0x3f1)](_0x136bec,_0x4189b9,_0x31e82b);}if(_0x366422[_0x3b8410(0x57e)](/MOVE TO EVENT:[ ](\d+)/i)){const _0x4ec77b=$gameMap[_0x3b8410(0x6b2)](Number(RegExp['$1'])),_0x199455=this['checkCollisionKeywords'](_0x366422);return this[_0x3b8410(0x3ba)](_0x4ec77b,_0x199455);}if(_0x366422[_0x3b8410(0x57e)](/MOVE TO PLAYER/i)){const _0x50a4f7=this[_0x3b8410(0x231)](_0x366422);return this[_0x3b8410(0x3ba)]($gamePlayer,_0x50a4f7);}if(_0x366422['match'](/MOVE TO HOME/i)&&this[_0x3b8410(0x379)]){const _0x3bac9b=this[_0x3b8410(0x4a8)],_0x49a1d4=this[_0x3b8410(0x3fd)],_0x268e7f=this[_0x3b8410(0x231)](_0x366422);return this['processMoveRouteMoveTo'](_0x3bac9b,_0x49a1d4,_0x268e7f);}if(_0x366422['match'](/MOVE LOWER LEFT:[ ](\d+)/i))return this[_0x3b8410(0x531)](0x1,Number(RegExp['$1']));if(_0x366422[_0x3b8410(0x57e)](/MOVE DOWN:[ ](\d+)/i))return this[_0x3b8410(0x531)](0x2,Number(RegExp['$1']));if(_0x366422['match'](/MOVE LOWER RIGHT:[ ](\d+)/i))return this[_0x3b8410(0x531)](0x3,Number(RegExp['$1']));if(_0x366422[_0x3b8410(0x57e)](/MOVE LEFT:[ ](\d+)/i))return this[_0x3b8410(0x531)](0x4,Number(RegExp['$1']));if(_0x366422['match'](/MOVE RIGHT:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x6,Number(RegExp['$1']));if(_0x366422[_0x3b8410(0x57e)](/MOVE UPPER LEFT:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x7,Number(RegExp['$1']));if(_0x366422['match'](/MOVE UP:[ ](\d+)/i))return this['processMoveRouteMoveRepeat'](0x8,Number(RegExp['$1']));if(_0x366422[_0x3b8410(0x57e)](/MOVE UPPER RIGHT:[ ](\d+)/i))return this[_0x3b8410(0x531)](0x9,Number(RegExp['$1']));if(_0x366422[_0x3b8410(0x57e)](/OPACITY:[ ](\d+)([%％])/i)){const _0x65ec5=Math[_0x3b8410(0x5e5)](Number(RegExp['$1'])/0x64*0xff);return this['setOpacity'](_0x65ec5['clamp'](0x0,0xff));}if(_0x366422['match'](/OPACITY:[ ]([\+\-]\d+)([%％])/i)){const _0xfda38a=this[_0x3b8410(0x313)]+Math['round'](Number(RegExp['$1'])/0x64*0xff);return this['setOpacity'](_0xfda38a[_0x3b8410(0x260)](0x0,0xff));}if(_0x366422[_0x3b8410(0x57e)](/OPACITY:[ ]([\+\-]\d+)/i)){const _0x182cd9=this[_0x3b8410(0x313)]+Number(RegExp['$1']);return this['setOpacity'](_0x182cd9[_0x3b8410(0x260)](0x0,0xff));}if(_0x366422[_0x3b8410(0x57e)](/PATTERN LOCK:[ ](\d+)/i))return this[_0x3b8410(0x404)](Number(RegExp['$1']));if(_0x366422[_0x3b8410(0x57e)](/PATTERN UNLOCK/i))return this[_0x3b8410(0x435)]=![];if(_0x366422[_0x3b8410(0x57e)](/POSE:[ ](.*)/i)){const _0x3b3181=String(RegExp['$1'])[_0x3b8410(0x20e)]()[_0x3b8410(0x572)]();return this[_0x3b8410(0x542)](_0x3b3181);}if(_0x366422[_0x3b8410(0x57e)](/STEP TOWARD:\s*(\d+)\s*[, ]\s*(\d+)/i)){const _0x23c766=Number(RegExp['$1']),_0x5acca8=Number(RegExp['$2']);return this['processMoveRouteStepTo'](_0x23c766,_0x5acca8);}if(_0x366422['match'](/STEP TOWARD EVENT:[ ](\d+)/i)){const _0x1c6a12=$gameMap['event'](Number(RegExp['$1']));return this[_0x3b8410(0x214)](_0x1c6a12);}if(_0x366422[_0x3b8410(0x57e)](/STEP TOWARD PLAYER/i))return this[_0x3b8410(0x214)]($gamePlayer);if(_0x366422[_0x3b8410(0x57e)](/STEP TOWARD HOME/i)&&this[_0x3b8410(0x379)]){const _0x46c9de=this[_0x3b8410(0x4a8)],_0x3ec841=this[_0x3b8410(0x3fd)];return this[_0x3b8410(0x27c)](_0x46c9de,_0x3ec841);}if(_0x366422[_0x3b8410(0x57e)](/STEP AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x3b8410(0x6c0)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x366422[_0x3b8410(0x57e)](/STEP AWAY FROM EVENT:[ ](\d+)/i)){const _0x546a3f=$gameMap[_0x3b8410(0x6b2)](Number(RegExp['$1']));return this[_0x3b8410(0x64c)](_0x546a3f);}if(_0x366422[_0x3b8410(0x57e)](/STEP AWAY FROM PLAYER/i))return this[_0x3b8410(0x64c)]($gamePlayer);if(_0x366422[_0x3b8410(0x57e)](/STEP AWAY FROM HOME/i)&&this[_0x3b8410(0x379)]){const _0x4f5344=this[_0x3b8410(0x4a8)],_0x4a0617=this[_0x3b8410(0x3fd)];return this[_0x3b8410(0x6c0)](_0x4f5344,_0x4a0617);}if(_0x366422[_0x3b8410(0x57e)](/TURN TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x3b8410(0x31c)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x366422['match'](/TURN TO EVENT:[ ](\d+)/i)){const _0xbfb4d8=$gameMap['event'](Number(RegExp['$1']));return this['turnTowardCharacter'](_0xbfb4d8);}if(_0x366422['match'](/TURN TO PLAYER/i))return this[_0x3b8410(0x4a6)]($gamePlayer);if(_0x366422[_0x3b8410(0x57e)](/TURN TO HOME/i)&&this[_0x3b8410(0x379)]){const _0x100ce8=this['_randomHomeX'],_0xa162=this[_0x3b8410(0x3fd)];return this[_0x3b8410(0x680)](_0x100ce8,_0xa162);}if(_0x366422[_0x3b8410(0x57e)](/TURN AWAY FROM:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x3b8410(0x416)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x366422[_0x3b8410(0x57e)](/TURN AWAY FROM EVENT:[ ](\d+)/i)){const _0x3dcf16=$gameMap[_0x3b8410(0x6b2)](Number(RegExp['$1']));return this['turnAwayFromCharacter'](_0x3dcf16);}if(_0x366422[_0x3b8410(0x57e)](/TURN AWAY FROM PLAYER/i))return this[_0x3b8410(0x5b5)]($gamePlayer);if(_0x366422[_0x3b8410(0x57e)](/TURN AWAY FROM HOME/i)&&this[_0x3b8410(0x379)]){const _0x3f458c=this[_0x3b8410(0x4a8)],_0x3e18c5=this[_0x3b8410(0x3fd)];return this[_0x3b8410(0x416)](_0x3f458c,_0x3e18c5);}if(_0x366422[_0x3b8410(0x57e)](/TURN LOWER LEFT/i))return this['setDirection'](0x1);if(_0x366422['match'](/TURN LOWER RIGHT/i))return this[_0x3b8410(0x361)](0x3);if(_0x366422[_0x3b8410(0x57e)](/TURN UPPER LEFT/i))return this['setDirection'](0x7);if(_0x366422[_0x3b8410(0x57e)](/TURN UPPER RIGHT/i))return this[_0x3b8410(0x361)](0x9);if(_0x366422[_0x3b8410(0x57e)](/Self Switch[ ](.*):[ ](.*)/i))return this['processMoveRouteSelfSwitch'](RegExp['$1'],RegExp['$2']);if(_0x366422[_0x3b8410(0x57e)](/Self Variable[ ](.*):[ ](.*)/i))return this[_0x3b8410(0x51f)](RegExp['$1'],RegExp['$2']);if(_0x366422[_0x3b8410(0x57e)](/TELEPORT TO:\s*(\d+)\s*[, ]\s*(\d+)/i))return this[_0x3b8410(0x61c)](Number(RegExp['$1']),Number(RegExp['$2']));if(_0x366422[_0x3b8410(0x57e)](/TELEPORT TO EVENT:[ ](\d+)/i)){const _0xf72418=$gameMap[_0x3b8410(0x6b2)](Number(RegExp['$1']));return this[_0x3b8410(0x394)](_0xf72418);}if(_0x366422[_0x3b8410(0x57e)](/TELEPORT TO PLAYER/i))return this[_0x3b8410(0x394)]($gamePlayer);if(_0x366422[_0x3b8410(0x57e)](/TELEPORT TO HOME/i)&&this['eventId']){const _0x131137=this[_0x3b8410(0x4a8)],_0x464f52=this['_randomHomeY'];return this[_0x3b8410(0x61c)](_0x131137,_0x464f52);}try{VisuMZ[_0x3b8410(0x5fb)][_0x3b8410(0x471)][_0x3b8410(0x558)](this,_0x524621);}catch(_0x3a0e05){if($gameTemp[_0x3b8410(0x642)]())console[_0x3b8410(0x521)](_0x3a0e05);}},Game_Character['prototype'][_0xa852ab(0x23d)]=function(_0xc21ce0){$gameTemp['requestAnimation']([this],_0xc21ce0);},Game_Character[_0xa852ab(0x410)][_0xa852ab(0x4ae)]=function(_0x2fcaba){const _0x35ea5e=_0xa852ab;let _0x548c91=0x0;switch(_0x2fcaba['toUpperCase']()[_0x35ea5e(0x572)]()){case'!':case _0x35ea5e(0x31d):_0x548c91=0x1;break;case'?':case _0x35ea5e(0x503):_0x548c91=0x2;break;case _0x35ea5e(0x6a8):case'NOTE':case _0x35ea5e(0x2da):case'MUSIC-NOTE':case _0x35ea5e(0x639):_0x548c91=0x3;break;case _0x35ea5e(0x2e8):case _0x35ea5e(0x3d2):_0x548c91=0x4;break;case _0x35ea5e(0x677):_0x548c91=0x5;break;case'SWEAT':_0x548c91=0x6;break;case'COBWEB':case _0x35ea5e(0x368):case _0x35ea5e(0x5a9):_0x548c91=0x7;break;case'SILENCE':case _0x35ea5e(0x4da):_0x548c91=0x8;break;case'LIGHT':case _0x35ea5e(0x266):case _0x35ea5e(0x20a):case'LIGHT-BULB':case _0x35ea5e(0x679):_0x548c91=0x9;break;case'Z':case'ZZ':case _0x35ea5e(0x3de):case _0x35ea5e(0x60e):_0x548c91=0xa;break;case'USER-DEFINED\x201':_0x548c91=0xb;break;case _0x35ea5e(0x560):_0x548c91=0xc;break;case _0x35ea5e(0x649):_0x548c91=0xd;break;case _0x35ea5e(0x4ab):_0x548c91=0xe;break;case _0x35ea5e(0x43c):_0x548c91=0xf;break;}$gameTemp[_0x35ea5e(0x2fa)](this,_0x548c91);},Game_Character[_0xa852ab(0x410)]['processMoveRouteFadeIn']=function(_0x26ed0c){const _0x156758=_0xa852ab;_0x26ed0c+=this[_0x156758(0x313)],this['setOpacity'](_0x26ed0c[_0x156758(0x260)](0x0,0xff));if(this[_0x156758(0x313)]<0xff)this['_moveRouteIndex']--;},Game_Character[_0xa852ab(0x410)][_0xa852ab(0x6e2)]=function(_0x2389fc){const _0xc2a9ef=_0xa852ab;_0x2389fc=this[_0xc2a9ef(0x313)]-_0x2389fc,this[_0xc2a9ef(0x60f)](_0x2389fc[_0xc2a9ef(0x260)](0x0,0xff));if(this['_opacity']>0x0)this[_0xc2a9ef(0x670)]--;},Game_Character[_0xa852ab(0x410)]['processMoveRouteHugWall']=function(_0x4c9b0f){const _0x243776=_0xa852ab,_0x45ecb6=[0x0,0x3,0x6,0x9,0x2,0x0,0x8,0x1,0x4,0x7],_0x49de71=[0x0,0x7,0x4,0x1,0x8,0x0,0x2,0x9,0x6,0x3],_0x9dba7b=this[_0x243776(0x2be)](),_0x191c94=(_0x4c9b0f==='left'?_0x45ecb6:_0x49de71)[_0x9dba7b],_0x18d7b5=(_0x4c9b0f===_0x243776(0x30f)?_0x49de71:_0x45ecb6)[_0x9dba7b];if(this[_0x243776(0x364)](this['x'],this['y'],_0x191c94))_0x4c9b0f===_0x243776(0x30f)?this[_0x243776(0x559)]():this[_0x243776(0x367)]();else!this[_0x243776(0x364)](this['x'],this['y'],this[_0x243776(0x2be)]())&&(this[_0x243776(0x364)](this['x'],this['y'],_0x18d7b5)?_0x4c9b0f===_0x243776(0x30f)?this[_0x243776(0x367)]():this[_0x243776(0x559)]():this[_0x243776(0x6da)]());this[_0x243776(0x364)](this['x'],this['y'],this[_0x243776(0x2be)]())&&this[_0x243776(0x2f3)]();},Game_Character[_0xa852ab(0x410)]['processMoveRouteSetIndex']=function(_0x28d0fa){const _0x84eac2=_0xa852ab;if(ImageManager[_0x84eac2(0x533)](this['_characterName']))return;_0x28d0fa=_0x28d0fa[_0x84eac2(0x260)](0x0,0x7),this[_0x84eac2(0x487)](this[_0x84eac2(0x5a6)],_0x28d0fa);},Game_Character[_0xa852ab(0x410)][_0xa852ab(0x478)]=function(_0x27fa2a){const _0x395d5e=_0xa852ab;switch(this['direction']()){case 0x1:this[_0x395d5e(0x626)](-_0x27fa2a,_0x27fa2a);break;case 0x2:this['jump'](0x0,_0x27fa2a);break;case 0x3:this[_0x395d5e(0x626)](_0x27fa2a,_0x27fa2a);break;case 0x4:this[_0x395d5e(0x626)](-_0x27fa2a,0x0);break;case 0x6:this[_0x395d5e(0x626)](_0x27fa2a,0x0);break;case 0x7:this['jump'](-_0x27fa2a,-_0x27fa2a);break;case 0x8:this['jump'](0x0,-_0x27fa2a);break;case 0x9:this[_0x395d5e(0x626)](_0x27fa2a,-_0x27fa2a);break;}},Game_Character[_0xa852ab(0x410)]['processMoveRouteJumpTo']=function(_0x418796,_0x41be87){const _0x48e632=_0xa852ab,_0x144e53=Math[_0x48e632(0x5e5)](_0x418796-this['x']),_0x3bc299=Math[_0x48e632(0x5e5)](_0x41be87-this['y']);this[_0x48e632(0x626)](_0x144e53,_0x3bc299);},Game_Character[_0xa852ab(0x410)]['processMoveRouteJumpToCharacter']=function(_0x563cbc){const _0x37d802=_0xa852ab;if(_0x563cbc)this[_0x37d802(0x26d)](_0x563cbc['x'],_0x563cbc['y']);},Game_Character[_0xa852ab(0x410)][_0xa852ab(0x27c)]=function(_0x58154e,_0x5c3269,_0x360996){const _0x59e1cf=_0xa852ab;let _0x456123=0x0;if(_0x360996)$gameTemp[_0x59e1cf(0x6e4)]=!![];$gameMap[_0x59e1cf(0x3d9)]()?_0x456123=this['findDiagonalDirectionTo'](_0x58154e,_0x5c3269):_0x456123=this[_0x59e1cf(0x3a3)](_0x58154e,_0x5c3269);if(_0x360996)$gameTemp['_moveAllowPlayerCollision']=![];this[_0x59e1cf(0x66f)](_0x456123),this[_0x59e1cf(0x294)](!![]);},Game_Character[_0xa852ab(0x410)]['processMoveRouteStepToCharacter']=function(_0x1ffa03){const _0x464dbc=_0xa852ab;if(_0x1ffa03)this[_0x464dbc(0x27c)](_0x1ffa03['x'],_0x1ffa03['y']);},Game_Character['prototype'][_0xa852ab(0x4eb)]=function(_0x4b3709,_0x432eaa){const _0x3a593a=_0xa852ab,_0x2b406f=this[_0x3a593a(0x6e9)](_0x4b3709),_0x12efde=this[_0x3a593a(0x42b)](_0x432eaa);},Game_Character[_0xa852ab(0x410)]['checkCollisionKeywords']=function(_0x4d6233){const _0x27c0c5=_0xa852ab;if(_0x4d6233[_0x27c0c5(0x57e)](/(?:CRASH|COLLIDE|COLLISION|ENCOUNTER|TOUCH)/i))return!![];else return _0x4d6233[_0x27c0c5(0x57e)](/(?:AVOID|EVADE|DODGE)/i)?![]:![];},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x47c)]=Game_Event[_0xa852ab(0x410)][_0xa852ab(0x4f9)],Game_Event[_0xa852ab(0x410)][_0xa852ab(0x4f9)]=function(_0x281ff7,_0x7ca508){const _0x261ad9=_0xa852ab;if($gameTemp['_moveAllowPlayerCollision'])return![];return VisuMZ[_0x261ad9(0x5fb)]['Game_Event_isCollidedWithPlayerCharacters'][_0x261ad9(0x558)](this,_0x281ff7,_0x7ca508);},Game_Character[_0xa852ab(0x410)][_0xa852ab(0x376)]=function(_0x2c62b5,_0x51bea4){const _0x3f2b38=_0xa852ab,_0x4768e4=['',_0x3f2b38(0x430),_0x3f2b38(0x4dd),_0x3f2b38(0x610),_0x3f2b38(0x2e0),'',_0x3f2b38(0x5df),_0x3f2b38(0x285),'UP','UPPER\x20RIGHT'],_0x28fb7e=_0x4768e4[_0x3f2b38(0x4ba)](_0x2c62b5[_0x3f2b38(0x20e)]()[_0x3f2b38(0x572)]());if(_0x28fb7e<=0x0)return;_0x51bea4&&($gameTemp['_moveAllowPlayerCollision']=!![]),this['canPass'](this['x'],this['y'],_0x28fb7e)&&(_0x51bea4&&($gameTemp['_moveAllowPlayerCollision']=![]),this[_0x3f2b38(0x66f)](_0x28fb7e),this[_0x3f2b38(0x670)]-=0x1),_0x51bea4&&($gameTemp['_moveAllowPlayerCollision']=![]);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x412)]=Game_Event['prototype'][_0xa852ab(0x21a)],Game_Event[_0xa852ab(0x410)][_0xa852ab(0x21a)]=function(_0x5e9d40,_0x6ac3a5){const _0x420605=_0xa852ab;if(VisuMZ[_0x420605(0x5fb)][_0x420605(0x412)][_0x420605(0x558)](this,_0x5e9d40,_0x6ac3a5))return!![];if($gameMap[_0x420605(0x474)]())return![];for(let _0x42d4bf=-this[_0x420605(0x495)][_0x420605(0x30f)];_0x42d4bf<=this['_addedHitbox'][_0x420605(0x6c8)];_0x42d4bf++){for(let _0xa15e3e=-this[_0x420605(0x495)]['up'];_0xa15e3e<=this[_0x420605(0x495)][_0x420605(0x49f)];_0xa15e3e++){if(VisuMZ['EventsMoveCore']['Game_Event_checkEventTriggerTouch'][_0x420605(0x558)](this,_0x5e9d40+_0x42d4bf,_0x6ac3a5+_0xa15e3e))return!![];}}return![];},Game_Character['prototype'][_0xa852ab(0x3f1)]=function(_0x5c728c,_0x1fc050,_0xcf071e){const _0x326190=_0xa852ab;this[_0x326190(0x27c)](_0x5c728c,_0x1fc050,_0xcf071e);if(this['x']!==_0x5c728c||this['y']!==_0x1fc050)this[_0x326190(0x670)]--;},Game_Character['prototype']['processMoveRouteMoveToCharacter']=function(_0x3eb5d1,_0x51c759){const _0x27b966=_0xa852ab;if(_0x3eb5d1&&!_0x3eb5d1[_0x27b966(0x4cb)]){this[_0x27b966(0x3f1)](_0x3eb5d1['x'],_0x3eb5d1['y'],_0x51c759);if(_0x3eb5d1[_0x27b966(0x3e2)]()&&this[_0x27b966(0x3e2)]()){const _0x279b7a=$gameMap[_0x27b966(0x485)](this['x'],this['y'],_0x3eb5d1['x'],_0x3eb5d1['y']);if(_0x279b7a<=0x1)this[_0x27b966(0x670)]++;}}},Game_Character['prototype']['processMoveRouteMoveRepeat']=function(_0x20fa00,_0x297c37){const _0x465959=_0xa852ab;_0x297c37=_0x297c37||0x0;const _0x13e38b={'code':0x1,'indent':null,'parameters':[]};_0x13e38b[_0x465959(0x30b)]=[0x0,0x5,0x1,0x6,0x2,0x0,0x3,0x7,0x4,0x8][_0x20fa00],this['_moveRoute'][_0x465959(0x22a)][this[_0x465959(0x670)]][_0x465959(0x402)][0x0]='';while(_0x297c37--){this['_moveRoute'][_0x465959(0x22a)][_0x465959(0x6c9)](this[_0x465959(0x670)]+0x1,0x0,_0x13e38b);}},Game_Character[_0xa852ab(0x410)][_0xa852ab(0x404)]=function(_0x41deb4){const _0x5462c5=_0xa852ab;this[_0x5462c5(0x435)]=!![],this[_0x5462c5(0x645)](_0x41deb4);},Game_Character[_0xa852ab(0x410)][_0xa852ab(0x46a)]=function(_0x19b4b4,_0x1a8dce){const _0x212f6d=_0xa852ab;if(this===$gamePlayer)return;const _0x39f18e=[this[_0x212f6d(0x1f1)],this[_0x212f6d(0x268)],'A'];_0x19b4b4[_0x212f6d(0x57e)](/\b[ABCD]\b/i)?_0x39f18e[0x2]=String(_0x19b4b4)[_0x212f6d(0x4fd)](0x0)[_0x212f6d(0x20e)]()[_0x212f6d(0x572)]():_0x39f18e[0x2]=_0x212f6d(0x6d4)[_0x212f6d(0x58f)](_0x19b4b4);switch(_0x1a8dce[_0x212f6d(0x20e)]()[_0x212f6d(0x572)]()){case'ON':case _0x212f6d(0x583):$gameSelfSwitches['setValue'](_0x39f18e,!![]);break;case _0x212f6d(0x209):case _0x212f6d(0x252):$gameSelfSwitches[_0x212f6d(0x5d6)](_0x39f18e,![]);break;case'TOGGLE':$gameSelfSwitches[_0x212f6d(0x5d6)](_0x39f18e,!$gameSelfSwitches[_0x212f6d(0x420)](_0x39f18e));break;}},Game_Character[_0xa852ab(0x410)]['processMoveRouteSelfVariable']=function(_0x3d073e,_0x4e5fec){const _0x30b630=_0xa852ab;if(this===$gamePlayer)return;const _0xa6e407=[this[_0x30b630(0x1f1)],this[_0x30b630(0x268)],_0x30b630(0x476)[_0x30b630(0x58f)](_0x3d073e)];$gameSelfSwitches[_0x30b630(0x5d6)](_0xa6e407,Number(_0x4e5fec));},Game_Character[_0xa852ab(0x410)][_0xa852ab(0x61c)]=function(_0x2dcba8,_0x4bf72f){const _0x231e24=_0xa852ab;this[_0x231e24(0x44e)](_0x2dcba8,_0x4bf72f);},Game_Character[_0xa852ab(0x410)]['processMoveRouteTeleportToCharacter']=function(_0x31274){const _0x18aa2f=_0xa852ab;if(_0x31274)this[_0x18aa2f(0x61c)](_0x31274['x'],_0x31274['y']);},Game_Character['prototype'][_0xa852ab(0x367)]=function(){const _0x2e8b6b=_0xa852ab;switch(this[_0x2e8b6b(0x2be)]()){case 0x1:this[_0x2e8b6b(0x361)](0x7);break;case 0x2:this[_0x2e8b6b(0x361)](0x4);break;case 0x3:this[_0x2e8b6b(0x361)](0x1);break;case 0x4:this[_0x2e8b6b(0x361)](0x8);break;case 0x6:this[_0x2e8b6b(0x361)](0x2);break;case 0x7:this[_0x2e8b6b(0x361)](0x9);break;case 0x8:this[_0x2e8b6b(0x361)](0x6);break;case 0x9:this[_0x2e8b6b(0x361)](0x3);break;}},Game_Character[_0xa852ab(0x410)][_0xa852ab(0x559)]=function(){const _0x5ebbfe=_0xa852ab;switch(this['direction']()){case 0x1:this[_0x5ebbfe(0x361)](0x3);break;case 0x2:this['setDirection'](0x6);break;case 0x3:this[_0x5ebbfe(0x361)](0x9);break;case 0x4:this[_0x5ebbfe(0x361)](0x2);break;case 0x6:this[_0x5ebbfe(0x361)](0x8);break;case 0x7:this[_0x5ebbfe(0x361)](0x1);break;case 0x8:this[_0x5ebbfe(0x361)](0x4);break;case 0x9:this[_0x5ebbfe(0x361)](0x7);break;}},Game_Character[_0xa852ab(0x410)]['getDirectionToPoint']=function(_0x3dfacd,_0x449dda,_0x4fcd6b){const _0x2bd87=_0xa852ab,_0x520e56=this[_0x2bd87(0x6e9)](_0x3dfacd),_0x292bac=this['deltaYFrom'](_0x449dda);if($gameMap[_0x2bd87(0x3d9)]()){if(_0x4fcd6b||this[_0x2bd87(0x48b)]()){if(_0x520e56>0x0&&_0x292bac<0x0)return 0x1;if(_0x520e56<0x0&&_0x292bac<0x0)return 0x3;if(_0x520e56>0x0&&_0x292bac>0x0)return 0x7;if(_0x520e56<0x0&&_0x292bac>0x0)return 0x9;}}if(Math[_0x2bd87(0x1f0)](_0x520e56)>Math[_0x2bd87(0x1f0)](_0x292bac))return _0x520e56>0x0?0x4:0x6;else{if(_0x292bac!==0x0)return _0x292bac>0x0?0x8:0x2;}return 0x0;},Game_Character[_0xa852ab(0x410)]['getDirectionFromPoint']=function(_0x1132f8,_0x2a2279,_0x1ea5eb){const _0x58d9b9=_0xa852ab,_0x4aa214=this[_0x58d9b9(0x6e9)](_0x1132f8),_0x1d95df=this[_0x58d9b9(0x42b)](_0x2a2279);if($gameMap[_0x58d9b9(0x3d9)]()){if(_0x1ea5eb||this['isSpriteVS8dir']()){if(_0x4aa214>0x0&&_0x1d95df<0x0)return 0x9;if(_0x4aa214<0x0&&_0x1d95df<0x0)return 0x7;if(_0x4aa214>0x0&&_0x1d95df>0x0)return 0x3;if(_0x4aa214<0x0&&_0x1d95df>0x0)return 0x1;}}if(Math[_0x58d9b9(0x1f0)](_0x4aa214)>Math[_0x58d9b9(0x1f0)](_0x1d95df))return _0x4aa214>0x0?0x6:0x4;else{if(_0x1d95df!==0x0)return _0x1d95df>0x0?0x2:0x8;}return 0x0;},Game_Character['prototype'][_0xa852ab(0x31c)]=function(_0x9b0438,_0x1ca6c7){const _0x396222=_0xa852ab,_0x2d4e54=this[_0x396222(0x391)](_0x9b0438,_0x1ca6c7,!![]);if(_0x2d4e54)this['executeMoveDir8'](_0x2d4e54);},Game_Character['prototype'][_0xa852ab(0x6c0)]=function(_0x98affe,_0x1772c6){const _0x57a0e5=_0xa852ab,_0x2f75df=this[_0x57a0e5(0x68a)](_0x98affe,_0x1772c6,!![]);if(_0x2f75df)this['executeMoveDir8'](_0x2f75df);},Game_Character[_0xa852ab(0x410)][_0xa852ab(0x680)]=function(_0x196f3c,_0x509fc1){const _0x331275=_0xa852ab,_0x42182c=this['getDirectionToPoint'](_0x196f3c,_0x509fc1,![]);if(_0x42182c)this[_0x331275(0x361)](_0x42182c);},Game_Character[_0xa852ab(0x410)]['turnAwayFromPoint']=function(_0x1153c0,_0x47cdb1){const _0x21ab6f=_0xa852ab,_0x358339=this[_0x21ab6f(0x68a)](_0x1153c0,_0x47cdb1,![]);if(_0x358339)this[_0x21ab6f(0x361)](_0x358339);},Game_Character['prototype'][_0xa852ab(0x453)]=function(_0x3f38b7){const _0x5f0402=_0xa852ab;if(_0x3f38b7)this[_0x5f0402(0x31c)](_0x3f38b7['x'],_0x3f38b7['y']);},Game_Character[_0xa852ab(0x410)]['moveAwayFromCharacter']=function(_0x5765ad){const _0x12222b=_0xa852ab;if(_0x5765ad)this[_0x12222b(0x6c0)](_0x5765ad['x'],_0x5765ad['y']);},Game_Character[_0xa852ab(0x410)]['turnTowardCharacter']=function(_0x42a3be){if(_0x42a3be)this['turnTowardPoint'](_0x42a3be['x'],_0x42a3be['y']);},Game_Character[_0xa852ab(0x410)][_0xa852ab(0x5b5)]=function(_0x1700e9){const _0x23f5f9=_0xa852ab;if(_0x1700e9)this[_0x23f5f9(0x416)](_0x1700e9['x'],_0x1700e9['y']);},VisuMZ[_0xa852ab(0x5fb)]['Game_Player_isDashing']=Game_Player[_0xa852ab(0x410)][_0xa852ab(0x212)],Game_Player[_0xa852ab(0x410)]['isDashing']=function(){const _0x11eb81=_0xa852ab;if(!Game_CharacterBase[_0x11eb81(0x57f)]&&this[_0x11eb81(0x6bd)]())return![];if(this[_0x11eb81(0x511)])return!![];return VisuMZ['EventsMoveCore'][_0x11eb81(0x25f)][_0x11eb81(0x558)](this);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x49e)]=Game_Player[_0xa852ab(0x410)][_0xa852ab(0x1fc)],Game_Player[_0xa852ab(0x410)]['getInputDirection']=function(){const _0x423d94=_0xa852ab;return $gameMap[_0x423d94(0x3d9)]()?this[_0x423d94(0x5ef)]():VisuMZ[_0x423d94(0x5fb)][_0x423d94(0x49e)][_0x423d94(0x558)](this);},Game_Player[_0xa852ab(0x410)][_0xa852ab(0x5ef)]=function(){return Input['dir8'];},Game_Player['prototype'][_0xa852ab(0x4dc)]=function(){const _0x4e1920=_0xa852ab;if($gameSystem[_0x4e1920(0x491)]())return 0x0;if(!this['isMoving']()&&this['canMove']()){let _0x2ee37b=this[_0x4e1920(0x1fc)]();if(_0x2ee37b>0x0)$gameTemp[_0x4e1920(0x3f0)]();else{if($gameTemp[_0x4e1920(0x527)]()){const _0x3e2068=$gameTemp['destinationX'](),_0x947517=$gameTemp[_0x4e1920(0x4c8)]();this[_0x4e1920(0x6a3)](_0x3e2068,_0x947517)?_0x2ee37b=this[_0x4e1920(0x650)](_0x3e2068,_0x947517):_0x2ee37b=this[_0x4e1920(0x3a3)](_0x3e2068,_0x947517);}}_0x2ee37b>0x0?(this[_0x4e1920(0x2cd)]=this[_0x4e1920(0x2cd)]||0x0,this[_0x4e1920(0x6bc)]()?this['setDirection'](_0x2ee37b):this['executeMove'](_0x2ee37b),this[_0x4e1920(0x2cd)]++):this['_inputTime']=0x0;}},Game_Player[_0xa852ab(0x410)][_0xa852ab(0x6bc)]=function(){const _0x3fe4e1=_0xa852ab,_0x3c298c=VisuMZ[_0x3fe4e1(0x5fb)][_0x3fe4e1(0x4d4)][_0x3fe4e1(0x2fb)];if(!_0x3c298c[_0x3fe4e1(0x690)])return![];if($gameTemp[_0x3fe4e1(0x527)]())return![];if(this[_0x3fe4e1(0x212)]()||this['isMoving']()||this['isOnLadder']())return![];return this[_0x3fe4e1(0x2cd)]<_0x3c298c[_0x3fe4e1(0x5e3)];},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x64a)]=Game_Player[_0xa852ab(0x410)][_0xa852ab(0x535)],Game_Player[_0xa852ab(0x410)][_0xa852ab(0x535)]=function(_0x3f9d3b){const _0x5ea36d=_0xa852ab;$gameMap[_0x5ea36d(0x3d9)]()?this['executeMoveDir8'](_0x3f9d3b):VisuMZ['EventsMoveCore'][_0x5ea36d(0x64a)][_0x5ea36d(0x558)](this,_0x3f9d3b);},VisuMZ['EventsMoveCore'][_0xa852ab(0x290)]=Game_Player[_0xa852ab(0x410)][_0xa852ab(0x3bc)],Game_Player[_0xa852ab(0x410)][_0xa852ab(0x3bc)]=function(_0x4db931,_0xbf0620,_0x39144f){const _0x155df2=_0xa852ab;if($gameMap[_0x155df2(0x40f)](_0x4db931,_0xbf0620,_0x39144f,_0x155df2(0x60d)))return this['isInVehicle']()&&this['vehicle']()?this[_0x155df2(0x55a)]()[_0x155df2(0x3bc)](_0x4db931,_0xbf0620,_0x39144f):!![];if($gameMap['isRegionForbidPass'](_0x4db931,_0xbf0620,_0x39144f,_0x155df2(0x60d)))return![];return VisuMZ['EventsMoveCore'][_0x155df2(0x290)][_0x155df2(0x558)](this,_0x4db931,_0xbf0620,_0x39144f);},VisuMZ[_0xa852ab(0x5fb)]['Game_Player_checkEventTriggerHere']=Game_Player[_0xa852ab(0x410)][_0xa852ab(0x33e)],Game_Player[_0xa852ab(0x410)][_0xa852ab(0x33e)]=function(_0x2d76a7){const _0x3553fb=_0xa852ab;VisuMZ[_0x3553fb(0x5fb)][_0x3553fb(0x65b)][_0x3553fb(0x558)](this,_0x2d76a7);if(this[_0x3553fb(0x220)]()){this[_0x3553fb(0x301)](_0x2d76a7);if(_0x2d76a7[_0x3553fb(0x37c)](0x0)&&this[_0x3553fb(0x396)]()===_0x3553fb(0x605))this[_0x3553fb(0x4c5)](this['x'],this['y']);else(_0x2d76a7[_0x3553fb(0x37c)](0x1)||_0x2d76a7[_0x3553fb(0x37c)](0x2))&&this[_0x3553fb(0x57b)]();}},VisuMZ['EventsMoveCore'][_0xa852ab(0x609)]=Game_Player[_0xa852ab(0x410)][_0xa852ab(0x238)],Game_Player[_0xa852ab(0x410)]['checkEventTriggerThere']=function(_0x3da544){const _0x5b0e49=_0xa852ab;VisuMZ[_0x5b0e49(0x5fb)][_0x5b0e49(0x609)]['call'](this,_0x3da544);if(this[_0x5b0e49(0x220)]()&&_0x3da544[_0x5b0e49(0x37c)](0x0)&&this['startMapCommonEventOnOKTarget']()==='front'){const _0x942519=this['direction'](),_0x3879e8=$gameMap[_0x5b0e49(0x233)](this['x'],_0x942519),_0x1a5d92=$gameMap[_0x5b0e49(0x5e6)](this['y'],_0x942519);this['startMapCommonEventOnOK'](_0x3879e8,_0x1a5d92);}},Game_Player['prototype'][_0xa852ab(0x301)]=function(_0xe17f15){const _0x32b683=_0xa852ab;if($gameMap[_0x32b683(0x474)]())return;if($gameMap[_0x32b683(0x392)]())return;const _0x27e3a7=$gameMap['events']();for(const _0x28d3b4 of _0x27e3a7){if(!_0x28d3b4)continue;if(!_0x28d3b4[_0x32b683(0x32c)](_0xe17f15))continue;if(this[_0x32b683(0x2dc)](_0x28d3b4))return _0x28d3b4[_0x32b683(0x3be)]();if(this[_0x32b683(0x4c2)](_0x28d3b4))return _0x28d3b4[_0x32b683(0x3be)]();}},Game_Player[_0xa852ab(0x410)][_0xa852ab(0x2dc)]=function(_0x2faa63){const _0x4968e4=_0xa852ab;if($gameMap[_0x4968e4(0x474)]())return![];if($gameMap[_0x4968e4(0x392)]())return![];return _0x2faa63['activationRegionList']()[_0x4968e4(0x37c)](this[_0x4968e4(0x5bc)]());},Game_Player[_0xa852ab(0x410)]['meetActivationProximityConditions']=function(_0x171374){const _0x1f001e=_0xa852ab;if($gameMap[_0x1f001e(0x474)]())return![];if($gameMap[_0x1f001e(0x392)]())return![];if(['none',_0x1f001e(0x537)][_0x1f001e(0x37c)](_0x171374[_0x1f001e(0x2db)]()))return![];const _0x1fd02f=_0x171374[_0x1f001e(0x2db)](),_0x285793=_0x171374[_0x1f001e(0x501)]();return this['checkEventProximity'](_0x171374,_0x1fd02f,_0x285793);},Game_Map[_0xa852ab(0x410)]['checkEventProximity']=function(_0x50fa26,_0x37156c,_0x1f6516,_0x16116a,_0x545ec0){const _0xd22e1e=_0xa852ab;switch(_0x16116a){case'square':return _0x545ec0>=Math[_0xd22e1e(0x1f0)](_0x1f6516[_0xd22e1e(0x6e9)](_0x50fa26))&&_0x545ec0>=Math[_0xd22e1e(0x1f0)](_0x1f6516[_0xd22e1e(0x42b)](_0x37156c));break;case'circle':const _0x2e1970=Math[_0xd22e1e(0x297)](_0x1f6516['x']-_0x50fa26,0x2),_0x343a74=Math['pow'](_0x1f6516['y']-_0x37156c,0x2);return _0x545ec0>=Math[_0xd22e1e(0x5e5)](Math[_0xd22e1e(0x356)](_0x2e1970+_0x343a74));break;case _0xd22e1e(0x493):case _0xd22e1e(0x5d9):case _0xd22e1e(0x33f):const _0x54fd0e=$gameMap[_0xd22e1e(0x485)](_0x50fa26,_0x37156c,_0x1f6516['x'],_0x1f6516['y']);return _0x545ec0>=_0x54fd0e;break;case'row':return _0x545ec0>=Math[_0xd22e1e(0x1f0)](_0x1f6516[_0xd22e1e(0x42b)](_0x37156c));break;case _0xd22e1e(0x3bb):return _0x545ec0>=Math['abs'](_0x1f6516['deltaXFrom'](_0x50fa26));break;}return![];},Game_Player[_0xa852ab(0x410)][_0xa852ab(0x2d7)]=function(_0x35fa82,_0x38e4c6,_0x6084f8){const _0x437263=_0xa852ab,_0x2e20f7=this['x'],_0x573ba5=this['y'];return $gameMap[_0x437263(0x2d7)](_0x2e20f7,_0x573ba5,_0x35fa82,_0x38e4c6,_0x6084f8);},Game_Player['prototype'][_0xa852ab(0x4c5)]=function(_0x28bc1b,_0x102c7b){const _0x21e413=_0xa852ab;if($gameMap['isEventRunning']())return;if($gameMap[_0x21e413(0x392)]())return;let _0x5d0b51=VisuMZ[_0x21e413(0x5fb)]['Settings']['RegionOk'],_0x286645=$gameMap[_0x21e413(0x5bc)](_0x28bc1b,_0x102c7b);const _0x2d80d5=_0x21e413(0x3ec)[_0x21e413(0x58f)](_0x286645);_0x5d0b51[_0x2d80d5]&&$gameTemp[_0x21e413(0x4df)](_0x5d0b51[_0x2d80d5]);},Game_Player[_0xa852ab(0x410)][_0xa852ab(0x396)]=function(){const _0x374864=_0xa852ab;return VisuMZ['EventsMoveCore'][_0x374864(0x4d4)]['RegionOkTarget'];},Game_Player[_0xa852ab(0x410)][_0xa852ab(0x57b)]=function(){const _0x10bbb3=_0xa852ab;if($gameMap['isEventRunning']())return;if($gameMap[_0x10bbb3(0x392)]())return;let _0x5c6f4a=VisuMZ[_0x10bbb3(0x5fb)]['Settings'][_0x10bbb3(0x51b)];const _0xddb03d=_0x10bbb3(0x3ec)[_0x10bbb3(0x58f)](this['regionId']());_0x5c6f4a[_0xddb03d]&&$gameTemp[_0x10bbb3(0x4df)](_0x5c6f4a[_0xddb03d]);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x563)]=Game_Player[_0xa852ab(0x410)][_0xa852ab(0x656)],Game_Player[_0xa852ab(0x410)][_0xa852ab(0x656)]=function(){const _0x4defed=_0xa852ab;VisuMZ[_0x4defed(0x5fb)]['Game_Player_increaseSteps']['call'](this),VisuMZ[_0x4defed(0x344)](0x0);},Game_Player[_0xa852ab(0x410)][_0xa852ab(0x2f9)]=function(){const _0xc9b35=_0xa852ab;VisuMZ[_0xc9b35(0x4cd)](0x0);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x3d1)]=Game_Follower[_0xa852ab(0x410)][_0xa852ab(0x6b7)],Game_Follower[_0xa852ab(0x410)]['initialize']=function(_0x106cc9){const _0x4bb230=_0xa852ab;VisuMZ[_0x4bb230(0x5fb)][_0x4bb230(0x3d1)][_0x4bb230(0x558)](this,_0x106cc9),this[_0x4bb230(0x3e3)]=![];},Game_Follower['prototype'][_0xa852ab(0x212)]=function(){const _0x1513fe=_0xa852ab;if(this[_0x1513fe(0x3e3)])return Game_Character['prototype'][_0x1513fe(0x212)][_0x1513fe(0x558)](this);return $gamePlayer[_0x1513fe(0x212)]();},Game_Follower[_0xa852ab(0x410)][_0xa852ab(0x2a1)]=function(){const _0x19825d=_0xa852ab;if(this[_0x19825d(0x3e3)])return Game_Character[_0x19825d(0x410)]['isDashingAndMoving'][_0x19825d(0x558)](this);return $gamePlayer[_0x19825d(0x2a1)]()&&this[_0x19825d(0x4ea)];},Game_Follower[_0xa852ab(0x410)]['realMoveSpeed']=function(){const _0x41a22d=_0xa852ab;return $gamePlayer[_0x41a22d(0x44f)]();},Game_Follower[_0xa852ab(0x410)][_0xa852ab(0x615)]=function(){const _0x22971e=_0xa852ab;Game_Character[_0x22971e(0x410)][_0x22971e(0x615)][_0x22971e(0x558)](this),this[_0x22971e(0x2de)]>0x0&&(this[_0x22971e(0x4ea)]=![]);},Game_Follower[_0xa852ab(0x410)][_0xa852ab(0x1fd)]=function(_0x38d0a6){const _0x58a0a8=_0xa852ab;this[_0x58a0a8(0x3e3)]=_0x38d0a6;},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x5c9)]=Game_Follower[_0xa852ab(0x410)][_0xa852ab(0x655)],Game_Follower[_0xa852ab(0x410)][_0xa852ab(0x655)]=function(_0x57c13d){const _0x7b8321=_0xa852ab;if(this[_0x7b8321(0x3e3)])return;if($gameSystem[_0x7b8321(0x378)]())return;VisuMZ['EventsMoveCore'][_0x7b8321(0x5c9)][_0x7b8321(0x558)](this,_0x57c13d),this[_0x7b8321(0x4ea)]=!![];},VisuMZ[_0xa852ab(0x5fb)]['Game_Vehicle_isMapPassable']=Game_Vehicle[_0xa852ab(0x410)][_0xa852ab(0x3bc)],Game_Vehicle[_0xa852ab(0x410)][_0xa852ab(0x3bc)]=function(_0x53446f,_0x4a2271,_0x20c538){const _0x4bf8cb=_0xa852ab;if($gameMap[_0x4bf8cb(0x40f)](_0x53446f,_0x4a2271,_0x20c538,this[_0x4bf8cb(0x4bd)]))return!![];if($gameMap[_0x4bf8cb(0x55f)](_0x53446f,_0x4a2271,_0x20c538,this[_0x4bf8cb(0x4bd)]))return![];return VisuMZ['EventsMoveCore']['Game_Vehicle_isMapPassable'][_0x4bf8cb(0x558)](this,_0x53446f,_0x4a2271,_0x20c538);},Game_Vehicle[_0xa852ab(0x410)]['isAirshipPassable']=function(_0x58c87b,_0x334f02,_0x1874ca){const _0x3338c0=_0xa852ab;if($gameMap[_0x3338c0(0x40f)](_0x58c87b,_0x334f02,_0x1874ca,this[_0x3338c0(0x4bd)]))return!![];if($gameMap[_0x3338c0(0x55f)](_0x58c87b,_0x334f02,_0x1874ca,this[_0x3338c0(0x4bd)]))return![];return VisuMZ[_0x3338c0(0x5fb)]['Game_CharacterBase_canPass']['call']($gamePlayer,_0x58c87b,_0x334f02,_0x1874ca);},VisuMZ['EventsMoveCore'][_0xa852ab(0x5ed)]=Game_Vehicle[_0xa852ab(0x410)][_0xa852ab(0x2ea)],Game_Vehicle[_0xa852ab(0x410)][_0xa852ab(0x2ea)]=function(_0x3e8ec3,_0x22095f,_0x45a3e5){const _0x364cbd=_0xa852ab;if($gameMap[_0x364cbd(0x4c6)](_0x3e8ec3,_0x22095f,_0x45a3e5,this[_0x364cbd(0x4bd)]))return!![];const _0x1b9abe=this['_type']['charAt'](0x0)[_0x364cbd(0x20e)]()+this[_0x364cbd(0x4bd)][_0x364cbd(0x61d)](0x1),_0x2f03ac=_0x364cbd(0x2f7)[_0x364cbd(0x58f)](_0x1b9abe);return VisuMZ['EventsMoveCore'][_0x364cbd(0x4d4)][_0x364cbd(0x5f2)][_0x2f03ac]?![]:VisuMZ[_0x364cbd(0x5fb)][_0x364cbd(0x5ed)][_0x364cbd(0x558)](this,_0x3e8ec3,_0x22095f,_0x45a3e5);},VisuMZ[_0xa852ab(0x5fb)]['Game_Vehicle_initMoveSpeed']=Game_Vehicle[_0xa852ab(0x410)]['initMoveSpeed'],Game_Vehicle['prototype'][_0xa852ab(0x324)]=function(){const _0x18a4d9=_0xa852ab;VisuMZ[_0x18a4d9(0x5fb)][_0x18a4d9(0x244)][_0x18a4d9(0x558)](this);const _0x225252=VisuMZ[_0x18a4d9(0x5fb)][_0x18a4d9(0x4d4)][_0x18a4d9(0x2fb)];if(this[_0x18a4d9(0x2a4)]()){if(_0x225252[_0x18a4d9(0x2cc)])this['setMoveSpeed'](_0x225252[_0x18a4d9(0x2cc)]);}else{if(this[_0x18a4d9(0x341)]()){if(_0x225252[_0x18a4d9(0x472)])this[_0x18a4d9(0x47e)](_0x225252[_0x18a4d9(0x472)]);}else{if(this[_0x18a4d9(0x6af)]()){if(_0x225252['AirshipSpeed'])this[_0x18a4d9(0x47e)](_0x225252[_0x18a4d9(0x517)]);}}}},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x4b0)]=Game_Event[_0xa852ab(0x410)]['initialize'],Game_Event[_0xa852ab(0x410)]['initialize']=function(_0x57f031,_0x34fa64){const _0xd3cef9=_0xa852ab;this[_0xd3cef9(0x23e)]=!![],VisuMZ[_0xd3cef9(0x5fb)]['Game_Event_initialize'][_0xd3cef9(0x558)](this,_0x57f031,_0x34fa64),this['_checkRelocateNotetag']=undefined,this[_0xd3cef9(0x6d9)](),this['setupMorphEvent'](),this['restoreSavedEventPosition']();},Game_Map['prototype']['referEvent']=function(_0x2713d1,_0x425a23){const _0x4fd212=_0xa852ab;return _0x2713d1===$gameMap[_0x4fd212(0x4c3)]()?$dataMap['events'][_0x425a23]:VisuMZ[_0x4fd212(0x4d6)][_0x2713d1][_0x4fd212(0x2e3)][_0x425a23];},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x2d9)]=Game_Event[_0xa852ab(0x410)]['event'],Game_Event[_0xa852ab(0x410)][_0xa852ab(0x6b2)]=function(){const _0x3eacd2=_0xa852ab;if(this[_0x3eacd2(0x369)]!==undefined){const _0x2fb589=this[_0x3eacd2(0x369)][_0x3eacd2(0x4c3)],_0x2204bb=this[_0x3eacd2(0x369)][_0x3eacd2(0x379)];return $gameMap[_0x3eacd2(0x69c)](_0x2fb589,_0x2204bb);}if(this[_0x3eacd2(0x641)]!==undefined){const _0x1c5f19=this[_0x3eacd2(0x641)]['mapId'],_0x1679c4=this['_eventCopyData'][_0x3eacd2(0x379)];return $gameMap[_0x3eacd2(0x69c)](_0x1c5f19,_0x1679c4);}if(this[_0x3eacd2(0x41f)]!==undefined){const _0x2c52a9=this[_0x3eacd2(0x41f)]['mapId'],_0x5c0aa5=this[_0x3eacd2(0x41f)][_0x3eacd2(0x379)];return $gameMap[_0x3eacd2(0x69c)](_0x2c52a9,_0x5c0aa5);}if($gameTemp[_0x3eacd2(0x43f)]!==undefined){const _0x27646c=$gameTemp[_0x3eacd2(0x43f)][_0x3eacd2(0x4c3)],_0x5535dc=$gameTemp[_0x3eacd2(0x43f)][_0x3eacd2(0x379)];return $gameMap[_0x3eacd2(0x69c)](_0x27646c,_0x5535dc);}return VisuMZ[_0x3eacd2(0x5fb)][_0x3eacd2(0x2d9)]['call'](this);},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x6ea)]=function(_0x390b76,_0x27b394){const _0x504ca2=_0xa852ab;if(_0x390b76===0x0||_0x27b394===0x0)return![];if(_0x390b76===$gameMap[_0x504ca2(0x4c3)]())return!![];if(!VisuMZ['PreloadedMaps'][_0x390b76]&&_0x390b76!==$gameMap[_0x504ca2(0x4c3)]())return $gameTemp[_0x504ca2(0x642)]()&&console[_0x504ca2(0x521)]('ERROR:\x20Map\x20%1\x20has\x20not\x20been\x20preloaded\x20for\x20remove\x20usage.'[_0x504ca2(0x58f)](_0x390b76)),![];return!![];},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x61f)]=Game_Event[_0xa852ab(0x410)]['start'],Game_Event[_0xa852ab(0x410)][_0xa852ab(0x3be)]=function(){const _0x364b29=_0xa852ab;VisuMZ[_0x364b29(0x5fb)][_0x364b29(0x61f)][_0x364b29(0x558)](this),Imported[_0x364b29(0x4ee)]&&Input[_0x364b29(0x347)](VisuMZ[_0x364b29(0x24c)][_0x364b29(0x4d4)][_0x364b29(0x606)]['FastForwardKey'])&&Input['clear']();},Game_Event[_0xa852ab(0x410)]['setupCopyEvent']=function(){const _0x35dfe9=_0xa852ab,_0x485de4=this[_0x35dfe9(0x6b2)]()[_0x35dfe9(0x28d)];if(_0x485de4==='')return;if(DataManager[_0x35dfe9(0x377)]()||DataManager[_0x35dfe9(0x440)]())return;const _0x8eb02d=VisuMZ['EventsMoveCore']['Settings'][_0x35dfe9(0x5b3)];let _0x11e905=null,_0x36aebb=0x0,_0x5c4827=0x0;if(_0x485de4[_0x35dfe9(0x57e)](/<COPY EVENT:[ ]MAP[ ](\d+),[ ]EVENT[ ](\d+)>/i)){_0x36aebb=Number(RegExp['$1']),_0x5c4827=Number(RegExp['$2']);if(_0x36aebb===0x0)_0x36aebb=$gameMap[_0x35dfe9(0x4c3)]();}else{if(_0x485de4[_0x35dfe9(0x57e)](/<COPY EVENT:[ ](\d+),[ ](\d+)>/i)){_0x36aebb=Number(RegExp['$1']),_0x5c4827=Number(RegExp['$2']);if(_0x36aebb===0x0)_0x36aebb=$gameMap['mapId']();}else{if(_0x485de4[_0x35dfe9(0x57e)](/<COPY EVENT:[ ](.*?)>/i)){const _0x550fa9=String(RegExp['$1'])['toUpperCase']()['trim']();_0x11e905=VisuMZ[_0x35dfe9(0x50c)][_0x550fa9];if(!_0x11e905)return;_0x36aebb=_0x11e905[_0x35dfe9(0x4f0)],_0x5c4827=_0x11e905[_0x35dfe9(0x2b6)];}}}if(!this[_0x35dfe9(0x6ea)](_0x36aebb,_0x5c4827))return;_0x8eb02d['PreCopyJS']['call'](this,_0x36aebb,_0x5c4827,this);if(_0x11e905)_0x11e905['PreCopyJS']['call'](this,_0x36aebb,_0x5c4827,this);this[_0x35dfe9(0x641)]={'mapId':_0x36aebb,'eventId':_0x5c4827},this['_pageIndex']=-0x2,this[_0x35dfe9(0x2af)](),_0x8eb02d[_0x35dfe9(0x417)][_0x35dfe9(0x558)](this,_0x36aebb,_0x5c4827,this);if(_0x11e905)_0x11e905[_0x35dfe9(0x417)][_0x35dfe9(0x558)](this,_0x36aebb,_0x5c4827,this);$gameMap[_0x35dfe9(0x41d)]();},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x6a1)]=function(){const _0x2e19ea=_0xa852ab,_0x47b6a9=$gameSystem[_0x2e19ea(0x587)](this);if(!_0x47b6a9)return;const _0x2bc9bf=_0x47b6a9[_0x2e19ea(0x374)][_0x2e19ea(0x20e)]()['trim']();_0x2bc9bf!==_0x2e19ea(0x692)?this[_0x2e19ea(0x5da)](_0x2bc9bf,!![]):this[_0x2e19ea(0x4f2)](_0x47b6a9[_0x2e19ea(0x4c3)],_0x47b6a9[_0x2e19ea(0x379)],!![]);},Game_Event[_0xa852ab(0x410)]['morphInto']=function(_0x29dc4f,_0x50ae83,_0x4c9c23){const _0x6f2f1a=_0xa852ab;if(!this['checkValidEventerMap'](_0x29dc4f,_0x50ae83))return;const _0x1f3b64=VisuMZ['EventsMoveCore'][_0x6f2f1a(0x4d4)][_0x6f2f1a(0x5b3)];if(!_0x4c9c23)_0x1f3b64['PreMorphJS'][_0x6f2f1a(0x558)](this,_0x29dc4f,_0x50ae83,this);this[_0x6f2f1a(0x369)]={'mapId':_0x29dc4f,'eventId':_0x50ae83},this[_0x6f2f1a(0x625)]=-0x2,this['refresh']();if(!_0x4c9c23)_0x1f3b64['PostMorphJS'][_0x6f2f1a(0x558)](this,_0x29dc4f,_0x50ae83,this);$gameMap[_0x6f2f1a(0x41d)]();},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x5da)]=function(_0x484b87,_0x195623){const _0x565f06=_0xa852ab;_0x484b87=_0x484b87[_0x565f06(0x20e)]()['trim']();const _0x9de61=VisuMZ['EventTemplates'][_0x484b87];if(!_0x9de61)return;const _0x5ba460=_0x9de61[_0x565f06(0x4f0)],_0x3aa600=_0x9de61[_0x565f06(0x2b6)];if(!this[_0x565f06(0x6ea)](_0x5ba460,_0x3aa600))return;if(!_0x195623)_0x9de61['PreMorphJS']['call'](this,_0x5ba460,_0x3aa600,this);this['morphInto'](_0x5ba460,_0x3aa600,_0x195623);if(!_0x195623)_0x9de61[_0x565f06(0x271)][_0x565f06(0x558)](this,_0x5ba460,_0x3aa600,this);if($gameMap)$gameMap[_0x565f06(0x41d)]();},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x59a)]=function(){const _0x58f4d2=_0xa852ab;this['_eventMorphData']=undefined,this[_0x58f4d2(0x625)]=-0x2,this[_0x58f4d2(0x2af)]();},Game_Event[_0xa852ab(0x410)]['setupSpawn']=function(_0x22a195){const _0x29e1e0=_0xa852ab,_0x41a3b4=VisuMZ[_0x29e1e0(0x5fb)][_0x29e1e0(0x4d4)]['Template'],_0x11c40f=_0x22a195[_0x29e1e0(0x374)][_0x29e1e0(0x20e)]()[_0x29e1e0(0x572)](),_0x4440d9=!['',_0x29e1e0(0x692)][_0x29e1e0(0x37c)](_0x11c40f);let _0x590387=0x0,_0x47dd2c=0x0;if(_0x4440d9){const _0x5b1244=VisuMZ[_0x29e1e0(0x50c)][_0x11c40f];if(!_0x5b1244)return;_0x590387=_0x5b1244[_0x29e1e0(0x4f0)],_0x47dd2c=_0x5b1244['EventID'];}else _0x590387=_0x22a195[_0x29e1e0(0x4c3)],_0x47dd2c=_0x22a195[_0x29e1e0(0x379)];if(!this[_0x29e1e0(0x6ea)](_0x590387,_0x47dd2c))return;if(_0x4440d9){const _0x5c7b12=VisuMZ[_0x29e1e0(0x50c)][_0x11c40f];_0x5c7b12[_0x29e1e0(0x2d4)][_0x29e1e0(0x558)](this,_0x590387,_0x47dd2c,this);}_0x41a3b4[_0x29e1e0(0x2d4)][_0x29e1e0(0x558)](this,_0x590387,_0x47dd2c,this),this[_0x29e1e0(0x41f)]=_0x22a195,this[_0x29e1e0(0x625)]=-0x2,this[_0x29e1e0(0x1f1)]=$gameMap[_0x29e1e0(0x4c3)](),this[_0x29e1e0(0x268)]=_0x22a195[_0x29e1e0(0x2a6)],this[_0x29e1e0(0x672)]=_0x22a195[_0x29e1e0(0x5e0)],this[_0x29e1e0(0x44e)](_0x22a195['x'],_0x22a195['y']),this[_0x29e1e0(0x361)](_0x22a195['direction']),this[_0x29e1e0(0x2af)]();if(_0x4440d9){const _0xda2c96=VisuMZ[_0x29e1e0(0x50c)][_0x11c40f];if(!_0xda2c96)return;_0xda2c96[_0x29e1e0(0x387)][_0x29e1e0(0x558)](this,_0x590387,_0x47dd2c,this);}_0x41a3b4['PostSpawnJS'][_0x29e1e0(0x558)](this,_0x590387,_0x47dd2c,this);const _0x59bf6f=SceneManager[_0x29e1e0(0x6ce)];if(_0x59bf6f&&_0x59bf6f[_0x29e1e0(0x56a)])_0x59bf6f[_0x29e1e0(0x56a)]['createSpawnedEvent'](this);},Game_Event[_0xa852ab(0x410)]['isSpawnedEvent']=function(){return!!this['_eventSpawnData'];},Game_Event[_0xa852ab(0x410)]['start']=function(){const _0x23d250=_0xa852ab;if(!this['list']())return;const _0x29010a=this[_0x23d250(0x22a)]()[_0x23d250(0x3ea)](_0x5f3bed=>_0x5f3bed['code']!==0x6c&&_0x5f3bed[_0x23d250(0x30b)]!==0x198);_0x29010a[_0x23d250(0x4d9)]>0x1&&(this['_starting']=!![],this[_0x23d250(0x32c)]([0x0,0x1,0x2])&&this[_0x23d250(0x2fc)]());},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x629)]=Game_Event[_0xa852ab(0x410)][_0xa852ab(0x675)],Game_Event['prototype']['clearPageSettings']=function(){const _0x5784a2=_0xa852ab;VisuMZ[_0x5784a2(0x5fb)][_0x5784a2(0x629)][_0x5784a2(0x558)](this),this[_0x5784a2(0x56b)](),this[_0x5784a2(0x4e7)]();},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x582)]=Game_Event[_0xa852ab(0x410)][_0xa852ab(0x666)],Game_Event['prototype'][_0xa852ab(0x666)]=function(){const _0x58c140=_0xa852ab;this[_0x58c140(0x4af)]=!![],VisuMZ[_0x58c140(0x5fb)][_0x58c140(0x582)][_0x58c140(0x558)](this),this[_0x58c140(0x261)](),this['autosaveEventLocation'](),this[_0x58c140(0x4af)]=![];},Game_Event[_0xa852ab(0x410)]['setupEventsMoveCoreEffects']=function(){const _0xb540f7=_0xa852ab;if(!this[_0xb540f7(0x6b2)]())return;this[_0xb540f7(0x56b)](),this[_0xb540f7(0x3db)](),this['setupEventsMoveCoreCommentTags'](),this[_0xb540f7(0x262)]();},Game_Event[_0xa852ab(0x410)]['setupEventsMoveCoreNotetags']=function(){const _0x422ef8=_0xa852ab,_0x168f63=this[_0x422ef8(0x6b2)]()[_0x422ef8(0x28d)];if(_0x168f63==='')return;this[_0x422ef8(0x515)](_0x168f63);},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x2a9)]=function(){const _0x590b58=_0xa852ab;if(!this[_0x590b58(0x543)]())return;const _0x4b8a71=this[_0x590b58(0x22a)]();let _0x1a7e9a='';for(const _0x1f82ff of _0x4b8a71){if([0x6c,0x198][_0x590b58(0x37c)](_0x1f82ff[_0x590b58(0x30b)])){if(_0x1a7e9a!=='')_0x1a7e9a+='\x0a';_0x1a7e9a+=_0x1f82ff[_0x590b58(0x402)][0x0];}}this[_0x590b58(0x515)](_0x1a7e9a);},Game_Event[_0xa852ab(0x410)]['initEventsMoveCoreEffects']=function(){const _0x45c668=_0xa852ab,_0x14e4b8=VisuMZ[_0x45c668(0x5fb)]['Settings'];this[_0x45c668(0x54b)]={'type':_0x45c668(0x407),'distance':0x0,'regionList':[]},this['_alwaysUpdateMove']=![],this[_0x45c668(0x237)]=![],this['clearAttachPictureSettings'](),this['_clickTrigger']=![],this[_0x45c668(0x401)]=![],(this[_0x45c668(0x42e)]()||this[_0x45c668(0x29b)]())&&this['_priorityType']===0x0&&(this[_0x45c668(0x401)]=0x0),this[_0x45c668(0x495)]={'up':0x0,'down':0x0,'left':0x0,'right':0x0},this[_0x45c668(0x446)]={'type':'none','distance':0x0},this[_0x45c668(0x1f5)]={'type':_0x45c668(0x407),'distance':0x0},$gameSystem[_0x45c668(0x566)](this),this[_0x45c668(0x47a)]=$gameSystem['getEventIconData'](this),this[_0x45c668(0x57a)]={'originalText':'','text':'','visibleRange':_0x14e4b8[_0x45c668(0x1f2)][_0x45c668(0x315)],'rangeType':_0x14e4b8['Label'][_0x45c668(0x3ca)],'offsetX':_0x14e4b8[_0x45c668(0x1f2)][_0x45c668(0x4ad)],'offsetY':_0x14e4b8[_0x45c668(0x1f2)][_0x45c668(0x426)],'hueShift':0x0},this[_0x45c668(0x2a3)]=![],this[_0x45c668(0x406)]=[],this[_0x45c668(0x2d6)]={'target':-0x1,'type':'random','delay':0x1,'opacityDelta':0x0},this[_0x45c668(0x6ab)]=_0x14e4b8['Movement']['RandomMoveWeight']??0x0,this[_0x45c668(0x3d0)]=![],this[_0x45c668(0x2c7)]=0x1,this[_0x45c668(0x3b3)]=0x1,this[_0x45c668(0x66a)]=![],this[_0x45c668(0x507)]=![],this[_0x45c668(0x3f8)]=![],this[_0x45c668(0x528)]={'visible':!![],'filename':_0x14e4b8['Movement'][_0x45c668(0x304)]},this['_tileExpand']={'up':0x0,'down':0x0,'left':0x0,'right':0x0},this[_0x45c668(0x63f)](),this[_0x45c668(0x5e2)]();},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x515)]=function(_0x1ef3e0){const _0x5a1f51=_0xa852ab;if(_0x1ef3e0[_0x5a1f51(0x57e)](/<ACTIVATION[ ](?:REGION|REGIONS):[ ]*(\d+(?:\s*,\s*\d+)*)>/i))this[_0x5a1f51(0x54b)]['regionList']=JSON[_0x5a1f51(0x6be)]('['+RegExp['$1'][_0x5a1f51(0x57e)](/\d+/g)+']'),this[_0x5a1f51(0x54b)]['type']=_0x5a1f51(0x537);else _0x1ef3e0[_0x5a1f51(0x57e)](/<ACTIVATION[ ](.*?):[ ](\d+)>/i)&&(type=String(RegExp['$1'])[_0x5a1f51(0x2cf)]()[_0x5a1f51(0x572)](),this['_activationProximity'][_0x5a1f51(0x34f)]=type,this[_0x5a1f51(0x54b)]['distance']=Number(RegExp['$2']));_0x1ef3e0[_0x5a1f51(0x57e)](/<(?:ATTACH |)PICTURE FILENAME:[ ](.*?)>/i)&&(this['_attachPicture'][_0x5a1f51(0x6a0)]=String(RegExp['$1']),this[_0x5a1f51(0x6ca)]['type']=_0x5a1f51(0x550));if(_0x1ef3e0['match'](/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) BLEND MODE:[ ](.*?)>/i)){const _0x4e267e=String(RegExp['$1'])[_0x5a1f51(0x20e)]()[_0x5a1f51(0x572)](),_0x2fbad8=['NORMAL','ADDITIVE',_0x5a1f51(0x477),_0x5a1f51(0x2ee)];this['_attachPicture']['blendMode']=_0x2fbad8[_0x5a1f51(0x4ba)](_0x4e267e)['clamp'](0x0,0x3);}_0x1ef3e0[_0x5a1f51(0x57e)](/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) (?:SIZE|MAX SIZE|MAX):[ ](\d+)>/i)&&(this[_0x5a1f51(0x6ca)][_0x5a1f51(0x687)]=Number(RegExp['$1']));_0x1ef3e0[_0x5a1f51(0x57e)](/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) OFFSET X:[ ]([\+\-]\d+)>/i)&&(this[_0x5a1f51(0x6ca)]['offsetX']=Number(RegExp['$1']));_0x1ef3e0['match'](/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) OFFSET Y:[ ]([\+\-]\d+)>/i)&&(this[_0x5a1f51(0x6ca)][_0x5a1f51(0x2ab)]=Number(RegExp['$1']));_0x1ef3e0['match'](/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x5a1f51(0x6ca)][_0x5a1f51(0x620)]=Number(RegExp['$1']),this[_0x5a1f51(0x6ca)][_0x5a1f51(0x2ab)]=Number(RegExp['$2']));_0x1ef3e0[_0x5a1f51(0x57e)](/<(?:ATTACH |)(?:PICTURE|ENEMY|SV ENEMY) SCALE:[ ](\d+)([%％])>/i)&&(this[_0x5a1f51(0x6ca)][_0x5a1f51(0x598)]=Number(RegExp['$1'])*0.01);_0x1ef3e0['match'](/<(?:ATTACH |)PICTURE TYPE:[ ](.*?)>/i)&&(this[_0x5a1f51(0x6ca)]['type']=String(RegExp['$1'])[_0x5a1f51(0x2cf)]()[_0x5a1f51(0x572)]());_0x1ef3e0['match'](/<(?:ATTACH |)ENEMY FILENAME:[ ](.*?)>/i)&&(this[_0x5a1f51(0x6ca)]['filename']=String(RegExp['$1']),this[_0x5a1f51(0x6ca)][_0x5a1f51(0x34f)]=_0x5a1f51(0x2b9));_0x1ef3e0[_0x5a1f51(0x57e)](/<(?:ATTACH |)SV ENEMY FILENAME:[ ](.*?)>/i)&&(this[_0x5a1f51(0x6ca)][_0x5a1f51(0x6a0)]=String(RegExp['$1']),this[_0x5a1f51(0x6ca)][_0x5a1f51(0x34f)]=_0x5a1f51(0x682));_0x1ef3e0[_0x5a1f51(0x57e)](/<ALWAYS UPDATE MOVEMENT>/i)&&(this[_0x5a1f51(0x224)]=!![]);_0x1ef3e0[_0x5a1f51(0x57e)](/<BYPASS CLICK STOP>/i)&&(this[_0x5a1f51(0x237)]=!![]);_0x1ef3e0['match'](/<CLICK TRIGGER>/i)&&(this[_0x5a1f51(0x636)]=!![]);_0x1ef3e0[_0x5a1f51(0x57e)](/<CUSTOM Z:[ ](.*?)>/i)&&(this[_0x5a1f51(0x401)]=Number(RegExp['$1'])||0x0);_0x1ef3e0[_0x5a1f51(0x57e)](/<ENC(?:|OUNTER) HALF[ ](.*?):[ ](\d+)>/i)&&(type=String(RegExp['$1'])[_0x5a1f51(0x2cf)]()[_0x5a1f51(0x572)](),this[_0x5a1f51(0x446)][_0x5a1f51(0x34f)]=type,this[_0x5a1f51(0x446)][_0x5a1f51(0x485)]=Number(RegExp['$2']));_0x1ef3e0[_0x5a1f51(0x57e)](/<ENC(?:|OUNTER) NONE[ ](.*?):[ ](\d+)>/i)&&(type=String(RegExp['$1'])[_0x5a1f51(0x2cf)]()['trim'](),this[_0x5a1f51(0x1f5)][_0x5a1f51(0x34f)]=type,this[_0x5a1f51(0x1f5)][_0x5a1f51(0x485)]=Number(RegExp['$2']));const _0x53afff=_0x1ef3e0[_0x5a1f51(0x57e)](/<HITBOX[ ](.*?):[ ](\d+)>/gi);if(_0x53afff)for(const _0x335aa2 of _0x53afff){if(_0x335aa2[_0x5a1f51(0x57e)](/<HITBOX[ ](.*?):[ ](\d+)>/i)){const _0x1e4dc6=String(RegExp['$1'])[_0x5a1f51(0x2cf)]()[_0x5a1f51(0x572)](),_0x5cd78e=Number(RegExp['$2']);this[_0x5a1f51(0x495)][_0x1e4dc6]=_0x5cd78e;}}if(this[_0x5a1f51(0x47a)][_0x5a1f51(0x439)]>=0x0&&!this[_0x5a1f51(0x47a)][_0x5a1f51(0x568)]){_0x1ef3e0[_0x5a1f51(0x57e)](/<ICON:[ ](\d+)>/i)&&(this[_0x5a1f51(0x47a)]['iconIndex']=Number(RegExp['$1']));_0x1ef3e0['match'](/<ICON (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this[_0x5a1f51(0x47a)][_0x5a1f51(0x601)]=Number(RegExp['$1']));_0x1ef3e0[_0x5a1f51(0x57e)](/<ICON (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this[_0x5a1f51(0x47a)][_0x5a1f51(0x5f0)]=Number(RegExp['$1']));_0x1ef3e0[_0x5a1f51(0x57e)](/<ICON (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this['_eventIcon'][_0x5a1f51(0x601)]=Number(RegExp['$1']),this[_0x5a1f51(0x47a)][_0x5a1f51(0x5f0)]=Number(RegExp['$2']));if(_0x1ef3e0[_0x5a1f51(0x57e)](/<ICON BLEND MODE:[ ](.*?)>/i)){const _0x4c0173=String(RegExp['$1'])['toUpperCase']()['trim'](),_0x23ddc4=['NORMAL',_0x5a1f51(0x229),_0x5a1f51(0x477),'SCREEN'];this['_eventIcon'][_0x5a1f51(0x363)]=_0x23ddc4[_0x5a1f51(0x4ba)](_0x4c0173)['clamp'](0x0,0x3);}$gameSystem[_0x5a1f51(0x532)](this,this[_0x5a1f51(0x47a)][_0x5a1f51(0x439)],this['_eventIcon'][_0x5a1f51(0x601)],this[_0x5a1f51(0x47a)][_0x5a1f51(0x5f0)],this[_0x5a1f51(0x47a)]['blendMode']);}if(_0x1ef3e0[_0x5a1f51(0x57e)](/<LABEL:[ ](.*?)>/i)){let _0x3a098b=String(RegExp['$1'])[_0x5a1f51(0x572)]();this[_0x5a1f51(0x57a)][_0x5a1f51(0x3c2)]=_0x3a098b,this[_0x5a1f51(0x57a)][_0x5a1f51(0x3e4)]=_0x3a098b;}if(_0x1ef3e0[_0x5a1f51(0x57e)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i)){let _0x4df7b5=String(RegExp['$1'])[_0x5a1f51(0x572)]();this['_labelWindow']['text']=_0x4df7b5,this[_0x5a1f51(0x57a)][_0x5a1f51(0x3e4)]=_0x4df7b5;}_0x1ef3e0[_0x5a1f51(0x57e)](/<LABEL (?:BUFFER|OFFSET) X:[ ]([\+\-]\d+)>/i)&&(this[_0x5a1f51(0x57a)][_0x5a1f51(0x620)]=Number(RegExp['$1']));_0x1ef3e0['match'](/<LABEL (?:BUFFER|OFFSET) Y:[ ]([\+\-]\d+)>/i)&&(this[_0x5a1f51(0x57a)][_0x5a1f51(0x2ab)]=Number(RegExp['$1']));_0x1ef3e0['match'](/<LABEL (?:BUFFER|OFFSET):[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x5a1f51(0x57a)][_0x5a1f51(0x620)]=Number(RegExp['$1']),this[_0x5a1f51(0x57a)][_0x5a1f51(0x2ab)]=Number(RegExp['$2']));_0x1ef3e0[_0x5a1f51(0x57e)](/<LABEL HUE SHIFT:[ ](.*?)>/i)&&(this[_0x5a1f51(0x57a)][_0x5a1f51(0x272)]=Number(RegExp['$1']));_0x1ef3e0[_0x5a1f51(0x57e)](/<LABEL RANGE:[ ](\d+)>/i)&&(this['_labelWindow'][_0x5a1f51(0x607)]=Number(RegExp['$1']));_0x1ef3e0[_0x5a1f51(0x57e)](/<LABEL RANGE TYPE: SQUARE>/i)&&(this[_0x5a1f51(0x57a)]['rangeType']=_0x5a1f51(0x1f9));_0x1ef3e0['match'](/<LABEL RANGE TYPE: (?:RADIUS|DELTA|DIAMOND)>/i)&&(this['_labelWindow'][_0x5a1f51(0x6ac)]=_0x5a1f51(0x5d9));_0x1ef3e0[_0x5a1f51(0x57e)](/<LABEL RANGE TYPE: CIRCLE>/i)&&(this[_0x5a1f51(0x57a)]['rangeType']=_0x5a1f51(0x32e));this[_0x5a1f51(0x6c6)]();_0x1ef3e0[_0x5a1f51(0x57e)](/<MIRROR SPRITE>/i)&&(this['_mirrorSprite']=!![]);if(_0x1ef3e0[_0x5a1f51(0x57e)](/<MOVE ONLY (?:REGION|REGIONS):[ ](\d+(?:\s*,\s*\d+)*)>/i)){const _0x53350b=JSON[_0x5a1f51(0x6be)]('['+RegExp['$1'][_0x5a1f51(0x57e)](/\d+/g)+']');this[_0x5a1f51(0x406)]=this[_0x5a1f51(0x406)][_0x5a1f51(0x1f7)](_0x53350b),this[_0x5a1f51(0x406)][_0x5a1f51(0x382)](0x0);}if(_0x1ef3e0[_0x5a1f51(0x57e)](/<MOVE SYNCH TARGET:[ ](.*?)>/i)){const _0xbe268e=String(RegExp['$1']);if(_0xbe268e['match'](/PLAYER/i))this[_0x5a1f51(0x2d6)][_0x5a1f51(0x2b3)]=0x0;else _0xbe268e['match'](/EVENT[ ](\d+)/i)&&(this['_moveSynch']['target']=Number(RegExp['$1']));}_0x1ef3e0[_0x5a1f51(0x57e)](/<MOVE SYNCH TYPE:[ ](.*?)>/i)&&(this[_0x5a1f51(0x2d6)][_0x5a1f51(0x34f)]=String(RegExp['$1'])[_0x5a1f51(0x2cf)]()[_0x5a1f51(0x572)]());_0x1ef3e0['match'](/<MOVE SYNCH DELAY:[ ](\d+)>/i)&&(this[_0x5a1f51(0x2d6)][_0x5a1f51(0x5ad)]=Number(RegExp['$1']));_0x1ef3e0['match'](/<MOVE SYNCH DISTANCE OPACITY:[ ](.*?)>/i)&&(this[_0x5a1f51(0x2d6)][_0x5a1f51(0x247)]=Number(RegExp['$1']));if(_0x1ef3e0[_0x5a1f51(0x57e)](/<TRUE RANDOM MOVE>/i))this[_0x5a1f51(0x6ab)]=0x0;else _0x1ef3e0['match'](/<RANDOM MOVE WEIGHT:[ ](.*?)>/i)&&(this[_0x5a1f51(0x6ab)]=Number(RegExp['$1'])||0x0);_0x1ef3e0[_0x5a1f51(0x57e)](/<SAVE EVENT (?:LOCATION|LOCATIONS)>/i)&&(this['_saveEventLocation']=!![]);_0x1ef3e0[_0x5a1f51(0x57e)](/<SCALE X:[ ](\d+)([%％])>/i)&&(this[_0x5a1f51(0x2c7)]=Number(RegExp['$1'])*0.01);_0x1ef3e0[_0x5a1f51(0x57e)](/<SCALE Y:[ ](\d+)([%％])>/i)&&(this[_0x5a1f51(0x3b3)]=Number(RegExp['$1'])*0.01);if(_0x1ef3e0[_0x5a1f51(0x57e)](/<SCALE:[ ](\d+)([%％])>/i)){const _0x34d3ba=Number(RegExp['$1'])*0.01;this[_0x5a1f51(0x2c7)]=_0x34d3ba,this['_scaleBaseY']=_0x34d3ba;}_0x1ef3e0[_0x5a1f51(0x57e)](/<SCREEN ACTIVATION>/i)&&(this['_screenActivation']=!![],this['_screenParallel']=![],this[_0x5a1f51(0x3f8)]=![]);if(_0x1ef3e0[_0x5a1f51(0x57e)](/<SCREEN PARALLEL>/i))this[_0x5a1f51(0x66a)]=![],this[_0x5a1f51(0x507)]=!![],this[_0x5a1f51(0x3f8)]=![];else _0x1ef3e0[_0x5a1f51(0x57e)](/<SCREEN PARALLEL ONCE>/i)&&(this['_screenActivation']=![],this[_0x5a1f51(0x507)]=!![],this[_0x5a1f51(0x3f8)]=!![]);_0x1ef3e0[_0x5a1f51(0x57e)](/<HIDE SHADOW>/i)&&(this[_0x5a1f51(0x528)][_0x5a1f51(0x603)]=![]),_0x1ef3e0[_0x5a1f51(0x57e)](/<SHADOW FILENAME:[ ](.*?)>/i)&&(this[_0x5a1f51(0x528)][_0x5a1f51(0x6a0)]=String(RegExp['$1'])),_0x1ef3e0[_0x5a1f51(0x57e)](/<SPRITE OFFSET X:[ ]([\+\-]\d+)>/i)&&(this[_0x5a1f51(0x38f)]=Number(RegExp['$1'])),_0x1ef3e0[_0x5a1f51(0x57e)](/<SPRITE OFFSET Y:[ ]([\+\-]\d+)>/i)&&(this[_0x5a1f51(0x4d0)]=Number(RegExp['$1'])),_0x1ef3e0[_0x5a1f51(0x57e)](/<SPRITE OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(this[_0x5a1f51(0x38f)]=Number(RegExp['$1']),this[_0x5a1f51(0x4d0)]=Number(RegExp['$2'])),_0x1ef3e0[_0x5a1f51(0x57e)](/<STEP PATTERN:[ ](.*)>/i)&&(this['_stepPattern']=String(RegExp['$1'])[_0x5a1f51(0x20e)]()['trim']()),_0x1ef3e0[_0x5a1f51(0x57e)](/<(?:TILE EXPAND|EXPAND TILE) UP:[ ](\d+)>/i)&&(this[_0x5a1f51(0x2e6)]=this[_0x5a1f51(0x2e6)]||{},this[_0x5a1f51(0x2e6)]['up']=Number(RegExp['$1'])),_0x1ef3e0[_0x5a1f51(0x57e)](/<(?:TILE EXPAND|EXPAND TILE) DOWN:[ ](\d+)>/i)&&(this[_0x5a1f51(0x2e6)]=this['_tileExpand']||{},this['_tileExpand'][_0x5a1f51(0x49f)]=Number(RegExp['$1'])),_0x1ef3e0[_0x5a1f51(0x57e)](/<(?:TILE EXPAND|EXPAND TILE) LEFT:[ ](\d+)>/i)&&(this[_0x5a1f51(0x2e6)]=this[_0x5a1f51(0x2e6)]||{},this[_0x5a1f51(0x2e6)]['left']=Number(RegExp['$1'])),_0x1ef3e0[_0x5a1f51(0x57e)](/<(?:TILE EXPAND|EXPAND TILE) RIGHT:[ ](\d+)>/i)&&(this['_tileExpand']=this['_tileExpand']||{},this[_0x5a1f51(0x2e6)][_0x5a1f51(0x6c8)]=Number(RegExp['$1']));},Game_Event[_0xa852ab(0x410)]['updateEventLabelText']=function(){const _0x1ed552=_0xa852ab;$gameTemp[_0x1ed552(0x5a0)](this),this[_0x1ed552(0x57a)][_0x1ed552(0x3c2)]=this[_0x1ed552(0x57a)][_0x1ed552(0x3e4)];for(;;){if(this[_0x1ed552(0x57a)]['text']['match'](/\\V\[(\d+)\]/gi))this['_labelWindow'][_0x1ed552(0x3c2)]=this[_0x1ed552(0x57a)][_0x1ed552(0x3e4)][_0x1ed552(0x68c)](/\\V\[(\d+)\]/gi,(_0x5df24a,_0x2a79a9)=>$gameVariables['value'](parseInt(_0x2a79a9)));else break;}$gameTemp[_0x1ed552(0x4b9)]();},Game_Event['prototype'][_0xa852ab(0x262)]=function(){const _0x34caa8=_0xa852ab;this[_0x34caa8(0x35b)]();},Game_Event[_0xa852ab(0x410)]['isNearTheScreen']=function(){const _0x514d78=_0xa852ab;if(this[_0x514d78(0x224)])return!![];return Game_Character[_0x514d78(0x410)][_0x514d78(0x4fa)][_0x514d78(0x558)](this);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x295)]=Game_Event[_0xa852ab(0x410)][_0xa852ab(0x5dc)],Game_Event[_0xa852ab(0x410)][_0xa852ab(0x5dc)]=function(){const _0x4bd770=_0xa852ab;if(this[_0x4bd770(0x5d4)]())return;VisuMZ['EventsMoveCore']['Game_Event_updateSelfMovement']['call'](this),this[_0x4bd770(0x27e)]()&&VisuMZ[_0x4bd770(0x344)](this[_0x4bd770(0x268)]);},Game_Event['prototype']['isPreventSelfMovement']=function(){const _0x277353=_0xa852ab,_0x5eed4e=VisuMZ[_0x277353(0x5fb)][_0x277353(0x4d4)][_0x277353(0x2fb)];if($gameMap['isEventRunning']()&&_0x5eed4e[_0x277353(0x29f)])return!![];if($gameMessage[_0x277353(0x6d5)]()&&_0x5eed4e[_0x277353(0x2b4)])return!![];if(!$gameSystem[_0x277353(0x631)]())return!![];if(this[_0x277353(0x4ec)]()>=0x0)return!![];if(!SceneManager['_scene'][_0x277353(0x6ae)])return!![];return![];},Game_Event[_0xa852ab(0x410)]['updateShadowChanges']=function(){const _0x5fb8db=_0xa852ab,_0x32086e=SceneManager[_0x5fb8db(0x6ce)][_0x5fb8db(0x56a)];if(_0x32086e){const _0x2d7536=_0x32086e[_0x5fb8db(0x254)](this);_0x2d7536&&_0x2d7536['_shadowSprite']&&_0x2d7536[_0x5fb8db(0x564)][_0x5fb8db(0x37d)]!==this[_0x5fb8db(0x55c)]()&&(_0x2d7536[_0x5fb8db(0x564)][_0x5fb8db(0x37d)]=this[_0x5fb8db(0x55c)](),_0x2d7536[_0x5fb8db(0x564)]['bitmap']=ImageManager['loadSystem'](_0x2d7536[_0x5fb8db(0x564)]['_filename']));}},Game_Event[_0xa852ab(0x410)]['shadowFilename']=function(){const _0x56de0b=_0xa852ab;return this[_0x56de0b(0x528)][_0x56de0b(0x6a0)];},Game_Event[_0xa852ab(0x410)]['isShadowVisible']=function(){const _0x1a0876=_0xa852ab;if(!this[_0x1a0876(0x528)][_0x1a0876(0x603)])return![];if($gamePlayer['_noEventMovementShadow'])return![];return Game_CharacterBase['prototype'][_0x1a0876(0x628)][_0x1a0876(0x558)](this);},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x299)]=function(){const _0x8a1e8e=_0xa852ab;return this[_0x8a1e8e(0x57a)]['text'];},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x2d8)]=function(){const _0x59e74c=_0xa852ab;return this[_0x59e74c(0x57a)][_0x59e74c(0x607)]??VisuMZ[_0x59e74c(0x5fb)][_0x59e74c(0x4d4)][_0x59e74c(0x1f2)]['VisibleRange'];},Game_Event[_0xa852ab(0x410)]['labelWindowRangeType']=function(){const _0x2d360a=_0xa852ab;return this[_0x2d360a(0x57a)][_0x2d360a(0x6ac)]??VisuMZ[_0x2d360a(0x5fb)]['Settings']['Label'][_0x2d360a(0x3ca)]??_0x2d360a(0x1f9);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x653)]=function(_0x4c1db4){const _0x1c89b3=_0xa852ab,_0x554eb8=_0x4c1db4[_0x1c89b3(0x35c)](),_0x703f86=_0x4c1db4['labelWindowRange']();return $gameMap[_0x1c89b3(0x2d7)]($gamePlayer['x'],$gamePlayer['y'],_0x4c1db4,_0x554eb8,_0x703f86);},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x3bc)]=function(_0x3cf275,_0x4dcc81,_0x282c21){const _0x190bc8=_0xa852ab;if(this['hasMoveOnlyRegions']())return this[_0x190bc8(0x3df)](_0x3cf275,_0x4dcc81,_0x282c21);if($gameMap[_0x190bc8(0x40f)](_0x3cf275,_0x4dcc81,_0x282c21,_0x190bc8(0x6b2)))return!![];if($gameMap[_0x190bc8(0x55f)](_0x3cf275,_0x4dcc81,_0x282c21,_0x190bc8(0x6b2)))return![];return Game_Character[_0x190bc8(0x410)][_0x190bc8(0x3bc)][_0x190bc8(0x558)](this,_0x3cf275,_0x4dcc81,_0x282c21);},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x338)]=function(){const _0x1ff4da=_0xa852ab;if(this[_0x1ff4da(0x406)]===undefined)this[_0x1ff4da(0x56b)]();return this[_0x1ff4da(0x406)][_0x1ff4da(0x4d9)]>0x0;},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x3df)]=function(_0x4a982f,_0x3a9d42,_0x21b4ee){const _0xa9e24c=_0xa852ab,_0x8f37ef=$gameMap[_0xa9e24c(0x233)](_0x4a982f,_0x21b4ee),_0x582e60=$gameMap[_0xa9e24c(0x5e6)](_0x3a9d42,_0x21b4ee),_0x2e6c5c=$gameMap[_0xa9e24c(0x5bc)](_0x8f37ef,_0x582e60);return this[_0xa9e24c(0x406)][_0xa9e24c(0x37c)](_0x2e6c5c);},VisuMZ['EventsMoveCore'][_0xa852ab(0x4ac)]=Game_Event[_0xa852ab(0x410)]['findProperPageIndex'],Game_Event['prototype'][_0xa852ab(0x36d)]=function(){const _0x184018=_0xa852ab;if(this[_0x184018(0x6b2)]()&&!$gameTemp[_0x184018(0x642)]()){if(this[_0x184018(0x6b2)]()['note'][_0x184018(0x57e)](/<(?:PLAYTEST|PLAY TEST)>/i))return-0x1;}return this['_advancedSwitchVariable']=![],this[_0x184018(0x49c)]=![],this[_0x184018(0x6b2)]()?VisuMZ['EventsMoveCore'][_0x184018(0x4ac)][_0x184018(0x558)](this):-0x1;},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x221)]=Game_Event[_0xa852ab(0x410)][_0xa852ab(0x553)],Game_Event[_0xa852ab(0x410)][_0xa852ab(0x553)]=function(_0x2802e1){const _0x40b4a8=_0xa852ab;this[_0x40b4a8(0x635)](_0x2802e1),$gameTemp[_0x40b4a8(0x5a0)](this);const _0x3c0ba0=VisuMZ[_0x40b4a8(0x5fb)][_0x40b4a8(0x221)][_0x40b4a8(0x558)](this,_0x2802e1);return $gameTemp[_0x40b4a8(0x4b9)](),_0x3c0ba0;},Game_Event[_0xa852ab(0x410)]['hasAdvancedSwitchVariable']=function(){const _0x1af223=_0xa852ab;return this[_0x1af223(0x613)];},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x635)]=function(_0x11b85c){const _0x2904e6=_0xa852ab,_0x305f44=_0x11b85c[_0x2904e6(0x4cf)];if(_0x305f44[_0x2904e6(0x3e5)]&&DataManager[_0x2904e6(0x318)](_0x305f44[_0x2904e6(0x336)]))this[_0x2904e6(0x613)]=!![];else{if(_0x305f44[_0x2904e6(0x695)]&&DataManager[_0x2904e6(0x318)](_0x305f44[_0x2904e6(0x54a)]))this[_0x2904e6(0x613)]=!![];else _0x305f44['variableValid']&&DataManager[_0x2904e6(0x529)](_0x305f44[_0x2904e6(0x496)])&&(this['_advancedSwitchVariable']=!![]);}},Game_Event['prototype'][_0xa852ab(0x6d3)]=function(){const _0x501412=_0xa852ab;if(this[_0x501412(0x4cb)])return![];return this[_0x501412(0x636)];},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x23a)]=function(){const _0x53543f=_0xa852ab;$gameTemp[_0x53543f(0x3f0)](),this[_0x53543f(0x3be)]();},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x5ec)]=function(_0x47b023,_0x202060){const _0x34e710=_0xa852ab;return this['_addedHitbox']?this['posEventsMoveCore'](_0x47b023,_0x202060):Game_Character[_0x34e710(0x410)][_0x34e710(0x5ec)][_0x34e710(0x558)](this,_0x47b023,_0x202060);},Game_Event['prototype'][_0xa852ab(0x4f1)]=function(_0x1fba3e,_0x255455){const _0xe8c826=_0xa852ab;var _0x456d25=this['x']-this[_0xe8c826(0x495)][_0xe8c826(0x30f)],_0x3a8e12=this['x']+this[_0xe8c826(0x495)][_0xe8c826(0x6c8)],_0x1bf2bf=this['y']-this['_addedHitbox']['up'],_0x4af373=this['y']+this[_0xe8c826(0x495)][_0xe8c826(0x49f)];return _0x456d25<=_0x1fba3e&&_0x1fba3e<=_0x3a8e12&&_0x1bf2bf<=_0x255455&&_0x255455<=_0x4af373;},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x2a2)]=Game_Event[_0xa852ab(0x410)][_0xa852ab(0x364)],Game_Event['prototype'][_0xa852ab(0x364)]=function(_0x39af1a,_0x52cb48,_0x4dae69){const _0x2d7fd9=_0xa852ab;for(let _0x2063d5=-this[_0x2d7fd9(0x495)][_0x2d7fd9(0x30f)];_0x2063d5<=this[_0x2d7fd9(0x495)]['right'];_0x2063d5++){for(let _0x1e790c=-this['_addedHitbox']['up'];_0x1e790c<=this['_addedHitbox'][_0x2d7fd9(0x49f)];_0x1e790c++){if(!Game_Character[_0x2d7fd9(0x410)]['canPass'][_0x2d7fd9(0x558)](this,_0x39af1a+_0x2063d5,_0x52cb48+_0x1e790c,_0x4dae69))return![];}}return!![];},Game_Event[_0xa852ab(0x410)]['isCollidedWithEvents']=function(_0x5095ff,_0x3a616c){const _0x1c36b4=_0xa852ab;if(Imported[_0x1c36b4(0x27d)]&&this['isSmartEventCollisionOn']())return this['checkSmartEventCollision'](_0x5095ff,_0x3a616c);else{const _0x47b73b=$gameMap[_0x1c36b4(0x62b)](_0x5095ff,_0x3a616c)['filter'](_0x2b3210=>_0x2b3210!==this);return _0x47b73b[_0x1c36b4(0x4d9)]>0x0;}},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x647)]=function(_0x260f38,_0x533f61){const _0x44cb2d=_0xa852ab;if(!this[_0x44cb2d(0x3e2)]())return![];else{const _0xeffdd8=$gameMap[_0x44cb2d(0x62b)](_0x260f38,_0x533f61)[_0x44cb2d(0x3ea)](_0x4ef69f=>_0x4ef69f!==this&&_0x4ef69f[_0x44cb2d(0x3e2)]());return _0xeffdd8[_0x44cb2d(0x4d9)]>0x0;}},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x2db)]=function(){const _0x27a002=_0xa852ab;if(!this['_activationProximity'])return _0x27a002(0x407);return this[_0x27a002(0x54b)][_0x27a002(0x34f)]||'none';},Game_Event[_0xa852ab(0x410)]['activationProximityDistance']=function(){const _0x1e4167=_0xa852ab;if(!this[_0x1e4167(0x54b)])return 0x0;return this[_0x1e4167(0x54b)]['distance']||0x0;},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x4aa)]=function(){const _0x13b859=_0xa852ab;if(!this[_0x13b859(0x54b)])return[];return this[_0x13b859(0x54b)][_0x13b859(0x2eb)]||[];},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x656)]=function(){const _0x3b33b0=_0xa852ab;Game_Character[_0x3b33b0(0x410)][_0x3b33b0(0x656)]['call'](this);if(['none','region'][_0x3b33b0(0x37c)](this[_0x3b33b0(0x2db)]()))return;$gamePlayer[_0x3b33b0(0x301)]([0x2]);},Game_Event[_0xa852ab(0x410)]['isOnScreen']=function(){const _0x522453=_0xa852ab,_0x507669=Math[_0x522453(0x5e5)]($gameMap['_displayX']),_0x379876=_0x507669+Math[_0x522453(0x41b)]($gameMap['screenTileX']())-0x1,_0x394d76=Math['round']($gameMap['_displayY']),_0x152a00=_0x394d76+Math[_0x522453(0x41b)]($gameMap[_0x522453(0x630)]())-0x1;return this['x']>=_0x507669&&this['x']<=_0x379876&&this['y']>=_0x394d76&&this['y']<=_0x152a00;},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x5d7)]=Game_Event[_0xa852ab(0x410)]['checkEventTriggerAuto'],Game_Event[_0xa852ab(0x410)][_0xa852ab(0x314)]=function(){const _0xd1571b=_0xa852ab;if(this[_0xd1571b(0x66a)]||this[_0xd1571b(0x507)]){if(this[_0xd1571b(0x466)]()){if(!this[_0xd1571b(0x4a4)]){this['_screenActivated']=!![];if(this[_0xd1571b(0x66a)])this[_0xd1571b(0x3be)]();else this['_screenParallel']&&(!this[_0xd1571b(0x213)]&&(this[_0xd1571b(0x213)]=new Game_Interpreter()),this[_0xd1571b(0x213)][_0xd1571b(0x69a)](this['list'](),this[_0xd1571b(0x268)]));}return;}else{this[_0xd1571b(0x4a4)]=![];return;}}if(this[_0xd1571b(0x4c4)]!==0x3)return;if(this[_0xd1571b(0x4af)])return;if(!this[_0xd1571b(0x2f1)](![]))return;if(!this[_0xd1571b(0x59c)](![]))return;VisuMZ['EventsMoveCore'][_0xd1571b(0x5d7)][_0xd1571b(0x558)](this);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x348)]=Game_Event['prototype'][_0xa852ab(0x445)],Game_Event[_0xa852ab(0x410)][_0xa852ab(0x445)]=function(){const _0x51d882=_0xa852ab;if(!this[_0x51d882(0x213)])return;if(!this[_0x51d882(0x2f1)](!![]))return;if(!this[_0x51d882(0x59c)](!![]))return;if(this['_interpreter']&&!this[_0x51d882(0x213)][_0x51d882(0x57c)]()&&this[_0x51d882(0x507)]){!this[_0x51d882(0x3f8)]&&(this[_0x51d882(0x4a4)]=![]);return;}VisuMZ[_0x51d882(0x5fb)][_0x51d882(0x348)][_0x51d882(0x558)](this);},Game_Event['prototype'][_0xa852ab(0x2f1)]=function(_0x1cc752){const _0x5207d7=_0xa852ab;if(!_0x1cc752&&$gameMap[_0x5207d7(0x474)]())return![];if(!_0x1cc752&&$gameMap[_0x5207d7(0x392)]())return![];if(this['activationRegionList']()<=0x0)return!![];return $gamePlayer['meetActivationRegionConditions'](this);},Game_Event[_0xa852ab(0x410)]['checkActivationProximity']=function(_0x20cda3){const _0x2e9de8=_0xa852ab;if(!_0x20cda3&&$gameMap[_0x2e9de8(0x474)]())return![];if(!_0x20cda3&&$gameMap['isAnyEventStarting']())return![];if(['none','region'][_0x2e9de8(0x37c)](this[_0x2e9de8(0x2db)]()))return!![];return $gamePlayer[_0x2e9de8(0x4c2)](this);},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x6c2)]=function(_0xc4bb7c){const _0x5a5e82=_0xa852ab,_0x2c4268=_0xc4bb7c?this[_0x5a5e82(0x446)]:this['_encounterNoneProximity'];return _0x2c4268?_0x2c4268[_0x5a5e82(0x34f)]:_0x5a5e82(0x407);},Game_Event['prototype']['encounterProximityDistance']=function(_0x536868){const _0x235964=_0xa852ab,_0x6dca2f=_0x536868?this['_encounterHalfProximity']:this[_0x235964(0x1f5)];return _0x6dca2f?_0x6dca2f[_0x235964(0x485)]:0x0;},VisuMZ['MoveAllSynchTargets']=function(_0x57b0c8){const _0x1866e6=_0xa852ab;for(const _0x2b6c06 of $gameMap[_0x1866e6(0x2e3)]()){if(!_0x2b6c06)continue;_0x2b6c06[_0x1866e6(0x4ec)]()===_0x57b0c8&&_0x2b6c06[_0x1866e6(0x352)]();}},VisuMZ['GetMoveSynchTarget']=function(_0x45bcf1){const _0x24a955=_0xa852ab;if(_0x45bcf1===0x0)return $gamePlayer;return $gameMap[_0x24a955(0x6b2)](_0x45bcf1);},Game_CharacterBase['prototype'][_0xa852ab(0x2f9)]=function(){},Game_Event['prototype'][_0xa852ab(0x2f9)]=function(){const _0x49cbc7=_0xa852ab;VisuMZ['FaceSynchAllSynchTargets'](this[_0x49cbc7(0x268)]);},VisuMZ[_0xa852ab(0x4cd)]=function(_0x52cff9){const _0x1c5586=_0xa852ab;for(const _0x4b61dc of $gameMap[_0x1c5586(0x2e3)]()){if(!_0x4b61dc)continue;_0x4b61dc['moveSynchTarget']()===_0x52cff9&&_0x4b61dc[_0x1c5586(0x4d2)]();}},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x4ec)]=function(){const _0x2fdf9b=_0xa852ab;return this[_0x2fdf9b(0x2d6)][_0x2fdf9b(0x2b3)];},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x436)]=function(){const _0x4b7d37=_0xa852ab;return this[_0x4b7d37(0x2d6)]['type'];},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x44f)]=function(){const _0x13b760=_0xa852ab;if(this['moveSynchTarget']()>=0x0){const _0x210b0a=VisuMZ[_0x13b760(0x48e)](this[_0x13b760(0x4ec)]());if(_0x210b0a)return _0x210b0a[_0x13b760(0x44f)]();}return Game_Character[_0x13b760(0x410)][_0x13b760(0x44f)][_0x13b760(0x558)](this);},Game_Event[_0xa852ab(0x410)]['updateMoveSynch']=function(){const _0x83a66f=_0xa852ab;this[_0x83a66f(0x2d6)][_0x83a66f(0x657)]=this[_0x83a66f(0x2d6)][_0x83a66f(0x657)]||0x0,this[_0x83a66f(0x2d6)][_0x83a66f(0x657)]--;if(this[_0x83a66f(0x2d6)][_0x83a66f(0x657)]>0x0)return;this[_0x83a66f(0x2d6)][_0x83a66f(0x657)]=this[_0x83a66f(0x2d6)]['delay'],this['processMoveSynch']();},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x2b8)]=function(_0xf5f44a){const _0x1bfa89=_0xa852ab;if(this[_0x1bfa89(0x4ec)]()>=0x0){const _0x2ac2f9=VisuMZ[_0x1bfa89(0x48e)](this[_0x1bfa89(0x4ec)]());if(_0x2ac2f9){const _0x284910=$gameMap['distance'](this['_realX'],this[_0x1bfa89(0x2bc)],_0x2ac2f9['_realX'],_0x2ac2f9[_0x1bfa89(0x2bc)])-0x1,_0x308b61=Math['min']($gameMap[_0x1bfa89(0x648)](),$gameMap[_0x1bfa89(0x481)]()),_0x4d0c11=this[_0x1bfa89(0x2d6)][_0x1bfa89(0x247)]||0x0;_0xf5f44a-=Math['max'](0x0,_0x284910)*_0x308b61*_0x4d0c11;}}return _0xf5f44a;},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x469)]=function(){const _0x5a5633=_0xa852ab;switch(this[_0x5a5633(0x436)]()){case _0x5a5633(0x3a9):this[_0x5a5633(0x6bf)]();break;case _0x5a5633(0x623):this[_0x5a5633(0x303)]();break;case _0x5a5633(0x473):this['processMoveSynchAway']();break;case _0x5a5633(0x291):this[_0x5a5633(0x674)]();break;case _0x5a5633(0x678):case _0x5a5633(0x64f):this['processMoveSynchMimic']();break;case _0x5a5633(0x63c):case _0x5a5633(0x2bf):this[_0x5a5633(0x659)]();break;case'mirror\x20horizontal':case'horizontal\x20mirror':case _0x5a5633(0x6c7):case _0x5a5633(0x567):this[_0x5a5633(0x508)]();break;case _0x5a5633(0x20b):case _0x5a5633(0x685):case _0x5a5633(0x540):case _0x5a5633(0x67b):this[_0x5a5633(0x576)]();break;default:this[_0x5a5633(0x6bf)]();break;}this[_0x5a5633(0x5a2)]();},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x6bf)]=function(){const _0x5aa1c4=_0xa852ab,_0x5a8022=[0x2,0x4,0x6,0x8];$gameMap[_0x5aa1c4(0x3d9)]()&&_0x5a8022[_0x5aa1c4(0x215)](0x1,0x3,0x7,0x9);const _0x1538d1=[];for(const _0xb14dfe of _0x5a8022){if(this[_0x5aa1c4(0x364)](this['x'],this['y'],_0xb14dfe))_0x1538d1[_0x5aa1c4(0x215)](_0xb14dfe);}if(_0x1538d1[_0x5aa1c4(0x4d9)]>0x0){const _0x43c34b=_0x1538d1[Math[_0x5aa1c4(0x65a)](_0x1538d1[_0x5aa1c4(0x4d9)])];this[_0x5aa1c4(0x66f)](_0x43c34b);}},Game_Event['prototype'][_0xa852ab(0x303)]=function(){const _0x85a112=_0xa852ab,_0x357f97=VisuMZ[_0x85a112(0x48e)](this[_0x85a112(0x4ec)]());this[_0x85a112(0x453)](_0x357f97);},Game_Event['prototype'][_0xa852ab(0x50a)]=function(){const _0x168393=_0xa852ab,_0xebbb02=VisuMZ[_0x168393(0x48e)](this[_0x168393(0x4ec)]());this[_0x168393(0x64c)](_0xebbb02);},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x674)]=function(){this['updateRoutineMove']();},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x2c5)]=function(){const _0x421386=_0xa852ab,_0x4c04e2=VisuMZ[_0x421386(0x48e)](this[_0x421386(0x4ec)]());this[_0x421386(0x66f)](_0x4c04e2[_0x421386(0x259)]());},Game_Event['prototype'][_0xa852ab(0x659)]=function(){const _0x4cf1d7=_0xa852ab,_0x5dd490=VisuMZ[_0x4cf1d7(0x48e)](this[_0x4cf1d7(0x4ec)]());this['executeMoveDir8'](this[_0x4cf1d7(0x5f3)](_0x5dd490[_0x4cf1d7(0x259)]()));},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x508)]=function(){const _0x110b22=_0xa852ab,_0x4f9d25=VisuMZ[_0x110b22(0x48e)](this['moveSynchTarget']()),_0x30611b=[0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0x4f9d25[_0x110b22(0x259)]()];this[_0x110b22(0x66f)](_0x30611b);},Game_Event[_0xa852ab(0x410)]['processMoveSynchMirrorVert']=function(){const _0x1339c9=_0xa852ab,_0x583e55=VisuMZ['GetMoveSynchTarget'](this[_0x1339c9(0x4ec)]()),_0x5bcf1d=[0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x583e55['lastMovedDirection']()];this[_0x1339c9(0x66f)](_0x5bcf1d);},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x4d2)]=function(){const _0x15c959=_0xa852ab,_0x45b93d=VisuMZ[_0x15c959(0x48e)](this['moveSynchTarget']()),_0x6e9be0=_0x45b93d['direction']();switch(this[_0x15c959(0x436)]()){case'mimic':case _0x15c959(0x64f):this[_0x15c959(0x361)](_0x6e9be0);break;case _0x15c959(0x63c):case'reverse\x20copy':this['setDirection'](this[_0x15c959(0x5f3)](_0x6e9be0));break;case _0x15c959(0x46f):case _0x15c959(0x44b):case _0x15c959(0x6c7):case'horz\x20mirror':this['setDirection']([0x0,0x7,0x8,0x9,0x4,0x0,0x6,0x1,0x2,0x3][_0x6e9be0]);break;case _0x15c959(0x20b):case _0x15c959(0x685):case _0x15c959(0x540):case _0x15c959(0x67b):this[_0x15c959(0x361)]([0x0,0x3,0x2,0x1,0x6,0x0,0x4,0x9,0x8,0x7][_0x6e9be0]);break;default:return;}this[_0x15c959(0x5a2)]();},Game_Event['prototype'][_0xa852ab(0x5b9)]=function(){const _0x499e52=_0xa852ab,_0xaffc0d=$gameSystem[_0x499e52(0x3a6)](this);if(!_0xaffc0d)return;this[_0x499e52(0x4fe)](_0xaffc0d['x'],_0xaffc0d['y']),this['refreshBushDepth'](),this[_0x499e52(0x361)](_0xaffc0d[_0x499e52(0x2be)]),this[_0x499e52(0x625)]===_0xaffc0d['pageIndex']&&(this[_0x499e52(0x670)]=_0xaffc0d['moveRouteIndex']);},VisuMZ['EventsMoveCore'][_0xa852ab(0x6c5)]=Game_Event[_0xa852ab(0x410)][_0xa852ab(0x5a2)],Game_Event['prototype'][_0xa852ab(0x5a2)]=function(){const _0xa5c706=_0xa852ab;VisuMZ['EventsMoveCore'][_0xa5c706(0x6c5)]['call'](this),!Utils[_0xa5c706(0x29c)]()&&this[_0xa5c706(0x1ef)]();},Game_Event['prototype'][_0xa852ab(0x6b3)]=function(){const _0x284994=_0xa852ab;Game_Character[_0x284994(0x410)][_0x284994(0x6b3)][_0x284994(0x558)](this),this[_0x284994(0x4e7)]();},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x38e)]=function(){const _0x286201=_0xa852ab;if($gameMap[_0x286201(0x497)]())return!![];return this['_saveEventLocation'];},Game_Event['prototype'][_0xa852ab(0x4e7)]=function(){const _0x362719=_0xa852ab;if(!this[_0x362719(0x38e)]())return;this['saveEventLocation']();},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x2d0)]=function(){const _0xc981a4=_0xa852ab;this[_0xc981a4(0x523)]=!![];},Game_Event[_0xa852ab(0x410)]['updateSaveEventLocation']=function(){const _0x6214cf=_0xa852ab;this[_0x6214cf(0x523)]&&this[_0x6214cf(0x4ed)]();},Game_Event['prototype']['processSaveEventLocation']=function(){const _0x7a6ec0=_0xa852ab;this[_0x7a6ec0(0x523)]=![],$gameSystem[_0x7a6ec0(0x2d0)](this);},Game_Event['prototype'][_0xa852ab(0x47b)]=function(){const _0x10cab3=_0xa852ab;$gameSystem[_0x10cab3(0x696)](this);},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x5a1)]=function(){const _0x2e8687=_0xa852ab;return $gameSystem['getEventIconData'](this)?Game_Character[_0x2e8687(0x410)]['getEventIconData'][_0x2e8687(0x558)](this):{'iconIndex':0x0,'bufferX':settings[_0x2e8687(0x3e9)][_0x2e8687(0x5c3)],'bufferY':settings[_0x2e8687(0x3e9)][_0x2e8687(0x39c)],'blendMode':settings[_0x2e8687(0x3e9)][_0x2e8687(0x3c9)]};},Game_Event['prototype'][_0xa852ab(0x58c)]=function(){return this['_CPCs'];},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x20f)]=Game_Event[_0xa852ab(0x410)][_0xa852ab(0x553)],Game_Event['prototype'][_0xa852ab(0x553)]=function(_0x4ec121){const _0x3dc0b9=_0xa852ab,_0x47a7f5=VisuMZ[_0x3dc0b9(0x5fb)][_0x3dc0b9(0x20f)]['call'](this,_0x4ec121);if(!_0x47a7f5)return![];return this[_0x3dc0b9(0x5cc)](_0x4ec121);},Game_Event[_0xa852ab(0x410)][_0xa852ab(0x5cc)]=function(_0x10db58){const _0x9a48c2=_0xa852ab;VisuMZ[_0x9a48c2(0x5fb)][_0x9a48c2(0x36e)][_0x9a48c2(0x6d2)](_0x10db58),this[_0x9a48c2(0x49c)]=_0x10db58[_0x9a48c2(0x6a9)][_0x9a48c2(0x4d9)]>0x0;_0x10db58[_0x9a48c2(0x6a9)]===undefined&&VisuMZ[_0x9a48c2(0x5fb)][_0x9a48c2(0x36e)][_0x9a48c2(0x6d2)](_0x10db58);if(_0x10db58[_0x9a48c2(0x6a9)]['length']>0x0)return $gameMap['event'](this['_eventId'])&&VisuMZ[_0x9a48c2(0x5fb)][_0x9a48c2(0x36e)][_0x9a48c2(0x4bc)](_0x10db58[_0x9a48c2(0x6a9)],this[_0x9a48c2(0x268)]);return!![];},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x693)]=Game_Troop[_0xa852ab(0x410)][_0xa852ab(0x553)],Game_Troop[_0xa852ab(0x410)]['meetsConditions']=function(_0x249aed){const _0x28bbde=_0xa852ab;var _0x599a3e=VisuMZ['EventsMoveCore']['Game_Troop_meetsConditionsCPC']['call'](this,_0x249aed);return _0x599a3e&&this[_0x28bbde(0x3a1)](_0x249aed);},Game_Troop[_0xa852ab(0x410)][_0xa852ab(0x3a1)]=function(_0x37a584){const _0xe56958=_0xa852ab;_0x37a584[_0xe56958(0x6a9)]===undefined&&VisuMZ[_0xe56958(0x5fb)][_0xe56958(0x36e)]['loadCPC'](_0x37a584);if(_0x37a584[_0xe56958(0x6a9)]['length']>0x0)return VisuMZ[_0xe56958(0x5fb)][_0xe56958(0x36e)][_0xe56958(0x4bc)](_0x37a584[_0xe56958(0x6a9)],0x0);return!![];},VisuMZ['EventsMoveCore'][_0xa852ab(0x67d)]=Game_Event[_0xa852ab(0x410)]['locate'],Game_Event[_0xa852ab(0x410)][_0xa852ab(0x44e)]=function(_0x423fe5,_0x4a7a4a){const _0x3a1156=_0xa852ab;if(this[_0x3a1156(0x23e)]){const _0x57a99d=this[_0x3a1156(0x6b2)]()['note']||'';if(_0x57a99d['match'](/<(?:LOCATION|START|START LOCATION):[ ](.*?)>/i)){const _0x502d6a=String(RegExp['$1'])[_0x3a1156(0x4ce)](',')[_0x3a1156(0x357)](_0x1b3c77=>Number(_0x1b3c77));_0x423fe5+=Number(_0x502d6a[0x0]||0x0)||0x0,_0x4a7a4a+=Number(_0x502d6a[0x1]||0x0)||0x0;}_0x57a99d['match'](/<(?:LOCATION|START|START LOCATION) X:[ ](.*?)>/i)&&(_0x423fe5+=Number(RegExp['$1'])),_0x57a99d[_0x3a1156(0x57e)](/<(?:LOCATION|START|START LOCATION) Y:[ ](.*?)>/i)&&(_0x4a7a4a+=Number(RegExp['$1']));}VisuMZ[_0x3a1156(0x5fb)]['Game_Event_locate'][_0x3a1156(0x558)](this,_0x423fe5,_0x4a7a4a),this[_0x3a1156(0x4a8)]=_0x423fe5,this[_0x3a1156(0x3fd)]=_0x4a7a4a,this[_0x3a1156(0x4e7)]();},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x232)]=Game_Event[_0xa852ab(0x410)][_0xa852ab(0x590)],Game_Event[_0xa852ab(0x410)][_0xa852ab(0x590)]=function(){const _0x149f68=_0xa852ab,_0xa5f9c1=$gameMap[_0x149f68(0x485)](this['x'],this['y'],this[_0x149f68(0x4a8)],this['_randomHomeY']),_0x36d8de=_0xa5f9c1*(this[_0x149f68(0x6ab)]||0x0);Math[_0x149f68(0x3a9)]()>=_0x36d8de?VisuMZ[_0x149f68(0x5fb)][_0x149f68(0x232)][_0x149f68(0x558)](this):this['moveBackToRandomHome']();},Game_Event[_0xa852ab(0x410)]['moveBackToRandomHome']=function(){const _0x43c75d=_0xa852ab,_0x1992ab=this[_0x43c75d(0x6e9)](this['_randomHomeX']),_0x16faaf=this['deltaYFrom'](this[_0x43c75d(0x3fd)]);if(Math[_0x43c75d(0x1f0)](_0x1992ab)>Math[_0x43c75d(0x1f0)](_0x16faaf))this[_0x43c75d(0x258)](_0x1992ab>0x0?0x4:0x6),!this[_0x43c75d(0x3bf)]()&&_0x16faaf!==0x0&&this[_0x43c75d(0x258)](_0x16faaf>0x0?0x8:0x2);else _0x16faaf!==0x0&&(this[_0x43c75d(0x258)](_0x16faaf>0x0?0x8:0x2),!this['isMovementSucceeded']()&&_0x1992ab!==0x0&&this[_0x43c75d(0x258)](_0x1992ab>0x0?0x4:0x6));},Game_CharacterBase[_0xa852ab(0x410)]['clearAttachPictureSettings']=function(){const _0x2e4ead=_0xa852ab;this[_0x2e4ead(0x6ca)]={'filename':'','type':_0x2e4ead(0x550),'blendMode':0x0,'maxSize':0x0,'offsetX':0x0,'offsetY':0x0,'scale':0x1};},Game_CharacterBase[_0xa852ab(0x410)]['attachPictureSettings']=function(){const _0x3bb9e8=_0xa852ab;if(this[_0x3bb9e8(0x6ca)]===undefined)this[_0x3bb9e8(0x6cd)]();return this[_0x3bb9e8(0x6ca)];},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x4b3)]=function(){const _0xc6d73a=_0xa852ab;return this['attachPictureSettings']()[_0xc6d73a(0x6a0)]??'';},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x3d3)]=function(){const _0x299ef5=_0xa852ab;return this[_0x299ef5(0x5c1)]()['picture']??_0x299ef5(0x550);},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x62a)]=function(){const _0x31e93e=_0xa852ab;return this[_0x31e93e(0x5c1)]()['blendMode']??0x0;},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x6b6)]=function(){const _0x3b8d30=_0xa852ab;return this[_0x3b8d30(0x5c1)]()[_0x3b8d30(0x687)]??0x0;},Game_CharacterBase[_0xa852ab(0x410)][_0xa852ab(0x38a)]=function(){const _0x432a31=_0xa852ab;return this[_0x432a31(0x5c1)]()[_0x432a31(0x620)]??0x0;},Game_CharacterBase['prototype'][_0xa852ab(0x25e)]=function(){const _0x3182fe=_0xa852ab;return this[_0x3182fe(0x5c1)]()[_0x3182fe(0x2ab)]??0x0;},Game_CharacterBase[_0xa852ab(0x410)]['attachPictureScale']=function(){const _0x317525=_0xa852ab;return this['attachPictureSettings']()[_0x317525(0x598)]??0x1;},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x482)]=Game_Interpreter[_0xa852ab(0x410)][_0xa852ab(0x612)],Game_Interpreter['prototype'][_0xa852ab(0x612)]=function(){const _0x18f72f=_0xa852ab;if(this[_0x18f72f(0x2ca)]===_0x18f72f(0x234)){if(window[this[_0x18f72f(0x39d)]])this['_waitMode']='',this[_0x18f72f(0x53d)]();else return!![];}else return VisuMZ['EventsMoveCore'][_0x18f72f(0x482)][_0x18f72f(0x558)](this);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x67e)]=Game_Interpreter[_0xa852ab(0x410)][_0xa852ab(0x240)],Game_Interpreter[_0xa852ab(0x410)][_0xa852ab(0x240)]=function(){const _0x319345=_0xa852ab,_0x257d53=$gameMap&&this['_eventId']?$gameMap[_0x319345(0x6b2)](this[_0x319345(0x268)]):null;$gameTemp[_0x319345(0x5a0)](_0x257d53);const _0x52fe2f=VisuMZ[_0x319345(0x5fb)][_0x319345(0x67e)][_0x319345(0x558)](this);return $gameTemp['clearSelfTarget'](),_0x52fe2f;},VisuMZ['EventsMoveCore'][_0xa852ab(0x250)]=Game_Interpreter[_0xa852ab(0x410)][_0xa852ab(0x5db)],Game_Interpreter[_0xa852ab(0x410)][_0xa852ab(0x5db)]=function(_0x40c34c){const _0x139213=_0xa852ab;return $gameTemp[_0x139213(0x46c)](this),VisuMZ[_0x139213(0x5fb)][_0x139213(0x250)]['call'](this,_0x40c34c);},Game_Interpreter[_0xa852ab(0x410)][_0xa852ab(0x64d)]=function(_0x7b28fc){const _0x574b71=_0xa852ab;this['_callEventData']=_0x7b28fc;const _0x37cdda=_0x574b71(0x50e)[_0x574b71(0x58f)](_0x7b28fc[_0x574b71(0x4c3)][_0x574b71(0x419)](0x3));this[_0x574b71(0x39d)]='$callEventMap'+Graphics[_0x574b71(0x4d3)]+'_'+this['eventId'](),DataManager[_0x574b71(0x255)](this[_0x574b71(0x39d)],_0x37cdda),window[this[_0x574b71(0x39d)]]?this[_0x574b71(0x53d)]():this[_0x574b71(0x5c0)](_0x574b71(0x234));},Game_Interpreter[_0xa852ab(0x410)]['startCallEvent']=function(){const _0x2a392e=_0xa852ab,_0x549f9a=this[_0x2a392e(0x4b7)],_0x29b5f9=window[this[_0x2a392e(0x39d)]],_0x5eee66=_0x29b5f9[_0x2a392e(0x2e3)][_0x549f9a[_0x2a392e(0x379)]];if(_0x5eee66&&_0x5eee66[_0x2a392e(0x494)][_0x549f9a[_0x2a392e(0x539)]-0x1]){const _0x39b77e=_0x5eee66[_0x2a392e(0x494)][_0x549f9a[_0x2a392e(0x539)]-0x1][_0x2a392e(0x22a)];this[_0x2a392e(0x688)](_0x39b77e,this[_0x2a392e(0x379)]());}window[this[_0x2a392e(0x39d)]]=undefined,this[_0x2a392e(0x39d)]=undefined,this[_0x2a392e(0x4b7)]=undefined;};function Game_CPCInterpreter(){const _0x4c28ab=_0xa852ab;this[_0x4c28ab(0x6b7)]['apply'](this,arguments);};Game_CPCInterpreter['prototype']=Object[_0xa852ab(0x4a2)](Game_Interpreter[_0xa852ab(0x410)]),Game_CPCInterpreter[_0xa852ab(0x410)][_0xa852ab(0x6b9)]=Game_CPCInterpreter,Game_CPCInterpreter[_0xa852ab(0x410)][_0xa852ab(0x296)]=function(){const _0x2e0095=_0xa852ab;Game_Interpreter[_0x2e0095(0x410)][_0x2e0095(0x296)][_0x2e0095(0x558)](this),this[_0x2e0095(0x24a)]=![];},Game_CPCInterpreter[_0xa852ab(0x410)][_0xa852ab(0x3e6)]=function(){const _0x27c011=_0xa852ab;while(this[_0x27c011(0x57c)]()){this[_0x27c011(0x240)]();}},Game_CPCInterpreter[_0xa852ab(0x410)][_0xa852ab(0x2d3)]=function(_0x535a9a){const _0x516ec4=_0xa852ab;while(this[_0x516ec4(0x57c)]()){this[_0x516ec4(0x2ff)](_0x535a9a);}},Game_CPCInterpreter[_0xa852ab(0x410)][_0xa852ab(0x2ff)]=function(_0x13a10d){const _0x3da3a4=_0xa852ab,_0x4e193e=_0x13a10d;$gameTemp[_0x3da3a4(0x5a0)](_0x4e193e);const _0x5d813d=VisuMZ['EventsMoveCore'][_0x3da3a4(0x67e)][_0x3da3a4(0x558)](this);return $gameTemp[_0x3da3a4(0x4b9)](),_0x5d813d;},Game_CPCInterpreter['prototype'][_0xa852ab(0x5b8)]=function(_0x95be85){const _0x4886c9=_0xa852ab;return Game_Interpreter['prototype'][_0x4886c9(0x5b8)][_0x4886c9(0x558)](this,_0x95be85),this[_0x4886c9(0x54f)]['some'](_0xc71a50=>_0xc71a50[_0x4886c9(0x57e)](/<(?:CONDITION|CONDITIONS) MET>/i))&&(this[_0x4886c9(0x24a)]=!![]),!![];},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x278)]=Scene_Map['prototype'][_0xa852ab(0x29d)],Scene_Map['prototype'][_0xa852ab(0x29d)]=function(){const _0x434286=_0xa852ab;VisuMZ[_0x434286(0x5fb)][_0x434286(0x278)][_0x434286(0x558)](this),this['_spriteset']['hideShadows']();},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x342)]=Scene_Load[_0xa852ab(0x410)][_0xa852ab(0x219)],Scene_Load['prototype']['onLoadSuccess']=function(){const _0x4f3c6f=_0xa852ab;if($gameMap)$gameMap['clearEventCache']();VisuMZ[_0x4f3c6f(0x5fb)][_0x4f3c6f(0x342)][_0x4f3c6f(0x558)](this);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x4ca)]=Game_System[_0xa852ab(0x410)][_0xa852ab(0x32b)],Game_System[_0xa852ab(0x410)][_0xa852ab(0x32b)]=function(){const _0x52f911=_0xa852ab;VisuMZ[_0x52f911(0x5fb)][_0x52f911(0x4ca)][_0x52f911(0x558)](this);if($gameMap)$gameMap[_0x52f911(0x41d)]();},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x3a4)]=Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x5a8)],Sprite_Character['prototype'][_0xa852ab(0x5a8)]=function(){const _0x20c48a=_0xa852ab;VisuMZ[_0x20c48a(0x5fb)]['Sprite_Character_initMembers']['call'](this),this['initMembersEventsMoveCore'](),this[_0x20c48a(0x54e)](),this['createIconSprite']();},Sprite_Character['prototype']['initMembersEventsMoveCore']=function(){const _0x214f43=_0xa852ab;this[_0x214f43(0x5ea)]=0xff,this[_0x214f43(0x68e)]=![];},Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x48b)]=function(){const _0x1e03ad=_0xa852ab;return this[_0x1e03ad(0x5a6)]&&this[_0x1e03ad(0x5a6)][_0x1e03ad(0x57e)](/\[VS8\]/i);},Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x490)]=function(){const _0x82e089=_0xa852ab;return this[_0x82e089(0x48b)]()&&VisuMZ[_0x82e089(0x5fb)][_0x82e089(0x4d4)][_0x82e089(0x64e)][_0x82e089(0x2f6)];},Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x54e)]=function(){const _0x3dacc2=_0xa852ab;this[_0x3dacc2(0x44a)]=new Sprite(),this[_0x3dacc2(0x44a)][_0x3dacc2(0x67f)]['x']=0.5,this[_0x3dacc2(0x44a)][_0x3dacc2(0x67f)]['y']=0x1,this[_0x3dacc2(0x31a)](this[_0x3dacc2(0x44a)]),this[_0x3dacc2(0x65e)]();},Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x5fc)]=function(){const _0x3467ad=_0xa852ab;this[_0x3467ad(0x322)]=new Sprite(),this['_eventIconSprite'][_0x3467ad(0x6b5)]=ImageManager[_0x3467ad(0x225)]('IconSet'),this[_0x3467ad(0x322)][_0x3467ad(0x6b5)]['smooth']=![],this[_0x3467ad(0x322)][_0x3467ad(0x644)](0x0,0x0,0x0,0x0),this[_0x3467ad(0x322)]['anchor']['x']=0.5,this['_eventIconSprite']['anchor']['y']=0x1,this[_0x3467ad(0x31a)](this[_0x3467ad(0x322)]);},VisuMZ['EventsMoveCore'][_0xa852ab(0x30e)]=Sprite_Character[_0xa852ab(0x410)]['update'],Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x5a2)]=function(){const _0x46f8cd=_0xa852ab;VisuMZ['EventsMoveCore']['Sprite_Character_update']['call'](this),this[_0x46f8cd(0x33d)]();},Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x5ab)]=function(){const _0x507311=_0xa852ab;Sprite[_0x507311(0x410)]['updateVisibility']['call'](this),this[_0x507311(0x36a)]()&&(this[_0x507311(0x603)]=![]);},Sprite_Character['prototype'][_0xa852ab(0x36a)]=function(){const _0x59cac9=_0xa852ab;if(this[_0x59cac9(0x6d1)]()>0x0)return![];if(this['_character']){if(this['_character'][_0x59cac9(0x4b3)]()!=='')return![];}return this[_0x59cac9(0x60a)]()||this[_0x59cac9(0x222)]&&this[_0x59cac9(0x222)][_0x59cac9(0x380)]();},Sprite_Character['prototype']['updateBitmapSmoothing']=function(){const _0x556615=_0xa852ab;if(!this[_0x556615(0x6b5)])return;this[_0x556615(0x6b5)][_0x556615(0x429)]=!!VisuMZ[_0x556615(0x5fb)][_0x556615(0x4d4)][_0x556615(0x2fb)][_0x556615(0x67a)];},Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x33d)]=function(){const _0x51014f=_0xa852ab;this[_0x51014f(0x614)](),this[_0x51014f(0x309)](),this[_0x51014f(0x21b)](),this[_0x51014f(0x390)](),this[_0x51014f(0x28e)](),this[_0x51014f(0x551)](),this[_0x51014f(0x65e)]();},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x447)]=Sprite_Character[_0xa852ab(0x410)]['setTileBitmap'],Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x277)]=function(){const _0x100cb9=_0xa852ab;VisuMZ[_0x100cb9(0x5fb)][_0x100cb9(0x447)][_0x100cb9(0x558)](this),this['bitmap'][_0x100cb9(0x3cb)](this[_0x100cb9(0x288)][_0x100cb9(0x269)](this));},Sprite_Character[_0xa852ab(0x410)]['updateTileFrame']=function(){const _0x170392=_0xa852ab,_0x488d9a=this[_0x170392(0x302)],_0x4676b1=this[_0x170392(0x26f)](),_0x20eb5d=this['patternHeight'](),_0x183b4a=(Math[_0x170392(0x4de)](_0x488d9a/0x80)%0x2*0x8+_0x488d9a%0x8)*_0x4676b1,_0x529e9e=Math[_0x170392(0x4de)](_0x488d9a%0x100/0x8)%0x10*_0x20eb5d,_0x31a667=this[_0x170392(0x40c)]();let _0x22bd53=_0x183b4a,_0x320b4e=_0x529e9e,_0x4effd4=_0x4676b1,_0x59bf05=_0x20eb5d;_0x31a667['up']&&_0x31a667['up']>0x0&&(_0x320b4e-=_0x20eb5d*_0x31a667['up'],_0x59bf05+=_0x20eb5d*_0x31a667['up']),_0x31a667[_0x170392(0x49f)]&&_0x31a667[_0x170392(0x49f)]>0x0&&(_0x59bf05+=_0x20eb5d*_0x31a667[_0x170392(0x49f)]),_0x31a667[_0x170392(0x30f)]&&_0x31a667[_0x170392(0x30f)]>0x0&&(_0x22bd53-=_0x4676b1*_0x31a667[_0x170392(0x30f)],_0x4effd4+=_0x4676b1*_0x31a667[_0x170392(0x30f)]),_0x31a667['right']&&_0x31a667[_0x170392(0x6c8)]>0x0&&(_0x4effd4+=_0x4676b1*_0x31a667[_0x170392(0x6c8)]),this[_0x170392(0x644)](_0x22bd53,_0x320b4e,_0x4effd4,_0x59bf05);},Sprite_Character['prototype'][_0xa852ab(0x40c)]=function(){const _0x5e1f1e=_0xa852ab;return this[_0x5e1f1e(0x222)]?this[_0x5e1f1e(0x222)]['_tileExpand']||{}:{};},VisuMZ['EventsMoveCore'][_0xa852ab(0x5e7)]=Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x2f8)],Sprite_Character[_0xa852ab(0x410)]['setCharacterBitmap']=function(){const _0x12323b=_0xa852ab;VisuMZ['EventsMoveCore']['Sprite_Character_setCharacterBitmap'][_0x12323b(0x558)](this),this[_0x12323b(0x6b5)][_0x12323b(0x3cb)](this[_0x12323b(0x288)]['bind'](this)),this['_isCharacterSpriteSheetInvisible']=ImageManager['isInvisibleCharacter'](this['_characterName']),this[_0x12323b(0x68e)]&&this['bitmap'][_0x12323b(0x3cb)](this[_0x12323b(0x460)][_0x12323b(0x269)](this));},Sprite_Character['prototype'][_0xa852ab(0x460)]=function(){const _0x4615c2=_0xa852ab;this[_0x4615c2(0x6b5)]=new Bitmap(this[_0x4615c2(0x6b5)][_0x4615c2(0x61e)],this[_0x4615c2(0x6b5)][_0x4615c2(0x442)]);},VisuMZ['EventsMoveCore']['Sprite_Character_characterPatternY']=Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x2f5)],Sprite_Character[_0xa852ab(0x410)]['characterPatternY']=function(){const _0x13a70b=_0xa852ab;return this[_0x13a70b(0x48b)]()?this[_0x13a70b(0x565)]():this[_0x13a70b(0x63a)]();},Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x565)]=function(){const _0x633010=_0xa852ab,_0x308182=this[_0x633010(0x222)][_0x633010(0x2be)]();let _0x3c8d14=[0x2,0x2,0x2,0x4,0x4,0x2,0x6,0x6,0x8,0x8];return this[_0x633010(0x222)][_0x633010(0x2a3)]&&(_0x3c8d14=[0x2,0x4,0x2,0x2,0x6,0x2,0x4,0x8,0x8,0x6]),(_0x3c8d14[_0x308182]-0x2)/0x2;},Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x63a)]=function(){const _0x44a382=_0xa852ab;let _0x32a950=this[_0x44a382(0x222)]['direction']();if(this[_0x44a382(0x222)]['_mirrorSprite']){if(_0x32a950===0x4)_0x32a950=0x6;else _0x32a950===0x6&&(_0x32a950=0x4);}return(_0x32a950-0x2)/0x2;},Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x614)]=function(){const _0xcb06b9=_0xa852ab;this['scale']['x']=this[_0xcb06b9(0x222)][_0xcb06b9(0x6db)]??0x1,this['scale']['y']=this[_0xcb06b9(0x222)][_0xcb06b9(0x658)]??0x1;},Sprite_Character['prototype']['updateTilt']=function(){const _0x4232b1=_0xa852ab;if(!VisuMZ[_0x4232b1(0x5fb)][_0x4232b1(0x4d4)][_0x4232b1(0x2fb)][_0x4232b1(0x50b)])return;this['rotation']=0x0;if(this[_0x4232b1(0x632)]()){const _0x3e7598=VisuMZ[_0x4232b1(0x5fb)][_0x4232b1(0x4d4)][_0x4232b1(0x2fb)],_0x313be1=this[_0x4232b1(0x222)][_0x4232b1(0x2be)]();let _0x371b92=0x0;if([0x1,0x4,0x7][_0x4232b1(0x37c)](_0x313be1))_0x371b92=_0x3e7598[_0x4232b1(0x52a)];if([0x3,0x6,0x9][_0x4232b1(0x37c)](_0x313be1))_0x371b92=_0x3e7598[_0x4232b1(0x366)];[0x2,0x8][_0x4232b1(0x37c)](_0x313be1)&&(_0x371b92=[-_0x3e7598[_0x4232b1(0x35f)],0x0,_0x3e7598[_0x4232b1(0x35f)]][this[_0x4232b1(0x222)]['pattern']()]);if(this[_0x4232b1(0x239)])_0x371b92*=-0x1;this[_0x4232b1(0x3c3)]=_0x371b92;}},Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x632)]=function(){const _0x1304b5=_0xa852ab;if(this['_dragonbones'])return![];return this[_0x1304b5(0x222)][_0x1304b5(0x2a1)]()&&!this[_0x1304b5(0x222)]['isOnLadder']()&&!this[_0x1304b5(0x222)][_0x1304b5(0x633)]()&&this[_0x1304b5(0x6d1)]()===0x0;},Sprite_Character[_0xa852ab(0x410)]['updateShadow']=function(){const _0x5603de=_0xa852ab;if(!this['_shadowSprite'])return;this[_0x5603de(0x564)]['x']=this[_0x5603de(0x222)][_0x5603de(0x52c)](),this[_0x5603de(0x564)]['y']=this[_0x5603de(0x222)][_0x5603de(0x580)](),this[_0x5603de(0x564)]['opacity']=this[_0x5603de(0x24b)],this[_0x5603de(0x564)]['visible']=this[_0x5603de(0x222)]['isShadowVisible'](),this[_0x5603de(0x564)][_0x5603de(0x408)]=this['_hidden'];if(this[_0x5603de(0x222)][_0x5603de(0x422)]())this[_0x5603de(0x564)]['scale']['x']=Math['max'](0x0,this['_shadowSprite'][_0x5603de(0x598)]['x']-0.1),this['_shadowSprite'][_0x5603de(0x598)]['y']=Math['max'](0x0,this[_0x5603de(0x564)][_0x5603de(0x598)]['y']-0.1);else{if(this[_0x5603de(0x564)][_0x5603de(0x598)]['x']!==this['scale']['x']){if(this['_shadowSprite']['scale']['x']>this['scale']['x'])this[_0x5603de(0x564)]['scale']['x']=Math[_0x5603de(0x5af)](this[_0x5603de(0x564)]['scale']['x']+0.1,this['scale']['x']);if(this[_0x5603de(0x564)]['scale']['x']<this[_0x5603de(0x598)]['x'])this[_0x5603de(0x564)][_0x5603de(0x598)]['x']=Math[_0x5603de(0x23b)](this[_0x5603de(0x564)][_0x5603de(0x598)]['x']-0.1,this[_0x5603de(0x598)]['x']);}if(this[_0x5603de(0x564)][_0x5603de(0x598)]['y']!==this[_0x5603de(0x598)]['y']){if(this[_0x5603de(0x564)][_0x5603de(0x598)]['y']>this[_0x5603de(0x598)]['y'])this[_0x5603de(0x564)][_0x5603de(0x598)]['y']=Math[_0x5603de(0x5af)](this['_shadowSprite'][_0x5603de(0x598)]['y']+0.1,this[_0x5603de(0x598)]['y']);if(this[_0x5603de(0x564)][_0x5603de(0x598)]['y']<this[_0x5603de(0x598)]['y'])this[_0x5603de(0x564)]['scale']['y']=Math[_0x5603de(0x23b)](this[_0x5603de(0x564)][_0x5603de(0x598)]['y']-0.1,this[_0x5603de(0x598)]['y']);}}},Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x390)]=function(){const _0x3659f2=_0xa852ab;if(!this[_0x3659f2(0x322)])return;const _0x3f47c2=this[_0x3659f2(0x322)],_0x175fe3=this['getEventIconIndex']();if(_0x175fe3<=0x0)return _0x3f47c2[_0x3659f2(0x644)](0x0,0x0,0x0,0x0);else{const _0x40dba5=ImageManager['iconWidth'],_0x11d960=ImageManager[_0x3659f2(0x343)],_0x147d34=_0x175fe3%0x10*_0x40dba5,_0x4b6ec2=Math[_0x3659f2(0x4de)](_0x175fe3/0x10)*_0x11d960;_0x3f47c2[_0x3659f2(0x644)](_0x147d34,_0x4b6ec2,_0x40dba5,_0x11d960),this[_0x3659f2(0x603)]=!![];}const _0x11d54b=this[_0x3659f2(0x222)][_0x3659f2(0x5a1)]();this[_0x3659f2(0x490)]()?this['autoEventIconBuffer'](_0x3f47c2):(_0x3f47c2['x']=_0x11d54b?_0x11d54b['bufferX']:0x0,_0x3f47c2['y']=_0x11d54b?-this[_0x3659f2(0x442)]+_0x11d54b[_0x3659f2(0x5f0)]:0x0),_0x3f47c2[_0x3659f2(0x363)]=_0x11d54b?_0x11d54b[_0x3659f2(0x363)]:0x0,this[_0x3659f2(0x3c7)](_0x3f47c2),this['addChild'](_0x3f47c2),_0x3f47c2[_0x3659f2(0x3c3)]=-this[_0x3659f2(0x3c3)];},Sprite_Character['prototype'][_0xa852ab(0x38b)]=function(_0x381149){const _0xff6674=_0xa852ab;_0x381149['x']=0x0,_0x381149['y']=-this[_0xff6674(0x442)]+this[_0xff6674(0x442)]*0x2/0x5,this['_character'][_0xff6674(0x68d)]()!==0x1&&(_0x381149['y']+=0x1);},Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x6d1)]=function(){const _0x64d219=_0xa852ab;if(!this['_character'])return 0x0;if(this['_character'][_0x64d219(0x4cb)])return 0x0;const _0x2a5648=this['_character'][_0x64d219(0x5a1)]();return _0x2a5648?_0x2a5648[_0x64d219(0x439)]||0x0:0x0;},Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x28e)]=function(){const _0x374b84=_0xa852ab;if(!this[_0x374b84(0x222)])return;if(this[_0x374b84(0x222)][_0x374b84(0x401)]===undefined)return;if(this[_0x374b84(0x222)][_0x374b84(0x401)]===![])return;this['z']=this[_0x374b84(0x222)][_0x374b84(0x401)],this[_0x374b84(0x564)]&&(this['z']<0x0?this[_0x374b84(0x564)]['z']=this['z']-0x1:this['_shadowSprite']['z']=0x0);},Sprite_Character['prototype'][_0xa852ab(0x551)]=function(){const _0x438e7f=_0xa852ab;if(!this['_character'])return;let _0x3d9ba6=!!this[_0x438e7f(0x222)][_0x438e7f(0x2a3)];this['scale']['x']=Math['abs'](this[_0x438e7f(0x598)]['x'])*(_0x3d9ba6?-0x1:0x1);},Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x65e)]=function(){const _0x1f5b6d=_0xa852ab;if(!this[_0x1f5b6d(0x44a)])return;if(!this[_0x1f5b6d(0x222)])return;this[_0x1f5b6d(0x4f6)](),this[_0x1f5b6d(0x588)]();},Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x4f6)]=function(){const _0x1ff4e3=_0xa852ab;if(!this[_0x1ff4e3(0x243)]())return;const _0x232793=this['_character'][_0x1ff4e3(0x5c1)]();this[_0x1ff4e3(0x333)]=_0x232793[_0x1ff4e3(0x6a0)],this[_0x1ff4e3(0x699)]=_0x232793[_0x1ff4e3(0x34f)],this[_0x1ff4e3(0x349)]=_0x232793[_0x1ff4e3(0x687)],this[_0x1ff4e3(0x432)]=_0x232793[_0x1ff4e3(0x598)];if(_0x232793[_0x1ff4e3(0x6a0)]!==''){if(_0x232793['type']===_0x1ff4e3(0x2b9)){const _0x4d0b32=ImageManager[_0x1ff4e3(0x6de)](_0x232793[_0x1ff4e3(0x6a0)]);_0x4d0b32[_0x1ff4e3(0x3cb)](this[_0x1ff4e3(0x4a1)][_0x1ff4e3(0x269)](this,_0x4d0b32));}else{if(_0x232793[_0x1ff4e3(0x34f)]===_0x1ff4e3(0x682)){const _0x3478f3=ImageManager[_0x1ff4e3(0x414)](_0x232793[_0x1ff4e3(0x6a0)]);_0x3478f3['addLoadListener'](this[_0x1ff4e3(0x4a1)][_0x1ff4e3(0x269)](this,_0x3478f3));}else{const _0x264e22=ImageManager[_0x1ff4e3(0x2c9)](_0x232793[_0x1ff4e3(0x6a0)]);_0x264e22[_0x1ff4e3(0x3cb)](this[_0x1ff4e3(0x4a1)][_0x1ff4e3(0x269)](this,_0x264e22));}}}else this[_0x1ff4e3(0x44a)]['bitmap']=new Bitmap(0x1,0x1);},Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x588)]=function(){const _0x22c0dd=_0xa852ab,_0x2db75a=this[_0x22c0dd(0x44a)];_0x2db75a['x']=this[_0x22c0dd(0x222)][_0x22c0dd(0x38a)](),_0x2db75a['y']=this[_0x22c0dd(0x222)][_0x22c0dd(0x25e)](),_0x2db75a[_0x22c0dd(0x363)]=this[_0x22c0dd(0x222)][_0x22c0dd(0x62a)]();},Sprite_Character[_0xa852ab(0x410)][_0xa852ab(0x243)]=function(){const _0x1ba1d4=_0xa852ab,_0x28804f=this[_0x1ba1d4(0x222)][_0x1ba1d4(0x5c1)]();if(_0x28804f){if(this[_0x1ba1d4(0x333)]!==_0x28804f['filename'])return!![];if(this[_0x1ba1d4(0x699)]!==_0x28804f[_0x1ba1d4(0x34f)])return!![];if(this['_lastAttachPictureMaxSize']!==_0x28804f[_0x1ba1d4(0x687)])return!![];if(this[_0x1ba1d4(0x432)]!==_0x28804f['scale'])return!![];}return![];},Sprite_Character[_0xa852ab(0x410)]['onLoadAttachPicture']=function(_0x3b1105){const _0x497417=_0xa852ab,_0x237d04=this[_0x497417(0x44a)];_0x237d04['bitmap']=_0x3b1105;const _0x1f6da4=this[_0x497417(0x222)][_0x497417(0x5c1)](),_0x322296=_0x1f6da4[_0x497417(0x687)],_0x2bdb6d=_0x1f6da4[_0x497417(0x598)];let _0xf55092=0x1;if(_0x322296>0x0){let _0xb3ac25=this['getAttachPictureBitmapWidth']()||0x1,_0x1e28ab=this[_0x497417(0x5d2)]()||0x1;const _0x1bc693=Math[_0x497417(0x23b)](0x1,_0xb3ac25,_0x1e28ab);_0xf55092=_0x322296/_0x1bc693;}_0xf55092*=_0x2bdb6d,_0xf55092!==0x1&&(this[_0x497417(0x44a)][_0x497417(0x6b5)][_0x497417(0x429)]=!![]),_0x237d04['scale']['x']=_0xf55092,_0x237d04['scale']['y']=_0xf55092,this[_0x497417(0x603)]=!![],this[_0x497417(0x588)]();},Sprite_Character[_0xa852ab(0x410)]['getAttachPictureBitmapWidth']=function(){const _0x149493=_0xa852ab,_0x382ba3=this[_0x149493(0x44a)];if(!_0x382ba3)return 0x0;return _0x382ba3['bitmap'][_0x149493(0x61e)];},Sprite_Character['prototype'][_0xa852ab(0x5d2)]=function(){const _0x213f6b=_0xa852ab,_0x4f8d14=this[_0x213f6b(0x44a)];if(!_0x4f8d14)return 0x0;return _0x4f8d14[_0x213f6b(0x6b5)]['height'];},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x664)]=Sprite_Balloon[_0xa852ab(0x410)]['setup'],Sprite_Balloon['prototype']['setup']=function(_0xb31ed1,_0x16564e){const _0x5df56c=_0xa852ab;VisuMZ[_0x5df56c(0x5fb)][_0x5df56c(0x664)][_0x5df56c(0x558)](this,_0xb31ed1,_0x16564e),VisuMZ[_0x5df56c(0x5fb)]['Settings'][_0x5df56c(0x64e)]['AutoBalloon']&&this[_0x5df56c(0x286)][_0x5df56c(0x222)]['setBalloonPose'](_0x16564e,this[_0x5df56c(0x651)]);},VisuMZ[_0xa852ab(0x5fb)]['Sprite_Balloon_updatePosition']=Sprite_Balloon[_0xa852ab(0x410)][_0xa852ab(0x30c)],Sprite_Balloon[_0xa852ab(0x410)][_0xa852ab(0x30c)]=function(){const _0x13ce61=_0xa852ab;VisuMZ['EventsMoveCore'][_0x13ce61(0x31b)][_0x13ce61(0x558)](this),this[_0x13ce61(0x4c1)]();},Sprite_Balloon[_0xa852ab(0x410)][_0xa852ab(0x4c1)]=function(){const _0x4e6b22=_0xa852ab;this[_0x4e6b22(0x286)][_0x4e6b22(0x222)][_0x4e6b22(0x48b)]()&&(this['x']+=VisuMZ[_0x4e6b22(0x5fb)][_0x4e6b22(0x4d4)][_0x4e6b22(0x64e)]['BalloonOffsetX'],this['y']+=VisuMZ[_0x4e6b22(0x5fb)][_0x4e6b22(0x4d4)]['VS8'][_0x4e6b22(0x4b1)]);},Sprite_Timer[_0xa852ab(0x410)][_0xa852ab(0x522)]=function(){const _0x18298f=_0xa852ab;this['bitmap']=new Bitmap(Math['round'](Graphics[_0x18298f(0x510)]/0x2),0x30),this['bitmap'][_0x18298f(0x2a5)]=this['fontFace'](),this[_0x18298f(0x6b5)]['fontSize']=this[_0x18298f(0x2ac)](),this[_0x18298f(0x6b5)][_0x18298f(0x63d)]=ColorManager[_0x18298f(0x63d)]();},Sprite_Timer[_0xa852ab(0x410)][_0xa852ab(0x586)]=function(){const _0x3a8af2=_0xa852ab,_0x5bd804=Math[_0x3a8af2(0x4de)](this['_seconds']/0x3c/0x3c),_0xc42064=Math[_0x3a8af2(0x4de)](this[_0x3a8af2(0x6dc)]/0x3c)%0x3c,_0x31f973=this[_0x3a8af2(0x6dc)]%0x3c;let _0x301cac=_0xc42064[_0x3a8af2(0x419)](0x2)+':'+_0x31f973['padZero'](0x2);if(_0x5bd804>0x0)_0x301cac='%1:%2'[_0x3a8af2(0x58f)](_0x5bd804,_0x301cac);return _0x301cac;};function Sprite_EventLabel(){this['initialize'](...arguments);}Sprite_EventLabel[_0xa852ab(0x410)]=Object[_0xa852ab(0x4a2)](Sprite[_0xa852ab(0x410)]),Sprite_EventLabel['prototype'][_0xa852ab(0x6b9)]=Sprite_EventLabel,Sprite_EventLabel['prototype'][_0xa852ab(0x6b7)]=function(_0x2d5bfc){const _0x593eda=_0xa852ab;this[_0x593eda(0x5ca)]=_0x2d5bfc,Sprite[_0x593eda(0x410)][_0x593eda(0x6b7)]['call'](this),this[_0x593eda(0x5a8)](),this[_0x593eda(0x375)]();},Sprite_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x5a8)]=function(){const _0x3f884a=_0xa852ab;this[_0x3f884a(0x67f)]['x']=0.5,this[_0x3f884a(0x67f)]['y']=0x1;},Sprite_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x375)]=function(){const _0x3d955b=_0xa852ab,_0x5cb116=new Rectangle(0x0,0x0,0x1,0x1);this[_0x3d955b(0x306)]=new Window_Base(_0x5cb116),this['_proxyWindow'][_0x3d955b(0x468)]=0x0,this['opacity']=this['isLabelVisible']()?0xff:0x0;},Sprite_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x5a2)]=function(){const _0x7c2908=_0xa852ab;Sprite[_0x7c2908(0x410)][_0x7c2908(0x5a2)][_0x7c2908(0x558)](this),this[_0x7c2908(0x5c7)](),this[_0x7c2908(0x40e)](),this['updatePosition'](),this[_0x7c2908(0x3e8)](),this[_0x7c2908(0x54d)]();},Sprite_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x5c7)]=function(){const _0x50d36b=_0xa852ab;this['_event']['labelWindowText']()!==this[_0x50d36b(0x45d)]&&(this[_0x50d36b(0x45d)]=this['_event'][_0x50d36b(0x299)](),this[_0x50d36b(0x2af)]());},Sprite_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x2af)]=function(){const _0x15e463=_0xa852ab;if(!this[_0x15e463(0x306)])return;this[_0x15e463(0x23f)](),this['drawText']();},Sprite_EventLabel['prototype'][_0xa852ab(0x23f)]=function(){const _0x461c8f=_0xa852ab,_0x159288=this[_0x461c8f(0x306)][_0x461c8f(0x66c)](this['_text']),_0x2c7328=this['_proxyWindow'][_0x461c8f(0x619)](),_0xdf2b3e=_0x159288[_0x461c8f(0x61e)]+_0x2c7328*0x2,_0x50131f=_0x159288[_0x461c8f(0x442)];this[_0x461c8f(0x306)][_0x461c8f(0x358)](0x0,0x0,_0xdf2b3e,_0x50131f),this['_proxyWindow'][_0x461c8f(0x58a)](),this[_0x461c8f(0x6b5)]=this['_proxyWindow']['contents'];},Sprite_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x331)]=function(){const _0x470229=_0xa852ab,_0x37a8c2=this[_0x470229(0x306)]['itemPadding']();this['_proxyWindow'][_0x470229(0x3a0)](this['_text'],_0x37a8c2,0x0);},Sprite_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x40e)]=function(){const _0x22b747=_0xa852ab,_0x43824a=VisuMZ[_0x22b747(0x5fb)][_0x22b747(0x4d4)][_0x22b747(0x1f2)][_0x22b747(0x5b7)],_0x718433=$gameSystem[_0x22b747(0x287)]()||0x1;this[_0x22b747(0x598)]['x']=this[_0x22b747(0x598)]['y']=_0x43824a/_0x718433;},Sprite_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x30c)]=function(){const _0x4e2036=_0xa852ab;if(!SceneManager[_0x4e2036(0x6ce)])return;if(!SceneManager[_0x4e2036(0x6ce)][_0x4e2036(0x56a)])return;const _0x22fe34=SceneManager['_scene'][_0x4e2036(0x56a)][_0x4e2036(0x254)](this[_0x4e2036(0x5ca)]);if(!_0x22fe34)return;this['x']=this[_0x4e2036(0x5ca)]['screenX'](),this['x']+=this['_event'][_0x4e2036(0x57a)][_0x4e2036(0x620)];if(_0x22fe34['_lastAttachPictureFilename']){const _0x1e1eb5=_0x22fe34[_0x4e2036(0x44a)];this['y']=this[_0x4e2036(0x5ca)][_0x4e2036(0x413)]()-_0x1e1eb5[_0x4e2036(0x442)]*_0x1e1eb5[_0x4e2036(0x598)]['y'];}else this['y']=this[_0x4e2036(0x5ca)]['screenY']()-_0x22fe34[_0x4e2036(0x442)]*_0x22fe34[_0x4e2036(0x598)]['y'];this['y']+=$gameSystem[_0x4e2036(0x334)]()*-0.5,this['y']+=this[_0x4e2036(0x5ca)]['_labelWindow'][_0x4e2036(0x2ab)];},Sprite_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x3e8)]=function(){const _0x14c6b0=_0xa852ab;if(this['isLabelVisible']())this[_0x14c6b0(0x24b)]+=this[_0x14c6b0(0x618)]();else SceneManager['_scene']['_encounterEffectDuration']>0x0?this[_0x14c6b0(0x24b)]=0x0:this[_0x14c6b0(0x24b)]-=this[_0x14c6b0(0x618)]();},Sprite_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x54d)]=function(){const _0x2dd5a7=_0xa852ab;if(this[_0x2dd5a7(0x253)]()&&this[_0x2dd5a7(0x5ca)]&&this[_0x2dd5a7(0x5ca)][_0x2dd5a7(0x57a)]['hueShift']){const _0x4b2c38=this[_0x2dd5a7(0x3d7)]+(this[_0x2dd5a7(0x5ca)][_0x2dd5a7(0x57a)][_0x2dd5a7(0x272)]||0x0);this[_0x2dd5a7(0x574)](_0x4b2c38);}},Sprite_EventLabel['prototype'][_0xa852ab(0x253)]=function(){const _0x3b970b=_0xa852ab;if(!$gameSystem[_0x3b970b(0x589)]())return![];if(this['_event']?.[_0x3b970b(0x4cb)])return![];if(this['_event']&&this['_event'][_0x3b970b(0x625)]<0x0)return![];if(SceneManager['_scene'][_0x3b970b(0x2c0)]>0x0)return![];const _0x5c0495=$gamePlayer['x'],_0x308b8a=$gamePlayer['y'],_0x4444a5=this[_0x3b970b(0x5ca)]['x'],_0x49b141=this[_0x3b970b(0x5ca)]['y'];if(this[_0x3b970b(0x424)]===_0x5c0495&&this[_0x3b970b(0x27f)]===_0x308b8a&&this[_0x3b970b(0x452)]===_0x4444a5&&this[_0x3b970b(0x34e)]===_0x49b141)return this[_0x3b970b(0x51c)];this[_0x3b970b(0x424)]=$gamePlayer['x'],this['_visiblePlayerY']=$gamePlayer['y'],this[_0x3b970b(0x452)]=this[_0x3b970b(0x5ca)]['x'],this[_0x3b970b(0x34e)]=this[_0x3b970b(0x5ca)]['y'];if(!VisuMZ[_0x3b970b(0x5fb)]['isInsideLabelRange'](this['_event']))return this[_0x3b970b(0x51c)]=![],![];return this[_0x3b970b(0x51c)]=!![],!![];},Sprite_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x618)]=function(){const _0x355665=_0xa852ab;return VisuMZ[_0x355665(0x5fb)][_0x355665(0x4d4)][_0x355665(0x1f2)][_0x355665(0x409)];};function _0x45ca(_0x1e156d,_0x576b16){const _0x422247=_0x4222();return _0x45ca=function(_0x45ca5b,_0x58191e){_0x45ca5b=_0x45ca5b-0x1ef;let _0x535ec1=_0x422247[_0x45ca5b];return _0x535ec1;},_0x45ca(_0x1e156d,_0x576b16);}function Sprite_VisuMz_MessagePopup(){this['initialize'](...arguments);}Sprite_VisuMz_MessagePopup[_0xa852ab(0x410)]=Object['create'](Sprite[_0xa852ab(0x410)]),Sprite_VisuMz_MessagePopup['prototype'][_0xa852ab(0x6b9)]=Sprite_VisuMz_MessagePopup,Sprite_VisuMz_MessagePopup[_0xa852ab(0x410)][_0xa852ab(0x6b7)]=function(_0x2d8836){const _0x15c823=_0xa852ab;this[_0x15c823(0x627)]=_0x2d8836,Sprite[_0x15c823(0x410)][_0x15c823(0x6b7)]['call'](this),this['initMembers'](),this[_0x15c823(0x3a5)](),this['createTextSprite'](),this[_0x15c823(0x5a2)]();},Sprite_VisuMz_MessagePopup[_0xa852ab(0x410)][_0xa852ab(0x5a8)]=function(){const _0x1287b7=_0xa852ab;this[_0x1287b7(0x651)]=this[_0x1287b7(0x627)][_0x1287b7(0x43e)],this[_0x1287b7(0x595)]=this[_0x1287b7(0x627)]['duration'],this['z']=0x6,this[_0x1287b7(0x450)]=this[_0x1287b7(0x627)]['fadeDuration']['fadeIn'],this['_fadeInDuration']>0x0&&this[_0x1287b7(0x450)]>=Math[_0x1287b7(0x4de)](this[_0x1287b7(0x651)]*0.48)&&(this[_0x1287b7(0x450)]=Math[_0x1287b7(0x4de)](this[_0x1287b7(0x651)]*0.48)),this[_0x1287b7(0x24b)]=this[_0x1287b7(0x450)]>0x0?0x0:0xff,this['_fadeOutDuration']=this[_0x1287b7(0x627)]['fadeDuration']['fadeOut'],this[_0x1287b7(0x3ad)]>0x0&&this[_0x1287b7(0x3ad)]>=Math['floor'](this[_0x1287b7(0x651)]*0.48)&&(this[_0x1287b7(0x3ad)]=Math[_0x1287b7(0x4de)](this[_0x1287b7(0x651)]*0.48)),this['_fadeOutStart']=this['_fadeOutDuration'],this[_0x1287b7(0x579)]=this[_0x1287b7(0x627)][_0x1287b7(0x552)]['x'],this[_0x1287b7(0x385)]=this[_0x1287b7(0x627)][_0x1287b7(0x552)]['y'],this['_targetX']=this[_0x1287b7(0x627)]['endOffset']['x'],this[_0x1287b7(0x44c)]=this[_0x1287b7(0x627)][_0x1287b7(0x600)]['y'],this[_0x1287b7(0x21f)]=this[_0x1287b7(0x579)],this[_0x1287b7(0x34d)]=this[_0x1287b7(0x385)],this['_startScaleX']=this[_0x1287b7(0x627)][_0x1287b7(0x32a)]['x'],this[_0x1287b7(0x69b)]=this[_0x1287b7(0x627)][_0x1287b7(0x32a)]['y'],this[_0x1287b7(0x4b5)]=this[_0x1287b7(0x627)][_0x1287b7(0x611)]['x'],this[_0x1287b7(0x33b)]=this[_0x1287b7(0x627)][_0x1287b7(0x611)]['y'],this[_0x1287b7(0x41e)]=-this[_0x1287b7(0x627)][_0x1287b7(0x251)][_0x1287b7(0x3be)],this['_targetAngle']=-this['_settings'][_0x1287b7(0x251)][_0x1287b7(0x24e)],this[_0x1287b7(0x37e)]=-this[_0x1287b7(0x627)]['misc'][_0x1287b7(0x6e8)],this[_0x1287b7(0x2ed)]=0x0;},Sprite_VisuMz_MessagePopup[_0xa852ab(0x410)][_0xa852ab(0x3a5)]=function(){const _0x1a75f7=_0xa852ab,_0x16f8bd=this[_0x1a75f7(0x627)],_0x661195=new Rectangle(0x0,0x0,Graphics[_0x1a75f7(0x61e)],Graphics[_0x1a75f7(0x442)]);this['_dummyWindow']=new Window_Base(_0x661195);const _0x17ec55=this[_0x1a75f7(0x4bf)][_0x1a75f7(0x66c)](_0x16f8bd[_0x1a75f7(0x3c2)]),_0x3fdb9e=_0x17ec55[_0x1a75f7(0x61e)],_0x246bdc=_0x17ec55[_0x1a75f7(0x442)],_0x1876e2=_0x3fdb9e+$gameSystem[_0x1a75f7(0x334)]()*0x2,_0xd86533=_0x246bdc+$gameSystem[_0x1a75f7(0x334)]()*0x2;this[_0x1a75f7(0x4bf)][_0x1a75f7(0x358)](0x0,0x0,_0x1876e2,_0xd86533),this[_0x1a75f7(0x4bf)]['createContents'](),this[_0x1a75f7(0x4bf)]['drawTextEx'](_0x16f8bd['text'],0x0,0x0);},Sprite_VisuMz_MessagePopup[_0xa852ab(0x410)][_0xa852ab(0x346)]=function(){const _0x1545e7=_0xa852ab;this['_textSprite']=new Sprite(),this[_0x1545e7(0x22c)][_0x1545e7(0x6b5)]=this['_dummyWindow'][_0x1545e7(0x427)],this[_0x1545e7(0x22c)][_0x1545e7(0x67f)]['x']=0.5,this[_0x1545e7(0x22c)][_0x1545e7(0x67f)]['y']=0.5,this['_textSprite']['x']=this[_0x1545e7(0x579)],this[_0x1545e7(0x22c)]['y']=this[_0x1545e7(0x385)],this['_textSprite'][_0x1545e7(0x598)]['x']=this[_0x1545e7(0x441)],this[_0x1545e7(0x22c)]['scale']['y']=this[_0x1545e7(0x69b)],this[_0x1545e7(0x22c)]['angle']=this[_0x1545e7(0x41e)],this[_0x1545e7(0x31a)](this[_0x1545e7(0x22c)]);},Sprite_VisuMz_MessagePopup[_0xa852ab(0x410)][_0xa852ab(0x5a2)]=function(){const _0x225a5d=_0xa852ab;Sprite[_0x225a5d(0x410)][_0x225a5d(0x5a2)][_0x225a5d(0x558)](this);if(!this['canUpdate']())return;this[_0x225a5d(0x227)](),this[_0x225a5d(0x3dd)](),this['updateTextScale'](),this['updateTextAngle'](),this[_0x225a5d(0x3e8)](),this['updateDuration']();},Sprite_VisuMz_MessagePopup[_0xa852ab(0x410)][_0xa852ab(0x37a)]=function(){const _0x253cba=_0xa852ab;return!!this[_0x253cba(0x22c)];},Sprite_VisuMz_MessagePopup[_0xa852ab(0x410)]['updateSpritePosition']=function(){const _0xf1cfc6=_0xa852ab,_0x3eb421=this['_settings'];{const _0x2aed7a=$gameMap[_0xf1cfc6(0x648)](),_0x382db4=_0x3eb421['tileCoordinates']['x'],_0x218178=$gameMap[_0xf1cfc6(0x549)](_0x382db4);this['x']=Math[_0xf1cfc6(0x4de)](_0x218178*_0x2aed7a+_0x2aed7a/0x2);}{const _0x4b37ee=$gameMap['tileHeight'](),_0x3ba10e=_0x3eb421[_0xf1cfc6(0x373)]['y'],_0x2df035=$gameMap[_0xf1cfc6(0x395)](_0x3ba10e);this['y']=Math[_0xf1cfc6(0x4de)](_0x2df035*_0x4b37ee+_0x4b37ee);}},Sprite_VisuMz_MessagePopup[_0xa852ab(0x410)][_0xa852ab(0x3dd)]=function(){const _0x3276f1=_0xa852ab;if(this[_0x3276f1(0x651)]<=0x0)return;const _0x30d873=this['_duration'],_0x5c6a9b=this['_wholeDuration'];{this['_offsetX']=(this[_0x3276f1(0x21f)]*(_0x30d873-0x1)+this[_0x3276f1(0x2b0)])/_0x30d873,this[_0x3276f1(0x34d)]=(this[_0x3276f1(0x34d)]*(_0x30d873-0x1)+this['_targetY'])/_0x30d873;}{const _0x180f0d=_0x5c6a9b-_0x30d873,_0x4af8e1=_0x5c6a9b/0x2,_0x3de7f1=this[_0x3276f1(0x37e)],_0x2cb7a9=-_0x3de7f1/Math[_0x3276f1(0x297)](_0x4af8e1,0x2);this[_0x3276f1(0x2ed)]=_0x2cb7a9*Math[_0x3276f1(0x297)](_0x180f0d-_0x4af8e1,0x2)+_0x3de7f1;}this[_0x3276f1(0x22c)]['x']=this[_0x3276f1(0x21f)],this['_textSprite']['y']=this[_0x3276f1(0x34d)]+this[_0x3276f1(0x2ed)];},Sprite_VisuMz_MessagePopup['prototype'][_0xa852ab(0x464)]=function(){const _0x4281da=_0xa852ab;if(this[_0x4281da(0x651)]<=0x0)return;const _0x5af90d=this[_0x4281da(0x651)];this[_0x4281da(0x22c)][_0x4281da(0x598)]['x']=(this['_textSprite']['scale']['x']*(_0x5af90d-0x1)+this['_targetScaleX'])/_0x5af90d,this[_0x4281da(0x22c)]['scale']['y']=(this[_0x4281da(0x22c)]['scale']['y']*(_0x5af90d-0x1)+this[_0x4281da(0x33b)])/_0x5af90d;},Sprite_VisuMz_MessagePopup[_0xa852ab(0x410)][_0xa852ab(0x67c)]=function(){const _0x238665=_0xa852ab;if(this[_0x238665(0x651)]<=0x0)return;const _0xf5550c=this['_duration'];this[_0x238665(0x22c)][_0x238665(0x251)]=(this['_textSprite'][_0x238665(0x251)]*(_0xf5550c-0x1)+this[_0x238665(0x245)])/_0xf5550c;},Sprite_VisuMz_MessagePopup[_0xa852ab(0x410)][_0xa852ab(0x3e8)]=function(){const _0x4ceeac=_0xa852ab;this[_0x4ceeac(0x2a8)](),this[_0x4ceeac(0x205)]();},Sprite_VisuMz_MessagePopup[_0xa852ab(0x410)][_0xa852ab(0x2a8)]=function(){const _0x180288=_0xa852ab;if(this[_0x180288(0x450)]<=0x0)return;const _0x3ca193=this[_0x180288(0x450)];this[_0x180288(0x24b)]=(this['opacity']*(_0x3ca193-0x1)+0xff)/_0x3ca193,this[_0x180288(0x450)]--,this[_0x180288(0x450)]<=0x0&&(this[_0x180288(0x24b)]=0xff);},Sprite_VisuMz_MessagePopup[_0xa852ab(0x410)][_0xa852ab(0x205)]=function(){const _0x5e2a4c=_0xa852ab;if(this[_0x5e2a4c(0x3ad)]<=0x0)return;if(this[_0x5e2a4c(0x651)]>this[_0x5e2a4c(0x206)])return;const _0x85be7=this['_fadeOutDuration'];this['opacity']=(this[_0x5e2a4c(0x24b)]*(_0x85be7-0x1)+0x0)/_0x85be7,this[_0x5e2a4c(0x3ad)]--,this['_fadeOutDuration']<=0x0&&(this[_0x5e2a4c(0x24b)]=0x0);},Sprite_VisuMz_MessagePopup[_0xa852ab(0x410)]['updateDuration']=function(){const _0x2dce9d=_0xa852ab;if(this['_duration']<=0x0)return;this[_0x2dce9d(0x651)]--;if(this[_0x2dce9d(0x651)]<=0x0){if(this['parent'])this[_0x2dce9d(0x6b4)][_0x2dce9d(0x3c7)](this);this[_0x2dce9d(0x22c)][_0x2dce9d(0x6b5)]&&this[_0x2dce9d(0x22c)][_0x2dce9d(0x6b5)][_0x2dce9d(0x2e9)]();}},VisuMZ['EventsMoveCore'][_0xa852ab(0x689)]=Spriteset_Map[_0xa852ab(0x410)][_0xa852ab(0x671)],Spriteset_Map[_0xa852ab(0x410)][_0xa852ab(0x671)]=function(){const _0x2d7bbb=_0xa852ab;VisuMZ[_0x2d7bbb(0x5fb)][_0x2d7bbb(0x689)][_0x2d7bbb(0x558)](this),this[_0x2d7bbb(0x236)]();},VisuMZ['EventsMoveCore'][_0xa852ab(0x488)]=Spriteset_Map[_0xa852ab(0x410)][_0xa852ab(0x307)],Spriteset_Map[_0xa852ab(0x410)]['createShadow']=function(){const _0x6c7d4f=_0xa852ab;VisuMZ[_0x6c7d4f(0x5fb)][_0x6c7d4f(0x488)][_0x6c7d4f(0x558)](this),this[_0x6c7d4f(0x31e)]();},Spriteset_Map[_0xa852ab(0x410)][_0xa852ab(0x31e)]=function(){const _0xca9464=_0xa852ab;if(!VisuMZ['EventsMoveCore']['Settings'][_0xca9464(0x2fb)][_0xca9464(0x479)])return;for(const _0x1d4418 of this['_characterSprites']){this[_0xca9464(0x6c1)](_0x1d4418);}},Spriteset_Map[_0xa852ab(0x410)][_0xa852ab(0x6c1)]=function(_0x326534){const _0xc3a2ae=_0xa852ab;_0x326534[_0xc3a2ae(0x564)]=new Sprite(),_0x326534[_0xc3a2ae(0x564)]['_filename']=_0x326534[_0xc3a2ae(0x222)][_0xc3a2ae(0x55c)](),_0x326534[_0xc3a2ae(0x564)][_0xc3a2ae(0x6b5)]=ImageManager[_0xc3a2ae(0x225)](_0x326534['_shadowSprite'][_0xc3a2ae(0x37d)]),_0x326534[_0xc3a2ae(0x564)][_0xc3a2ae(0x67f)]['x']=0.5,_0x326534[_0xc3a2ae(0x564)][_0xc3a2ae(0x67f)]['y']=0x1;const _0x5778bb=VisuMZ['EventsMoveCore'][_0xc3a2ae(0x4d4)]['Movement'][_0xc3a2ae(0x292)]??0.5;_0x326534[_0xc3a2ae(0x564)]['z']=_0x5778bb,this[_0xc3a2ae(0x5c4)][_0xc3a2ae(0x31a)](_0x326534[_0xc3a2ae(0x564)]);},Spriteset_Map['prototype'][_0xa852ab(0x4ef)]=function(){const _0x5e801f=_0xa852ab;if(!VisuMZ[_0x5e801f(0x5fb)][_0x5e801f(0x4d4)][_0x5e801f(0x2fb)][_0x5e801f(0x479)])return;for(const _0x2059bc of this['_characterSprites']){this[_0x5e801f(0x5c4)]['removeChild'](_0x2059bc[_0x5e801f(0x564)]);}},Spriteset_Map['prototype'][_0xa852ab(0x236)]=function(){const _0x2340af=_0xa852ab;this[_0x2340af(0x274)]=[];for(const _0x59f2b7 of $gameMap[_0x2340af(0x2e3)]()){this[_0x2340af(0x22f)](_0x59f2b7);}},Spriteset_Map[_0xa852ab(0x317)]=VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x4d4)][_0xa852ab(0x1f2)][_0xa852ab(0x25c)]??!![],Spriteset_Map['prototype'][_0xa852ab(0x22f)]=function(_0x3814af){const _0x34fc44=_0xa852ab;if(!this[_0x34fc44(0x573)](_0x3814af))return;if(Utils[_0x34fc44(0x29c)]()){if(!Spriteset_Map['MOBILE_EVENT_LABELS'])return;}let _0x362a88;const _0x581e53=VisuMZ[_0x34fc44(0x5fb)][_0x34fc44(0x4d4)]['Label']['SpriteBased']??!![];_0x362a88=_0x581e53?new Sprite_EventLabel(_0x3814af):new Window_EventLabel(_0x3814af),_0x362a88['z']=0x8,_0x362a88[_0x34fc44(0x668)]=Sprite['_counter']++,this[_0x34fc44(0x5c4)][_0x34fc44(0x31a)](_0x362a88),this[_0x34fc44(0x274)][_0x34fc44(0x215)](_0x362a88);},Spriteset_Map[_0xa852ab(0x410)][_0xa852ab(0x573)]=function(_0x3bae03){const _0x201451=_0xa852ab,_0x2ba94c=_0x3bae03[_0x201451(0x6b2)]();if(_0x2ba94c[_0x201451(0x28d)][_0x201451(0x57e)](/<LABEL:[ ](.*?)>/i))return!![];if(_0x2ba94c['note'][_0x201451(0x57e)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];for(const _0x4350e0 of _0x2ba94c['pages']){let _0x4af439='';for(const _0x22398f of _0x4350e0[_0x201451(0x22a)]){[0x6c,0x198]['includes'](_0x22398f[_0x201451(0x30b)])&&(_0x4af439+=_0x22398f[_0x201451(0x402)][0x0]);}if(_0x4af439[_0x201451(0x57e)](/<LABEL:[ ](.*?)>/i))return!![];if(_0x4af439[_0x201451(0x57e)](/<LABEL>\s*([\s\S]*)\s*<\/LABEL>/i))return!![];}return![];},Spriteset_Map[_0xa852ab(0x410)][_0xa852ab(0x4cc)]=function(_0x5ac80e){const _0x2e9d81=_0xa852ab;this['_characterSprites']=this[_0x2e9d81(0x6b0)]||[];const _0x228aa5=new Sprite_Character(_0x5ac80e);this[_0x2e9d81(0x6b0)][_0x2e9d81(0x215)](_0x228aa5),this[_0x2e9d81(0x5c4)]['addChild'](_0x228aa5),this[_0x2e9d81(0x6c1)](_0x228aa5),this[_0x2e9d81(0x22f)](_0x5ac80e),_0x228aa5['update'](),_0x5ac80e[_0x2e9d81(0x4e5)](),_0x228aa5[_0x2e9d81(0x249)]();},Spriteset_Map['prototype'][_0xa852ab(0x4f3)]=function(){const _0x46ac3c=_0xa852ab;if(!this['_labelWindows'])return;for(const _0x41397c of this[_0x46ac3c(0x274)]){_0x41397c&&(_0x41397c[_0x46ac3c(0x424)]=undefined,_0x41397c['refresh']());}},Spriteset_Map[_0xa852ab(0x410)][_0xa852ab(0x556)]=function(_0x1ba035,_0x4a08e1){if(!_0x1ba035)return;_0x4a08e1['tileCoordinates']={'x':_0x1ba035['x'],'y':_0x1ba035['y']},this['createEventsMoveCoreTileMessagePopup'](_0x4a08e1);},Spriteset_Map['prototype']['createEventsMoveCoreTileMessagePopup']=function(_0x134f9d){const _0xb72842=_0xa852ab;if(!this[_0xb72842(0x5c4)])return;const _0x15127e=new Sprite_VisuMz_MessagePopup(_0x134f9d);this[_0xb72842(0x5c4)][_0xb72842(0x31a)](_0x15127e);},VisuMZ['EventsMoveCore'][_0xa852ab(0x3b5)]=Game_Message[_0xa852ab(0x410)][_0xa852ab(0x201)],Game_Message[_0xa852ab(0x410)]['setNumberInput']=function(_0x3947f1,_0x35f96c){const _0x4a9317=_0xa852ab;this[_0x4a9317(0x42d)]=$gameTemp[_0x4a9317(0x489)](),VisuMZ[_0x4a9317(0x5fb)][_0x4a9317(0x3b5)][_0x4a9317(0x558)](this,_0x3947f1,_0x35f96c);},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x321)]=Window_NumberInput[_0xa852ab(0x410)][_0xa852ab(0x3be)],Window_NumberInput[_0xa852ab(0x410)]['start']=function(){const _0x385993=_0xa852ab;$gameTemp[_0x385993(0x5a0)]($gameMessage['_selfTargetNumberInput']),VisuMZ[_0x385993(0x5fb)][_0x385993(0x321)][_0x385993(0x558)](this),$gameTemp[_0x385993(0x4b9)]();},VisuMZ['EventsMoveCore'][_0xa852ab(0x3c6)]=Window_NumberInput['prototype']['processOk'],Window_NumberInput[_0xa852ab(0x410)]['processOk']=function(){const _0x527209=_0xa852ab;$gameTemp[_0x527209(0x5a0)]($gameMessage[_0x527209(0x42d)]),VisuMZ['EventsMoveCore'][_0x527209(0x3c6)]['call'](this),$gameTemp[_0x527209(0x4b9)](),$gameMessage['_selfTargetNumberInput']=undefined;},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x5d5)]=Game_Message['prototype']['setItemChoice'],Game_Message[_0xa852ab(0x410)][_0xa852ab(0x654)]=function(_0x3dab95,_0x120335){const _0x417fbf=_0xa852ab;this['_selfTargetItemChoice']=$gameTemp[_0x417fbf(0x489)](),VisuMZ[_0x417fbf(0x5fb)][_0x417fbf(0x5d5)][_0x417fbf(0x558)](this,_0x3dab95,_0x120335);},VisuMZ[_0xa852ab(0x5fb)]['Window_EventItem_onOk']=Window_EventItem[_0xa852ab(0x410)][_0xa852ab(0x45e)],Window_EventItem['prototype'][_0xa852ab(0x45e)]=function(){const _0x4fcdc9=_0xa852ab;$gameTemp['registerSelfTarget']($gameMessage[_0x4fcdc9(0x2ae)]),VisuMZ[_0x4fcdc9(0x5fb)][_0x4fcdc9(0x475)][_0x4fcdc9(0x558)](this),$gameTemp[_0x4fcdc9(0x4b9)](),$gameMessage[_0x4fcdc9(0x2ae)]=undefined;},VisuMZ['EventsMoveCore'][_0xa852ab(0x6a2)]=Window_EventItem[_0xa852ab(0x410)]['onCancel'],Window_EventItem[_0xa852ab(0x410)][_0xa852ab(0x1fb)]=function(){const _0x5dfbe2=_0xa852ab;$gameTemp[_0x5dfbe2(0x5a0)]($gameMessage[_0x5dfbe2(0x2ae)]),VisuMZ[_0x5dfbe2(0x5fb)][_0x5dfbe2(0x6a2)][_0x5dfbe2(0x558)](this),$gameTemp[_0x5dfbe2(0x4b9)](),$gameMessage[_0x5dfbe2(0x2ae)]=undefined;},VisuMZ[_0xa852ab(0x5fb)]['Window_Message_startMessage']=Window_Message[_0xa852ab(0x410)][_0xa852ab(0x5f9)],Window_Message['prototype'][_0xa852ab(0x5f9)]=function(){const _0x372fac=_0xa852ab;$gameMessage['registerSelfEvent'](),VisuMZ['EventsMoveCore'][_0x372fac(0x43b)][_0x372fac(0x558)](this),$gameTemp['clearSelfTarget']();},VisuMZ[_0xa852ab(0x5fb)][_0xa852ab(0x50f)]=Window_ScrollText[_0xa852ab(0x410)][_0xa852ab(0x5f9)],Window_ScrollText[_0xa852ab(0x410)][_0xa852ab(0x5f9)]=function(){const _0x42012c=_0xa852ab;$gameMessage[_0x42012c(0x59f)](),VisuMZ[_0x42012c(0x5fb)][_0x42012c(0x50f)]['call'](this),$gameTemp[_0x42012c(0x4b9)]();};function Window_EventLabel(){const _0x5be913=_0xa852ab;this[_0x5be913(0x6b7)](...arguments);}Window_EventLabel[_0xa852ab(0x410)]=Object['create'](Window_Base[_0xa852ab(0x410)]),Window_EventLabel[_0xa852ab(0x410)]['constructor']=Window_EventLabel,Window_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x6b7)]=function(_0x38b271){const _0x234f19=_0xa852ab;this['_event']=_0x38b271;const _0x46bc73=new Rectangle(0x0,0x0,Graphics['boxWidth']/0x4,this[_0x234f19(0x58e)](0x1));this['initMembers'](),Window_Base[_0x234f19(0x410)][_0x234f19(0x6b7)][_0x234f19(0x558)](this,_0x46bc73),this[_0x234f19(0x5e9)]=0x0,this[_0x234f19(0x458)](0x2),this[_0x234f19(0x45d)]='';},Window_EventLabel[_0xa852ab(0x410)]['initMembers']=function(){const _0x1cc3eb=_0xa852ab;this[_0x1cc3eb(0x218)]=![],this[_0x1cc3eb(0x58b)]=$gameScreen['zoomScale'](),this[_0x1cc3eb(0x513)]=this['_event'][_0x1cc3eb(0x6d6)](),this[_0x1cc3eb(0x280)]=this[_0x1cc3eb(0x5ca)]['screenY'](),this['_eventLabelOffsetX']=this[_0x1cc3eb(0x5ca)][_0x1cc3eb(0x57a)]['offsetX'],this[_0x1cc3eb(0x200)]=this[_0x1cc3eb(0x5ca)][_0x1cc3eb(0x57a)][_0x1cc3eb(0x2ab)],this[_0x1cc3eb(0x235)]=this['_event'][_0x1cc3eb(0x625)],this['_cacheVisibility']=this[_0x1cc3eb(0x253)](),this[_0x1cc3eb(0x3aa)]=$gameSystem['eventLabelsVisible'](),this[_0x1cc3eb(0x424)]=$gamePlayer['x'],this['_visiblePlayerY']=$gamePlayer['y'],this[_0x1cc3eb(0x452)]=this[_0x1cc3eb(0x5ca)]['x'],this[_0x1cc3eb(0x34e)]=this['_event']['y'];},Window_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x5a2)]=function(){const _0x58353a=_0xa852ab;Window_Base['prototype'][_0x58353a(0x5a2)]['call'](this);if(!this[_0x58353a(0x448)]())return;this[_0x58353a(0x5c7)](),this['updateScale'](),this[_0x58353a(0x30c)](),this[_0x58353a(0x3e8)]();},Window_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x448)]=function(){const _0x2cb952=_0xa852ab;if(!this[_0x2cb952(0x5ca)])return![];if(!this[_0x2cb952(0x5ca)][_0x2cb952(0x57a)])return![];if(this[_0x2cb952(0x235)]!==this[_0x2cb952(0x5ca)][_0x2cb952(0x625)])return!![];if(this[_0x2cb952(0x5ca)]['_erased']&&!this['_eventErased'])return!![];if(this[_0x2cb952(0x5ca)][_0x2cb952(0x57a)]['text']==='')return![];if(this[_0x2cb952(0x58b)]!==$gameScreen[_0x2cb952(0x5ba)]())return!![];if(this['_eventScreenX']!==this[_0x2cb952(0x5ca)]['screenX']())return!![];if(this[_0x2cb952(0x280)]!==this[_0x2cb952(0x5ca)][_0x2cb952(0x413)]())return!![];if(this[_0x2cb952(0x1fe)]!==this[_0x2cb952(0x5ca)][_0x2cb952(0x57a)]['offsetX'])return!![];if(this[_0x2cb952(0x200)]!==this[_0x2cb952(0x5ca)]['_labelWindow'][_0x2cb952(0x2ab)])return!![];if(this['_visiblePlayerX']!==$gamePlayer['x'])return!![];if(this[_0x2cb952(0x27f)]!==$gamePlayer['y'])return!![];if(this[_0x2cb952(0x452)]!==this[_0x2cb952(0x5ca)]['x'])return!![];if(this[_0x2cb952(0x34e)]!==this[_0x2cb952(0x5ca)]['y'])return!![];if(this[_0x2cb952(0x3aa)]!==$gameSystem[_0x2cb952(0x589)]())return!![];if(this[_0x2cb952(0x51c)]&&this[_0x2cb952(0x5e9)]<0xff)return!![];if(!this[_0x2cb952(0x51c)]&&this[_0x2cb952(0x5e9)]>0x0)return!![];if(SceneManager[_0x2cb952(0x6ce)][_0x2cb952(0x2c0)]>0x0)return!![];return![];},Window_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x5c7)]=function(){const _0x54b989=_0xa852ab;this['_event'][_0x54b989(0x299)]()!==this[_0x54b989(0x45d)]&&(this['_text']=this['_event'][_0x54b989(0x299)](),this[_0x54b989(0x2af)]());},Window_EventLabel['prototype'][_0xa852ab(0x40e)]=function(){const _0x3c6526=_0xa852ab;this['scale']['x']=0x1/$gameScreen[_0x3c6526(0x5ba)](),this[_0x3c6526(0x598)]['y']=0x1/$gameScreen[_0x3c6526(0x5ba)](),this[_0x3c6526(0x58b)]=$gameScreen[_0x3c6526(0x5ba)]();},Window_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x30c)]=function(){const _0x12a3c3=_0xa852ab;if(!SceneManager[_0x12a3c3(0x6ce)])return;if(!SceneManager[_0x12a3c3(0x6ce)][_0x12a3c3(0x56a)])return;const _0xb44038=SceneManager[_0x12a3c3(0x6ce)][_0x12a3c3(0x56a)][_0x12a3c3(0x254)](this[_0x12a3c3(0x5ca)]);if(!_0xb44038)return;this['x']=Math[_0x12a3c3(0x5e5)](this[_0x12a3c3(0x5ca)][_0x12a3c3(0x6d6)]()-Math[_0x12a3c3(0x4de)](this[_0x12a3c3(0x61e)]*this[_0x12a3c3(0x598)]['x']/0x2)),this['x']+=this['_event']['_labelWindow'][_0x12a3c3(0x620)],this['y']=this[_0x12a3c3(0x5ca)][_0x12a3c3(0x413)]()-_0xb44038['height'],this['y']+=Math['round']($gameSystem[_0x12a3c3(0x334)]()*0.5),this['y']-=Math[_0x12a3c3(0x5e5)](this[_0x12a3c3(0x442)]*this['scale']['y']),this['y']+=this[_0x12a3c3(0x5ca)][_0x12a3c3(0x57a)][_0x12a3c3(0x2ab)],this[_0x12a3c3(0x218)]=this['_event'][_0x12a3c3(0x4cb)],this[_0x12a3c3(0x513)]=this[_0x12a3c3(0x5ca)][_0x12a3c3(0x6d6)](),this['_eventScreenY']=this[_0x12a3c3(0x5ca)][_0x12a3c3(0x413)](),this['_eventLabelOffsetX']=this[_0x12a3c3(0x5ca)]['_labelWindow']['offsetX'],this[_0x12a3c3(0x200)]=this[_0x12a3c3(0x5ca)]['_labelWindow'][_0x12a3c3(0x2ab)],this[_0x12a3c3(0x235)]=this[_0x12a3c3(0x5ca)][_0x12a3c3(0x625)],this[_0x12a3c3(0x218)]&&(this[_0x12a3c3(0x5e9)]=0x0);},Window_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x3e8)]=function(){const _0x2034b7=_0xa852ab;if(this['isLabelVisible']())this[_0x2034b7(0x5e9)]+=this[_0x2034b7(0x618)]();else SceneManager[_0x2034b7(0x6ce)][_0x2034b7(0x2c0)]>0x0?this[_0x2034b7(0x5e9)]=0x0:this[_0x2034b7(0x5e9)]-=this['opacitySpeed']();},Window_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x253)]=function(){const _0xa5dde0=_0xa852ab;if(!$gameSystem[_0xa5dde0(0x589)]())return![];if(this[_0xa5dde0(0x5ca)]?.[_0xa5dde0(0x4cb)])return![];if(SceneManager[_0xa5dde0(0x6ce)][_0xa5dde0(0x2c0)]>0x0)return![];const _0x12b56c=$gamePlayer['x'],_0x56ca67=$gamePlayer['y'],_0x1b9895=this[_0xa5dde0(0x5ca)]['x'],_0x353324=this[_0xa5dde0(0x5ca)]['y'];if(this['_visiblePlayerX']===_0x12b56c&&this[_0xa5dde0(0x27f)]===_0x56ca67&&this[_0xa5dde0(0x452)]===_0x1b9895&&this[_0xa5dde0(0x34e)]===_0x353324)return this[_0xa5dde0(0x51c)];this[_0xa5dde0(0x424)]=$gamePlayer['x'],this[_0xa5dde0(0x27f)]=$gamePlayer['y'],this[_0xa5dde0(0x452)]=this[_0xa5dde0(0x5ca)]['x'],this[_0xa5dde0(0x34e)]=this[_0xa5dde0(0x5ca)]['y'];if(!VisuMZ[_0xa5dde0(0x5fb)][_0xa5dde0(0x653)](this['_event']))return this[_0xa5dde0(0x51c)]=![],![];return this[_0xa5dde0(0x51c)]=!![],!![];},Window_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x618)]=function(){const _0x356782=_0xa852ab;return VisuMZ[_0x356782(0x5fb)]['Settings'][_0x356782(0x1f2)][_0x356782(0x409)];},Window_EventLabel['prototype'][_0xa852ab(0x23f)]=function(){const _0x4674b2=_0xa852ab,_0x43ff91=this['textSizeEx'](this[_0x4674b2(0x45d)]);this['width']=_0x43ff91[_0x4674b2(0x61e)]+($gameSystem['windowPadding']()+this[_0x4674b2(0x619)]())*0x2,this[_0x4674b2(0x442)]=Math[_0x4674b2(0x23b)](this['lineHeight'](),_0x43ff91[_0x4674b2(0x442)])+$gameSystem[_0x4674b2(0x334)]()*0x2,this[_0x4674b2(0x58a)]();},Window_EventLabel[_0xa852ab(0x410)]['lineHeight']=function(){const _0x13018e=_0xa852ab;return VisuMZ[_0x13018e(0x5fb)][_0x13018e(0x4d4)][_0x13018e(0x1f2)][_0x13018e(0x681)];},Window_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x25a)]=function(){const _0x4ad534=_0xa852ab;Window_Base[_0x4ad534(0x410)][_0x4ad534(0x25a)]['call'](this),this[_0x4ad534(0x427)]['fontSize']=this[_0x4ad534(0x2e7)]();},Window_EventLabel['prototype'][_0xa852ab(0x2e7)]=function(){const _0x3f4888=_0xa852ab;return VisuMZ[_0x3f4888(0x5fb)][_0x3f4888(0x4d4)][_0x3f4888(0x1f2)][_0x3f4888(0x5b7)];},Window_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x2af)]=function(){const _0x385128=_0xa852ab;this['resizeWindow'](),this['contents'][_0x385128(0x296)]();const _0x3d4e3f=this[_0x385128(0x45d)][_0x385128(0x4ce)](/[\r\n]+/);let _0x144cc4=0x0;for(const _0x3cd3ba of _0x3d4e3f){const _0x183e94=this['textSizeEx'](_0x3cd3ba),_0x3f10a5=Math[_0x385128(0x4de)]((this[_0x385128(0x21e)]-_0x183e94[_0x385128(0x61e)])/0x2);this[_0x385128(0x3a0)](_0x3cd3ba,_0x3f10a5,_0x144cc4),_0x144cc4+=_0x183e94['height'];}},Window_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x4e3)]=function(_0x5474f4,_0x434e70){const _0x3efe2b=_0xa852ab;_0x434e70[_0x3efe2b(0x52e)]&&this['drawIcon'](_0x5474f4,_0x434e70['x']+0x2,_0x434e70['y']),_0x434e70['x']+=Math[_0x3efe2b(0x5af)](this[_0x3efe2b(0x454)](),ImageManager['iconWidth'])+0x4;},Window_EventLabel[_0xa852ab(0x410)]['drawIcon']=function(_0x423693,_0x3d1812,_0xb2e6c){const _0x434f07=_0xa852ab,_0x5eb37d=ImageManager[_0x434f07(0x225)](_0x434f07(0x66d)),_0x4c29ee=ImageManager[_0x434f07(0x282)],_0x5a20a1=ImageManager[_0x434f07(0x343)],_0x277857=_0x423693%0x10*_0x4c29ee,_0xed536f=Math[_0x434f07(0x4de)](_0x423693/0x10)*_0x5a20a1,_0x2156be=Math[_0x434f07(0x5af)](this[_0x434f07(0x454)]()),_0x1e7032=Math[_0x434f07(0x5af)](this[_0x434f07(0x454)]());this[_0x434f07(0x427)][_0x434f07(0x36b)](_0x5eb37d,_0x277857,_0xed536f,_0x4c29ee,_0x5a20a1,_0x3d1812,_0xb2e6c,_0x2156be,_0x1e7032);},Window_EventLabel[_0xa852ab(0x410)][_0xa852ab(0x454)]=function(){const _0x570bc2=_0xa852ab;return VisuMZ[_0x570bc2(0x5fb)][_0x570bc2(0x4d4)][_0x570bc2(0x1f2)]['IconSize'];};