<script lang="ts">
    import '../../assets/css/InicioAdmin.css'
    import {goto} from '$app/navigation'
    const onClieckJI=(e:Event)=>{
        e.preventDefault()
        goto('/testI', {replaceState:true})
    }
    const onClieckA= (e:Event)=>{
        e.preventDefault()
        goto('testA', {replaceState:true})
    }
</script>


<section>
    <div class="Revision">
        <div class="boton">
            <a href="/testI">
                <img src="revision jovenes investigadores.jpg" alt="revision jovenes asistentes">
                <button class="BotonRev" on:click={onClieckJI}>Revisión para jovenes investigadores</button>
            </a>
        </div>
        <div class="boton">
            <a href="/testA">
                <img src="revision asistentes.jpeg" alt="revision asistentes"> 
                <button class="BotonRev" on:click={onClieckA}>Revisión para asistentes</button>
            </a>
        </div>
    </div>
</section>