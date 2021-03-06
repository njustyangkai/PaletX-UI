import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './full.component';
import { DemoComponent } from '../demo/demo.component';
import { ButtonComponent } from '../demo/button/button.component';
import { CheckboxComponent } from '../demo/checkbox/checkbox.component';
import { TableComponent } from '../demo/table/table.component';
import { InputComponent } from '../demo/input/input.component';
import { ModalComponent } from '../demo/modal/modal.component';
import { AlertComponent } from '../demo/alert/alert.component';
import { DropdownComponent } from '../demo/dropdown/dropdown.component';
import { RadioComponent } from '../demo/radio/radio.component';
import { FormComponent } from '../demo/form/form.component';
import { DatepickerComponent } from '../demo/datepicker/datepicker.component';
import { TabComponent } from '../demo/tab/tab.component';
import { TimepickerComponent } from '../demo/timepicker/timepicker.component';
import { TooltipComponent } from '../demo/tooltip/tooltip.component';
import { PopoverComponent } from '../demo/popover/popover.component';
import { BreadcrumbComponent } from '../demo/breadcrumb/breadcrumb.component';
import { CarouselComponent } from '../demo/carousel/carousel.component';
import { CollapseComponent } from '../demo/collapse/collapse.component';
import { BoxComponent } from '../demo/box/box.component';
import { CssComponent } from '../css/css.component';
import { HomeComponent } from './home/home.component';
import { CssButtonComponent } from '../css/button/css-button.component';
import { CssBreadcrumbComponent } from '../css/breadcrumb/css-breadcrumb.component';
import { CssAlertComponent } from '../css/alert/css-alert.component';
import { CssCardComponent } from '../css/card/css-card.component';
import { CssModalComponent } from '../css/modal/css-modal.component';
import { CssTabComponent } from '../css/tab/css-tab.component';
import { CssInputComponent } from '../css/input/css-input.component';
import { CssSelectComponent } from '../css/select/css-select.component';
import { CssCheckboxComponent } from '../css/checkbox/css-checkbox.component';
import { CssRadioComponent } from '../css/radio/css-radio.component';
import { CssProgressComponent } from '../css/progress/css-progress.component';
import { CssFormComponent } from '../css/form/css-form.component';
import { CssTableComponent } from '../css/table/css-table.component';

const routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: FullComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'components',
        component: DemoComponent,
        children: [
          {
            path: '',
            redirectTo: 'alert'
          },
          {
            path: 'button',
            component: ButtonComponent
          },
          {
            path: 'checkbox',
            component: CheckboxComponent
          },
          {
            path: 'table',
            component: TableComponent
          },
          {
            path: 'input',
            component: InputComponent
          },
          {
            path: 'modal',
            component: ModalComponent
          },
          {
            path: 'alert',
            component: AlertComponent
          },
          {
            path: 'dropdown',
            component: DropdownComponent
          },
          {
            path: 'radio',
            component: RadioComponent
          },
          {
            path: 'form',
            component: FormComponent
          },
          {
            path: 'datepicker',
            component: DatepickerComponent
          },
          {
            path: 'tab',
            component: TabComponent
          },
          {
            path: 'timepicker',
            component: TimepickerComponent
          },
          {
            path: 'tooltip',
            component: TooltipComponent
          },
          {
            path: 'popover',
            component: PopoverComponent
          },
          {
            path: 'breadcrumb',
            component: BreadcrumbComponent
          },
          {
            path: 'carousel',
            component: CarouselComponent
          },
          {
            path: 'collapse',
            component: CollapseComponent
          },
          {
            path: 'box',
            component: BoxComponent
          }
        ]
      },
      {
        path: 'css',
        component: CssComponent,
        children: [
          {
            path: '',
            redirectTo: 'alert'
          },
          {
            path: 'button',
            component: CssButtonComponent
          },
          {
            path: 'breadcrumb',
            component: CssBreadcrumbComponent
          },
          {
            path: 'alert',
            component: CssAlertComponent
          },
          {
            path: 'card',
            component: CssCardComponent
          },
          {
            path: 'modal',
            component: CssModalComponent
          },
          {
            path: 'tab',
            component: CssTabComponent
          },
          {
            path: 'input',
            component: CssInputComponent
          },
          {
            path: 'select',
            component: CssSelectComponent
          },
          {
            path: 'checkbox',
            component: CssCheckboxComponent
          },
          {
            path: 'radio',
            component: CssRadioComponent
          },
          {
            path: 'progress',
            component: CssProgressComponent
          },
          {
            path: 'form',
            component: CssFormComponent
          },
          {
            path: 'table',
            component: CssTableComponent
          }
        ]
      }
    ]
  }
];

const routing:any = RouterModule.forChild(<Routes>routes);

@NgModule({
  imports: [routing],
  exports: [RouterModule]
})

export class FullRoutingModule {

}