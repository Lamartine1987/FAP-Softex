( async() =>{

    const database = require('./db');
    const Produto = require('./produto');
    await database.sync();

    const novoProduto = await Produto.create({
        nome: 'TV Samsung',
        preco: 500,
        descricao: 'Tv de led'
    })
})();