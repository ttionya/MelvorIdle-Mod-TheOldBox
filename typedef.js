// order by define name

/**
 * define CombatManager
 * @typedef {Object} CombatManager
 * @property {Player} player
 */

/**
 * define mod context
 * @typedef {Object} Context
 */

/**
 * define DropTable
 * @typedef {Object} DropTable
 * @property {DropTableDrop[]} drops
 * @property {number} totalWeight - total weight
 */

/**
 * define inner DropTableDrop
 * @typedef {Object} DropTableDrop
 * @property {Item} item
 * @property {number} maxQuantity
 * @property {number} minQuantity
 * @property {number} weight
 */

/**
 * define global game
 * @typedef {Object} Game
 * @property {CombatManager} combat
 * @property {ItemRegistry} items
 * @property {NamespaceRegistry} skills
 * @property {Township} township
 */

/**
 * define Item
 * @typedef {Object} Item
 * @property {string} id
 */

/**
 * define ItemRegistry
 * @typedef {Object} ItemRegistry
 * @property {Map<string, *>} registeredObjects
 */

/**
 * define NamespaceRegistry
 * @typedef {Object} NamespaceRegistry
 * @property {Map<string, *>} registeredObjects
 */

/**
 * define OpenableItem
 * @typedef {Object} OpenableItem
 * @augments Item
 * @property {DropTable} dropTable
 */

/**
 * define Player
 * @typedef {Object} Player
 * @property {number} hitpoints - current HP
 */

/**
 * define Township
 * @typedef {Object} Township
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

/** @type Game */
var game = game
