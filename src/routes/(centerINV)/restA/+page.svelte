<script lang="ts">
	import '../../assets/css/revisionAsistentesAdmin.css';
	import { goto } from '$app/navigation';
	import { profesor } from '../../../utils/stores/ProfesorStore';
	import { estudianteP } from '../../../utils/stores/EstudianteStore';
	import type { StudentResponse } from '../../../domain/entities/student/StudentResponse';
	let student = 'No hay nombre';
	let profesorip = '';
	let estudianteid = '';
	let estudiantes = [
		{
			_id: '647d180c14eaefd31018e400',
			userName: 'asdas',
			profesor_id: '6477cb8c13ec7c201fd4d51d',
			role: 'asistente'
		},
		{
			_id: '647d183314eaefd31018e402',
			userName: 'asdas',
			profesor_id: '6477cb8c13ec7c201fd4d51d',
			role: 'asistente'
		},
		{
			_id: '647d1941aec551ce916818b7',
			userName: 'fghgvc',
			profesor_id: '6477cb8c13ec7c201fd4d51d',
			role: 'asistente'
		},
		{
			_id: '647d122b14eaefd31018e3ee',
			userName: 'carolina',
			profesor_id: '6477cb8c13ec7c201fd4d51d',
			role: 'investigador'
		}
	];
    

	profesor.subscribe((value) => {
		profesorip = value;
	});
	console.log(profesorip + '|' + '|asistente');
	const onClickStudent = async (e: Event) => {
		e.preventDefault();
		try {
			
			goto('/testA', { replaceState: true });
		} catch (error) {
			console.error('Error al crear la sesión', error);
		}
	};
</script>

<section class="contenido">
	<h2>Revisión de jovenes asistentes</h2>
    {#each estudiantes as estudiante}
	<div id="carta" on:click={onClickStudent}>
		<img src="/logo contratacion.png" alt="postilado 1" width="20px" height="20px" />
		<h6>{estudiante.userName}</h6>
	</div>
    {/each}
</section>
