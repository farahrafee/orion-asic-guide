import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/backend-flow/__docusaurus/debug',
    component: ComponentCreator('/backend-flow/__docusaurus/debug', 'b49'),
    exact: true
  },
  {
    path: '/backend-flow/__docusaurus/debug/config',
    component: ComponentCreator('/backend-flow/__docusaurus/debug/config', '716'),
    exact: true
  },
  {
    path: '/backend-flow/__docusaurus/debug/content',
    component: ComponentCreator('/backend-flow/__docusaurus/debug/content', '855'),
    exact: true
  },
  {
    path: '/backend-flow/__docusaurus/debug/globalData',
    component: ComponentCreator('/backend-flow/__docusaurus/debug/globalData', '308'),
    exact: true
  },
  {
    path: '/backend-flow/__docusaurus/debug/metadata',
    component: ComponentCreator('/backend-flow/__docusaurus/debug/metadata', 'b3f'),
    exact: true
  },
  {
    path: '/backend-flow/__docusaurus/debug/registry',
    component: ComponentCreator('/backend-flow/__docusaurus/debug/registry', '350'),
    exact: true
  },
  {
    path: '/backend-flow/__docusaurus/debug/routes',
    component: ComponentCreator('/backend-flow/__docusaurus/debug/routes', '31f'),
    exact: true
  },
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
    component: ComponentCreator('/backend-flow/docs', '21c'),
    routes: [
      {
        path: '/backend-flow/docs',
        component: ComponentCreator('/backend-flow/docs', 'd63'),
        routes: [
          {
            path: '/backend-flow/docs',
            component: ComponentCreator('/backend-flow/docs', 'd82'),
            routes: [
              {
                path: '/backend-flow/docs/bond-pad-level/cadence-setup',
                component: ComponentCreator('/backend-flow/docs/bond-pad-level/cadence-setup', 'dbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/bond-pad-level/chip-level-assembly',
                component: ComponentCreator('/backend-flow/docs/bond-pad-level/chip-level-assembly', '538'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/category/bond-pad-level',
                component: ComponentCreator('/backend-flow/docs/category/bond-pad-level', '094'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/category/io-level',
                component: ComponentCreator('/backend-flow/docs/category/io-level', 'ce2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/category/tapeout-level-final',
                component: ComponentCreator('/backend-flow/docs/category/tapeout-level-final', 'ae9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/category/tapeout-level-initial',
                component: ComponentCreator('/backend-flow/docs/category/tapeout-level-initial', 'bae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/intro',
                component: ComponentCreator('/backend-flow/docs/intro', '099'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/io-level/apr',
                component: ComponentCreator('/backend-flow/docs/io-level/apr', '180'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/io-level/pad-level-module',
                component: ComponentCreator('/backend-flow/docs/io-level/pad-level-module', 'b39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/io-level/syn',
                component: ComponentCreator('/backend-flow/docs/io-level/syn', 'b46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/tapeout-level-final/drc',
                component: ComponentCreator('/backend-flow/docs/tapeout-level-final/drc', 'af1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/tapeout-level-final/dummy-filler',
                component: ComponentCreator('/backend-flow/docs/tapeout-level-final/dummy-filler', '9b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/tapeout-level-final/gds-export',
                component: ComponentCreator('/backend-flow/docs/tapeout-level-final/gds-export', 'bfa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/tapeout-level-final/tapeout',
                component: ComponentCreator('/backend-flow/docs/tapeout-level-final/tapeout', '427'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/tapeout-level-initial/lvs',
                component: ComponentCreator('/backend-flow/docs/tapeout-level-initial/lvs', '740'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/tapeout-level-initial/seal-ring-assembly',
                component: ComponentCreator('/backend-flow/docs/tapeout-level-initial/seal-ring-assembly', '6fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/tapeout-level-initial/v2lvs',
                component: ComponentCreator('/backend-flow/docs/tapeout-level-initial/v2lvs', 'f2e'),
                exact: true,
                sidebar: "tutorialSidebar"
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
