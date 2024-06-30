import { createI18n } from 'vue-i18n'
import zhCN from './languages/zh-CN.json'
import enUS from './languages/en.json'

const messages = {
    'zh-CN': zhCN,
    'en-US': enUS
}

export const i18n = createI18n({
    locale: 'zh-CN',
    fallbackLocale: 'en-US',
    legacy: false,
    globalInjection: true,
    messages
})
