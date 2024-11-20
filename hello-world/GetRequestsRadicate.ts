import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';


const solicitudes = [
    { id: 1, description: 'Bogota-1234-2024', date_update: '1-11-2024', date_request: '1-11-2024', status: 'proceso', resp_user: 'Daniel Rumbo', creator_user: 'Pepito perez' },
    { id: 2, description: 'Bogota-1235-2024', date_update: '30-11-2024', date_request: '30-11-2024', status: 'pendiente', resp_user: 'camilo sanchez', creator_user: 'samuel perez' },
    { id: 3, description: 'Bogota-1267-2024', date_update: '28-11-2024', date_request: '28-11-2024', status: 'proceso', resp_user: 'funalito rodriguez', creator_user: 'jorge rueda' },
    { id: 4, description: 'Bogota-1223-2024', date_update: '14-11-2024', date_request: '14-11-2024', status: 'cerrado', resp_user: 'sebastian gonzalez', creator_user: 'james rodriguez' },
    { id: 5, description: 'Bogota-1236-2024', date_update: '9-11-2024', date_request: '9-11-2024', status: 'cerrado', resp_user: 'santiago camargo', creator_user: 'alejandro gonzalez' },
];


export const getRequestByRadicade = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
    const radicado = event.pathParameters?.radicado; 

    if (!radicado) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Número de radicado es requerido.' }),
        };
    }

    const solicitud = solicitudes.find((s) => s.description === radicado);

    if (!solicitud) {
        return {
            statusCode: 404,
            body: JSON.stringify({ error: 'Solicitud no encontrada.' }),
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify(solicitud),
    };
};
