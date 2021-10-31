export default {
  name: "mediaPostCategory",
  title: "Media Post Category",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "category",
      },
    },
  ],
};
