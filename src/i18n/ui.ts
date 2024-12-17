export const defaultLang = 'es'

export const languageList = ['es', 'ca']

export const texts = {
  es: {
    hero: {
      title: `¿Y si estás enfocando mal el problema?`,
      subtitle: `Gestoría contable, fiscal y laboral`,
    },
    firstText: `
      Muchas veces nos enfocamos en ganar más dinero, pero es igual o más importante perder menos.

      Y sin hablar de dinero,

      ¿Que pasa si tienes un problema con Hacienda por no hacer las cosas bien?


      Una contabilidad mediocre, te entrega números a final de año, y nada más, una contabilidad bien gestionada es una herramienta para optimizar lo que ganas para perder menos, especialmente en un país donde los laberintos administrativos y burocráticos son cada vez más complicados.

      Si estabas enfocando bien el problema, tus energías deben estar en ganar más, pero solamente cuando delegar la parte contable y fiscal en buenas manos.

      Si este resuena contigo, ya hay personas que los han solucionado. Sigue leyendo.
    `,
    services: {
      title: `¿Qué hacemos exactamente?`,
      a: `Facturación y pagos`,
      b: `Configuración y Asesoría Tecnológica`,
      c: `Conciliaciones y Registros Contables`,
      d: `Presentaciones y Obligaciones Legales`,
      e: `Informes y Estados Financieros`,
    },
    howWeWork: {
      title: `¿Cómo trabajamos?`,
      a: {
        title: `Con confianza`,
        description: `No queremos ocultar nada, porque nos gusta pensar que empezamos a vivir en una nueva época en la que ya nadie podrá esconder sus tropelías.`,
      },
      b: {
        title: `Con innovación`,
        description: `La contabilidad y los papeles son cosa del pasado.`,
      },
      c: {
        title: `Con sostenibilidad`,
        description: `No solamente ecológica. Queremos y podemos medir el impacto de nuestra actividad y también la de vuestro negocio si así nos lo solicitáis.`,
      },
      d: {
        title: `Con solidaridad`,
        description: `Porqué creemos que los proyectos colectivos o individuales de las personas emprendedoras pueden aportar tanto a la sociedad como lo hacen los subsidios del Estado.`,
      },
      e: {
        title: `Con justicia`,
        description: `Internamente garantizando un trato equitativo con todos los miembros de nuestra organización y externamente procurando por mantener unos precios justos y una provechosa colaboración con nuestros clientes.`,
      },
    },
    prices: {
      title: `Queremos empatizar con tu situación y buscar el bien común`,
      text: `
        Nos gusta ofrecer una comunicación fluida, cercana y honesta, por eso mismo no podemos darte un precio sin conocer tu situación.

        Haz click en el botón de abajo y hablaremos sobre cuestiones como:
        Que pasa si eres autónomo o pyme, si tu proyecto está en perdidas, si tiene menos de un año de vida o qué servicios necesitas.
      `,
      cta: `Concertar una cita`,
    },
  },
  ca: {
    hero: {
      title: `I si estàs enfocant malament el problema?`,
      subtitle: `Gestoria comptable, fiscal i laboral`,
    },
    firstText: `
      Moltes vegades ens enfoquem a guanyar més diners, però és igual o més important perdre'n menys.
  
      I sense parlar de diners,
  
      Què passa si tens un problema amb Hisenda per no fer les coses bé?
  
      Una comptabilitat mediocre et dona números a final d'any, i res més. Una comptabilitat ben gestionada és una eina per optimitzar el que guanyes per perdre menys, especialment en un país on els laberints administratius i burocràtics són cada cop més complicats.
  
      Si enfocaves bé el problema, les teves energies haurien d'estar a guanyar més, però només quan delegues la part comptable i fiscal en bones mans.
  
      Si això et ressona, ja hi ha persones que ho han solucionat. Segueix llegint.
    `,
    services: {
      title: `Què fem exactament?`,
      a: `Facturació i pagaments`,
      b: `Configuració i Assessorament Tecnològic`,
      c: `Conciliacions i Registres Comptables`,
      d: `Presentacions i Obligacions Legals`,
      e: `Informes i Estats Financers`,
    },
    howWeWork: {
      title: `Com treballem?`,
      a: {
        title: `Amb confiança`,
        description: `No volem amagar res, perquè ens agrada pensar que vivim en una nova època en què ningú podrà amagar les seves malifetes.`,
      },
      b: {
        title: `Amb innovació`,
        description: `La comptabilitat i els papers són cosa del passat.`,
      },
      c: {
        title: `Amb sostenibilitat`,
        description: `No només ecològica. Volem i podem mesurar l'impacte de la nostra activitat i també el del vostre negoci si ens ho demaneu.`,
      },
      d: {
        title: `Amb solidaritat`,
        description: `Perquè creiem que els projectes col·lectius o individuals de les persones emprenedores poden aportar tant a la societat com ho fan els subsidis de l'Estat.`,
      },
      e: {
        title: `Amb justícia`,
        description: `Internament, garantint un tracte equitatiu amb tots els membres de la nostra organització i externament, procurant mantenir uns preus justos i una col·laboració profitosa amb els nostres clients.`,
      },
    },
    prices: {
      title: `Volem empatitzar amb la teva situació i buscar el bé comú`,
      text: `
        Ens agrada oferir una comunicació fluida, propera i honesta. Per això mateix no podem donar-te un preu sense conèixer la teva situació.
  
        Fes clic al botó de sota i parlarem sobre qüestions com:
        Què passa si ets autònom o pime, si el teu projecte està en pèrdues, si té menys d'un any de vida o quins serveis necessites.
      `,
      cta: `Concertar una cita`,
    },
  },
}

export const useTranslations = (lang: keyof typeof languageList) => {
  return function t(key: keyof (typeof texts)[typeof defaultLang]) {
    return texts[lang][key] || texts[defaultLang][key]
  }
}
