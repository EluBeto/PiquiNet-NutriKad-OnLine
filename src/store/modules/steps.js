export default {
    namespaced: true,
    state: {
        numberOfSteps: 1,
        loading: false,
        arrayOfSteps: [
            {
                id: 1,
                title: 'Datos Personales:',
                subTitle: 'Todos los campos son obligatorios',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                requiresSecondaryButton: false,
                isValid: true

            },
            {
                id: 2,
                title: 'Antecedentes Heredofamiliares:',
                subTitle: 'Opcionales',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                requiresSecondaryButton: true,
                isValid: false
            },
            {
                id: 3,
                title: 'Antecedentes Personales Patológicos:',
                subTitle: 'Opcionales',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                requiresSecondaryButton: true,
                isValid: false
            },
            {
                id: 4,
                title: 'Antecedentes Gineco-Obstetricos',
                subTitle: 'Opcionales',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                secondaryBtnTitle: '',
                requiresSecondaryButton: true,
                isValid: false
            },
            {
                id: 5,
                title: 'Antecedentes Personales No Patológicos',
                subTitle: 'Opcionales',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                secondaryBtnTitle: '',
                requiresSecondaryButton: true,
                isValid: false
            },
            {
                id: 6,
                title: 'Comidas',
                subTitle: 'Algunos campos son obligatorios',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                secondaryBtnTitle: '',
                requiresSecondaryButton: true,
                isValid: false
            },
            {
                id: 7,
                title: 'Control Antropométrico',
                subTitle: 'Algunos campos son obligatorios',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                secondaryBtnTitle: '',
                requiresSecondaryButton: true,
                isValid: false
            },
            {
                id: 8,
                title: 'Control Clínico',
                subTitle: 'Algunos campos son obligatorios',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                secondaryBtnTitle: '',
                requiresSecondaryButton: true,
                isValid: false
            },
            {
                id: 9,
                title: 'Control Dietético',
                subTitle: 'Algunos campos son obligatorios',
                btnColor: 'primary',
                primaryBtnTitle: 'Siguiente',
                secondaryBtnTitle: '',
                requiresSecondaryButton: true,
                isValid: false
            },
            {
                id: 10,
                title: 'Cambio de Hábitos',
                subTitle: 'Algunos campos son obligatorios',
                btnColor: 'primary',
                primaryBtnTitle: 'Guardar',
                secondaryBtnTitle: '',
                requiresSecondaryButton: true,
                isValid: false
            }
        ]
    },
    actions: {},
    mutations: {},
    getters: {
        getSteps(state){
            return state
        }
    }
}
