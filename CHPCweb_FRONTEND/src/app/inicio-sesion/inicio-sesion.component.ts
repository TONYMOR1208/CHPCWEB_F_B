import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
// URL base del backend
BASE_URL = 'https://tu-api.com/api';

// Función para validar y enviar el formulario de inicio de sesión al backend
async validateForm(): Promise<boolean> {
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const password = (document.getElementById('password') as HTMLInputElement).value.trim();

    if (!email || !password) {
        alert("Por favor, complete todos los campos obligatorios.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    // Envío al backend usando fetch
    try {
        const response = await fetch(`${this.BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error("Error en el inicio de sesión");
        }

        const result = await response.json();

        if (result.success) {
            // Redirigir o almacenar token, si es el caso
            window.location.href = "Principal.html";
            return true;
        } else {
            alert("Credenciales incorrectas.");
            return false;
        }
    } catch (error) {
        alert("Hubo un problema con el servidor. Intente nuevamente.");
        console.error(error);
        return false;
    }
}

}
