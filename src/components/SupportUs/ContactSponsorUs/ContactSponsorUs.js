// @flow
import './ContactSponsorUs.css'

import React from 'react'
import ContactSponsorPackages from './ContactSponsorPackages/ContactSponsorPackages'

type BenefitsType = {
  es: string,
  en: string
};

type PackageType = {
  name: string,
  benefits: Array<BenefitsType>
};

type Props = {
  packages: Array<PackageType>,
  language: number
};

function ContactSponsorUs({ packages, language }: Props) {
  return (
    <div id="contact-sponsor-us" className="contact-sponsor-us">
      <ContactSponsorPackages packages={packages} language={language ? 'en' : 'es'} />
    </div>
  )
}

export default ContactSponsorUs
