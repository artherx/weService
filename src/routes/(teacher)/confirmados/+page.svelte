<script lang="ts">
	import '../../assets/css/ventanaC.css';
	let confirmados = [
		{
			_id: '647d48f25607f965ce16f7e1',
			studentId: '647d47355607f965ce16f7d7',
			studentName: 'gutierreas',
			profesorID: '6477cb8c13ec7c201fd4d51d',
			title: 'CV-JUANGUIZA-SPANISH.pdf',
			tipo: 'Formato de Seguridad Social',
			estado: 'denegado'
		},
		{
			_id: '647d48de5607f965ce16f7df',
			studentId: '647d47355607f965ce16f7d7',
			studentName: 'gutierreas',
			profesorID: '6477cb8c13ec7c201fd4d51d',
			title: 'Atributos jardinerito.pdf',
			tipo: 'Certificado de Antescedentes Policia Nacional',
			estado: 'espera'
		},
		{
			_id: '647d48ac5607f965ce16f7dd',
			studentId: '647d47355607f965ce16f7d7',
			studentName: 'gutierreas',
			profesorID: '6477cb8c13ec7c201fd4d51d',
			title: 'fase div 5-8.pdf',
			tipo: 'Tarjeta profesional',
			estado: 'espera'
		},
		{
			_id: '647d47545607f965ce16f7db',
			studentId: '647d47355607f965ce16f7d7',
			studentName: 'gutierreas',
			profesorID: '6477cb8c13ec7c201fd4d51d',
			title: 'DISEÑO 2 contenido curso 2023-1 semana 1.pdf',
			tipo: 'GA-GH-F-4 - Solicitud Orden y/o Contrato de Prestación de Servicios - V12',
			estado: 'confirmado'
		},
		{
			_id: '647d47465607f965ce16f7d9',
			studentId: '647d47355607f965ce16f7d7',
			studentName: 'gutierreas',
			profesorID: '6477cb8c13ec7c201fd4d51d',
			title: 'Certificado+electoral.pdf',
			tipo: 'Diploma de grado',
			estado: 'espera'
		},
		{
			_id: '647d47235607f965ce16f7d5',
			studentId: '647d46c75607f965ce16f7c9',
			studentName: 'ramiroi',
			profesorID: '6477cb8c13ec7c201fd4d51d',
			title: 'Proyecto libreriaa.pdf',
			tipo: 'pantallazo requisición univex',
			estado: 'denegado'
		},
		{
			id: '647d1947aec551ce916818b9',
			studentId: '647d1941aec551ce916818b7',
			studentName: 'fghgvc',
			profesorID: '6477cb8c13ec7c201fd4d51d',
			title: 'Certificado+electoral.pdf',
			tipo: 'formato de justificación',
			estado: 'confirmado'
		},
		{
			_id: '647d46cc5607f965ce16f7cb',
			studentId: '647d46c75607f965ce16f7c9',
			studentName: 'ramiroi',
			profesorID: '6477cb8c13ec7c201fd4d51d',
			title: 'fase div 8-8.pdf',
			tipo: 'Hoja de vida ',
			estado: 'denegado'
		},
		{
			_id: '647d46da5607f965ce16f7cd',
			studentId: '647d46c75607f965ce16f7c9',
			studentName: 'ramiroi',
			profesorID: '6477cb8c13ec7c201fd4d51d',
			title: 'fase div 8-8.pdf',
			tipo: 'Certificado de Antescedentes Policia Nacional',
			estado: 'espera'
		},
		{
			_id: '647d46e45607f965ce16f7cf',
			studentId: '647d46c75607f965ce16f7c9',
			studentName: 'ramiroi',
			profesorID: '6477cb8c13ec7c201fd4d51d',
			title: 'METODOS MATEMATICOS 2019-2.pdf',
			tipo: 'declaración de no inhabilidades, incompatibilidades ',
			estado: 'espera'
		},
		{
			_id: '647d46ec5607f965ce16f7d1',
			studentId: '647d46c75607f965ce16f7c9',
			studentName: 'ramiroi',
			profesorID: '6477cb8c13ec7c201fd4d51d',
			title: 'fase div 4-8.pdf',
			tipo: 'declaración de no inhabilidades, incompatibilidades ',
			estado: 'confirmado'
		},
		{
			_id: '647d47145607f965ce16f7d3',
			studentId: '647d46c75607f965ce16f7c9',
			studentName: 'ramiroi',
			profesorID: '6477cb8c13ec7c201fd4d51d',
			title: 'organizing page content.pdf',
			tipo: 'declaración de no inhabilidades, incompatibilidades ',
			estado: 'espera'
		}
	];
    let apunta = 'confirmado';
	let newvo = confirmados.filter((objeto) => objeto.estado === apunta);
</script>

<section id="confirmados">
	<div class="superior3">
		<div id="titulo3">
			<a href="/espera"><h3>espera</h3></a>
		</div>
		<div />
		<div id="titulo-confirmar3">
			<a href="/confirmados"><h3>confirmados</h3></a>
		</div>
		<div />
		<div id="titulo3">
			<a href="/denegados"><h3>denegados</h3></a>
		</div>
	</div>
	{#each newvo as cat}
		<div id="carta3">
			<img src="/logo contratacion.png" alt="postilado 1" width="20px" height="20px" />
			<h6>{cat.studentName+" | "+ cat.title+" | "+cat.tipo}</h6>
		</div>
	{/each}
</section>
