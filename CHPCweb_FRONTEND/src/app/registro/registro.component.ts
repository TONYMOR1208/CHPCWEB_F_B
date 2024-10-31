import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  BASE_URL = 'https://your-backend-url.com'; // Define your backend URL

  async validateRegisterForm(): Promise<boolean> {
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const password = (document.getElementById('password') as HTMLInputElement).value.trim();
    const confirmPassword = (document.getElementById('confirm-password') as HTMLInputElement).value.trim();

    if (!name || !email || !password || !confirmPassword) {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    // Envío de datos al backend para el registro
    try {
        const response = await fetch(`${this.BASE_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        if (!response.ok) {
            throw new Error("Error en el registro");
        }

        const result = await response.json();

        if (result.success) {
            alert("Registro exitoso. Redirigiendo...");
            window.location.href = "Login.html"; // Redirige al inicio de sesión
            return true;
        } else {
            alert("No se pudo completar el registro. Intente nuevamente.");
            return false;
        }
    } catch (error) {
        alert("Hubo un problema con el servidor. Intente nuevamente.");
        console.error(error);
        return false;
    }
}



}
