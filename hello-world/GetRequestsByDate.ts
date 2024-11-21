import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

const solicitudes = [
  { "id": 1, "description": "Bogota-1234-2024", "date_request": "01-10-2024", "status": "proceso", "created_at": "2024-10-01", "user_id": 101 },
  { "id": 2, "description": "Bogota-1235-2024", "date_request": "15-10-2024", "status": "proceso", "created_at": "2024-10-", "user_id": 102 },
  { "id": 7, "description": "Bogota-1240-2024", "date_request": "5-11-2024", "status": "proceso", "created_at": "2024-10-10", "user_id": 107 },
  { "id": 4, "description": "Bogota-1223-2024", "date_request": "13-10-2024", "status": "proceso", "created_at": "2024-10-20", "user_id": 104 },
  { "id": 6, "description": "Bogota-1237-2024", "date_request": "18-10-2024", "status": "proceso", "created_at": "2024-10-25", "user_id": 106 },
  { "id": 7, "description": "Bogota-1240-2024", "date_request": "10-11-2024", "status": "proceso", "created_at": "2024-10-10", "user_id": 107 },
  { "id": 9, "description": "Bogota-1244-2024", "date_request": "30-10-2024", "status": "proceso", "created_at": "2024-10-30", "user_id": 109 }
];

export async function getRequestsByDate(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const { from, to } = event.queryStringParameters || {};

  if (!from || !to) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Se requieren los parámetros from y to.' }),
    };
  }

  // Convertir las fechas al formato YYYY-MM-DD para comparación
  const fromDate = from.split('-').reverse().join('-'); // Convertir de DD-MM-YYYY a YYYY-MM-DD
  const toDate = to.split('-').reverse().join('-'); // Convertir de DD-MM-YYYY a YYYY-MM-DD

  const filteredSolicitudes = solicitudes.filter((solicitud) => {
    const solicitudDate = solicitud.date_request.split('-').reverse().join('-'); // Convertir la fecha de la solicitud

    console.log(`Solicitud ID: ${solicitud.id}, Fecha (formateada): ${solicitudDate}`);

    // Comparar como cadenas en formato YYYY-MM-DD
    return solicitudDate >= fromDate && solicitudDate <= toDate;
  });

  if (filteredSolicitudes.length === 0) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'No se encontraron solicitudes en el rango de fechas especificado.' }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ data: filteredSolicitudes }),
  };
}