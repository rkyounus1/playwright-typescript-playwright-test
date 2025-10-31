<<<<<<< HEAD
import { test as baseTest } from '@playwright/test';
=======
import { TestInfo, test as baseTest } from '@playwright/test';
>>>>>>> 715b1ce7cf17651696e2ffcc6dcc467058747ff3
import { LoginPage } from '@pages/LoginPage';
import { ElementsPage } from '@pages/ElementsPage';
import { AlertsFrameWindowsPage } from '@pages/AlertsFrameWindowsPage';
import { WidgetsPage } from '@pages/WidgetsPage';
import { InteractionsPage } from '@pages/InteractionsPage';
import { WebActions } from '@lib/WebActions';
import AxeBuilder from '@axe-core/playwright';
<<<<<<< HEAD
import { SwagLoginPage } from '@pages/Swagloginpage';

type Fixtures = {
  webActions: WebActions;
  loginPage: LoginPage;
  swagLoginPage: SwagLoginPage;
  elementsPage: ElementsPage;
  alertsFrameWindowsPage: AlertsFrameWindowsPage;
  widgetsPage: WidgetsPage;
  interactionsPage: InteractionsPage;
  makeAxeBuilder: () => AxeBuilder;
};

const test = baseTest.extend<Fixtures>({
  webActions: async ({ page, context }, use) => {
    await use(new WebActions(page, context));
  },
  loginPage: async ({ page, context }, use) => {
    await use(new LoginPage(page, context));
  },
  swagLoginPage: async ({ page, context }, use) => {
    await use(new SwagLoginPage(page, context));
  },
  elementsPage: async ({ page, context }, use) => {
    await use(new ElementsPage(page, context));
  },
  alertsFrameWindowsPage: async ({ page, context }, use) => {
    await use(new AlertsFrameWindowsPage(page, context));
  },
  widgetsPage: async ({ page, context }, use) => {
    await use(new WidgetsPage(page, context));
  },
  interactionsPage: async ({ page, context }, use) => {
    await use(new InteractionsPage(page, context));
  },
  makeAxeBuilder: async ({ page }, use) => {
    const builder = () =>
      new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .exclude('#commonly-reused-element-with-known-issue');
    await use(builder);
  },
});

export default test;
=======
import { SwagLoginPage } from '@pages/SwagLoginPage';

const test = baseTest.extend<{
    webActions: WebActions;
    loginPage: LoginPage;
    swagLoginPage: SwagLoginPage;
    elementsPage: ElementsPage;
    alertsFrameWindowsPage: AlertsFrameWindowsPage;
    widgetsPage: WidgetsPage;
    interactionsPage: InteractionsPage;
    makeAxeBuilder: AxeBuilder;
    testInfo: TestInfo;
}>({
    webActions: async ({ page, context }, use) => {
        await use(new WebActions(page, context));
    },
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context));
    },
    swagLoginPage: async ({ page, context }, use) => {
        await use(new SwagLoginPage(page, context));
    },
    elementsPage: async ({ page, context }, use) => {
        await use(new ElementsPage(page, context));
    },
    alertsFrameWindowsPage: async ({ page, context }, use) => {
        await use(new AlertsFrameWindowsPage(page, context));
    },
    widgetsPage: async ({ page, context }, use) => {
        await use(new WidgetsPage(page, context));
    },
    interactionsPage: async ({ page, context }, use) => {
        await use(new InteractionsPage(page, context));
    },
    makeAxeBuilder: async ({ page }, use) => {
        await use(new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .exclude('#commonly-reused-element-with-known-issue'));
    }
})

export default test;
>>>>>>> 715b1ce7cf17651696e2ffcc6dcc467058747ff3
