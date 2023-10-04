export function setup({ onCharacterLoaded }) {
  onCharacterLoaded(() => {
    console.log('Initializing Mod - The Old Box')

    resetDropTable()
    resetConversionRequirements()
  })
}

function resetConversionRequirements() {
  /**
   * @param {string} id - item id
   * @param {TownshipItemConversion[]} conversionList - conversion list
   * @param {TownshipItemConversionUnlockRequirement[]} requirementsData - unlock requirements data
   */
  function setRequirements(id, conversionList, requirementsData) {
    const conversionItem = conversionList.find((item) => item.item.id === id)

    if (!conversionItem) throw Error(`Not found conversion item '${id}'`)

    conversionItem.unlockRequirements.length = 0
    requirementsData.forEach((data) => conversionItem.unlockRequirements.push(data))
  }

  /**
   * @param {string} id - item id
   * @returns {TownshipItemConversion[]} - conversion list
   */
  function getConversionList(id) {
    /** @type TownshipResource */
    const resource = game.township.resources.registeredObjects.get(id)
    const conversionList = game.township.getResourceItemConversionsFromTownship(resource)

    if (!conversionList) throw Error(`Not found conversions '${id}'`)

    return conversionList
  }

  /**
   * @param {string} id - skill id
   * @returns {*} - skill
   */
  function getSkill(id) {
    const skill = game.skills.registeredObjects.get(id)

    if (!skill) throw Error(`Not found skill '${id}'`)

    return skill
  }

  // Food
  const foodConversionList = getConversionList('melvorF:Food')

  // Food Box I
  setRequirements('melvorF:Food_Box_I', foodConversionList, [
    { type: 'SkillLevel', skill: getSkill('melvorD:Cooking'), level: 30 },
    { type: 'SkillLevel', skill: getSkill('melvorD:Township'), level: 15 },
  ])

  // Food Box II
  setRequirements('melvorF:Food_Box_II', foodConversionList, [
    { type: 'SkillLevel', skill: getSkill('melvorD:Cooking'), level: 90 },
    { type: 'SkillLevel', skill: getSkill('melvorD:Township'), level: 75 },
  ])

  // Food Box III
  setRequirements('melvorTotH:Food_Box_III', foodConversionList, [
    { type: 'SkillLevel', skill: getSkill('melvorD:Cooking'), level: 115 },
    { type: 'SkillLevel', skill: getSkill('melvorD:Township'), level: 110 },
  ])

  // Wood
  const woodConversionList = getConversionList('melvorF:Wood')

  // Wood Box I
  setRequirements('melvorF:Wood_Box_I', woodConversionList, [
    { type: 'SkillLevel', skill: getSkill('melvorD:Woodcutting'), level: 30 },
    { type: 'SkillLevel', skill: getSkill('melvorD:Township'), level: 15 },
  ])

  // Wood Box II
  setRequirements('melvorF:Wood_Box_II', woodConversionList, [
    { type: 'SkillLevel', skill: getSkill('melvorD:Woodcutting'), level: 90 },
    { type: 'SkillLevel', skill: getSkill('melvorD:Township'), level: 75 },
  ])

  // Wood Box III
  setRequirements('melvorTotH:Wood_Box_III', woodConversionList, [
    { type: 'SkillLevel', skill: getSkill('melvorD:Woodcutting'), level: 115 },
    { type: 'SkillLevel', skill: getSkill('melvorD:Township'), level: 110 },
  ])

  // Ore
  const oreConversionList = getConversionList('melvorF:Ore')

  // Ore Box I
  setRequirements('melvorF:Ore_Box_I', oreConversionList, [
    { type: 'SkillLevel', skill: getSkill('melvorD:Mining'), level: 30 },
    { type: 'SkillLevel', skill: getSkill('melvorD:Township'), level: 15 },
  ])

  // Ore Box II
  setRequirements('melvorF:Ore_Box_II', oreConversionList, [
    { type: 'SkillLevel', skill: getSkill('melvorD:Mining'), level: 90 },
    { type: 'SkillLevel', skill: getSkill('melvorD:Township'), level: 75 },
  ])

  // Ore Box III
  setRequirements('melvorTotH:Ore_Box_III', oreConversionList, [
    { type: 'SkillLevel', skill: getSkill('melvorD:Mining'), level: 115 },
    { type: 'SkillLevel', skill: getSkill('melvorD:Township'), level: 110 },
  ])

  // Bar
  const barConversionList = getConversionList('melvorF:Bar')

  // Bar Box I
  setRequirements('melvorF:Bar_Box_I', barConversionList, [
    { type: 'SkillLevel', skill: getSkill('melvorD:Smithing'), level: 30 },
    { type: 'SkillLevel', skill: getSkill('melvorD:Township'), level: 15 },
  ])

  // Bar Box II
  setRequirements('melvorF:Bar_Box_II', barConversionList, [
    { type: 'SkillLevel', skill: getSkill('melvorD:Smithing'), level: 90 },
    { type: 'SkillLevel', skill: getSkill('melvorD:Township'), level: 75 },
  ])

  // Bar Box III
  setRequirements('melvorTotH:Bar_Box_III', barConversionList, [
    { type: 'SkillLevel', skill: getSkill('melvorD:Smithing'), level: 115 },
    { type: 'SkillLevel', skill: getSkill('melvorD:Township'), level: 110 },
  ])

  // Herb
  const herbConversionList = getConversionList('melvorF:Herbs')

  // Herb Box I
  setRequirements('melvorF:Herb_Box_I', herbConversionList, [
    { type: 'SkillLevel', skill: getSkill('melvorD:Farming'), level: 30 },
    { type: 'SkillLevel', skill: getSkill('melvorD:Township'), level: 15 },
  ])

  // Herb Box II
  setRequirements('melvorF:Herb_Box_II', herbConversionList, [
    { type: 'SkillLevel', skill: getSkill('melvorD:Farming'), level: 90 },
    { type: 'SkillLevel', skill: getSkill('melvorD:Township'), level: 75 },
  ])

  // Herb Box III
  setRequirements('melvorTotH:Herb_Box_III', herbConversionList, [
    { type: 'SkillLevel', skill: getSkill('melvorD:Farming'), level: 115 },
    { type: 'SkillLevel', skill: getSkill('melvorD:Township'), level: 110 },
  ])

  // Potion
  const potionConversionList = getConversionList('melvorF:Potions')

  // Potion Box I
  setRequirements('melvorF:Potion_Box_I', potionConversionList, [
    { type: 'SkillLevel', skill: getSkill('melvorD:Herblore'), level: 30 },
    { type: 'SkillLevel', skill: getSkill('melvorD:Township'), level: 15 },
  ])

  // Potion Box II
  setRequirements('melvorF:Potion_Box_II', potionConversionList, [
    { type: 'SkillLevel', skill: getSkill('melvorD:Herblore'), level: 90 },
    { type: 'SkillLevel', skill: getSkill('melvorD:Township'), level: 75 },
  ])

  // Potion Box III
  setRequirements('melvorTotH:Potion_Box_III', potionConversionList, [
    { type: 'SkillLevel', skill: getSkill('melvorD:Herblore'), level: 115 },
    { type: 'SkillLevel', skill: getSkill('melvorD:Township'), level: 110 },
  ])
}

function resetDropTable() {
  const itemObjs = game.items.registeredObjects

  /**
   * define DropData
   * @typedef {Object} DropData
   * @property {string} id
   * @property {number} weight
   * @property {number} quantity
   * @property {number} [minQuantity]
   */

  /**
   * @param {string} id - item id
   * @param {DropData[]} dropData - drop table data
   */
  function setDropTable(id, dropData) {
    /** @type OpenableItem */
    const openableItem = itemObjs.get(id)

    if (!openableItem) throw Error(`Not found item '${id}'`)

    const dropTable = openableItem.dropTable

    dropTable.totalWeight = dropData.reduce((p, c) => p + c.weight, 0)
    dropTable.drops.length = 0
    dropData.forEach((data) => {
      const item = itemObjs.get(data.id)

      if (!item) throw Error(`Not found '${data.id}'`)

      dropTable.drops.push({
        item,
        minQuantity: data.minQuantity || data.quantity,
        maxQuantity: data.quantity,
        weight: data.weight,
      })
    })
  }

  /**
   * Food Box I
   * @type {DropData[]}
   */
  // prettier-ignore
  const foodBoxIData = [
    { id: 'melvorD:Plain_Pizza_Slice', quantity: 20, weight: 160 },
    { id: 'melvorD:Beef', quantity: 15, weight: 109 },
    { id: 'melvorD:Shrimp', quantity: 50, weight: 94 },
    { id: 'melvorD:Bread', quantity: 30, weight: 73 },
    { id: 'melvorD:Chicken', quantity: 20, weight: 70 },
    { id: 'melvorD:Basic_Soup', quantity: 40, weight: 46 },
    { id: 'melvorD:Salmon', quantity: 80, weight: 9 },
    { id: 'melvorD:Lobster', quantity: 80, weight: 6 },
    { id: 'melvorD:Swordfish', quantity: 80, weight: 5 },
    { id: 'melvorD:Crab', quantity: 150, weight: 2 },
  ]
  setDropTable('melvorF:Food_Box_I', foodBoxIData)

  /**
   * Food Box II
   * @type {DropData[]}
   */
  // prettier-ignore
  const foodBoxIIData = [
    { id: 'melvorD:Meat_Pizza_Slice', quantity: 8, weight: 176 },
    { id: 'melvorD:Hearty_Soup', quantity: 10, weight: 56 },
    { id: 'melvorD:Cherry_Cupcake', quantity: 5, weight: 37 },
    { id: 'melvorD:Strawberry_Cupcake', quantity: 5, weight: 14 },
    { id: 'melvorD:Shark', quantity: 60, weight: 2 },
    { id: 'melvorD:Cave_Fish', quantity: 60, weight: 2 },
    { id: 'melvorD:Manta_Ray', quantity: 60, weight: 1 },
    { id: 'melvorD:Whale', quantity: 60, weight: 1 },
  ]
  setDropTable('melvorF:Food_Box_II', foodBoxIIData)

  /**
   * Food Box III
   * @type {DropData[]}
   */
  // prettier-ignore
  const foodBoxIIIData = [
    { id: 'melvorTotH:Mushroom_Soup', quantity: 8, weight: 20 },
    { id: 'melvorTotH:Banana_Bread', quantity: 10, weight: 20 },
    { id: 'melvorTotH:Sandwich', quantity: 5, weight: 11 },
    { id: 'melvorTotH:Lava_Fish', quantity: 2, weight: 11 },
    { id: 'melvorTotH:Chicken_Cream_Mushroom_Soup', quantity: 5, weight: 11 },
    { id: 'melvorTotH:Frost_Crab', quantity: 2, weight: 11 },
    { id: 'melvorTotH:Blue_Crab', quantity: 2, weight: 10 },
    { id: 'melvorTotH:Terrorfish', quantity: 2, weight: 6 },
    { id: 'melvorTotH:Static_Jellyfish', quantity: 2, weight: 5 },
    { id: 'melvorTotH:Mystic_Shark', quantity: 10, weight: 2 },
  ]
  setDropTable('melvorTotH:Food_Box_III', foodBoxIIIData)

  /**
   * Wood Box I
   * @type {DropData[]}
   */
  // prettier-ignore
  const woodBoxIData = [
    { id: 'melvorD:Normal_Logs', quantity: 80, weight: 108 },
    { id: 'melvorD:Oak_Logs', quantity: 80, weight: 41 },
    { id: 'melvorD:Willow_Logs', quantity: 80, weight: 27 },
    { id: 'melvorD:Teak_Logs', quantity: 80, weight: 13 },
  ]
  setDropTable('melvorF:Wood_Box_I', woodBoxIData)

  /**
   * Wood Box II
   * @type {DropData[]}
   */
  // prettier-ignore
  const woodBoxIIData = [
    { id: 'melvorD:Redwood_Logs', quantity: 18, weight: 37 },
    { id: 'melvorD:Mahogany_Logs', quantity: 18, weight: 24 },
    { id: 'melvorD:Yew_Logs', quantity: 18, weight: 19 },
    { id: 'melvorD:Magic_Logs', quantity: 18, weight: 7 },
  ]
  setDropTable('melvorF:Wood_Box_II', woodBoxIIData)

  /**
   * Wood Box III
   * @type {DropData[]}
   */
  // prettier-ignore
  const woodBoxIIIData = [
    { id: 'melvorTotH:Grove_Logs', quantity: 5, weight: 14 },
    { id: 'melvorTotH:Spruce_Logs', quantity: 5, weight: 12 },
    { id: 'melvorTotH:Elderwood_Logs', quantity: 5, weight: 11 },
    { id: 'melvorTotH:Revenant_Logs', quantity: 5, weight: 6 },
    { id: 'melvorTotH:Carrion_Logs', quantity: 5, weight: 4 },
  ]
  setDropTable('melvorTotH:Wood_Box_III', woodBoxIIIData)

  /**
   * Ore Box I
   * @type {DropData[]}
   */
  // prettier-ignore
  const oreBoxIData = [
    { id: 'melvorD:Copper_Ore', quantity: 150, weight: 49 },
    { id: 'melvorD:Tin_Ore', quantity: 150, weight: 49 },
    { id: 'melvorD:Iron_Ore', quantity: 150, weight: 28 },
    { id: 'melvorD:Silver_Ore', quantity: 150, weight: 11 },
  ]
  setDropTable('melvorF:Ore_Box_I', oreBoxIData)

  /**
   * Ore Box II
   * @type {DropData[]}
   */
  // prettier-ignore
  const oreBoxIIData = [
    { id: 'melvorD:Gold_Ore', quantity: 35, weight: 23 },
    { id: 'melvorD:Mithril_Ore', quantity: 35, weight: 14 },
    { id: 'melvorD:Adamantite_Ore', quantity: 35, weight: 12 },
    { id: 'melvorD:Runite_Ore', quantity: 35, weight: 11 },
    { id: 'melvorD:Dragonite_Ore', quantity: 35, weight: 9 },
  ]
  setDropTable('melvorF:Ore_Box_II', oreBoxIIData)

  /**
   * Ore Box III
   * @type {DropData[]}
   */
  // prettier-ignore
  const oreBoxIIIData = [
    { id: 'melvorTotH:Corundumite_Ore', quantity: 15, weight: 13 },
    { id: 'melvorTotH:Iridium_Ore', quantity: 15, weight: 11 },
    { id: 'melvorTotH:Palladium_Ore', quantity: 15, weight: 9 },
    { id: 'melvorTotH:Augite_Ore', quantity: 15, weight: 8 },
    { id: 'melvorTotH:Divinite_Ore', quantity: 15, weight: 6 },
  ]
  setDropTable('melvorTotH:Ore_Box_III', oreBoxIIIData)

  /**
   * Bar Box I
   * @type {DropData[]}
   */
  // prettier-ignore
  const barBoxIData = [
    { id: 'melvorD:Bronze_Bar', quantity: 100, weight: 32 },
    { id: 'melvorD:Iron_Bar', quantity: 100, weight: 21 },
    { id: 'melvorD:Steel_Bar', quantity: 100, weight: 12 },
    { id: 'melvorD:Silver_Bar', quantity: 100, weight: 9 },
  ]
  setDropTable('melvorF:Bar_Box_I', barBoxIData)

  /**
   * Bar Box II
   * @type {DropData[]}
   */
  // prettier-ignore
  const barBoxIIData = [
    { id: 'melvorD:Mithril_Bar', quantity: 45, weight: 9 },
    { id: 'melvorD:Gold_Bar', quantity: 45, weight: 8 },
    { id: 'melvorD:Adamantite_Bar', quantity: 45, weight: 7 },
    { id: 'melvorD:Runite_Bar', quantity: 45, weight: 6 },
    { id: 'melvorD:Dragonite_Bar', quantity: 45, weight: 3 },
  ]
  setDropTable('melvorF:Bar_Box_II', barBoxIIData)

  /**
   * Bar Box III
   * @type {DropData[]}
   */
  // prettier-ignore
  const barBoxIIIData = [
    { id: 'melvorTotH:Corundumite_Bar', quantity: 20, weight: 5 },
    { id: 'melvorTotH:Augite_Bar', quantity: 20, weight: 5 },
    { id: 'melvorTotH:Palladium_Bar', quantity: 20, weight: 4 },
    { id: 'melvorTotH:Iridium_Bar', quantity: 20, weight: 4 },
    { id: 'melvorTotH:Divinite_Bar', quantity: 20, weight: 3 },
  ]
  setDropTable('melvorTotH:Bar_Box_III', barBoxIIIData)

  /**
   * Herb Box I
   * @type {DropData[]}
   */
  // prettier-ignore
  const herbBoxIData = [
    { id: 'melvorD:Garum_Herb', quantity: 800, weight: 27 },
    { id: 'melvorD:Sourweed_Herb', quantity: 800, weight: 7 },
    { id: 'melvorD:Mantalyme_Herb', quantity: 800, weight: 4 },
    { id: 'melvorD:Lemontyle_Herb', quantity: 800, weight: 3 },
  ]
  setDropTable('melvorF:Herb_Box_I', herbBoxIData)

  /**
   * Herb Box II
   * @type {DropData[]}
   */
  // prettier-ignore
  const herbBoxIIData = [
    { id: 'melvorD:Oxilyme_Herb', quantity: 150, weight: 5 },
    { id: 'melvorF:Poraxx_Herb', quantity: 150, weight: 4 },
    { id: 'melvorF:Pigtayle_Herb', quantity: 150, weight: 3 },
    { id: 'melvorF:Barrentoe_Herb', quantity: 150, weight: 2 },
  ]
  setDropTable('melvorF:Herb_Box_II', herbBoxIIData)

  /**
   * Herb Box III
   * @type {DropData[]}
   */
  // prettier-ignore
  const herbBoxIIIData = [
    { id: 'melvorTotH:Snowcress_Herb', quantity: 75, weight: 3 },
    { id: 'melvorTotH:Moonwort_Herb', quantity: 75, weight: 2 },
    { id: 'melvorTotH:Bitterlyme_Herb', quantity: 75, weight: 2 },
    { id: 'melvorTotH:Wurmtayle_Herb', quantity: 75, weight: 1 },
  ]
  setDropTable('melvorTotH:Herb_Box_III', herbBoxIIIData)

  /**
   * Potion Box I
   * @type {DropData[]}
   */
  // prettier-ignore
  const potionBoxIData = [
    { id: 'melvorF:Bird_Nest_Potion_I', quantity: 1350, weight: 200 },
    { id: 'melvorF:Melee_Accuracy_Potion_I', quantity: 1350, weight: 132 },
    { id: 'melvorF:Ranged_Assistance_Potion_I', quantity: 1350, weight: 68 },
    { id: 'melvorF:Magic_Assistance_Potion_I', quantity: 1350, weight: 26 },
    { id: 'melvorF:Controlled_Heat_Potion_I', quantity: 1350, weight: 22 },
    { id: 'melvorF:Famished_Potion_I', quantity: 1350, weight: 21 },
    { id: 'melvorF:Fishermans_Potion_I', quantity: 1350, weight: 17 },
    { id: 'melvorF:Generous_Cook_Potion_I', quantity: 1350, weight: 17 },
    { id: 'melvorF:Fletching_Potion_I', quantity: 1350, weight: 16 },
  ]
  setDropTable('melvorF:Potion_Box_I', potionBoxIData)

  /**
   * Potion Box II
   * @type {DropData[]}
   */
  // prettier-ignore
  const potionBoxIIData = [
    { id: 'melvorF:Secret_Stardust_Potion_I', quantity: 422, weight: 38 },
    { id: 'melvorF:Gentle_Hands_Potion_I', quantity: 422, weight: 35 },
    { id: 'melvorF:Ranged_Strength_Potion_I', quantity: 422, weight: 22 },
    { id: 'melvorF:Melee_Strength_Potion_I', quantity: 422, weight: 21 },
    { id: 'melvorF:Magic_Damage_Potion_I', quantity: 422, weight: 20 },
    { id: 'melvorF:Elemental_Potion_I', quantity: 422, weight: 20 },
    { id: 'melvorF:Necromancer_Potion_I', quantity: 422, weight: 15 },
    { id: 'melvorF:Herblore_Potion_I', quantity: 422, weight: 10 },
    { id: 'melvorF:Damage_Reduction_Potion_I', quantity: 422, weight: 7 },
    { id: 'melvorF:Diamond_Luck_Potion_I', quantity: 422, weight: 4 },
  ]
  setDropTable('melvorF:Potion_Box_II', potionBoxIIData)

  /**
   * Potion Box III
   * @type {DropData[]}
   */
  // prettier-ignore
  const potionBoxIIIData = [
    { id: 'melvorTotH:Traps_Potion_I', quantity: 422, weight: 38 },
    { id: 'melvorTotH:Gem_Detector_Potion_I', quantity: 422, weight: 35 },
    { id: 'melvorTotH:Area_Control_Potion_I', minQuantity: 253, quantity: 422, weight: 22 },
    { id: 'melvorTotH:Slayer_Bounty_Potion_I', quantity: 422, weight: 21 },
    { id: 'melvorTotH:Holy_Bulwark_Potion_I', quantity: 422, weight: 20 },
    { id: 'melvorTotH:Enkindled_Yields_Potion_I', quantity: 422, weight: 15 },
    { id: 'melvorTotH:Alchemic_Practice_Potion_I', quantity: 422, weight: 7 },
    { id: 'melvorTotH:Penetration_Potion_I', quantity: 422, weight: 4 },
  ]
  setDropTable('melvorTotH:Potion_Box_III', potionBoxIIIData)
}
