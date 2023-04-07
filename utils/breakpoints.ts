const recalcToEm = (breakpoint: number) => {
  return breakpoint / 16;
};

enum devices {
  tablet = 600,
  tabletX = 765,
  notebook = 1024,
  desktop = 1333,
  desktopX = 1500,
}

export const dimensions = {
  tablet: `min-width: ${recalcToEm(devices.tablet)}em`,
  tabletX: `min-width: ${recalcToEm(devices.tabletX)}em`,
  notebook: `min-width: ${recalcToEm(devices.notebook)}em`,
  desktop: `min-width: ${recalcToEm(devices.desktop)}em`,
  desktopX: `min-width: ${recalcToEm(devices.desktopX)}em`,
};
