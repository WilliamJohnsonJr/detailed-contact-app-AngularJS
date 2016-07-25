function AddController (ContactService, $state) {

	  let vm = this;

  vm.addContact = addContact;

  	function addContact(contact){
  		
		ContactService.create(contact).then( (res) => {
	      $state.go('root.home');
	    });;
	}
}

AddController.$inject = ['ContactService', '$state'];
export { AddController };