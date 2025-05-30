import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(HttpClientModule)],
};
