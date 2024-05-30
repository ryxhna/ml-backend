require('dotenv').config();

const Hapi = require('@hapi/hapi');
const routes = require('../server/routes');
const loadModel = require('../services/loadModel');
const InputError = require('../exceptions/InputError');

(async() => {
    //TODO: ini buat yg payload (yg bawah cuk)
    const server = Hapi.server({
        // Mendefinisikan port di docker, jadi gak langsung
        port: process.env.PORT,
        host: '0.0.0.0',

        /** testing lokal
            port: 3000,
            host: 'localhost',
        */
        routes: {
            cors: {
                origin: ['*'],
            },
            payload: {
                maxBytes: 1000000,
            },
        },
    });

    const model = await loadModel();
    server.app.model = model;

    server.route(routes);

    //TODO: response prediksi 
    server.ext('onPreResponse', function(request, h) {
        const response = request.response;

        if (response instanceof InputError) {
            const newResponse = h.response({
                status: 'fail',
                message: 'Terjadi kesalahan dalam melakukan prediksi',
            })
            newResponse.code(response.statusCode)
            return newResponse;
        }

        if (response.isBoom) {
            const newResponse = h.response({
                status: 'fail',
                message: response.message
            })
            newResponse.code(response.output.statusCode)
            return newResponse;
        }

        // payload melebihi batas maksimum gak?
        if (request.payload && request.payload.length > 1000000) {
            const newResponse = h.response({
                status: 'fail',
                message: 'Payload content length greater than maximum allowed: 1000000',
            });
            newResponse.code(413);
            return newResponse;
        }

        if (response.statusCode === 400) {
            const newResponse = h.response({
                status: 'fail',
                message: 'Terjadi kesalahan dalam melakukan prediksi',
            });
            newResponse.code(400); // ini khusus buat respon yang 400
            return newResponse;
        }

        return h.continue;
        //udah sampe situ aja
    });

    await server.start();
    console.log(`Server start at: ${server.info.uri}`);
})();