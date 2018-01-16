return {
  path: '/',
  component: Foo,
  indexRoute: { component: Main },
  childRoutes: [
    { path: 'Start', component: Started },
    {
      path: 'Showcase',
      component: Case,
      childRoutes: [
        { path: 'Bash', component: Bash },
        { path: 'Comment', component: Comment },
      ],
    }
  ]
}