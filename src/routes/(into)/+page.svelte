<script lang="ts">
	import { goto } from '$app/navigation';
	import '../assets/css/login.css';
	import type { UserRespose } from '../../domain/user/UserResponse';

	let nombreUsuario = '';
	let contraseña = '';
	const onClickUser = async (e: Event) => {
		e.preventDefault();
		if (nombreUsuario && contraseña) {
			try {
				const response = await fetch('/api/iniciar', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ nombreUsuario, contraseña })
				});
				const usuario: UserRespose = await response.json();
				if (!usuario.ok) {
					console.log(usuario.message);
					return;
				}
				console.log('Sesión creada exitosamente');
				console.log('Datos de la sesión:');
				if (usuario?.data?.role === 'teacher') {
                    console.log(usuario?.data?.role);
					goto('/homeTe', { replaceState: true });
				} else if (usuario.data?.role === 'admin') {
                    console.log(usuario?.data?.role);
					goto('/homeINV', { replaceState: true });
				}
			} catch (error) {}
			console.log(nombreUsuario);
		} else {
			console.log('no hay contraseña');
		}
	};
</script>

<header>
	<img src="/logo-social.png" alt="Logo UMNG" />
</header>
<section>
	<div class="izquierda">
		<h1>Universidad Militar Nueva Granada</h1>
		<span>El administrador se encarga de verificar los documentos enviados por el operador</span>
	</div>
	<div class="derecha">
		<div class="Iniciar-Sesion">
			<h2>Iniciar sesión</h2>
			<form action="#">
				<div class="login">
					<span class="iconos"><ion-icon name="person-circle" /></span>
					<input id="userU" type="Usuario" required bind:value={nombreUsuario} />
					<label for="userU">Usuario</label>
				</div>
				<div class="login">
					<span class="iconos"><ion-icon name="lock-closed" /></span>
					<input id="passwordU" type="Contraseña" required bind:value={contraseña} />
					<label for="passwordU">Contraseña</label>
				</div>
				<div class="recordarContra">
					<label><input type="Checkbox" />Recordar Contraseña</label>
					<a href="/">¿Se olvido la contraseña?</a>
				</div>
				<button type="submit" class="btn" on:click={onClickUser}>Iniciar sesión</button>
				<div class="login-registro">
					<p>
						¿No tienes cuenta? <a href="/register" class="link-registro"> Registrarse </a>
					</p>
				</div>
			</form>
		</div>
	</div>
</section>
