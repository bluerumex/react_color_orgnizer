import React, { Component } from 'react';
import { v4 } from 'uuid';
import ColorList from './component/ColorList';
import AddColorForm from './component/AddColorForm';
// import MemberList from './component/MemberList';
// import HiddenMessages from './component/HiddenMessages';
// import CountryList from './component/CountryList';
// import Timeline from './component/Timeline';
// import PeopleList from './component/PeopleList';
// import RandomMeUsers from './component/RandomMeUsers';
import CountryDropDown from './component/CountryDropDown';
import ExpandableHiddenMessage from './component/ExpandableHiddenMessage';
import './stylesheets/App.scss';
// import historicDatesForSkiing from './data/Skiing';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: []
        }
        this._addColor = this._addColor.bind(this);
        this._rateColor = this._rateColor.bind(this);
        this._removeColor = this._removeColor.bind(this);
    }

    _addColor(title, color) {
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                color,
                rating: 0
            }
        ]
        this.setState({colors});
        // console.log(colors);
    }

    _rateColor(id, rating) {
        const colors = this.state.colors.map(color =>
            (color.id !== id) ? 
                color : 
                {
                    ...color,
                    rating
                }    
        )
        this.setState({colors});
    }

    _removeColor(id) {
        const colors = this.state.colors.filter(
            color => color.id !== id
        )
        this.setState({colors});
    }

    render() {
        const { _addColor, _rateColor, _removeColor } = this;
        const { colors } = this.state;
        
        return (
            <div className="app">
                <AddColorForm onNewColor={_addColor} />
                <ColorList colors={colors} onRate={_rateColor} onRemove={_removeColor} />
                {/*
                <Timeline name='스키의 역사' data={historicDatesForSkiing} /> 
                <HiddenMessages />
                <MemberList count={1} />
                <CountryList />
                <PeopleList />
                <RandomMeUsers count={5} />
                */}
                <CountryDropDown selected='United States' />
                <ExpandableHiddenMessage hidden={true}>이 메시지는 처음에 숨겨져 있습니다.</ExpandableHiddenMessage>
            </div>
        ) 
    }
}

export default App;
