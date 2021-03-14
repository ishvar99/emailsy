const sgMail = require("@sendgrid/mail")
const {SendGridTemplateId,SendGridEmail}= require("../config/keys")
exports.sendEmail = async ({recipients,body}) => {
  const msg = {
    to: recipients.map(r=>r?.email),
    from: SendGridEmail,
    templateId: SendGridTemplateId,
    dynamic_template_data: {body}
  }
  await sgMail.send(msg)
}