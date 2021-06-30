const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    // Listagem de registros
    async index(request, response) {
        const { page = 1} = request.query;
        const products = await Product.paginate({}, { page, limit: 10 });
        return response.json(products);
    },

    // Criação de registros
    async store(request, response) {
        const product = await Product.create(request.body);

        return response.json(product);
    },

    // Detalhes 
    async show(request, response) {
        const product = await Product.findById(request.params.id);
        return response.json(product);
    },

    // Atualização
    async update(request, response) {
        const product = await Product.findById(request.params.id, request.body, {new: true});
        return response.json(product);
    },

    // Deletar
    async destroy(request, response) {
        await Product.findByIdAndRemove();

        return response.send();
    },
};