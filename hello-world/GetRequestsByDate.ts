import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

const solicitudes = [
  { "id": 1, "description": "Bogota-1234-2024", "date_request": "2024-10-01", "status": "proceso", "created_at": "2024-10-01T08:30:00Z", "user_id": 101 },
  { "id": 2, "description": "Bogota-1235-2024", "date_request": "2024-10-15", "status": "proceso", "created_at": "2024-10-15T09:00:00Z", "user_id": 102 },
  { "id": 4, "description": "Bogota-1223-2024", "date_request": "2024-10-20", "status": "proceso", "created_at": "2024-10-20T14:00:00Z", "user_id": 104 },
  { "id": 6, "description": "Bogota-1237-2024", "date_request": "2024-10-25", "status": "proceso", "created_at": "2024-10-25T10:30:00Z", "user_id": 106 },
  { "id": 7, "description": "Bogota-1240-2024", "date_request": "2024-10-10", "status": "proceso", "created_at": "2024-10-10T13:45:00Z", "user_id": 107 },
  { "id": 9, "description": "Bogota-1244-2024", "date_request": "2024-10-30", "status": "proceso", "created_at": "2024-10-30T12:15:00Z", "user_id": 109 }
];

export async function getRequestsByDate(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  // Obtener los parámetros 'from' y 'to' de la query string
  const { from, to } = event.queryStringParameters || {};

  // Verificar que ambos parámetros estén presentes
  if (!from || !to) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Se requieren los parámetros from y to.' }),
    };
  }

  // Mostrar las fechas obtenidas en los parámetros
  console.log("Desde:", from, "Hasta:", to);

  // Convertir las fechas en formato 'DD-MM-YYYY' a objetos Date (ISO 'YYYY-MM-DD')
  const fromDate = new Date(from.split('-').reverse().join('-'));
  const toDate = new Date(to.split('-').reverse().join('-'));

  // Mostrar fechas convertidas
  console.log("Fecha desde:", fromDate);
  console.log("Fecha hasta:", toDate);

  // Filtrar las solicitudes dentro del rango de fechas
  const filteredSolicitudes = solicitudes.filter((solicitud) => {
    const solicitudDate = new Date(solicitud.date_request.split('-').reverse().join('-'));

    // Mostrar las fechas de cada solicitud para ver si la comparación es correcta
    console.log(`Solicitud ID: ${solicitud.id}, Fecha: ${solicitudDate}`);

    return solicitudDate >= fromDate && solicitudDate <= toDate;
  });

  // Mostrar solicitudes filtradas
  console.log("Solicitudes filtradas:", filteredSolicitudes);

  // Si no hay solicitudes en el rango
  if (filteredSolicitudes.length === 0) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'No se encontraron solicitudes en el rango de fechas especificado.' }),
    };
  }

  // Responder con las solicitudes filtradas
  return {
    statusCode: 200,
    body: JSON.stringify({ data: filteredSolicitudes }),
  };
}