export default {
    namespaced: true,
    state: {
        isRegisteredUser: false,
        createDate: new Date(),
        clinicHistory: {
            actualWeight: '',
            height: null,
            measurements: {
              waist: null,
              chest: null,
              hip: null
            },
            isPregnant: '',
            isBreastfeeding: '',
            monthsPostpartum: 0,
            allergiesIntolerance: {
              isHeadach: false,
              isBadDigestion: false,
              isReflux: false,
              isActivePerson: false,
              responseActivePersonTime: '',
              responseActivePersonTypeExercise: '',
              isBeMedical: false
            }
        }
    },
    actions: {
        senPatientInformation({ rootState }) {
            // { rootState }, 
            rootState.dialogs.dialogs = {
                width: '',
                isShowDialog: false,
                card: {
                  title: '',
                  text: '',
                  cardActions: {
                      btnColor: '',
                      btnTitle: '',
                      btnAction: ''
                  }
                }
              }
        }
    },
    mutatios: {},
    getters: {}
}