export const FittingDataUserPage = (usersDataResponse) => {
   const tableData = {
    header:'Users',
    data: {
     headers: [],
     data: []
   }
   }


  Object.keys(usersDataResponse[0]).forEach((key) => {
    const title = key.split('')
    title[0] = title[0].toUpperCase()
    const header = {
      title: title.join(''),
      property: key
    }
    tableData.data.headers.push(header)
  })
  usersDataResponse.forEach((user) => {
    tableData.data.data.push(user)
  })

  return tableData
}