import Cors from 'cors'
import initLogicCors from "../../lib/initLogicCors"

const cors = initLogicCors(
  Cors({
    methods:['POST','GET','OPTIONS'],
  })
)

/**
 * Set up Nodemailer in this api to send the data across in an email. 
 * API WORKS!!!!
 */


export default async function handler(req, res) {

  //running the cors
  await cors(req,res)

  const data = req.body
  res.status(200).json({ 
    Status: "success",
    FirstName: data.firstName,
    LastName: data.lastName,
    Email: data.email
  })
}