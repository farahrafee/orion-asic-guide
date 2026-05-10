import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/backend-flow/blog',
    component: ComponentCreator('/backend-flow/blog', '60b'),
    exact: true
  },
  {
    path: '/backend-flow/blog/archive',
    component: ComponentCreator('/backend-flow/blog/archive', '5e7'),
    exact: true
  },
  {
    path: '/backend-flow/blog/authors',
    component: ComponentCreator('/backend-flow/blog/authors', '0d4'),
    exact: true
  },
  {
    path: '/backend-flow/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/backend-flow/blog/authors/all-sebastien-lorber-articles', '5e4'),
    exact: true
  },
  {
    path: '/backend-flow/blog/authors/yangshun',
    component: ComponentCreator('/backend-flow/blog/authors/yangshun', '71d'),
    exact: true
  },
  {
    path: '/backend-flow/blog/first-blog-post',
    component: ComponentCreator('/backend-flow/blog/first-blog-post', '489'),
    exact: true
  },
  {
    path: '/backend-flow/blog/long-blog-post',
    component: ComponentCreator('/backend-flow/blog/long-blog-post', 'fe0'),
    exact: true
  },
  {
    path: '/backend-flow/blog/mdx-blog-post',
    component: ComponentCreator('/backend-flow/blog/mdx-blog-post', '9a8'),
    exact: true
  },
  {
    path: '/backend-flow/blog/tags',
    component: ComponentCreator('/backend-flow/blog/tags', '856'),
    exact: true
  },
  {
    path: '/backend-flow/blog/tags/docusaurus',
    component: ComponentCreator('/backend-flow/blog/tags/docusaurus', 'c24'),
    exact: true
  },
  {
    path: '/backend-flow/blog/tags/facebook',
    component: ComponentCreator('/backend-flow/blog/tags/facebook', 'acb'),
    exact: true
  },
  {
    path: '/backend-flow/blog/tags/hello',
    component: ComponentCreator('/backend-flow/blog/tags/hello', '216'),
    exact: true
  },
  {
    path: '/backend-flow/blog/tags/hola',
    component: ComponentCreator('/backend-flow/blog/tags/hola', '1d7'),
    exact: true
  },
  {
    path: '/backend-flow/blog/welcome',
    component: ComponentCreator('/backend-flow/blog/welcome', '69f'),
    exact: true
  },
  {
    path: '/backend-flow/markdown-page',
    component: ComponentCreator('/backend-flow/markdown-page', '8be'),
    exact: true
  },
  {
    path: '/backend-flow/docs',
    component: ComponentCreator('/backend-flow/docs', '898'),
    routes: [
      {
        path: '/backend-flow/docs',
        component: ComponentCreator('/backend-flow/docs', '786'),
        routes: [
          {
            path: '/backend-flow/docs',
            component: ComponentCreator('/backend-flow/docs', 'af7'),
            routes: [
              {
                path: '/backend-flow/docs/backend-flow/bond-pad-level/cadence-setup',
                component: ComponentCreator('/backend-flow/docs/backend-flow/bond-pad-level/cadence-setup', 'f74'),
                exact: true,
                sidebar: "backendSidebar"
              },
              {
                path: '/backend-flow/docs/backend-flow/bond-pad-level/chip-level-assembly',
                component: ComponentCreator('/backend-flow/docs/backend-flow/bond-pad-level/chip-level-assembly', '920'),
                exact: true,
                sidebar: "backendSidebar"
              },
              {
                path: '/backend-flow/docs/backend-flow/intro',
                component: ComponentCreator('/backend-flow/docs/backend-flow/intro', '711'),
                exact: true,
                sidebar: "backendSidebar"
              },
              {
                path: '/backend-flow/docs/backend-flow/io-level/apr',
                component: ComponentCreator('/backend-flow/docs/backend-flow/io-level/apr', '8a4'),
                exact: true,
                sidebar: "backendSidebar"
              },
              {
                path: '/backend-flow/docs/backend-flow/io-level/pad-level-module',
                component: ComponentCreator('/backend-flow/docs/backend-flow/io-level/pad-level-module', '35f'),
                exact: true,
                sidebar: "backendSidebar"
              },
              {
                path: '/backend-flow/docs/backend-flow/io-level/syn',
                component: ComponentCreator('/backend-flow/docs/backend-flow/io-level/syn', '2ea'),
                exact: true,
                sidebar: "backendSidebar"
              },
              {
                path: '/backend-flow/docs/backend-flow/tapeout-level-final/drc',
                component: ComponentCreator('/backend-flow/docs/backend-flow/tapeout-level-final/drc', 'bac'),
                exact: true,
                sidebar: "backendSidebar"
              },
              {
                path: '/backend-flow/docs/backend-flow/tapeout-level-final/dummy-filler',
                component: ComponentCreator('/backend-flow/docs/backend-flow/tapeout-level-final/dummy-filler', '0d1'),
                exact: true,
                sidebar: "backendSidebar"
              },
              {
                path: '/backend-flow/docs/backend-flow/tapeout-level-final/gds-export',
                component: ComponentCreator('/backend-flow/docs/backend-flow/tapeout-level-final/gds-export', '452'),
                exact: true,
                sidebar: "backendSidebar"
              },
              {
                path: '/backend-flow/docs/backend-flow/tapeout-level-final/tapeout',
                component: ComponentCreator('/backend-flow/docs/backend-flow/tapeout-level-final/tapeout', '473'),
                exact: true,
                sidebar: "backendSidebar"
              },
              {
                path: '/backend-flow/docs/backend-flow/tapeout-level-initial/lvs',
                component: ComponentCreator('/backend-flow/docs/backend-flow/tapeout-level-initial/lvs', '32f'),
                exact: true,
                sidebar: "backendSidebar"
              },
              {
                path: '/backend-flow/docs/backend-flow/tapeout-level-initial/seal-ring-assembly',
                component: ComponentCreator('/backend-flow/docs/backend-flow/tapeout-level-initial/seal-ring-assembly', 'f67'),
                exact: true,
                sidebar: "backendSidebar"
              },
              {
                path: '/backend-flow/docs/backend-flow/tapeout-level-initial/v2lvs',
                component: ComponentCreator('/backend-flow/docs/backend-flow/tapeout-level-initial/v2lvs', '115'),
                exact: true,
                sidebar: "backendSidebar"
              },
              {
                path: '/backend-flow/docs/category/bond-pad-level',
                component: ComponentCreator('/backend-flow/docs/category/bond-pad-level', 'a18'),
                exact: true,
                sidebar: "backendSidebar"
              },
              {
                path: '/backend-flow/docs/category/io-level',
                component: ComponentCreator('/backend-flow/docs/category/io-level', 'f6f'),
                exact: true,
                sidebar: "backendSidebar"
              },
              {
                path: '/backend-flow/docs/category/tapeout-level-final',
                component: ComponentCreator('/backend-flow/docs/category/tapeout-level-final', 'fd8'),
                exact: true,
                sidebar: "backendSidebar"
              },
              {
                path: '/backend-flow/docs/category/tapeout-level-initial',
                component: ComponentCreator('/backend-flow/docs/category/tapeout-level-initial', 'ba7'),
                exact: true,
                sidebar: "backendSidebar"
              },
              {
                path: '/backend-flow/docs/frontend-flow/intro',
                component: ComponentCreator('/backend-flow/docs/frontend-flow/intro', 'b2a'),
                exact: true,
                sidebar: "frontendSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/backend-flow/',
    component: ComponentCreator('/backend-flow/', '8c5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
