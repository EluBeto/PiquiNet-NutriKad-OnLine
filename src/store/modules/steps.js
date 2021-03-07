export default {
    namespaced: true,
    state: {
        numberOfSteps: 1,
        loading: false,
        arrayOfSteps: [
            {
                id: 1,
                title: 'Comencemos',
                subTitle: '',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                secondaryBtnTitle: '',
                requiresSecondaryButton: false,
                isValid: false
            },
            {
                id: 2,
                title: 'Datos Personales:',
                subTitle: 'Todos los campos son obligatorios',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                requiresSecondaryButton: true,
                isValid: false

            },
            {
                id: 3,
                title: 'Antecedentes Heredofamiliares:',
                subTitle: 'Opcionales',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                requiresSecondaryButton: true,
                isValid: false
            },
            {
                id: 4,
                title: 'Antecedentes Personales Patológicos:',
                subTitle: 'Opcionales',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                requiresSecondaryButton: true,
                isValid: false
            },
            {
                id: 5,
                title: 'Antecedentes Gineco-Obstetricos',
                subTitle: 'Opcionales',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                secondaryBtnTitle: '',
                requiresSecondaryButton: true,
                isValid: false
            },
            {
                id: 6,
                title: 'Antecedentes Personales No Patológicos',
                subTitle: 'Opcionales',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                secondaryBtnTitle: '',
                requiresSecondaryButton: true,
                isValid: false
            },
            {
                id: 7,
                title: 'Antropometría / Comidas',
                subTitle: 'Algunos campos son obligatorios',
                btnColor: 'primary',
                primaryBtnTitle: 'Enviar',
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
