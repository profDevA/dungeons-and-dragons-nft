const DungeonsAndDragons = artifacts.require('DungeonsAndDragonsCharacter')

module.exports = async callback => {
  const dnd = await DungeonsAndDragons.deployed()
  console.log('Creating request on contract:', dnd.address)
  const tx = await dnd.requestNewRandomCharacter(123, "Garfield the Chainlink Warrior")
  callback(tx.tx)
}
