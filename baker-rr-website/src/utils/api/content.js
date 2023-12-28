import * as contentful from "contentful";

const contentfulClient = contentful.createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
});

export default {
  getPages: () => contentfulClient.getEntries({ content_type: "page" }),
  getSinglePage: (page_id) => contentfulClient.getEntry(page_id),
};
