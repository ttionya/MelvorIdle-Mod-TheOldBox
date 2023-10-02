export function setup(ctx) {
  const id = 'avoidDeathCounter'

  // onCharacterLoaded((ctx) => {
  console.log('Initializing Mod - Avoid Death Counter', ctx)

  let record = {
    rescueCount: 0,
    hitCount: 0,
  }

  let willDie = false

  function handleBeforeAttack(amount, source, thieving) {
    // ignore thieving now
    if (thieving) return

    const player = game.combat.player

    if (source === 'Burn' && game.combat.enemy.target.modifiers.increasedMaxHPBurnDamage > 1) {
      amount += Math.floor(
        player.stats.maxHitpoints * (player.target.modifiers.increasedMaxHPBurnDamage / 100)
      )
    }

    // TODO debug
    console.log(player.hitpoints, amount)

    // 死亡フラグ
    if (player.hitpoints <= amount) {
      willDie = true
    }

    // increase hit count
    record.hitCount++
  }

  function handleAfterAttack() {
    // TODO debug
    console.log(record, willDie, game.combat.isActive)

    // increase rescue count
    if (willDie && game.combat.isActive) {
      record.rescueCount++

      // notify
      game.notifications.createInfoNotification(
        id,
        `Auto Eat rescue you ${record.rescueCount} times`,
        '',
        0
      )
    }

    willDie = false
  }

  ctx.patch(Player, 'damage').before(handleBeforeAttack)
  ctx.patch(Player, 'damage').after(handleAfterAttack)
  // })
}
