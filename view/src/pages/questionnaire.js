import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({ typography: { fontFamily: [ 'Permanent Marker' ]}});

class Questionnaire extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.onCompleteComponent = this.onCompleteComponent.bind(this)
    }

    onCompleteComponent = () => {
        this.setState({
            isCompleted: true
        })
}


    render(){
        var surveyJSON = {"pages":[{"name":"page1","elements":[{"type":"dropdown","name":"country","title":"Select the country...","isRequired":true,"choicesByUrl":{"url":"https://restcountries.eu/rest/v2/all","valueName":"name"}},{"type":"panel","name":"panel_countriesByRegion","elements":[{"type":"dropdown","name":"region","title":"Select the region...","choices":["Africa","Americas","Asia","Europe","Oceania"]},{"type":"dropdown","name":"reg_country","title":"Select the country...","isRequired":true,"choicesByUrl":{"url":"https://restcountries.eu/rest/v2/region/{region}","valueName":"name"}}],"title":"Show countries by region"},{"type":"checkbox","name":"question1","choices":["item1","item2","item3"]}]}]};
         
        var surveyRender = !this.state.isCompleted ? (
            <Survey.Survey 
            json={surveyJSON}
            showCompletedPage={false}
            onComplete={this.onCompleteComponent}
            />
        ) : null;

        var onSurveyCompletion = this.state.isCompleted ? (
            <div>Thanks for completing the survey!</div>
        ) : null;
        return (
            <div>
              <Header></Header>
                {surveyRender}
                {onSurveyCompletion}
                <Footer></Footer>
            </div>
        )
    }
}

export default Questionnaire