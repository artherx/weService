<script lang="ts">
    import '../../assets/css/InicioAdmin.css'
    import {goto} from '$app/navigation'
    const onClieckJI=(e:Event)=>{
        goto('/studentI')
    }
    const onClieckA= (e:Event)=>{
        goto('/studentA')
    }
</script>
<section>
    <div class="Revision">
        <div class="boton">
            <a href="/studentI">
                <img src="revision jovenes investigadores.jpg" alt="revision jovenes asistentes">
                <button class="BotonRev" on:click={onClieckJI}><a href="EntregaJovenes.html">Entrega jovenes investigadores (prof)</a> </button>
            </a>
        </div>
        <div class="boton">
            <a href='/studentA'>
                <img src="revision asistentes.jpeg" alt="revision asistentes"> 
                <button class="BotonRev" on:click={onClieckA}> <a href="EntregaAsistentes.html">Entrega Asistentes (prof)</a></button>
            </a>
        </div>
    </div>
</section>