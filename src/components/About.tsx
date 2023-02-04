import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export function AboutMe() {
  return (
    <div id="about" className="py-24 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl flex flex-col items-center gap-3">
            About me
            <div className="w-8 p-1 bg-accent/60" />
          </h2>

          <p className="text-lg mt-3 text-gray-600">
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


const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]


function Skills() {
  return <div className="flex flex-col lg:max-w-md gap-4">
    <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tools & Tech</p>

    <dl className="flex flex-wrap gap-2">
      {toolsAndSkills.map((elem, index) => (
        <button key={`item-key-${index}`}
          type="button"
          className="items-center border border-transparent bg-accent/40 text-gray-800 px-6 py-3 text-base font-medium"
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
      <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Passion</p>
      <p className="mt-4 text-lg leading-6 tracking-normal text-gray-600">
        I'm a multi-disciplinary software engineer and consultant passionate about efficient software design and bringing products from concept & prototype stage to launch.
      </p>

      <p className="mt-4 text-lg leading-6 tracking-normal text-gray-600">
        I'm open to talk about your ideas and I always strive to can contribute, learn and grow. If you think we are a good match and you could use my skills and experience don't hesitate to send me a message, or Book a Consultation with me.
      </p>
    </div>
    <a
      href="/booking"
      className="btn"
    >
      Book a Consult
    </a>
  </div>
}


// I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.

// I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming

// I'm open to talk about your ideas and I always strive to can contribute, learn and grow. If you think we are a good match and you could use my skills and experience don't hesitate to send me a message, or Book a Consultation with me.