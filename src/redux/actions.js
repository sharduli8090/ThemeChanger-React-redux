export const setTheme = (theme) => {
  console.log(theme, "asctionb");
  return {
    type: 'SET_THEME',
    payload: theme,
  };
};