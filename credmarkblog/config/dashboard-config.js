export default {
    widgets: [
      {
        name: "sanity-tutorials",
      },
      {
        name: "project-info",
      },
      {
        name: "netlify",
        options: {
          title: "My Netlify deploys",
          sites: [
            {
              name: "staging-credmark-website",
              apiId: "0806f25c-c95a-41e0-9e97-f02376f19eb8",
              buildHookId: "61f6b823d5bc6ed1bdd0608c",
              title: "Credmark [Staging]",
            },
            {
              name: "credmark-website",
              apiId: "7456caf5-ee43-47c9-83f2-68389360f1c0",
              buildHookId: "61f6ba594c4a46e1091dbd0a",
              title: "Credmark [Production]",
            },
          ],
        },
      },
    ],
  };