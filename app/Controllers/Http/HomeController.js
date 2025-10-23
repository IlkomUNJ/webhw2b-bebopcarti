class HomeController {
  async index({ view }) {
    return view.render('index')
  }
  async packages({ view }) {
    return view.render('packages')
  }
  async whatyouget({ view }) {
    return view.render('whatyouget')
  }
  async lokasinya({ view }) {
    return view.render('lokasinya')
  }
  async contact({ view }) {
    return view.render('contact')
  }
}
module.exports = HomeController
