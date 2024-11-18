import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';


export const getRadicateRequests = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const radicadoRequests = [
            { id: 1, description: 'Bogota-1234', date_update: '12-11-2024', date_request: '10-11-2024', status: 'proceso', resp_user: 'Daniel Rumbo', creator_user: 'Pepito perez' },
            { id: 1, description: 'Bogota-1234', date_update: '12-11-2024', date_request: '10-11-2024', status: 'proceso', resp_user: 'Daniel Rumbo', creator_user: 'Pepito perez' },
            { id: 1, description: 'Bogota-1234', date_update: '12-11-2024', date_request: '10-11-2024', status: 'proceso', resp_user: 'Daniel Rumbo', creator_user: 'Pepito perez' },
            { id: 1, description: 'Bogota-1234', date_update: '12-11-2024', date_request: '10-11-2024', status: 'proceso', resp_user: 'Daniel Rumbo', creator_user: 'Pepito perez' },
            { id: 1, description: 'Bogota-1234', date_update: '12-11-2024', date_request: '10-11-2024', status: 'proceso', resp_user: 'Daniel Rumbo', creator_user: 'Pepito perez' },
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
