import React, { useState } from 'react'
import axios from 'axios'

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }
  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mdoyzgob',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Vielen Dank, wir melden uns bald bei dir!'
        )
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <section className="flex flex-col w-3/4 md:w-1/2 mx-auto">
      <h1 className="text-center">Kontaktiere uns</h1>
      <hr />
      <form onSubmit={handleOnSubmit} className="flex flex-col mt-4">
        <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0 mx-auto">
        <label htmlFor="email" className="block uppercase tracking-wide text-cgblue text-lg font-bold mb-2">Deine Email-Adresse</label>
        <input
          id="email"
          type="email" 
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-cgblue rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
        </div>
        <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0 mx-auto">
        <label htmlFor="message" className="block uppercase tracking-wide text-cgblue text-lg font-bold mb-2">Kommentar oder Nachricht</label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          rows="4"
          required
          value={inputs.message}
          className="appearance-none block w-full bg-gray-200 text-cgblue border border-cgblue rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        </div>
        <button type="submit" disabled={status.submitting} className="mx-auto w-full md:w-3/4 px-4 mb-6 md:mb-0 mt-8 text-white hover:bg-white hover:text-cgblue p-4 transition-colors bg-cgblue">
          {!status.submitting
            ? !status.submitted
              ? 'Abschicken'
              : 'Abgeschickt'
            : 'Abschicken...'}
        </button>
      </form>
      <div className="mt-4 ">
      {status.info.error && (
        <div className="error"><p className="text-center">Error: {status.info.msg}</p></div>
      )}
      {!status.info.error && status.info.msg && <p className="text-center">{status.info.msg}</p>}
      </div>
    </section>
  )
}

export default ContactForm