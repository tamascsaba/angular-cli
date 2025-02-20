import '../lib/bootstrap-local';

import { ReleaseConfig } from '@angular/dev-infra-private/release/config';
import { packages } from '../lib/packages';
import buildPackages from '../scripts/build';

const npmPackages = Object.keys(packages);

/** Configuration for the `ng-dev release` command. */
export const release: ReleaseConfig = {
  npmPackages,
  buildPackages,
  releaseNotes: {},
  publishRegistry: 'https://wombat-dressing-room.appspot.com',
  releasePrLabels: ['action: merge'],
};
