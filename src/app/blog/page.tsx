import { BlogPostCard, BlogPostCardList } from "@components/Blog";

// not implemented yet  
async function getData() {
  return [] as BlogPostCardList;
}

export default async function BlogList() {
  const posts = await getData();

  return (
    <div className="px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28 h-3/4">
      <section className="flex flex-col items-center justify-center h-3/4">
        <div className="mx-auto max-w-7xl p-6 lg:px-8 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">Blog</h2>
          <p className="mt-4 text-lg leading-6 tracking-normal text-gray-600 dark:text-gray-300 text-center w-1/2">
            There's nothing here yet. I've been postponing writing a blog since late 2016, but one day I will definitely take up writing.
            Be sure to subscribe so you don't miss any of my hot takes and rants. 😎

          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.title} {...post} />
          ))}
        </div>
      </section>
    </div>
  )
}
