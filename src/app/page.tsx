import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-top p-8 pb-18 md:p-24">
      <div className="max-w-xl">
        <Image
          src="https://rentsimple-images-west.s3.us-west-2.amazonaws.com/assets/cesar-couto-27HiryxnHJk-unsplash.jpg"
          alt="ben image"
          width={96}
          height={96}
          className="mb-10 h-16 w-16 rounded-full"
        />

        <h1 className="mb-4 text-3xl text-gray-800 dark:text-white">Hi, I'm Ben.</h1>

        <div className="space-y-2 text-xl font-light text-gray-800 dark:text-white">
          <p>I love design and startups.</p>
          <p>Right now, I'm building AI agents for real estate.</p>
          <p>If you're working on something interesting, let's connect.</p>
        </div>

        <Link
          href="https://rentsimple.ai"
          className="mt-10 inline-flex items-center gap-2 rounded-full font-medium bg-gray-100 px-5 py-3 text-sm text-gray-800 transition-colors duration-300 hover:bg-gray-200 dark:bg-[#2A2A2A] dark:text-gray-200 dark:hover:bg-[#3C3C3C]"
        >
          Visit my website <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  )
}

