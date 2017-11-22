export const columns = [{
  Header: "Name",
  columns: [{
    Header: "First Name",
    accessor: "firstName"
  }, {
    Header: "Last Name",
    id: "lastName",
    accessor: d => d.lastName
  }]
}, {
  Header: "Info",
  columns: [{
    Header: "Age",
    accessor: "age"
  }, {
    Header: "Status",
    accessor: "status"
  }]
}, {
  Header: 'Stats',
  columns: [{
    Header: "Visits",
    accessor: "visits"
  }]
}]