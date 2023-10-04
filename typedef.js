// order by define name

/**
 * define CombatManager
 * @typedef {object} CombatManager
 * @property {Player} player
 */

/**
 * define mod context
 * @typedef {object} Context
 */

/**
 * define DropTable
 * @typedef {object} DropTable
 * @property {DropTableDrop[]} drops
 * @property {number} totalWeight - total weight
 */

/**
 * define inner DropTableDrop
 * @typedef {object} DropTableDrop
 * @property {Item} item
 * @property {number} maxQuantity
 * @property {number} minQuantity
 * @property {number} weight
 */

/**
 * define global game
 * @typedef {object} Game
 * @property {CombatManager} combat
 * @property {ItemRegistry} items
 * @property {NamespaceRegistry} skills
 * @property {Township} township
 */

/**
 * define Item
 * @typedef {object} Item
 * @property {string} id
 */

/**
 * define ItemRegistry
 * @typedef {object} ItemRegistry
 * @property {Map<string, *>} registeredObjects
 */

/**
 * define NamespaceRegistry
 * @typedef {object} NamespaceRegistry
 * @property {Map<string, *>} registeredObjects
 */

/**
 * define OpenableItem
 * @typedef {object} OpenableItem
 * @augments Item
 * @property {DropTable} dropTable
 */

/**
 * define Player
 * @typedef {object} Player
 * @property {number} hitpoints - current HP
 */

/**
 * define Township
 * @typedef {object} Township
 * @property {NamespaceRegistry} resources
 * @property {TownshipFnGetResourceItemConversionsFromTownship} getResourceItemConversionsFromTownship
 */

/**
 * define inner function TownshipFnGetResourceItemConversionsFromTownship
 * @callback TownshipFnGetResourceItemConversionsFromTownship
 * @param {TownshipResource} resource
 * @returns {TownshipItemConversion[]}
 */

/**
 * define TownshipItemConversion
 * @typedef TownshipItemConversion
 * @property {TownshipItemConversionUnlockRequirement[]} unlockRequirements
 * @property {Item} item
 */

/**
 * define inner TownshipItemConversionUnlockRequirement
 * @typedef TownshipItemConversionUnlockRequirement
 * @property {number} level
 * @property {*} skill
 * @property {string} type
 */

/**
 * define TownshipResource
 * @typedef TownshipResource
 */

/** @type {Game} */
var game = game
