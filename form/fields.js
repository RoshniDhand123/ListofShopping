import Field from '../form-components/index';
const fields = [
    {
        name: "name",
        placeholder: "Enter the list of Items",
        type: "text",
        required: true,
        component: Field,
     
    },
    {
        name: "price",
        placeholder: "Price of Item",
        type: "number",
        required: true,
        component: Field,
      
    },
];

export { fields };