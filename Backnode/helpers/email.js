import nodemailer from "nodemailer"

export const emailRegister = async (data) => {
  const { email, user, token } = data

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const info = await transport.sendMail({
    from: '"NoCountry - Administrador de Proyectos" <cuentas@nocountry.com>',
    to: email,
    subject: "NoCountry - Comprueba tu cuenta",
    text: "Comprueba tu cuenta en la pagina",
    html: `<p>Hola: ${user} Comprueba tu cuenta en la pagina</p>
    <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace: 

    <a href="${process.env.FRONTEND_URL}/confirm/${token}">Comprobar Cuenta</a>
    
    <p>Si no creaste esta cuenta, ignora este mensaje</p>
    
    
    `,
  })
}

export const emailForgotPassword = async (data) => {
  const { email, user, token } = data

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  
  /* datos del mail */

  const info = await transport.sendMail({
    from: '"NoCountry - Administrador de Proyectos" <cuentas@nocountry.com>',
    to: email,
    subject: "NoCountry - Reestablece tu Password",
    text: "Reestablece tu Password",
    html: `<p>Hola: ${user} has solicitado reestablecer tu password</p>

    <p>Sigue el siguiente enlace para generar un nuevo password: 

    <a href="${process.env.FRONTEND_URL}/forgot-password/${token}">Reestablecer Password</a>
    
    <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>`
  })
}