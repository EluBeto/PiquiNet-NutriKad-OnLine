const serviceResponse = {
  messageLogResponse(payload){
    switch (payload.message) {
        case 'MISSING_PASSWORD':
            return 'Ups! Tu contraseña no cumple con el formato, intenta con otra.'
        case 'EMAIL_EXISTS':
            return 'Hey, ya tenemos registrada una cuenta con este correo'
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            return 'Ups! Hemos bloqueado todas las solicitudes de este dispositivo debido a una actividad inusual. Inténtelo de nuevo más tarde.'
        default:
            return 'Ups! Tenemos problemas, intenta más tarde.'
    }
  },
  messageLoginResponse(payload) {
    switch (payload.message) {
        case 'EMAIL_NOT_FOUND':
            return 'Ups! La contraseña no es válida o el usuario no existe.'
        case 'INVALID_PASSWORD':
            return 'Ups! La contraseña no es válida o el usuario no existe.'
        case 'USER_DISABLED':
            return 'Ups! La cuenta de usuario ha sido inhabilitada por un administrador.'
      default:
          return 'Ups! Tenemos problemas, intenta más tarde.'
    }
  }
}

export default serviceResponse