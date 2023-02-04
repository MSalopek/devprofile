const toolsAndSkills = [
  "Go",
  "Python",
  "Node",
  "JS/TS",
  "React",
  "Next.js",
  "Docker",
  "Linux",
  "k8s",
  "IPFS",
  "CosmosSDK",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Nginx",
  "Figma",
  "Supabase",
  "Pocketbase"
]

export function AboutMe() {
  return (
    <div id="about" className="py-24 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl flex flex-col items-center gap-3">
            About me
            <div className="w-8 p-1 bg-accent/60" />
          </h2>

          <p className="text-lg mt-3 text-gray-600 dark:text-gray-200">
            More information about me, my skills and what I like working with is listed below.
            Be sure to check out my Github page for specific projects.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="flex flex-col justify-evenly sm:flex-row gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none">
          <Intro />
          <Skills />
        </div>
      </div>
    </div>
  )
}

function Skills() {
  return <div className="flex flex-col lg:max-w-md gap-4">
    <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">Tools & Tech</p>

    <dl className="flex flex-wrap gap-2">
      {toolsAndSkills.map((elem, index) => (
        <button key={`item-key-${index}`}
          type="button"
          className="items-center border border-transparent bg-accent/30 text-gray-800 dark:text-gray-300 px-6 py-3 text-base font-medium"
        >
          {elem}
        </button>)
      )}
    </dl>

  </div>
}

function Intro() {
  return <div className="">
    <div className="lg:max-w-lg mb-8">
      <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">My Passion</p>
      <p className="mt-4 text-lg leading-6 tracking-normal text-gray-600 dark:text-gray-300">
        I&apos;m a multi-disciplinary software engineer and consultant passionate about Open Source, efficient software design and bringing products from concept & prototype stage to launch.
      </p>

      <p className="mt-4 text-lg leading-6 tracking-normal text-gray-600 dark:text-gray-300">
        I&apos;m open to talk about your ideas and I always strive to can contribute, learn and grow. If you think we are a good match and you could use my skills and experience don&apos;t hesitate to send me a message, or book a consultation with me.
      </p>
    </div>
    <a
      href="/booking"
      className="btn btn-accent rounded-none"
    >
      Book a Consult
    </a>
  </div>
}
