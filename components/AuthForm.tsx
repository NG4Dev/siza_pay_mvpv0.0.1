import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AuthForm = ({ type }: {type: string}) => {
  return (
    <section className="auth-form">
      <header className='flex flex-col gap-5 md:gap-8'>
        <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
          <Image 
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Sizapay logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Sizapay</h1>
        </Link>

        <div className="flex flex-col md:gap-3">

        </div>
      </header>
    </section>
  )
}

export default AuthForm

