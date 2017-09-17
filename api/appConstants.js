//base service route
const apiServiceRoute = '/v1';
const swaggerSpecRoute = apiServiceRoute + '/spec';

const sampleController = {
    routeName: '/sample',
    routeMethods: {
        sampleGet: '/sampleGet'
    }
};

module.exports = {
    apiServiceRoute,
    swaggerSpecRoute,
    sampleController
}