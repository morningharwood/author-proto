export const schema = (collection, document) => [
  {
    key: collection,
    type: 'repeat',
    fieldArray: {
      fieldGroupClassName: 'row',
      templateOptions: {
        btnText: 'Add',
      },
      fieldGroup: [
        {
          type: 'input',
          key: document,
          templateOptions: {
            label: 'Route Path',
            required: true,
          },
        },
        {
          type: 'input',
          key: 'routeName',
          templateOptions: {
            label: 'Name of Route',
            required: true,
          },
        },
      ],
    },
  },
];
