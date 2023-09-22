import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Daniel Hurst</title>
        <meta
          name="description"
          content="I&apos;m Daniel Hurst. I live in North East, England, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Daniel Hurst. I live in North East, England, where I design the
              future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>Hello, I&apos;m Daniel, a dedicated software engineer based in North East England. 
                My expertise encompasses a range of cutting-edge technologies, including Python, 
                JavaScript, and React. My journey in the ever-evolving landscape of digital marketing 
                and ecommerce provided me with invaluable insights. However, it was the intricate world 
                of software engineering that truly captured my heart—a realm where my genuine passion resides.</p>

              <p>In my relentless pursuit of excellence, I&apos;ve engaged closely with clients, 
                crafting tailored software solutions that span from groundbreaking SEO agents 
                to impactful front-end development for esteemed organizations like YMCA. My 
                skill set truly shines when it comes to AI-driven automation, the creation of 
                compelling web apps, and the seamless execution of website development projects.</p>

              <p>My commitment to pushing the boundaries of creativity and technology also led 
                me to co-found Hurst Creative—an endeavor that seamlessly merges design finesse 
                with the innovation of AI and software. Here, my journey comes full circle, 
                reigniting my fervor for software engineering. Every line of code, every intricate 
                problem solved, stands as a testament to my dedication in turning abstract ideas 
                into tangible reality.</p>

              <p>As you explore my portfolio, you&apos;ll witness the harmonious interplay of art 
                and technology. This is where visionary concepts meticulously transform into 
                projects that consistently exceed expectations. Together, we&apos;ll craft solutions 
                that leverage the power of coding, design brilliance, and automation, culminating 
                in something truly extraordinary. Join me on this journey, where my past experiences 
                in digital marketing and ecommerce converge with an unwavering ardor for software engineering. 
                Together, let&apos;s shape the future—one line of code at a time.</p>

            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/danhursty" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://instagram.com/danhursty" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/danhursty" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/danieldavidhurst/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:daniel.d.hurst@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                daniel.d.hurst@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
