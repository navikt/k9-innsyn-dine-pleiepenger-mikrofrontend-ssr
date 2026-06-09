import { getAnalyticsInstance } from '@navikt/nav-dekoratoren-moduler';

export const logCardClick = async (url: string) => {
    debugger;
    const logger = getAnalyticsInstance('dekoratoren');
    logger('navigere', { lenketekst: 'Dine pleiepenger', destinasjon: url });
};
