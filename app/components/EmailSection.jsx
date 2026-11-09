import React from 'react'
import GithubIcon from "../../public/images/github.png"
import LinkedinIcon from "../../public/images/linkedin.png"
import Link from"next/link"
import Image from "next/image"
const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
        <div>
            <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
            I'm currently looking for new opportunities
        </p>
        <div className="socials flex flex-row gap-2">
        <Link href="https://github.com/Andrew-Gao-5">
            <Image src={GithubIcon} alt="Github Icon" />
        </Link>

        <Link href="https://www.linkedin.com/in/andrew-gao-a806b529b/">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" />
        </Link>

        </div>
        </div>
<div>
    <form className="flex flex-col gap-4">
        <label htmlFor="email" type="email" className="text-white block mb-2 text-sm font-medium">andrew.ag618@gmail.com</label>
        <input type="email" className="bg-[#1819E] border border-[#33353F]" id="email" required placeholder ="what@gmail.com"/>
    </form>
</div>

    </section>
  )
}

export default EmailSection