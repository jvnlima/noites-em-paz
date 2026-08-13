export const PIXEL_ID = "2055261371798467";

type FbqFn = ((...args: unknown[]) => void) & { queue?: unknown[] };

const TRACKING_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
  "fbclid",
  "gclid",
  "ttclid",
  "sck",
  "src",
  "ref",
];

/**
 * Repassa as UTMs/click ids capturados do Facebook Ads para o checkout.
 */
export function withTracking(href: string) {
  if (typeof window === "undefined") return href;
  try {
    const current = new URLSearchParams(window.location.search);
    const url = new URL(href);
    for (const key of TRACKING_PARAMS) {
      const value = current.get(key);
      if (value && !url.searchParams.has(key)) url.searchParams.set(key, value);
    }
    return url.toString();
  } catch {
    return href;
  }
}

export function trackInitiateCheckout(value = 18.97, currency = "BRL") {
  if (typeof window === "undefined") return;
  const fbq = (window as unknown as { fbq?: FbqFn }).fbq;
  if (typeof fbq === "function") {
    fbq("track", "InitiateCheckout", { value, currency });
  }
}

/**
 * Dispara InitiateCheckout e só então segue para o checkout (com UTMs).
 */
export function handleCheckoutClick(
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  event.preventDefault();
  trackInitiateCheckout();
  const target = withTracking(href);
  window.setTimeout(() => {
    window.location.href = target;
  }, 250);
}
