import React from 'react'
import { Link } from 'react-router-dom'

import { AppLogo } from '../Tools/LoadImg'

export default function ForgotPassword() {
	return (
		<main className="noHeader">
			<section className="form-container">
				<form action="">
						<div className="form-header">
							<AppLogo />
							<h1>Esqueci minha senha</h1>
						</div>

						<p>Insira seu email e enviaremos um link de redefinição de senha:</p>
						<input id="email-input" className="input" placeholder="Email"/>

						<button type="submit" className="button">Enviar email</button>

						<span className="form-link">
							<Link  to="/login">Voltar para o login</Link>
							</span>
				</form>
			</section>
    </main>
	)
}
