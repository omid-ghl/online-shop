import { useTheme } from "next-themes";
import { useLanguage } from "../../hooks/useLanguage";
import Link from "next/link";
import Image from "next/image";

const ArticleCard = () => {
  const { t, locale } = useLanguage();
  const { theme } = useTheme();
  const articleId = 3;

  return (
    <Link href={`/articles/${articleId}`}>
      <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col  transition duration-300 hover:scale-105">
        {/* <Image
          src="https://source.unsplash.com/Lki74Jj7H-U/400x300"
          width={45}
          height={45}
          alt="Card img"
          className="object-cover object-center w-full h-48 rounded-tl-xl rounded-tr-xl bg-slate-500"
        /> */}
        <img
          src="https://source.unsplash.com/Lki74Jj7H-U/400x300"
          alt="Card img"
          className="object-cover object-center w-full h-48 rounded-tl-xl rounded-tr-xl bg-slate-500"
        />
        <div className="flex flex-grow">
          <div className="triangle"></div>
          <div
            className={`flex flex-col justify-between px-4 py-6 
                ${theme === "dark" ? "bg-[#5b5b5bf9]" : "bg-[#dadadaf9]"}
                  text rounded-bl-xl rounded-br-xl`}
          >
            <div>
              <a
                // href={`/articles/${articleId}`}
                className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
              >
                شنریتنشس
              </a>
              <a
                // href={`/articles/${articleId}`}
                className="block mb-4 text-2xl  leading-tight hover:underline hover:text-blue-600"
              >
                شنینت شسیش ینسش
              </a>
              <p className="mb-4">
                شنریتنشس یشسنریتنشسینت شسیت شسنی شن سینتشس ینتش ینسش dajsndajsda
                dasndl
              </p>
            </div>
            <div>
              <a
                // href={`/articles/${articleId}`}
                className="inline-block pb-1 mt-2 text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
              >
                {t.more}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
