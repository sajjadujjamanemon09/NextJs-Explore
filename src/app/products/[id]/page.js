import React from "react";

const DynamicPage = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h2>This is dynamic page of Products Page: {params.id}</h2>
      <h2>This is dynamic page of Search by Page: {searchParams.categoy}</h2>
    </div>
  );
};

export default DynamicPage;
