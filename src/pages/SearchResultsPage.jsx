import React from 'react';  


class SearchResultsPage extends React.Component {
   
  // Constructor 
  constructor(props) {
      super(props);
 
      this.state = {
          items: [],
          DataisLoaded: false
      };
  }
 
  // ComponentDidMount is used to execute the code 
  componentDidMount() {
      fetch("https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=Microsoft")
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  items: json,
                  DataisLoaded: true 
              });
          })
  }
  
  render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) return <div>
          <h1> Please wait some time.... </h1> </div> ;

      return (
      <div className = "App">
          <h1> Fetch data from an api in react </h1>  {
            //<h2>{items.vulnerabilities[0].cve.metrics.cvssMetricV2[0].cvssData.baseScore}</h2>
            console.log(items)
          }
      </div>
  );
}
}

export default SearchResultsPage;
