import React, { Component } from 'react';

class CatFacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catFacts: [],
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {

        console.log(`Trying to Fetch Cat Facts Data`)

        const response = await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=50');

        const json = await response.json();

        this.setState(
            {
                catFacts: json
            }
        );

        console.log(this.state.catFacts);

    }
    render() {

        return (
            <div>
                {
                    this.state.catFacts.map((fact, index) => {
                        return (
                            <div key={index}>
                                <p>{`Fact: ${fact}`}</p>
                            </div>
                        )
                    })
                }

            </div>
        );
    }
}

export default CatFacts;