//TODO: tambahin route histories disini --done
const { postPredictHandler, getPredictHandler } = require('../server/handler');

const routes = [{
        path: '/predict',
        method: 'POST',
        handler: postPredictHandler,
        options: {
            payload: {
                allow: 'multipart/form-data',
                multipart: true,
                maxBytes: 1000000 //batas ukuran untuk maksimum payload
            }
        }
    },
    {
        path: '/predict/histories',
        method: 'GET',
        handler: getPredictHandler,
    }
];

module.exports = routes;