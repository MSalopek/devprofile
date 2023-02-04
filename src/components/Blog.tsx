const posts: BlogPostCardList = [];

interface BlogCardData {
  id: Number,
  title: string,
  href: string,
  description: string,
  datetime?: string,
  imageUrl?: string,
  readingTime?: string,
}

export type BlogPostCardList = BlogCardData[];

export function BlogPostCard(post: BlogCardData) {
  return <a href={`/blog/posts/${post.id}`} key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg border-base-100">
    <div className="flex-shrink-0">
      <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
    </div>
    <div className="flex flex-1 flex-col justify-between bg-base-300 p-6">
      <div className="flex-1">
        <a href={post.href} className="mt-2 block">
          <p className="text-xl font-semibold text-gray-900 dark:text-gray-200">{post.title}</p>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{post.description}</p>
        </a>
      </div>
      <div className="mt-6 flex items-center">
        <div className="ml-3">
          <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-200">
            <time dateTime={post.datetime}>{post.datetime}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readingTime} read</span>
          </div>
        </div>
      </div>
    </div>
  </a>
}
