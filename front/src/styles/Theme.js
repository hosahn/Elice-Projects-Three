const fontSizes = {
  base: '1.2rem',
  lg: '1.4rem',
  titleSize: '1.8rem',
};

const color = {
  purpleBg: 'rgba(243, 240, 255, 0.5)',
  lightGrayBg: '#f8f9fd',
  mainPurple: '#3d2c8d', // button, font
  subPurple: '#c996cc', // Nav
  purple: '#916bbf',
  subGray: '#EFF0F2', // button
  pink: '#e64980',
};

const deviceSizes = {
  mobileL: '450px',
  tabletL: '1024px',
};

const device = {
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

const theme = {
  fontSizes,
  color,
  deviceSizes,
  device,
};

export default theme;
