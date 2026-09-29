export type SignalRoute = { href: string; label: string; code: string; description: string };

/** The single published Signal route manifest. UI navigation and route labels read from this list. */
export const signalRoutes: readonly SignalRoute[] = [
  { href: '/signal', label: 'Search', code: 'SG-00', description: 'Resolve a phone number against configured evidence.' },
  { href: '/signal/lookup', label: 'Lookup', code: 'SG-01', description: 'Dedicated Signal lookup route.' },
  { href: '/signal/claim', label: 'Claim', code: 'SG-02', description: 'Verify and manage an eligible number.' },
  { href: '/signal/my-number', label: 'My number', code: 'SG-03', description: 'Verified number management.' },
  { href: '/signal/my-number/activity', label: 'Activity', code: 'SG-04', description: 'Verified-number activity.' },
  { href: '/signal/my-number/labels', label: 'Labels', code: 'SG-05', description: 'Community labels for a verified number.' },
  { href: '/signal/my-number/reputation', label: 'Reputation', code: 'SG-06', description: 'Reputation reports for a verified number.' },
  { href: '/signal/my-number/privacy', label: 'Privacy', code: 'SG-07', description: 'Profile and viewer disclosure preferences.' },
  { href: '/signal/watchlist', label: 'Watchlist', code: 'SG-08', description: 'Published monitoring entries.' },
  { href: '/signal/business', label: 'Business', code: 'SG-09', description: 'Business evidence available to Signal.' },
  { href: '/signal/settings', label: 'Settings', code: 'SG-10', description: 'Signal settings available to this account.' },
];

export const signalPrimaryRoutes = signalRoutes.filter((route) =>
  ['/signal', '/signal/my-number', '/signal/watchlist', '/signal/business', '/signal/settings'].includes(route.href),
);
export const signalRouteFor = (path: string) => signalRoutes.find((route) => route.href === path);
