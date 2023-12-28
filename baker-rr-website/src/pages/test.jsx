import React, { useState, useEffect } from "react";
import * as contentful from "contentful";

const contentfulClient = contentful.createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
});

const Example = () => {
  const [fields, setFields] = useState({});

  useEffect(() => {
    contentfulClient.getEntries().then((res) => setFields(res.items[0].fields));
  }, []);

  return (
    <div>
      <h1>{fields.title}</h1>
      <p>
        {fields.mainContent?.content[0]?.content.map((entry) => entry.value)}
      </p>
    </div>
  );
};

export default Example;
