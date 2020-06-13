import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { NgModule, ModuleWithProviders, Provider } from '@angular/core';

import { MatAutocompleteModule, MatAutocompleteDefaultOptions, MAT_AUTOCOMPLETE_DEFAULT_OPTIONS } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule, MatBottomSheetConfig, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule, MatButtonToggleDefaultOptions, MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule, MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';
import { MatChipsModule, MatChipsDefaultOptions, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogConfig, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule, MatExpansionPanelDefaultOptions, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule, MatMenuDefaultOptions, MAT_MENU_DEFAULT_OPTIONS } from '@angular/material/menu';
import { MatPaginatorModule, MAT_PAGINATOR_DEFAULT_OPTIONS } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS } from '@angular/material/progress-spinner';
import { MatRadioModule, MatRadioDefaultOptions, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule, MAT_DRAWER_DEFAULT_AUTOSIZE } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule, MatSlideToggleDefaultOptions, MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS } from '@angular/material/slide-toggle';
import { MatSnackBarModule, MatSnackBarConfig, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule, MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {
  MatNativeDateModule,
  MatRippleModule, RippleGlobalOptions, MAT_RIPPLE_GLOBAL_OPTIONS,
  MatCommonModule,
  MatOptionModule,
  MatLineModule,
  MatPseudoCheckboxModule,
} from '@angular/material/core';


@NgModule({
  exports: [
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
  ]
})
export class MaterialModule {

  static forRoot(config: MaterialModuleConfig): ModuleWithProviders {
    return {
      ngModule: MaterialModule,
      providers: [...getProviders(config)]
    };
  }

}

function* getProviders(config: MaterialModuleConfig) {
  if (!config) {
    return;
  }

  if (config.autocompleteOptions) { yield { provide: MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, useValue: config.autocompleteOptions } as Provider; }
  if (config.bottomSheetOptions) { yield { provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: config.bottomSheetOptions } as Provider; }
  if (config.buttonToggleOptions) { yield { provide: MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, useValue: config.buttonToggleOptions } as Provider; }
  if (config.chipsOptions) { yield { provide: MAT_CHIPS_DEFAULT_OPTIONS, useValue: config.chipsOptions } as Provider; }
  if (config.dialogOptions) { yield { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: config.dialogOptions } as Provider; }
  if (config.expansionPanelOptions) { yield { provide: MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, useValue: config.expansionPanelOptions } as Provider; }
  if (config.formFieldOptions) { yield { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: config.formFieldOptions } as Provider; }
  if (config.menuOptions) { yield { provide: MAT_MENU_DEFAULT_OPTIONS, useValue: config.menuOptions } as Provider; }
  if (config.radioOptions) { yield { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: config.radioOptions } as Provider; }
  if (config.slideToggleOptions) { yield { provide: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS, useValue: config.slideToggleOptions } as Provider; }
  if (config.snackBarOptions) { yield { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: config.snackBarOptions } as Provider; }
  if (config.tooltipOptions) { yield { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: config.tooltipOptions } as Provider; }
  if (config.rippleOptions) { yield { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: config.rippleOptions } as Provider; }
}

export interface MaterialModuleConfig {
  autocompleteOptions?: MatAutocompleteDefaultOptions;
  bottomSheetOptions?: MatBottomSheetConfig;
  buttonToggleOptions?: MatButtonToggleDefaultOptions;
  chipsOptions?: MatChipsDefaultOptions;
  dialogOptions?: MatDialogConfig;
  expansionPanelOptions?: MatExpansionPanelDefaultOptions;
  formFieldOptions?: MatFormFieldDefaultOptions;
  menuOptions?: MatMenuDefaultOptions;
  radioOptions?: MatRadioDefaultOptions;
  slideToggleOptions?: MatSlideToggleDefaultOptions;
  snackBarOptions?: MatSnackBarConfig;
  tooltipOptions?: MatTooltipDefaultOptions;
  rippleOptions?: RippleGlobalOptions;
}
