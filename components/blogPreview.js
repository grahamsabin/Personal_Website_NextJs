import React from "react";

const BlogPreview = ({children}) => {
    const [firstChild, secondChild, thirdChild] = children;

    return (
        <div>
          {firstChild}
          {secondChild}
          {thirdChild}
        </div>
      );

}

export default BlogPreview;