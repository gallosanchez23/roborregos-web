// @flow
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import ContactSponsorUs from './ContactSponsorUs'

type BenefitsType = {
  es: string,
  en: string
};

type PackageType = {
  name: string,
  benefits: Array<BenefitsType>
};

type Props = {
  url_contact: string,
  packages: Array<PackageType>
};

type State = {
  language: string,
  translate_label: string,
  sponsor_button_label: string,
  title: Array<string>
};

const english_state: State = {
  language: 'en',
  translate_label: 'Traducir a español',
  sponsor_button_label: 'Sponsor us!',
  title: ['Would you like to support RoBorregos?', 'Join our sponsors team!'],
}

const spanish_state: State = {
  language: 'es',
  translate_label: 'Translate to english',
  sponsor_button_label: '¡Patrocinanos!',
  title: ['¿Te gustaría apoyar a RoBorregos?', '¡Sé uno de nuestros patrocinadores!'],
}

const packages_text: string = `
{
  "packages" : [
    {
      "name" : "Jumper",
      "benefits" : [
        {
          "es": "6 menciones genéricas en redes sociales (u/c bimestre)",
          "en": "6 generic mentions in social networks (bimonthly)"
        },
        {
          "es": "Invitación a eventos y newsletters",
          "en": "Invitation to events and newsletters"
        },
        {
          "es": "2 publicaciones personalizadas en Facebook (u/c semestre)",
          "en": "2 personalized posts on Facebook (biannual)"
        }
      ]
    },
    {
      "name" : "Led",
      "benefits" : [
        {
          "es": "12 menciones genéricas en redes sociales (u/c mes)",
          "en": "12 generic mentions in social networks (monthly)"
        },
        {
          "es": "2 publicaciones personalizadas en Facebook (u/c semestre)",
          "en": "2 personalized posts on Facebook (biannual)"
        }
      ]
    },
    {
      "name" : "ThirdSuperName",
      "benefits" : [
        {
          "es": "12 menciones genéricas en redes sociales (u/c mes)",
          "en": "12 generic mentions in social networks (monthly)"
        }
      ]
    }
  ]
}`

const languages: Array<string> = ['en', 'es']

const { packages } = JSON.parse(packages_text)
const url_contact = 'www.google.com'

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  if (document.body != null) {
    document.body.appendChild(container)
  } else {
    expect(document.body).not.toEqual(null)
  }
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  if (container != null) {
    container.remove()
  } else {
    expect(container).not.toEqual(null)
  }
  container = null
})

it('<ContactSponsorUs> Renders correctly', () => {
  act(() => {
    render(<ContactSponsorUs packages={packages} url_contact={url_contact} />, container)
  })
})
