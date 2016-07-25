function HomeController (ContactService, $state) {
	let vm = this;
	vm.contacts = [];
	vm.deleter = deleter;

  init();

  function init (){

  	ContactService.getContacts().then((res)=>{
  		vm.contacts = res.data;
  		console.log(vm.contacts);
  	})
  }

  function deleter(contact){
  	ContactService.deleteContact(contact).then((res)=>{
  		init();
  	});
  };

}

HomeController.$inject = ['ContactService', '$state'];
export { HomeController };