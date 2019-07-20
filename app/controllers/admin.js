module.exports.formulario_inclusao_noticia = function (application, req, res) {
    res.render("admin/form_add_noticia", {
        validacao: {},
        noticia: {}
    });
}

module.exports.noticias_salvar = function (application, req, res) {
    var noticia = req.body;

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('nome_arquivo', 'Autor é obrigatório').notEmpty();
    req.assert('dt_cadastro', 'Data é obrigatório').notEmpty().isDate({
        format: 'YYYY-MM-DD'
    });
    req.assert('conteudo', 'Notícia é obrigatório').notEmpty();

    var erros = req.validationErrors();

    console.log('erros: ', erros);

    if (erros) {
        res.render("admin/form_add_noticia", {
            validacao: erros,
            noticia: noticia
        });
        return;
    }

    var connection = application.config.dbconnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function (error, result) {
        res.redirect('/noticias');
    });
}