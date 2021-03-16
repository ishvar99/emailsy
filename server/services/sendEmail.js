const sgMail = require("@sendgrid/mail")
const {SendGridTemplateId,SendGridEmail}= require("../config/keys")
exports.sendEmail = async (survey) => {
  console.log(survey)
  const {recipients,body,subject}=survey
  const templateData={body,subject}
  console.log(templateData);
  const msg = {
    to: recipients.map(r=>r?.email),
    from: SendGridEmail,
    templateId: SendGridTemplateId,
    dynamic_template_data: templateData
  }
  await sgMail.send(msg)
}