import mailHelper from '../helpers/email.helper';
import emailValidator from '../validators/sendMail.validator';


/**
 * @swagger
 * tags:
 * - name: "email"
 *   description: "Email API"
 * /email/send:
 *   post:
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         description: email to be sent
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *           - "to"
 *           - "subject"
 *           - "message"
 *           properties:
 *             to:
 *               type: string
 *             subject:
 *               type: string
 *             message:
 *               type: string
 *     tags:
 *     - "email"
 *     responses:
 *       200:
 *         description: Mail Sent
 */
const sendMail = (req, res) => {
    const reqData = req.body;
    emailValidator.validateSendEmail(req.body, (err, validationMsgs) => {
        console.log(validationMsgs);
        if (err) {

        } else if (validationMsgs && validationMsgs.length > 0) {
            res.json({
                validationStatus: 'Failed',
                validationMessages: validationMsgs
            });
        } else {
            mailHelper.sendEmail(reqData.to, reqData.subject, reqData.message);
            res.json({
                message: 'Mail Sent'
            });
        }
    });
};

export default {
    sendMail
}