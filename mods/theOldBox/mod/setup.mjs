export function setup({ onCharacterLoaded }) {
  onCharacterLoaded(() => {
    console.log('Initializing Mod - The Old Box')

    resetDropTable()
    resetConversionRequirements()
  })
}

function resetConversionRequirements() {
  function setRequirements(id, conversionList, requirementsData) {
    const conversionItem = conversionList.find((item) => item.item.id === id)

    if (!conversionItem) throw Error(`Not found conversion item '${id}'`)

    conversionItem.unlockRequirements.length = 0
    requirementsData.forEach((data) => conversionItem.unlockRequirements.push(data))
  }

  function getConversionList(id) {
    const conversionList = game.township.getResourceItemConversionsFromTownship(
      game.township.resources.registeredObjects.get(id)
    )

    if (!conversionList) throw Error(`Not found conversions '${id}'`)

    return conversionList
  }

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

  function setDropTable(id, dropData) {
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

  // Food Box I
  // prettier-ignore
  const foodBoxIData = [
    { name: 'Plain_Pizza_Slice', id: 'melvorD:Plain_Pizza_Slice', quantity: 20, weight: 160 },
    { name: 'Beef', id: 'melvorD:Beef', quantity: 15, weight: 109 },
    { name: 'Shrimp', id: 'melvorD:Shrimp', quantity: 50, weight: 94 },
    { name: 'Bread', id: 'melvorD:Bread', quantity: 30, weight: 73 },
    { name: 'Chicken', id: 'melvorD:Chicken', quantity: 20, weight: 70 },
    { name: 'Basic_Soup', id: 'melvorD:Basic_Soup', quantity: 40, weight: 46 },
    { name: 'Salmon', id: 'melvorD:Salmon', quantity: 80, weight: 9 },
    { name: 'Lobster', id: 'melvorD:Lobster', quantity: 80, weight: 6 },
    { name: 'Swordfish', id: 'melvorD:Swordfish', quantity: 80, weight: 5 },
    { name: 'Crab', id: 'melvorD:Crab', quantity: 150, weight: 2 },
  ]
  setDropTable('melvorF:Food_Box_I', foodBoxIData)

  // Food Box II
  // prettier-ignore
  const foodBoxIIData = [
    { name: 'Meat_Pizza_Slice', id: 'melvorD:Meat_Pizza_Slice', quantity: 8, weight: 176 },
    { name: 'Hearty_Soup', id: 'melvorD:Hearty_Soup', quantity: 10, weight: 56 },
    { name: 'Cherry_Cupcake', id: 'melvorD:Cherry_Cupcake', quantity: 5, weight: 37 },
    { name: 'Strawberry_Cupcake', id: 'melvorD:Strawberry_Cupcake', quantity: 5, weight: 14 },
    { name: 'Shark', id: 'melvorD:Shark', quantity: 60, weight: 2 },
    { name: 'Cave_Fish', id: 'melvorD:Cave_Fish', quantity: 60, weight: 2 },
    { name: 'Manta_Ray', id: 'melvorD:Manta_Ray', quantity: 60, weight: 1 },
    { name: 'Whale', id: 'melvorD:Whale', quantity: 60, weight: 1 },
  ]
  setDropTable('melvorF:Food_Box_II', foodBoxIIData)

  // Food Box III
  // prettier-ignore
  const foodBoxIIIData = [
    { name: 'Mushroom_Soup', id: 'melvorTotH:Mushroom_Soup', quantity: 8, weight: 20 },
    { name: 'Banana_Bread', id: 'melvorTotH:Banana_Bread', quantity: 10, weight: 20 },
    { name: 'Sandwich', id: 'melvorTotH:Sandwich', quantity: 5, weight: 11 },
    { name: 'Lava_Fish', id: 'melvorTotH:Lava_Fish', quantity: 2, weight: 11 },
    { name: 'Chicken_Cream_Mushroom_Soup', id: 'melvorTotH:Chicken_Cream_Mushroom_Soup', quantity: 5, weight: 11 },
    { name: 'Frost_Crab', id: 'melvorTotH:Frost_Crab', quantity: 2, weight: 11 },
    { name: 'Blue_Crab', id: 'melvorTotH:Blue_Crab', quantity: 2, weight: 10 },
    { name: 'Terrorfish', id: 'melvorTotH:Terrorfish', quantity: 2, weight: 6 },
    { name: 'Static_Jellyfish', id: 'melvorTotH:Static_Jellyfish', quantity: 2, weight: 5 },
    { name: 'Mystic_Shark', id: 'melvorTotH:Mystic_Shark', quantity: 10, weight: 2 },
  ]
  setDropTable('melvorTotH:Food_Box_III', foodBoxIIIData)

  // Wood Box I
  // prettier-ignore
  const woodBoxIData = [
    { name: 'Normal_Logs', id: 'melvorD:Normal_Logs', quantity: 80, weight: 108 },
    { name: 'Oak_Logs', id: 'melvorD:Oak_Logs', quantity: 80, weight: 41 },
    { name: 'Willow_Logs', id: 'melvorD:Willow_Logs', quantity: 80, weight: 27 },
    { name: 'Teak_Logs', id: 'melvorD:Teak_Logs', quantity: 80, weight: 13 },
  ]
  setDropTable('melvorF:Wood_Box_I', woodBoxIData)

  // Wood Box II
  // prettier-ignore
  const woodBoxIIData = [
    { name: 'Redwood_Logs', id: 'melvorD:Redwood_Logs', quantity: 18, weight: 37 },
    { name: 'Mahogany_Logs', id: 'melvorD:Mahogany_Logs', quantity: 18, weight: 24 },
    { name: 'Yew_Logs', id: 'melvorD:Yew_Logs', quantity: 18, weight: 19 },
    { name: 'Magic_Logs', id: 'melvorD:Magic_Logs', quantity: 18, weight: 7 },
  ]
  setDropTable('melvorF:Wood_Box_II', woodBoxIIData)

  // Wood Box III
  // prettier-ignore
  const woodBoxIIIData = [
    { name: 'Grove_Logs', id: 'melvorTotH:Grove_Logs', quantity: 5, weight: 14 },
    { name: 'Spruce_Logs', id: 'melvorTotH:Spruce_Logs', quantity: 5, weight: 12 },
    { name: 'Elderwood_Logs', id: 'melvorTotH:Elderwood_Logs', quantity: 5, weight: 11 },
    { name: 'Revenant_Logs', id: 'melvorTotH:Revenant_Logs', quantity: 5, weight: 6 },
    { name: 'Carrion_Logs', id: 'melvorTotH:Carrion_Logs', quantity: 5, weight: 4 },
  ]
  setDropTable('melvorTotH:Wood_Box_III', woodBoxIIIData)

  // Ore Box I
  // prettier-ignore
  const oreBoxIData = [
    { name: 'Copper_Ore', id: 'melvorD:Copper_Ore', quantity: 150, weight: 49 },
    { name: 'Tin_Ore', id: 'melvorD:Tin_Ore', quantity: 150, weight: 49 },
    { name: 'Iron_Ore', id: 'melvorD:Iron_Ore', quantity: 150, weight: 28 },
    { name: 'Silver_Ore', id: 'melvorD:Silver_Ore', quantity: 150, weight: 11 },
  ]
  setDropTable('melvorF:Ore_Box_I', oreBoxIData)

  // Ore Box II
  // prettier-ignore
  const oreBoxIIData = [
    { name: 'Gold_Ore', id: 'melvorD:Gold_Ore', quantity: 35, weight: 23 },
    { name: 'Mithril_Ore', id: 'melvorD:Mithril_Ore', quantity: 35, weight: 14 },
    { name: 'Adamantite_Ore', id: 'melvorD:Adamantite_Ore', quantity: 35, weight: 12 },
    { name: 'Runite_Ore', id: 'melvorD:Runite_Ore', quantity: 35, weight: 11 },
    { name: 'Dragonite_Ore', id: 'melvorD:Dragonite_Ore', quantity: 35, weight: 9 },
  ]
  setDropTable('melvorF:Ore_Box_II', oreBoxIIData)

  // Ore Box III
  // prettier-ignore
  const oreBoxIIIData = [
    { name: 'Corundumite_Ore', id: 'melvorTotH:Corundumite_Ore', quantity: 15, weight: 13 },
    { name: 'Iridium_Ore', id: 'melvorTotH:Iridium_Ore', quantity: 15, weight: 11 },
    { name: 'Palladium_Ore', id: 'melvorTotH:Palladium_Ore', quantity: 15, weight: 9 },
    { name: 'Augite_Ore', id: 'melvorTotH:Augite_Ore', quantity: 15, weight: 8 },
    { name: 'Divinite_Ore', id: 'melvorTotH:Divinite_Ore', quantity: 15, weight: 6 },
  ]
  setDropTable('melvorTotH:Ore_Box_III', oreBoxIIIData)

  // Bar Box I
  // prettier-ignore
  const barBoxIData = [
    { name: 'Bronze_Bar', id: 'melvorD:Bronze_Bar', quantity: 100, weight: 32 },
    { name: 'Iron_Bar', id: 'melvorD:Iron_Bar', quantity: 100, weight: 21 },
    { name: 'Steel_Bar', id: 'melvorD:Steel_Bar', quantity: 100, weight: 12 },
    { name: 'Silver_Bar', id: 'melvorD:Silver_Bar', quantity: 100, weight: 9 },
  ]
  setDropTable('melvorF:Bar_Box_I', barBoxIData)

  // Bar Box II
  // prettier-ignore
  const barBoxIIData = [
    { name: 'Mithril_Bar', id: 'melvorD:Mithril_Bar', quantity: 45, weight: 9 },
    { name: 'Gold_Bar', id: 'melvorD:Gold_Bar', quantity: 45, weight: 8 },
    { name: 'Adamantite_Bar', id: 'melvorD:Adamantite_Bar', quantity: 45, weight: 7 },
    { name: 'Runite_Bar', id: 'melvorD:Runite_Bar', quantity: 45, weight: 6 },
    { name: 'Dragonite_Bar', id: 'melvorD:Dragonite_Bar', quantity: 45, weight: 3 },
  ]
  setDropTable('melvorF:Bar_Box_II', barBoxIIData)

  // Bar Box III
  // prettier-ignore
  const barBoxIIIData = [
    { name: 'Corundumite_Bar', id: 'melvorTotH:Corundumite_Bar', quantity: 20, weight: 5 },
    { name: 'Augite_Bar', id: 'melvorTotH:Augite_Bar', quantity: 20, weight: 5 },
    { name: 'Palladium_Bar', id: 'melvorTotH:Palladium_Bar', quantity: 20, weight: 4 },
    { name: 'Iridium_Bar', id: 'melvorTotH:Iridium_Bar', quantity: 20, weight: 4 },
    { name: 'Divinite_Bar', id: 'melvorTotH:Divinite_Bar', quantity: 20, weight: 3 },
  ]
  setDropTable('melvorTotH:Bar_Box_III', barBoxIIIData)

  // Herb Box I
  // prettier-ignore
  const herbBoxIData = [
    { name: 'Garum_Herb', id: 'melvorD:Garum_Herb', quantity: 800, weight: 27 },
    { name: 'Sourweed_Herb', id: 'melvorD:Sourweed_Herb', quantity: 800, weight: 7 },
    { name: 'Mantalyme_Herb', id: 'melvorD:Mantalyme_Herb', quantity: 800, weight: 4 },
    { name: 'Lemontyle_Herb', id: 'melvorD:Lemontyle_Herb', quantity: 800, weight: 3 },
  ]
  setDropTable('melvorF:Herb_Box_I', herbBoxIData)

  // Herb Box II
  // prettier-ignore
  const herbBoxIIData = [
    { name: 'Oxilyme_Herb', id: 'melvorD:Oxilyme_Herb', quantity: 150, weight: 5 },
    { name: 'Poraxx_Herb', id: 'melvorF:Poraxx_Herb', quantity: 150, weight: 4 },
    { name: 'Pigtayle_Herb', id: 'melvorF:Pigtayle_Herb', quantity: 150, weight: 3 },
    { name: 'Barrentoe_Herb', id: 'melvorF:Barrentoe_Herb', quantity: 150, weight: 2 },
  ]
  setDropTable('melvorF:Herb_Box_II', herbBoxIIData)

  // Herb Box III
  // prettier-ignore
  const herbBoxIIIData = [
    { name: 'Snowcress_Herb', id: 'melvorTotH:Snowcress_Herb', quantity: 75, weight: 3 },
    { name: 'Moonwort_Herb', id: 'melvorTotH:Moonwort_Herb', quantity: 75, weight: 2 },
    { name: 'Bitterlyme_Herb', id: 'melvorTotH:Bitterlyme_Herb', quantity: 75, weight: 2 },
    { name: 'Wurmtayle_Herb', id: 'melvorTotH:Wurmtayle_Herb', quantity: 75, weight: 1 },
  ]
  setDropTable('melvorTotH:Herb_Box_III', herbBoxIIIData)

  // Potion Box I
  // prettier-ignore
  const potionBoxIData = [
    { name: 'Bird_Nest_Potion_I', id: 'melvorF:Bird_Nest_Potion_I', quantity: 1350, weight: 200 },
    { name: 'Melee_Accuracy_Potion_I', id: 'melvorF:Melee_Accuracy_Potion_I', quantity: 1350, weight: 132 },
    { name: 'Ranged_Assistance_Potion_I', id: 'melvorF:Ranged_Assistance_Potion_I', quantity: 1350, weight: 68 },
    { name: 'Magic_Assistance_Potion_I', id: 'melvorF:Magic_Assistance_Potion_I', quantity: 1350, weight: 26 },
    { name: 'Controlled_Heat_Potion_I', id: 'melvorF:Controlled_Heat_Potion_I', quantity: 1350, weight: 22 },
    { name: 'Famished_Potion_I', id: 'melvorF:Famished_Potion_I', quantity: 1350, weight: 21 },
    { name: 'Fishermans_Potion_I', id: 'melvorF:Fishermans_Potion_I', quantity: 1350, weight: 17 },
    { name: 'Generous_Cook_Potion_I', id: 'melvorF:Generous_Cook_Potion_I', quantity: 1350, weight: 17 },
    { name: 'Fletching_Potion_I', id: 'melvorF:Fletching_Potion_I', quantity: 1350, weight: 16 },
  ]
  setDropTable('melvorF:Potion_Box_I', potionBoxIData)

  // Potion Box II
  // prettier-ignore
  const potionBoxIIData = [
    { name: 'Secret_Stardust_Potion_I', id: 'melvorF:Secret_Stardust_Potion_I', quantity: 422, weight: 38 },
    { name: 'Gentle_Hands_Potion_I', id: 'melvorF:Gentle_Hands_Potion_I', quantity: 422, weight: 35 },
    { name: 'Ranged_Strength_Potion_I', id: 'melvorF:Ranged_Strength_Potion_I', quantity: 422, weight: 22 },
    { name: 'Melee_Strength_Potion_I', id: 'melvorF:Melee_Strength_Potion_I', quantity: 422, weight: 21 },
    { name: 'Magic_Damage_Potion_I', id: 'melvorF:Magic_Damage_Potion_I', quantity: 422, weight: 20 },
    { name: 'Elemental_Potion_I', id: 'melvorF:Elemental_Potion_I', quantity: 422, weight: 20 },
    { name: 'Necromancer_Potion_I', id: 'melvorF:Necromancer_Potion_I', quantity: 422, weight: 15 },
    { name: 'Herblore_Potion_I', id: 'melvorF:Herblore_Potion_I', quantity: 422, weight: 10 },
    { name: 'Damage_Reduction_Potion_I', id: 'melvorF:Damage_Reduction_Potion_I', quantity: 422, weight: 7 },
    { name: 'Diamond_Luck_Potion_I', id: 'melvorF:Diamond_Luck_Potion_I', quantity: 422, weight: 4 },
  ]
  setDropTable('melvorF:Potion_Box_II', potionBoxIIData)

  // Potion Box III
  // prettier-ignore
  const potionBoxIIIData = [
    { name: 'Traps_Potion_I', id: 'melvorTotH:Traps_Potion_I', quantity: 422, weight: 38 },
    { name: 'Gem_Detector_Potion_I', id: 'melvorTotH:Gem_Detector_Potion_I', quantity: 422, weight: 35 },
    { name: 'Area_Control_Potion_I', id: 'melvorTotH:Area_Control_Potion_I', minQuantity: 253, quantity: 422, weight: 22 },
    { name: 'Slayer_Bounty_Potion_I', id: 'melvorTotH:Slayer_Bounty_Potion_I', quantity: 422, weight: 21 },
    { name: 'Holy_Bulwark_Potion_I', id: 'melvorTotH:Holy_Bulwark_Potion_I', quantity: 422, weight: 20 },
    { name: 'Enkindled_Yields_Potion_I', id: 'melvorTotH:Enkindled_Yields_Potion_I', quantity: 422, weight: 15 },
    { name: 'Alchemic_Practice_Potion_I', id: 'melvorTotH:Alchemic_Practice_Potion_I', quantity: 422, weight: 7 },
    { name: 'Penetration_Potion_I', id: 'melvorTotH:Penetration_Potion_I', quantity: 422, weight: 4 },
  ]
  setDropTable('melvorTotH:Potion_Box_III', potionBoxIIIData)
}
