const MOD_NAME = 'avoidDeathCounter'
const MOD_DISPLAY_NAME = 'Avoid Death Counter'
const STORAGE_CONFIG = 'config'
const STORAGE_RECORD = 'record'

export function setup(ctx) {
  console.log(`Initializing Mod - ${MOD_DISPLAY_NAME}`, ctx)

  let config = {
    enable: true,
  }
  let record = {
    savedCount: 0,
    totalHitCount: 0,
  }

  let $savedCount = null
  let $totalHitCount = null
  let $savedPercent = null

  let willDie = false

  function updateDisplay() {
    $savedCount?.text(record.savedCount)
    $totalHitCount?.text(record.totalHitCount)
    $savedPercent?.text(
      record.totalHitCount > 0 ? ((record.savedCount / record.totalHitCount) * 100).toFixed(4) : 0
    )
  }

  function handleBeforeDamage(amount, source, thieving) {
    if (!isModEnable(config)) return

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

    // increase total hit count
    record.totalHitCount++
  }

  function handleAfterDamage() {
    if (!isModEnable(config)) return

    // TODO debug
    console.log(record, willDie, game.combat.isActive)

    // increase saved count
    if (willDie && !isPlayerDeath()) {
      record.savedCount++

      // notify
      game.notifications.createInfoNotification(
        MOD_NAME,
        `Auto Eat save you ${record.savedCount} times`,
        '',
        0
      )
    }

    willDie = false

    updateDisplay()

    saveStorage(ctx, STORAGE_RECORD, record)
  }

  // Because "SEMI Auto Eat" patches the "damage before hooks" when calling the setup function,
  // and this mod needs to patch "damage before hooks" in order to work correctly,
  // the patch is not within any lifecycle.
  ctx.patch(Player, 'damage').before(handleBeforeDamage)
  ctx.patch(Player, 'damage').after(handleAfterDamage)

  ctx.onCharacterLoaded((ctx) => {
    loadStorage(ctx, STORAGE_CONFIG, config)
    loadStorage(ctx, STORAGE_RECORD, record)
  })

  ctx.onInterfaceReady(() => {
    if (!isModEnable(config)) return

    $('#combat-container #combat-fight-container-player .block-content.pt-0:first .block:first')
      .after(`
<div class="block block-rounded-double bg-combat-inner-dark text-center p-2">
  <div class="row no-gutters">
    <div class="col-12">
      <span class="font-w400 text-warning text-center m-1 mb-2">
        <small>
          <span>You have avoided death <span class="adc-saved-count"></span> times</span>
        </small>
      </span>
    </div>
    <div class="col-12">
      <span class="font-w400 text-warning text-center m-1 mb-2">
        <small>
          <span>
            <span class="adc-saved-count"></span>/<span class="adc-hit-count"></span>,
            <span class="adc-saved-percent"></span>%
          </span>
        </small>
      </span>
    </div>
  </div>
</div>`)

    $savedCount = $('.adc-saved-count')
    $totalHitCount = $('.adc-hit-count')
    $savedPercent = $('.adc-saved-percent')

    updateDisplay()
  })
}

function loadStorage(ctx, name, data) {
  Object.assign(data, ctx.characterStorage.getItem(name))
}

function saveStorage(ctx, name, data) {
  ctx.characterStorage.setItem(name, data)
}

function isModEnable(config) {
  return config.enable
}

function isPlayerDeath() {
  return game.combat.player.hitpoints <= 0
}
