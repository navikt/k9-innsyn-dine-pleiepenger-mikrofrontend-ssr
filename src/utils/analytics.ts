import type { AnalyticsEvent } from '@navikt/nav-dekoratoren-moduler';
import { getAnalyticsInstance } from '@navikt/nav-dekoratoren-moduler';

type NavigereAnalyticsEvent = AnalyticsEvent<'navigere', { lenketekst: string; destinasjon: string }>;

const analyticsLogger = getAnalyticsInstance<NavigereAnalyticsEvent>('k9-innsyn-dine-pleiepenger-mikrofrontend-ssr');

export const logCardClick = async (url: string) => {
    await analyticsLogger('navigere', { lenketekst: 'Dine pleiepenger', destinasjon: url });
};
