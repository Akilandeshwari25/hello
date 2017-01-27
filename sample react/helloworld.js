ReactDOM.render(
<h1>Hello world!</h1>,
    document.getElementById('example')
);

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('example'),

);

// function demo(){
// 	console.log("hi");

// 	function handleClick()
// 	{
// 		alert("click function");
// 	}
// 	 return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }
// var temp=(
// 	<div>{demo()}</div>
// 	)
//  ReactDOM.render(
//   temp,
//   document.getElementById('example'),);

function handClick(){
	alert("handClick");
	
	ReactDOM.render(
<p>hello</p>,document.getElementById('sample')
);
}

var temp=(
    <button onClick={handClick}>click me</button>
	)
ReactDOM.render(
temp,document.getElementById('example')
);

// var data=[
//   {
//     "name":"adafa",
//     "desc":"fadaa"
//   },
//   {
//     "name":"adafa",
//     "desc":"fadaa"
//   },
//   {
//     "name":"adafa",
//     "desc":"fadaa"
//   },
//   {
//     "name":"adafa",
//     "desc":"fadaa"
//   },
//   {
//     "name":"adafa",
//     "desc":"fadaa"
//   }
// ]

// var myStringifiedJSON = '[{"name":"Finne the Human"}]';

// var myRegularObject = JSON.parse(myStringifiedJSON);
// console.log(myRegularObject);

// const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

// const buttonsInstance = (
//   <div className="well" style={wellStyles}>
//     <button class="btn btn-primary btn-lg btn-block">Block level button</button>
//     <button class="btn btn-primary btn-lg btn-block">Block level button</button>
//   </div>
// );

// ReactDOM.render(buttonsInstance, document.getElementById('example'));

var temp=[];
  $.ajax({
      type:"GET",
      dataType:"json",
      url:"anotherData.json",
      success: function(response) {
        alert("json fetched");
        temp=response;
  
        for(var i=0; i<Object.keys(response).length; i++){
          console.log("hi");
          ReactDOM.render(<button>{Object.keys(response)[i]}</button>,document.getElementById("sample"));
        }     
      },
      error: function() {
          alert("error");
      }
        });
// var resultJSON = '{"FirstName":"John","LastName":"Doe","Email":"johndoe@johndoe.com","Phone":"123 dead drive"}';
// var result = $.parseJSON(resultJSON);
// $.each(result, function(k, v) {
//     //display the key and value pair
//     alert(k + ' is ' + v);
// });