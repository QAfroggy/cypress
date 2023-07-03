//selectors
const selectors ={
  footer: '#footer',
  copyright: '#copyright-text',
  versionText: '#version-text',
  devPrepend: '#developer-prepend',
  ruLangToggle: '#RU-lang-toggle',
  versionLabel: '#version-label',
  devLink: '#developer-link',
  footerLinks: '#footer-links',
  enLangToggle: '#EN-lang-toggle'
}

//expec
const expected ={
    copyright: '© The MAF Place',
    devLinkText: 'React Smart Development',
    devPrependText: 'Website by ',
    devCompanyLink: 'https://www.reactsmart.dev/',

}


//functions

export default {
    ...selectors,
    expected
}