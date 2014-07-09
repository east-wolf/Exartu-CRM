_.forEach([
  {
    displayName: 'Won', type: 'Won'
  },
  {
    displayName: 'Lost',type: 'Won'
  },
  {
    displayName: 'Inactive', type:'Inactive'
  },
  {
    displayName: 'Active', type:'Active'
  }
],
  function (item) {
    item.codeType = Enums.lookUpTypes.deal.status.code;
    systemLookUps.push(item);
  }
);