import React from 'react'
import { Link } from 'react-router-dom'
import { AppLogo } from '../Tools/LoadImg'


const Login = (props) => (
	<main className="noHeader">
		<section className="form-container">
			<form action="">
					<div className="form-header">
						<AppLogo />
						<h1>Login</h1>
					</div>

					<input required id="email-input" className="input" placeholder="Email"/>
					<input required id="pass-input" className="input" placeholder="Senha" type="password"/>

					<Link to="/forgot">Esqueci minha senha</Link>

					<button type="submit" className="button">Entrar</button>

					<div className="form-link">
						<p>Não tem uma conta?</p>
						<Link to="/register"> Registre-se </Link>
					</div>
			</form>
		</section>
	</main>
)

export default Login
