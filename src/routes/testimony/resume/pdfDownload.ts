import fs from 'fs'

// ----- GET -----
export async function get(){
  //console.log(params.file) -> ABC

  var pdf = fs.readFileSync("./resources/resume.pdf")

  return{
    status:200,
    headers: {
      "Content-type" : "application/pdf",
      "Content-Disposition": "attachment; filename=./resources/resume.pdf"
    },
    body: pdf
  }
}