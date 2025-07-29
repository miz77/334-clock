<template>
  <div id="app-container">
    <div class="main-content">
      <!-- タイトル -->
      <div id="title">{{ t('title') }}</div>

      <!-- 時計表示 -->
      <div id="clock">{{ clock }}</div>
      <div id="clock2">
        {{ t('adjustmentPrefix') }}
        <span>{{ adjustment }}</span>
        {{ t('adjustmentSuffix') }}
      </div>

      <!-- ボタン群 -->
      <div class="button-container">
        <div class="button-row">
          <button class="button minus-large" @pointerdown.prevent="slowDown(100)">
            {{ t('minus100') }}
          </button>
          <button class="button plus-large" @pointerdown.prevent="speedUp(100)">
            {{ t('plus100') }}
          </button>
        </div>
        <div class="button-row">
          <button class="button minus" @pointerdown.prevent="slowDown(10)">
            {{ t('minus10') }}
          </button>
          <button class="button plus" @pointerdown.prevent="speedUp(10)">
            {{ t('plus10') }}
          </button>
        </div>
        <div class="button-row">
          <button class="button minus-small" @pointerdown.prevent="slowDown(1)">
            {{ t('minus1') }}
          </button>
          <button class="button plus-small" @pointerdown.prevent="speedUp(1)">
            {{ t('plus1') }}
          </button>
        </div>
      </div>
    </div>

    <!-- 言語切り替え -->
    <div class="footer">
      <button @click="switchLang('ja')" :class="{ active: locale === 'ja' }">
        {{ t('lang_ja') }}
      </button>
      <button @click="switchLang('en')" :class="{ active: locale === 'en' }">
        {{ t('lang_en') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

/* ---------- 時計ロジック ---------- */
const clock      = ref('00:00:00.000')
const adjustment = ref(0)
let frameId = 0

const updateTime = () => {
  const now = new Date(Date.now() + adjustment.value)
  const hh  = String(now.getHours()).padStart(2, '0')
  const mm  = String(now.getMinutes()).padStart(2, '0')
  const ss  = String(now.getSeconds()).padStart(2, '0')
  const ms  = String(now.getMilliseconds()).padStart(3, '0')
  clock.value = `${hh}:${mm}:${ss}.${ms}`
}
const loop      = () => {
  updateTime()
  frameId = requestAnimationFrame(loop)
}
const speedUp   = (ms: number) => { adjustment.value += ms }
const slowDown  = (ms: number) => { adjustment.value -= ms }

onMounted(() => {
  loop()
})
onBeforeUnmount(() => {
  cancelAnimationFrame(frameId)
})

/* ---------- Vue I18n の呼び出し & 言語切り替え ---------- */
const { t, locale } = useI18n()

function switchLang(lang: 'ja' | 'en') {
  locale.value = lang
  localStorage.setItem('lang', lang)
}
</script>

<style>
#app-container {
  text-align: center;
  background-color: #ffffff;
  padding: 20px;
  max-width: 500px;
  width: 100%;
}
.footer {
  margin-top: 16px;
  border-top: 1px solid #eee;
  padding-top: 8px;
}
.footer button {
  margin: 0 4px;
  padding: 4px 8px;
  border: 1px solid #ccc;
  background: none;
  cursor: pointer;
}
.footer button.active {
  background-color: #007acc;
  color: white;
  border-color: #007acc;
}
</style>