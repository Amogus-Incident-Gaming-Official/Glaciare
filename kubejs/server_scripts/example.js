// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {
event.recipes.createsifterSifting([Item.of('mekanism:raw_uranium').withChance(0.25),Item.of('mekanism:raw_lead').withChance(0.25),Item.of('mekanism:raw_tin').withChance(0.25),Item.of('mekanism:raw_osmium').withChance(0.25),Item.of('mekanism:fluorite_gem').withChance(0.25)], ['mekanism:block_salt','createsifter:advanced_brass_mesh'])
})