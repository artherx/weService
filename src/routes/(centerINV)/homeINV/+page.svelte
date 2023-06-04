<script lang="ts">
    import '../../assets/css/InicioAdmin.css'
    import {goto} from '$app/navigation'
    const onClieckJI=(e:Event)=>{
        e.preventDefault()
        goto('/restI', {replaceState:true})
    }
    const onClieckA= (e:Event)=>{
        e.preventDefault()
        goto('/restA', {replaceState:true})
    }
</script>


<body id='INV'>
    <div class="RevisionINV">
        <div class="botonINV">
            <a href="/restI">
                <img src="/revision jovenes investigadores.jpg" alt="revision jovenes asistentes">
                <button class="BotonRevINV" on:click={onClieckJI}>Revisión para jovenes investigadores</button>
            </a>
        </div>
        <div class="botonINV">
            <a href="/restA">
                <img src="/revision asistentes.jpeg" alt="revision asistentes"> 
                <button class="BotonRevINV" on:click={onClieckA}>Revisión para asistentes</button>
            </a>
        </div>
    </div>
</body>