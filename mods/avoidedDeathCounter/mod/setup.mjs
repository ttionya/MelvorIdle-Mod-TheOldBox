const MOD_NAME = 'avoidDeathCounter'
const MOD_DISPLAY_NAME = 'Avoid Death Counter'

const SETTINGS = {
  SECTION_GENERAL: 'General',
  NAME_ENABLE: {
    type: 'switch',
    name: 'enable',
    label: 'Enable',
    default: true,
  },
}

export function setup(ctx) {
  console.log(`Initializing Mod - ${MOD_DISPLAY_NAME}`, ctx)

  const utils = new UtilsWithContext(ctx, game)

  let record = {
    savedCount: 0,
    totalHitCount: 0,
  }

  let $savedCount = null
  let $totalHitCount = null
  let $savedPercent = null

  function updateDisplay() {
    $savedCount?.text(record.savedCount)
    $totalHitCount?.text(record.totalHitCount)
    $savedPercent?.text(calcPercent(record.savedCount, record.totalHitCount))
  }

  // setup settings
  ;(function () {
    const sectionGeneral = ctx.settings.section(SETTINGS.SECTION_GENERAL)

    sectionGeneral.add({ ...SETTINGS.NAME_ENABLE })
  })()

  // setup damage hooks
  ;(function () {
    let willDie = false

    function handleBeforeDamage(amount, source, thieving) {
      if (!utils.isModEnable()) return

      // ignore thieving now
      if (thieving) return

      const player = game.combat.player

      if (source === 'Burn' && game.combat.enemy.target.modifiers.increasedMaxHPBurnDamage > 1) {
        amount += Math.floor(
          player.stats.maxHitpoints * (player.target.modifiers.increasedMaxHPBurnDamage / 100)
        )
      }

      // 死亡フラグ
      if (player.hitpoints <= amount) {
        willDie = true
      }

      // increase total hit count
      record.totalHitCount++
    }

    function handleAfterDamage() {
      if (!utils.isModEnable()) return

      // TODO debug
      console.log(record, willDie, utils.isPlayerDeath())

      // increase saved count
      if (willDie && !utils.isPlayerDeath()) {
        record.savedCount++

        // notify
        game.notifications.createInfoNotification(
          MOD_NAME,
          `Someone save you ${record.savedCount} times`,
          '',
          0
        )
      }

      willDie = false

      updateDisplay()

      utils.saveRecord(record)
    }

    // Because "SEMI Auto Eat" patches the "damage before hooks" when calling the setup function,
    // and this mod needs to patch "damage before hooks" in order to work correctly,
    // the patch is not within any lifecycle.
    ctx.patch(Player, 'damage').before(handleBeforeDamage)
    ctx.patch(Player, 'damage').after(handleAfterDamage)
  })()

  ctx.onCharacterLoaded(() => {
    utils.loadRecord(record)
  })

  ctx.onInterfaceReady(() => {
    if (!utils.isModEnable()) return

    $('#combat-container #combat-fight-container-player .block-content.pt-0:first .block:first')
      .after(`
<div class="block block-rounded-double bg-combat-inner-dark text-center p-2">
  <div class="row no-gutters">
    <div class="col-12">
      <span class="font-w400 text-warning text-center m-1 mb-2">
        <small>You have avoided death <span class="adc-saved-count"></span> times.</small>
      </span>
    </div>
    <div class="col-12">
      <span class="font-w400 text-warning text-center m-1 mb-2">
        <small>
          (
          <span class="adc-saved-count"></span>/<span class="adc-hit-count"></span>,
          <span class="adc-saved-percent"></span>
          )
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

class UtilsWithContext {
  STORAGE_RECORD = 'record'

  constructor(ctx, game) {
    this.context = ctx
    this.game = game
  }

  isModEnable() {
    return (
      this.context.settings
        .section(SETTINGS.SECTION_GENERAL)
        .get(SETTINGS.NAME_ENABLE.name, SETTINGS.NAME_ENABLE.default) === true
    )
  }

  isPlayerDeath() {
    return this.game.combat.player.hitpoints <= 0
  }

  loadRecord(data) {
    Object.assign(data, this.context.characterStorage.getItem(this.STORAGE_RECORD))
  }

  saveRecord(data) {
    this.context.characterStorage.setItem(this.STORAGE_RECORD, data)
  }
}

function calcPercent(numerator, denominator, decimal = 4) {
  return (numerator || denominator ? '0' : ((numerator / denominator) * 100).toFixed(decimal)) + '%'
}
