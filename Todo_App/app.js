var listOfItems = [];
var newItem = document.getElementById('new-item');
var listElement = document.getElementById('list-items');
newItem.focus();

function clearAll() {
  listOfItems = [];
  listElement.innerHTML = '';
  console.log('Cleared all the items');
}

function clearOne(index){
  listElement.innerHTML = '';
  console.log('Cleared item ' + listOfItems[index]);
  listOfItems.splice(index,1);
  for(var item in listOfItems){
    listElement.innerHTML += '<li>' + listOfItems[item] + '<i class="fa fa-lg fa-trash pull-right cursor-pointer" title="Clear me" onclick="clearOne(' + item + ')" aria-hidden="true"></i></li>';
  }
}

function strikeOne(index){

}

function addItem(){
  document.getElementById('show-error').innerHTML = '';
  if(newItem.value === ''){
    document.getElementById('show-error').innerHTML = "Hey you, what am I...? Describe";
    return;
  }
  listElement.innerHTML = '';
  listOfItems.push(newItem.value);
  for(var item in listOfItems){
    listElement.innerHTML += 
    '<li>' + listOfItems[item] + '<i class="fa fa-lg fa-trash pull-right cursor-pointer" title="Clear me" onclick="clearOne(' + item + ')" aria-hidden="true"></i></li>';
  }
  newItem.value = '';
  newItem.focus();
}