let user={
    firstname:"John"
};

function  func(){
    alert(this.firstname)
}

let funcUser= func.bind(user);

funcUser();