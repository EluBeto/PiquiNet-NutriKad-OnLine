const serviceResponse = {
  messageLogResponse(payload){
    switch (payload.message) {
        case 'MISSING_PASSWORD':
            return 'Ups! Tu contraseña no cumple con el formato, intenta con otra.'
        case 'EMAIL_EXISTS':
            return 'Hey, ya tenemos registrada una cuenta con este correo'
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            return 'Hemos bloqueado todas las solicitudes de este dispositivo debido a una actividad inusual. Inténtelo de nuevo más tarde.'
        default:
            break
    }
  },
  messageLoginResponse(payload) {
    switch (payload.message) {
        case 'MISSING_EMAIL':
            return 'Ups! El correo no existe.'
        case 'INVALID_PASSWORD':
            return 'Ups! la contraseña no es válida o el usuario no tiene contraseña.'
        case 'USER_DISABLED':
            return 'la cuenta de usuario ha sido inhabilitada por un administrador.'
      default:
          return 'Opus! Tenemos problemas, intenta más tarde.'
    }
  }
}

export default serviceResponse