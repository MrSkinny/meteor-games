//nxn
var tile_states = [0, 0, 0, 0];

Tile = React.createClass({
  render(){
    return (<button class="tile">
	{(() => {
	  switch(this.props.play_state)
	  {
            case 0:
             return ' ';
            case 1:
             return 'x';
            default:
             return 'o';
	  }
         }
 	)()
	}
	</button>);
  }
});

Row = React.createClass({
  getInitialState: function(){
    data = [];
    for(var i = 0; i < this.props.ct; i++){
      data.push(0);
    }
    return {data: data};
  },
  render(){
    var tileNodes = this.state.data.map(function(tile, index){
          return (<Tile play_state={tile} key={index}/>);
        });
    return(
      <div class="tile-row">
       {tileNodes} 
      </div>
    );
  }
});

Grid = React.createClass({
  render(){
    console.log("data", this.props.data);
var tileRows = [];
for(var i = 0; i < this.props.rows; i++){
  var newRow = (<Row ct={this.props.cols}/>);
  tileRows.push(newRow);
}
    return (
      <div class="ToeGrid">
       {tileRows}
      </div>      
    );
  }
});

//3 different states (classes possible)
//0, 1, 2. player 1 and 2
Box = React.createClass({
 render(){} 
});
