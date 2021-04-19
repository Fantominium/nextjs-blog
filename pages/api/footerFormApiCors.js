import Cors from 'cors'
import initLogicCors from "../../lib/initLogicCors"
import sgMail from '@sendgrid/mail'


// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const cors = initLogicCors(
  Cors({
    methods:['POST','GET','OPTIONS'],  
    // origin: "*",
    // preflightContinue: false,
    // optionsSuccessStatus: 204
  })
)

/**
 * Using Sendgrid in this api to send the data across in an email. 
 * api key needs to be renewed
 */

async function testSend(a, b, c) {
  const msg = {
    to:'malcolm@movement.co.uk',
    from: 'malcolm.garner4@gmail.com',
    subject: 'Malcolm testing sengrid api email with form info',
    text: `Hi Malcolm, mailer api here. ${a} ${b} wishes to contact you. Their email address is ${c} `,
    html: `<strong>Hi Malcolm, mailer api here. ${a} ${b} wishes to contact you. Their email address is ${c}</strong>`
  }

  // try {
  //   await sgMail.send(msg);
  // } catch (error) {
  //   console.error(error);

  //   if (error.response) {
  //     console.error(error.response.body)
  //   }
  // }
}

export default async function handler(req, res) {

  //running the cors
  await cors(req,res)
  
  const data = req.body

  const {firstName, lastName, email} = {...data}

  if (firstName && lastName && email) {

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'Application/json')
    res.setHeader('Access-Control-Request-Method', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    // })
    return res.status(200).json({
      status: "success",
      code: "200"
    })
  }



  res.send()
}