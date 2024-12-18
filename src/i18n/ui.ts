export const defaultLang = 'es'

export const languageList = ['es', 'ca']

export const texts = {
  es: {
    heroTitle: '¿Y si estás enfocando mal el problema?',
    heroSubtitle: 'Gestoría contable, fiscal y laboral',
    firstText:
      '<p>Muchas veces nos enfocamos en ganar más dinero, pero es igual o más importante <b> perder menos</b>.</p><p>Y sin hablar de dinero,<br/><span class="g-color">¿Que pasa si Hacienda llama a tu puerta por no hacer las cosas bien?</span></p><br/><p>Una contabilidad mediocre, te entrega números a final de año, y nada más, una contabilidad bien gestionada es una herramienta para optimizar lo que ganas para perder menos, especialmente en un país donde los laberintos administrativos y burocráticos son cada vez más complicados.</p><p><span class="g-color">Si estabas enfocando bien el problema</span>, tus energías deben estar en ganar más, pero solamente cuando delegar la parte contable y fiscal en buenas manos.</p><p>Si esto resuena contigo, ya hay personas que tienen sus cuentas optimizadas.<br/> <b>Sigue leyendo.</b></p>',
    servicesTitle: '¿Qué hacemos exactamente?',
    servicesA: 'Facturación y pagos',
    servicesB: 'Configuración y Asesoría Tecnológica',
    servicesC: 'Conciliaciones y Registros Contables',
    servicesD: 'Presentaciones y Obligaciones Legales',
    servicesE: 'Informes y Estados Financieros',
    howWeWorkTitle: '¿Cómo trabajamos?',
    howWeWorkATitle: 'Con confianza',
    howWeWorkADescription:
      'No queremos ocultar nada, porque nos gusta pensar que empezamos a vivir en una nueva época en la que ya nadie podrá esconder sus tropelías.',
    howWeWorkBTitle: 'Con innovación',
    howWeWorkBDescription: 'La contabilidad y los papeles son cosa del pasado.',
    howWeWorkCTitle: 'Con sostenibilidad',
    howWeWorkCDescription:
      'No solamente ecológica. Queremos y podemos medir el impacto de nuestra actividad y también la de vuestro negocio si así nos lo solicitáis.',
    howWeWorkDTitle: 'Con solidaridad',
    howWeWorkDDescription:
      'Porqué creemos que los proyectos colectivos o individuales de las personas emprendedoras pueden aportar tanto a la sociedad como lo hacen los subsidios del Estado.',
    howWeWorkETitle: 'Con justicia',
    howWeWorkEDescription:
      'Internamente garantizando un trato equitativo con todos los miembros de nuestra organización y externamente procurando por mantener unos precios justos y una provechosa colaboración con nuestros clientes.',
    pricesTitle: 'Queremos empatizar con tu situación y buscar el bien común',
    pricesText:
      '<p>Nos gusta ofrecer una comunicación fluida, cercana y honesta, por eso mismo no podemos darte un precio sin conocer tu situación.</p><p>Haz click en el botón de abajo y hablaremos sobre cuestiones como:</p><p>Que pasa si eres autónomo o pyme, si tu proyecto está en perdidas, si tiene menos de un año de vida o qué servicios necesitas.</p>',
    pricesCTA: 'Concertar una cita',
    contactFormTitle: 'Formulario de contacto',
    contactFormInputName: 'Nombre y apellidos',
    contactFormInputEmail: 'Correo electrónico',
    contactFormInputPhone: 'Teléfono',
    contactFormInputMsg: 'Mensaje',
    contactFormTandC: 'Acepto la <a href="/politica-privacidad">política de privacidad y recibir un contacto con fines comerciales</a>',
    footerPrivacy: 'Política de privacidad',
    footerLegal: 'Aviso legal',
  },
  ca: {
    heroTitle: 'I si estàs enfocant malament el problema?',
    heroSubtitle: 'Gestoria comptable, fiscal i laboral',
    firstText:
      "Moltes vegades ens enfoquem a guanyar més diners, però és igual o més important perdre'n menys.\n\nI sense parlar de diners,\n\nQuè passa si tens un problema amb Hisenda per no fer les coses bé?\n\nUna comptabilitat mediocre et dona números a final d'any, i res més. Una comptabilitat ben gestionada és una eina per optimitzar el que guanyes per perdre menys, especialment en un país on els laberints administratius i burocràtics són cada cop més complicats.\n\nSi enfocaves bé el problema, les teves energies haurien d'estar a guanyar més, però només quan delegues la part comptable i fiscal en bones mans.\n\nSi això et ressona, ja hi ha persones que ho han solucionat. Segueix llegint.",
    servicesTitle: 'Què fem exactament?',
    servicesA: 'Facturació i pagaments',
    servicesB: 'Configuració i Assessorament Tecnològic',
    servicesC: 'Conciliacions i Registres Comptables',
    servicesD: 'Presentacions i Obligacions Legals',
    servicesE: 'Informes i Estats Financers',
    howWeWorkTitle: 'Com treballem?',
    howWeWorkATitle: 'Amb confiança',
    howWeWorkADescription:
      'No volem amagar res, perquè ens agrada pensar que vivim en una nova època en què ningú podrà amagar les seves malifetes.',
    howWeWorkBTitle: 'Amb innovació',
    howWeWorkBDescription: 'La comptabilitat i els papers són cosa del passat.',
    howWeWorkCTitle: 'Amb sostenibilitat',
    howWeWorkCDescription:
      "No només ecològica. Volem i podem mesurar l'impacte de la nostra activitat i també el del vostre negoci si ens ho demaneu.",
    howWeWorkDTitle: 'Amb solidaritat',
    howWeWorkDDescription:
      "Perquè creiem que els projectes col·lectius o individuals de les persones emprenedores poden aportar tant a la societat com ho fan els subsidis de l'Estat.",
    howWeWorkETitle: 'Amb justícia',
    howWeWorkEDescription:
      'Internament, garantint un tracte equitatiu amb tots els membres de la nostra organització i externament, procurant mantenir uns preus justos i una col·laboració profitosa amb els nostres clients.',
    pricesTitle: 'Volem empatitzar amb la teva situació i buscar el bé comú',
    pricesText:
      "Ens agrada oferir una comunicació fluida, propera i honesta. Per això mateix no podem donar-te un preu sense conèixer la teva situació.\n\nFes clic al botó de sota i parlarem sobre qüestions com:\nQuè passa si ets autònom o pime, si el teu projecte està en pèrdues, si té menys d'un any de vida o quins serveis necessites.",
    pricesCTA: 'Concertar una cita',
  },
}

export const useTranslations = (lang: keyof typeof languageList) => {
  return function t(key: keyof (typeof texts)[typeof defaultLang]) {
    return texts[lang][key] || texts[defaultLang][key]
  }
}
