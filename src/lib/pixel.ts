export const PIXEL_ID = "2055261371798467";

type FbqFn = ((...args: unknown[]) => void) & { queue?: unknown[] };

export function trackInitiateCheckout(value = 18.97, currency = "BRL") {
  if (typeof window === "undefined") return;
  const fbq = (window as unknown as { fbq?: FbqFn }).fbq;
  if (typeof fbq === "function") {
    fbq("track", "InitiateCheckout", { value, currency });
  }
}

/**
 * Dispara InitiateCheckout e só então segue para o checkout.
 */
export function handleCheckoutClick(
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  event.preventDefault();
  trackInitiateCheckout();
  window.setTimeout(() => {
    window.location.href = href;
  }, 250);
}
