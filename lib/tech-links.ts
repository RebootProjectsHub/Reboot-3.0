/**
 * Maps technology/service chip labels (as used in case `services` arrays and
 * the tjenester "Digitale tjenester" card) to their landing pages. Chips with
 * an entry here render as links; the rest stay plain text.
 */
export const techPages: Record<string, string> = {
  Shopify: "/tjenester/shopify",
  WordPress: "/tjenester/wordpress",
  // Both spellings occur in case data and the tjenester chip list.
  WooCommerce: "/tjenester/woocommerce",
  Woocommerce: "/tjenester/woocommerce",
}
