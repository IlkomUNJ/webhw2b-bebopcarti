class ContactController {
  async send({ request, response }) {
    return response.redirect('back')
  }
}
module.exports = ContactController
