// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {
event.recipes.create.milling(['6x mekanism:sawdust', Item.of('4x mekanism:sawdust').withChance(0.5)], '#minecraft:logs')
event.recipes.createsifterSifting([Item.of('thermal:oil_sand').withChance(0.25),Item.of('thermal:apatite').withChance(0.25),Item.of('thermal:cinnabar').withChance(0.25),Item.of('thermal:raw_silver').withChance(0.25),Item.of('thermal:raw_nickel').withChance(0.25),Item.of('thermal:sulfur').withChance(0.25),Item.of('thermal:niter').withChance(0.25)], ['thermal:slag_block','createsifter:advanced_brass_mesh'])
event.recipes.createsifterSifting([Item.of('mekanism:raw_uranium').withChance(0.25),Item.of('mekanism:raw_lead').withChance(0.25),Item.of('mekanism:raw_tin').withChance(0.25),Item.of('mekanism:raw_osmium').withChance(0.25),Item.of('mekanism:fluorite_gem').withChance(0.25)], ['mekanism:block_salt','createsifter:advanced_brass_mesh'])
})