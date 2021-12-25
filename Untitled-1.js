fetch('https://backer-backend.buildwithangga.id/api/v1/transactions', {
  method: 'POST', // or 'PUT'
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyOTV9.XKyKsFiMUUrPURB_e7DIs7cbdZJ7QpDhBwChtcW45BU',
    'Content-Type': 'application/json',
  },
  body: {
      amount: 1000000,
      campaign_id: 29
  },
})
.then(response => response.json())
.then(resp => {
    console.log(resp)
})