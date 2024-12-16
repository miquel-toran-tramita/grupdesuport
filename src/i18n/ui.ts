export const defaultLang = 'es'

export const languageList = ['es', 'ca']

export const texts = {
  es: {
    pageTitle: 'La contabilidad ligera',
  },
  ca: {
    pageTitle: 'La contabilitat lleugera',
  },
}

export const useTranslations = (lang: keyof typeof languageList) => {
  return function t(key: keyof (typeof texts)[typeof defaultLang]) {
    return texts[lang][key] || texts[defaultLang][key]
  }
}
