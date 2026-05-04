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
    component: ComponentCreator('/backend-flow/docs', '698'),
    routes: [
      {
        path: '/backend-flow/docs',
        component: ComponentCreator('/backend-flow/docs', 'aa9'),
        routes: [
          {
            path: '/backend-flow/docs',
            component: ComponentCreator('/backend-flow/docs', 'd7b'),
            routes: [
              {
                path: '/backend-flow/docs/bond-pad-level/manage-docs-versions',
                component: ComponentCreator('/backend-flow/docs/bond-pad-level/manage-docs-versions', '9c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/bond-pad-level/translate-your-site',
                component: ComponentCreator('/backend-flow/docs/bond-pad-level/translate-your-site', 'f51'),
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
                path: '/backend-flow/docs/intro',
                component: ComponentCreator('/backend-flow/docs/intro', '099'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/io-level/create-a-blog-post',
                component: ComponentCreator('/backend-flow/docs/io-level/create-a-blog-post', '7a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/io-level/create-a-document',
                component: ComponentCreator('/backend-flow/docs/io-level/create-a-document', '1c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/io-level/create-a-page',
                component: ComponentCreator('/backend-flow/docs/io-level/create-a-page', 'e10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/io-level/deploy-your-site',
                component: ComponentCreator('/backend-flow/docs/io-level/deploy-your-site', '7c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/backend-flow/docs/io-level/markdown-features',
                component: ComponentCreator('/backend-flow/docs/io-level/markdown-features', 'a87'),
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
