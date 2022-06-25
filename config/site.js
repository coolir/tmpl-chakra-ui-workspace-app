const siteUrl = 'https://__DOTCOM__';
const siteAddress = new URL(siteUrl);
const canonical = siteAddress.href.slice(0, -1);

module.exports = {
    company: {
        nick: '__CORPNICK__',
        name: '__CORPNAME__',
        addr: ['__CORPADDR1__', '__CORPADDR2__'],
        legalCounty: '__CORPCITY__',
        legalState: '__CORPSTATE__'
    },
    site: {
        siteUrl,
        www: `www.${siteAddress.host}`,
        host: siteAddress.host
    },
    emails: {
        hello: 'hello@__DOTCOM__',
        support: 'support@__DOTCOM__',
        abuse: 'abuse@__DOTCOM__',
        privacy: 'privacy@__DOTCOM__',
        legal: 'legal@__DOTCOM__',
        copyright: 'copyright@__DOTCOM__',
        aritrationOptOut: 'arbitration-opt-out@__DOTCOM__'
    }
};