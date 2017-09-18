//base service route
const apiServiceRoute = '/v1';
const swaggerSpecRoute = apiServiceRoute + '/spec';

const emailConfig = {
    host: 'secure179.sgcpanel.com',
    port: 465,
    secure: true,
    auth: {
      user: '_mainaccount@financialinsiders.ca',
      pass: 'f1n5i6er',
    }
};

const sampleController = {
    routeName: '/sample',
    routeMethods: {
        sampleGet: '/sampleGet'
    }
};

const emailController = {
    routeName: '/email',
    routeMethods: {
        send: '/send'
    }
};

module.exports = {
    apiServiceRoute,
    swaggerSpecRoute,
    emailConfig,
    sampleController,
    emailController
}