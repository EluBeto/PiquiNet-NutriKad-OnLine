export default {
    namespaced: true,
    state: {
        numberOfSteps: 1,
        loading: false,
        arrayOfSteps: [
            {
                id: 1,
                title: '¿Estas lista(o)?',
                subTitle: 'Comencemos...',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                secondaryBtnTitle: '',
                requiresSecondaryButton: false,
                isValid: false
            },
            {
                id: 2,
                title: 'Ficha de identificación:',
                subTitle: 'Todos los campos son obligatorios',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                requiresSecondaryButton: true,
                isValid: false

            },
            {
                id: 3,
                title: 'Historia clínica básica:',
                subTitle: 'Todos los campos son obligatorios',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                requiresSecondaryButton: true,
                isValid: false
            },
            {
                id: 4,
                title: 'Alergias o Intolerancias:',
                subTitle: 'Opcionales',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                requiresSecondaryButton: true,
                isValid: false
            },
            {
                id: 5,
                title: '¿Estas lista(o)?',
                subTitle: 'Comencemos...',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                secondaryBtnTitle: '',
                requiresSecondaryButton: true,
                isValid: false
            }
        ]
    },
    actions: {},
    mutatios: {},
    getters: {
        getSteps(state){
            return state
        }
    }
}