// import React, { Component } from 'react';
// import ReactTable  from 'react-table';
// // import "react-table/react-table.css";

// class DataTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Vulnerabilities: []
//     }
//   }
//   componentDidMount() {
//     fetch("https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=microsoft")
//       .then(res => res.json())
//       .then(
//         (vulnerabilities) => {
//           this.setState({ vulnerabilities: vulnerabilities });
//         },
//         (error) => {
//           alert(error);
//         }
//       )
//   }

//   render() {
//     return (<table cellPadding="0" cellSpacing="0">
//       <thead>
//         <tr>
//           <th>Vulnerability</th>
//           <th>Affects</th>
//           <th>Type</th>
//           <th>Published</th>
//         </tr>
//       </thead>

//       <tbody>
//         {this.state.vulnerabilities.map(vulnerability_data =>
//           <tr>
//             <td>{vulnerability_data.vulnerability}</td>
//             <td>{vulnerability_data.affects}</td>
//             <td>{vulnerability_data.type}</td>
//             <td>{vulnerability_data.published}</td>
//           </tr>
//         )}
//       </tbody>
//     </table>);
//   }
// }

