import {
    addNewConfiguration,
    getConfigurations,
} from '../controllers/configurationControllers';

const routes = (app) => {
    app.route('/configurations')
        .get(getConfigurations)
        .post(addNewConfiguration);
}

export default routes;