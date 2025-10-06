const config = {
	development: {
		API_URL: 'http://localhost:8080/api',
		BASE_URL: 'http://localhost:8080'
	},
	production: {
		API_URL: 'https://backgestionmedica-production.up.railway.app/api', // Reemplaza con tu URL de Railway
		BASE_URL: 'https://backgestionmedica-production.up.railway.app'
	}
};

// Detectar el entorno
const environment = process.env.NODE_ENV || 'development';

// Exportar la configuración según el entorno
export default config[environment];

// También puedes exportar configuraciones específicas
export const API_URL = config[environment].API_URL;
export const BASE_URL = config[environment].BASE_URL;
