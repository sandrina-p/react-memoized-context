export const imports = {
  'docz/Usage.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docz-usage" */ 'docz/Usage.mdx'
    ),
}
