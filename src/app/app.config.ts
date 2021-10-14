/**
 * General configuration file.
 */


/**
 * Names to identify the coins and hours in case it is not possible to obtain the values
 * from the node.
 */
export const CoinIdentifiers = {
  fullName: 'Privateness',
  coinName: 'NESS',
  HoursName: 'Coin Hours',
  HoursNameSingular: 'Coin Hour',
};

/**
 * Configuration for the QR codes.
 */
export const QrConfig = {
  /**
   * Prefix that will be added to the addresses in the QR codes, to identify what coin the address
   * is for. Corresponds to the BIP-21 specification.
   */
  prefix: 'privateness:',
};

/**
 * Configuration for the generic header. Read the customization docs for more info.
 */
export const HeaderConfig = {
  // Set to true for using the generic header, instead of the Skycoin one.
  useGenericHeader: true,
  genericHeaderUrl: 'https://privateness.network/',
};

/**
 * Configuration for the generic footer. Read the customization docs for more info.
 */
export const FooterConfig = {
  // Set to true for using the generic footer, instead of the Skycoin one.
  useGenericFooter: true,
  contactLinks: [
    {
      url: 'https://github.com/NESS-network/',
      content: '<i class="fab fa-github"></i>',
    } , {
      url: 'https://t.me/privateness/',
      content: '<i class="fab fa-telegram"></i>',
    } , {
      url: 'https://twitter.com/pivatenessN',
      content: '<i class="fab fa-twitter"></i>',
    }
  ],
};

/**
 * Laguage configuration.
 */
export const languageConfig = {
  /**
   * List of available languages. See the documentation in the assets/i18n folder and the
   * LanguageData class (inside the LanguageService file) for more information.
   */
  languages: [{
      code: 'en',
      name: 'English',
      iconName: 'en.png'
    },
    {
      code: 'es',
      name: 'Español',
      iconName: 'es.png'
    },
    {
      code: 'zh',
      name: '中文',
      iconName: 'zh.png'
    }
  ],
  /**
   * Code of the default language.
   */
  defaultLanguage: 'en'
};

/**
 * List with named addresses.
 */
export const namedAddresses = [
  {
    address: '2iNNt6fm9LszSWe51693BeyNUKX34pPaLx8',
    name: 'Binance hot wallet'
  }
];
