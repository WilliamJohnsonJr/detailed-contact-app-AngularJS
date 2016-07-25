function HomeController (ContactService, $state) {
	let vm = this;
	vm.contacts = [];

  init();

  function init (){
  	ContactService.getContacts().then((res)=>{
  		vm.contacts = res.data;
  		console.log(vm.contacts);
  	})
  }

}

HomeController.$inject = ['ContactService', '$state'];
export { HomeController };