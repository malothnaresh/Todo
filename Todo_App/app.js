var listOfItems = [];
var newItem = document.getElementById('new-item');
var listElement = document.getElementById('list-items');
var errorMessage = document.getElementById('show-error');
var noElements = document.getElementById('no-elements');
newItem.focus();

function clearAll() {
  errorMessage.innerHTML = '';
  noElements.style.display = 'block';
  newItem.value = '';
  if(listOfItems.length === 0){
    errorMessage.innerHTML = "Sorry boss, but nothing to clear...";
  }
  listOfItems = [];
  listElement.innerHTML = '';
  newItem.focus();
  console.log('Cleared all the items');
}

function clearOne(index){
  listElement.innerHTML = '';
  console.log('Cleared item ' + listOfItems[index]);
  listOfItems.splice(index,1);
  if(listOfItems.length === 0){
    noElements.style.display = "block";
  }
  for(var item in listOfItems){
    listElement.innerHTML += '<li>' + listOfItems[item] + '<i class="fa fa-lg fa-trash pull-right cursor-pointer" title="Clear me" onclick="clearOne(' + item + ')" aria-hidden="true"></i></li>';
  }
  newItem.focus();
}

function addItem(){
  errorMessage.innerHTML = '';
  if(newItem.value === ''){
    errorMessage.innerHTML = "Hey boss, what am I...? Describe";
    newItem.focus();
    return;
  }
  noElements.style.display = 'none';
  listElement.innerHTML = '';
  listOfItems.push(newItem.value);
  for(var item in listOfItems){
    listElement.innerHTML += 
    '<li>' + listOfItems[item] + '<i class="fa fa-lg fa-trash pull-right cursor-pointer" title="Clear me" onclick="clearOne(' + item + ')" aria-hidden="true"></i></li>';
  }
  newItem.value = '';
  newItem.focus();
}