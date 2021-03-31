export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6063fabb4c1b4177f75d5c8f",
                  title: "Sanity Studio",
                  name: "portfolio-website-studio-h6z7zt7w",
                  apiId: "f351f014-0430-4205-9b25-6ce294c61812",
                },
                {
                  buildHookId: "6063fabc4f294b79906b1de1",
                  title: "Blog Website",
                  name: "portfolio-website-web-ezoej7m5",
                  apiId: "018621aa-2e39-4861-945a-d95069de7efe",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/hasib-rashid/portfolio-website",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://portfolio-website-web-ezoej7m5.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
