import axios from 'axios'
import router from 'next/router'
import React from 'react'
import '../axios'
const login = () => {
  const [user, setUser] = React.useState({ email: '', password: '' })
  const [loggingIn, setLoggingIn] = React.useState(false)

  const loginUser = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoggingIn(true)
    try {
      const res = await axios.post('/auth/login', user)
      const data = await res.data
      localStorage.setItem('user', JSON.stringify(data))
      await router.push('/')
      router.reload()
    } catch (error) {
      setLoggingIn(false)

      alert('رجاء تأكد من البريد الالكترونى و كلمة المرور')
    }
  }
  return (
    <section
      className="text-white max-w-[1400px] mx-auto px-7 "
      style={{ direction: 'rtl' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-[75vh]  bg-[#202020] rounded-xl overflow-hidden">
        <form
          onSubmit={loginUser}
          className="flex flex-col gap-8 items-center justify-center relative "
        >
          <img
            src="/E-Mena.png"
            width="200px"
            height="200px"
            alt="E-MENA LOGO"
            className="absolute top-20"
          />
          <h1 className="text-3xl font-bold">تسجيل الدخول</h1>

          <div className="grid grid-cols-1  text-xl justify-items-center w-full">
            <input
              type="email"
              name="email"
              id="email"
              value={user.email}
              placeholder="البريد الاكترونى"
              required
              className="placeholder-white bg-red-500 rounded-full px-3 py-2 w-1/2"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-1  text-xl justify-items-center w-full">
            <input
              type="password"
              required
              name="password"
              id="password"
              placeholder="كلمة المرور"
              className="placeholder-white bg-red-500 rounded-full px-3 py-2 w-1/2"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className={`border border-red-500 py-2 px-7 rounded-full text-xl hover:text-red-500 hover:bg-white ${
              loggingIn && 'bg-gray-500'
            }`}
            disabled={loggingIn}
          >
            تسجيل الدخول
          </button>
        </form>
        <div className="h-full w-full hidden md:block">
          <img
            src="/Arcane-Vi-1.jpg"
            alt="Arcane Vi image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="md:flex text-center gap-2 items-center text-xl justify-center">
        <h1>اذا كنت ترغب بالانضمام الينا، راسلنا على </h1>
        <a
          className="text-red-700 font-poppins"
          href="mailto:e.mena.contact@gmail.com"
        >
          e.mena.contact@gmail.com
        </a>
      </div>
    </section>
  )
}

export default login
