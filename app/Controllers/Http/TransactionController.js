class TransactionController {
  constructor() {
    if(!global.__wishlist) global.__wishlist = []
  }
  async add({ request, response }) {
    const product_id = parseInt(request.input('product_id') || '0')
    const id = Date.now()
    global.__wishlist.push({ id: id, product_id: product_id })
    return response.redirect('back')
  }
  async remove({ request, response }) {
    const id = parseInt(request.input('id') || '0')
    global.__wishlist = global.__wishlist.filter(w => w.id !== id)
    return response.redirect('back')
  }
}
module.exports = TransactionController
