import React from "react";

const Articles = (props: any) => {
  return (
    <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
      <div className="flex flex-wrap -mx-4 rtl:left-0">
        {JSON.stringify(props)}
      </div>
    </section>
  );
};

export default Articles;
