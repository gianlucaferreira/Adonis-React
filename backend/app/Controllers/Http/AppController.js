'use strict'

const Collaborator = use('App/Models/Collaborator')

class AppController {
    async index() {
        const data = await Collaborator.all();

        return data;
    }

    async store({ request }) {
        const data = request.only([ 'name', 'value' ]);

        await Collaborator.create(data);
    }

    async destroy({ params }) {
        const collaborator = await Collaborator.findOrFail(params.id);

        await collaborator.delete();
    }
}

module.exports = AppController
 