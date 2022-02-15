export const CustomMessage = (message, type, enqueueSnackbar) => {
  enqueueSnackbar(message, {
    variant: type,
    persist: ["success", "info", "error"].includes(type) ? false : true,
    autoHideDuration: ["success", "info", "error"].includes(type) && 3000,
  });
};
