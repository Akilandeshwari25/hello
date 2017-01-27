var MyClass=React.createClass({
	// Initializing the array
	getInitialState: function(){
        return {
        	data: [],
        	content: []
        };
    },
     componentWillMount: function() {
        this.changeDimension();
        this.updateDimension();
    },
    


    // To get json data using ajax call
	componentDidMount: function(){
		  window.addEventListener("resize", this.changeDimension);
		  $(".arrowSpan").hide();
		$.ajax({
			type:"GET",
			dataType:"json",
			url:"anotherData.json",
			success: function(response){
				this.setState({data: response});
			}.bind(this),
			error: function(){
				alert("Error loading json");
			}.bind(this)
		})
	},
	changeDimension: function(){
		if(window.matchMedia("(max-width: 768px)").matches){

			$("#contentDiv").hide();
			$(".arrowSpan").show();
		}
		else{
			$(".arrowSpan").hide();
			$("#contentDiv").show();
		}
	},
	updateDimension: function(){
		if(window.matchMedia("(max-width: 768px)").matches){
			$("#btnDiv").remove();
			$("#contentDiv").show();
			$(".listDiv").hide();
			$(".descWrap").append("<div id='btnDiv'><button id='backBtn' type='button'>Back</button></div>");
		}
		else{
			$("#btnDiv").remove();
			$("#contentDiv").show();
			$(".listDiv").show();
			$(".arrowSpan").hide();
		}
		$("#backBtn").click(function(){
				$("#contentDiv").hide();
				$(".listDiv").show();
			})
	},

	// click function
	handleClick: function(listNames,listValues,name,index){

			if(window.matchMedia("(max-width: 768px)").matches){
				$("#btnDiv").remove();
				$(".listDiv").css("display","none");
				$("#contentDiv").css("display","block");
				$(".descWrap").append("<div id='btnDiv'><button  id='backBtn' type='button'>Back</button></div>");
			}
			else{
				$(".listDiv").show();
				$("#contentDiv").show();

			}
			$("#backBtn").click(function(){
				$("#contentDiv").hide();
				$(".listDiv").show();
			})
			window.addEventListener("resize", this.updateDimension);
			var content=[];
			var temp=listValues[index];
			$("#welcomeNote").empty();
			$(".descWrap ul").empty();
			$.each(temp, function(k,v) {
    			content.push(k+":"+v);
			});
			$(".description").append("<p id='selectedName'>"+listNames[index]+":</p>")
			$.each(content,function(i){
				$(".description").append("<li>"+content[i]+"</li>");
			})
			
	},
	
	
	// to render dom
	render: function(){
		var dinoNames=Object.keys(this.state.data);
		var dinoValues=Object.values(this.state.data);
		var dinoKeys=dinoNames.map(function(names,index){
			return(
				<button type="button" id="btn1" onClick={this.handleClick.bind(this,dinoNames,dinoValues,names,index)} value="names" className="btn btn-lg listBtn">{names}<span className="arrowSpan glyphicon glyphicon-menu-right"></span></button>
				);
		},this)

		return(
			<section className="dynDivWrapper">
				<header>
					<h1>The Jurassic Kingdom!!</h1>
				</header>
				<div className="listDiv col-xs-12 col-sm-4 col-md-4 col-lg-4 btn-group-vertical" role="group">
					<div id="dinoList" className="btn-group" role="group">
						{dinoKeys}
					</div>
				</div>
				<div id="contentDiv" className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
					<div className="descWrap">
						<p id="welcomeNote">Welcome to Jurassic Kingdom!! Click the names to know about them.</p>
						<ul className="description"></ul>
					</div>
				</div>
				
				<div className="clearFix"></div>
			
			</section>
			);
	}
});


ReactDOM.render(<MyClass />,document.getElementById('example'));

