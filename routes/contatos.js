module.exports = app => {
  const { contatos } = app.controllers

  app.get('/contatos', contatos.index)
  app.get('/contatos/:id', contatos.show)
  app.post('/contato', contatos.create)
  app.get('/contato/:id/editar', contatos.edit)
  app.put('/contato/:id', contatos.udpate)
  app.delete('/contato/:id', contatos.destroy)
}