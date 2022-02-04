import App from "../app/App";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "App",
  Page: App,
};
export const Page = () => <App></App>;
