import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';


export const getRadicateRequests = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const radicadoRequests = [
            { id: 1, description: 'Bogota-1234-2024', date_update: '1-11-2024', date_request: '1-11-2024', status: 'proceso', resp_user: 'Daniel Rumbo', creator_user: 'Pepito perez' },
            { id: 1, description: 'Bogota-1235-2024', date_update: '30-11-2024', date_request: '30-11-2024', status: 'proceso', resp_user: 'Daniel Rumbo', creator_user: 'Pepito perez' },
            { id: 1, description: 'Bogota-1267-2024', date_update: '28-11-2024', date_request: '28-11-2024', status: 'proceso', resp_user: 'Daniel Rumbo', creator_user: 'Pepito perez' },
            { id: 1, description: 'Bogota-1223-2024', date_update: '14-11-2024', date_request: '14-11-2024', status: 'proceso', resp_user: 'Daniel Rumbo', creator_user: 'Pepito perez' },
            { id: 1, description: 'Bogota-1236-2024', date_update: '9-11-2024', date_request: '9-11-2024', status: 'proceso', resp_user: 'Daniel Rumbo', creator_user: 'Pepito perez' },
        ];

        return {
            statusCode: 200,
            body: JSON.stringify(radicadoRequests),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Error al obtener el radicado de la solicitud',
                error: error instanceof Error ? error.message : 'Error',
            }),
        };
    }
};
