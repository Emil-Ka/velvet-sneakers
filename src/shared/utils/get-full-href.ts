export const getFullHref = (href: string) => {
  const { origin } = window.location;

  return `${origin}${href}`;
};
