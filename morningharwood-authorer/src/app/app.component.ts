import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';


@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="orderForm" (ngSubmit)="onSubmit(order)">
      <formly-form [model]="order" [fields]="orderFields">
        <button mat-raised-button color="primary" type="submit">
          Submit
        </button>
      </formly-form>
    </form>
  `,
})
export class AppComponent {
  orderForm = new FormGroup({});

  // our model:
  order = {
    tagName: '',
    color: 'powder-blue', // will default to this value
    quantity: 1,
    size: 'M',
    terms: false,
  };

  // our field configuration. Keys should match our model:
  orderFields: FormlyFieldConfig[] = [
    {
      key: 'tagName',
      type: 'input', // input type
      templateOptions: {
        type: 'text',
        label: 'Tag name for your outfit',
        placeholder: 'tag name',
      },
      validation: {
        messages: {
          maxLength: 'Tag name is too long',
        },
      },
      validators: {
        // limit to 25 characters
        maxLength: ({ value }) => {
          return value.length <= 25;
        },
      },
    },
    {
      key: 'color',
      type: 'select',
      templateOptions: {
        label: 'Outfit color',
        options: [
          {
            label: 'Powder blue',
            value: 'powder-blue',
          },
          {
            label: 'Orange crush',
            value: 'orange-crush',
          },
          {
            label: 'Purple haze',
            value: 'purple-haze',
          },
        ],
      },
    },
    {
      key: 'quantity',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'How many outfits?',
        placeholder: 'quantity',
        required: true,
      },
    },
    {
      key: 'size',
      type: 'select',
      defaultValue: 'M',
      templateOptions: {
        label: 'Size',
        options: [
          {
            label: 'Small',
            value: 'S',
          },
          {
            label: 'Medium',
            value: 'M',
          },
          {
            label: 'Large',
            value: 'L',
          },
        ],
      },
    },
    {
      key: 'terms',
      type: 'checkbox',
      templateOptions: {
        label: 'You accept our terms and conditions',
        required: true,
      },
    },
  ];

  onSubmit(orderInfo) {
    console.log(orderInfo);
  }
}
