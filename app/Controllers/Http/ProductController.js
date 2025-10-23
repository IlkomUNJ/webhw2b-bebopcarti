class ProductController {
  async index({ view }) {
    const products = [
      { id: 1, name: "Solo Camp", category: "Camping", price: 45 },
      { id: 2, name: "Family Camp", category: "Camping", price: 120 },
      { id: 3, name: "Couple Camp", category: "Camping", price: 80 }
    ]
    return view.render('products', { products: products })
  }
}
module.exports = ProductController
