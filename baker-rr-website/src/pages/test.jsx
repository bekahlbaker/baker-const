import React, { useState, useEffect } from "react";
import content from "@/utils/api/content";

const Example = () => {
  const [fields, setFields] = useState({});

  useEffect(() => {
    content
      .getSinglePage("61AtoItHbpFYJkEBnguyA7")
      .then((res) => setFields(res.fields));
  }, []);

  return (
    <div>
      <h1>{fields.title}</h1>
      <p>
        Content
        {fields.mainContent?.content[0]?.content.map((entry) => entry.value)}
      </p>
    </div>
  );
};

export default Example;
