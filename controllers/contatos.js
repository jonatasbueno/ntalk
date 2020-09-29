module.exports = app => {
  const ContatosController = {
    index: function (req, res) {
      const { usuario } = req.session
      const { contatos } = usuario;

      res.render('contatos/index', { usuario, contatos })
    },
    create: function (req, res) {
      const { contato } = req.body;
      const { usuario } = req.session;

      usuario.contatos.push(contato);
      res.redirect('/contatos')
    },
    show: function (req, res) {
      const { id } = req.params;
      const { usuario } = req.session;
      const contato = usuario.contatos[id]

      res.render('contatos/show', { id, contato })
    },
    edit: function (req, res) {
      const { id } = req.params;
      const { usuario } = req.session;
      const contato = usuario.contatos[id]

      res.render('contatos/edit', { id, contato, usuario })
    },
    update: function (req, res) {
      const { contato } = req.body;
      const { usuario } = req.session;
      const { id } = req.params;

      usuario.contatos[id] = contato;

      res.redirect('/contatos')
    },
    destroy: function (req, res) {
      const { usuario } = req.session;
      const { id } = req.params;

      usuario.contatos.splice(id, 1);

      res.redirect('/contatos')
    }
  }

  return ContatosController;
}