export const debounce = <T extends Function>(func: T, wait: number) => {
  let timeoutId: NodeJS.Timeout | undefined;

  return function executedFunction(...args: any) {
    const later = () => {
      clearTimeout(timeoutId);
      func(...args);
    };

    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, wait);
  };
};
