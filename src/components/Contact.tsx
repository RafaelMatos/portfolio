'use client'
import Link from "next/link";
import { IconList } from "./IconList";
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser'
import { useState } from "react";

const messageSchema = z.object({
  name: z.string()
  .min(3, { message: 'O nome deve conter ao min. 3 letras!' })
  .regex(/^[a-zA-Z\s]*$/, {
    message: 'O nome deve conter apenas letras!',
  }).transform((name) => {
    return name
      .trim()
      .split(' ')
      .map((word) => {
        return word[0].toUpperCase().concat(word.substring(1))
      })
      .join(' ')
  }),
  number: z
  .string()
  .regex(/^[0-9\s]*$/, {
    message: 'Numero deve conter apenas numeros!',
  }).transform((number)=>{
    return number.trim()
  }),
  email: z.string().email({message:'E-mail inválido!'}),
  subject: z.string({required_error:'Escreva um assunto da mensagem!'}),
  message:z.string({required_error:'Escreva uma mensagem!'}).min(3, { message: 'Vamos lá, pode escrever mais! Me conta quem é você?' })

})

type MessageFormData = z.infer<typeof messageSchema>



export function Contact() {
  const emailService = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || ''
const emailTemplate = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || ''
const emailPublicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || ''
  // const [textMessage,setTextMessage]= useState('')
  
  const {register,handleSubmit,reset,formState:{errors,isSubmitting,isSubmitted}} = useForm<MessageFormData>({
    resolver : zodResolver(messageSchema)
  })
 
  const handleMessageSubmit = async (data : MessageFormData)=>{
    const { name,number,email,subject,message } = data
    let textMessage = ''
    if(number){
      textMessage = `${textMessage}\n Numero de contato: ${number}\n`
    }
    textMessage = `${textMessage}\n Assunto da mensagem: ${subject}\n`
    textMessage = `${textMessage}\n Mensagem: ${message}\n`
    
    const templateParams = {
      from_name: name,
      message:textMessage,
      email:email
    }

    
    if(emailService && emailTemplate && emailPublicKey){
       await emailjs.send(emailService, emailTemplate,templateParams,emailPublicKey)
      if(isSubmitted){
        alert(`Obrigado pelo contato, ${name}`)
        
      }
      reset()
      return
    }
    alert("Desculpa, tivemos um problema no envio do email!")
    return
  }

  return (
    <>
      <div id="contact" className="w-full lg:h-screen">
        <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
          <p className="uppercase text-2xl tracking-widest text-purple-700">
            Contato
          </p>
          <h2 className="py-4 ml-2">Entre em contato</h2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full">
                <div>
                  <img
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src="https://images.unsplash.com/photo-1611175694989-4870fafa4494?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=674&q=80"
                    alt=""
                  />
                </div>
                <div className="pt-3">
                  <h2 className="py-2  tracking-widest">Rafael Matos</h2>
                  <p className=" tracking-widest pt-2 pb-3">
                    Desenvolvedor Front-end
                  </p>
                  <p>
                    Estou disponível para freelance ou contratação efetiva.
                    Entre em contato comigo e vamos conversar sobre o que iremos
                    fazer.
                  </p>
                </div>
                <div>
                  <p className="uppercase pt-8">Conecte-se comigo</p>
                  <div className="flex items-center justify-between m-auto py-4">
                    <IconList />
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form onSubmit={handleSubmit(handleMessageSubmit)}>
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label htmlFor="" className="uppercase text-sm py-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        {...register('name')}
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                      />
                      { errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="uppercase text-sm py-2">
                        Número
                      </label>
                      <input
                        type="text"
                        maxLength={11}
                        required={false}
                        {...register('number')}
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                      />
                      { errors.number && <p>{errors.number.message}</p>}
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="" className="uppercase text-sm py-2">
                      Email
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      className="border-2 rounded-lg p-3 flex border-gray-300 "
                    />
                    { errors.email && <p>{errors.email.message}</p>}
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="" className="uppercase text-sm py-2">
                      Assunto
                    </label>
                    <input
                      type="text"
                      {...register('subject')}
                      className="border-2 rounded-lg p-3 flex border-gray-300 "
                    />
                    { errors.subject && <p>{errors.subject.message}</p>}
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="" className="uppercase text-sm py-2">
                      Mensagem
                    </label>
                    <textarea
                      {...register('message')}
                      className="border-2 rounded-lg p-3 flex border-gray-300 max-h-full"
                      rows={10}
                    />
                    { errors.message && <p>{errors.message.message}</p>}
                  </div>
                  <button className="w-full p-4 text-gray-100 mt-4 hover:scale-[1.03] ease-in duration-300">Enviar Mensagem</button>
                  
                  
                  
                  
                  
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-12">
            <Link href={'/'}>
              <div className="rounded-full shadow-sm hover:shadow-lg
                 shadow-gray-400 p-3 cursor-pointer text-purple-500 hover:text-purple-800 
                 hover:scale-105 ease-in duration-500 ">
                <HiOutlineChevronDoubleUp size={30}/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
