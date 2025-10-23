class SellerController {
  constructor() {
    if(!global.__products) global.__products = [
      { id: 1, name: "Solo Camp", category: "Camping", price: 45 },
      { id: 2, name: "Family Camp", category: "Camping", price: 120 },
      { id: 3, name: "Couple Camp", category: "Camping", price: 80 }
    ]
  }
  async index({ view }) {
    const products = global.__products
    const wish = global.__wishlist || []
    const wishData = wish.map(w => {
      const p = products.find(x => x.id === w.product_id) || {}
      return { id: w.id, name: p.name || 'Unknown', category: p.category || '', price: p.price || 0 }
    })
    return view.render('seller', { products: [{ rows: products }], wish: [{ rows: wishData }] })
  }
  async add({ request, response }) {
    const name = request.input('name') || ''
    const category = request.input('category') || ''
    const price = parseFloat(request.input('price') || '0')
    const id = Date.now()
    global.__products.push({ id: id, name: name, category: category, price: price })
    return response.redirect('back')
  }
}
module.exports = SellerController
