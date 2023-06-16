'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';


import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(true);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');


  function formSubmitHandler(event) {
    event.preventDefault();
    fetch('/api', { method: 'POST', body: JSON.stringify({
      name: name,
      phone: phone,
      message: message
    })})

  //   try {
  //     await axios.post('/api/contact', { name, phone, message });
      
  //   } catch (error) {
  //     console.error(error);
      
  //   }
  };
  
  useEffect(() => {
    setIsOpen(true); 
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.contactForm}>
          <Image
            src="/images/contactForm/MdClose.svg"
            priority
            alt="корпус меблі"
            width={24}
            height={24}
            className={styles.close}
            onClick={handleClose}
          />

<form className={styles.form}onSubmit={formSubmitHandler} >
      <div className={styles.controls} >
        <div className={styles.control}>
          <span className={styles.inputIcon}>
            <Image
              src="/images/contactForm/MdAcUnit.svg"
              alt="name icon"
              width={4}
              height={4}
            />
          </span>
          <input 
          type="text" 
          id="name"
          required 
          placeholder="Ім’я" 
          value={name} 
          onChange={event=>setName(event.target.value)}/>
        </div>
        <div className={styles.control}>
          <span className={styles.inputIcon}>
            <Image
              src="/images/contactForm/MdAcUnit.svg"
              alt="name icon"
              width={4}
              height={4}
            />
          </span>
          <input
            type="number"
            id="pnone"
            required
            placeholder="+38 (099) 000 00 00"
            value={phone}
            onChange={event=>setPhone(event.target.value)}
          />
        </div>
        <div className={styles.control}>
          <input
            type="text"
            id="message"
            placeholder="Введіть свій коментар"
            value={message}
            onChange={event=>setMessage(event.target.value)}
          />
        </div>
        
          <div>
            <button className={styles.btn}> Відправити </button>
          </div>
      
      </div>
      </form>
    </div>
     )}
     </>
   );
 }
