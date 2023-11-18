import React from "react";
import ArticleCard from "../../components/article/ArticleCard";

const Articles = () => {
  return (
    <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
      <div className="flex flex-wrap -mx-16 rtl:left-0 ">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </section>
  );
};

export default Articles;
