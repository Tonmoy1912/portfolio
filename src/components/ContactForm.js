import React from 'react'
import Notification from '@/components/Notification';
import { useState } from 'react';
import  { Fragment } from 'react';

export default function ContactForm() {
  const [showNoti, setShowNoti] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [isDisable,setIsDisable]=useState(false);
  function toggleShowNoti() {
    setShowNoti(!showNoti);
  }
  function changeData(event) {
    setData({
      ...data, [event.target.name]: event.target.value
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    setIsDisable(true);
    fetch("/api/send-mail", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response)=>{setIsDisable(false);return response.json()})
    .then((response)=>{
      // console.log("res",response);
      setMessage(response.message);
      setShowNoti(true);
      setData({ name: "", email: "", message: "" })
    })
  }
  return (
    <Fragment>
      {(showNoti && <Notification message={message} onClick={toggleShowNoti} />)}
      <form onSubmit={submitHandler}>
        <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            value={data.name}
            className="w-full px-3 py-2 text-sm text-black-700 placeholder-gray-400 bg-white border-0 rounded shadow"
            required={true}
            onChange={changeData}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={data.email}
            className="w-full px-3 py-2 text-sm text-black-700 placeholder-gray-400 bg-white border-0 rounded shadow"
            required={true}
            onChange={changeData}
          />
        </div>
        <div className="mb-3">
          <textarea
            rows={5}
            placeholder="Your message"
            name="message"
            value={data.message}
            className="w-full px-3 py-2 text-sm text-black-700 placeholder-gray-400 bg-white border-0 rounded shadow"
            required={true}
            onChange={changeData}
          />
        </div>
        <button className={`px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 ${isDisable?"cursor-progress":""}`}
          type='submit'
          disabled={isDisable}
        >
          Send a message
        </button>
      </form>
    </Fragment>
  );
}
