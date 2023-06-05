<script lang="ts">
	import '../../assets/css/revisionJovenInvesAdmin.css';
	import { goto } from '$app/navigation';
	import { estudianteP } from '../../../utils/stores/EstudianteStore';
	let invest = [
		{
			_id: '647ca9de0cb6c86bed7995a1',
			userName: 'hola',
			profesor_id: '6477cb8c13ec7c201fd4d51d',
			role: 'investigador'
		},
		{
			_id: '647cd5b57fc035a410a20291',
			userName: 'carlos',
			profesor_id: '6477cb8c13ec7c201fd4d51d',
			role: 'investigador'
		},
		{
			_id: '647d113714eaefd31018e3ea',
			userName: 'carlos',
			profesor_id: '6477cb8c13ec7c201fd4d51d',
			role: 'investigador'
		},
		{
			_id: '647d122b14eaefd31018e3ee',
			userName: 'carolina',
			profesor_id: '6477cb8c13ec7c201fd4d51d',
			role: 'investigador'
		},
		{
			_id: '647d13fc14eaefd31018e3f1',
			userName: 'carton',
			profesor_id: '6477cb8c13ec7c201fd4d51d',
			role: 'investigador'
		}
	];
	const onClickStudent = (e: Event, obt: any) => {
		e.preventDefault();
        estudianteP.set(obt);
        console.log(obt); 
		goto('/testI', { replaceState: true });
	};
</script>

<section class="contenido">
	<h2>Revisión de jovenes investigador</h2>
    {#each invest as cat}
	<div id="carta" on:click={(e) => onClickStudent(e, cat._id)}>
		<img src="/logo contratacion.png" alt="postilado 1" width="20px" height="20px" />
		<h6>{cat.userName}</h6>
	</div>
    {/each}
</section>
