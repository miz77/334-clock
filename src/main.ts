import { createApp } from 'vue'
import { createI18n }  from 'vue-i18n'
import './style.css'
import App from './App.vue'
import ja              from './locales/ja.json'
import en              from './locales/en.json'

const savedLang = localStorage.getItem('lang') as 'ja'|'en' || 'ja'

const i18n = createI18n({
  legacy: false,          // Composition API 方式を使う
  locale: savedLang,      // 初期ロケール
  fallbackLocale: 'ja',
  messages: { ja, en }
})


createApp(App)
  .use(i18n)
  .mount('#app')
