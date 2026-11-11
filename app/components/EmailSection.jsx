'use client'
import React, {useState} from 'react'
import GithubIcon from "../../public/images/github.png"
import LinkedinIcon from "../../public/images/linkedin.png"
import Link from"next/link"
import Image from "next/image"
const EmailSection = () => {
    const[emailSubmitted, setEmailSubmitted] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [submitError, setSubmitError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isSending) return
        const form = e.currentTarget
        const fields = new FormData(form)
        setIsSending(true)
        setEmailSubmitted(false)
        setSubmitError('')
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Object.fromEntries(fields)),
            })
            const result = await response.json()
            if (!response.ok) {
                throw new Error(result.error || 'Unable to send your message. Please try again.')
            }
            setEmailSubmitted(true)
            form.reset()
        } catch (error) {
            setSubmitError(error.message || 'Unable to send your message. Please try again.')
        } finally {
            setIsSending(false)
        }
    }
  return (
    <section id="contact" className="relative scroll-mt-28 grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
        <div className="pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
            I&apos;m currently looking for new opportunities
        </p>
        <div className="socials flex flex-row gap-2">
        <Link href="https://github.com/Andrew-Gao-5" className="flex h-12 w-12 items-center justify-center" aria-label="GitHub">
            <Image src={GithubIcon} alt="" width={48} height={48} className="h-12 w-12 object-contain" />
        </Link>

        <Link href="https://www.linkedin.com/in/andrew-gao-a806b529b/" className="flex h-12 w-12 items-center justify-center" aria-label="LinkedIn">
            <Image src={LinkedinIcon} alt="" width={48} height={48} className="h-12 w-12 object-contain" />
        </Link>

        </div>
        </div>
<div className="relative z-10">
    <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className= "mb-6">


        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
        <input name="email" type="email" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" id="email" required placeholder ="what@gmail.com"/>
        </div>
        <div className= "mb-6">
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
        <input name="subject" type="text" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" id="subject" required placeholder ="Howdy!"/>
    </div>
    <div className="mb-6">
        <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
        <textarea name="message" id="message" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Let's talk about ..."></textarea>
    
    </div>
    <button disabled={isSending} type="submit" className="bg-primary-500 hover:bg-primary-500 text-white font-medium py-2.5 px-5 rounded-lg w-full disabled:opacity-60 disabled:cursor-wait">{isSending ? "Sending..." : "Send Message"}</button>
    {submitError && <p role="alert" className="text-red-400 text-sm mt-2">{submitError} You can also <a className="underline" href="mailto:andrew.ag618@gmail.com">email me directly</a>.</p>}
    {
        emailSubmitted && (<p role="status" className="text-green-500 text-sm mt-2">
            Email sent successfully!
        </p>)
    }
    </form>
</div>

    </section>
  )
}

export default EmailSection
