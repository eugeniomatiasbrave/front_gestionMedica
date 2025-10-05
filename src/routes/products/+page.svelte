<script>
	export let data;
	const Products = data.products.payload;
	console.log(Products);

	// Variable reactiva para la búsqueda
	let searchTerm = '';

	// Función reactiva para filtrar productos
	$: filteredProducts = Products.filter((product) =>
		product.name.toLowerCase().includes(searchTerm.toLowerCase())
	);
</script>

<div class="bg-gray-50 min-h-screen">
	<!-- Header de la Página -->
	<div class="bg-white border-b border-gray-200">
		<div class="container mx-auto px-6 py-6">
			<div class="flex items-center justify-between">
				<div>
					<h1 class="text-2xl font-semibold text-gray-900 mb-1">
						Gestión de Inventario Farmacéutico
					</h1>
					<p class="text-gray-600">Control y administración de medicamentos</p>
				</div>
				<div class="flex items-center space-x-4">
					<div class="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
						<div class="text-sm text-gray-600">Total de Productos</div>
						<div class="text-2xl font-semibold text-gray-900">
							{Products.length}
						</div>
					</div>
					<a
						href="/products/create"
						class="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
					>
						<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
								clip-rule="evenodd"
							/>
						</svg>
						Nuevo Medicamento
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Contenido Principal -->
	<div class="container mx-auto px-6 py-6">
		{#if Products.length > 0}
			<!-- Tabla de Medicamentos -->
			<div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
				<!-- Header de la Tabla con Buscador -->
				<div class="bg-gray-50 border-b border-gray-200 px-6 py-4">
					<div class="flex items-center justify-between mb-4">
						<h3 class="text-lg font-medium text-gray-900">Registro de Medicamentos</h3>
						<div class="text-sm text-gray-500">
							Mostrando {filteredProducts.length} de {Products.length} productos
						</div>
					</div>

					<!-- Barra de Búsqueda -->
					<div class="relative">
						<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<input
							type="text"
							placeholder="Buscar medicamento por nombre..."
							bind:value={searchTerm}
							class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
						/>
						{#if searchTerm}
							<button
								on:click={() => (searchTerm = '')}
								class="absolute inset-y-0 right-0 pr-3 flex items-center"
							>
								<svg
									class="w-5 h-5 text-gray-400 hover:text-gray-600"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						{/if}
					</div>
				</div>

				<!-- Tabla -->
				{#if filteredProducts.length > 0}
					<div class="overflow-x-auto">
						<table class="min-w-full divide-y divide-gray-200">
							<thead class="bg-gray-50">
								<tr>
									<th
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										<div class="flex items-center">
											<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
												<path
													fill-rule="evenodd"
													d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
													clip-rule="evenodd"
												/>
											</svg>
											Imagen
										</div>
									</th>
									<th
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										<div class="flex items-center">
											<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
												<path
													fill-rule="evenodd"
													d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
													clip-rule="evenodd"
												/>
											</svg>
											Producto
										</div>
									</th>
									<th
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										<div class="flex items-center">
											<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
												<path
													d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
												/>
												<path
													fill-rule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
													clip-rule="evenodd"
												/>
											</svg>
											Precio
										</div>
									</th>
									<th
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										<div class="flex items-center">
											<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
												<path
													fill-rule="evenodd"
													d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
													clip-rule="evenodd"
												/>
											</svg>
											Información Médica
										</div>
									</th>
									<th
										class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Acciones
									</th>
								</tr>
							</thead>
							<tbody class="bg-white divide-y divide-gray-200">
								{#each filteredProducts as p (p._id)}
									<tr class="hover:bg-gray-50 transition-colors">
										<td class="px-6 py-4 whitespace-nowrap">
											{#each p.image as img}
												<div class="flex-shrink-0 h-16 w-16">
													<img
														class="h-16 w-16 rounded-lg object-cover border border-gray-200"
														src={'http://localhost:8080' + img.path}
														alt={p.name}
													/>
												</div>
											{/each}
										</td>
										<td class="px-6 py-4">
											<div class="text-sm font-medium text-gray-900">{p.name}</div>
											<div class="text-sm text-gray-500">
												<span class="font-mono">ID: {p._id.slice(-8)}</span>
											</div>
										</td>
										<td class="px-6 py-4 whitespace-nowrap">
											<div
												class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
											>
												S/ {p.price}
											</div>
										</td>
										<td class="px-6 py-4">
											<div class="text-sm text-gray-900 max-w-xs">
												<div class="line-clamp-2">{p.description}</div>
												{#if p.description.length > 100}
													<button class="text-blue-600 hover:text-blue-800 text-xs mt-1">
														Ver más...
													</button>
												{/if}
											</div>
										</td>
										<td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
											<div class="flex items-center justify-center space-x-2">
												<a
													href={`/products/${p._id}/edit`}
													class="inline-flex items-center px-3 py-1 border border-gray-300 text-gray-700 bg-white rounded-md hover:bg-gray-50 transition-colors text-xs"
												>
													<svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
														<path
															d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
														/>
													</svg>
													Editar
												</a>
												<form method="POST" action={`/products/${p._id}/delete`} class="inline">
													<input type="hidden" name="pid" value={p._id} />
													<button
														type="submit"
														class="inline-flex items-center px-3 py-1 border border-red-300 text-red-700 bg-red-50 rounded-md hover:bg-red-100 transition-colors text-xs"
														onclick="return confirm('¿Está seguro de eliminar {p.name}? Esta acción no se puede deshacer.')"
													>
														<svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
															<path
																fill-rule="evenodd"
																d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
																clip-rule="evenodd"
															/>
														</svg>
														Eliminar
													</button>
												</form>
											</div>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				{:else}
					<!-- Estado de búsqueda sin resultados -->
					<div class="text-center py-12">
						<div
							class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
						>
							<svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<h3 class="text-lg font-medium text-gray-900 mb-2">No se encontraron medicamentos</h3>
						<p class="text-gray-600 mb-4">
							No hay medicamentos que coincidan con "<span class="font-medium">{searchTerm}</span>"
						</p>
						<button
							on:click={() => (searchTerm = '')}
							class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
						>
							Limpiar búsqueda
						</button>
					</div>
				{/if}
			</div>
		{:else}
			<!-- Estado Vacío -->
			<div class="bg-white border border-gray-200 rounded-lg">
				<div class="text-center py-16">
					<div
						class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
					>
						<svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<h3 class="text-lg font-medium text-gray-900 mb-2">No hay medicamentos registrados</h3>
					<p class="text-gray-600 mb-6">
						Comience agregando el primer medicamento al inventario farmacéutico
					</p>
					<a
						href="/products/create"
						class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
					>
						<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
								clip-rule="evenodd"
							/>
						</svg>
						Agregar Primer Medicamento
					</a>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
