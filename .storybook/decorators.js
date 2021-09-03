export const centerScreen = storyFn => {
  return `<section class="h-screen flex items-center justify-center">${storyFn()}</section>`;
};