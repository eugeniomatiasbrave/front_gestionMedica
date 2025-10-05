<script>
	export let data;
	const { product } = data;

	console.log(product.data.name);
	console.log(product.data.price);
</script>

<div class="bg-gray-50 min-h-screen">
	<!-- Header de la Página -->
	<div class="bg-white border-b border-gray-200">
		<div class="container mx-auto px-6 py-6">
			<div class="flex items-center justify-between">
				<div>
					<h1 class="text-2xl font-semibold text-gray-900 mb-1">Editar Medicamento</h1>
					<p class="text-gray-600">Modificación de datos del producto farmacéutico</p>
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
						<div class="w-8 h-8 bg-orange-100 rounded flex items-center justify-center mr-3">
							<svg class="w-5 h-5 text-orange-700" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
								/>
							</svg>
						</div>
						<div>
							<h2 class="text-lg font-medium text-gray-900">Edición de Registro</h2>
							<p class="text-sm text-gray-600">ID: {product.data._id.slice(-8)}</p>
						</div>
					</div>
				</div>

				<!-- Formulario -->
				<form method="POST" enctype="multipart/form-data" class="p-6 space-y-6">
					<input type="hidden" name="id" value={product.data._id} />

					<!-- Imagen Actual del Medicamento -->
					<div class="space-y-2">
						<label for="current-image" class="block text-sm font-medium text-gray-700">
							<div class="flex items-center">
								<svg class="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
										clip-rule="evenodd"
									/>
								</svg>
								Imagen Actual
							</div>
						</label>
						<div id="current-image" class="bg-gray-50 border border-gray-200 rounded-lg p-4">
							{#each product.data.image as img}
								<img
									src={'http://localhost:8080' + img.path}
									alt={product.data.name}
									class="h-32 w-32 object-cover rounded-lg border border-gray-300 shadow-sm"
								/>
							{/each}
						</div>
					</div>

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
							value={product.data.name}
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
							value={product.data.price}
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
							required>{product.data.description}</textarea
						>
						<p class="text-xs text-gray-500">
							Incluya toda la información clínica relevante del medicamento
						</p>
					</div>

					<!-- Nueva Imagen del Medicamento -->
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
								Actualizar Imagen del Producto
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
								class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
							/>
							<p class="text-xs text-gray-500 mt-2">
								Formatos: PNG, JPG, JPEG, GIF, WebP. Máximo 5MB por imagen. Dejar vacío para
								mantener imagen actual.
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
								class="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium flex items-center"
							>
								<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								Actualizar Medicamento
							</button>
						</div>
					</div>
				</form>
			</div>

			<!-- Información Adicional -->
			<div class="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
				<div class="flex items-start">
					<svg class="w-5 h-5 text-orange-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
							clip-rule="evenodd"
						/>
					</svg>
					<div>
						<h4 class="text-sm font-medium text-orange-800 mb-1">Precaución al Editar</h4>
						<p class="text-sm text-orange-700">
							Los cambios en la información farmacológica pueden afectar la dispensación del
							medicamento. Verifique que todos los datos sean correctos antes de guardar las
							modificaciones.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
