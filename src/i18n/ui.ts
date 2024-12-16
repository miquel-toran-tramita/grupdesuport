export const defaultLang = 'es'

export const languageList = ['es', 'ca']

export const texts = {
  es: {
    pageTitle: 'Si no quieres contar, cuenta con nostros',
    pageSubtitle: 'Gestoría contable, fiscal y laboral',
  },
  ca: {
    pageTitle: 'La contabilitat lleugera',
    pageSubtitle: '',
  },
}

export const useTranslations = (lang: keyof typeof languageList) => {
  return function t(key: keyof (typeof texts)[typeof defaultLang]) {
    return texts[lang][key] || texts[defaultLang][key]
  }
}
