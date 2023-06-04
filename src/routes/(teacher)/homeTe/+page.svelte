<script lang="ts">
    import '../../assets/css/InicioPorfe.css'
    import {goto} from '$app/navigation'
    const onClieckJI=(e:Event)=>{
        goto('/studentI',{replaceState:true})
    }
    const onClieckA= (e:Event)=>{
        goto('/studentA', {replaceState:true})
    }
    const onClieckAD=(e:Event)=>{
        goto('/espera',{replaceState:true})
    }
</script>
<body id="sectionHT">
    <div class="RevisionH">
        <div class="botonH">
            <a href="/studentI">
                <img src="revision jovenes investigadores.jpg" alt="revision jovenes asistentes">
                <button class="BotonRevH" on:click={onClieckJI}>Entrega jovenes investigadores</button>
            </a>
        </div>
        <div class="botonH">
            <a href='/studentA'>
                <img src="revision asistentes.jpeg" alt="revision asistentes"> 
                <button class="BotonRevH" on:click={onClieckA}>Entrega Asistentes</button>
            </a>
        </div>
        <div class="botonH">
            <a href="/espera">
                <img src="/Aprobado y denegado.jpg" alt="revision asistentes"> 
                <button class="BotonRevH" on:click={onClieckAD}> Lista de Espera</button>
            </a>
        </div>
    </div>
</body>