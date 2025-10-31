import { PlaywrightTestConfig, devices } from '@playwright/test';
import { testConfig } from './testConfig';
import { OrtoniReportConfig } from 'ortoni-report';

const ENV = process.env.npm_config_ENV;

if (!ENV || ![`qa`, `dev`, `qaApi`, `devApi`].includes(ENV)) {
  console.log(`Please provide a correct environment value after command like "--ENV=qa|dev|qaApi|devApi"`);
  process.exit();
}

const reportConfig: OrtoniReportConfig = {
  base64Image: true,
  title: "Playwright Framework with Typescript",
  showProject: true,
  filename: "OrtoniHtmlReport",
  authorName: "Akshay Pai",
  preferredTheme: "dark",
  folderPath: "html-report",
  projectName: "Playwright Framework with Typescript",
<<<<<<< HEAD
};

const config: PlaywrightTestConfig = {
  // Global Setup to run before all tests
  globalSetup: `./global-setup`,

  // Sets timeout for each test case
  timeout: 120000,

  // Number of retries if test case fails
  retries: 0,

  // Reporters
  reporter: [
    [`./CustomReporterConfig.ts`],
    [`allure-playwright`],
    [`html`, { outputFolder: 'html-report', open: 'never' }],
    ['ortoni-report', reportConfig],
  ],
=======
}

const config: PlaywrightTestConfig = {

  //Global Setup to run before all tests
  globalSetup: `./global-setup`,

  //sets timeout for each test case
  timeout: 120000,

  //number of retries if test case fails
  retries: 0,

  //Reporters
  reporter: [[`./CustomReporterConfig.ts`], [`allure-playwright`], [`html`, { outputFolder: 'html-report', open: 'never' }],['ortoni-report', reportConfig]],
>>>>>>> 715b1ce7cf17651696e2ffcc6dcc467058747ff3

  projects: [
    {
      name: `Chrome`,
      use: {
<<<<<<< HEAD
        browserName: `chromium`,
        channel: `chrome`,
        baseURL: testConfig[ENV],
        headless: true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          args: ['--headless=new'], // ✅ FIXED for Chrome 130+
          slowMo: 0,
        },
=======
        // Configure the browser to use.
        browserName: `chromium`,

        //Chrome Browser Config
        channel: `chrome`,

        //Picks Base Url based on User input
        baseURL: testConfig[ENV],

        //Browser Mode
        headless: true,

        //Browser height and width
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,

        //Enable File Downloads in Chrome
        acceptDownloads: true,

        //Artifacts
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,

        //Slows down execution by ms
        launchOptions: {
          slowMo: 0,
          args: ['--headless=new']
        }
>>>>>>> 715b1ce7cf17651696e2ffcc6dcc467058747ff3
      },
    },
    {
      name: `Chromium`,
      use: {
        browserName: `chromium`,
        baseURL: testConfig[ENV],
        headless: true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
<<<<<<< HEAD
          args: ['--headless=new'], // ✅ FIXED
          slowMo: 0,
        },
      },
    },
=======
          slowMo: 0
        }
      },
    },

>>>>>>> 715b1ce7cf17651696e2ffcc6dcc467058747ff3
    {
      name: `Firefox`,
      use: {
        browserName: `firefox`,
        baseURL: testConfig[ENV],
        headless: true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
<<<<<<< HEAD
          slowMo: 0,
        },
      },
    },
=======
          slowMo: 0
        }
      },
    },

>>>>>>> 715b1ce7cf17651696e2ffcc6dcc467058747ff3
    {
      name: `Edge`,
      use: {
        browserName: `chromium`,
        channel: `msedge`,
        baseURL: testConfig[ENV],
<<<<<<< HEAD
        headless: true,
=======
        headless: false,
>>>>>>> 715b1ce7cf17651696e2ffcc6dcc467058747ff3
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
<<<<<<< HEAD
          args: ['--headless=new'], // ✅ FIXED
          slowMo: 0,
        },
=======
          slowMo: 0
        }
>>>>>>> 715b1ce7cf17651696e2ffcc6dcc467058747ff3
      },
    },
    {
      name: `WebKit`,
      use: {
        browserName: `webkit`,
        baseURL: testConfig[ENV],
        headless: true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
<<<<<<< HEAD
          slowMo: 0,
        },
=======
          slowMo: 0
        }
>>>>>>> 715b1ce7cf17651696e2ffcc6dcc467058747ff3
      },
    },
    {
      name: `Device`,
      use: {
        ...devices[`Pixel 4a (5G)`],
        browserName: `chromium`,
        channel: `chrome`,
        baseURL: testConfig[ENV],
        headless: true,
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
<<<<<<< HEAD
          args: ['--headless=new'], // ✅ FIXED for device emulation
          slowMo: 0,
        },
      },
    },
    {
      name: `DB`,
=======
          slowMo: 0
        }
      },
    },
    {
      name: `DB`
>>>>>>> 715b1ce7cf17651696e2ffcc6dcc467058747ff3
    },
    {
      name: `API`,
      use: {
<<<<<<< HEAD
        baseURL: testConfig[ENV],
      },
    },
  ],
};

export default config;
=======
        baseURL: testConfig[ENV]
      }
    }
  ],
};
export default config;
>>>>>>> 715b1ce7cf17651696e2ffcc6dcc467058747ff3
