<div class="min-h-screen bg-gray-50">
	<!-- Header Sobrio -->
	<header class="bg-white border-b border-gray-200 shadow-sm">
		<div class="container mx-auto px-6 py-4">
			<div class="flex items-center">
				<div class="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center mr-4">
					<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div>
					<h1 class="text-2xl font-semibold text-gray-900">Sistema de Gestión Médica</h1>
					<p class="text-sm text-gray-600">Módulo de Administración Farmacéutica</p>
				</div>
			</div>
		</div>
	</header>

	<!-- Panel Principal -->
	<main class="container mx-auto px-6 py-8">
		<div class="mb-8">
			<h2 class="text-xl font-semibold text-gray-800 mb-2">Panel de Control</h2>
			<p class="text-gray-600">Seleccione el módulo de trabajo:</p>
		</div>

		<!-- Módulos de Trabajo -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl">
			<!-- Gestión de Inventario -->
			<div class="bg-white border border-gray-200 rounded-lg">
				<div class="p-6">
					<div class="flex items-start mb-4">
						<div class="w-8 h-8 bg-blue-100 rounded flex items-center justify-center mr-3 mt-1">
							<svg class="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
								/>
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-lg font-medium text-gray-900 mb-2">Inventario Farmacéutico</h3>
							<p class="text-gray-600 text-sm mb-4">
								Administración de productos, control de stock, fechas de vencimiento y alertas.
							</p>
						</div>
					</div>

					<div class="border-t border-gray-100 pt-4">
						<div class="grid grid-cols-3 gap-4 mb-4 text-center">
							<div class="text-xs text-gray-500">
								<div class="font-medium text-gray-700">Stock</div>
								<div>Control</div>
							</div>
							<div class="text-xs text-gray-500">
								<div class="font-medium text-gray-700">Alertas</div>
								<div>Vencimientos</div>
							</div>
							<div class="text-xs text-gray-500">
								<div class="font-medium text-gray-700">Reportes</div>
								<div>Inventario</div>
							</div>
						</div>

						<a
							href="/products"
							class="w-full flex items-center justify-center px-4 py-2 border border-blue-300 text-blue-700 bg-blue-50 rounded hover:bg-blue-100 transition-colors text-sm font-medium"
						>
							<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clip-rule="evenodd"
								/>
							</svg>
							Acceder al Módulo
						</a>
					</div>
				</div>
			</div>

			<!-- Documentación -->
			<div class="bg-white border border-gray-200 rounded-lg">
				<div class="p-6">
					<div class="flex items-start mb-4">
						<div class="w-8 h-8 bg-green-100 rounded flex items-center justify-center mr-3 mt-1">
							<svg class="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-lg font-medium text-gray-900 mb-2">Generación de Documentos</h3>
							<p class="text-gray-600 text-sm mb-4">
								Creación de fichas técnicas, prescripciones y reportes clínicos en PDF/Excel.
							</p>
						</div>
					</div>

					<div class="border-t border-gray-100 pt-4">
						<div class="grid grid-cols-3 gap-4 mb-4 text-center">
							<div class="text-xs text-gray-500">
								<div class="font-medium text-gray-700">Fichas</div>
								<div>Técnicas</div>
							</div>
							<div class="text-xs text-gray-500">
								<div class="font-medium text-gray-700">Reportes</div>
								<div>Clínicos</div>
							</div>
							<div class="text-xs text-gray-500">
								<div class="font-medium text-gray-700">Formatos</div>
								<div>PDF/Excel</div>
							</div>
						</div>

						<a
							href="/write"
							class="w-full flex items-center justify-center px-4 py-2 border border-green-300 text-green-700 bg-green-50 rounded hover:bg-green-100 transition-colors text-sm font-medium"
						>
							<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
								/>
							</svg>
							Acceder al Módulo
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Información del Sistema -->
		<div class="mt-12 bg-white border border-gray-200 rounded-lg">
			<div class="px-6 py-4 border-b border-gray-200">
				<h3 class="text-lg font-medium text-gray-900">Información del Sistema</h3>
			</div>
			<div class="p-6">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
					<div class="flex items-start">
						<div class="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mr-3 mt-0.5">
							<svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<div class="font-medium text-gray-900 mb-1">Seguridad</div>
							<div class="text-gray-600">Cumple normativas DIGEMID y estándares GMP</div>
						</div>
					</div>

					<div class="flex items-start">
						<div class="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mr-3 mt-0.5">
							<svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<div class="font-medium text-gray-900 mb-1">Respaldo</div>
							<div class="text-gray-600">Backup automático cada 24 horas</div>
						</div>
					</div>

					<div class="flex items-start">
						<div class="w-6 h-6 bg-gray-100 rounded flex items-center justify-center mr-3 mt-0.5">
							<svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<div class="font-medium text-gray-900 mb-1">Soporte</div>
							<div class="text-gray-600">Mesa de ayuda técnica 24/7</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>

	<!-- Footer Minimalista -->
	<footer class="mt-16 border-t border-gray-200 bg-white">
		<div class="container mx-auto px-6 py-4">
			<div class="flex justify-between items-center text-sm text-gray-500">
				<div>Sistema de Gestión Médica v2.1.3</div>
				<div>© 2025 - Uso Profesional Autorizado</div>
			</div>
		</div>
	</footer>
</div>
