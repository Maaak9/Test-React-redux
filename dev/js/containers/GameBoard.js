import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import GameBox from '../containers/GameBox';
import {updateBoard_Action, test_Action} from '../actions/gameActions'
import {connect} from 'react-redux';

class GameBoard extends Component {
    componentWillMount(){
        console.log(this.props.GameState);
        
        var gameTile = []
        for(var row = 0; row<this.props.GameState.height; row++){
            gameTile[row] = [];
            for(var col = 0; col<this.props.GameState.width; col++){
                gameTile[row][col] = 1; 
            }
        }
        this.props.updateBoard_Action(gameTile);
    }

    render() {
        console.log(this.props.GameState);
        var r = 0;
        var gameBoxes = this.props.GameState.gameStatus.map((row) =>{
            var c = 0;
            var columns = [];
            row.map((col) =>{
                if(row == 0){
                    var id = c
                }else{
                    var id = (r*this.props.GameState.width + c)
                }
                c++;
                columns.push(<GameBox key={id} identifier={id} />);
            })
            r++;
            return <div key={r} id={r} className="row">{columns.concat()}</div>
        })

        return (
            <div className="middle">
                {gameBoxes}
            </div>
        );
    }

}



function mapStateToProps(state) {
    return {
        GameState: state.GameState
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({updateBoard_Action: updateBoard_Action, test_Action: test_Action}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(GameBoard);
