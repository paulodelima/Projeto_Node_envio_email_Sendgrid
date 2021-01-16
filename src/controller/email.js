const sgMail = require('@sendgrid/mail')
const status = require("http-status");
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.enviar = (request, response, next) => {
    const msg = {
        to      : request.body.to,
        from    : request.body.from,
        subject : request.body.subject,
        text    : request.body.text,
        html    : request.body.html
        }

    sgMail
    .send(msg)
    .then(() => {
        response.status(status.OK).send();
    })
    .catch((error) => {
        console.error(error);
        response.status(status.BAD_REQUEST).send();
    })
    console.log('Recebido e retornado');
    response.status(status.OK).send();
}