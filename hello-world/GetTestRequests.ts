import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';


export const getTestRequests = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const testRequests = [
            { id: 1, description: 'Solicitud de test' },
            { id: 2, description: 'Solicitud de test 2' },
            { id: 3, description: 'Solicitud de prueba 3' },
        ];

        return {
            statusCode: 200,
            body: JSON.stringify(testRequests),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Error al obtener las solicitudes de prueba',
                error: error instanceof Error ? error.message : 'Error desconocido',
            }),
        };
    }
};
