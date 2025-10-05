<script>
	export let form;
	console.log(form);
</script>

<div class="bg-gray-50 min-h-screen">
	<!-- Header de la Página -->
	<div class="bg-white border-b border-gray-200">
		<div class="container mx-auto px-6 py-6">
			<div class="flex items-center justify-between">
				<div>
					<h1 class="text-2xl font-semibold text-gray-900 mb-1">Nuevo Documento Médico</h1>
					<p class="text-gray-600">
						Registro de fichas técnicas, prescripciones y reportes médicos
					</p>
				</div>
				<a
					href="/write"
					class="flex items-center px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors"
				>
					<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
							clip-rule="evenodd"
						/>
					</svg>
					Volver a Documentos
				</a>
			</div>
		</div>
	</div>

	<!-- Contenido Principal -->
	<div class="container mx-auto px-6 py-8">
		<div class="max-w-3xl mx-auto">
			<div class="bg-white border border-gray-200 rounded-lg shadow-sm">
				<!-- Header del Formulario -->
				<div class="bg-gray-50 border-b border-gray-200 px-6 py-4">
					<div class="flex items-center">
						<div class="w-8 h-8 bg-blue-100 rounded flex items-center justify-center mr-3">
							<svg class="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<h2 class="text-lg font-medium text-gray-900">Formulario de Documento Médico</h2>
							<p class="text-sm text-gray-600">Complete todos los campos requeridos</p>
						</div>
					</div>
				</div>

				<!-- Formulario -->
				<form method="POST" enctype="multipart/form-data" class="p-6 space-y-6">
					<!-- Título del Documento -->
					<div class="space-y-2">
						<label for="title" class="block text-sm font-medium text-gray-700">
							<div class="flex items-center">
								<svg class="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
										clip-rule="evenodd"
									/>
								</svg>
								Título del Documento
								<span class="text-red-500 ml-1">*</span>
							</div>
						</label>
						<input
							type="text"
							name="title"
							id="title"
							value={form?.title ?? ''}
							placeholder="ej. 'Protocolo de Tratamiento de Hipertensión', 'Reporte Mensual de Stock', 'Prescripción de Paciente'"
							class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
							required
						/>
						<p class="text-xs text-gray-500">
							Proporcione un título descriptivo para el documento médico
						</p>
					</div>

					<!-- Contenido Médico -->
					<div class="space-y-2">
						<label for="text" class="block text-sm font-medium text-gray-700">
							<div class="flex items-center">
								<svg class="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
										clip-rule="evenodd"
									/>
								</svg>
								Contenido Médico
								<span class="text-red-500 ml-1">*</span>
							</div>
						</label>
						<textarea
							name="text"
							id="text"
							rows="8"
							placeholder="Escriba su documento médico, detalles de prescripción, instrucciones de tratamiento, información técnica o protocolo médico aquí..."
							class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
							required>{form?.text ?? ''}</textarea
						>
						<p class="text-xs text-gray-500">
							Incluya toda la información médica relevante, diagnósticos, tratamientos, posología,
							contraindicaciones, etc.
						</p>
					</div>

					<!-- Botones de Acción -->
					<div class="border-t border-gray-200 pt-6">
						<div class="flex items-center justify-end space-x-4">
							<a
								href="/write"
								class="px-6 py-2 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors font-medium"
							>
								Cancelar
							</a>
							<button
								type="submit"
								class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center"
							>
								<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								Guardar Documento Médico
							</button>
						</div>
					</div>
				</form>
			</div>

			<!-- Información Adicional -->
			<div class="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
				<div class="flex items-start">
					<svg class="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
							clip-rule="evenodd"
						/>
					</svg>
					<div>
						<h4 class="text-sm font-medium text-blue-800 mb-1">Información Importante</h4>
						<p class="text-sm text-blue-700">
							Todos los documentos médicos deben cumplir con las normativas sanitarias vigentes.
							Verifique que la información clínica sea precisa y completa antes de guardar el
							documento. Los documentos podrán ser exportados a PDF para uso oficial.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
