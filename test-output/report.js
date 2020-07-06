$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("backgroung.feature");
formatter.feature({
  "line": 1,
  "name": "Test Background",
  "description": "",
  "id": "test-background",
  "keyword": "Feature"
});
formatter.before({
  "duration": 433700,
  "status": "passed"
});
formatter.before({
  "duration": 111200,
  "status": "passed"
});
formatter.before({
  "duration": 149800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is Logged In",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user navigates to the login page",
  "rows": [
    {
      "cells": [
        "https://ui.freecrm.com/"
      ],
      "line": 5
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user submit username and password",
  "rows": [
    {
      "cells": [
        "josephkuruvilla891@gmail.com",
        "Jakay07@"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundSTepDefinition.user_navigates_to_the_login_page(DataTable)"
});
formatter.result({
  "duration": 10644678300,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundSTepDefinition.user_submit_username_and_password(DataTable)"
});
formatter.result({
  "duration": 587144400,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundSTepDefinition.user_is_logged_in()"
});
formatter.result({
  "duration": 3124025000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Create Event",
  "description": "",
  "id": "test-background;create-event",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "navigate to Create New Event page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user submits Calendar details",
  "rows": [
    {
      "cells": [
        "New Event Calendar"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "calendar should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundSTepDefinition.navigate_to_Create_New_Event_page()"
});
formatter.result({
  "duration": 626679400,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundSTepDefinition.user_submits_Calendar_details(DataTable)"
});
formatter.result({
  "duration": 10084829100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027title\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-A4R0EHC\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:62715}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f4f4193c74516219bffb7979bb530904\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027title\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.BackgroundSTepDefinition.user_submits_Calendar_details(BackgroundSTepDefinition.java:62)\r\n\tat ✽.When user submits Calendar details(backgroung.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BackgroundSTepDefinition.calendar_should_be_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 142100,
  "status": "passed"
});
formatter.after({
  "duration": 108100,
  "status": "passed"
});
formatter.after({
  "duration": 95500,
  "status": "passed"
});
formatter.before({
  "duration": 108900,
  "status": "passed"
});
formatter.before({
  "duration": 64500,
  "status": "passed"
});
formatter.before({
  "duration": 83100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is Logged In",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user navigates to the login page",
  "rows": [
    {
      "cells": [
        "https://ui.freecrm.com/"
      ],
      "line": 5
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user submit username and password",
  "rows": [
    {
      "cells": [
        "josephkuruvilla891@gmail.com",
        "Jakay07@"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundSTepDefinition.user_navigates_to_the_login_page(DataTable)"
});
formatter.result({
  "duration": 10387351500,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundSTepDefinition.user_submit_username_and_password(DataTable)"
});
formatter.result({
  "duration": 610465100,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundSTepDefinition.user_is_logged_in()"
});
formatter.result({
  "duration": 1824675000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Create Contact",
  "description": "",
  "id": "test-background;create-contact",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "navigate to Create New Contact page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user submits contact details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName"
      ],
      "line": 19
    },
    {
      "cells": [
        "Admin",
        "Super"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "contact should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundSTepDefinition.navigate_to_Create_New_Contact_page()"
});
formatter.result({
  "duration": 1031476100,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundSTepDefinition.user_submits_contact_details(DataTable)"
});
formatter.result({
  "duration": 10275835400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027first_name\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-A4R0EHC\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:62748}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 98e44a49478ae4b710d8d0a53432c881\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027first_name\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.BackgroundSTepDefinition.user_submits_contact_details(BackgroundSTepDefinition.java:88)\r\n\tat ✽.When user submits contact details(backgroung.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "BackgroundSTepDefinition.contact_should_be_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 80700,
  "status": "passed"
});
formatter.after({
  "duration": 72600,
  "status": "passed"
});
formatter.after({
  "duration": 82900,
  "status": "passed"
});
formatter.uri("calendar.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM Calendar Features",
  "description": "",
  "id": "freecrm-calendar-features",
  "keyword": "Feature"
});
formatter.before({
  "duration": 100400,
  "status": "passed"
});
formatter.before({
  "duration": 94200,
  "status": "passed"
});
formatter.before({
  "duration": 110700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Using Data Table"
    }
  ],
  "line": 4,
  "name": "Validate Calendar page",
  "description": "",
  "id": "freecrm-calendar-features;validate-calendar-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is in login page2",
  "rows": [
    {
      "cells": [
        "https://ui.freecrm.com/"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of the login page is FreeCRM2",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user Logins2",
  "rows": [
    {
      "cells": [
        "josephkuruvilla891@gmail.com",
        "Jakay07@"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on Calendar and Validate page2",
  "keyword": "And "
});
formatter.match({
  "location": "CalendarStepDefinition.user_is_in_login_page2(DataTable)"
});
formatter.result({
  "duration": 10417657100,
  "status": "passed"
});
formatter.match({
  "location": "CalendarStepDefinition.title_of_the_login_page_is_FreeCRM2()"
});
formatter.result({
  "duration": 10866700,
  "status": "passed"
});
formatter.match({
  "location": "CalendarStepDefinition.user_Logins2(DataTable)"
});
formatter.result({
  "duration": 901805500,
  "status": "passed"
});
formatter.match({
  "location": "CalendarStepDefinition.click_on_Calendar_and_Validate_page2()"
});
formatter.result({
  "duration": 3756601800,
  "status": "passed"
});
formatter.after({
  "duration": 65300,
  "status": "passed"
});
formatter.after({
  "duration": 54800,
  "status": "passed"
});
formatter.after({
  "duration": 61500,
  "status": "passed"
});
formatter.uri("contacts.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM Contacts Features",
  "description": "",
  "id": "freecrm-contacts-features",
  "keyword": "Feature"
});
formatter.before({
  "duration": 91100,
  "status": "passed"
});
formatter.before({
  "duration": 56400,
  "status": "passed"
});
formatter.before({
  "duration": 68600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#DataTable Maps"
    }
  ],
  "line": 4,
  "name": "Validate Contacts page",
  "description": "",
  "id": "freecrm-contacts-features;validate-contacts-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is in login page3",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the login page is FreeCRM3",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Logins3",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "josephkuruvilla891@gmail.com",
        "Jakay07@"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on Contacts and Validate page3",
  "keyword": "And "
});
formatter.match({
  "location": "ContactsStepDefinition.user_is_in_login_page3()"
});
formatter.result({
  "duration": 11845251400,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.title_of_the_login_page_is_FreeCRM3()"
});
formatter.result({
  "duration": 8842000,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.user_Logins3(DataTable)"
});
formatter.result({
  "duration": 813512500,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.click_on_Contacts_and_Validate_page3()"
});
formatter.result({
  "duration": 3384424100,
  "status": "passed"
});
formatter.after({
  "duration": 64900,
  "status": "passed"
});
formatter.after({
  "duration": 61100,
  "status": "passed"
});
formatter.after({
  "duration": 47700,
  "status": "passed"
});
formatter.before({
  "duration": 80900,
  "status": "passed"
});
formatter.before({
  "duration": 59200,
  "status": "passed"
});
formatter.before({
  "duration": 78100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "#DataTable Maps - multiple Test Data"
    }
  ],
  "line": 13,
  "name": "Create New Contact",
  "description": "",
  "id": "freecrm-contacts-features;create-new-contact",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user is in login page3",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "title of the login page is FreeCRM3",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user Logins3",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17
    },
    {
      "cells": [
        "josephkuruvilla891@gmail.com",
        "Jakay07@"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "create Contact",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName"
      ],
      "line": 20
    },
    {
      "cells": [
        "Admin",
        "Super"
      ],
      "line": 21
    },
    {
      "cells": [
        "Admin",
        "Services"
      ],
      "line": 22
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ContactsStepDefinition.user_is_in_login_page3()"
});
formatter.result({
  "duration": 9458476000,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.title_of_the_login_page_is_FreeCRM3()"
});
formatter.result({
  "duration": 37818300,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.user_Logins3(DataTable)"
});
formatter.result({
  "duration": 729643300,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.create_Contact(DataTable)"
});
formatter.result({
  "duration": 12696189900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027first_name\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-A4R0EHC\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:62859}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4090b719a1b5a23e49a3a47c3fa20c8b\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027first_name\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.ContactsStepDefinition.create_Contact(ContactsStepDefinition.java:61)\r\n\tat ✽.And create Contact(contacts.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 190000,
  "status": "passed"
});
formatter.after({
  "duration": 90500,
  "status": "passed"
});
formatter.after({
  "duration": 178800,
  "status": "passed"
});
formatter.uri("hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Test Hooks",
  "description": "",
  "id": "test-hooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 105700,
  "status": "passed"
});
formatter.before({
  "duration": 72200,
  "status": "passed"
});
formatter.before({
  "duration": 110700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "First Scenario",
  "description": "",
  "id": "test-hooks;first-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "this is First step",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "this is Second Step",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "this is Third Step",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.this_is_First_step()"
});
formatter.result({
  "duration": 235400,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.this_is_Second_Step()"
});
formatter.result({
  "duration": 147500,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.this_is_Third_Step()"
});
formatter.result({
  "duration": 175800,
  "status": "passed"
});
formatter.after({
  "duration": 75600,
  "status": "passed"
});
formatter.after({
  "duration": 66900,
  "status": "passed"
});
formatter.after({
  "duration": 69100,
  "status": "passed"
});
formatter.uri("hooksExecutionOrder.feature");
formatter.feature({
  "line": 1,
  "name": "Test Hooks Execution Order",
  "description": "\r\n// Methods in HooksStepDefinition.java",
  "id": "test-hooks-execution-order",
  "keyword": "Feature"
});
formatter.before({
  "duration": 100200,
  "status": "passed"
});
formatter.before({
  "duration": 120600,
  "status": "passed"
});
formatter.before({
  "duration": 84300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "First Scenario",
  "description": "",
  "id": "test-hooks-execution-order;first-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "this is First step",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "this is Second Step",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "this is Third Step",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.this_is_First_step()"
});
formatter.result({
  "duration": 144700,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.this_is_Second_Step()"
});
formatter.result({
  "duration": 77500,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.this_is_Third_Step()"
});
formatter.result({
  "duration": 79400,
  "status": "passed"
});
formatter.after({
  "duration": 85300,
  "status": "passed"
});
formatter.after({
  "duration": 100000,
  "status": "passed"
});
formatter.after({
  "duration": 57500,
  "status": "passed"
});
formatter.before({
  "duration": 109500,
  "status": "passed"
});
formatter.before({
  "duration": 55700,
  "status": "passed"
});
formatter.before({
  "duration": 53800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Second Scenario",
  "description": "",
  "id": "test-hooks-execution-order;second-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "this is First step",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "this is Second Step",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "this is Third Step",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.this_is_First_step()"
});
formatter.result({
  "duration": 77300,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.this_is_Second_Step()"
});
formatter.result({
  "duration": 54400,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.this_is_Third_Step()"
});
formatter.result({
  "duration": 55800,
  "status": "passed"
});
formatter.after({
  "duration": 48700,
  "status": "passed"
});
formatter.after({
  "duration": 45800,
  "status": "passed"
});
formatter.after({
  "duration": 45600,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Features",
  "description": "Description: This feature will test a valid LogIn functionality",
  "id": "login-features",
  "keyword": "Feature"
});
formatter.before({
  "duration": 62200,
  "status": "passed"
});
formatter.before({
  "duration": 38800,
  "status": "passed"
});
formatter.before({
  "duration": 50700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#Example for Data Driven without using Examples Keyword"
    }
  ],
  "line": 5,
  "name": "Valid login",
  "description": "",
  "id": "login-features;valid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "navigate to Login page \"https://ui.freecrm.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user is in login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user logins using valid credentials \"josephkuruvilla891@gmail.com\" and \"Jakay07@\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "home page should be displayed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://ui.freecrm.com/",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition.navigate_to_Login_page(String)"
});
formatter.result({
  "duration": 9146967700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 8516400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "josephkuruvilla891@gmail.com",
      "offset": 37
    },
    {
      "val": "Jakay07@",
      "offset": 72
    }
  ],
  "location": "LoginStepDefinition.user_logins_using_valid_credentials(String,String)"
});
formatter.result({
  "duration": 633210700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.home_page_should_be_displayed()"
});
formatter.result({
  "duration": 1900865900,
  "status": "passed"
});
formatter.after({
  "duration": 78300,
  "status": "passed"
});
formatter.after({
  "duration": 68100,
  "status": "passed"
});
formatter.after({
  "duration": 57200,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 11,
      "value": "#Example for Data Driven using Examples Keyword"
    }
  ],
  "line": 12,
  "name": "Invalid Login",
  "description": "",
  "id": "login-features;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "navigate to Login page \"https://ui.freecrm.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user is in login page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user logins using invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user should not be able to login",
  "keyword": "But "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-features;invalid-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "login-features;invalid-login;;1"
    },
    {
      "cells": [
        "josephkuruvilla",
        "Jakay07@"
      ],
      "line": 20,
      "id": "login-features;invalid-login;;2"
    },
    {
      "cells": [
        "josephkuruvilla891@gmail.com",
        "jayay07"
      ],
      "line": 21,
      "id": "login-features;invalid-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 80700,
  "status": "passed"
});
formatter.before({
  "duration": 54800,
  "status": "passed"
});
formatter.before({
  "duration": 78300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Invalid Login",
  "description": "",
  "id": "login-features;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "navigate to Login page \"https://ui.freecrm.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user is in login page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user logins using invalid \"josephkuruvilla\" and \"Jakay07@\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user should not be able to login",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "https://ui.freecrm.com/",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition.navigate_to_Login_page(String)"
});
formatter.result({
  "duration": 9136628900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 6947200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "josephkuruvilla",
      "offset": 27
    },
    {
      "val": "Jakay07@",
      "offset": 49
    }
  ],
  "location": "LoginStepDefinition.user_logins_using_invalid(String,String)"
});
formatter.result({
  "duration": 525506000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_not_be_able_to_login()"
});
formatter.result({
  "duration": 1655316100,
  "status": "passed"
});
formatter.after({
  "duration": 52100,
  "status": "passed"
});
formatter.after({
  "duration": 45700,
  "status": "passed"
});
formatter.after({
  "duration": 30900,
  "status": "passed"
});
formatter.before({
  "duration": 71200,
  "status": "passed"
});
formatter.before({
  "duration": 49000,
  "status": "passed"
});
formatter.before({
  "duration": 78100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Invalid Login",
  "description": "",
  "id": "login-features;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "navigate to Login page \"https://ui.freecrm.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user is in login page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user logins using invalid \"josephkuruvilla891@gmail.com\" and \"jayay07\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user should not be able to login",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "https://ui.freecrm.com/",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition.navigate_to_Login_page(String)"
});
formatter.result({
  "duration": 9147696000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 8728200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "josephkuruvilla891@gmail.com",
      "offset": 27
    },
    {
      "val": "jayay07",
      "offset": 62
    }
  ],
  "location": "LoginStepDefinition.user_logins_using_invalid(String,String)"
});
formatter.result({
  "duration": 575739400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_not_be_able_to_login()"
});
formatter.result({
  "duration": 1532672100,
  "status": "passed"
});
formatter.after({
  "duration": 61500,
  "status": "passed"
});
formatter.after({
  "duration": 32400,
  "status": "passed"
});
formatter.after({
  "duration": 27800,
  "status": "passed"
});
formatter.uri("multipletaggedHooks.feature");
formatter.feature({
  "line": 1,
  "name": "Test Multiple Tagged Hooks",
  "description": "\r\n// Methods in HooksStepDefinition.java",
  "id": "test-multiple-tagged-hooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 60900,
  "status": "passed"
});
formatter.before({
  "duration": 38100,
  "status": "passed"
});
formatter.before({
  "duration": 113200,
  "status": "passed"
});
formatter.before({
  "duration": 60400,
  "status": "passed"
});
formatter.before({
  "duration": 71600,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "First Scenario",
  "description": "",
  "id": "test-multiple-tagged-hooks;first-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@First2"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "this is First step",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "this is Second Step",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "this is Third Step",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.this_is_First_step()"
});
formatter.result({
  "duration": 80800,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.this_is_Second_Step()"
});
formatter.result({
  "duration": 292800,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.this_is_Third_Step()"
});
formatter.result({
  "duration": 59100,
  "status": "passed"
});
formatter.after({
  "duration": 63300,
  "status": "passed"
});
formatter.after({
  "duration": 84100,
  "status": "passed"
});
formatter.after({
  "duration": 53000,
  "status": "passed"
});
formatter.after({
  "duration": 47200,
  "status": "passed"
});
formatter.after({
  "duration": 41700,
  "status": "passed"
});
formatter.before({
  "duration": 58400,
  "status": "passed"
});
formatter.before({
  "duration": 37100,
  "status": "passed"
});
formatter.before({
  "duration": 46900,
  "status": "passed"
});
formatter.before({
  "duration": 65100,
  "status": "passed"
});
formatter.before({
  "duration": 57700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Second Scenario",
  "description": "",
  "id": "test-multiple-tagged-hooks;second-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Second2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "this is First step",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "this is Second Step",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "this is Third Step",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.this_is_First_step()"
});
formatter.result({
  "duration": 72400,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.this_is_Second_Step()"
});
formatter.result({
  "duration": 51100,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.this_is_Third_Step()"
});
formatter.result({
  "duration": 55200,
  "status": "passed"
});
formatter.after({
  "duration": 59300,
  "status": "passed"
});
formatter.after({
  "duration": 48800,
  "status": "passed"
});
formatter.after({
  "duration": 40400,
  "status": "passed"
});
formatter.after({
  "duration": 49700,
  "status": "passed"
});
formatter.after({
  "duration": 47800,
  "status": "passed"
});
formatter.before({
  "duration": 62400,
  "status": "passed"
});
formatter.before({
  "duration": 41900,
  "status": "passed"
});
formatter.before({
  "duration": 54600,
  "status": "passed"
});
formatter.before({
  "duration": 56400,
  "status": "passed"
});
formatter.before({
  "duration": 76700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Third Scenario",
  "description": "",
  "id": "test-multiple-tagged-hooks;third-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Third2"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "this is First step",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "this is Second Step",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "this is Third Step",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.this_is_First_step()"
});
formatter.result({
  "duration": 70900,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.this_is_Second_Step()"
});
formatter.result({
  "duration": 62400,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.this_is_Third_Step()"
});
formatter.result({
  "duration": 47300,
  "status": "passed"
});
formatter.after({
  "duration": 58700,
  "status": "passed"
});
formatter.after({
  "duration": 52200,
  "status": "passed"
});
formatter.after({
  "duration": 39000,
  "status": "passed"
});
formatter.after({
  "duration": 47700,
  "status": "passed"
});
formatter.after({
  "duration": 41200,
  "status": "passed"
});
formatter.uri("tag.feature");
formatter.feature({
  "line": 1,
  "name": "Test Tags",
  "description": "",
  "id": "test-tags",
  "keyword": "Feature"
});
formatter.before({
  "duration": 57400,
  "status": "passed"
});
formatter.before({
  "duration": 43600,
  "status": "passed"
});
formatter.before({
  "duration": 54300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Valid login",
  "description": "",
  "id": "test-tags;valid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "navigate to Login page \"https://ui.freecrm.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is in login page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user logins using valid credentials \"josephkuruvilla891@gmail.com\" and \"Jakay07@\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "home page should be displayed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://ui.freecrm.com/",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition.navigate_to_Login_page(String)"
});
formatter.result({
  "duration": 9407758000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 16400800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "josephkuruvilla891@gmail.com",
      "offset": 37
    },
    {
      "val": "Jakay07@",
      "offset": 72
    }
  ],
  "location": "LoginStepDefinition.user_logins_using_valid_credentials(String,String)"
});
formatter.result({
  "duration": 604722000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.home_page_should_be_displayed()"
});
formatter.result({
  "duration": 2455154700,
  "status": "passed"
});
formatter.after({
  "duration": 49900,
  "status": "passed"
});
formatter.after({
  "duration": 33000,
  "status": "passed"
});
formatter.after({
  "duration": 35000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Invalid Login",
  "description": "",
  "id": "test-tags;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "navigate to Login page \"https://ui.freecrm.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user is in login page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user logins using invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user should not be able to login",
  "keyword": "But "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "test-tags;invalid-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "test-tags;invalid-login;;1"
    },
    {
      "cells": [
        "josephkuruvilla",
        "Jakay07@"
      ],
      "line": 18,
      "id": "test-tags;invalid-login;;2"
    },
    {
      "cells": [
        "josephkuruvilla891@gmail.com",
        "jayay07"
      ],
      "line": 19,
      "id": "test-tags;invalid-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5882300,
  "status": "passed"
});
formatter.before({
  "duration": 573900,
  "status": "passed"
});
formatter.before({
  "duration": 795500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Invalid Login",
  "description": "",
  "id": "test-tags;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "navigate to Login page \"https://ui.freecrm.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user is in login page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user logins using invalid \"josephkuruvilla\" and \"Jakay07@\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user should not be able to login",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "https://ui.freecrm.com/",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition.navigate_to_Login_page(String)"
});
formatter.result({
  "duration": 10507597200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 20489000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "josephkuruvilla",
      "offset": 27
    },
    {
      "val": "Jakay07@",
      "offset": 49
    }
  ],
  "location": "LoginStepDefinition.user_logins_using_invalid(String,String)"
});
formatter.result({
  "duration": 576085100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_not_be_able_to_login()"
});
formatter.result({
  "duration": 1573577500,
  "status": "passed"
});
formatter.after({
  "duration": 603200,
  "status": "passed"
});
formatter.after({
  "duration": 446300,
  "status": "passed"
});
formatter.after({
  "duration": 438500,
  "status": "passed"
});
formatter.before({
  "duration": 95900,
  "status": "passed"
});
formatter.before({
  "duration": 56300,
  "status": "passed"
});
formatter.before({
  "duration": 79700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Invalid Login",
  "description": "",
  "id": "test-tags;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "navigate to Login page \"https://ui.freecrm.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user is in login page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user logins using invalid \"josephkuruvilla891@gmail.com\" and \"jayay07\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user should not be able to login",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "https://ui.freecrm.com/",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition.navigate_to_Login_page(String)"
});
formatter.result({
  "duration": 10110862400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_in_login_page()"
});
formatter.result({
  "duration": 28405400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "josephkuruvilla891@gmail.com",
      "offset": 27
    },
    {
      "val": "jayay07",
      "offset": 62
    }
  ],
  "location": "LoginStepDefinition.user_logins_using_invalid(String,String)"
});
formatter.result({
  "duration": 836933600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_not_be_able_to_login()"
});
formatter.result({
  "duration": 1542989200,
  "status": "passed"
});
formatter.after({
  "duration": 65400,
  "status": "passed"
});
formatter.after({
  "duration": 54500,
  "status": "passed"
});
formatter.after({
  "duration": 45400,
  "status": "passed"
});
formatter.before({
  "duration": 46100,
  "status": "passed"
});
formatter.before({
  "duration": 32500,
  "status": "passed"
});
formatter.before({
  "duration": 53600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Validate Calendar page",
  "description": "",
  "id": "test-tags;validate-calendar-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@SmokeTest"
    },
    {
      "line": 21,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "user is in login page2",
  "rows": [
    {
      "cells": [
        "https://ui.freecrm.com/"
      ],
      "line": 24
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "title of the login page is FreeCRM2",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user Logins2",
  "rows": [
    {
      "cells": [
        "josephkuruvilla891@gmail.com",
        "Jakay07@"
      ],
      "line": 27
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "click on Calendar and Validate page2",
  "keyword": "And "
});
formatter.match({
  "location": "CalendarStepDefinition.user_is_in_login_page2(DataTable)"
});
formatter.result({
  "duration": 10586616900,
  "status": "passed"
});
formatter.match({
  "location": "CalendarStepDefinition.title_of_the_login_page_is_FreeCRM2()"
});
formatter.result({
  "duration": 9506800,
  "status": "passed"
});
formatter.match({
  "location": "CalendarStepDefinition.user_Logins2(DataTable)"
});
formatter.result({
  "duration": 530756500,
  "status": "passed"
});
formatter.match({
  "location": "CalendarStepDefinition.click_on_Calendar_and_Validate_page2()"
});
formatter.result({
  "duration": 2764230000,
  "status": "passed"
});
formatter.after({
  "duration": 41700,
  "status": "passed"
});
formatter.after({
  "duration": 39900,
  "status": "passed"
});
formatter.after({
  "duration": 36500,
  "status": "passed"
});
formatter.before({
  "duration": 49100,
  "status": "passed"
});
formatter.before({
  "duration": 39800,
  "status": "passed"
});
formatter.before({
  "duration": 60500,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Validate Contacts page",
  "description": "",
  "id": "test-tags;validate-contacts-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@SmokeTest"
    },
    {
      "line": 30,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "user is in login page3",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "title of the login page is FreeCRM3",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user Logins3",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 35
    },
    {
      "cells": [
        "josephkuruvilla891@gmail.com",
        "Jakay07@"
      ],
      "line": 36
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "click on Contacts and Validate page3",
  "keyword": "And "
});
formatter.match({
  "location": "ContactsStepDefinition.user_is_in_login_page3()"
});
formatter.result({
  "duration": 10524081900,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.title_of_the_login_page_is_FreeCRM3()"
});
formatter.result({
  "duration": 9756900,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.user_Logins3(DataTable)"
});
formatter.result({
  "duration": 588045100,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.click_on_Contacts_and_Validate_page3()"
});
formatter.result({
  "duration": 7121482000,
  "status": "passed"
});
formatter.after({
  "duration": 119700,
  "status": "passed"
});
formatter.after({
  "duration": 94700,
  "status": "passed"
});
formatter.after({
  "duration": 122300,
  "status": "passed"
});
formatter.before({
  "duration": 134600,
  "status": "passed"
});
formatter.before({
  "duration": 120700,
  "status": "passed"
});
formatter.before({
  "duration": 129000,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Create New Contact",
  "description": "",
  "id": "test-tags;create-new-contact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@SmokeTest"
    },
    {
      "line": 39,
      "name": "@RegressionTest"
    },
    {
      "line": 39,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "user is in login page3",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "title of the login page is FreeCRM3",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user Logins3",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 44
    },
    {
      "cells": [
        "josephkuruvilla891@gmail.com",
        "Jakay07@"
      ],
      "line": 45
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "click on Contacts and Validate page3",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "create Contact",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName"
      ],
      "line": 48
    },
    {
      "cells": [
        "Admin",
        "Super"
      ],
      "line": 49
    },
    {
      "cells": [
        "Admin",
        "Services"
      ],
      "line": 50
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ContactsStepDefinition.user_is_in_login_page3()"
});
formatter.result({
  "duration": 8771037500,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.title_of_the_login_page_is_FreeCRM3()"
});
formatter.result({
  "duration": 5351100,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.user_Logins3(DataTable)"
});
formatter.result({
  "duration": 503561100,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.click_on_Contacts_and_Validate_page3()"
});
formatter.result({
  "duration": 2573359700,
  "status": "passed"
});
formatter.match({
  "location": "ContactsStepDefinition.create_Contact(DataTable)"
});
formatter.result({
  "duration": 67856900,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-A4R0EHC\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:63179}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7c56055d812801b74031da2c7a308183\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Contacts\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.ContactsStepDefinition.create_Contact(ContactsStepDefinition.java:59)\r\n\tat ✽.And create Contact(tag.feature:47)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 58600,
  "status": "passed"
});
formatter.after({
  "duration": 64800,
  "status": "passed"
});
formatter.after({
  "duration": 51000,
  "status": "passed"
});
formatter.uri("taggedHooks.feature");
formatter.feature({
  "line": 1,
  "name": "Test Tagged Hooks",
  "description": "\r\n// Methods in HooksStepDefinition.java",
  "id": "test-tagged-hooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 56500,
  "status": "passed"
});
formatter.before({
  "duration": 53300,
  "status": "passed"
});
formatter.before({
  "duration": 56700,
  "status": "passed"
});
formatter.before({
  "duration": 147800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "First Scenario",
  "description": "",
  "id": "test-tagged-hooks;first-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "this is First step",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "this is Second Step",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "this is Third Step",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.this_is_First_step()"
});
formatter.result({
  "duration": 79600,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.this_is_Second_Step()"
});
formatter.result({
  "duration": 59300,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.this_is_Third_Step()"
});
formatter.result({
  "duration": 55800,
  "status": "passed"
});
formatter.after({
  "duration": 43400,
  "status": "passed"
});
formatter.after({
  "duration": 63000,
  "status": "passed"
});
formatter.after({
  "duration": 44300,
  "status": "passed"
});
formatter.after({
  "duration": 39000,
  "status": "passed"
});
formatter.before({
  "duration": 60000,
  "status": "passed"
});
formatter.before({
  "duration": 34700,
  "status": "passed"
});
formatter.before({
  "duration": 41900,
  "status": "passed"
});
formatter.before({
  "duration": 65800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Second Scenario",
  "description": "",
  "id": "test-tagged-hooks;second-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "this is First step",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "this is Second Step",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "this is Third Step",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.this_is_First_step()"
});
formatter.result({
  "duration": 77200,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.this_is_Second_Step()"
});
formatter.result({
  "duration": 57800,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.this_is_Third_Step()"
});
formatter.result({
  "duration": 74200,
  "status": "passed"
});
formatter.after({
  "duration": 45000,
  "status": "passed"
});
formatter.after({
  "duration": 67400,
  "status": "passed"
});
formatter.after({
  "duration": 36900,
  "status": "passed"
});
formatter.after({
  "duration": 46900,
  "status": "passed"
});
formatter.before({
  "duration": 69600,
  "status": "passed"
});
formatter.before({
  "duration": 43700,
  "status": "passed"
});
formatter.before({
  "duration": 63200,
  "status": "passed"
});
formatter.before({
  "duration": 78600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Third Scenario",
  "description": "",
  "id": "test-tagged-hooks;third-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Third"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "this is First step",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "this is Second Step",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "this is Third Step",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.this_is_First_step()"
});
formatter.result({
  "duration": 83800,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.this_is_Second_Step()"
});
formatter.result({
  "duration": 57800,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefinition.this_is_Third_Step()"
});
formatter.result({
  "duration": 61000,
  "status": "passed"
});
formatter.after({
  "duration": 53200,
  "status": "passed"
});
formatter.after({
  "duration": 89200,
  "status": "passed"
});
formatter.after({
  "duration": 46500,
  "status": "passed"
});
formatter.after({
  "duration": 35700,
  "status": "passed"
});
});