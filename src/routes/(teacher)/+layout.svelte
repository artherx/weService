<script lang="ts">
    import '../assets/css/layoutINV.css'
    import {goto} from '$app/navigation'
    const onClickOut = (e:Event)=>{
        e.preventDefault()
        goto('/',{replaceState:true})
    }
</script>
<header>
    <img src="/logo-social.png" alt="Logo">
    <nav class="navegacion">
        <a href="/homeTe">Inicio</a>
        <a href="/studentI">Jovenes investigadores</a>
        <a href="/studentA">Asistentes</a>
        <button class="btnLogOut" on:click={onClickOut}>Cerrar Sesión</button>
    </nav> 
</header>
<slot/>
<footer class="pie-pagina">
    <div class="grupo-1">
        <div class="box">
            <h2>Mantente en contacto</h2>
            <p>Universidad Militar Nueva Granada</p>
            <a href="https://www.umng.edu.co/" target="_blank"><ion-icon name="globe-outline"> https://www.umng.edu.co/</ion-icon></a>
            <a href="tel:Telefonos: +57 601 650 0000 - 601 634 3200" target="_blank" id="yui_3_17_2_1_1683774244766_66"><ion-icon name="call-outline">Telefonos: +57 601 650 0000 - 601 634 3200</ion-icon></a>
            <a href="mailto:wmaster@unimilitar.edu.co" target="_blank" id="yui_3_17_2_1_1683774244766_67"><ion-icon name="mail-outline">wmaster@unimilitar.edu.co</ion-icon></a>
        </div>
        <div class="box">
            <h2>CONTACTANOS</h2>
            <div class="red-social">
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-linkedin"></a>
                <a href="#" class="fa fa-youtube"></a>
                <a href="#" class="fa fa-instagram"></a>
                
            </div>
            <p>Resumen de retención de datos</p>
        </div>
    </div>
</footer>

