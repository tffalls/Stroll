
export default {
    modalContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000080', // Shadow the view behind the modal
      },
      modal: {
        width: '90%',
        height: '50%',
        backgroundColor: 'white',
        paddingLeft: '6%',
        paddingRight: '6%',
        paddingBottom: '6%',
        borderRadius: '10%',
      },
      modalHeader: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '3%'
      },
      modalTitle: {      
        fontSize: 24,
        paddingTop: '3%'
      },
      closeIcon: {
        marginLeft: 'auto'
      },
      noteInput: {
          height: '60%',
          borderColor: '#1EC142',
          borderWidth: 2,
          borderRadius: 10,
          padding: '3%'
      },
      postButton: {
          backgroundColor: '#1EC142',
         // padding: '5%',
          borderRadius: 10,
          marginTop: 15

      }
}