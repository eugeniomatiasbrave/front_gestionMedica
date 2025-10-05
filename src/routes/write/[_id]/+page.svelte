<script>
	export let data;
	const API_URL = process.env.VITE_API_URL;
	const { writingById } = data;
	const writing = writingById.data;
	const id = writingById.data._id;

	let pdfUrl = '';

	async function sendHTMLToBackend() {
		const contentDiv = document.querySelector('#pdf-content').outerHTML;
		const response = await fetch(`${API_URL}/writings/pdf`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ html: contentDiv, id: id , title: writing.title})
		});

		const result = await response.json();
		if (result.status === 'success') {
			pdfUrl = `${API_URL}${result.url}`;
			window.open(pdfUrl, '_blank');
		} else {
			console.error('Error al crear el PDF:', result.error);
		}
	}
</script>

<div class="bg-gray-50 min-h-screen">
	<!-- Header de la Página -->
	<div class="bg-white border-b border-gray-200">
		<div class="container mx-auto px-6 py-6">
			<div class="flex items-center justify-between">
				<div>
					<h1 class="text-2xl font-semibold text-gray-900 mb-1">📋 Documento Médico</h1>
					<p class="text-gray-600">Visualización y generación de PDF del reporte médico</p>
				</div>
				<div class="flex items-center space-x-4">
					<a
						href="/write"
						class="flex items-center px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors font-medium"
					>
						<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
								clip-rule="evenodd"
							/>
						</svg>
						Volver a Lista
					</a>
					<button
						on:click={sendHTMLToBackend}
						class="flex items-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 transition-colors font-medium"
					>
						<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
						Crear PDF
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Contenido Principal -->
	<div class="container mx-auto px-6 py-6">
		<div class="max-w-4xl mx-auto">
			<!-- Documento Médico -->
			<div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
				<!-- Header del Documento -->
				<div class="bg-gray-50 border-b border-gray-200 px-6 py-4">
					<div class="flex items-center justify-between">
						<div>
							<h3 class="text-lg font-medium text-gray-900">Reporte Médico</h3>
							<div class="text-sm text-gray-500 mt-1">
								<span class="font-mono">ID: {id.slice(-8)}</span>
								{#if writing.date}
									<span class="mx-2">•</span>
									<span>Fecha: {writing.date}</span>
								{/if}
							</div>
						</div>
						<div class="flex items-center space-x-2">
							<div class="w-3 h-3 bg-green-500 rounded-full"></div>
							<span class="text-sm text-gray-600">Documento activo</span>
						</div>
					</div>
				</div>

				<!-- Contenido del Documento -->
				<div class="p-8">
					<div id="pdf-content" class="max-w-none">
						<!-- Título del Documento -->
						<div class="text-center mb-8">
							<h1 class="text-3xl font-bold text-gray-900 mb-2">{writing.title}</h1>
							<div class="w-24 h-1 bg-slate-600 mx-auto rounded"></div>
						</div>

						<!-- Información del Documento -->
						{#if writing.date}
							<div class="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
								<div class="flex items-center">
									<svg class="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
											clip-rule="evenodd"
										/>
									</svg>
									<div>
										<div class="text-sm font-medium text-gray-900">Fecha de Creación</div>
										<div class="text-sm text-gray-600">{writing.date}</div>
									</div>
								</div>
							</div>
						{/if}

						<!-- Contenido Principal -->
						<div class="prose prose-lg max-w-none">
							<div class="text-gray-900 leading-relaxed whitespace-pre-wrap text-lg">
								{writing.text}
							</div>
						</div>

						<!-- Footer del Documento -->
						<div class="mt-12 pt-6 border-t border-gray-200">
							<div class="text-center text-sm text-gray-500">
								<p>Documento generado el {new Date().toLocaleDateString('es-ES')}</p>
								<p class="mt-1">ID del documento: {id}</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Acciones del Documento -->
				<div class="bg-gray-50 border-t border-gray-200 px-6 py-4">
					<div class="flex items-center justify-between">
						<div class="text-sm text-gray-600">
							Última modificación: {writing.date || 'No disponible'}
						</div>
						<div class="flex items-center space-x-3">
							<a
								href={`/write/${id}/edit`}
								class="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
							>
								<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path
										d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
									/>
								</svg>
								Editar Documento
							</a>
							<button
								on:click={sendHTMLToBackend}
								class="inline-flex items-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 transition-colors text-sm font-medium"
							>
								<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
								Descargar PDF
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	#pdf-content {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		padding: 1rem;
		border: 1px solid #fffefe;
		border-radius: 5px;
		background-color: #fffbfb;
	}
	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	p {
		font-size: 1.2rem;
	}

	button {
		width: 30%;
		margin: 5px;
		padding: 0.5rem 1rem;
		background-color: #ff0022;
		color: rgb(255, 255, 255);
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}
</style>
