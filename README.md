# Project Name : _**mokshyadham**_

## **To Add Multiple Language**

**we are using _internationalized routing_ feature of next js**

## 1. Install dependency package : (_**required**_ ) .

`yarn add next-translate`

The main goal of this library is to keep the translations as simple as possible in a Next.js environment.

## 2. After Installing package, Add the **i18n** config to your `next.config.js` file : (_**required**_ ) .

```
const nextTranslate = require("next-translate");

module.exports = {
  ...nextTranslate(),
 };

```

## 3. Add **i18n.js** config file : (_**required**_ ) .

- Create i18n.js file on root directory.
- And add all required language at locales array (i.e `locales : ["en-Us","ne"]`)

```
module.exports = {
 locales: ["en-US", "ne", "hi"],
 defaultLocale: "en-US",
 pages: {
   "*": ["menu", "service"],
   "/": ["carousel", "puja", "service"],
 },
};

```

## 4. Create your namespaces files : (_**required**_ ) .

By default the namespaces are specified on the /locales root directory in this way:

```
./locales
├── ne
│   ├── menu.json
│   └── carousel.json
├── en-US
│   ├── menu.json
│   └── carousel.json
└── hi
    ├── menu.json
    └── carousel.json
```

## 5. Create json files in `./locales` folder : (_**required**_ ) .

- ### File path : _**./locales/ne/menu.json**_

```
{
  "home": "गृह पृष्ठ",
  "gallery": "ग्यालरी",
  "our_branch": "हाम्रा शाखा",
}
```

- write other file ( i.e `./locales/en-US/menu.json` ) as a same format .

## 6. Use translations ( i.e.`useTranslation()` hook ) in your pages : (_**required**_ ) .

- ### File path : _**./src/components/NavBar.tsx**_

```
import useTranslation from 'next-translate/useTranslation'

export const Navbar = () => {
  const { t, lang } = useTranslation('menu')
  return (
      <div>Hello world</div>
      );
     })}
  )
}
```

## 7. Modify your constants file ( i.e `menuItems.ts` ) : (_**required**_ ) .

- ### File path : _**./src/constants**_

```
const menus = [
  {
    id: 1,
    name: "home",
    url: "/",
    isLink: true,
  },
  {
    id: 2,
    name: gallery,
    url: "/gallery",
    isLink: true,
  },
  ]
```

To

```
import { Translate } from "next-translate";

const menus = (t: Translate) => [
  {
    id: 1,
    name: t("home"), // t is a function that takes key (i.e key = "home") as argument which is used to get the translation from the particular ./locales/json as shown in step no:5 .
    url: "/",
    isLink: true,
  },
  {
    id: 2,
    name: t("gallery"),
    url: "/gallery",
    isLink: true,
  },
  ]
```

## 8. After modified constants file ( i.e `menuItems.ts` ) : (_**required**_ ) .

- Then, use the translations in the page .
- ### File path : _**./src/components/NavBar.tsx**_

```
import useTranslation from 'next-translate/useTranslation'
import menus from "../../constants/menuConstant";

export const Navbar = () => {
  const { t, lang } = useTranslation('menu')
  return (
      <div>
       {menus(t)?.map((menu: any) => {
              return (
                <DropDownOpen
                  menu={menu}
                  setIsOpen={setIsOpen}
                  key={menu.id}
                  bgColor={menu.subItems?.bgColor}
                />
              );
            })}
      </div>
      );
     })}
  )
}
```

## 9. Now you are able to see changes on UI

## 10. To Change Language you can create Ui components (i.e `select`) as shown below : (_**optional**_ ) .

```
import { useRouter } from "next/router";

const TopBar = () => {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e: any) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };
  return (
      <select
          onChange={changeLanguage}
          defaultValue={locale}
          className="text-primary mx-10 border-3 border-green-500"
        >
          <option value="en-US">ENGLISH</option>
          <option value="ne">NEPALI</option>
          <option value="hi">HINDI</option>
        </select>
     )
};
```

## 11. To add another language follow same steps from 3 to 10.
