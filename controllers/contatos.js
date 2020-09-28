module.exports = app => {
  const ContatosController = {
    index: function (req, res) {
      const { usuario } = req.session

      res.render('contatos/index', { usuario })
    }
  }

  return ContatosController;
}