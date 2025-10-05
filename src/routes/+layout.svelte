<script>
	import '../app.css';
	import { page } from '$app/stores';

	$: currentPath = $page.url.pathname;
</script>

<div class="min-h-screen bg-gray-50">
	<!-- Barra de Navegación Principal -->
	<nav class="bg-white border-b border-gray-200 shadow-sm">
		<div class="container mx-auto px-6">
			<div class="flex items-center justify-between h-16">
				<!-- Logo y Título -->
				<div class="flex items-center">
					<a href="/" class="flex items-center">
						<div class="w-8 h-8 bg-blue-700 rounded-md flex items-center justify-center mr-3">
							<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<div class="text-lg font-semibold text-gray-900">SGM</div>
							<div class="text-xs text-gray-600 -mt-1">v2.1.3</div>
						</div>
					</a>
				</div>

				<!-- Menú de Navegación -->
				<div class="flex items-center space-x-1">
					<a
						href="/"
						class="flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors {currentPath ===
						'/'
							? 'bg-blue-100 text-blue-700'
							: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}"
					>
						<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
							/>
						</svg>
						Panel
					</a>

					<a
						href="/products"
						class="flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors {currentPath.startsWith(
							'/products'
						)
							? 'bg-blue-100 text-blue-700'
							: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}"
					>
						<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
							/>
						</svg>
						Inventario
					</a>

					<a
						href="/write"
						class="flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors {currentPath.startsWith(
							'/write'
						)
							? 'bg-blue-100 text-blue-700'
							: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}"
					>
						<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path
								d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
							/>
						</svg>
						Documentos
					</a>
				</div>

				<!-- Información de Usuario/Sesión -->
				<div class="flex items-center space-x-3">
					<div class="text-xs text-gray-500">
						<div class="font-medium text-gray-700">Usuario: Admin</div>
						<div>Sesión: Activa</div>
					</div>
					<div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
						<svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<!-- Breadcrumb (Ruta de Navegación) -->
	{#if currentPath !== '/'}
		<div class="bg-gray-100 border-b border-gray-200">
			<div class="container mx-auto px-6 py-2">
				<nav class="flex items-center space-x-2 text-sm">
					<a href="/" class="text-blue-600 hover:text-blue-800">Panel Principal</a>
					<svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
					{#if currentPath.startsWith('/products')}
						<span class="text-gray-600">Gestión de Inventario</span>
					{:else if currentPath.startsWith('/write')}
						<span class="text-gray-600">Generación de Documentos</span>
					{:else}
						<span class="text-gray-600">Módulo Actual</span>
					{/if}
				</nav>
			</div>
		</div>
	{/if}

	<!-- Contenido Principal -->
	<main class="flex-1">
		<slot />
	</main>

	<!-- Barra de Estado -->
	<div class="bg-white border-t border-gray-200">
		<div class="container mx-auto px-6 py-2">
			<div class="flex justify-between items-center text-xs text-gray-500">
				<div class="flex items-center space-x-4">
					<div class="flex items-center">
						<div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
						<span>Sistema Operativo</span>
					</div>
					<div>Base de Datos: Conectada</div>
					<div>Último Backup: Hoy 03:00</div>
				</div>
				<div class="flex items-center space-x-4">
					<div>Servidor: Activo</div>
					<div>Usuarios Conectados: 3</div>
					<div class="text-gray-400">|</div>
					<div>© 2025 Sistema de Gestión Médica</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* Estilos adicionales para el layout médico */
	:global(body) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
			sans-serif;
	}

	/* Indicador de página activa más sutil */
	:global(.router-link-active) {
		background-color: #dbeafe;
		color: #1d4ed8;
	}
</style>
