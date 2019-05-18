# Gatsby `UNHANDLED REJECTION` bug: Minimal, Reproducible Example

This is a follow up of https://github.com/gatsbyjs/gatsby/pull/12348#issuecomment-493219565

This is the result of `yarn build` with Node v11.14.0:

```
yarn run v1.15.2
$ gatsby build
success open and validate gatsby-configs — 0.004 s
success load plugins — 0.239 s
success onPreInit — 0.004 s
success delete html and css files from previous builds — 0.010 s
success initialize cache — 0.015 s
success copy gatsby files — 0.037 s
success onPreBootstrap — 0.006 s
caught error: failed to process https://httpstat.us/404
HTTPError: Response code 404 (Not Found)
error UNHANDLED REJECTION


  Error: failed to process https://httpstat.us/404
  HTTPError: Response code 404 (Not Found)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

But since we call `.catch` on `createRemoteFileNode`, the process should not fail.
