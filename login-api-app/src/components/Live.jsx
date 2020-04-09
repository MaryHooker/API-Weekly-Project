import React, { Component } from 'react';

class Live extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList:[],
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = async () =>{
       //sanity
       console.log(`Trying to Fetch Live Data`)

       const response = await fetch('https://quote-garden.herokuapp.com/api/v2/quotes/all?page=1&limit=100');

       const json = await response.json();

       this.setState(
           {
               dataList: json.quotes
           }
       );

    }

    render() {
        //sanity
        
        return (
            <div>
                {
                    this.state.dataList.map((quote, id) => {
                        return (
                            <div key={id}>
                                <p>{`${quote.quoteText}`}</p>
                                <p>{`By: ${quote.quoteAuthor}`}</p>
                                <hr className='breaks'/>
                            </div>
                        )
                    })

                }
            </div>
        );
    }
}

export default Live;