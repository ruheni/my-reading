import Link from 'next/link'
import { CurrentReadBook } from '../components/CurrentReadBook'
import { AddBookButton } from '../components/AddBookButton'
import prisma from '../prisma/client'

export default async function Page() {
  const allCurrentBooks = await prisma.currentBooks.findMany()

  return (
    <section>
      <div className="relative">
        <img
          src="studio.jpg"
          alt="apartment animation at night"
          className="w-full max-h-60 object-cover"
        ></img>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-3">
          <h1 className="text-mywhite font-semibold text-4xl">
            Reach your reading goals
          </h1>
        </div>
      </div>
      <div className="text-2xl leading-loose py-8 px-16">
        <p className="underline text-3xl font-extrabold">Currently Reading</p>
        <AddBookButton />
        <div>
          {allCurrentBooks?.map((book) => (
            <CurrentReadBook key={book.id} {...book} />
          ))}
        </div>
      </div>
    </section>
  )
}
