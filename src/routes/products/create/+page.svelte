<script lang="ts">
	export let form;
	console.log(form);
</script>

<div class="bg-gray-50 min-h-screen">
	<!-- Header de la Página -->
	<div class="bg-white border-b border-gray-200">
		<div class="container mx-auto px-6 py-6">
			<div class="flex items-center justify-between">
				<div>
					<h1 class="text-2xl font-semibold text-gray-900 mb-1">Registro de Nuevo Medicamento</h1>
					<p class="text-gray-600">Ingreso de producto farmacéutico al inventario</p>
				</div>
				<a
					href="/products"
					class="flex items-center px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors"
				>
					<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
							clip-rule="evenodd"
						/>
					</svg>
					Volver al Inventario
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
									d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<h2 class="text-lg font-medium text-gray-900">Formulario de Registro</h2>
							<p class="text-sm text-gray-600">Complete todos los campos requeridos</p>
						</div>
					</div>
				</div>

				<!-- Formulario -->
				<form method="POST" enctype="multipart/form-data" class="p-6 space-y-6">
					<!-- Nombre del Medicamento -->
					<div class="space-y-2">
						<label for="name" class="block text-sm font-medium text-gray-700">
							<div class="flex items-center">
								<svg class="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
										clip-rule="evenodd"
									/>
								</svg>
								Nombre del Medicamento
								<span class="text-red-500 ml-1">*</span>
							</div>
						</label>
						<input
							type="text"
							name="name"
							id="name"
							value={form?.name ?? ''}
							placeholder="ej. Paracetamol 500mg, Amoxicilina 250mg"
							class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
							required
						/>
						<p class="text-xs text-gray-500">Incluya el principio activo y la concentración</p>
					</div>

					<!-- Precio -->
					<div class="space-y-2">
						<label for="price" class="block text-sm font-medium text-gray-700">
							<div class="flex items-center">
								<svg class="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
										clip-rule="evenodd"
									/>
								</svg>
								Precio por Unidad (S/)
								<span class="text-red-500 ml-1">*</span>
							</div>
						</label>
						<input
							type="number"
							name="price"
							id="price"
							value={form?.price ?? ''}
							step="0.01"
							min="0"
							placeholder="0.00"
							class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
							required
						/>
						<p class="text-xs text-gray-500">Precio de venta al público</p>
					</div>

					<!-- Información Médica -->
					<div class="space-y-2">
						<label for="description" class="block text-sm font-medium text-gray-700">
							<div class="flex items-center">
								<svg class="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
										clip-rule="evenodd"
									/>
								</svg>
								Información Farmacológica
								<span class="text-red-500 ml-1">*</span>
							</div>
						</label>
						<textarea
							name="description"
							id="description"
							rows="6"
							placeholder="Principio activo, indicaciones terapéuticas, posología, contraindicaciones, efectos adversos, condiciones de almacenamiento..."
							class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
							required>{form?.description ?? ''}</textarea
						>
						<p class="text-xs text-gray-500">
							Incluya toda la información clínica relevante del medicamento
						</p>
					</div>

					<!-- Imagen del Medicamento -->
					<div class="space-y-2">
						<label for="image" class="block text-sm font-medium text-gray-700">
							<div class="flex items-center">
								<svg class="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
										clip-rule="evenodd"
									/>
								</svg>
								Imagen del Producto
							</div>
						</label>
						<div
							class="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors"
						>
							<input
								type="file"
								accept="image/png,image/jpg,image/jpeg,image/gif,image/webp"
								name="image"
								id="image"
								multiple
								class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
							/>
							<p class="text-xs text-gray-500 mt-2">
								Formatos: PNG, JPG, JPEG, GIF, WebP. Máximo 5MB por imagen.
							</p>
						</div>
					</div>

					<!-- Botones de Acción -->
					<div class="border-t border-gray-200 pt-6">
						<div class="flex items-center justify-end space-x-4">
							<a
								href="/products"
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
								Registrar Medicamento
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
							Todos los medicamentos registrados deben cumplir con las normativas sanitarias
							vigentes. Verifique que la información farmacológica sea precisa y completa antes de
							registrar el producto.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
